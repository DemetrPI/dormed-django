from .models import Price,Program, HotelNews
from modeltranslation.translator import translator, TranslationOptions


class PriceTranslationOptions (TranslationOptions):
    fields = ('position',)


class ProgramTranslationOptions (TranslationOptions):
    fields = ('title', 'description', 'results',)


class HotelNewsTranslationOptions (TranslationOptions):
    fields = ('title', 'header', 'description','features',)


translator.register (Program, ProgramTranslationOptions)
translator.register (HotelNews, HotelNewsTranslationOptions)
translator.register (Price, PriceTranslationOptions)