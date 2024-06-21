from django.core.management.base import BaseCommand
from django.db.models import Q
from digipal.models import ItemPart

class Command(BaseCommand):
    help = 'Check records with the term ""'

    def handle(self, *args, **kwargs):
        results = ItemPart.objects.filter(
            Q(locus__contains='face') |
            Q(current_item__shelfmark__icontains='') |
            Q(current_item__repository__name__icontains='') |
            Q(historical_items__catalogue_number__icontains='') |
            Q(historical_items__description__description__icontains='')
        )

        for result in results:
            self.stdout.write(str(result))