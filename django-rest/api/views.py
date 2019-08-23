from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import Miembro, MiembroSerializer, GrupoName, GrupoNameSerializer, Anuncio, AnuncioSerializer, Evento, EventoSerializer, UserCreateSerializer


from rest_framework.permissions import IsAuthenticated
"""
The ContactsView will contain the logic on how to:
 GET, POST, PUT or delete the contacts
"""


class ProfileView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, user_id=None):
        todos = Miembro.objects.filter(user_id=request.user.id).first()
        serializer = MiembroSerializer(todos, many=False)
        return Response(serializer.data)

    def put(self, request, user_id=None):
        user = Miembro.objects.filter(user_id=request.user.id).first()
        serializer = MiembroSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MiembroView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request,):
        todos = Miembro.objects.all()
        serializer = MiembroSerializer(todos, many=True)
        return Response(serializer.data)

    def post(self, request):
        peo = request.data
        peo['user_id'] = request.user.id
        serializer = MiembroSerializer(data=peo)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        Miembro.objects.filter(user_id=request.user.id).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, userAccount):
        todo = Miembro.objects.filter(
            user_id=request.user.id, id=request.data['user_id']).first()
        serializer = MiembroSerializer(Miembro, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GrupoNameView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, grupoName=None):
        if grupoName is not None:
            todos = GrupoName.objects.filter(grupoName=grupoName)
            serializer = GrupoNameSerializer(todos, many=False)
            return Response(serializer.data)
        else:
            todos = GrupoName.objects.all()
            serializer = GrupoNameSerializer(todos, many=True)
            return Response(serializer.data)

    def post(self, request):
        peo = request.data
        peo['user_id'] = request.user.id
        serializer = GrupoNameSerializer(data=peo)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # delete no se si es necesario

    def delete(self, request):
        GrupoName.objects.filter(id=request.GrupoName.id).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    # hay que probar bien el put

    def put(self, request, userAccount):
        todo = GrupoName.objects.filter(
            user_id=request.user.id, id=request.data['user_id']).first()
        serializer = GrupoNameSerializer(todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AnuncioView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, grupoName=None):
        if grupoName is not None:
            todos = GrupoName.objects.filter(grupoName=grupoName)
            serializer = GrupoNameSerializer(todos, many=False)
            return Response(serializer.data)
        else:
            todos = Anuncio.objects.all()
            serializer = AnuncioSerializer(todos, many=True)
            return Response(serializer.data)

    def post(self, request):
        peo = request.data
        peo['user_id'] = request.user.id
        serializer = AnuncioSerializer(data=peo)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # delete no se si es necesario

    def delete(self, request):
        Anuncio.objects.filter(id=request.Anuncio.id).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    # hay que probar bien el put

    def put(self, request, userAccount):
        todo = Anuncio.objects.filter(
            user_id=request.Anuncio.id, id=request.data['user_id']).first()
        serializer = AnuncioSerializer(todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EventoView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, grupoName=None):
        if grupoName is not None:
            todos = GrupoName.objects.filter(grupoName=grupoName)
            serializer = GrupoNameSerializer(todos, many=False)
            return Response(serializer.data)
        else:
            todos = Evento.objects.all()
            serializer = EventoSerializer(todos, many=True)
            return Response(serializer.data)

    def post(self, request):
        peo = request.data
        peo['event_id'] = request.user.id
        serializer = EventoSerializer(data=peo)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # delete no se si es necesario

    def delete(self, request):
        Evento.objects.filter(id=request.Evento.id).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    # hay que probar bien el put

    def put(self, request, userAccount):
        todo = Evento.objects.filter(
            user_id=request.Evento.id, id=request.data['user_id']).first()
        serializer = EventoSerializer(todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Registro(APIView):
    def post(self, request):
        serializer = UserCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
