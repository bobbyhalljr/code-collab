// components/common/Alert.tsx
import React from 'react';

interface AlertProps {
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const alertColors = {
    success: 'bg-green-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
  };

  return (
    <div className={`py-2 px-4 rounded-md text-white ${alertColors[type]}`}>
      {message}
    </div>
  );
};

export default Alert;
