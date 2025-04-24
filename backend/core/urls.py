from django.urls import path
from . import views

urlpatterns = [
    path('', views.api_root, name='api-root'),
    path('upload-excel/', views.ExcelUploadView.as_view(), name='excel-upload'),
]

