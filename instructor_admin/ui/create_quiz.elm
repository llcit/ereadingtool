import Html exposing (..)
import Html.Attributes exposing (classList, attribute)

import Html.Events exposing (onClick, onBlur, onInput, onMouseOver, onCheck, onMouseOut, onMouseLeave)

import Http
import HttpHelpers exposing (post_with_headers, put_with_headers)

import Config exposing (text_api_endpoint, quiz_api_endpoint)
import Flags

import Quiz.Model
import Quiz.Component exposing (QuizComponent, QuizViewParams)
import Quiz.Field exposing (QuizIntro, QuizTitle, QuizTags)
import Quiz.Encode

import Views
import Profile
import Debug
import Json.Decode as Decode
import Json.Encode

import Date.Utils
import Text.Model exposing (Text, TextDifficulty)
import Quiz.Model

import Navigation
import Quiz.Decode

import Time

import Text.View
import Text.Update

import Task

import Text.Subscriptions

import Ports exposing (ckEditor, ckEditorUpdate)


type alias Flags = Flags.Flags { quiz: Maybe Json.Encode.Value }
type alias InstructorUser = String

type Mode = EditMode | CreateMode | ReadOnlyMode InstructorUser

type QuizField = Title QuizTitle | Intro QuizIntro | Tags QuizTags

type Msg =
    UpdateTextDifficultyOptions (Result Http.Error (List TextDifficulty))
  | SubmitQuiz
  | Submitted (Result Http.Error Quiz.Decode.QuizCreateResp)
  | Updated (Result Http.Error Quiz.Decode.QuizUpdateResp)
  | TextComponentMsg Text.Update.Msg
  | ToggleEditable QuizField Bool
  | UpdateQuizAttributes String String
  | UpdateFromCKEditor (String, String)
  | QuizJSONDecode (Result String QuizComponent)
  | ClearMessages Time.Time

type alias Model = {
    flags : Flags
  , mode : Mode
  , profile : Profile.Profile
  , success_msg : Maybe String
  , error_msg : Maybe String
  , quiz_component : QuizComponent
  , question_difficulties : List TextDifficulty }

type alias Filter = List String

init : Flags -> (Model, Cmd Msg)
init flags = ({
        flags=flags
      , mode=CreateMode
      , success_msg=Nothing
      , error_msg=Nothing
      , profile=Profile.init_profile flags
      , quiz_component=Quiz.Component.emptyQuizComponent
      , question_difficulties=[]
  }, Cmd.batch [ retrieveTextDifficultyOptions, (quizJSONtoComponent flags.quiz) ])

textDifficultyDecoder : Decode.Decoder (List TextDifficulty)
textDifficultyDecoder = Decode.keyValuePairs Decode.string

quizJSONtoComponent : Maybe Json.Encode.Value -> Cmd Msg
quizJSONtoComponent quiz =
  case quiz of
      Just json -> Task.attempt QuizJSONDecode
        (case (Decode.decodeValue Quiz.Decode.quizDecoder json) of
           Ok quiz -> Task.succeed (Quiz.Component.init quiz)
           Err err -> Task.fail err)
      _ -> Cmd.none

retrieveTextDifficultyOptions : Cmd Msg
retrieveTextDifficultyOptions =
  let request = Http.get (String.join "?" [text_api_endpoint, "difficulties=list"]) textDifficultyDecoder
  in Http.send UpdateTextDifficultyOptions request

update : Msg -> Model -> (Model, Cmd Msg)
update msg model = case msg of
    TextComponentMsg msg ->
      (Text.Update.update msg model)

    SubmitQuiz ->
      let
        quiz = Quiz.Component.quiz model.quiz_component
      in
        case model.mode of
          ReadOnlyMode write_locker ->
            ({ model | success_msg = Just <| "Quiz is locked by " ++ write_locker}, Cmd.none)
          EditMode ->
            ({ model | error_msg = Nothing, success_msg = Nothing }, update_quiz model.flags.csrftoken quiz)
          CreateMode ->
            ({ model | error_msg = Nothing, success_msg = Nothing }, post_quiz model.flags.csrftoken quiz)

    QuizJSONDecode result ->
      case result of
        Ok quiz_component ->
          let
            quiz = Quiz.Component.quiz (Quiz.Component.set_intro_editable quiz_component True)
          in
            case quiz.write_locker of
              Just write_locker ->
                ({ model |
                     quiz_component=quiz_component
                   , mode=ReadOnlyMode write_locker
                   , error_msg=Just <| "READONLY: quiz is currently being edited by " ++ write_locker
                 }, Quiz.Component.reinitialize_ck_editors quiz_component)
              Nothing ->
                ({ model |
                     quiz_component=quiz_component
                   , mode=EditMode
                   , success_msg=Just <| "editing '" ++ quiz.title ++ "' quiz"
                 }, Quiz.Component.reinitialize_ck_editors quiz_component)

        Err err -> let _ = Debug.log "quiz decode error" err in
          ({ model |
              error_msg = (Just <| "Something went wrong loading the quiz from the server.")
            , success_msg = (Just <| "Editing a new quiz") }, Cmd.none)

    ClearMessages time ->
      ({ model | success_msg = Nothing }, Cmd.none)

    Submitted (Ok quiz_create_resp) ->
      let
         quiz = Quiz.Component.quiz model.quiz_component
      in
         ({ model |
             success_msg = Just <| String.join " " [" created '" ++ quiz.title ++ "'"]
           , mode=EditMode }, Navigation.load quiz_create_resp.redirect)

    Updated (Ok quiz_update_resp) ->
      let
         quiz = Quiz.Component.quiz model.quiz_component
      in
         ({ model | success_msg = Just <| String.join " " [" saved '" ++ quiz.title ++ "'"] }, Cmd.none)

    Submitted (Err err) ->
      case err of
        Http.BadStatus resp ->
          case (Quiz.Decode.decodeRespErrors resp.body) of
            Ok errors ->
              ({ model | quiz_component = Quiz.Component.update_quiz_errors model.quiz_component errors }, Cmd.none)
            _ -> (model, Cmd.none)

        Http.BadPayload err resp -> let _ = Debug.log "submit quiz bad payload error" resp.body in
          (model, Cmd.none)

        _ -> (model, Cmd.none)

    Updated (Err err) ->
      case err of
        Http.BadStatus resp -> let _ = Debug.log "update error bad status" resp in
          case (Quiz.Decode.decodeRespErrors resp.body) of
            Ok errors ->
              ({ model | quiz_component = Quiz.Component.update_quiz_errors model.quiz_component errors }, Cmd.none)
            _ -> (model, Cmd.none)

        Http.BadPayload err resp -> let _ = Debug.log "update error bad payload" resp in
          (model, Cmd.none)

        _ -> (model, Cmd.none)

    UpdateTextDifficultyOptions (Ok difficulties) ->
      ({ model | question_difficulties = difficulties }, Cmd.none)

    -- handle user-friendly msgs
    UpdateTextDifficultyOptions (Err _) ->
      (model, Cmd.none)

    ToggleEditable quiz_field editable ->
      case quiz_field of
        Title quiz_title ->
            ({ model | quiz_component = Quiz.Component.set_title_editable model.quiz_component editable }
          , Quiz.Field.post_toggle_title quiz_title)
        Intro quiz_intro ->
            ({ model | quiz_component = Quiz.Component.set_intro_editable model.quiz_component editable }
          , Quiz.Field.post_toggle_intro quiz_intro)
        _ ->
            (model, Cmd.none)

    UpdateQuizAttributes attr_name attr_value ->
      ({ model | quiz_component = Quiz.Component.set_quiz_attribute model.quiz_component attr_name attr_value }
      , Cmd.none)

    UpdateFromCKEditor (ck_id, ck_text) ->
       ({ model | quiz_component = Quiz.Component.set_quiz_attribute model.quiz_component "introduction" ck_text }
      , Cmd.none)


post_quiz : Flags.CSRFToken -> Quiz.Model.Quiz -> Cmd Msg
post_quiz csrftoken quiz =
  let encoded_quiz = Quiz.Encode.quizEncoder quiz
      req =
    post_with_headers quiz_api_endpoint [Http.header "X-CSRFToken" csrftoken] (Http.jsonBody encoded_quiz)
    <| Quiz.Decode.quizCreateRespDecoder
  in
    Http.send Submitted req

update_quiz : Flags.CSRFToken -> Quiz.Model.Quiz -> Cmd Msg
update_quiz csrftoken quiz =
  case quiz.id of
    Just quiz_id ->
      let
        encoded_quiz = Quiz.Encode.quizEncoder quiz
        req = put_with_headers
          (String.join "" [quiz_api_endpoint, toString quiz_id, "/"]) [Http.header "X-CSRFToken" csrftoken]
          (Http.jsonBody encoded_quiz) <| Quiz.Decode.quizUpdateRespDecoder
      in
        Http.send Updated req
    _ -> Cmd.none

subscriptions : Model -> Sub Msg
subscriptions model =
  Sub.batch [
      -- text updates
      Text.Subscriptions.subscriptions TextComponentMsg model
      -- handle clearing messages
    , (case model.success_msg of
        Just msg -> Time.every (Time.second * 3) ClearMessages
        _ -> Sub.none)
      -- quiz introduction updates
    , ckEditorUpdate UpdateFromCKEditor
  ]

main : Program Flags Model Msg
main =
  Html.programWithFlags
    { init = init
    , view = view
    , subscriptions = subscriptions
    , update = update
    }

view_msg : Maybe String -> Html Msg
view_msg msg =
  let
    msg_str = (case msg of
      Just str -> String.join " " [" ", str]
      _ -> "")
  in
    Html.text msg_str

view_msgs : Model -> Html Msg
view_msgs model = div [attribute "class" "msgs"] [
    div [attribute "class" "error_msg" ] [ view_msg model.error_msg ]
  , div [attribute "class" "success_msg"] [ view_msg model.success_msg ]
  ]

view_submit : Model -> Html Msg
view_submit model =
  Html.div [classList [("submit_section", True)]] [
    Html.div [attribute "class" "submit", onClick (TextComponentMsg Text.Update.AddText)] [
        Html.img [
          attribute "src" "/static/img/add_text.svg"
        , attribute "height" "20px"
        , attribute "width" "20px"] [], Html.text "Add Text"
    ]
  , Html.div [attribute "class" "submit", onClick SubmitQuiz] [
        Html.img [
          attribute "src" "/static/img/save_disk.svg"
        , attribute "height" "20px"
        , attribute "width" "20px"] [], Html.text "Save Quiz "
    ]
  ]


view_quiz_date : QuizViewParams -> Html Msg
view_quiz_date params =
  Html.div [attribute "class" "quiz_dates"] <|
        (case params.quiz.modified_dt of
           Just modified_dt ->
             case params.quiz.last_modified_by of
               Just last_modified_by ->
                 [ span [] [ Html.text
                   ("Last Modified by " ++ last_modified_by ++ " on " ++ Date.Utils.month_day_year_fmt modified_dt) ]]
               _ -> []
           _ -> []) ++
        (case params.quiz.created_dt of
           Just created_dt ->
             case params.quiz.created_by of
               Just created_by ->
                 [ span [] [ Html.text
                   ("Created by " ++ created_by ++ " on " ++ Date.Utils.month_day_year_fmt created_dt) ] ]
               _ -> []
           _ -> [])

view_quiz_title : QuizViewParams -> (QuizViewParams -> QuizTitle -> Html Msg) -> QuizTitle -> Html Msg
view_quiz_title params edit_view quiz_title =
  case (Quiz.Field.title_editable quiz_title) of
    False ->
      Html.div [
        onClick (ToggleEditable (Title quiz_title) True)
      , classList [("editable", True), ("input_error", Quiz.Field.title_error quiz_title), ("quiz_attribute", True)]
      ] <| [
          Html.text "Title: "
        , Html.span [] [ Html.text params.quiz.title ]
      ] ++ (if (Quiz.Field.title_error quiz_title) then [] else [])
    True -> edit_view params quiz_title

edit_quiz_title : QuizViewParams -> QuizTitle -> Html Msg
edit_quiz_title params quiz_title =
  Html.input [
      attribute "type" "text"
    , attribute "value" params.quiz.title
    , attribute "id" (Quiz.Field.title_id quiz_title)
    , onInput (UpdateQuizAttributes "title")
    , classList [("quiz_attribute", True)]
    , (onBlur (ToggleEditable (Title quiz_title) False)) ] [ ]

view_quiz_introduction : QuizViewParams -> (QuizViewParams -> QuizIntro -> Html Msg) -> QuizIntro -> Html Msg
view_quiz_introduction params edit_view quiz_intro =
  case (Quiz.Field.intro_editable quiz_intro) of
    True -> div [
        onClick (ToggleEditable (Intro quiz_intro) True)
      , attribute "id" (Quiz.Field.intro_id quiz_intro)
      , classList [
          ("editable", True), ("input_error", Quiz.Field.intro_error quiz_intro), ("quiz_attribute", True)
        , ("quiz_introduction", True)
      ]] <| [
          Html.text "Intro: "
        , div [attribute "class" "quiz_introduction"] [ Html.text params.quiz.introduction ]
        ] ++ (if (Quiz.Field.intro_error quiz_intro) then [] else [])
    False -> edit_view params quiz_intro

edit_quiz_introduction : QuizViewParams -> QuizIntro -> Html Msg
edit_quiz_introduction params quiz_intro =
  Html.textarea [
      attribute "id" (Quiz.Field.intro_id quiz_intro)
    , attribute "class" "quiz_introduction"
    , onInput (UpdateQuizAttributes "introduction") ] [ Html.text params.quiz.introduction ]

view_edit_quiz_tags : QuizViewParams -> QuizTags -> Html Msg
view_edit_quiz_tags params quiz_tags =
  let
    view_tag tag = div [attribute "class" "quiz_tag"] [
      Html.img [
          attribute "src" "/static/img/cancel.svg"
        , attribute "height" "13px"
        , attribute "width" "13px" ] [], Html.text tag ]
  in
    div [classList [("input_error", Quiz.Field.tag_error quiz_tags), ("quiz_attribute", True)] ] [
        case params.quiz.tags of
          Just tags ->
            div [attribute "class" "quiz_tags"] <| [ Html.text "Tags: " ] ++ (List.map view_tag tags)
          _ ->
            div [attribute "class" "quiz_tags"] [ Html.text "Tags: " ]
      , Html.input [attribute "placeholder" "add tags.."] []
    ]

view_quiz : Model -> Html Msg
view_quiz model =
  let
    quiz_fields = Quiz.Component.quiz_fields model.quiz_component
    params = {quiz=Quiz.Component.quiz model.quiz_component, quiz_component=model.quiz_component}
  in
    div [attribute "class" "quiz_attributes"] [
      view_quiz_title params edit_quiz_title (Quiz.Field.title quiz_fields)
    , view_edit_quiz_tags params (Quiz.Field.tags quiz_fields)
    , view_quiz_introduction params edit_quiz_introduction (Quiz.Field.intro quiz_fields)
    , view_quiz_date params
    ]

view : Model -> Html Msg
view model = div [] <| [
      Views.view_header model.profile Nothing
    , (view_msgs model)
    , (Views.view_preview)
    , div [attribute "class" "quiz"] <| [
        (view_quiz model)
      , (Text.View.view_text_components TextComponentMsg
          (Quiz.Component.text_components model.quiz_component) model.question_difficulties)
    ] ++ (case model.mode of
          ReadOnlyMode write_locker -> []
          _ -> [view_submit model])
  ]
