from django.db import models
from django.contrib import admin

class Task(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    def __str__(self):
        return self.title
    

admin.site.register(Task)