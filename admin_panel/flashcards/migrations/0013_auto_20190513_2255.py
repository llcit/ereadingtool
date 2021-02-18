# Generated by Django 2.2 on 2019-05-13 22:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('flashcards', '0012_auto_20190510_2034'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentflashcardsession',
            name='current_flashcard',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='session', to='flashcards.StudentFlashcard'),
        ),
    ]