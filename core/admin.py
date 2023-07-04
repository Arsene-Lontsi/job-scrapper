from django.contrib import admin
from core.models import User

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'is_active', 'is_staff','is_superuser','last_login')

admin.site.register(User,UserAdmin)