// components/common/DropdownMenu.tsx
import React, { useState } from 'react';

interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: { label: string; onClick: () => void }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ trigger, items }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative inline-block">
      <div onClick={toggleMenu}>{trigger}</div>
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 space-y-2 bg-white border rounded-md shadow-md">
          {items.map((item) => (
            <div
              key={item.label}
              onClick={() => {
                item.onClick();
                setMenuOpen(false);
              }}
              className="p-2 cursor-pointer hover:bg-gray-100"
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
