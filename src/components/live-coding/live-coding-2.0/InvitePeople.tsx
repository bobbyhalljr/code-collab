import React, { useState } from 'react';

interface InvitePeopleProps {
  roomId: string;
  onInvite: (inviteeId: string) => void;
}

const InvitePeople: React.FC<InvitePeopleProps> = ({ roomId, onInvite }) => {
  const [inviteeId, setInviteeId] = useState('');

  const handleInvite = () => {
    // Implement logic to invite people to the room
    // You may use a callback function (onInvite) to pass the inviteeId to the parent component
    onInvite(inviteeId);
    setInviteeId('');
  };

  return (
    <div>
      <input
        type="text"
        value={inviteeId}
        onChange={(e) => setInviteeId(e.target.value)}
        placeholder="Enter user ID to invite"
      />
      <button onClick={handleInvite}>Invite</button>
    </div>
  );
};

export default InvitePeople;
