// components/profile/UserProfileSettings.tsx
import React, { useState } from 'react';

const UserProfileSettings: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [preferredLanguages, setPreferredLanguages] = useState<string>('');
  const [socialMediaLinks, setSocialMediaLinks] = useState<string>('');

  const handleSaveSettings = () => {
    // Implement logic to save user profile settings to the backend (e.g., using Supabase)
    console.log('Settings Saved:', { username, preferredLanguages, socialMediaLinks });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold mb-6">Profile Settings</h2>

      {/* Username */}
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      {/* Preferred Programming Languages */}
      <div className="mb-4">
        <label htmlFor="preferredLanguages" className="block text-sm font-medium text-gray-700">
          Preferred Programming Languages
        </label>
        <input
          id="preferredLanguages"
          type="text"
          value={preferredLanguages}
          onChange={(e) => setPreferredLanguages(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      {/* Social Media Links */}
      <div className="mb-6">
        <label htmlFor="socialMediaLinks" className="block text-sm font-medium text-gray-700">
          Social Media Links
        </label>
        <input
          id="socialMediaLinks"
          type="text"
          value={socialMediaLinks}
          onChange={(e) => setSocialMediaLinks(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      {/* Save Settings Button */}
      <button
        className="bg-blue-500 w-full text-white p-3 rounded-md mt-6 hover:bg-blue-600"
        onClick={handleSaveSettings}
      >
        Save profile
      </button>
    </div>
  );
};

export default UserProfileSettings;
