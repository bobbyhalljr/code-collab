// components/dashboard/Dashboard.tsx
import React from 'react';
import ChallengeCard from '../challenges/ChallengeCard';
import AchievementsList from '../achievements/AchievementsList';
import RecentActivitiesList from './RecentActivitiesList';

const Dashboard: React.FC = () => {
  // Dummy data for challenges, achievements, and recent activities
  const challenges = [
    { id: 1, title: 'React Challenge 1' },
    { id: 2, title: 'JavaScript Challenge 2' },
    { id: 3, title: 'CSS Challenge 3' },
  ];

  const achievements = [
    { id: 1, name: 'Code Master', description: 'Complete 10 challenges' },
    { id: 2, name: 'Syntax Wizard', description: 'Perfectly solve 5 challenges' },
    { id: 3, name: 'Challenge Explorer', description: 'Attempt challenges from 3 different categories' },
  ];

  const recentActivities = [
    { id: 1, type: 'Challenge Completed', details: 'React Challenge 1' },
    { id: 2, type: 'New Achievement', details: 'Code Master' },
    { id: 3, type: 'Challenge Started', details: 'CSS Challenge 3' },
  ];

  return (
    <div className="max-w-4xl mx-auto h-screen mt-10 p-4">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

      {/* Available Challenges Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Available Challenges</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {challenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Achievements</h3>
        <AchievementsList achievements={achievements} />
      </div>

      {/* Recent Activities Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Recent Activities</h3>
        <RecentActivitiesList activities={recentActivities} />
      </div>
    </div>
  );
};

export default Dashboard;
