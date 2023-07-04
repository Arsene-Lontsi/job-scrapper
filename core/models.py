from django.db import models
from django.contrib.auth.models import AbstractUser,BaseUserManager
from django.core.validators import MinLengthValidator,EmailValidator
# Create your models here.
class UserManager(BaseUserManager):
    """Manager for users."""

    def create_user(self, email, password=None, **extra_fields):
        """Create, save and return a new user."""
        if not email:
            raise ValueError("User must have an email address")
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self,email,password):
        """Create and return a superuser"""
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user

class User(AbstractUser):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True, validators=[EmailValidator()])
    password = models.CharField(max_length=255,validators=[MinLengthValidator(8)])
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']


class UserToken(models.Model):
    user_id = models.IntegerField()
    token = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    expired_at = models.DateTimeField()

class Reset(models.Model):
    email = models.EmailField(max_length=255, validators=[EmailValidator()])
    token = models.CharField(max_length=255, unique=True)

