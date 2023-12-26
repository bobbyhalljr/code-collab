// components/live-coding/SharedCodeEditor.tsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase';
import CodeEditor from './CodeEditor';

const SharedCodeEditor: React.FC = () => {
  const [code, setCode] = useState('');

  useEffect(() => {
    // Subscribe to changes in the 'code' table for real-time updates
    const codeSubscription = supabase
      .channel('code')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'todos' }, (payload) => {
        setCode(payload.new.code);
      })
      .subscribe();

    // Cleanup subscription on component unmount
    return () => {
      codeSubscription.unsubscribe();
    };
  }, []);

  const handleCodeChange = (newCode: string) => {
    // Update the 'code' table with the new code
    supabase.from('code').upsert([{ code: newCode }]);
  };

  return (
    <div className="flex-1 w-full lg:h-screen h-1/2 bg-gray-900 text-white p-4 overflow-y-scroll">
      {/* Shared Code Editor Component */}
      <CodeEditor />
    </div>
  );
};

export default SharedCodeEditor;
