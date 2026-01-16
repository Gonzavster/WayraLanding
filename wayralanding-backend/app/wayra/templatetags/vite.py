from django import template
from django.conf import settings
import json
from pathlib import Path

register = template.Library()


@register.simple_tag
def vite_asset(entry):
    if settings.DEBUG:
        return f"http://localhost:5173/src/{entry}"

    manifest_path = settings.STATIC_ROOT / "manifest.json"
    with open(manifest_path) as f:
        manifest = json.load(f)

    return settings.STATIC_URL + manifest[entry]["file"]