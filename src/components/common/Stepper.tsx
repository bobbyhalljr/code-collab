// components/common/Stepper.tsx
import React, { useState } from 'react';

interface StepperProps {
  steps: string[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepChange = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  return (
    <div className="flex items-center space-x-4">
      {steps.map((step, index) => (
        <button
          key={step}
          onClick={() => handleStepChange(index)}
          className={`py-2 px-4 rounded-md ${
            currentStep === index ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
          }`}
        >
          {step}
        </button>
      ))}
    </div>
  );
};

export default Stepper;
