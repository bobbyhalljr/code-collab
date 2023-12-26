// components/liveCoding/EnhancedChatBubble.tsx
import React from 'react';

interface ChatBubbleProps {
  userName: string;
  message: string;
  timestamp: string;
  isCurrentUser: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ userName, message, timestamp, isCurrentUser }) => {
    // Parse timestamp to Date object
  const parsedTimestamp = new Date(timestamp).toLocaleString();

  // Format timestamp to a locale-specific string
  const formattedTimestamp = parsedTimestamp;

  return (
    <div className={`flex mb-2 ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
      {!isCurrentUser && <div className="w-8 h-8 rounded-full bg-blue-500 mr-2"></div>}
      <div className={`p-2 max-w-xs ${isCurrentUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded-md`}>
        <p className="font-semibold">{isCurrentUser ? 'You' : userName}</p>
        <p>{message}</p>
        <span className="text-xs text-gray-900">at: {formattedTimestamp}</span>
      </div>
    </div>
  );
};

export default ChatBubble;
