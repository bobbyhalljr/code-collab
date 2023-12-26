// pages/progress/[category].tsx
import { useRouter } from 'next/router';
import ChallengeProgressPage from '../../components/challenges/ChallengeProgressPage';
import AppLayout from '../../components/layout/AppLayout';

const ChallengeProgress: React.FC = () => {
  const router = useRouter();
  const { category } = router.query;

  // You should fetch the user's progress data from your data source based on category
  const completedChallenges = [
    { title: 'React Component', score: 90 },
    { title: 'State Management', score: 85 },
    // Add more completed challenges as needed
  ];

  return (
    <AppLayout>
      <ChallengeProgressPage
        category={category as string}
        completedChallenges={completedChallenges}
      />
    </AppLayout>
  );
};

export default ChallengeProgress;
