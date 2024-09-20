import React from "react";
import { FileListProps } from "../types";
import FileItem from "./FileItem";

const FileList: React.FC<FileListProps> = ({
  files,
  publicKey,
  onDownload,
}) => {
  return (
    <ul className="bg-white shadow rounded-md p-4">
      {files.map((file) => (
        <FileItem
          key={file.path}
          file={file}
          publicKey={publicKey}
          onDownload={onDownload}
        />
      ))}
    </ul>
  );
};

export default FileList;
