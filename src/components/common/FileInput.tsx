// components/common/FileInput.tsx
import React, { useRef } from 'react';

interface FileInputProps {
  onSelectFile: (file: File | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onSelectFile }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = () => {
    const selectedFile = fileInputRef.current?.files?.[0] || null;
    onSelectFile(selectedFile);
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary focus:outline-none"
      >
        Upload File
      </button>
    </div>
  );
};

export default FileInput;
