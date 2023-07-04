from django.urls import path,include
from rest_framework.routers import SimpleRouter

from jobs.views import JobViewSet

router = SimpleRouter()

router.register('jobs', JobViewSet, basename='jobs')

urlpatterns = [
    path('', include(router.urls)),
]