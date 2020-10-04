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

