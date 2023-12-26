// pages/challenges/[category].tsx
import React from 'react';
import { useRouter } from 'next/router';
import ChallengeList from '../../components/challenges/ChallengeList';
import AppLayout from '../../components/layout/AppLayout';

const ChallengeCategory: React.FC = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <AppLayout>
      <ChallengeList category={category as string} />
    </AppLayout>
  );
};

export default ChallengeCategory;
