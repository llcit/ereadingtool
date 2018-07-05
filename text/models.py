from typing import TypeVar, Optional, List, Dict

from django.db import models

from mixins.model import Timestamped, WriteLockable, WriteLocked
from tag.models import Taggable


class TextDifficulty(models.Model):
    class Meta:
        verbose_name_plural = 'Text Difficulties'

    slug = models.SlugField(blank=False)
    name = models.CharField(max_length=255, blank=False)

    def __str__(self):
        return self.name

    def to_dict(self):
        return {
            'slug': self.slug,
            'name': self.name
        }

    @classmethod
    def setup_default(cls):
        for params in [('intermediate_mid', 'Intermediate-Mid'), ('advanced_low', 'Advanced-Low'),
                       ('advanced_mid', 'Advanced-Mid'), ('intermediate_high', 'Intermediate-High')]:
            if not TextDifficulty.objects.filter(slug=params[0], name=params[1]).count():
                difficulty = TextDifficulty.objects.create(slug=params[0], name=params[1])
                difficulty.save()


class Text(Taggable, WriteLockable, Timestamped, models.Model):
    introduction = models.CharField(max_length=512, null=False, blank=False)

    title = models.CharField(max_length=255, null=False, blank=False)
    source = models.CharField(max_length=255, blank=False)
    difficulty = models.ForeignKey(TextDifficulty, null=True, related_name='texts', on_delete=models.SET_NULL)
    author = models.CharField(max_length=255, blank=True)

    created_by = models.ForeignKey('user.Instructor', null=True, on_delete=models.SET_NULL,
                                   related_name='created_texts')
    last_modified_by = models.ForeignKey('user.Instructor', null=True, on_delete=models.SET_NULL,
                                         related_name='last_modified_text')

    @classmethod
    def update(cls, text_params: Dict, text_sections_params: List[Dict]) -> TypeVar('Text'):
        if text_params['text'].write_locked:
            raise WriteLocked

        text = text_params['form'].save()
        text.save()

        for section_params in text_sections_params:
            text_section = section_params['text_section_form'].save(commit=False)
            text_section.text = text
            text_section.save()

            for i, question in enumerate(section_params['questions']):
                question_obj = question['form'].save(commit=False)

                question_obj.text = text
                question_obj.order = i
                question_obj.save()

                for j, answer_form in enumerate(question['answer_forms']):
                    answer = answer_form.save(commit=False)

                    answer.question = question_obj
                    answer.order = j
                    answer.save()

        return text

    @classmethod
    def create(cls, text_params: Dict, text_section_params: List[Dict]) -> TypeVar('Text'):
        text = text_params['form'].save()
        text.save()

        for section_params in text_section_params:
            text_section = section_params['text_section_form'].save(commit=False)
            text_section.text = text
            text_section.save()

            for i, question in enumerate(section_params['questions']):
                question_obj = question['form'].save(commit=False)

                question_obj.text_section = text_section
                question_obj.order = i
                question_obj.save()

                for j, answer_form in enumerate(question['answer_forms']):
                    answer = answer_form.save(commit=False)

                    answer.question = question_obj
                    answer.order = j
                    answer.save()

        return text

    def to_summary_dict(self) -> Dict:
        return {
            'id': self.pk,
            'title': self.title,
            'modified_dt': self.modified_dt.isoformat(),
            'created_dt': self.created_dt.isoformat(),
            'created_by': str(self.created_by),
            'last_modified_by': str(self.last_modified_by) if self.last_modified_by else None,
            'tags': [tag.name for tag in self.tags.all()],
            'text_section_count': self.sections.count(),
            'write_locker': str(self.write_locker) if self.write_locker else None
        }

    def to_dict(self, text_sections: Optional[List]=None) -> Dict:
        return {
            'id': self.pk,
            'title': self.title,
            'introduction': self.introduction,
            'created_by': str(self.created_by),
            'last_modified_by': str(self.last_modified_by) if self.last_modified_by else None,
            'tags': [tag.name for tag in self.tags.all()],
            'modified_dt': self.modified_dt.isoformat(),
            'created_dt': self.created_dt.isoformat(),
            'sections': [text_section.to_dict() for text_section in
                         (text_sections if text_sections else self.sections.all())],
            'write_locker': str(self.write_locker) if self.write_locker else None
        }

    def __str__(self):
        return self.title

    def delete(self, *args, **kwargs):
        if self.is_locked():
            raise WriteLocked

        super(Text, self).delete(*args, **kwargs)


class TextSection(Timestamped, models.Model):
    text = models.ForeignKey(Text, null=True, related_name='sections', on_delete=models.SET_NULL)

    order = models.IntegerField(blank=False)
    body = models.TextField(max_length=2048, blank=False)

    def to_dict(self) -> Dict:
        questions = [question.to_dict() for question in self.questions.all()]
        questions_count = len(list(questions))

        return {
            'id': self.pk,
            'created_dt': self.created_dt.isoformat(),
            'modified_dt': self.modified_dt.isoformat(),
            'question_count': questions_count,
            'questions': questions,
            'body': self.body,
        }

    def __str__(self):
        return self.text.title
