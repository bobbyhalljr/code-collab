import React, { useState } from 'react';
import VideoStreaming from './VideoStreaming';
import InvitePeople from './InvitePeople';
import Chat from './Chat';
import Reactions from './Reactions';

const LiveCodingPage: React.FC = () => {
  const [isHost, setIsHost] = useState(true); // Set to false for guests
  const [roomId, setRoomId] = useState('exampleRoomId');

  const handleInvite = (inviteeId: string) => {
    // Implement logic to handle the invitation
    // You may use a WebSocket or another communication method to inform the other participant about the invitation
    console.log(`Inviting ${inviteeId} to the room ${roomId}`);
  };

  const handleReact = (reaction: string) => {
    // Implement logic to handle reactions
    // You may use a WebSocket or another communication method to broadcast reactions to all participants
    console.log(`Reacting with: ${reaction}`);
  };

  return (
    <div>
      <h1>{isHost ? 'Host' : 'Guest'} - Room ID: {roomId}</h1>
      <VideoStreaming isHost={isHost} roomId={roomId} />
      <InvitePeople roomId={roomId} onInvite={handleInvite} />
      <Chat roomId={roomId} />
      <Reactions onReact={handleReact} />
    </div>
  );
};

export default LiveCodingPage;
