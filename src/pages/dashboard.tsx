// pages/dashboard.tsx
import React from 'react';
import Dashboard from '../components/dashboard/Dashboard';
import AppLayout from '@/components/layout/AppLayout';

const DashboardPage: React.FC = () => {
  return (
    <AppLayout>
      <div>
        <Dashboard />
      </div>
    </AppLayout>
  );
};

export default DashboardPage;
