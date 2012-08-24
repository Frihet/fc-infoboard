# -*- coding: utf-8 -*-

from django.shortcuts import render_to_response
from django.template import RequestContext
import settings
import json

def slideshow(request):
    return render_to_response('thirdeye/index.html', {
        'urls' : json.dumps(settings.THIRDEYE_SLIDESHOW_URLS),
        'duration' : settings.THIRDEYE_SLIDESHOW_DEFAULT_DURATION
        }, context_instance=RequestContext(request))
