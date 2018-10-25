# Generated by Django 2.1.2 on 2018-10-25 23:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('text', '0013_auto_20181025_0144'),
    ]

    operations = [
        migrations.AlterField(
            model_name='textword',
            name='instance',
            field=models.IntegerField(default=0),
        ),
        migrations.RemoveField(
            model_name='textword',
            name='frequency',
        ),
        migrations.AlterUniqueTogether(
            name='textword',
            unique_together={('instance', 'word')},
        ),
    ]
