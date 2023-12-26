// components/live-coding/LiveCodingSession.tsx
import React from 'react';
import SharedCodeEditor from './SharedCodeEditor';
import ChatRoom from './ChatRoom';

const LiveCodingSession: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Shared Code Editor */}
      <SharedCodeEditor />

      {/* Chat Room */}
      <ChatRoom />
    </div>
  );
};

export default LiveCodingSession;
