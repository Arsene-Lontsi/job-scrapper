from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinLengthValidator,EmailValidator
# Create your models here.
class User(AbstractUser):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True, validators=[EmailValidator()])
    password = models.CharField(max_length=255,validators=[MinLengthValidator(8)])
    username = models.CharField(max_length=255)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class UserToken(models.Model):
    user_id = models.IntegerField()
    token = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    expired_at = models.DateTimeField()

class Reset(models.Model):
    email = models.EmailField(max_length=255, validators=[EmailValidator()])
    token = models.CharField(max_length=255, unique=True)

