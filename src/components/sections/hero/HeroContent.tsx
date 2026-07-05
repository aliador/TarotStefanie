import React from 'react';
import { motion } from 'motion/react';
import { heroConfig } from '../../../config/heroConfig';
import { HeroButtons } from './HeroButtons';

export const HeroContent = () => {
  return (
    <div className="relative z-30 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-12 text-center flex flex-col items-center justify-center min-h-[100dvh]">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
        className="inline-block py-1.5 px-5 rounded-full bg-white/40 backdrop-blur-md text-text-main text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 sm:mb-8 border border-white/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"
      >
        {heroConfig.badge}
      </motion.span>
      
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-6 md:mb-8 text-text-main text-balance drop-shadow-sm"
      >
        {heroConfig.title.line1} <span className="text-gold italic block sm:inline">{heroConfig.title.highlight}</span><br className="hidden sm:block" />
        {heroConfig.title.line2} <br className="hidden md:block"/>
        {heroConfig.title.line3}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.0, ease: "easeOut" }}
        className="text-base sm:text-lg md:text-xl text-text-main/80 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed text-balance drop-shadow-sm"
      >
        {heroConfig.subtitle} <strong className="text-gold font-semibold whitespace-nowrap">{heroConfig.subtitleHighlight}</strong>.
      </motion.p>

      <HeroButtons />
    </div>
  );
};
