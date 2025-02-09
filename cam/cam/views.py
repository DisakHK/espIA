from django.shortcuts import render

def cam_view(request):
    return render(request, 'cam.html')