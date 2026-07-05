import React from 'react';
import { motion } from 'motion/react';
import { TarotCardData } from './tarotCards';
import { Sparkles } from 'lucide-react';
import { FadeIn } from '../../ui/Section';

interface TarotResultProps {
  revealedCards: TarotCardData[];
}

export const TarotResult: React.FC<TarotResultProps> = ({ revealedCards }) => {
  return (
    <div className="w-full mt-16 md:mt-24 pb-8">
      <FadeIn className="text-center mb-12">
        <h3 className="font-heading text-2xl md:text-4xl text-gold mb-4 flex items-center justify-center gap-3">
          <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
          Sua Tiragem Simbólica
          <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
        </h3>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-5xl mx-auto px-4">
        {revealedCards.map((card, index) => (
          <FadeIn key={card.id} delay={0.2 + index * 0.2} className="flex flex-col items-center">
            <div className="w-[180px] sm:w-[220px] aspect-[2/3] rounded-[16px] md:rounded-[20px] overflow-hidden shadow-2xl border border-gold/40 mb-6 relative group">
              <img src={card.imagem} alt={card.nome} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="text-center px-2">
              <h4 className="font-heading text-xl md:text-2xl text-gold mb-2">{card.nome}</h4>
              <p className="font-body text-sm md:text-base text-text-main/80 mb-4 leading-relaxed">
                "{card.mensagem}"
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {card.keywords.map((kw, i) => (
                  <span key={i} className="px-3 py-1 bg-white/40 backdrop-blur-sm border border-gold/20 rounded-full text-xs text-text-main font-medium shadow-sm">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};
