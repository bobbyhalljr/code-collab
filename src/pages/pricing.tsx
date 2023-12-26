// pages/pricing.tsx
import React, { useState } from 'react';
import PricingPage from '../components/pricing/PricingPage';
import SubscriptionConfirmation from '../components/pricing/SubscriptionConfirmation';
import AppLayout from '@/components/layout/AppLayout';

const Pricing: React.FC = () => {
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
    <AppLayout>
      <PricingPage />
      {showConfirmation && (
        <SubscriptionConfirmation tier={selectedTier} onClose={handleCloseConfirmation} />
      )}
    </AppLayout>
  );
};

export default Pricing;
