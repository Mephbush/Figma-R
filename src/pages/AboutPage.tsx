import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { TeamSection } from '../components/TeamSection';
import { Footer } from '../components/Footer';

export const AboutPage: React.FC = () => {
  return (
    <main className="pt-20">
      <AboutSection />
      <TeamSection />
      <Footer />
    </main>
  );
};