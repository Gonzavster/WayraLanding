from django.urls import path
from . import views

urlpatterns = [
    path('adminsite/', views.adminsite, name='adminsite'),
]
