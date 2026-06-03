from django.db import models

class Ciudad(models.Model):
    nombre = models.CharField(max_length=100)
    departamento = models.CharField(max_length=100)
    imagen = models.ImageField(upload_to='ciudades/', null=True, blank=True)

    def __str__(self):
        return self.nombre

class Hotel(models.Model):
    nombre = models.CharField(max_length=150)
    direccion = models.CharField(max_length=200)
    estrellas = models.IntegerField()
    imagen = models.ImageField(upload_to='hoteles/', null=True, blank=True)
    
    ciudad = models.ForeignKey(Ciudad, on_delete=models.CASCADE, related_name='hoteles')

    def __str__(self):
        return self.nombre
