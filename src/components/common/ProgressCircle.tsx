// components/common/ProgressCircle.tsx
import React from 'react';

interface ProgressCircleProps {
  percent: number;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ percent }) => {
  return (
    <div className="relative w-16 h-16">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-full"></div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-primary rounded-full"
        style={{
          clipPath: `polygon(0 0, 0 100%, 100% 100%, 100% ${100 - percent}%)`,
        }}
      ></div>
      <span className="absolute inset-0 flex items-center justify-center font-bold text-gray-700">
        {percent}%
      </span>
    </div>
  );
};

export default ProgressCircle;
