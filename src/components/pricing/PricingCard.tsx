// components/pricing/PricingCard.tsx
import React from 'react';
import Badge from '../common/Badge';
import Button from '../common/Button';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  onClickSubscribe: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, onClickSubscribe }) => {
  return (
    <div className="p-4 border w-[90%] mx-auto bg-gray-100 rounded-md shadow-md">
      <h2 className="text-lg font-semibold">{title}</h2>
      <span className="text-2xl font-bold my-2">{price}</span>
      <ul className="list-disc pl-6 my-4">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-700">
            {feature}
          </li>
        ))}
      </ul>
      <Button onClick={onClickSubscribe}>Subscribe</Button>
    </div>
  );
};

export default PricingCard;
