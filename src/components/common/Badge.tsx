// components/common/Badge.tsx
import React from 'react';

interface BadgeProps {
  label: string;
  color: string;
}

const Badge: React.FC<BadgeProps> = ({ label, color }) => {
  return (
    <span className={`inline-block py-1 px-2 rounded-md text-white bg-${color}`}>
      {label}
    </span>
  );
};

export default Badge;
