from django.shortcuts import render

from rest_framework import viewsets
from .models import Ciudad, Hotel
from .serializers import CiudadSerializer, HotelSerializer

class CiudadViewSet(viewsets.ModelViewSet):
    queryset = Ciudad.objects.all()
    serializer_class = CiudadSerializer

class HotelViewSet(viewsets.ModelViewSet):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer
