// components/challenges/ChallengeCategoryCard.tsx
import React from 'react';
import Link from 'next/link';

interface ChallengeCategoryCardProps {
  category: string;
}

const ChallengeCategoryCard: React.FC<ChallengeCategoryCardProps> = ({ category }) => {
  return (
    <Link href="/challenges/[category]" as={`/challenges/${category.toLowerCase()}`}>
        <div className="bg-white p-4 rounded-md shadow-md cursor-pointer">
          <h2 className="text-xl font-semibold">{category}</h2>
        </div>
    </Link>
  );
};

export default ChallengeCategoryCard;
