# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def adminsite(request):
    template = loader.get_template('adminsite.html')
    return HttpResponse(template.render())