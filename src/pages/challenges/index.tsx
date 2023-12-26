// pages/challenges.tsx
import React from 'react';
import ChallengeCategoryPage from '../../components/challenges/ChallengeCategoryPage';
import AppLayout from '@/components/layout/AppLayout';

const Challenges: React.FC = () => {
  return (
  <AppLayout>
      <ChallengeCategoryPage />
  </AppLayout>
  );
};

export default Challenges;
