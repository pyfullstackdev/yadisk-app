import yadisk
from django.conf import settings


class YandexDiskClient:
    def __init__(self):
        self.disk = yadisk.YaDisk()

    def get_files(self, public_key):
        try:
            files = self.disk.public_listdir(public_key)
            return [file for file in files]
        except yadisk.exceptions.PathNotFoundError:
            return None

    def get_download_link(self, public_key, path):
        try:
            link = self.disk.get_download_link(path, public_key=public_key)
            return link
        except yadisk.exceptions.PathNotFoundError:
            return None
