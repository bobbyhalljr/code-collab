// LiveCodingSessionPage.tsx
import React from 'react';
import LiveCodeEditor from './LiveCodeEditor';
import ChatRoom from './ChatRoom';
import LiveVideoChat from '../live-coding-session/LiveVideoChat';
import SessionSettings from './SessionSettings';

const LiveCodingSessionPage: React.FC = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex-1">
        <LiveCodeEditor sessionId='1' userId='1' />
        <ChatRoom sessionId='1' />
      </div>
      <div className="flex-none w-1/4">
        <LiveVideoChat />
        {/* <SessionSettings onEndSession={() => {}} onManageParticipants={() => {}}/> */}
      </div>
    </div>
  );
};

export default LiveCodingSessionPage;
