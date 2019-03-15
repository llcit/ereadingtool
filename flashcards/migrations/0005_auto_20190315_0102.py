# Generated by Django 2.1.5 on 2019-03-15 01:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_remove_student_flashcards'),
        ('text', '0003_auto_20190308_0130'),
        ('flashcards', '0004_auto_20190314_2356'),
    ]

    operations = [
        migrations.CreateModel(
            name='StudentFlashcard',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('repetitions', models.IntegerField(default=0)),
                ('interval', models.IntegerField(default=0)),
                ('easiness', models.IntegerField(default=0)),
                ('phrase', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='flashcards', to='text.TextPhrase')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='flashcards', to='user.Student')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='StudentFlashcardSession',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_dt', models.DateTimeField(auto_now_add=True)),
                ('end_dt', models.DateTimeField(null=True)),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='flashcard_sessions', to='user.Student')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.RemoveField(
            model_name='studentflashcards',
            name='phrases',
        ),
        migrations.DeleteModel(
            name='StudentFlashcards',
        ),
    ]
