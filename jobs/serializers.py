from rest_framework.serializers import ModelSerializer
from jobs.models import Job

class JobSerializer(ModelSerializer):

    class Meta:
        model = Job
        fields = ['title','description','employer','type','location','published_date','expiration_date','apply_link']