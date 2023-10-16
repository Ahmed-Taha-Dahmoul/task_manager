from django.contrib import admin
from django.urls import path, include  # Import include
from tasks import views
from rest_framework.routers import DefaultRouter
from tasks.views import TaskViewSet
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions


schema_view = get_schema_view(
    openapi.Info(
        title="taskmanager API",
        default_version='v1',
        description="API for educational purposes and local development.",

    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


router = DefaultRouter()
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.task_manager, name='task_manager'),
    path('api/', include(router.urls)),  # Include the router's URLs under the 'api/' prefix
    path('swagger<str:format>', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
