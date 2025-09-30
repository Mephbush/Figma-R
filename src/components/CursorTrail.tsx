import React, { useEffect, useRef } from 'react';

export const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Array<{ x: number; y: number; age: number }>>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e: MouseEvent) => {
      pointsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 0,
      });

      // Keep only recent points
      if (pointsRef.current.length > 20) {
        pointsRef.current.shift();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw points
      pointsRef.current = pointsRef.current.filter(point => {
        point.age += 1;
        
        const opacity = Math.max(0, 1 - point.age / 20);
        const size = Math.max(1, 6 - point.age / 4);
        
        if (opacity > 0) {
          ctx.save();
          ctx.globalAlpha = opacity;
          
          // Create gradient
          const gradient = ctx.createRadialGradient(
            point.x, point.y, 0,
            point.x, point.y, size
          );
          gradient.addColorStop(0, '#6366f1');
          gradient.addColorStop(0.5, '#8b5cf6');
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.restore();
          
          return true;
        }
        
        return false;
      });

      // Connect points with lines
      if (pointsRef.current.length > 1) {
        ctx.save();
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.1)';
        ctx.lineWidth = 1;
        
        for (let i = 1; i < pointsRef.current.length; i++) {
          const current = pointsRef.current[i];
          const previous = pointsRef.current[i - 1];
          
          const opacity = Math.max(0, 1 - current.age / 20);
          ctx.globalAlpha = opacity;
          
          ctx.beginPath();
          ctx.moveTo(previous.x, previous.y);
          ctx.lineTo(current.x, current.y);
          ctx.stroke();
        }
        
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[60]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};