import React from 'react';
import { ContactSection } from '../components/sections/ContactSection';
import { Footer } from '../components/layout/Footer';

export const ContactPage: React.FC = () => {
  return (
    <main className="pt-20">
      <ContactSection />
      <Footer />
    </main>
  );
};