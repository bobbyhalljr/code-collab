// components/profile/UserProfileList.tsx
import React from 'react';
import UserProfileCard from './UserProfileCard';

interface UserProfileListProps {
  profiles: {
    id: string;
    avatar: string;
    username: string;
    bio: string;
    preferredLanguages: string;
    showcasedAchievements: string[];
  }[];
}

const UserProfileList: React.FC<UserProfileListProps> = ({ profiles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {profiles.map((profile) => (
        <UserProfileCard key={profile.id} user={profile} />
      ))}
    </div>
  );
};

export default UserProfileList;
