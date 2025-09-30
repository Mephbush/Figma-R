import React, { useState } from 'react';
import { ServicesSection } from '../components/ServicesSection';
import { WebExpertiseSection } from '../components/WebExpertiseSection';
import { Footer } from '../components/Footer';

export const ServicesPage: React.FC = () => {
  const [showWebSection, setShowWebSection] = useState(false);

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  const handleShowWebSection = (show: boolean) => {
    setShowWebSection(show);
  };

  return (
    <main className="pt-20">
      <ServicesSection 
        onContactClick={handleContactClick} 
        onShowWebSection={handleShowWebSection}
      />
      {showWebSection && <WebExpertiseSection />}
      <Footer />
    </main>
  );
};