from rest_framework import serializers
from .models import *

class PriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Price
        fields = ('pk','item', 'description', 'price')
        

class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = ('pk','title', 'description', 'results')