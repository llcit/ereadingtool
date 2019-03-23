from typing import AnyStr, List

from channels.db import database_sync_to_async
from channels.generic.websocket import AsyncJsonWebsocketConsumer

from flashcards.models import Flashcard
from flashcards.consumers.exceptions import FlashcardSessionException
from user.models import ReaderUser

from user.mixins.models import Profile


class Unauthorized(Exception):
    pass


class FlashcardSessionConsumer(AsyncJsonWebsocketConsumer):
    def __init__(self, *args, **kwargs):
        super(FlashcardSessionConsumer, self).__init__(*args, **kwargs)

        self.flashcard_session = None

    def get_or_create_flashcard_session(self, profile: Profile):
        raise NotImplementedError

    def get_flashcards(self, profile: Profile) -> List[Flashcard]:
        raise NotImplementedError

    async def review_answer(self, user: ReaderUser):
        if not user.is_authenticated:
            raise Unauthorized

        await database_sync_to_async(self.flashcard_session.review)()

        await self.send_serialized_session_command()

    async def choose_mode(self, mode: AnyStr, user: ReaderUser):
        if not user.is_authenticated:
            raise Unauthorized

        self.flashcard_session.set_mode(mode)

        await database_sync_to_async(self.flashcard_session.save)()

        await self.send_serialized_session_command()

    @database_sync_to_async
    def create_session(self, user: ReaderUser):
        return self.get_or_create_flashcard_session(profile=user.profile)

    @database_sync_to_async
    def answer(self, user: ReaderUser, answer: AnyStr):
        if not user.is_authenticated:
            raise Unauthorized

        self.send_json(self.flashcard_session.answer(answer).to_dict())

    async def next(self, user: ReaderUser):
        if not user.is_authenticated:
            raise Unauthorized

        await self.send_json(self.flashcard_session.next().to_dict())

    async def send_serialized_session_command(self):
        await self.send_json({
            'command': self.flashcard_session.state_name,
            'mode': self.flashcard_session.mode,
            'result': self.flashcard_session.serialize()
        })

    async def start(self, user: ReaderUser):
        if not user.is_authenticated:
            raise Unauthorized

        self.flashcard_session.start()

        await database_sync_to_async(self.flashcard_session.save)()

        await self.send_serialized_session_command()

    async def connect(self):
        if self.scope['user'].is_anonymous:
            await self.close()
        else:
            await self.accept()

            user = self.scope['user']

            flashcards = await database_sync_to_async(self.get_flashcards)(user.profile)

            if not flashcards:
                await self.send_json({
                    'command': 'init',
                    'result': {
                        'flashcards': [flashcard.phrase.phrase for flashcard in flashcards]
                    }
                })
            else:
                self.flashcard_session, started = await self.create_session(user)

                await self.send_serialized_session_command()

    async def receive_json(self, content, **kwargs):
        user = self.scope['user']

        available_cmds = {
            'start': 1,
            'choose_mode': 1,
            'next': 1,
            'answer': 1,
            'review_answer': 1,
        }

        try:
            cmd = content.get('command', None)

            if cmd in available_cmds:
                if cmd == 'start':
                    await self.start(user=user)

                if cmd == 'choose_mode':
                    await self.choose_mode(mode=content.get('mode', None), user=user)

                if cmd == 'next':
                    await self.next(user=user)

                if cmd == 'answer':
                    await self.answer(answer=content.get('answer', None), user=user)

                if cmd == 'review_answer':
                    await self.review_answer(user=user)

            else:
                await self.send_json({'error': f'{cmd} is not a valid command.'})

        except FlashcardSessionException as e:
            await self.send_json({'error': {'code': e.code, 'error_msg': e.error_msg}})
