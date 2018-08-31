module Student.Encode exposing (..)

import Json.Encode as Encode

import Student.Profile

profileEncoder : Student.Profile.StudentProfile -> Encode.Value
profileEncoder student =
  let
    encode_pref =
      (case (Student.Profile.studentDifficultyPreference student) of
        Just difficulty ->
          Encode.string (Tuple.first difficulty)
        _ ->
          Encode.null)
  in
    Encode.object [ ("difficulty_preference", encode_pref) ]
