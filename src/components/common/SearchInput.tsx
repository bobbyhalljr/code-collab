// components/common/SearchInput.tsx
import React, { useState } from 'react';

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="p-2 border rounded-md focus:outline-none focus:border-primary"
      />
      <button
        type="submit"
        className="bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary focus:outline-none"
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
