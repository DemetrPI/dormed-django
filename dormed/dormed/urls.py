"""dormed URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from dormed_main import views
from django.conf.urls.i18n import i18n_patterns
from django.utils.translation import gettext_lazy as _



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    re_path(r'^api/prices/$', views.price_list),
    re_path(r'^api/programs/$', views.program_list),
    re_path(r'^api/news/$', views.news_list),
    re_path(r'^api/prices/([0-9])$', views.price_detail),
    re_path(r'^api/programs/([0-9])$', views.program_detail),
    re_path(r'^api/news/([0-9])$', views.news_detail),
    path('i18n/', include('django.conf.urls.i18n')),
]

urlpatterns += i18n_patterns (
    path('', include('frontend.urls')),
)
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)