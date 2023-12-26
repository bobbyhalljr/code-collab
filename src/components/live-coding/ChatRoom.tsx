// components/live-coding/ChatRoom.tsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase';
import Button from '../common/Button';

const ChatRoom: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Subscribe to changes in the 'chat' table for real-time updates
    const chatSubscription = supabase
      .channel('chat')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'todos' }, (payload) => {
        setMessages((prevMessages) => [...prevMessages, payload.new.message]);
      })
      .subscribe();

    // Cleanup subscription on component unmount
    return () => {
      chatSubscription.unsubscribe();
    };
  }, []);

  const handleSendMessage = () => {
    // Insert a new message into the 'chat' table
    supabase.from('chat').upsert([{ message: newMessage }]);
    setNewMessage('');
  };

  return (
    <div className="flex-none lg:w-1/3 bg-black text-white h-1/2 lg:h-screen overflow-y-scroll px-2 pb-12">
      <div className="h-full flex flex-col justify-between">
        {/* Chat Messages */}
        <div className="overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className="mb-2">
              <span className="text-gray-500">User:</span> {message}
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div>
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full border text-gray-700 font-medium tracking-wide rounded-lg border-gray-700 p-2"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          {/* <button className="bg-blue-500 rounded-lg w-full text-white p-3 mt-2" onClick={handleSendMessage}>
            Send message
          </button> */}
          <Button onClick={() => {}}>Send message</Button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
