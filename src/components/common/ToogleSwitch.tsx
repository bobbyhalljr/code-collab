// components/common/ToggleSwitch.tsx
import React, { useState } from 'react';

interface ToggleSwitchProps {
  label: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label }) => {
  const [isChecked, setChecked] = useState(false);

  const handleToggleChange = () => {
    setChecked(!isChecked);
  };

  return (
    <label className="flex items-center space-x-2">
      <span>{label}</span>
      <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggleChange}
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
    </label>
  );
};

export default ToggleSwitch;
