// components/profile/AvatarSelector.tsx
import React from 'react';

interface AvatarSelectorProps {
  selectedAvatar: string;
  onSelectAvatar: (avatar: string) => void;
}

const AvatarSelector: React.FC<AvatarSelectorProps> = ({ selectedAvatar, onSelectAvatar }) => {
  const avatarOptions = [
    'https://example.com/avatar1.jpg',
    'https://example.com/avatar2.jpg',
    'https://example.com/avatar3.jpg',
    // Add more avatar options as needed
  ];

  return (
    <div className="mb-6">
      <h3 className="text-2xl font-bold mb-4">Select Avatar</h3>
      <div className="flex space-x-4">
        {avatarOptions.map((avatar) => (
          <button
            key={avatar}
            className={`flex-none w-12 h-12 border-2 border-transparent rounded-full overflow-hidden focus:outline-none ${
              selectedAvatar === avatar ? 'border-blue-500' : 'hover:border-gray-400'
            }`}
            onClick={() => onSelectAvatar(avatar)}
          >
            <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default AvatarSelector;
