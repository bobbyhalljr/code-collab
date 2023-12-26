// components/profile/BioEditor.tsx
import React from 'react';

interface BioEditorProps {
  bio: string;
  onEditBio: (bio: string) => void;
}

const BioEditor: React.FC<BioEditorProps> = ({ bio, onEditBio }) => {
  return (
    <div className="mb-6">
      <h3 className="text-2xl font-bold mb-4">Edit Bio</h3>
      <textarea
        value={bio}
        onChange={(e) => onEditBio(e.target.value)}
        className="w-full p-2 border rounded-md"
        placeholder="Write a short bio..."
        rows={4}
      ></textarea>
    </div>
  );
};

export default BioEditor;
