// components/pricing/PricingPage.tsx
import React, { useState } from 'react';
import PricingCard from './PricingCard';
import SubscriptionConfirmation from './SubscriptionConfirmation';
import Button from '../common/Button';

const PricingPage: React.FC = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedTier, setSelectedTier] = useState('');

  const handleSubscribe = (tier: string) => {
    setSelectedTier(tier);
    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl p-2 font-bold mb-4">Choose a Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PricingCard
          title="Basic"
          price="$9.99/month"
          features={[
            'Access to all challenges',
            'Limited code collaboration',
            'Basic support',
            'Weekly progress reports',
          ]}
          onClickSubscribe={() => handleSubscribe('Basic')}
        />
        <PricingCard
          title="Pro"
          price="$19.99/month"
          features={[
            'Unlimited access to challenges',
            'Advanced code collaboration',
            'Priority support',
            'Daily progress reports',
          ]}
          onClickSubscribe={() => handleSubscribe('Pro')}
        />
        <PricingCard
          title="Enterprise"
          price="Contact us"
          features={[
            'VIP access to all challenges',
            'Dedicated code collaboration workspace',
            '24/7 premium support',
            'Customized progress tracking',
          ]}
          onClickSubscribe={() => handleSubscribe('Enterprise')}
        />
      </div>
      {showConfirmation && (
        <SubscriptionConfirmation tier={selectedTier} onClose={handleCloseConfirmation} />
      )}
    </div>
  );
};

export default PricingPage;
