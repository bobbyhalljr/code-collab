// ChatRoom.tsx
import React, { useState, useEffect } from 'react';
import { supabase } from '../../../utils/supabase';

interface ChatRoomProps {
  sessionId: string; // Assuming sessionId is a unique identifier for the live coding session
}

const ChatRoom: React.FC<ChatRoomProps> = ({ sessionId }) => {
  const [messages, setMessages] = useState<any>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Subscribe to the chat messages for the specific session
    
    const chatMessages = supabase.channel('custom-all-channel')
    .on(
    'postgres_changes',
    { event: '*', schema: 'public', table: 'chat_messages' },
    (payload) => {
        console.log('Change received!', payload)
    }
    )
    .subscribe()

    // Fetch existing chat messages for the session
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('session_id', sessionId);

      if (data) {
        setMessages(data);
      }

      if (error) {
        console.error('Error fetching chat messages:', error.message);
      }
    };

    fetchMessages();

    // Cleanup subscription on component unmount
    return () => {
      chatMessages?.unsubscribe();
    };
  }, [sessionId]);

  const sendMessage = async () => {
    if (newMessage.trim() !== '') {
      // Insert the new message into the chat_messages table
      const { data, error } = await supabase
        .from('chat_messages')
        .upsert([
          {
            session_id: sessionId,
            user_id: 'user123', // Replace with the actual user ID
            message: newMessage,
          },
        ]);

      if (error) {
        console.error('Error sending chat message:', error.message);
      }

      // Clear the input field after sending the message
      setNewMessage('');
    }
  };

  return (
    <div>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc' }}>
        {messages.map((message: any) => (
          <div key={message.id}>
            <strong>{message.user_id}:</strong> {message.message}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
