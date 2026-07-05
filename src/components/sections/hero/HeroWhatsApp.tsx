import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useBooking } from '../../../context/BookingContext';
import { heroConfig } from '../../../config/heroConfig';

export const HeroWhatsApp = () => {
  const { openModal } = useBooking();
  return (
    <motion.button
      onClick={openModal}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, y: [0, -5, 0] }}
      transition={{ 
        scale: { type: "spring", stiffness: 200, damping: 20, delay: 2.6 },
        opacity: { duration: 0.5, delay: 2.6 },
        y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2.6 }
      }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-pink-medium to-pink-dark text-white rounded-full shadow-lg lg:hover:shadow-xl lg:hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-medium"
      aria-label="Agendar consulta"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" aria-hidden="true" />
    </motion.button>
  );
};
