// components/challenges/ChallengeCategoryPage.tsx
import React from 'react';
import ChallengeCategoryCard from './ChallengeCategoryCard';

const ChallengeCategoryPage: React.FC = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Choose a Challenge Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ChallengeCategoryCard category="React" />
        <ChallengeCategoryCard category="JavaScript" />
        <ChallengeCategoryCard category="Python" />
        {/* Add more ChallengeCategoryCard components for other categories */}
      </div>
    </div>
  );
};

export default ChallengeCategoryPage;
