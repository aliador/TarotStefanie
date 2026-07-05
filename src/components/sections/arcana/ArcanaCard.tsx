import React from 'react';
import { motion } from 'motion/react';
import { ArcanaData } from './arcanaData';

interface ArcanaCardProps {
  card: ArcanaData;
  isFlipped: boolean;
  onToggle: () => void;
  hasEntered: boolean;
}

export const ArcanaCard: React.FC<ArcanaCardProps> = ({ card, isFlipped, onToggle, hasEntered }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isFlipped ? 'Ocultar carta do Arcano Maior' : 'Revelar carta do Arcano Maior'}
      className="group relative w-full aspect-[2/3] perspective-1000 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-medium focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      <motion.div
        initial={false}
        animate={{
          rotateY: isFlipped ? 180 : 0,
          y: isFlipped ? -10 : 0,
          scale: isFlipped ? 1.02 : 1
        }}
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-full h-full preserve-3d"
      >
        <div
          className="absolute inset-0 backface-hidden rounded-[28px] border border-white/40 shadow-[0_20px_60px_-30px_rgba(106,76,87,0.45)] overflow-hidden bg-gradient-to-br from-white via-[#fff3f5] to-[#f8e6ec]"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transformStyle: 'preserve-3d', WebkitTransformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),_transparent_35%)] opacity-90" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 rounded-[28px] border border-gold/20" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 p-5 text-gold">
            <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 shadow-[0_0_30px_rgba(201,162,39,0.10)] flex items-center justify-center">
              <span className="block w-3 h-3 rounded-full bg-gold animate-pulse" />
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-70" />
          </div>
        </div>

        <div
          className="absolute inset-0 backface-hidden rounded-[28px] overflow-hidden border border-white/30 shadow-[0_20px_70px_-30px_rgba(106,76,87,0.35)]"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)', transformStyle: 'preserve-3d', WebkitTransformStyle: 'preserve-3d' }}
        >
          <img
            src={card.imagem}
            alt="Imagem de carta de tarô"
            className="w-full h-full object-contain object-bottom"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-medium/25 via-transparent to-gold/15 mix-blend-overlay pointer-events-none" />
        </div>
      </motion.div>
      <span className="sr-only">Carta do Arcano Maior</span>
    </button>
  );
};
