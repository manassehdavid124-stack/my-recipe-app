from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def signup(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    if not username or not password:
        return Response({"error": "Missing fields"})

    if User.objects.filter(username=username).exists():
        return Response({"error": "User already exists"})

    User.objects.create_user(
        username=username,
        email=email,
        password=password
    )
    return Response({"message": "User created successfully"})

@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response({"error": "Missing fields"})

    from django.contrib.auth import authenticate, login

    user = authenticate(username=username, password=password)

    if user is None:
        return Response({"error": "Invalid credentials"})

    return Response({
        "message": "Login successful",
        "username": user.username
    })