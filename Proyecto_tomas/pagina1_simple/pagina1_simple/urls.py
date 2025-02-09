from django.contrib import admin
from django.urls import path, include  # Agrega include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('carpetas.urls')),  # Incluye las URLs de la app 'carpetas'
]
