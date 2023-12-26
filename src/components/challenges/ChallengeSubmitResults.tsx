// components/challenges/ChallengeSubmitResult.tsx
import React from 'react';
import Link from 'next/link';

interface ChallengeSubmitResultProps {
  category: string;
  challengeId: string;
}

const ChallengeSubmitResult: React.FC<ChallengeSubmitResultProps> = ({ category, challengeId }) => {
  return (
    <div className="container mx-auto my-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Challenge Submitted!</h1>
      <p>Your submission for the {category} Challenge ({challengeId}) has been received.</p>
      <p>Check back later for results or explore more challenges.</p>
      <Link href={`/challenges/${category}`}>
        <a className="text-blue-500 hover:underline mt-4 inline-block">Explore More Challenges</a>
      </Link>
    </div>
  );
};

export default ChallengeSubmitResult;
