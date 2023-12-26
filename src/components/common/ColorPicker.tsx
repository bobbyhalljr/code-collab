// components/common/ColorPicker.tsx
import React, { useState } from 'react';
import { ChromePicker, ColorResult } from 'react-color';

interface ColorPickerProps {
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onChange }) => {
  const [selectedColor, setSelectedColor] = useState<string>('#ffffff');
  const [showPicker, setShowPicker] = useState<boolean>(false);

  const handleColorChange = (color: ColorResult) => {
    setSelectedColor(color.hex);
    onChange(color.hex);
  };

  return (
    <div className="relative">
      <div
        onClick={() => setShowPicker(!showPicker)}
        className="w-8 h-8 bg-gray-200 rounded-md cursor-pointer"
        style={{ backgroundColor: selectedColor }}
      ></div>
      {showPicker && (
        <div className="absolute top-10 right-0">
          <ChromePicker color={selectedColor} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
