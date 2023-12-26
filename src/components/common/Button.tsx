// components/common/Button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary w-full text-white p-3 my-4 font-medium tracking-wide rounded-md hover:bg-primaryHover focus:outline-none"
    >
      {children}
    </button>
  );
};

export default Button;
