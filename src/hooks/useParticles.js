import { useState, useCallback, useRef } from 'react';

export const useParticles = () => {
  const [particles, setParticles] = useState([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particleCount = 50;

  const initParticles = useCallback((width, height) => {
    const newParticles = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: `34, 211, 238`, // cyan-400 RGB
        originalVx: (Math.random() - 0.5) * 2,
        originalVy: (Math.random() - 0.5) * 2,
      });
    }
    setParticles(newParticles);
  }, []);

  const updateParticles = useCallback((width, height) => {
    setParticles(prevParticles => 
      prevParticles.map(particle => {
        let newX = particle.x + particle.vx;
        let newY = particle.y + particle.vy;

        // Mouse interaction
        const mouseDistance = Math.sqrt(
          Math.pow(particle.x - mouseRef.current.x, 2) + 
          Math.pow(particle.y - mouseRef.current.y, 2)
        );

        if (mouseDistance < 100) {
          const force = (100 - mouseDistance) / 100;
          const angle = Math.atan2(
            particle.y - mouseRef.current.y,
            particle.x - mouseRef.current.x
          );
          
          particle.vx += Math.cos(angle) * force * 0.5;
          particle.vy += Math.sin(angle) * force * 0.5;
        } else {
          // Return to original velocity gradually
          particle.vx += (particle.originalVx - particle.vx) * 0.02;
          particle.vy += (particle.originalVy - particle.vy) * 0.02;
        }

        // Boundary collision
        if (newX < 0 || newX > width) {
          particle.vx *= -0.8;
          newX = Math.max(0, Math.min(width, newX));
        }
        if (newY < 0 || newY > height) {
          particle.vy *= -0.8;
          newY = Math.max(0, Math.min(height, newY));
        }

        // Add some randomness
        particle.vx += (Math.random() - 0.5) * 0.1;
        particle.vy += (Math.random() - 0.5) * 0.1;

        // Limit velocity
        const maxVelocity = 3;
        if (Math.abs(particle.vx) > maxVelocity) {
          particle.vx = Math.sign(particle.vx) * maxVelocity;
        }
        if (Math.abs(particle.vy) > maxVelocity) {
          particle.vy = Math.sign(particle.vy) * maxVelocity;
        }

        return {
          ...particle,
          x: newX,
          y: newY,
        };
      })
    );
  }, []);

  const handleMouseMove = useCallback((x, y) => {
    mouseRef.current = { x, y };
  }, []);

  return {
    particles,
    initParticles,
    updateParticles,
    handleMouseMove,
  };
};