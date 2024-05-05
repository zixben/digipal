from django.conf.urls import include
from django.urls import path
from mezzanine.conf import settings
from mezzanine.core.views import direct_to_template
#from views.facet import facet_search
from digipal.views.annotation import *
from digipal.views.search import *
from digipal.views.admin.image import *
from digipal.views.test import *
from digipal.views.email import *

urlpatterns = [
    #path('page/<image_id', image),
    #path('page/<image_id>/(allographs|metadata|copyright|pages|hands|texts)', image),
    # GN: dec 14, commented out as it is seems to be no longer used
    #path('page/<image_id>/vectors', 'image_vectors'),
    path('page/<image_id>/annotations', image_annotations),
    path('page/<image_id>/image_allographs', image_allographs),
    path('page/<image_id>/graph/<graph_id>/allographs_by_graph', get_allographs_by_graph),
    path('page/<image_id>/allographs/<allograph_id>/<character_id>/allographs_by_allograph', get_allographs_by_allograph),
    path('page/<image_id>/graph/<graph_id>', get_allograph),
    path('page/<image_id>/hands_list', hands_list),

    path('api/old/<content_type>)/<ids>/<only_features>(features)', get_old_api_request),
    path('api/<content_type>)/<ids>/<only_features>(features)', get_content_type_data),

    path('api/graph/save/<graphs>)', save),
    path('api/graph/save_editorial/<graphs>)', save_editorial),

    path('page/<image_id>/delete/<graph_id>', delete),
    path('page/dialog/<image_id>', form_dialog),
    path('page/<image_id>/<graph>/graph_vector', get_vector),

    path('collection/<collection_name>.+)/images', images_lightbox),
    path('collection/<collection_name>.+)', direct_to_template, {
            'template': 'digipal/collection.html',
            'extra_context': {
                'LIGHTBOX': settings.LIGHTBOX,
            }
        }),
    path('collection/shared/1', direct_to_template, {
           'template': 'digipal/collection.html',
           'extra_context': {
                 'LIGHTBOX': settings.LIGHTBOX,
           }
        }),
    path('collection', direct_to_template, {
            'template': 'digipal/lightbox_basket.html',
            'extra_context': {
                  'LIGHTBOX': settings.LIGHTBOX,
            }
        }),

    # search pages
    path('page', search_ms_image_view),
    path('search', search_record_view),
    path('quicksearch', search_record_view),
    path('search/index', search_index_view, name='search_index'),
    path('search/graph', search_graph_view),
    path('search/suggestions.json', search_suggestions),
    # Record views
    path('<content_type>hands|manuscripts|scribes|graphs|pages)/<objectid>[^/]+)(/<tabid>[^/]+))?(?:/|$)', record_view),
    path('<content_type>hands|manuscripts|scribes|pages)(?:/|$)', index_view),
    path('catalogue/<source>[^/]+)(/<number>[^/]+))?(?:/|$)', catalogue_number_view),



#urlpatterns += patternspath('',
#    urlpath('search/facets', 'digipal.views.faceted_search.faceted_search.search_whoosh_view', name='facets'),
#    path('400/?$', 'digipal.views.errors.view_400'),
#    path('500/?$', 'digipal.views.errors.view_500'),

    ### already commented path('search/facets', 'digipal.views.faceted_search.faceted_search.search_haystack_view'),
    ### --- path('search/facets', includepath('haystack.urls')),
    ### --- urlpath('search/facets', FacetedSearchView(form_class=FacetedSearchForm, searchqueryset=sqs), name='haystack_search'),

# TODO: move this to urls_admin.py
    path('admin/image/bulk_edit', image_bulk_edit),

]


if settings.DEBUG:
    urlpatterns += (
       path('test/cookied_inputs', cookied_inputs),
       path('test/iipimage', iipimage),
       path('test/similar_graph', similar_graph_view),
       path('test/map', map_view),
       path('test/autocomplete', autocomplete_view),
       path('test/api', api_view),
       # jquery notebook
       path('test/jqnotebook', jqnotebook_view),
   )

urlpatterns += (path('test/error', server_error_view),)
urlpatterns += (path('test/email', send_email),)



# urlpatterns += patternspath('haystack.views',
#     urlpath('facets/<model', facet_search, name="haystack_facet"),
# )
