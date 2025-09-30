import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Logo } from './Logo';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleting, setIsCompleting] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentStep(1), 800);
    const timer2 = setTimeout(() => setCurrentStep(2), 1800);
    const timer3 = setTimeout(() => setCurrentStep(3), 2800);
    const timer4 = setTimeout(() => {
      setIsCompleting(true);
      setTimeout(() => onComplete(), 500);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: isCompleting ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Logo animation */}
        <motion.div
          initial={{ scale: 0, rotateY: 180 }}
          animate={{ 
            scale: currentStep >= 1 ? 1 : 0,
            rotateY: currentStep >= 1 ? 0 : 180
          }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 100
          }}
          className="mb-8"
        >
          <Logo size="lg" className="justify-center text-white" />
        </motion.div>

        {/* Text animations */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ 
            y: currentStep >= 2 ? 0 : 50,
            opacity: currentStep >= 2 ? 1 : 0
          }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            VisCend
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            الابتكار البصري والتميز الرقمي
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ 
            y: currentStep >= 3 ? 0 : 30,
            opacity: currentStep >= 3 ? 1 : 0
          }}
          transition={{ duration: 0.6 }}
          className="mt-8"
        >
          <p className="text-lg text-gray-400 max-w-md mx-auto">
            حيث تلتقي الرؤية الإبداعية بالتكنولوجيا المتقدمة
          </p>
        </motion.div>

        {/* Loading indicator */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 3 }}
          className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-12 max-w-xs mx-auto"
        />
      </div>

      {/* Geometric shapes */}
      <motion.div
        className="absolute top-20 left-20"
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-16 h-16 border-2 border-white/20 rotate-45" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20"
        animate={{ 
          rotate: -360,
          y: [-20, 20, -20]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-12 h-12 rounded-full border-2 border-white/20" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-10"
        animate={{ 
          x: [0, 30, 0],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-4 h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </motion.div>
    </motion.div>
  );
};