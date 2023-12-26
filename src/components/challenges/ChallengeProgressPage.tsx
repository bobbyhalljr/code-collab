// components/challenges/ChallengeProgressPage.tsx
import React from 'react';

interface ChallengeProgressPageProps {
  category: string;
  completedChallenges: { title: string; score: number }[];
}

const ChallengeProgressPage: React.FC<ChallengeProgressPageProps> = ({
  category,
  completedChallenges,
}) => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Challenge Progress</h1>
      <h2 className="text-lg font-semibold mb-2">Category: {category}</h2>
      {completedChallenges.length === 0 ? (
        <p className="text-gray-700">You haven't completed any challenges in this category yet.</p>
      ) : (
        <ul className="list-disc pl-6">
          {completedChallenges.map((challenge, index) => (
            <li key={index} className="text-gray-700">
              {challenge.title} - Score: {challenge.score}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChallengeProgressPage;
