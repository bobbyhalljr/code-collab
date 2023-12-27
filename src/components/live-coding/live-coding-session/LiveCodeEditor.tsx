// CodeEditor.tsx
import React, { useState, useEffect } from 'react';
// import { Controlled as CodeMirror } from 'react-codemirror2';
import { supabase } from '../../../utils/supabase';
import CodeEditor from '../CodeEditor';

interface LiveCodeEditorProps {
  sessionId: string;
  userId: string; // The user ID of the current participant
}

const LiveCodeEditor: React.FC<LiveCodeEditorProps> = ({ sessionId, userId }) => {
  const [code, setCode] = useState('');

  useEffect(() => {
    // Subscribe to real-time updates for the code editor
    const LivecodeEditorSubscription = supabase
      .channel(`live_code:session_id=eq.${sessionId}`)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'live_coding_sessions' },
        (payload: any) => {
          // Update the code state with the new code from the payload
          setCode(payload.new.code);
        })

    // Fetch initial code for the session
    const fetchCode = async () => {
      const { data, error } = await supabase
        .from('live_coding_sessions')
        .select('code')
        .eq('session_id', sessionId)
        .single();

      if (data) {
        setCode(data.code);
      }

      if (error) {
        console.error('Error fetching initial code:', error.message);
      }
    };

    fetchCode();

    // Cleanup subscription on component unmount
    return () => {
      LivecodeEditorSubscription?.unsubscribe();
    };
  }, [sessionId]);

  const handleChange = (editor: any, data: any, newCode: string) => {
    // Update the code state and send real-time updates to the database
    setCode(newCode);
    supabase
      .from('live_coding_sessions')
      .upsert([
        {
          session_id: sessionId,
          user_id: userId,
          code: newCode,
        },
      ])
      .then(() => console.log('Code updated in the database'))
      // .catch((error: { message: any; }) => console.error('Error updating code:', error.message));
  };

  return (
    <CodeEditor />
  );
};

export default LiveCodeEditor;
