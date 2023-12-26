// components/profile/UserProfile.tsx
import React, { useState } from 'react';
import AvatarSelector from './AvatarSelector';
import BioEditor from './BioEditor';
import AchievementsSelector from './AchievementsSelector';
import UserProfileSettings from './UserProfileSettings';

const UserProfile: React.FC = () => {
  const [selectedAvatar, setSelectedAvatar] = useState<string>(''); // Store selected avatar URL
  const [bio, setBio] = useState<string>(''); // Store user's bio
  const [selectedAchievements, setSelectedAchievements] = useState<string[]>([]); // Store selected achievements

  const handleSaveProfile = () => {
    // Implement logic to save user profile data to the backend (e.g., using Supabase)
    console.log('Profile Saved:', { selectedAvatar, bio, selectedAchievements });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold mb-6">Customize your profile</h2>

      {/* Avatar Selector */}
      <AvatarSelector selectedAvatar={selectedAvatar} onSelectAvatar={setSelectedAvatar} />

      {/* Bio Editor */}
      <BioEditor bio={bio} onEditBio={setBio} />

      {/* Achievements Selector */}
      <AchievementsSelector selectedAchievements={selectedAchievements} onSelectAchievements={setSelectedAchievements} />

      {/* User Profile Settings */}
      <UserProfileSettings />
    </div>
  );
};

export default UserProfile;
