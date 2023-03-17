from django.urls import path
from .views import *

urlpatterns = [
    path('',index),
    path('programs', index),
    path('booking', index),
    path('about', index),
    path('contacts', index),
    path('prices', index),
    path('news', index),
    path('packages', index),

]