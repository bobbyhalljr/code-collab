// pages/challenges/[category]/[challenge].tsx
import React from 'react';
import { useRouter } from 'next/router';
import ChallengeSolvePage from '../../../components/challenges/ChallengeSolvePage';
import AppLayout from '../../../components/layout/AppLayout';
import ChallengeSolve from '@/components/challenges/ChallengeSolve';

const SolveChallengePage: React.FC = () => {
  const router = useRouter();
  const { category, challenge } = router.query;

  // You should fetch the challenge details from your data source based on category and challenge ID
  const challengeDetails = { title: 'Challenge Title', description: 'Challenge Description' };

  return (
    <AppLayout>
      <ChallengeSolve
              category={category as string}
              challengeTitle={challengeDetails.title}
              challengeDescription={challengeDetails.description} challengeId={''} />
    </AppLayout>
  );
};

export default SolveChallengePage;
