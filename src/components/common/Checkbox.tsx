// components/common/Checkbox.tsx
import React, { useState } from 'react';

interface CheckboxProps {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="form-checkbox text-primary focus:outline-none focus:border-primary focus:ring focus:ring-primary"
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
