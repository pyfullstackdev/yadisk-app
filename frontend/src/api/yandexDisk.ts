import axios from "axios";
import { FileItem } from "../types";

const http = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

export const getFileList = (publicKey: string) => {
  return http.post<{ _embedded: { items: FileItem[] } }>("/files", {
    public_key: publicKey,
  });
};

export const downloadFile = (publicKey: string, filePath: string) => {
  return http.post<{ download_link: string }>("/download", {
    public_key: publicKey,
    path: filePath,
  });
};
