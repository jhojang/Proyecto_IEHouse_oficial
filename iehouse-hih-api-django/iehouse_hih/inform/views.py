from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Inform
from .serializers import InformSerializer

# Create your views here.

class InformGetPost(APIView):

    def get(self, request):
        informList = Inform.objects.all()
        informListSerializer = InformSerializer(informList, many = True)
        return Response(informListSerializer.data)

    def post(self, request):
        newInform = InformSerializer(data = request.data)
        if newInform.is_valid():
            newInform.save()
            return Response(newInform.data, status = status.HTTP_201_CREATED)
        return Response(newInform.errors, status = status.HTTP_400_BAD_REQUEST)

class InfromGetByIdUpdateDelete(APIView):

    def get_inform(self, id):
        try:
            return Inform.objects.get(pk = id)
        except Inform.DoesNotExist:
            return Response(status = status.HTTP_400_BAD_REQUEST)
    
    def get(self, request, id):
        getInform = self.get_inform(id)
        serializedInform = InformSerializer(getInform)
        return Response(serializedInform.data)

    def put(self, request, id):
        getInform = self.get_inform(id)
        serializedInform = InformSerializer(getInform, data = request.data)
        if serializedInform.is_valid():
            serializedInform.save()
            return Response(serializedInform.data, status = status.HTTP_200_OK)
        return Response(serializedInform.errors, status = status.HTTP_400_BAD_REQUEST)

    def delete(self, requet, id):
        getInform = self.get_inform(id)
        getInform.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)
