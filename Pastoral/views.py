from django.contrib import auth
from django.http import HttpResponse
from django.template import Template,Context
from django.shortcuts import redirect, render
from .forms import CustomUserForm, UserCreationForm
from django.contrib.auth import login, authenticate
from django.contrib.auth.models import User
from django.contrib.auth.decorators import  permission_required
import random

def tres(request):
    version = random.randint(1,99)
    return render(request,"1_a_3.html",{"v": version})    
def seis(request):
    version = random.randint(1,99)
    return render(request,"4_a_6.html",{"v": version})    
def registrar_usuario(request):
    data = {
        'form':CustomUserForm()
    }

    if request.method == 'POST':
        formulario = CustomUserForm(request.POST)
        if formulario.is_valid():
            formulario.save()

            username = formulario.cleaned_data['username']
            password = formulario.cleaned_data['password1']
            user = authenticate(username = username, password = password)
            login(request, user)
            return redirect(to='/index2/')
    return render(request,'registration/registrar.html',data)
def index2(request):
    return render(request,"index2.html")
@permission_required('sites.view_site')
def listar_usuarios(request):
    usuarios = User.objects.all()
    return render(request,'listar_usuarios.html',{"usuarios": usuarios, "email": usuarios, "last_login": usuarios})

def privacidad(request):
    return render(request,'pp.html')   

def usabilidad(request):
    return render(request,'uso.html')

def eliminar(request):
    return render(request,'Eliminar.html')    

    