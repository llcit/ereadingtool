from typing import List, Dict

from django.core.exceptions import ValidationError

from django.db import models
from flashcards.base import Flashcard

from flashcards.state.models import FlashcardSessionStateMachine, Mode, StateMachineError


class FlashcardSession(models.Model):
    class Meta:
        abstract = True

    state_machine_cls = FlashcardSessionStateMachine

    """
    A model that keeps track of individual flashcard sessions.
    """
    state = models.CharField(max_length=64, null=False, default=state_machine_cls.begin.name)

    mode = models.CharField(max_length=32, choices=((mode.name, mode.value) for mode in list(Mode)),
                            default=Mode.review.name)

    start_dt = models.DateTimeField(null=False, auto_now_add=True)
    end_dt = models.DateTimeField(null=True)

    def current_flashcard(self):
        raise NotImplementedError

    def to_dict(self) -> Dict:
        return self.state_machine.to_dict()

    @property
    def flashcards(self) -> List[Flashcard]:
        raise NotImplementedError

    def next_flashcard(self) -> Flashcard:
        return self.flashcards[0]

    def clean(self):
        try:
            self.state_machine.check()
        except StateMachineError as e:
            raise ValidationError(f'invalid state: {e}')

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        self.full_clean()

        self.state = self.state_machine.current_state.name
        self.mode = self.state_machine.mode
        self.current_flashcard = self.state_machine.current_flashcard

        super(FlashcardSession, self).save(force_insert, force_update, using, update_fields)

    def __init__(self, *args, **kwargs):
        """
        Deserialize the state from the db.
        """

        super(FlashcardSession, self).__init__(*args, **kwargs)

        self.state_machine = self.state_machine_cls(state=self.state, mode=self.mode,
                                                    current_flashcard=self.current_flashcard)

        self.state_machine.check()