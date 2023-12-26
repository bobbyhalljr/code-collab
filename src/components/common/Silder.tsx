// components/common/Slider.tsx
import React, { useState } from 'react';

interface SliderProps {
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ onChange }) => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setSliderValue(newValue);
    onChange(newValue);
  };

  return (
    <input
      type="range"
      value={sliderValue}
      onChange={handleSliderChange}
      className="w-full"
    />
  );
};

export default Slider;
