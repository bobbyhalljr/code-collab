// components/challenges/ChallengeSolve.tsx
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { submitChallengeSolution } from '../../pages/api/challenges'; // Replace with your actual API or logic
import CodeEditor from '../live-coding/CodeEditor';

interface ChallengeSolveProps {
  category: string;
  challengeId: string;
  challengeTitle: string;
  challengeDescription: string;
}

const ChallengeSolve: React.FC<ChallengeSolveProps> = ({ category, challengeId, challengeTitle, challengeDescription }) => {
  const [solution, setSolution] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      // Assume submitChallengeSolution is an API function to submit the solution
      await submitChallengeSolution(category, challengeId, { solution });

      // Redirect to the Submit Result page
      router.push(`/challenges/${category.toLowerCase()}/${challengeId}/submit-solution`);
    } catch (error) {
      // Handle error scenarios, such as displaying an error message to the user
      console.error('Error submitting challenge solution:', error);
    }
  };

  return (
    <div className="container h-screen mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">{challengeTitle}</h1>
      <p className='mb-6'>{challengeDescription}</p>
      {/* <textarea
        value={solution}
        onChange={(e) => setSolution(e.target.value)}
        placeholder="Write your solution here..."
        className="w-full h-40 mt-4 p-4 border rounded-md"
      /> */}
      <CodeEditor />
      <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white p-2 rounded-md">
        Submit Solution
      </button>
    </div>
  );
};

export default ChallengeSolve;
