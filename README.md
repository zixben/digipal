This is a fork of the Digipal porject which aims to make it compatible with the latest versions of Python and all the packages needed to run it.

**Note**
`...venv/lib/python3.12/site-packages/pagination/templatetags/pagination_tags.py`, line 225: replace `except KeyError, AttributeError` with `except KeyError(AttributeError)`

`...venv/lib/python3.12/site-packages/iipimage/storage.py`, line 80: replace `except subprocess.CalledProcessError, e:` with `except subprocess.CalledProcessError(e)`
