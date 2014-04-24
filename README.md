# DigiPal
###### Digital Resource for and Database of Paleography, Manuscripts and Diplomatic.
----

**Please note that an important part of the project is currently hosted on a private repository. The two will be soon merged into this. This means that at the current state this repository is not enough to run Digipal locally.**

## About

The Digital Resource for Palaeography (DigiPal) is a project funded by the European Research Council that brings digital technology to bear on scholarly discussion of medieval handwriting. At its heart will be hundreds of newly-commissioned photographs of eleventh-century Anglo-Saxon script from the major manuscript collections in the world, with detailed descriptions of the handwriting, the textual content, and the wider manuscript or documentary context.

See further http://digipal.eu/

----

## Digipal Technologies Stack
Digipal is built upon the Django Web Framework. The main technologies used by the project are:
- Mezzanine as CMS and Blog
- IIPImage for the image server
- OpenLayers for the manuscript viewer
- Bootstrap for the Front-end framework
- FontAwesome icons

## How to set up Digipal

### Download Digipal
Using GIT:

	git clone https://github.com/kcl.ddh/digipal

### Create log folder
In the same folder of that created by the previous command, create a folder and call it "logs", and a file "digipal_django_debug.log" in it.

- digipal-django
	- ...
- logs
	- digipal_django_debug.log

### Installing Requirements
Using PIP:

    pip install -r requirements.txt

To see or manually install all the requirements consult the requirements.txt file provided.

### Database
**In order to run the Digipal's Database we used a PostgresQL. Therefore, we recommend you to use PostgresQL as well since we cannot ensure that the database will work on other RDBs.**

Set up the database in your local_settings.py file and fill the DATABASES object with your settings:

	DATABASES = {
	    'default': {
	        'ENGINE': '',
	        'NAME': '',
	        'USER': '',
	        'PASSWORD': '',
	        'HOST': 'localhost',
	        'PORT': '',
	    }
	 }

After that, run in your terminal the following commands:
	
	python manage.py syncdb
	python manage.py migrate

### Image uploads
	UPLOAD_IMAGES_URL = 'uploads/images/'
	UPLOAD_IMAGES_ROOT = os.path.join(PROJECT_ROOT, MEDIA_URL.strip('/'),
	        UPLOAD_IMAGES_URL.strip('/'))

	MAX_THUMB_LENGTH = 50

### Haystack
	HAYSTACK_CONNECTIONS = {
	    'default': {
	        'ENGINE': 'haystack.backends.elasticsearch_backend.ElasticsearchSearchEngine',
	        'URL': 'http://localhost:9200/',
	        'INDEX_NAME': 'haystack',
	    },
	}

	ITEM_PART_DEFAULT_LOCUS = 'face'

### IIP Image Server
	IMAGE_SERVER_WEB_ROOT = 'jp2'
	IMAGE_SERVER_HOST = 'digipal.cch.kcl.ac.uk'
	IMAGE_SERVER_PATH = '/iip/iipsrv.fcgi'
	IMAGE_SERVER_ZOOMIFY = 'http://%s%s?zoomify=%s/'
	IMAGE_SERVER_FULL = 'http://%s%s?FIF=%s&amp;RST=*&amp;QLT=100&amp;CVT=JPG'
	IMAGE_SERVER_THUMBNAIL = 'http://%s%s?FIF=%s&amp;RST=*&amp;HEI=35&amp;CVT=JPG'
	IMAGE_SERVER_THUMBNAIL_HEIGHT = 35
	IMAGE_SERVER_RGN = 'http://%s%s?FIF=%s&%s&RGN=%f,%f,%f,%f&CVT=JPG'
	IMAGE_SERVER_EXT = 'jp2'

#### DJANGO-IIPIMAGE
	IMAGE_SERVER_URL  = 'http://%s%s' % (IMAGE_SERVER_HOST, IMAGE_SERVER_PATH)
	IMAGE_SERVER_ROOT = '/vol/digipal2/images'
	IMAGE_SERVER_UPLOAD_ROOT = 'jp2'
	IMAGE_SERVER_ORIGINALS_ROOT = 'originals'
	IMAGE_SERVER_UPLOAD_EXTENSIONS = ('.jp2', '.jpg', '.tif', '.bmp', '.jpeg')
	IMAGE_SERVER_ADMIN_UPLOAD_DIR = os.path.join(IMAGE_SERVER_UPLOAD_ROOT, 'admin-upload')

### Mezzanine
	SITE_TITLE = 'ProjectName'

### Social
	TWITTER = 'TwitterUsername'
	GITHUB = 'GithubUsername/ProjectName'
	COMMENTS_DEFAULT_APPROVED = True
	COMMENTS_DISQUS_SHORTNAME = "yourDisqusName"

### Lightbox
If set to True, the links to the Lightbox will be available in Collections' page, and the Lightbox will be correctly working and accessible. The default setting value is False.

	LIGHTBOX = False

### Annotator Settings
	ANNOTATOR_ZOOM_LEVELS = 7	# This setting sets the number of zoom levels of OpenLayers' image map
	REJECT_HTTP_API_REQUESTS = False	# if True, prevents any change to the DB

## Run Digipal
By using the system terminal, go to your Digipal root folder, and then run:

	python manage.py runserver

Run you browser at the address localhost:8000

## What to do after

You should create a superuser to edit the Digipal back-end through the Mezzanine interface.
	
	python manage.py createsuperuser
	
After that, you will be able to get to the admin page by using the credentials chosen. To do this, go to the page http://localhost:8000/admin


