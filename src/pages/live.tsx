// pages/LiveCodingPage.tsx
import React from 'react';
import LiveCodingSession from '../components/live-coding/LiveCodingSession';
import AppLayout from '@/components/layout/AppLayout';

const LiveCodingPage: React.FC = () => {
  return (
    <AppLayout>
      <h1 className="text-4xl font-semibold">Live Coding Session</h1>
      <LiveCodingSession />
    </AppLayout>
  );
};

export default LiveCodingPage;
