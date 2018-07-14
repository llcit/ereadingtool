module Text.Section.Model exposing (TextSection, emptyTextSection)

import Question.Model
import Field

import Date exposing (Date)
import Array exposing (Array)

type alias TextSection = {
    order: Int
  , body : String
  , question_count : Int
  , questions : Array Question.Model.Question
  }

emptyTextSection : TextSection
emptyTextSection = {
    order = 0
  , question_count = 0
  , questions = Question.Model.initial_questions
  , body = "" }