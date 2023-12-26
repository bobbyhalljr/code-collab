// components/common/Accordion.tsx
import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleAccordion = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="border rounded-md overflow-hidden">
      <div
        className="flex items-center justify-between py-2 px-4 bg-gray-100 cursor-pointer"
        onClick={toggleAccordion}
      >
        <span className="font-semibold">{title}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="p-4 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
