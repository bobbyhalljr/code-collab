// pages/challenges/[category]/[challenge]/submit-result.tsx
import React from 'react';
import { useRouter } from 'next/router';
import ChallengeSubmitResult from '../../../../components/challenges/ChallengeSubmitResults';
import AppLayout from '../../../../components/layout/AppLayout';

const ChallengeSubmitResultPage: React.FC = () => {
  const router = useRouter();
  const { category, challenge } = router.query;

  return (
    <AppLayout>
      <ChallengeSubmitResult
        category={category as string}
        challengeId={challenge as string}
      />
    </AppLayout>
  );
};

export default ChallengeSubmitResultPage;
