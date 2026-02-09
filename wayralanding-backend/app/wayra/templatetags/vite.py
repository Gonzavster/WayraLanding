from django import template
from django.conf import settings
import json
from pathlib import Path
import logging

register = template.Library()
logger = logging.getLogger(__name__)
# Text is logged to /var/log/gunicorn/gunicorn.err.log, run it with tail -f <path>

@register.simple_tag
def vite_asset(entry):
    #logger.error(f"VITE: mode={'DEBUG' if settings.DEBUG else 'PROD'} entry={entry}")
    if settings.DEBUG:
        #logger.error("It is getting into DEBUG")
        return f"http://localhost:5173/src/{entry}"

    #logger.error(f"STATIC_ROOT = {settings.STATIC_ROOT}")
    manifest_path = settings.STATIC_ROOT / "manifest.json"
    with open(manifest_path) as f:
        manifest = json.load(f)
    #logger.error("VITE MANIFEST:\n%s", json.dumps(manifest, indent=2))
    if entry not in manifest:
        raise Exception(f"{entry} not in manifest keys: {manifest.keys()}")
    res=  settings.STATIC_URL + manifest[entry]["file"]
    #logger.error(f"result = {res}")
    return res