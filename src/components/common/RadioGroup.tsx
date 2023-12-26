// components/common/RadioGroup.tsx
import React, { useState } from 'react';

interface RadioGroupProps {
  options: { label: string; value: string }[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div className="flex space-x-4">
      {options.map((option) => (
        <label key={option.value} className="flex items-center">
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={() => handleRadioChange(option.value)}
            className="form-radio text-primary focus:outline-none focus:border-primary focus:ring focus:ring-primary"
          />
          <span className="ml-2">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
