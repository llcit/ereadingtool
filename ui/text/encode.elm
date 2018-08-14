module Text.Encode exposing (textEncoder)

import Text.Model
import Text.Section.Encode exposing (textSectionsEncoder)

import Json.Encode as Encode

textEncoder : Text.Model.Text -> Encode.Value
textEncoder text =
  Encode.object [
      ("introduction", Encode.string text.introduction)
    , ("title", Encode.string text.title)
    , ("source", Encode.string text.source)
    , ("author", Encode.string text.author)
    , ("difficulty", Encode.string text.difficulty)
    , ("text_sections", textSectionsEncoder text.sections)
    , ("tags", Encode.list
        (case text.tags of
          Just tags -> List.map (\tag -> Encode.string tag) tags
          _ -> []))
    , ("conclusion", Encode.string text.conclusion)
  ]
