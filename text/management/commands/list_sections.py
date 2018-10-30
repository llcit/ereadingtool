from django.core.management.base import BaseCommand, CommandError

from django.db.models import Q, Count

from text.models import TextSection


class Command(BaseCommand):
    help = 'Lists text sections and statistics on their definitions.'

    def add_arguments(self, parser):
        parser.add_argument(
            '--nodefs',
            action='store_true',
            dest='nodefs',
            help='Lists only text sections with 0 defined words or no definitions.',
        )

    def handle(self, *args, **options):
        table_str = '{:<15} {:<15} {:>15}'

        columns = table_str.format('section pk', 'num of words', 'num of defined words')

        self.stdout.write(self.style.SUCCESS(columns))

        queryset = TextSection.objects.annotate(num_of_words=Count('definitions__words'))

        if options['nodefs']:
            queryset = queryset.filter(Q(definitions__isnull=True) | Q(num_of_words=0))

        for section in queryset.filter():
            words = list(section.words)
            num_of_defined_words = 'None'

            if section.definitions:
                num_of_defined_words = section.definitions.words.count()

            self.stdout.write(self.style.SUCCESS(table_str.format(section.pk, len(words), num_of_defined_words)))
