from rest_framework import serializers
from .models import *

class PriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Price
        fields = ('pk','item', 'item_en', 'item_pl', 'item_uk', 'price_others')
        

class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = ('pk','title', 'title_uk','title_pl','title_en',
                  'description','description_uk', 'description_pl','description_en', 
                  'results','results_uk','results_pl','results_en')