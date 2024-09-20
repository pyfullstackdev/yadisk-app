from rest_framework import serializers


class FileListSerializer(serializers.Serializer):
    public_key = serializers.CharField()


class DownloadFileSerializer(serializers.Serializer):
    public_key = serializers.CharField()
    file_path = serializers.CharField()
