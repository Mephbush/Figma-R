import React from 'react';
import { PortfolioSection } from '../components/PortfolioSection';
import { Footer } from '../components/Footer';

export const PortfolioPage: React.FC = () => {
  return (
    <main className="pt-20">
      <PortfolioSection />
      <Footer />
    </main>
  );
};