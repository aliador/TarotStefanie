import React from 'react';
import { motion } from 'motion/react';
import { heroConfig } from '../../../config/heroConfig';

export const HeroOverlay = () => {
  return (
    <motion.div
      className="absolute inset-0 z-10 w-full h-full mix-blend-normal"
      style={{
        background: heroConfig.overlay.gradient
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
    />
  );
};
