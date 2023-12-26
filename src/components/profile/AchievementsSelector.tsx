// components/profile/AchievementsSelector.tsx
import React from 'react';

interface AchievementsSelectorProps {
  selectedAchievements: string[];
  onSelectAchievements: (achievements: string[]) => void;
}

const AchievementsSelector: React.FC<AchievementsSelectorProps> = ({
  selectedAchievements,
  onSelectAchievements,
}) => {
  const allAchievements = [
    'Code Master',
    'Syntax Wizard',
    'Challenge Explorer',
    // Add more achievements as needed
  ];

  const handleToggleAchievement = (achievement: string) => {
    const updatedAchievements = selectedAchievements.includes(achievement)
      ? selectedAchievements.filter((a) => a !== achievement)
      : [...selectedAchievements, achievement];

    onSelectAchievements(updatedAchievements);
  };

  return (
    <div className="mb-6">
      <h3 className="text-2xl font-bold mb-4">Showcased Achievements</h3>
      <div className="flex flex-wrap">
        {allAchievements.map((achievement) => (
          <button
            key={achievement}
            className={`bg-blue-500 text-white p-2 rounded-md mr-2 mb-2 hover:bg-blue-600 ${
              selectedAchievements.includes(achievement) && 'bg-blue-600'
            }`}
            onClick={() => handleToggleAchievement(achievement)}
          >
            {achievement}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSelector;
