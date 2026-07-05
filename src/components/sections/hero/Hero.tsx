import React from 'react';
import { HeroVideo } from './HeroVideo';
import { HeroOverlay } from './HeroOverlay';
import { HeroParticles } from './HeroParticles';
import { HeroContent } from './HeroContent';

export const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Camada 1: Vídeo */}
      <HeroVideo />
      
      {/* Camada 2: Overlay */}
      <HeroOverlay />
      
      {/* Camada 3: Partículas discretas */}
      <HeroParticles />
      
      {/* Camada 4: Conteúdo textual e Botões */}
      <HeroContent />

      {/* Gradiente de transição para a próxima seção */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-primary to-transparent z-20 pointer-events-none" />
    </section>
  );
};
