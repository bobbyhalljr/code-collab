// components/common/Typography.tsx
import React from 'react';

interface TypographyProps {
  variant: 'heading' | 'subheading' | 'body';
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
  switch (variant) {
    case 'heading':
      return <h1 className="text-3xl font-bold">{children}</h1>;
    case 'subheading':
      return <h2 className="text-2xl font-semibold">{children}</h2>;
    case 'body':
    default:
      return <p className="text-base">{children}</p>;
  }
};

export default Typography;
