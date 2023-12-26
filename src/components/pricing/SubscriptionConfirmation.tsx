// components/pricing/SubscriptionConfirmation.tsx
import React, { useState } from 'react';
import Button from '../common/Button';
import { IoMdCloseCircle } from "react-icons/io";

interface SubscriptionConfirmationProps {
  tier: string;
  onClose: () => void;
}

const SubscriptionConfirmation: React.FC<SubscriptionConfirmationProps> = ({ tier, onClose }) => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handlePaymentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate payment processing (in a real app, use a payment gateway API)
    console.log('Processing payment...');
    // Close the confirmation modal after payment simulation
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white p-8 rounded-md text-center">
        <div onClick={onClose} className='m-2 hover:text-gray-800 shadow-sm text-gray-700 flex justify-end mb-6'>
            <IoMdCloseCircle className='w-7 cursor-pointer h-7 text-gray-700'/>
        </div>
        <h2 className="text-3xl font-semibold mb-4">Payment Method</h2>
        <p className="text-gray-700 mb-6">
          Please fill out the information below to access the {tier} plan!
        </p>
        <form onSubmit={handlePaymentSubmit} className="flex flex-col space-y-4">
          <label>
            Card Number
            <input
              type="text"
              name="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={handleInputChange}
              className="p-2 border rounded-md focus:outline-none focus:border-primary"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              required
            />
          </label>
          <label>
            Expiry Date
            <input
              type="text"
              name="expiryDate"
              value={paymentInfo.expiryDate}
              onChange={handleInputChange}
              className="p-2 border rounded-md focus:outline-none focus:border-primary"
              placeholder="MM/YY"
              required
            />
          </label>
          <label>
            CVV
            <input
              type="text"
              name="cvv"
              value={paymentInfo.cvv}
              onChange={handleInputChange}
              className="p-2 border rounded-md focus:outline-none focus:border-primary"
              placeholder="XXX"
              required
            />
          </label>
          <Button onClick={() => {}}>Process Payment</Button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionConfirmation;
