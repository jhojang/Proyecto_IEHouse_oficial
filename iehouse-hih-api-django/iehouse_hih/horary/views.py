from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Horary
from .serializers import HorarySerializer

# Create your views here.

class HistoryGetPost(APIView):

    def get(self, request):
        horaryList = Horary.objects.all()
        horaryListSerializer = HorarySerializer(horaryList, many = True)
        return Response(horaryListSerializer.data)

    def post(self, request):
        newHorary = HorarySerializer(data = request.data)
        if newHorary.is_valid():
            newHorary.save()
            return Response(newHorary.data, status = status.HTTP_201_CREATED)
        return Response(newHorary.errors, status = status.HTTP_400_BAD_REQUEST)

class HistoryGetByIdUpdateDelete(APIView):

    def get_horary(self, id):
        try:
            return Horary.objects.get(pk = id)
        except Horary.DoesNotExist:
            return Response(status = status.HTTP_400_BAD_REQUEST)
    
    def get(self, request, id):
        getHorary = self.get_horary(id)
        serializedHorary = HorarySerializer(getHorary)
        return Response(serializedHorary.data)

    def put(self, request, id):
        getHorary = self.get_horary(id)
        serializedHorary = HorarySerializer(getHorary, data = request.data)
        if serializedHorary.is_valid():
            serializedHorary.save()
            return Response(serializedHorary.data, status = status.HTTP_200_OK)
        return Response(serializedHorary.errors, status = status.HTTP_400_BAD_REQUEST)

    def delete(self, requet, id):
        getHorary = self.get_horary(id)
        getHorary.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)