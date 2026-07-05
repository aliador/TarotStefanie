import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Section, FadeIn } from '../../ui/Section';
import { arcanaData } from './arcanaData';
import { ArcanaCard } from './ArcanaCard';

export const ArcanaGallery = () => {
  const [flippedIds, setFlippedIds] = useState<Record<number, boolean>>({});
  const [hasEntered, setHasEntered] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || hasEntered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasEntered]);

  useEffect(() => {
    if (!hasEntered) return;
    arcanaData.forEach(card => {
      const img = new Image();
      img.src = card.imagem;
    });
  }, [hasEntered]);

  const toggleFlip = (id: number) => {
    setFlippedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Section id="arcanos-maiores" className="bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/80 to-white/90" />
      <div className="absolute top-[20%] left-1/2 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-pink-light/50 blur-[120px]" />
      <div className="absolute bottom-[10%] right-[10%] h-[220px] w-[220px] rounded-full bg-gold/10 blur-[90px]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-[10%] w-2 h-2 rounded-full bg-gold/30 blur-sm" />
        <div className="absolute top-28 right-[15%] w-2.5 h-2.5 rounded-full bg-gold/30 blur-sm" />
        <div className="absolute bottom-24 left-[20%] w-3 h-3 rounded-full bg-pink-medium/30 blur-sm" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <FadeIn className="text-center w-full max-w-4xl mx-auto mb-10 px-4">
          <p className="text-sm sm:text-base uppercase tracking-[0.3em] text-gold/80 mb-4">✨ Conheça alguns dos Arcanos Maiores</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 text-balance">Inspirado no clássico Rider-Waite, estas cartas une tons de rosa e dourado em uma releitura elegante e artística. Clique nas cartas para revelá-las.</h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-text-main/80 leading-relaxed text-balance">
            
          </p>
        </FadeIn>

        <div ref={containerRef} className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5 md:gap-5 xl:gap-6 px-4 sm:px-0">
          {arcanaData.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={hasEntered ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <ArcanaCard
                card={card}
                isFlipped={!!flippedIds[card.id]}
                onToggle={() => toggleFlip(card.id)}
                hasEntered={hasEntered}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
