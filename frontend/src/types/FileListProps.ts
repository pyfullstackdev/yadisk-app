export interface FileListProps {
  files: {
    name: string;
    path: string;
    type: string;
  }[];
  publicKey: string;
  onDownload: (publicKey: string, filePath: string) => void;
}
