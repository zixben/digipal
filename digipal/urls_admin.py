from django.conf.urls import include
from django.urls import path
from mezzanine.conf import settings
from digipal.views.admin import general, idiograph, quickforms, quickforms, image, stewart
urlpatterns = [
    path('<app_label>digipal)/<model_name>/<object_id>/context', general.context_view),
    path('<app_label>digipal)/instances', general.instances_view),
    path('<app_label>digipal)/<model_name>/import', general.import_view),

    path('digipal/stewartrecord/match', stewart.stewart_match, name='stewart_match'),
    path('digipal/stewartrecord/import', stewart.stewart_import, name='stewart_import'),

    path('digipal/idiograph_editor', idiograph.idiograph_editor),
    path('digipal/idiograph_editor/get_idiographs', idiograph.get_idiographs),
    path('digipal/idiograph_editor/get_allographs', idiograph.get_allographs),
    path('digipal/idiograph_editor/get_idiograph', idiograph.get_idiograph),
    path('digipal/idiograph_editor/save_idiograph', idiograph.save_idiograph),
    path('digipal/idiograph_editor/update_idiograph', idiograph.update_idiograph),
    path('digipal/idiograph_editor/delete_idiograph', idiograph.delete_idiograph)
]

if getattr(settings, 'USE_ITEM_PART_QUICK_ADD_FORM'):
    urlpatterns += (
        path('digipal/itempart/add/?', quickforms.add_itempart_view),
    )
