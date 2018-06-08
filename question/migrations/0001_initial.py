# Generated by Django 2.0.6 on 2018-06-08 06:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order', models.PositiveIntegerField(default=0, editable=False)),
                ('text', models.CharField(max_length=255)),
                ('correct', models.BooleanField(default=False)),
                ('feedback', models.CharField(max_length=255)),
            ],
            options={
                'ordering': ['order'],
            },
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_dt', models.DateTimeField(auto_now_add=True)),
                ('modified_dt', models.DateTimeField(auto_now=True)),
                ('body', models.TextField()),
                ('order', models.PositiveIntegerField(default=0, editable=False)),
                ('type', models.CharField(choices=[('main_idea', 'Main Idea'), ('detail', 'Detail')], max_length=32)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
