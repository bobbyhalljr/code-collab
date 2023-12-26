// components/common/FilePreview.tsx
import React from 'react';

interface FilePreviewProps {
  file: File;
}

const FilePreview: React.FC<FilePreviewProps> = ({ file }) => {
  return (
    <div className="flex items-center space-x-2">
      <span>{file.name}</span>
      <span>({Math.round(file.size / 1024)} KB)</span>
    </div>
  );
};

export default FilePreview;
