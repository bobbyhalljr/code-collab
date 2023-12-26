// components/profile/UserProfileCard.tsx
import React from 'react';

interface UserProfileCardProps {
  user: {
    id: string;
    avatar: string;
    username: string;
    bio: string;
    preferredLanguages: string;
    showcasedAchievements: string[];
  };
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  return (
    <div className="max-w-md w-full mx-auto p-4 bg-white shadow-md rounded-md mb-4">
      <div className="flex items-center space-x-4">
        {/* Avatar */}
        <img src={user.avatar} alt="User Avatar" className="w-12 h-12 rounded-full object-cover" />

        {/* User Information */}
        <div>
          <h3 className="text-lg font-semibold">{user.username}</h3>
          <p className="text-gray-500">{user.preferredLanguages}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-gray-700 mt-4">{user.bio}</p>

      {/* Showcased Achievements */}
      <div className="mt-4">
        <h4 className="text-md font-semibold mb-2">Showcased Achievements</h4>
        <ul className="list-disc list-inside">
          {user.showcasedAchievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfileCard;
