// components/common/ToggleAccordion.tsx
import React, { useState } from 'react';

interface ToggleAccordionProps {
  title: string;
  content: React.ReactNode;
}

const ToggleAccordion: React.FC<ToggleAccordionProps> = ({ title, content }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleAccordion = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="border rounded-md overflow-hidden">
      <div
        onClick={toggleAccordion}
        className="flex items-center justify-between py-2 px-4 bg-gray-100 cursor-pointer"
      >
        <span className="font-semibold">{title}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <div className="p-4 bg-white">{content}</div>}
    </div>
  );
};

export default ToggleAccordion;
