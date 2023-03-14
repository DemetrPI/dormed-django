from .models import Price
from .models import Program
from modeltranslation.translator import translator, TranslationOptions


class PriceTranslationOptions (TranslationOptions):
    fields = ('item',)

class ProgramTranslationOptions (TranslationOptions):
    fields = ('title', 'description', 'results')



translator.register (Price, PriceTranslationOptions)
translator.register (Program, ProgramTranslationOptions)