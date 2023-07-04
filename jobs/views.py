from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework import filters,status
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from jobs.models import Job
from jobs.serializers import JobSerializer
# Create your views here.


class JobViewSet(ModelViewSet):

    queryset = Job.objects.all()
    serializer_class = JobSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'description']
    def filter_queryset(self, queryset):
        queryset = super().filter_queryset(queryset)
        if not queryset.exists():
            raise NotFound('No results found.')
        return queryset