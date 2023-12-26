// components/challenges/ChallengeCard.tsx
import React from 'react';

interface ChallengeCardProps {
  challenge: { id: number; title: string };
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h4 className="text-lg font-semibold mb-2">{challenge.title}</h4>
      <p className="text-gray-500">Category: Coding Challenge</p>
      {/* Add more details or actions as needed */}
    </div>
  );
};

export default ChallengeCard;
