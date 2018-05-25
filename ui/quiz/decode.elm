module Quiz.Decode exposing (quizDecoder, quizCreateRespDecoder, decodeRespErrors, QuizRespError
  , quizUpdateRespDecoder, QuizCreateResp, QuizUpdateResp, quizListDecoder)

import Quiz.Model exposing (Quiz, QuizListItem)
import Text.Decode

import Array exposing (Array)

import Json.Decode as Decode
import Json.Decode.Pipeline exposing (decode, required, optional, resolve, hardcoded)

import Dict exposing (Dict)
import Json.Decode.Extra exposing (date)


type alias QuizCreateResp = { id: Int, redirect: String }
type alias QuizUpdateResp = { id: Int, updated: Bool }

type alias QuizRespError = Dict String String

quizDecoder : Decode.Decoder Quiz
quizDecoder =
  decode Quiz
    |> required "id" (Decode.nullable (Decode.int))
    |> required "title" (Decode.string)
    |> required "created_dt" (Decode.nullable date)
    |> required "modified_dt" (Decode.nullable date)
    |> required "texts" (Decode.map Array.fromList (Text.Decode.textsDecoder))

quizListItemDecoder : Decode.Decoder QuizListItem
quizListItemDecoder =
  decode QuizListItem
    |> required "id" Decode.int
    |> required "title" Decode.string
    |> required "created_dt" date
    |> required "modified_dt" date
    |> required "text_count" Decode.int


quizListDecoder : Decode.Decoder (List QuizListItem)
quizListDecoder =
  Decode.list quizListItemDecoder

quizCreateRespDecoder : Decode.Decoder (QuizCreateResp)
quizCreateRespDecoder =
  decode QuizCreateResp
    |> required "id" Decode.int
    |> required "redirect" Decode.string

quizUpdateRespDecoder : Decode.Decoder (QuizUpdateResp)
quizUpdateRespDecoder =
  decode QuizUpdateResp
    |> required "id" Decode.int
    |> required "updated" Decode.bool


quizCreateRespErrDecoder : Decode.Decoder (QuizRespError)
quizCreateRespErrDecoder = Decode.dict Decode.string

decodeRespErrors : String -> Result String QuizRespError
decodeRespErrors str = Decode.decodeString quizCreateRespErrDecoder str
