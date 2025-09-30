import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${sizeClasses[size]} relative group`}>
        {/* VisCend Professional Logo - Recreating the uploaded design */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full transition-all duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Main gradient based on the uploaded logo colors */}
            <linearGradient id="logoMainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00e5ff" />
              <stop offset="30%" stopColor="#03a9f4" />
              <stop offset="70%" stopColor="#ff5722" />
              <stop offset="100%" stopColor="#ff9800" />
            </linearGradient>
            
            {/* Secondary gradient for effects */}
            <linearGradient id="logoSecondaryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00bcd4" />
              <stop offset="50%" stopColor="#2196f3" />
              <stop offset="100%" stopColor="#ff5722" />
            </linearGradient>
            
            {/* Radial gradient for depth */}
            <radialGradient id="logoRadialGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#00e5ff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ff5722" stopOpacity="0.1" />
            </radialGradient>
            
            {/* Glow filter */}
            <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Drop shadow */}
            <filter id="logoShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#00e5ff" floodOpacity="0.4"/>
            </filter>
          </defs>
          
          {/* Background circle with gradient */}
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="url(#logoMainGradient)"
            filter="url(#logoShadow)"
          />
          
          {/* Inner depth overlay */}
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="url(#logoRadialGradient)"
          />
          
          {/* Main "V" design element */}
          <path
            d="M25 30 L40 55 L50 35 L60 55 L75 30"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#logoGlow)"
            opacity="0.95"
          />
          
          {/* "C" element */}
          <path
            d="M65 65 A12 12 0 0 1 40 68 A12 12 0 0 1 30 65"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
            filter="url(#logoGlow)"
          />
          
          {/* Decorative dots */}
          <circle cx="30" cy="35" r="2" fill="white" opacity="0.8" />
          <circle cx="70" cy="35" r="2" fill="white" opacity="0.8" />
          <circle cx="35" cy="75" r="1.5" fill="white" opacity="0.7" />
          <circle cx="65" cy="75" r="1.5" fill="white" opacity="0.7" />
          
          {/* Central accent point */}
          <circle
            cx="50"
            cy="50"
            r="2.5"
            fill="white"
            opacity="0.9"
            className="animate-pulse"
          />
          
          {/* Subtle connecting lines */}
          <line
            x1="40"
            y1="40"
            x2="60"
            y2="60"
            stroke="white"
            strokeWidth="0.8"
            opacity="0.3"
          />
          <line
            x1="60"
            y1="40"
            x2="40"
            y2="60"
            stroke="white"
            strokeWidth="0.8"
            opacity="0.3"
          />
          
          {/* Outer ring for professional look */}
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="url(#logoSecondaryGradient)"
            strokeWidth="0.5"
            opacity="0.5"
            className="animate-pulse"
          />
        </svg>
        
        {/* Enhanced glow effect on hover */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 via-orange-500/30 to-blue-600/30 blur-xl animate-pulse" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-orange-500 bg-clip-text text-transparent">
          VisCend
        </span>
        <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
          Digital Partner
        </span>
      </div>
    </div>
  );
};