import React from 'react';
import { TarotCard } from './TarotCard';
import { TarotCardData } from './tarotCards';
import { motion } from 'motion/react';

interface TarotGridProps {
  cards: TarotCardData[];
  revealedIndexes: number[];
  onRevealCard: (index: number) => void;
}

export const TarotGrid: React.FC<TarotGridProps> = ({ cards, revealedIndexes, onRevealCard }) => {
  const isMaxRevealed = revealedIndexes.length >= 3;

  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full max-w-3xl mx-auto px-2">
      {cards.map((card, index) => {
        const isRevealed = revealedIndexes.includes(index);
        const isDisabled = isMaxRevealed && !isRevealed;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TarotCard
              index={index}
              cardData={card}
              isRevealed={isRevealed}
              isDisabled={isDisabled}
              onReveal={() => onRevealCard(index)}
            />
          </motion.div>
        );
      })}
    </div>
  );
};
