module User.Login exposing (LoginParams, login, viewLoginForm)

import Api
import Dict exposing (Dict)
import Html exposing (Html, div, span)
import Html.Attributes exposing (attribute, class, classList, id)
import Html.Events exposing (onClick, onInput)
import Http exposing (..)
import Json.Encode as Encode
import Spa.Generated.Route as Route exposing (Route)
import Utils


type alias LoginParams =
    { username : String
    , password : String
    }



-- -- AUTH


login : LoginParams -> Cmd msg
login loginParams =
    let
        creds =
            Encode.object
                [ ( "username", Encode.string loginParams.username )
                , ( "password", Encode.string loginParams.password )
                ]
    in
    Api.login creds



-- VIEW


viewLoginForm :
    { onEmailUpdate : String -> msg
    , onPasswordUpdate : String -> msg
    , onSubmittedForm : msg
    , signUpRoute : Route
    , otherLoginRole : String
    , otherLoginRoute : Route
    , maybeHelpMessage : Maybe String
    , errors : Dict String String
    }
    -> Html msg
viewLoginForm loginOptions =
    div [ classList [ ( "login_box", True ) ] ] <|
        viewEmailInput
            { onEmailUpdate = loginOptions.onEmailUpdate, errors = loginOptions.errors }
            ++ viewPasswordInput
                { onPasswordUpdate = loginOptions.onPasswordUpdate
                , onSubmittedForm = loginOptions.onSubmittedForm
                , errors = loginOptions.errors
                }
            ++ viewLoginOptions
                { signUpRoute = loginOptions.signUpRoute
                , otherLoginRole = loginOptions.otherLoginRole
                , otherLoginRoute = loginOptions.otherLoginRoute
                }
            ++ viewSubmit loginOptions.onSubmittedForm
            ++ viewHelpMessages loginOptions.maybeHelpMessage
            ++ viewLinks
            ++ viewErrors loginOptions.errors


viewEmailInput :
    { onEmailUpdate : String -> msg
    , errors : Dict String String
    }
    -> List (Html msg)
viewEmailInput { onEmailUpdate, errors } =
    let
        emailErrorClass =
            if Dict.member "email" errors then
                [ attribute "class" "input_error" ]

            else
                []
    in
    [ div [] [ span [] [ Html.text "E-mail Address:" ] ]
    , Html.input
        ([ attribute "size" "25"
         , onInput onEmailUpdate
         ]
            ++ emailErrorClass
        )
        []
    , case Dict.get "email" errors of
        Just errorMsg ->
            div [] [ Html.em [] [ Html.text errorMsg ] ]

        Nothing ->
            Html.text ""
    ]


viewPasswordInput :
    { onPasswordUpdate : String -> msg
    , onSubmittedForm : msg
    , errors : Dict String String
    }
    -> List (Html msg)
viewPasswordInput { onPasswordUpdate, onSubmittedForm, errors } =
    let
        passwordErrorClass =
            if Dict.member "password" errors then
                [ attribute "class" "input_error" ]

            else
                []

        passwordErrorMessage =
            case Dict.get "password" errors of
                Just errorMessage ->
                    div [] [ Html.em [] [ Html.text errorMessage ] ]

                Nothing ->
                    Html.text ""
    in
    [ div []
        [ span [] [ Html.text "Password:" ] ]
    , Html.input
        ([ attribute "size" "35"
         , attribute "type" "password"
         , onInput onPasswordUpdate
         , Utils.onEnterUp onSubmittedForm
         ]
            ++ passwordErrorClass
        )
        []
    , passwordErrorMessage
    ]


viewLoginOptions :
    { signUpRoute : Route
    , otherLoginRoute : Route
    , otherLoginRole : String
    }
    -> List (Html msg)
viewLoginOptions options =
    [ span [ class "login_options" ]
        [ viewNotRegistered options.signUpRoute
        , viewForgotPassword
        , viewOtherLoginOption
            { otherRole = options.otherLoginRole, otherRoute = options.otherLoginRoute }
        ]
    ]


viewNotRegistered : Route -> Html msg
viewNotRegistered signUpRoute =
    div []
        [ Html.text "Not registered? "
        , Html.a [ attribute "href" (Route.toString signUpRoute) ]
            [ span [ attribute "class" "cursor" ] [ Html.text "Sign Up" ]
            ]
        ]


viewForgotPassword : Html msg
viewForgotPassword =
    div []
        [ Html.text "Forgot Password? "
        , Html.a [ attribute "href" (Route.toString Route.User__ForgotPassword) ]
            [ span [ attribute "class" "cursor" ]
                [ Html.text "Reset Password"
                ]
            ]
        ]


viewOtherLoginOption :
    { otherRole : String, otherRoute : Route }
    -> Html msg
viewOtherLoginOption { otherRole, otherRoute } =
    div []
        [ Html.text ("Are you a " ++ otherRole ++ "? ")
        , Html.a [ attribute "href" (Route.toString otherRoute) ]
            [ span [ attribute "class" "cursor" ]
                [ Html.text ("Login as a " ++ otherRole)
                ]
            ]
        ]


viewSubmit :
    msg
    -> List (Html msg)
viewSubmit onSubmittedForm =
    [ div [ class "button", onClick onSubmittedForm, class "cursor" ]
        [ div [ class "login_submit" ] [ span [] [ Html.text "Login" ] ] ]
    ]


viewHelpMessages : Maybe String -> List (Html msg)
viewHelpMessages maybeHelpMessage =
    case maybeHelpMessage of
        Just message ->
            [ div [ class "help_msgs" ]
                [ Html.text message
                ]
            ]

        Nothing ->
            []


viewLinks : List (Html msg)
viewLinks =
    [ div [ id "acknowledgements-and-about" ]
        [ div []
            [ Html.a [ attribute "href" (Route.toString Route.About) ]
                [ Html.text "About This Website"
                ]
            ]
        , div []
            [ Html.a [ attribute "href" (Route.toString Route.Acknowledgments) ]
                [ Html.text "Acknowledgements"
                ]
            ]
        ]
    ]


viewErrors : Dict String String -> List (Html msg)
viewErrors errors =
    case Dict.get "all" errors of
        Just allErrors ->
            [ div [] [ span [ attribute "class" "errors" ] [ Html.em [] [ Html.text <| allErrors ] ] ] ]

        Nothing ->
            [ span [ attribute "class" "errors" ] [] ]