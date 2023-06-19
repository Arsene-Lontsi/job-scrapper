from django.urls import path, include
from .views import SignUpAPIView, LoginAPIView, UserAPIView, RefreshAPIView, LogoutAPIView,ForgotPasswordAPIView, ResetAPIView

urlpatterns = [
    path('signup', SignUpAPIView.as_view()),
    path('login', LoginAPIView.as_view()),
    path('user', UserAPIView.as_view()),
    path('refresh', RefreshAPIView.as_view()),
    path('logout', LogoutAPIView.as_view()),
    path('forgot', ForgotPasswordAPIView.as_view()),
    path('reset', ResetAPIView.as_view()),

]