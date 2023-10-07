from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from tasks.models import Task
from tasks.serializers import TaskSerializer
from rest_framework import viewsets


def task_manager(request):
    return render(request, 'index.html')





class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer



@api_view(['POST'])
def save_task_to_model(request):
    task_serializer = TaskSerializer(data=request.data)
    if task_serializer.is_valid():
        task_serializer.save()
        return Response(task_serializer.data, status=201)
    return Response(task_serializer.errors, status=400)


@api_view(['GET'])
def list_tasks(request):
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)