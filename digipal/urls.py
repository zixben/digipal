from mezzanine.conf import settings
from django.contrib import admin
from django.conf.urls import include
from django.urls import path, re_path
from mezzanine.core.views import direct_to_template, search
from digipal.patches import mezzanine_patches, compressor_patch
from digipal.models import CarouselItem
from digipal.signals import init_signals
from django.contrib.auth import views as auth_views
from django.views.generic import TemplateView
from digipal.views.robots import robots_view
from digipal.index import count
admin.autodiscover()

# apply mezzanine patches at this stage. Before that would be troublesome (importing mezzanine would reimport digipal, etc)
mezzanine_patches()
compressor_patch()


init_signals()

statistic = count()

# TODO: find a better way to import those urls. We don't want digipal -> digipal_text

urlpatterns = [
    path('', include('digipal_text.urls')),
    path('admin/', include('digipal.urls_admin')),
    path('admin', include(admin.site.urls)),
    path('digipal/', include('digipal.urls_digipal')),
    # path('digipal/', include(('digipal.urls_digipal', 'digipal'), namespace='digipal')),
    #path('login', django.contrib.auth.views.login, name='login'),
    #path('logout', django.contrib.auth.views.logout, name='logout'),
    path('accounts', include('django.contrib.auth.urls')),
    path('robots.txt', robots_view),
    path('tinymce', include('tinymce.urls')),
    path('blog/search/', search),

     # these allow us to test 404 and 500 pages in DEBUG=True mode
    path('404/?', direct_to_template, {'template': 'errors/404.html'}, name = '404'),
    path('500/?', direct_to_template, {'template': 'errors/500.html'}, name = '500'),

    


    path('', direct_to_template, {
        'template': 'home.html',
        'extra_context': {
                'statistic': statistic,
                'carousel': CarouselItem,
            }
        },
        name = 'home'
    ),

    # path("", TemplateView.as_view(template_name="home.html"), name="home"),

    # path('', include("mezzanine.urls")),
    re_path(r'^', include("mezzanine.urls"))

]
if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),

    ] + urlpatterns

#urlpatterns = patterns('', ('^', include('digipal_text.urls')))
"""
urlpatterns += patterns('',
    url(r'^admin', include('digipal.urls_admin')),
    url(r'^admin', include(admin.site.urls)),

    url(r'^digipal', include('digipal.urls_digipal')),

    url(r'^login/$', 'django.contrib.auth.views.login', name='login'),
    url(r'^logout/$', 'django.contrib.auth.views.logout', name='logout'),

    url(r'^robots.txt/?$', 'digipal.views.robots.robots_view'),

    # these allow us to test 404 and 500 pages in DEBUG=True mode
    url('^404/?$', direct_to_template, {'template': 'errors/404.html'}, name = '404'),
    url('^500/?$', direct_to_template, {'template': 'errors/500.html'}, name = '500'),

    url('^$', direct_to_template, {
        'template': 'home.html',
        'extra_context': {
                'statistic': statistic,
                'carousel': CarouselItem,
            }
        },
        name = 'home'
    ),
    url(r'^tinymce', include('tinymce.urls')),

    url(r'^blog/search/$', 'mezzanine.core.views.search'),

    #url(r'^doc/(?P<path>.*)$', 'digipal.views.doc.doc_view'),
)


if settings.LIGHTBOX:
    urlpatterns += patterns('',
        path('lightbox', include('lightbox.urls'))
    )

"""

# Server media in debug mode
#if settings.DEBUG:
#    urlpatterns += (path('media/<path>', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT, 'show_indexes': True}),)

# ADD YOUR OWN URLPATTERNS *ABOVE* THE LINE BELOW.
# ``mezzanine.urls`` INCLUDES A *CATCH ALL* PATTERN
# FOR PAGES, SO URLPATTERNS ADDED BELOW ``mezzanine.urls``
# WILL NEVER BE MATCHED!
#urlpatterns += patterns('', ('^', include('mezzanine.urls')))
