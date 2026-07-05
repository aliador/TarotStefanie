import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TarotCardData } from './tarotCards';
import { Sparkles } from 'lucide-react';

interface TarotCardProps {
  cardData: TarotCardData;
  isRevealed: boolean;
  onReveal: () => void;
  isDisabled: boolean;
  index: number;
}

export const TarotCard: React.FC<TarotCardProps> = ({ cardData, isRevealed, onReveal, isDisabled, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative w-full aspect-[2/3] perspective-1000 ${!isRevealed && !isDisabled ? 'cursor-pointer' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (!isRevealed && !isDisabled) {
          onReveal();
        }
      }}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        initial={false}
        animate={{ 
          rotateY: isRevealed ? 180 : 0,
          y: isRevealed ? -10 : (isHovered && !isDisabled ? -5 : 0),
          scale: isRevealed ? 1.05 : 1
        }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Frente da carta (Verso do Baralho - Face Down) */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-[16px] md:rounded-[20px] shadow-lg overflow-hidden border border-gold/30 flex items-center justify-center bg-gradient-to-br from-[#F5E6E8] via-[#E8D1D5] to-[#D5B5B8]"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Textura Premium */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
          
          <div className="w-[85%] h-[85%] border-[1px] border-gold/40 rounded-[12px] flex flex-col items-center justify-center gap-4 p-4 text-gold shadow-inner relative overflow-hidden">
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 opacity-70" strokeWidth={1} />
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 opacity-40 rotate-45" strokeWidth={1} />
            
            {/* Brilho hover */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent"
              initial={{ x: '-100%', y: '-100%' }}
              animate={isHovered && !isDisabled ? { x: '100%', y: '100%' } : { x: '-100%', y: '-100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Verso da carta (Face Up - Arcano Revelado) */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-[16px] md:rounded-[20px] shadow-[0_15px_40px_-10px_rgba(231,184,200,0.5)] overflow-hidden border border-gold/40"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <img 
            src={cardData.imagem} 
            alt={cardData.nome} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Efeito de brilho rosa/dourado ao revelar */}
          {isRevealed && (
            <div className="absolute inset-0 bg-gradient-to-t from-pink-medium/30 via-transparent to-gold/20 mix-blend-overlay pointer-events-none"></div>
          )}
        </div>
      </motion.div>
      
      {/* Sombra e Iluminação abaixo da carta aberta */}
      {isRevealed && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-gold/30 blur-xl rounded-full"
        />
      )}
    </div>
  );
};
