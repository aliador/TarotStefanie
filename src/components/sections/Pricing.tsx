import React from 'react';
import { Section, FadeIn } from '../ui/Section';
import { Button } from '../ui/Button';
import { useBooking } from '../../context/BookingContext';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const { openModal } = useBooking();

  return (
    <Section className="bg-transparent w-full">
      <div className="max-w-4xl mx-auto w-full">
        <FadeIn className="w-full">
          <div className="relative rounded-[24px] md:rounded-[32px] bg-white/40 backdrop-blur-xl p-6 sm:p-8 md:p-12 lg:p-16 border border-white shadow-xl shadow-pink-medium/10 text-center overflow-hidden w-full">
            {/* Decorative background elements within card */}
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-pink-light/40 to-transparent rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-tr from-pink-medium/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="relative z-10 w-full flex flex-col items-center">
              <h2 className="text-lg sm:text-xl font-semibold text-gold mb-2 uppercase tracking-widest">Investimento</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 sm:mb-8 font-heading text-balance">Consulta Online</h3>
              
              <div className="flex justify-center items-baseline mb-6 sm:mb-8">
                <span className="text-2xl sm:text-3xl font-medium text-text-main/70 mr-1 sm:mr-2">R$</span>
                <span className="text-5xl sm:text-6xl md:text-8xl font-medium text-text-main">30</span>
                <span className="text-2xl sm:text-3xl font-medium text-text-main/70 ml-1">,00</span>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-3 sm:gap-4 md:gap-8 lg:gap-12 mb-8 md:mb-12 w-full max-w-sm mx-auto md:max-w-none">
                {[
                  "Atendimento Individual",
                  "Video/Chamada de Voz",
                  "Horário Agendado",
                  "Totalmente Personalizado"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 md:gap-2">
                    <div className="w-6 h-6 rounded-full bg-white border border-white flex flex-shrink-0 items-center justify-center text-gold shadow-sm">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={3} aria-hidden="true" />
                    </div>
                    <span className="font-medium text-text-main/90 text-sm sm:text-base text-left">{item}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="w-full sm:w-auto px-8 sm:px-16 text-base sm:text-lg min-h-[56px]" onClick={openModal}>
                Agendar Agora
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};
