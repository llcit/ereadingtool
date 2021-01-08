module InstructorAdmin.Text.Create exposing
    ( Flags
    , Mode(..)
    , Model
    , Msg(..)
    , Tab(..)
    , TextField(..)
    , TextViewParams
    )

{-| TODO: The contents of this module have been moved to TextEdit.elm
or lifted into individual pages. It should be safe to remove it on clean
up.
-}

import Dict exposing (Dict)
import Flags
import Http
import InstructorAdmin.Admin.Text
import InstructorAdmin.Text.Translations as Translations
import Json.Encode
import Menu.Items
import Menu.Logout
import Menu.Msg as MenuMsg
import Text.Component exposing (TextComponent)
import Text.Decode
import Text.Field exposing (TextAuthor, TextDifficulty, TextIntro, TextSource, TextTags, TextTitle)
import Text.Model exposing (Text, TextDifficulty)
import Text.Translations.Model as TranslationsModel
import Text.Translations.Msg as TranslationsMsg
import Text.Update
import Time
import User.Instructor.Profile


type alias Flags =
    Flags.AuthedFlags
        { instructor_profile : User.Instructor.Profile.InstructorProfileParams
        , text : Maybe Json.Encode.Value
        , answer_feedback_limit : Int
        , text_endpoint_url : String
        , translation_flags : Translations.Flags
        , tags : List String
        }


type alias InstructorUser =
    String


type alias Tags =
    Dict String String


type alias Filter =
    List String


type alias WriteLocked =
    Bool


type Mode
    = EditMode
    | CreateMode
    | ReadOnlyMode InstructorUser


type Tab
    = TextTab
    | TranslationsTab


type TextField
    = Title TextTitle
    | Intro TextIntro
    | Tags TextTags
    | Author TextAuthor
    | Source TextSource
    | Difficulty Text.Field.TextDifficulty
    | Conclusion Text.Field.TextConclusion


type Msg
    = UpdateTextDifficultyOptions (Result Http.Error (List Text.Model.TextDifficulty))
    | TextTranslationMsg TranslationsMsg.Msg
    | SubmitText
    | Submitted (Result Http.Error Text.Decode.TextCreateResp)
    | Updated (Result Http.Error Text.Decode.TextUpdateResp)
    | TextComponentMsg Text.Update.Msg
    | ToggleEditable TextField Bool
    | UpdateTextAttributes String String
    | UpdateTextCkEditors ( String, String )
    | TextJSONDecode (Result String TextComponent)
    | TextTagsDecode (Result String (Dict String String))
    | ClearMessages Time.Posix
    | AddTagInput String String
    | DeleteTag String
    | ToggleLock
    | TextLocked (Result Http.Error Text.Decode.TextLockResp)
    | TextUnlocked (Result Http.Error Text.Decode.TextLockResp)
    | DeleteText
    | ConfirmTextDelete Bool
    | TextDelete (Result Http.Error Text.Decode.TextDeleteResp)
    | InitTextFieldEditors
    | ToggleTab Tab
    | LogOut MenuMsg.Msg
    | LoggedOut (Result Http.Error Menu.Logout.LogOutResp)


type alias Model =
    { flags : Flags
    , mode : Mode
    , profile : User.Instructor.Profile.InstructorProfile
    , menu_items : Menu.Items.MenuItems
    , success_msg : Maybe String
    , error_msg : Maybe String
    , text_api_endpoint : InstructorAdmin.Admin.Text.TextAPIEndpoint
    , text_component : TextComponent
    , text_difficulties : List Text.Model.TextDifficulty
    , text_translations_model : Maybe TranslationsModel.Model
    , tags : Dict String String
    , write_locked : Bool
    , selected_tab : Tab
    }


type alias TextViewParams =
    { text : Text.Model.Text
    , text_component : TextComponent
    , text_fields : Text.Field.TextFields
    , profile : User.Instructor.Profile.InstructorProfile
    , tags : Dict String String
    , selected_tab : Tab
    , write_locked : WriteLocked
    , mode : Mode
    , text_difficulties : List Text.Model.TextDifficulty
    , text_translations_model : Maybe TranslationsModel.Model
    , text_translation_msg : TranslationsMsg.Msg -> Msg
    }