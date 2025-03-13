from django.urls import path
from . import views

urlpatterns = [
    path('', views.lista_carpetas, name='lista_carpetas'),
    path('crear/', views.crear_carpeta, name='crear_carpeta'),
    path('carpeta/<str:nombre_carpeta>/', views.ver_carpeta, name='ver_carpeta'),
]
