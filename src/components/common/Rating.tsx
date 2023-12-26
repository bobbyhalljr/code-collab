// components/common/Rating.tsx
import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface RatingProps {
  onChange: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ onChange }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (rating: number) => {
    setSelectedStars(rating);
    onChange(rating);
  };

  return (
    <div className="flex items-center space-x-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleStarClick(star)}
          className={`text-2xl cursor-pointer ${
            star <= selectedStars ? 'text-yellow-500' : 'text-gray-300'
          }`}
        >
          {star === Math.ceil(selectedStars) ? (
            <FaStarHalfAlt />
          ) : star <= selectedStars ? (
            <FaStar />
          ) : (
            <FaRegStar />
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;
