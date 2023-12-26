// components/common/ToggleGroup.tsx
import React, { useState } from 'react';

interface ToggleGroupProps {
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

const ToggleGroup: React.FC<ToggleGroupProps> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <div className="flex space-x-4">
      {options.map((option) => (
        <label key={option.value} className="flex items-center">
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={() => handleOptionChange(option.value)}
            className="form-radio text-primary focus:outline-none focus:border-primary focus:ring focus:ring-primary"
          />
          <span className="ml-2">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default ToggleGroup;
