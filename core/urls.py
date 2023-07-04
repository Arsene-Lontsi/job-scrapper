from django.urls import path, include

from django.contrib import admin
from .views import SignUpAPIView, LoginAPIView, UserAPIView, RefreshAPIView, LogoutAPIView,ForgotPasswordAPIView, ResetAPIView

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('signup', SignUpAPIView.as_view()),
    path('login', LoginAPIView.as_view()),
    path('user', UserAPIView.as_view()),
    path('refresh', RefreshAPIView.as_view()),
    path('logout', LogoutAPIView.as_view()),
    path('forgotpass', ForgotPasswordAPIView.as_view()),
    path('reset', ResetAPIView.as_view()),
]