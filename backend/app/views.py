from rest_framework.response import Response
from rest_framework import generics, status

from app.serializers import FileListSerializer, DownloadFileSerializer
from app.yandex_disk_client import YandexDiskClient


class FileListAPIView(generics.GenericAPIView):
    serializer_class = FileListSerializer

    def post(self, request, *args, **kwargs):
        public_key = request.data.get('public_key')
        if not public_key:
            return Response({"error": "public_key is required"}, status=status.HTTP_400_BAD_REQUEST)

        client = YandexDiskClient()
        files = client.get_files(public_key)

        if files is None:
            return Response({"error": "Files not found or invalid public key"}, status=status.HTTP_404_NOT_FOUND)

        file_list = [
            {
                "name": file['name'],
                "path": file['path'],
                "type": file['type']
            }
            for file in files
        ]
        return Response(file_list, status=status.HTTP_200_OK)


class DownloadFileAPIView(generics.GenericAPIView):
    serializer_class = DownloadFileSerializer

    def post(self, request, *args, **kwargs):
        public_key = request.data.get('public_key')
        path = request.data.get('path')
        if not public_key or not path:
            return Response({"error": "public_key and path are required"}, status=status.HTTP_400_BAD_REQUEST)

        client = YandexDiskClient()
        link = client.get_download_link(public_key, path)
        if link is None:
            return Response({"error": "File not found or invalid parameters"}, status=status.HTTP_404_NOT_FOUND)

        return Response({"download_link": link}, status=status.HTTP_200_OK)
