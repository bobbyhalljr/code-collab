// pages/solve/[category]/[challenge].tsx
import { useRouter } from 'next/router';
import ChallengeSolvePage from '../../../components/challenges/ChallengeSolvePage';
import AppLayout from '../../../components/layout/AppLayout';
import { reactChallenges } from '../../../challengeData';

const SolveChallengePage: React.FC = () => {
  const router = useRouter();
  const { category, challenge } = router.query;

  // You should fetch the challenge details from your data source based on category and challenge ID
  const challengeDetails = reactChallenges.find((c) => c.title === challenge);

  const handleSubmitCode = (code: string) => {
    // Handle code submission logic (e.g., send code to server for evaluation)
    console.log('Submitted code:', code);
  };

  return (
    <AppLayout>
      <ChallengeSolvePage
        category={category as string}
        challengeTitle={challengeDetails?.title || ''}
        instructions={challengeDetails?.instructions || ''}
        onSubmit={handleSubmitCode} challengeDescription={''} />
    </AppLayout>
  );
};

export default SolveChallengePage;
