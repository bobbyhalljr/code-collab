// components/common/Notification.tsx
import React, { useState, useEffect } from 'react';

interface NotificationProps {
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onClose]);

  const notificationColors = {
    success: 'bg-green-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
  };

  return (
    <div className={`fixed top-4 right-4 p-4 rounded-md text-white ${notificationColors[type]}`}>
      {message}
    </div>
  );
};

export default Notification;
