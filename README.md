This is a fork of the Digipal porject which aims to make it compatible with the latest versions of Python and all the packages needed to run it.

**Note**
`...venv/lib/python3.12/site-packages/pagination/templatetags/pagination_tags.py`: line 225: replace `except KeyError, AttributeError` with `except KeyError(AttributeError)`

`...venv/lib/python3.12/site-packages/iipimage/storage.py`: line 80: replace `except subprocess.CalledProcessError, e:` with `except subprocess.CalledProcessError(e)`

`...venv/lib/python3.12/site-packages/mezzanine/utils/html.py`: replace `protocols=ALLOWED_PROTOCOLS + ["tel"]` with `protocols=list(ALLOWED_PROTOCOLS) + ["tel"]`

`...venv/lib/python3.12/site-packages/grappelli_safe/templates/admin/change_list.html` and `...venv/lib/python3.12/site-packages/grappelli_safe/templates/admin/change_form.html`: replace `django.jQuery(function($) {` with `$(document).ready(function() {`

`...venv/lib/python3.12/site-packages/filebrowser_safe/templates/filebrowser/include/filelisting.html`: line 1 add `thumbnail` tag. line 18, 75 `file.path 60 60` with `file.path 60x60` contained within `<a>` element tag.

**To install the less compiler within the virtual environment**

```
pip install nodeenv  
nodeenv --python-virtualenv
npm install -g less
```
