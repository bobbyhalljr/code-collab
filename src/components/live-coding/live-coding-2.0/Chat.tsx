import React, { useState } from 'react';

interface ChatProps {
  roomId: string;
}

const Chat: React.FC<ChatProps> = ({ roomId }) => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  const handleSendMessage = () => {
    // Implement logic to send chat messages
    // You may use a WebSocket or another communication method to send messages to other participants
    // Update the chatMessages state accordingly
    setChatMessages((prevMessages) => [...prevMessages, message]);
    setMessage('');
  };

  return (
    <div>
      <div>
        {chatMessages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;
