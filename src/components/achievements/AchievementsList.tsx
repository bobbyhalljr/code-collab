// components/achievements/AchievementsList.tsx
import React from 'react';

interface Achievement {
  id: number;
  name: string;
  description: string;
}

interface AchievementsListProps {
  achievements: Achievement[];
}

const AchievementsList: React.FC<AchievementsListProps> = ({ achievements }) => {
  return (
    <ul className="list-disc list-inside">
      {achievements.map((achievement) => (
        <li key={achievement.id} className="mb-2">
          <strong className="font-semibold">{achievement.name}:</strong> {achievement.description}
        </li>
      ))}
    </ul>
  );
};

export default AchievementsList;
