from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import History
from .serializers import HistorySerializer

# Create your views here.

class HistoryGetPost(APIView):

    def get(self, request):
        historyList = History.objects.all()
        historyListSerializer = HistorySerializer(historyList, many = True)
        return Response(historyListSerializer.data)

    def post(self, request):
        newHistory = HistorySerializer(data = request.data)
        if newHistory.is_valid():
            newHistory.save()
            return Response(newHistory.data, status = status.HTTP_201_CREATED)
        return Response(newHistory.errors, status = status.HTTP_400_BAD_REQUEST)

class HistoryGetByIdUpdateDelete(APIView):

    def get_history(self, id):
        try:
            return History.objects.get(pk = id)
        except History.DoesNotExist:
            return Response(status = status.HTTP_400_BAD_REQUEST)
    
    def get(self, request, id):
        getHistory = self.get_history(id)
        serializedHistory = HistorySerializer(getHistory)
        return Response(serializedHistory.data)

    def put(self, request, id):
        getHistory = self.get_history(id)
        serializedHistory = HistorySerializer(getHistory, data = request.data)
        if serializedHistory.is_valid():
            serializedHistory.save()
            return Response(serializedHistory.data, status = status.HTTP_200_OK)
        return Response(serializedHistory.errors, status = status.HTTP_400_BAD_REQUEST)

    def delete(self, requet, id):
        getHistory = self.get_history(id)
        getHistory.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)
    