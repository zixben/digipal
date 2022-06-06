from mezzanine.conf import settings
from django.conf.urls import include
from django.urls import path
from digipal_text.views import viewer, test

urlpatterns = [
    path('digipal/manuscripts/(\d+)/texts/view/tinymce_generated.css',
        viewer.tinymce_generated_css_view),
    path(
        'digipal/manuscripts/(\d+)/texts/view/([^/]+)/([^/]+)/?$', viewer.text_viewer_view),
    path(
        'digipal/manuscripts/(\d+)/texts/view/([^/]+)/?$', viewer.text_viewer_view),
    path('digipal/manuscripts/(\d+)/texts/view/?$',
        viewer.text_viewer_view),

    # Replace the first line with the second as apache doesn't like // (e.g. /texts/translation/whole//)
    # Django web server deals well with it.
    #url(r'^digipal/manuscripts/(\d+)/texts/([^/]+)/([^/]+)/([^/]*)/$', 'viewer.text_api_view'),
    path('digipal/manuscripts/(\d+)/texts/([^/]+)/([^/]+)/([^/]*)/?$',
        viewer.text_api_view),
    path('digipal/manuscripts/(\d+)/texts/([^/]+)/([^/]+)/?$',
        viewer.text_api_view),
    path('digipal/manuscripts/(\d+)/texts/([^/]+)/?$',
        viewer.text_api_view),

    #path('digipal/patterns/?$', patterns.patterns_view),
    #path('digipal_text/api/(patterns|move_pattern|segunits)/(.*?)/?$',
    #    patterns.patterns_api_view),
]

if settings.DEBUG:
    urlpatterns += (
        path('digipal/manuscripts/(\d+)/texts/test/drawing', test.drawing_view),
    )
