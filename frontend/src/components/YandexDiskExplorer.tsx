import React, { useState } from "react";
import { FileList } from "./";
import { FileItem } from "../types";
import { getFileList, downloadFile } from "../api";

const YandexDiskExplorer: React.FC = () => {
  const [publicKey, setPublicKey] = useState<string>("");
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchFiles = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await getFileList(publicKey);
      setFiles(response.data._embedded.items);
    } catch (error) {
      setError("Error fetching files");
      console.log(`Error fetching files: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (publicKey: string, filePath: string) => {
    const downloadUrl = downloadFile(publicKey, filePath);
    window.location.href = downloadUrl;
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-100 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Yandex Disk Explorer</h1>
      <div className="mb-4">
        <input
          type="text"
          value={publicKey}
          onChange={(e) => setPublicKey(e.target.value)}
          placeholder="Enter Yandex.Disk Public Key"
          className="border border-gray-300 rounded p-2 w-full mb-2"
        />
        <button
          onClick={fetchFiles}
          disabled={loading}
          className={`w-full py-2 px-4 text-white rounded ${
            loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Loading..." : "Fetch Files"}
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {files.length > 0 && (
        <FileList
          files={files}
          publicKey={publicKey}
          onDownload={handleDownload}
        />
      )}
    </div>
  );
};

export default YandexDiskExplorer;
