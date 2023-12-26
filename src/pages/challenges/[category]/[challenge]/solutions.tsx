// pages/challenges/[category]/[challenge]/solutions.tsx
import React from 'react';
import { useRouter } from 'next/router';
import ChallengeSolutions from '../../../../components/challenges/ChallengeSolutions';
import AppLayout from '../../../../components/layout/AppLayout';

const ChallengeSolutionsPage: React.FC = () => {
  const router = useRouter();
  const { category, challenge } = router.query;

  // You should fetch the list of solutions from your data source based on category and challenge ID
  const solutions = [
    { id: '1', user: 'User1', solution: 'Code for solution 1' },
    { id: '2', user: 'User2', solution: 'Code for solution 2' },
    // Add more solutions as needed
  ];

  return (
    <AppLayout>
      <ChallengeSolutions
        category={category as string}
        challengeId={challenge as string}
        solutions={solutions}
      />
    </AppLayout>
  );
};

export default ChallengeSolutionsPage;
