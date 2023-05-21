from rest_framework import serializers
from .models import Price, Program, HotelNews

class PriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Price
        fields = ('pk','position', 'position_en', 'position_pl', 'position_uk', 'price', 'category')
        

class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = ('pk','title', 'title_uk','title_pl','title_en',
                  'description','description_uk', 'description_pl','description_en', 
                  'results','results_uk','results_pl','results_en', 'category')
        

class HotelNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = HotelNews
        fields = ('pk','title', 'title_uk','title_pl','title_en',
                  'description','description_uk', 'description_pl','description_en', 
                  'header','header_uk','header_pl','header_en',
                  'features','features_uk','features_pl','features_en',
                  'posted_on','image_left', 'image_right'
                  )