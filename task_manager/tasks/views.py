from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from tasks.models import Task
from tasks.serializers import TaskSerializer
from rest_framework import viewsets , status


def task_manager(request):
    return render(request, 'index.html')





class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer










