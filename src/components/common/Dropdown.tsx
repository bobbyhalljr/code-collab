// components/common/Dropdown.tsx
import React, { useState } from 'react';

interface DropdownProps {
  options: string[];
  onSelectOption: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelectOption }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newOption = event.target.value;
    setSelectedOption(newOption);
    onSelectOption(newOption);
  };

  return (
    <select
      value={selectedOption}
      onChange={handleOptionChange}
      className="py-2 px-4 border rounded-md focus:outline-none focus:border-primary"
    >
      <option value="" disabled>
        Select an option
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
