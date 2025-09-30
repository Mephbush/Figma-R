import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { MissionSection } from '../components/MissionSection';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <main>
      <HeroSection onContactClick={handleContactClick} />
      <MissionSection />
      <Footer />
    </main>
  );
};