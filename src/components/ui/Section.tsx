import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../utils/cn'; // We will create this

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id, ...props }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={cn("py-12 md:py-20 lg:py-24 px-4 sm:px-6 w-full", className)} 
      {...props}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};

export const FadeIn = ({ children, className, delay = 0, direction = 'up', ...props }: { children: React.ReactNode, className?: string, delay?: number, direction?: 'up' | 'down' | 'left' | 'right' | 'none', key?: React.Key }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
