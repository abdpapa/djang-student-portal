
from django.urls import path
from .views import home
from rest_framework.routers import DefaultRouter



urlpatterns = [
    path('',home)
]
                                                                                         