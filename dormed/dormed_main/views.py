from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.http import HttpResponse
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import *
from .serializers import *

# class HomePageView(TemplateView):
#     template_name = "index.html"


# class PriceView(generics.CreateAPIView):
#     queryset = Price.objects.all()
#     serializer_class = PriceSerializer
    

# class ProgramView(generics.CreateAPIView):
#     queryset = Program.objects.all()
#     serializer_class = ProgramSerializer


@api_view(['GET', 'POST'])
def price_list(request):
    if request.method == 'GET':
        data = Price.objects.all()
        serializer = PriceSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PriceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
@api_view(['GET', 'POST'])
def program_list(request):
    if request.method == 'GET':
        data = Program.objects.all()
        serializer = ProgramSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProgramSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    



@api_view(['PUT', 'DELETE'])
def price_detail(request, pk):
    try:
        price = Price.objects.get(pk=pk)
    except Price.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = PriceSerializer(price, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        price.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

@api_view(['PUT', 'DELETE'])
def program_detail(request, pk):
    try:
        program = Program.objects.get(pk=pk)
    except Program.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = ProgramSerializer(program, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        program.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)    