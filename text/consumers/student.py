from typing import AnyStr

from channels.db import database_sync_to_async

from text.consumers.base import TextReaderConsumer
from text_reading.models import StudentTextReading

from text.definitions.models import TextWord

from user.models import ReaderUser
from flashcards.models import Flashcards


class StudentTextReaderConsumer(TextReaderConsumer):
    def __init__(self, *args, **kwargs):
        super(StudentTextReaderConsumer, self).__init__(*args, **kwargs)

        self.student = None

    @database_sync_to_async
    def start_reading(self):
        self.student = self.scope['user'].student

        return StudentTextReading.start_or_resume(student=self.student, text=self.text)

    @database_sync_to_async
    def word_exists_in_definitions(self, word: AnyStr):
        return TextWord.objects.filter(definitions__text_section=self.text_reading.current_section, word=word).exists()

    @database_sync_to_async
    def word_exists_in_flashcards(self, flashcards: Flashcards, text_word: TextWord):
        return flashcards.words.filter(text_word=text_word).exists()

    @database_sync_to_async
    def get_word_in_definitions(self, word: AnyStr, instance: int):
        return TextWord.objects.filter(definitions__text_section=self.text_reading.current_section,
                                       word=word,
                                       instance=instance).get()

    @database_sync_to_async
    def add_word_to_flashcards(self, flashcards: Flashcards, text_word: TextWord):
        flashcards.words.add(text_word)
        flashcards.save()

    @database_sync_to_async
    def remove_word_from_flashcards(self, flashcards: Flashcards, text_word: TextWord):
        flashcards.words.remove(text_word)

    async def add_flashcard_word(self, user: ReaderUser, word: AnyStr, instance: int):
        super(StudentTextReaderConsumer, self).add_flashcard_word(user, word)

        if self.student and self.text_reading:
            if self.word_exists_in_definitions(word):
                text_word = await self.get_word_in_definitions(word, instance)

                self.add_word_to_flashcards(self.student.flashcards, text_word)

    async def remove_flashcard_word(self, user: ReaderUser, word: AnyStr, instance: int):
        super(StudentTextReaderConsumer, self).remove_flashcard_word(user, word)

        if self.student and self.text_reading:
            if self.word_exists_in_flashcards(self.student.flashcards, word):
                text_word = await self.get_word_in_definitions(word, instance)

                self.remove_word_from_flashcards(self.student.flashcards, text_word)
