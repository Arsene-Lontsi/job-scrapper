from django.db import models
# Create your models here.
class Job(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    description = models.CharField()
    employer = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    published_date = models.CharField(max_length=15)
    expiration_date = models.CharField(max_length=15)
    apply_link = models.CharField(max_length=100)