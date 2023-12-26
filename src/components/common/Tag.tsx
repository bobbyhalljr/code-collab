// components/common/Tag.tsx
import React from 'react';

interface TagProps {
  label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => {
  return (
    <span className="inline-block px-2 py-1 text-white bg-blue-500 rounded-md">
      {label}
    </span>
  );
};

export default Tag;
