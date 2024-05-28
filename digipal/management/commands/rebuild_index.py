# myapp/management/commands/rebuild_index.py

from django.core.management.base import BaseCommand
from whoosh import index
from whoosh.fields import Schema, TEXT, ID, NUMERIC
import os
from django.conf import settings

class Command(BaseCommand):
    help = 'Rebuild the Whoosh search index'

    def handle(self, *args, **kwargs):
        schema = Schema(title=TEXT(stored=True), path=ID(stored=True), content=TEXT, sort_order=NUMERIC(stored=True) )
        # index_dir = os.path.join('search', 'unified')
        index_dir = settings.WHOOSH_INDEX

        if not os.path.exists(index_dir):
            os.makedirs(index_dir)

        if index.exists_in(index_dir):
            ix = index.open_dir(index_dir)
        else:
            ix = index.create_in(index_dir, schema)

        writer = ix.writer()

        # Add documents to the index (this is an example, you should adjust it according to your models)
        writer.add_document(title=u"First document", path=u"/a", content=u"This is the first document we've added!")
        writer.add_document(title=u"Second document", path=u"/b", content=u"The second one is even more interesting!")

        writer.commit()

        self.stdout.write(self.style.SUCCESS('Successfully rebuilt the Whoosh index'))


# myapp/management/commands/rebuild_index.py

# from django.core.management.base import BaseCommand
# from whoosh import index
# from whoosh.fields import Schema, TEXT, ID
# import os
# from digipal.models import MyModel  # Replace with your actual model

# class Command(BaseCommand):
#     help = 'Rebuild the Whoosh search index'

#     def handle(self, *args, **kwargs):
#         schema = Schema(title=TEXT(stored=True), path=ID(stored=True), content=TEXT)
#         index_dir = os.path.join('search', 'unified')

#         if not os.path.exists(index_dir):
#             os.makedirs(index_dir)

#         if index.exists_in(index_dir):
#             ix = index.open_dir(index_dir)
#         else:
#             ix = index.create_in(index_dir, schema)

#         writer = ix.writer()

#         # Check if there is data to index
#         if MyModel.objects.exists():
#             for obj in MyModel.objects.all():
#                 writer.add_document(
#                     title=obj.title,  # Adjust fields accordingly
#                     path=obj.get_absolute_url(),
#                     content=obj.content,
#                 )

#             writer.commit()
#             self.stdout.write(self.style.SUCCESS('Successfully rebuilt the Whoosh index'))
#         else:
#             self.stdout.write(self.style.WARNING('No data found to index'))
