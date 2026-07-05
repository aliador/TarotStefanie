import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../../ui/Button';
import { heroConfig } from '../../../config/heroConfig';
import { useBooking } from '../../../context/BookingContext';

export const HeroButtons = () => {
  const { openModal } = useBooking();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-2 sm:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
        className="w-full sm:w-auto"
      >
        <Button size="lg" className="w-full sm:w-auto min-w-[200px]" onClick={openModal}>
          {heroConfig.buttons.primary.text}
        </Button>
      </motion.div>

      {heroConfig.buttons.secondary.show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4, ease: "easeOut" }}
          className="w-full sm:w-auto"
        >
          <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-[200px]">
            {heroConfig.buttons.secondary.text}
          </Button>
        </motion.div>
      )}
    </div>
  );
};
