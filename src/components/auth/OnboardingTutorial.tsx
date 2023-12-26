// components/auth/OnboardingTutorial.tsx
import React from 'react';

const OnboardingTutorial: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Welcome to Code-Collab!</h2>
      <p className="text-gray-600 mb-4">
        Let's take a quick tour to introduce you to the exciting world of collaborative coding.
      </p>
      {/* Include interactive tutorial steps here */}
      <div className="flex justify-end">
        <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Next
        </button>
      </div>
    </div>
  );
};

export default OnboardingTutorial;
