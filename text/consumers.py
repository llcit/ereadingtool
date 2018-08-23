from channels.db import database_sync_to_async
from channels.generic.websocket import AsyncJsonWebsocketConsumer

from question.models import Answer
from text.models import Text
from text_reading.models import (TextReading)
from text_reading.exceptions import (TextReadingException, TextReadingNotAllQuestionsAnswered,
                                     TextReadingQuestionAlreadyAnswered, TextReadingQuestionNotInSection)
from user.student.models import Student


class Unauthorized(Exception):
    pass


@database_sync_to_async
def get_text_or_error(text_id: int, student: Student):
    if not student.user.is_authenticated:
        raise Unauthorized

    text = Text.objects.get(pk=text_id)

    return text


@database_sync_to_async
def get_answer_or_error(answer_id: int, student: Student):
    if not student.user.is_authenticated:
        raise Unauthorized

    try:
        return Answer.objects.get(pk=answer_id)
    except Answer.DoesNotExist:
        raise TextReadingException(code='invalid_answer', error_msg='This answer does not exist.')


class TextReaderConsumer(AsyncJsonWebsocketConsumer):
    def __init__(self, *args, **kwargs):
        super(TextReaderConsumer, self).__init__(*args, **kwargs)

        self.text = None
        self.text_reading = None

    async def answer(self, student: Student, answer_id: int):
        if not student.user.is_authenticated:
            raise Unauthorized

        answer = await get_answer_or_error(answer_id=answer_id, student=student)

        try:
            self.text_reading.answer(answer)

            await self.send_json({
                'command': self.text_reading.current_state.name,
                'result': self.text_reading.to_dict()
            })

        except (TextReadingQuestionAlreadyAnswered, TextReadingQuestionNotInSection):
            await self.send_json({
                'command': 'exception',
                'result': {'code': 'unknown', 'error_msg': 'Something went wrong.'}
            })

        except TextReadingException as e:
            await self.send_json({
                'command': 'exception',
                'result': {'code': e.code, 'error_msg': e.error_msg}
            })

    async def prev(self, student: Student):
        if not student.user.is_authenticated:
            raise Unauthorized

        try:
            self.text_reading.prev()

            await self.send_json({
                'command': self.text_reading.current_state.name,
                'result': self.text_reading.to_dict()
            })

        except TextReadingException as e:
            await self.send_json({
                'command': 'exception',
                'result': {'code': e.code, 'error_msg': e.error_msg}
            })

    async def next(self, student: Student):
        if not student.user.is_authenticated:
            raise Unauthorized

        try:
            self.text_reading.next()

            await self.send_json({
                'command': self.text_reading.current_state.name,
                'result': self.text_reading.to_dict()
            })

        except TextReadingNotAllQuestionsAnswered as e:
            await self.send_json({
                'command': 'exception',
                'result': {'code': e.code, 'error_msg': e.error_msg}
            })
        except TextReadingException:
            await self.send_json({
                'command': 'exception',
                'result': {'code': 'unknown', 'error_msg': 'something went wrong'}
            })

    async def connect(self):
        if self.scope['user'].is_anonymous:
            await self.close()
        else:
            await self.accept()

            text_id = self.scope['url_route']['kwargs']['text_id']
            student = self.scope['user'].student

            self.text = await get_text_or_error(text_id=text_id, student=student)

            started, self.text_reading = TextReading.start_or_resume(student=student, text=self.text)

            if started:
                await self.send_json({
                    'command': self.text_reading.current_state.name,
                    'result': self.text.to_text_reading_dict()
                })
            else:
                await self.send_json({
                    'command': self.text_reading.current_state.name,
                    'result': self.text_reading.to_dict()
                })

    async def receive_json(self, content, **kwargs):
        student = self.scope['user'].student

        available_cmds = {
            'next': 1,
            'prev': 1,
            'answer': 1,
        }

        try:
            cmd = content.get('command', None)

            if cmd in available_cmds:

                if cmd == 'next':
                    await self.next(student=student)

                if cmd == 'prev':
                    await self.prev(student=student)

                if cmd == 'answer':
                    await self.answer(answer_id=content.get('answer_id', None), student=student)

            else:
                await self.send_json({'error': f'{cmd} is not a valid command.'})

        except TextReadingException as e:
            await self.send_json({'error': {'code': e.code, 'error_msg': e.error_msg}})
