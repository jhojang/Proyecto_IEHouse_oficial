from rest_framework import serializers
from .models import Horary

class HorarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Horary
        fields = '__all__'