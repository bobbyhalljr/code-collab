// components/challenges/ChallengeSolvePage.tsx
import React, { useState } from 'react';
// import { Controlled as CodeMirror } from 'react-codemirror2';
import Button from '../common/Button';
import CodeEditor from '../live-coding/CodeEditor';

interface ChallengeSolvePageProps {
  category: string;
  challengeTitle: string;
  challengeDescription: string;
  instructions: string;
  onSubmit: (code: string) => void;
}

const ChallengeSolvePage: React.FC<ChallengeSolvePageProps> = ({
  category,
  challengeTitle,
  instructions,
  challengeDescription,
  onSubmit,
}) => {
  const [code, setCode] = useState('');

  const handleCodeChange = (editor: any, data: any, value: string) => {
    setCode(value);
  };

  const handleSubmit = () => {
    // Handle code submission
    onSubmit(code);
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">{challengeTitle}</h1>
      <h2 className="text-2xl font-semibold mb-2">Category: {category}</h2>
      <h2 className="text-lg font-medium mb-2">Challenge Description: {challengeDescription}</h2>
      <p className="text-gray-700 mb-4">{instructions}</p>
      <CodeEditor />
      {/* <CodeMirror
        value={code}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true,
        }}
        onBeforeChange={handleCodeChange}
      /> */}
      <Button onClick={handleSubmit}>
        Submit Code
      </Button>
    </div>
  );
};

export default ChallengeSolvePage;
