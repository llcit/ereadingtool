module Pages.Text.Search exposing (Model, Msg, Params, page)

import Api
import Api.Config as Config exposing (Config)
import Api.Endpoint as Endpoint
import Browser.Navigation exposing (Key)
import Dict
import Help.View exposing (ArrowPlacement(..), ArrowPosition(..))
import Html exposing (..)
import Html.Attributes exposing (attribute, class, classList, href, id)
import Html.Events exposing (onClick)
import Http
import InstructorAdmin.Admin.Text as AdminText
import Ports exposing (clearInputText)
import Session exposing (Session)
import Shared
import Spa.Document exposing (Document)
import Spa.Generated.Route as Route
import Spa.Page as Page exposing (Page)
import Spa.Url exposing (Url)
import Text.Decode
import Text.Model
import Text.Search exposing (TextSearch)
import Text.Search.Difficulty exposing (DifficultySearch)
import Text.Search.Option
import Text.Search.ReadingStatus exposing (TextReadStatus, TextReadStatusSearch)
import Text.Search.Tag exposing (TagSearch)
import TextSearch.Help
import User.Profile
import User.Student.Profile as StudentProfile
import Utils.Date
import Views


page : Page Params Model Msg
page =
    Page.protectedApplication
        { init = init
        , update = update
        , subscriptions = subscriptions
        , view = view
        , save = save
        , load = load
        }



-- INIT


type alias Params =
    ()


type alias Model =
    Maybe SafeModel


type SafeModel
    = SafeModel
        { session : Session
        , config : Config
        , navKey : Key
        , results : List Text.Model.TextListItem
        , profile : User.Profile.Profile
        , textSearch : TextSearch
        , textApiEndpoint : AdminText.TextAPIEndpoint
        , help : TextSearch.Help.TextSearchHelp
        , errorMessage : Maybe String

        -- , welcome : Bool
        }


init : Shared.Model -> Url Params -> ( SafeModel, Cmd Msg )
init shared { params } =
    let
        tagSearch =
            Text.Search.Tag.new "text_tag_search"
                (Text.Search.Option.newOptions
                    (List.map (\tag -> ( tag, tag )) Shared.tags)
                )

        difficultySearch =
            Text.Search.Difficulty.new
                "text_difficulty_search"
                (Text.Search.Option.newOptions Shared.difficulties)

        statusSearch =
            Text.Search.ReadingStatus.new
                "text_status_search"
                (Text.Search.Option.newOptions Shared.statuses)

        textApiEndpoint =
            AdminText.toTextAPIEndpoint "ignored-endpoint"

        defaultSearch =
            Text.Search.new textApiEndpoint tagSearch difficultySearch statusSearch

        textSearch =
            case shared.profile of
                User.Profile.Student student_profile ->
                    case StudentProfile.studentDifficultyPreference student_profile of
                        Just difficulty ->
                            Text.Search.addDifficultyToSearch defaultSearch (Tuple.first difficulty) True

                        _ ->
                            defaultSearch

                _ ->
                    defaultSearch

        textSearchHelp =
            TextSearch.Help.init
    in
    ( SafeModel
        { session = shared.session
        , config = shared.config
        , navKey = shared.key
        , results = []
        , profile = shared.profile
        , textSearch = textSearch
        , textApiEndpoint = textApiEndpoint
        , help = textSearchHelp
        , errorMessage = Nothing

        -- , welcome = Config.showHelp shared.config
        }
    , updateResults shared.session shared.config textSearch
    )



-- UPDATE


type Msg
    = AddDifficulty String Bool
    | SelectTag String Bool
    | SelectStatus TextReadStatus Bool
    | TextSearch (Result Http.Error (List Text.Model.TextListItem))
      -- help messages
    | CloseHint TextSearch.Help.TextHelp
    | PreviousHint
    | NextHint
      -- site-wide messages
    | Logout


update : Msg -> SafeModel -> ( SafeModel, Cmd Msg )
update msg (SafeModel model) =
    case msg of
        AddDifficulty difficulty select ->
            let
                newTextSearch =
                    Text.Search.addDifficultyToSearch model.textSearch difficulty select
            in
            ( SafeModel { model | textSearch = newTextSearch, results = [] }
            , updateResults model.session model.config newTextSearch
            )

        SelectStatus status selected ->
            let
                statusSearch =
                    Text.Search.statusSearch model.textSearch

                newStatusSearch =
                    Text.Search.ReadingStatus.selectStatus statusSearch status selected

                newTextSearch =
                    Text.Search.setStatusSearch model.textSearch newStatusSearch
            in
            ( SafeModel { model | textSearch = newTextSearch, results = [] }
            , updateResults model.session model.config newTextSearch
            )

        SelectTag tagName selected ->
            let
                tagSearch =
                    Text.Search.tagSearch model.textSearch

                tagSearchInputId =
                    Text.Search.Tag.inputID tagSearch

                newTagSearch =
                    Text.Search.Tag.select_tag tagSearch tagName selected

                newTextSearch =
                    Text.Search.setTagSearch model.textSearch newTagSearch
            in
            ( SafeModel { model | textSearch = newTextSearch, results = [] }
            , Cmd.batch
                [ clearInputText tagSearchInputId
                , updateResults model.session model.config newTextSearch
                ]
            )

        TextSearch result ->
            case result of
                Ok texts ->
                    ( SafeModel { model | results = texts }, Cmd.none )

                Err err ->
                    let
                        _ =
                            Debug.log "error retrieving results" err
                    in
                    ( SafeModel { model | errorMessage = Just "An error occurred.  Please contact an administrator." }, Cmd.none )

        CloseHint helpMessage ->
            ( SafeModel { model | help = TextSearch.Help.setVisible model.help helpMessage False }
            , Cmd.none
            )

        PreviousHint ->
            ( SafeModel { model | help = TextSearch.Help.prev model.help }
            , TextSearch.Help.scrollToPrevMsg model.help
            )

        NextHint ->
            ( SafeModel { model | help = TextSearch.Help.next model.help }
            , TextSearch.Help.scrollToNextMsg model.help
            )

        Logout ->
            ( SafeModel model
            , Api.logout ()
            )


updateResults : Session -> Config -> TextSearch -> Cmd Msg
updateResults session config textSearch =
    let
        filterParams =
            Text.Search.filterParams textSearch

        queryParameters =
            List.map Endpoint.filterToStringQueryParam filterParams
    in
    if List.length filterParams > 0 then
        Api.get
            (Endpoint.textSearch (Config.restApiUrl config) queryParameters)
            (Session.cred session)
            TextSearch
            Text.Decode.textListDecoder

    else
        Cmd.none



-- VIEW


view : SafeModel -> Document Msg
view (SafeModel model) =
    { title = "Search Texts"
    , body =
        [ div []
            [ viewContent (SafeModel model)
            , Views.view_footer
            ]
        ]
    }


viewContent : SafeModel -> Html Msg
viewContent (SafeModel model) =
    div [ id "text_search" ] <|
        (if Config.showHelp model.config then
            [ viewHelpMessage ]

         else
            []
        )
            ++ [ viewSearchFilters (SafeModel model)
               , viewSearchResults model.results
               , viewSearchFooter (SafeModel model)
               ]


viewHelpMessage : Html Msg
viewHelpMessage =
    div [ id "text_search_help_msg" ]
        [ div []
            [ Html.text "Welcome."
            ]
        , div []
            [ Html.text
                """Use this page to find texts for your proficiency level and on topics that are of interest to you."""
            ]
        , div []
            [ Html.text
                """To walk through a demonstration of how the text and questions appear, please select Intermediate-Mid
       from the Difficulty tags and then Other from the the Topic tags, and Unread from the Status Filters.
       A text entitled Demo Text should appear at the top of the list.  Click on the title to go to this text."""
            ]
        ]


viewSearchFilters : SafeModel -> Html Msg
viewSearchFilters (SafeModel model) =
    div [ id "text_search_filters" ]
        [ div [ id "text_search_filters_label" ] [ Html.text "Filters" ]
        , div [ class "search_filter" ] <|
            [ div [ class "search_filter_title" ] [ Html.text "Difficulty" ]
            , div [] (viewDifficulties (Text.Search.difficultySearch model.textSearch))
            ]
                ++ viewDifficultyFilterHint (SafeModel model)
        , div [ class "search_filter" ]
            [ div [ class "search_filter_title" ] [ Html.text "Tags" ]
            , div [] <|
                [ viewTags (Text.Search.tagSearch model.textSearch) ]
                    ++ viewTopicFilterHint (SafeModel model)
            ]
        , div [ class "search_filter" ] <|
            [ div [ class "search_filter_title" ] [ Html.text "Read Status" ]
            , div [] (viewStatuses (Text.Search.statusSearch model.textSearch))
            ]
                ++ viewStatusFilterHint (SafeModel model)
        ]


viewSearchResults : List Text.Model.TextListItem -> Html Msg
viewSearchResults textListItems =
    let
        viewSearchResult textItem =
            let
                commaDelimitedTags =
                    case textItem.tags of
                        Just tags ->
                            String.join ", " tags

                        Nothing ->
                            ""

                sectionsCompleted =
                    case textItem.text_sections_complete of
                        Just sectionsComplete ->
                            String.fromInt sectionsComplete ++ " / " ++ String.fromInt textItem.text_section_count

                        Nothing ->
                            "0 / " ++ String.fromInt textItem.text_section_count

                lastRead =
                    case textItem.last_read_dt of
                        Just dt ->
                            Utils.Date.monthDayYearFormat dt

                        Nothing ->
                            ""

                questionsCorrect =
                    case textItem.questions_correct of
                        Just correct ->
                            String.fromInt (Tuple.first correct) ++ " out of " ++ String.fromInt (Tuple.second correct)

                        Nothing ->
                            "None"
            in
            div [ class "search_result" ]
                [ div [ class "result_item" ]
                    [ div [ class "result_item_title" ] [ Html.a [ attribute "href" textItem.uri ] [ Html.text textItem.title ] ]
                    , div [ class "sub_description" ] [ Html.text "Title" ]
                    ]
                , div [ class "result_item" ]
                    [ div [ class "result_item_title" ] [ Html.text textItem.difficulty ]
                    , div [ class "sub_description" ] [ Html.text "Difficulty" ]
                    ]
                , div [ class "result_item" ]
                    [ div [ class "result_item_title" ] [ Html.text textItem.author ]
                    , div [ class "sub_description" ] [ Html.text "Author" ]
                    ]
                , div [ class "result_item" ]
                    [ div [ class "result_item_title" ] [ Html.text sectionsCompleted ]
                    , div [ class "sub_description" ] [ Html.text "Sections Complete" ]
                    ]
                , div [ class "result_item" ]
                    [ div [ class "result_item_title" ] [ Html.text commaDelimitedTags ]
                    , div [ class "sub_description" ] [ Html.text "Tags" ]
                    ]
                , div [ class "result_item" ]
                    [ div [ class "result_item_title" ] [ Html.text lastRead ]
                    , div [ class "sub_description" ] [ Html.text "Last Read" ]
                    ]
                , div [ class "result_item" ]
                    [ div [ class "result_item_title" ] [ Html.text questionsCorrect ]
                    , div [ class "sub_description" ] [ Html.text "Questions Correct" ]
                    ]
                ]
    in
    div [ id "text_search_results" ] (List.map viewSearchResult textListItems)


viewSearchFooter : SafeModel -> Html Msg
viewSearchFooter (SafeModel model) =
    let
        resultsLength =
            List.length model.results

        entries =
            if resultsLength == 1 then
                "entry"

            else
                "entries"

        successText =
            String.join " " [ "Showing", String.fromInt resultsLength, entries ]

        txt =
            case model.errorMessage of
                Just message ->
                    message

                Nothing ->
                    successText
    in
    div [ id "footer_items" ]
        [ div [ id "footer", class "message" ]
            [ Html.text txt
            ]
        ]


viewTags : TagSearch -> Html Msg
viewTags tagSearch =
    let
        tags =
            Text.Search.Tag.optionsToDict tagSearch

        viewTag tagSearchOption =
            let
                selected =
                    Text.Search.Option.selected tagSearchOption

                tagValue =
                    Text.Search.Option.value tagSearchOption

                tagLabel =
                    Text.Search.Option.label tagSearchOption
            in
            div
                [ onClick (SelectTag tagValue (not selected))
                , classList
                    [ ( "text_tag", True )
                    , ( "text_tag_selected", selected )
                    ]
                ]
                [ Html.text tagLabel
                ]
    in
    div [ id "text_tags" ]
        [ div [ class "text_tags" ] (List.map viewTag (Dict.values tags))
        ]


viewDifficulties : DifficultySearch -> List (Html Msg)
viewDifficulties difficultySearch =
    let
        difficulties =
            Text.Search.Difficulty.options difficultySearch

        viewDifficulty difficultySearchOption =
            let
                selected =
                    Text.Search.Option.selected difficultySearchOption

                value =
                    Text.Search.Option.value difficultySearchOption

                label =
                    Text.Search.Option.label difficultySearchOption
            in
            div
                [ classList [ ( "difficulty_option", True ), ( "difficulty_option_selected", selected ) ]
                , onClick (AddDifficulty value (not selected))
                ]
                [ Html.text label
                ]
    in
    List.map viewDifficulty difficulties


viewStatuses : TextReadStatusSearch -> List (Html Msg)
viewStatuses statusSearch =
    let
        statuses =
            Text.Search.ReadingStatus.options statusSearch

        viewStatus ( value, statusOption ) =
            let
                selected =
                    Text.Search.Option.selected statusOption

                label =
                    Text.Search.Option.label statusOption

                status =
                    Text.Search.ReadingStatus.valueToStatus value
            in
            div
                [ classList [ ( "text_status", True ), ( "text_status_option_selected", selected ) ]
                , onClick (SelectStatus status (not selected))
                ]
                [ Html.text label
                ]
    in
    List.map viewStatus <| List.map (\option -> ( Text.Search.Option.value option, option )) statuses



-- HINTS


viewTopicFilterHint : SafeModel -> List (Html Msg)
viewTopicFilterHint (SafeModel model) =
    let
        topicFilterHelp =
            TextSearch.Help.topic_filter_help

        hintAttributes =
            { id = TextSearch.Help.popupToID topicFilterHelp
            , visible = TextSearch.Help.isVisible model.help topicFilterHelp
            , text = TextSearch.Help.helpMsg topicFilterHelp
            , cancel_event = onClick (CloseHint topicFilterHelp)
            , next_event = onClick NextHint
            , prev_event = onClick PreviousHint
            , addl_attributes = [ class "difficulty_filter_hint" ]
            , arrow_placement = ArrowUp ArrowLeft
            }
    in
    if Config.showHelp model.config then
        [ Help.View.view_hint_overlay hintAttributes
        ]

    else
        []


viewDifficultyFilterHint : SafeModel -> List (Html Msg)
viewDifficultyFilterHint (SafeModel model) =
    let
        difficultyFilterHelp =
            TextSearch.Help.difficulty_filter_help

        hintAttributes =
            { id = TextSearch.Help.popupToID difficultyFilterHelp
            , visible = TextSearch.Help.isVisible model.help difficultyFilterHelp
            , text = TextSearch.Help.helpMsg difficultyFilterHelp
            , cancel_event = onClick (CloseHint difficultyFilterHelp)
            , next_event = onClick NextHint
            , prev_event = onClick PreviousHint
            , addl_attributes = [ class "difficulty_filter_hint" ]
            , arrow_placement = ArrowUp ArrowLeft
            }
    in
    if Config.showHelp model.config then
        [ Help.View.view_hint_overlay hintAttributes
        ]

    else
        []


viewStatusFilterHint : SafeModel -> List (Html Msg)
viewStatusFilterHint (SafeModel model) =
    let
        statusFilterHelp =
            TextSearch.Help.status_filter_help

        hintAttributes =
            { id = TextSearch.Help.popupToID statusFilterHelp
            , visible = TextSearch.Help.isVisible model.help statusFilterHelp
            , text = TextSearch.Help.helpMsg statusFilterHelp
            , cancel_event = onClick (CloseHint statusFilterHelp)
            , next_event = onClick NextHint
            , prev_event = onClick PreviousHint
            , addl_attributes = [ class "status_filter_hint" ]
            , arrow_placement = ArrowUp ArrowLeft
            }
    in
    if Config.showHelp model.config then
        [ Help.View.view_hint_overlay hintAttributes
        ]

    else
        []



-- SHARED


save : SafeModel -> Shared.Model -> Shared.Model
save model shared =
    shared


load : Shared.Model -> SafeModel -> ( SafeModel, Cmd Msg )
load shared safeModel =
    ( safeModel, Cmd.none )


subscriptions : SafeModel -> Sub Msg
subscriptions (SafeModel model) =
    Sub.none
