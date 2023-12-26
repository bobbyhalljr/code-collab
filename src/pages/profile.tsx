// pages/profile.tsx
import React from 'react';
import UserProfile from '../components/profile/UserProfile';
import AppLayout from '@/components/layout/AppLayout';

const ProfilePage: React.FC = () => {
  return (
    <AppLayout>
      <div>
        <UserProfile />
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
