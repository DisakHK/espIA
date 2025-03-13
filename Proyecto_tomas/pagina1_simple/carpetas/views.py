from django.shortcuts import render, redirect
from django.http import HttpResponse

# Lista de carpetas (mientras el servidor esté corriendo)
carpetas = ['Canciones que me gustan']

def lista_carpetas(request):
    return render(request, 'carpetas/lista_carpetas.html', {'carpetas': carpetas})

def crear_carpeta(request):
    if request.method == 'POST':
        nueva_carpeta = request.POST.get('nombre_carpeta')
        if nueva_carpeta and nueva_carpeta not in carpetas:
            carpetas.append(nueva_carpeta)
        return redirect('lista_carpetas')
    return render(request, 'carpetas/crear_carpeta.html')

def ver_carpeta(request, nombre_carpeta):
    if nombre_carpeta in carpetas:
        return render(request, 'carpetas/ver_carpeta.html', {'nombre_carpeta': nombre_carpeta})
    else:
        return HttpResponse("Carpeta no encontrada", status=404)
