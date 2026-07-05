import React from 'react';
import { motion } from 'motion/react';

const PARTICLE_COUNT = 15;

export const HeroParticles = () => {
  // Generate stable random values for the particles so they don't change on re-render
  const particles = React.useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1, // 1px to 4px
      duration: Math.random() * 10 + 15, // 15s to 25s
      delay: Math.random() * -20, // Start at different times
    }));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 z-20 w-full h-full pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gold/40 shadow-[0_0_8px_rgba(212,175,55,0.6)]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -100, -200],
            x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}
    </motion.div>
  );
};
