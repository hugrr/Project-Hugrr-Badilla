"""
All your application modules and serializers are going to be declared inside this file
"""
from rest_framework import serializers
from django.db import models
from django.contrib.auth.models import User
"""
Define he Contact Entity into your applcation model
"""


class GrupoName(models.Model):
    grupoName= models.CharField(max_length=50, default='')
    terminos = models.CharField(max_length=150, default='')
    media= models.CharField(max_length=150, default='')
class Miembro(models.Model):
    userAccount= models.CharField(max_length=50, default='')
    fecha_nacimiento = models.CharField(max_length=150, default='')
    phone = models.CharField(max_length=150, default='')
    mail = models.CharField(max_length=150, default='')
    user_id = models.ForeignKey(User,on_delete=models.CASCADE)
    grupoid = models.ForeignKey(GrupoName,on_delete=models.CASCADE, null =True)
class Anuncio(models.Model):
    anuncioName= models.CharField(max_length=50, default='')
    descripton = models.CharField(max_length=150, default='')
    media = models.CharField(max_length=150, default='')
    date_anuncio = models.DateField(auto_now=False, auto_now_add=False,)
    anuncio_nameID = models.ForeignKey(Miembro,on_delete=models.CASCADE)
    ubication = models.CharField(max_length=150, default='')
class Pais(models.Model):
    pais = models.CharField(max_length=50, default='')
    status = models.CharField(max_length=50, default='')
class Region(models.Model):
    region = models.CharField(max_length=50, default='')
    status = models.CharField(max_length=50, default='')
class Comuna(models.Model):
    comuna = models.CharField(max_length=50, default='')
    status = models.CharField(max_length=50, default='')
class Ubicacion(models.Model):
    name_ubication = models.CharField(max_length=50, default='')
    status = models.CharField(max_length=150, default='')
    pais_nameID = models.ForeignKey(Pais,on_delete=models.CASCADE)
    region_nameID = models.ForeignKey(Region,on_delete=models.CASCADE)
    comuna_nameID = models.ForeignKey(Comuna,on_delete=models.CASCADE)
    ubication_nameID = models.ForeignKey(Miembro,on_delete=models.CASCADE )
class Evento(models.Model):
    name_event= models.CharField(max_length=50, default='')
    date_event = models.DateField(auto_now=False, auto_now_add=False,)
    cost = models.CharField(max_length=150, default='')
    event_id= models.ForeignKey(Miembro,on_delete=models.CASCADE)
    grupo_nameID = models.ForeignKey(GrupoName,on_delete=models.CASCADE, null =True)
    ubicationID = models.ForeignKey(Ubicacion,on_delete=models.CASCADE, null =True)

class Votos(models.Model):
    voto = models.CharField(max_length=50, default='')
    status = models.CharField(max_length=50, default='')
    evento_nameID = models.ForeignKey(Evento,on_delete=models.CASCADE)
    date_anuncio = models.DateField(max_length=150, default='')
    votante_id= models.ForeignKey(Miembro,on_delete=models.CASCADE)
class Roles(models.Model):
    name_rol = models.CharField(max_length=50, default='')
    miembro_id= models.ForeignKey(Miembro,on_delete=models.CASCADE)


"""
The ContactSerializer is where you will specify what properties
from the ever Contact should be inscuded in the JSON response
"""

class GrupoNameSerializer(serializers.ModelSerializer):

    class Meta:
        model = GrupoName
        # what fields to include?
        fields = ('id', 'grupoName', 'terminos', 'media',)


class MiembroSerializer(serializers.ModelSerializer):
    grupoName = GrupoNameSerializer(many=False, read_only=True)

    class Meta:
        model = Miembro
        # what fields to include?
        fields = ('id', 'userAccount', 'fecha_nacimiento', 'phone', 'mail', 'user_id', 'grupoid', 'grupoName')

class EventoSerializer(serializers.ModelSerializer):


    class Meta:
        model = Evento
        # what fields to include?
        fields = ('name_event','date_event','cost','event_id','grupo_nameID')

class AnuncioSerializer(serializers.ModelSerializer):


    class Meta:
        model = Anuncio
        # what fields to include?
        fields = ('id','anuncioName','descripton','media','date_anuncio','anuncio_nameID','ubication')

class PaisSerializer(serializers.ModelSerializer):


    class Meta:
        model = Pais
        # what fields to include?
        fields = ('pais','status')

class RegionSerializer(serializers.ModelSerializer):


    class Meta:
        model = Region
        # what fields to include?
        fields = ('region','status')

class ComunaSerializer(serializers.ModelSerializer):


    class Meta:
        model = Comuna
        # what fields to include?
        fields = ('comuna','status')

class UbicacionSerializer(serializers.ModelSerializer):


    class Meta:
        model = Ubicacion
        # what fields to include?
        fields = ('name_ubication','ubication_nameID','status','pais_nameID','region_nameID', 'comuna_nameID')

class VotosSerializer(serializers.ModelSerializer):


    class Meta:
        model = Votos
        # what fields to include?
        fields = ('voto','status','evento_nameID','date_anuncio','votante_id')

class RolesSerializer(serializers.ModelSerializer):


    class Meta:
        model = Roles
        # what fields to include?
        fields = ('name_rol ','miembro_id')

class UserCreateSerializer(serializers.ModelSerializer):
    email = serializers.CharField()
    password = serializers.CharField()

    class Meta:
        model = User
        extra_kwargs = {'password': {'write_only': True}}
        # there what you want to initial.
        fields = ('id', 'username', 'password', 'email')

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
        )
        user.set_password(validated_data['password'])
        user.save()
        Miembro.objects.create(
            userAccount=user.username,
            fecha_nacimiento="",
            phone="",
            mail=user.email,
            user_id=user
        )
        return user


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        # what fields to include?
        fields = ('id', 'username', 'password')


