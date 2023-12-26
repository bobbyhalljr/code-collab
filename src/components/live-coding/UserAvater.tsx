// components/liveCoding/UserAvatar.tsx
import React from 'react';

interface UserAvatarProps {
  userName: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ userName }) => {
  // Generate a simple hash-based color for the avatar background
  const getAvatarColor = (name: string) => {
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const hue = hash % 360;
    return `hsl(${hue}, 70%, 50%)`;
  };

  return (
    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
      {userName.charAt(0).toUpperCase()}
    </div>
  );
};

export default UserAvatar;
