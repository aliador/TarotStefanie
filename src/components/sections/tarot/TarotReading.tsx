import React, { useState, useEffect } from 'react';
import { Section, FadeIn } from '../../ui/Section';
import { Sparkles, RefreshCw } from 'lucide-react';
import { TarotGrid } from './TarotGrid';
import { TarotResult } from './TarotResult';
import { TarotCTA } from './TarotCTA';
import { getRandomCards } from './randomizer';
import { TarotCardData, tarotCards } from './tarotCards';
import { motion, AnimatePresence } from 'motion/react';

export const TarotReading = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [sessionCards, setSessionCards] = useState<TarotCardData[]>([]);
  const [revealedIndexes, setRevealedIndexes] = useState<number[]>([]);
  
  const isReadingComplete = revealedIndexes.length === 3;

  const startReading = () => {
    // Pegamos 9 cartas aleatórias para preencher o grid
    setSessionCards(getRandomCards(9));
    setRevealedIndexes([]);
    setHasStarted(true);
  };

  const resetReading = () => {
    setHasStarted(false);
    setRevealedIndexes([]);
    setSessionCards([]);
  };

  const handleRevealCard = (index: number) => {
    if (revealedIndexes.length < 3 && !revealedIndexes.includes(index)) {
      setRevealedIndexes(prev => [...prev, index]);
    }
  };

  const revealedCardsData = revealedIndexes.map(index => sessionCards[index]);

  // Preload de imagens
  useEffect(() => {
    if (hasStarted) {
      sessionCards.forEach(card => {
        const img = new Image();
        img.src = card.imagem;
      });
    } else {
      // Preload the specific texture image used on the back
      const tex = new Image();
      tex.src = "https://www.transparenttextures.com/patterns/stardust.png";
    }
  }, [hasStarted, sessionCards]);

  return (
    <Section id="tiragem" className="bg-transparent overflow-hidden relative min-h-[800px]">
      {/* Background sutil e pequenas partículas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-gold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] bg-pink-medium/10 rounded-full blur-[80px]" />
        
        {/* Partículas douradas muito discretas */}
        <div className="absolute top-[15%] left-[20%] w-1 h-1 bg-gold/40 rounded-full blur-[1px] animate-pulse"></div>
        <div className="absolute top-[35%] right-[25%] w-1.5 h-1.5 bg-gold/30 rounded-full blur-[1px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[40%] left-[15%] w-1 h-1 bg-gold/50 rounded-full blur-[1px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[15%] right-[20%] w-2 h-2 bg-pink-medium/40 rounded-full blur-[2px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-[50%] left-[80%] w-1 h-1 bg-gold/40 rounded-full blur-[1px] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <FadeIn className="text-center w-full max-w-3xl mx-auto mb-10 px-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold mb-4 md:mb-6 flex items-center justify-center gap-3 md:gap-4">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            Escolha 3 Cartas
          </h2>
          <p className="font-body text-base sm:text-lg md:text-xl text-text-main/80 leading-relaxed max-w-2xl mx-auto">
            Respire fundo, concentre-se em sua pergunta ou intenção e escolha três cartas que chamarem sua atenção.
            Cada carta traz uma mensagem simbólica para inspirar sua reflexão.
          </p>
        </FadeIn>

        <AnimatePresence mode="wait">
          {!hasStarted ? (
            <motion.div 
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center w-full px-4"
            >
              <div className="bg-white/40 backdrop-blur-md border border-gold/30 rounded-2xl p-6 md:p-8 max-w-xl text-center mb-8 shadow-xl">
                <p className="font-body text-text-main/90 text-base md:text-lg italic leading-relaxed">
                  "Respire profundamente. Pense em uma intenção, uma dúvida ou apenas permita que sua intuição conduza sua escolha. Quando estiver pronta(o), escolha três cartas."
                </p>
              </div>
              <button
                onClick={startReading}
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold to-[#D4AF37] text-white px-8 md:px-12 py-4 rounded-full font-heading text-lg md:text-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 relative z-10" />
                <span className="relative z-10 tracking-wide drop-shadow-md">Iniciar Tiragem</span>
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key="reading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center w-full"
            >
              <TarotGrid 
                cards={sessionCards} 
                revealedIndexes={revealedIndexes} 
                onRevealCard={handleRevealCard} 
              />

              {/* Dica flutuante para ajudar o usuário se não abriu 3 */}
              <AnimatePresence>
                {!isReadingComplete && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-8 text-center"
                  >
                    <p className="font-heading text-gold text-lg md:text-xl">
                      Escolha {3 - revealedIndexes.length} {3 - revealedIndexes.length === 1 ? 'carta' : 'cartas'}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {isReadingComplete && (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="w-full"
                >
                  <TarotResult revealedCards={revealedCardsData} />
                  
                  <div className="flex flex-col items-center">
                    <button
                      onClick={resetReading}
                      className="group flex items-center justify-center gap-2 text-gold/80 hover:text-gold transition-colors font-medium text-sm uppercase tracking-widest mt-4 mb-8"
                    >
                      <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                      Nova Tiragem
                    </button>
                    
                    <TarotCTA />
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
};
