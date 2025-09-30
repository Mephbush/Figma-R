import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Toaster } from './components/ui/sonner';

// Context Providers
import { LanguageProvider } from './components/LanguageContext';
import { ThemeProvider } from './components/ThemeContext';

// Components
import { IntroAnimation } from './components/IntroAnimation';
import { Navigation } from './components/Navigation';
import { CursorTrail } from './components/CursorTrail';
import { PageTransition } from './components/PageTransition';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContractPage } from './pages/ContractPage';
import { ContactPage } from './pages/ContactPage';

function AppContent() {
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check if intro has been shown before (using localStorage for persistence)
    const introShown = localStorage.getItem('viscend-intro-shown');
    if (introShown === 'true') {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    localStorage.setItem('viscend-intro-shown', 'true');
    // Navigate to home page after intro completes
    if (location.pathname !== '/') {
      window.history.pushState({}, '', '/');
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Intro Animation */}
      <AnimatePresence>
        {showIntro && (
          <IntroAnimation onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {!showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Cursor Trail Effect */}
            <CursorTrail />

            {/* Navigation */}
            <Navigation />

            {/* Page Routes with Transitions */}
            <PageTransition>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contracts" element={<ContractPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </PageTransition>

            {/* Toast Notifications */}
            <Toaster 
              position="top-right"
              richColors
              closeButton
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 pattern-dots opacity-50" />
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-300/5 via-transparent to-orange-500/5" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-radial from-blue-500/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-radial from-cyan-300/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-radial from-purple-500/6 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <AppContent />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;