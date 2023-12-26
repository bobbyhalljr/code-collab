// components/liveCoding/ChatRoom.tsx
import React, { useState } from 'react';
import ChatBubble from './ChatBubble';
import UserAvatar from './UserAvater';

interface ChatRoomProps {
  userName: string;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ userName }) => {
  const [messages, setMessages] = useState<{ user: string; message: string }[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { user: userName, message: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="border w-full p-4 fixed bottom-0 left-0 mx-w-md bg-gray-100 rounded-md">
      <div className="">
        {messages.map((msg, index) => (
          <ChatBubble
            key={index}
            timestamp={`${Date.now()}`}
            userName={msg.user}
            message={msg.message}
            isCurrentUser={msg.user === userName}
          />
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow border p-2 rounded-md mr-2"
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 flex rounded-md">
          Send
        </button>
      </div>
      <div className="mt-2 flex items-center">
        <span className="mr-2">Participants:</span>
        <UserAvatar userName={userName} />
        {/* Add more user avatars for other participants */}
      </div>
    </div>
  );
};

export default ChatRoom;
