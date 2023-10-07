from django.contrib import admin
from django.urls import path, include  # Import include
from tasks import views
from rest_framework.routers import DefaultRouter
from tasks.views import TaskViewSet

router = DefaultRouter()
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.task_manager, name='task_manager'),
    path('api/', include(router.urls)),  # Include the router's URLs under the 'api/' prefix
    
]
