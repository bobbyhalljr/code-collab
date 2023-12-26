// components/common/Select.tsx
import React, { useState } from 'react';

interface SelectProps {
  options: string[];
}

const Select: React.FC<SelectProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select
      value={selectedOption}
      onChange={handleSelectChange}
      className="py-2 px-4 border rounded-md focus:outline-none focus:border-primary"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
