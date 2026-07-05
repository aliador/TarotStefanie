import React from 'react';
import { Section, FadeIn } from '../ui/Section';
import { Button } from '../ui/Button';
import { useBooking } from '../../context/BookingContext';

export const FinalCTA = () => {
  const { openModal } = useBooking();

  return (
    <Section className="bg-transparent relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-light/60 to-pink-soft/60 backdrop-blur-xl border-y border-white"></div>
      
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4 py-16 md:py-24 flex flex-col items-center">
        <FadeIn className="w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 md:mb-8 leading-tight text-balance">
            Permita-se viver esse momento de <span className="text-gold italic block sm:inline">conexão.</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-text-main/80 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed text-balance">
            "Reserve um tempo para olhar com mais carinho para sua história, seus desafios e suas possibilidades. Cada consulta é um convite ao autoconhecimento, realizada com respeito, acolhimento e total sigilo."
          </p>

          <Button size="lg" className="w-full sm:w-auto sm:px-12 min-h-[56px]" onClick={openModal}>
            Agendar minha consulta
          </Button>
        </FadeIn>
      </div>
    </Section>
  );
};
