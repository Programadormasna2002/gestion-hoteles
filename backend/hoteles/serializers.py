from rest_framework import serializers
from .models import Ciudad, Hotel

class CiudadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ciudad
        fields = '__all__'

class HotelSerializer(serializers.ModelSerializer):
    # Esto incluirá de forma opcional los datos de la ciudad anidados al consultar el hotel
    ciudad_detalle = CiudadSerializer(source='ciudad', read_only=True)

    class Meta:
        model = Hotel
        fields = '__all__'