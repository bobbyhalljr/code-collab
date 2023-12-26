// components/common/ProgressBar.tsx
import React from 'react';

interface ProgressBarProps {
  percent: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => {
  return (
    <div className="w-full bg-gray-200 rounded-md overflow-hidden">
      <div
        className="bg-primary h-4 rounded-md"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
