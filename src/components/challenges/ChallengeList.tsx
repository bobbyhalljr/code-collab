// components/challenges/ChallengeList.tsx
import React from 'react';
import Link from 'next/link';

interface ChallengeListProps {
  category: string;
}

const ChallengeList: React.FC<ChallengeListProps> = ({ category }) => {
  // You should fetch the list of challenges for the specified category
  const challenges = [
    { id: '1', title: 'Challenge 1', description: 'Description for Challenge 1' },
    { id: '2', title: 'Challenge 2', description: 'Description for Challenge 2' },
    // Add more challenges as needed
  ];

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">{category} Challenges</h1>
      <ul>
        {challenges.map((challenge) => (
          <li key={challenge.id}>
            <Link href="/challenges/[category]/[challenge]" as={`/challenges/${category}/${challenge.id}`}>
                <h2 className="text-xl font-semibold">{challenge.title}</h2>
                <p>{challenge.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChallengeList;
