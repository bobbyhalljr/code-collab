// components/challenges/ChallengeSolutions.tsx
import React from 'react';

interface Solution {
  id: string;
  user: string;
  solution: string;
}

interface ChallengeSolutionsProps {
  category: string;
  challengeId: string;
  solutions: Solution[];
}

const ChallengeSolutions: React.FC<ChallengeSolutionsProps> = ({ category, challengeId, solutions }) => {
  return (
    <div className="container h-screen mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Solutions for {category} Challenge ({challengeId})</h1>
      <ul>
        {solutions.map((solution) => (
          <li key={solution.id}>
            <h2 className="text-xl font-semibold">{solution.user}</h2>
            <pre>{solution.solution}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChallengeSolutions;
