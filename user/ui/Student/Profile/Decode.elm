module Student.Profile.Decode exposing
    ( studentConsentRespDecoder
    , studentProfileDecoder
    , username_valid_decoder
    )

import Json.Decode
import Json.Decode.Pipeline exposing (required)
import Student.Performance.Report exposing (PerformanceReport)
import Student.Profile exposing (StudentProfileParams)
import Student.Profile.Model

import Student.Resource
import Text.Translations exposing (Phrase)
import Text.Translations.Decode
import TextReader.Section.Decode
import TextReader.TextWord
import Util exposing (stringTupleDecoder)


username_valid_decoder : Json.Decode.Decoder Student.Profile.Model.UsernameUpdate
username_valid_decoder =
    Json.Decode.succeed Student.Profile.Model.UsernameUpdate
        |> required "username" (Json.Decode.map (Student.Resource.toStudentUsername >> Just) Json.Decode.string)
        |> required "valid" (Json.Decode.nullable Json.Decode.bool)
        |> required "msg" (Json.Decode.nullable Json.Decode.string)


textWordParamsDecoder : Json.Decode.Decoder TextReader.TextWord.TextWordParams
textWordParamsDecoder =
    Json.Decode.succeed TextReader.TextWord.TextWordParams
        |> required "id" Json.Decode.int
        |> required "instance" Json.Decode.int
        |> required "phrase" Json.Decode.string
        |> required "grammemes" (Json.Decode.nullable (Json.Decode.list stringTupleDecoder))
        |> required "translations" TextReader.Section.Decode.textWordTranslationsDecoder
        |> required "word"
            (Json.Decode.map2 (\a b -> ( a, b ))
                (Json.Decode.index 0 Json.Decode.string)
                (Json.Decode.index 1 (Json.Decode.nullable Text.Translations.Decode.textGroupDetailsDecoder))
            )


wordTextWordDecoder : Json.Decode.Decoder (Maybe (List ( Phrase, TextReader.TextWord.TextWordParams )))
wordTextWordDecoder =
    Json.Decode.nullable
        (Json.Decode.list
            (Json.Decode.map2 (\a b -> ( a, b ))
                (Json.Decode.index 0 Json.Decode.string)
                (Json.Decode.index 1 textWordParamsDecoder)
            )
        )


performanceReportDecoder : Json.Decode.Decoder PerformanceReport
performanceReportDecoder =
    Json.Decode.succeed PerformanceReport
        |> required "html" Json.Decode.string
        |> required "pdf_link" Json.Decode.string


studentProfileURIParamsDecoder : Json.Decode.Decoder Student.Profile.StudentURIParams
studentProfileURIParamsDecoder =
    Json.Decode.succeed Student.Profile.StudentURIParams
        |> required "logout_uri" Json.Decode.string
        |> required "profile_uri" Json.Decode.string


studentProfileParamsDecoder : Json.Decode.Decoder StudentProfileParams
studentProfileParamsDecoder =
    Json.Decode.succeed StudentProfileParams
        |> required "id" (Json.Decode.nullable Json.Decode.int)
        |> required "username" (Json.Decode.nullable Json.Decode.string)
        |> required "email" Json.Decode.string
        |> required "difficulty_preference" (Json.Decode.nullable stringTupleDecoder)
        |> required "difficulties" (Json.Decode.list stringTupleDecoder)
        |> required "uris" studentProfileURIParamsDecoder


studentProfileDecoder : Json.Decode.Decoder Student.Profile.StudentProfile
studentProfileDecoder =
    Json.Decode.map Student.Profile.initProfile studentProfileParamsDecoder


studentConsentRespDecoder : Json.Decode.Decoder Student.Profile.Model.StudentConsentResp
studentConsentRespDecoder =
    Json.Decode.map
        Student.Profile.Model.StudentConsentResp
        (Json.Decode.field "consented" Json.Decode.bool)