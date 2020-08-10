port module Api exposing
    ( AuthError
    , AuthSuccess
    , Cred
    , application
    , authErrorMessage
    , authResult
    , authSuccessMessage
    , exposeToken
    , get
    , login
    , logout
    , viewerChanges
    )

import Api.Config as Config exposing (Config)
import Api.Endpoint as Endpoint exposing (Endpoint)
import Browser
import Browser.Navigation as Nav
import Dict
import Http
import JWT exposing (JWT(..))
import Json.Decode as Decode exposing (Decoder, Value, field, string)
import Json.Decode.Pipeline exposing (required)
import Role exposing (Role)
import Url exposing (Url)



-- CRED


{-| Authentication credentials

We define Cred to limit the visibility of the token to this module.

-}
type Cred
    = Cred String


credDecoder : Decoder Cred
credDecoder =
    Decode.succeed Cred
        |> required "token" Decode.string


{-| Exposes the token outside this module

TODO: remove this. This should be considered a temporary measure for use while transitioning the
backend communication layer.

-}
exposeToken : Maybe Cred -> String
exposeToken maybeCred =
    case maybeCred of
        Just (Cred val) ->
            val

        Nothing ->
            ""



-- AUTH


type alias AuthResponse =
    { result : String
    , message : String
    }


decodeAuthResponse : Decoder AuthResponse
decodeAuthResponse =
    Decode.succeed AuthResponse
        |> required "result" Decode.string
        |> required "message" Decode.string


type AuthSuccess
    = AuthSuccess String


authSuccessMessage : AuthSuccess -> String
authSuccessMessage (AuthSuccess val) =
    val


type AuthError
    = AuthError String


authErrorMessage : AuthError -> String
authErrorMessage (AuthError err) =
    err


port onAuthResponse : (Value -> msg) -> Sub msg


authResult : (Result AuthError AuthSuccess -> msg) -> Sub msg
authResult toMsg =
    onAuthResponse (\val -> toMsg (toAuthResult (Decode.decodeValue decodeAuthResponse val)))


toAuthResult : Result Decode.Error AuthResponse -> Result AuthError AuthSuccess
toAuthResult result =
    case result of
        Ok authResponse ->
            case authResponse.result of
                "success" ->
                    Ok (AuthSuccess authResponse.message)

                "error" ->
                    Err (AuthError authResponse.message)

                _ ->
                    Err (AuthError "An internal error occured. Please contact the developers.")

        Err err ->
            Err
                (AuthError <|
                    "An internal error occured. Please contact the developers and mention that "
                        ++ Decode.errorToString err
                )


port login : Value -> Cmd msg


port logout : () -> Cmd msg



-- PERSISTENCE


{-| Login status is solely determined by credentials stored in localstorage.

We subscribe to changes here. When a user logs in or out, we attempt to decode
a JSON string with their credentials. On success, we have a logged in user.
Otherwise, we have a guest.

-}
port onAuthStoreChange : (Value -> msg) -> Sub msg


viewerChanges : (Maybe viewer -> msg) -> Decoder (Cred -> Role -> viewer) -> Sub msg
viewerChanges toMsg decoder =
    onAuthStoreChange (\val -> toMsg (decodeFromChange decoder val))


decodeFromChange : Decoder (Cred -> Role -> viewer) -> Value -> Maybe viewer
decodeFromChange viewerDecoder val =
    Decode.decodeValue (storageDecoder viewerDecoder) val
        |> Result.toMaybe


storageDecoder : Decoder (Cred -> Role -> viewer) -> Decoder viewer
storageDecoder viewerDecoder =
    Decode.field "user" (decoderFromCred viewerDecoder)


decoderFromCred : Decoder (Cred -> Role -> a) -> Decoder a
decoderFromCred decoder =
    Decode.map3 (\fromCred role2 cred -> fromCred role2 cred)
        decoder
        credDecoder
        (credDecoder
            |> Decode.andThen roleDecoderFromCred
        )


roleDecoderFromCred : Cred -> Decoder Role
roleDecoderFromCred (Cred cred) =
    case JWT.fromString cred of
        Ok (JWS jws) ->
            case Dict.get "role" jws.claims.metadata of
                Just roleClaim ->
                    case Decode.decodeValue Decode.string roleClaim of
                        Ok role ->
                            Role.decoder role

                        Err _ ->
                            Role.decoder "Role claim not a string"

                Nothing ->
                    Role.decoder "Role claim missing"

        Err _ ->
            Role.decoder "Could not decode JWT"



-- APPLICATION


{-| application initializes the app with credentials from localstorage

We call this from Main, but actually initiliazing the app here restricts
access to the token to this module.

-}
application :
    Decoder (Cred -> Role -> viewer)
    ->
        { init : { maybeConfig : Maybe Config, maybeViewer : Maybe viewer } -> Url -> Nav.Key -> ( model, Cmd msg )
        , onUrlChange : Url -> msg
        , onUrlRequest : Browser.UrlRequest -> msg
        , update : msg -> model -> ( model, Cmd msg )
        , subscriptions : model -> Sub msg
        , view : model -> Browser.Document msg
        }
    -> Program Value model msg
application viewerDecoder config =
    let
        init flags url navKey =
            let
                decodedFlags =
                    { maybeViewer =
                        Decode.decodeValue (storageDecoder viewerDecoder) flags
                            |> Result.toMaybe
                    , maybeConfig =
                        Decode.decodeValue Config.configDecoder flags
                            |> Result.toMaybe
                    }
            in
            config.init decodedFlags url navKey
    in
    Browser.application
        { init = init
        , onUrlChange = config.onUrlChange
        , onUrlRequest = config.onUrlRequest
        , subscriptions = config.subscriptions
        , update = config.update
        , view = config.view
        }



-- HTTP


credHeader : Cred -> Http.Header
credHeader (Cred token) =
    Http.header "authorization" token


get :
    Endpoint
    -> Maybe Cred
    -> (Result Http.Error a -> msg)
    -> Decoder a
    -> Cmd msg
get url maybeCred toMsg decoder =
    Endpoint.request
        { method = "GET"
        , url = url
        , expect = Http.expectJson toMsg decoder
        , headers =
            case maybeCred of
                Just cred ->
                    [ credHeader cred ]

                Nothing ->
                    []
        , body = Http.emptyBody
        , timeout = Nothing
        , tracker = Nothing
        }