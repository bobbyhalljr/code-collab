// components/layout/AppLayout.tsx
import React from 'react';
import Navbar from './Navbar';

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout: React.FC <AppLayoutProps> = ({ children }) => {
  return (
    <div className=''>
      <Navbar />
      <div className="container mx-auto mt-8">{children}</div>
    </div>
  );
};

export default AppLayout;
