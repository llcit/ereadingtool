module Text.Translations.Word.Instance exposing
    ( WordInstance
    , canMergeWords
    , grammemeKeys
    , grammemeValue
    , grammemes
    , hasTextWord
    , id
    , instance
    , new
    , sectionNumber
    , setTextWord
    , textWord
    , token
    , word
    , wordInstanceSectionNumberToInt
    )

import Set exposing (Set)
import Text.Translations exposing (..)
import Text.Translations.TextWord exposing (TextWord)


type WordInstance
    = WordInstance SectionNumber Instance Token (Maybe TextWord)


setTextWord : WordInstance -> TextWord -> WordInstance
setTextWord (WordInstance id instance token _) new_text_word =
    WordInstance id instance token (Just new_text_word)


canMergeWords : List WordInstance -> Bool
canMergeWords word_instances =
    List.all hasTextWord word_instances


hasTextWord : WordInstance -> Bool
hasTextWord (WordInstance _ _ _ text_word) =
    case text_word of
        Just _ ->
            True

        Nothing ->
            False


grammemeValue : WordInstance -> String -> Maybe String
grammemeValue word_instance grammeme_name =
    textWord word_instance
        |> Maybe.andThen (\tw -> Text.Translations.TextWord.grammemeValue tw grammeme_name)


grammemeKeys : Set String
grammemeKeys =
    Text.Translations.expectedGrammemeKeys


grammemes : WordInstance -> Maybe Grammemes
grammemes word_instance =
    textWord word_instance
        |> Maybe.andThen Text.Translations.TextWord.grammemes


sectionNumber : WordInstance -> SectionNumber
sectionNumber (WordInstance section_number _ _ _) =
    section_number


wordInstanceSectionNumberToInt : WordInstance -> Int
wordInstanceSectionNumberToInt word_instance =
    sectionNumberToInt (sectionNumber word_instance)


id : WordInstance -> Id
id (WordInstance section_number instance token _) =
    String.join "_" [ toString section_number, toString instance, String.join "_" (String.words (String.toLower token)) ]


token : WordInstance -> Token
token (WordInstance _ _ token _) =
    token


textWord : WordInstance -> Maybe TextWord
textWord (WordInstance _ _ _ text_word) =
    text_word


instance : WordInstance -> Instance
instance (WordInstance _ instance _ _) =
    instance


word : WordInstance -> Token
word (WordInstance _ _ word _) =
    word


normalizeToken : String -> String
normalizeToken =
    String.toLower


new : SectionNumber -> Instance -> Token -> Maybe TextWord -> WordInstance
new section_number instance token text_word =
    WordInstance section_number instance token text_word
