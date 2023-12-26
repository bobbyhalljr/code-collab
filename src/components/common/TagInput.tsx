// components/common/TagInput.tsx
import React, { useState } from 'react';

interface TagInputProps {
  onAddTag: (tag: string) => void;
}

const TagInput: React.FC<TagInputProps> = ({ onAddTag }) => {
  const [newTag, setNewTag] = useState('');

  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTag(event.target.value);
  };

  const handleTagAdd = () => {
    if (newTag.trim() !== '') {
      onAddTag(newTag.trim());
      setNewTag('');
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={newTag}
        onChange={handleTagChange}
        placeholder="Add a tag"
        className="p-2 border rounded-md focus:outline-none focus:border-primary"
      />
      <button
        onClick={handleTagAdd}
        className="bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary focus:outline-none"
      >
        Add Tag
      </button>
    </div>
  );
};

export default TagInput;
