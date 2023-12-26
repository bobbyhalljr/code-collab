// components/common/TextInput.tsx
import React from 'react';

interface TextInputProps {
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="py-2 px-4 border rounded-md focus:outline-none focus:border-primary"
    />
  );
};

export default TextInput;
