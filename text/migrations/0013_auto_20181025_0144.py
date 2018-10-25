# Generated by Django 2.1.2 on 2018-10-25 01:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('text', '0012_textword_frequency'),
    ]

    operations = [
        migrations.RenameField(
            model_name='textword',
            old_name='normal_form',
            new_name='word',
        ),
        migrations.AddField(
            model_name='textword',
            name='instance',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
