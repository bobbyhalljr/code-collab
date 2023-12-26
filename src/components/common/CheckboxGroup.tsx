// components/common/CheckboxGroup.tsx
import React, { useState } from 'react';

interface CheckboxGroupProps {
  options: { label: string; value: string }[];
  onChange: (selectedOptions: string[]) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    const updatedSelection = selectedOptions.includes(value)
      ? selectedOptions.filter((option) => option !== value)
      : [...selectedOptions, value];

    setSelectedOptions(updatedSelection);
    onChange(updatedSelection);
  };

  return (
    <div className="flex space-x-4">
      {options.map((option) => (
        <label key={option.value} className="flex items-center">
          <input
            type="checkbox"
            value={option.value}
            checked={selectedOptions.includes(option.value)}
            onChange={() => handleCheckboxChange(option.value)}
            className="form-checkbox text-primary focus:outline-none focus:border-primary focus:ring focus:ring-primary"
          />
          <span className="ml-2">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;
