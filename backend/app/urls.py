from django.urls import path

from app.views import FileListAPIView, DownloadFileAPIView

urlpatterns = [
    path('files', FileListAPIView.as_view(), name='get_file_list'),
    path('download', DownloadFileAPIView.as_view(), name='download_file'),
]
