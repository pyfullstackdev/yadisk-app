import React from "react";
import { FileItemProps } from "../types";

const FileItem: React.FC<FileItemProps> = ({ file, publicKey, onDownload }) => {
  return (
    <li className="flex justify-between items-center border-b last:border-none p-2">
      <div>
        <span className="font-medium text-gray-700">{file.name}</span> -
        <span className="text-gray-500 ml-2">{file.type}</span>
      </div>
      {file.type === "file" && (
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          onClick={() => onDownload(publicKey, file.path)}
        >
          Download
        </button>
      )}
    </li>
  );
};

export default FileItem;
