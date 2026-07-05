import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { FadeIn } from '../../ui/Section';

export const TarotCTA: React.FC = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "5511969649635"; // Substituir pelo número real se houver
    const message = "Olá, Stefanie! Gostaria de agendar minha consulta de Tarot personalizada por R$30,00.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <FadeIn delay={0.6} className="max-w-2xl mx-auto mt-12 px-4">
      <div className="relative rounded-[24px] overflow-hidden bg-white/60 backdrop-blur-xl border border-gold/30 p-8 md:p-10 text-center shadow-2xl">
        {/* Glow de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-pink-medium/10 to-gold/10 pointer-events-none blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <p className="font-body text-base md:text-lg text-text-main/90 leading-relaxed mb-8 max-w-lg">
            Cada pessoa possui uma história única. Esta tiragem oferece apenas uma reflexão simbólica. 
            <span className="block mt-4 font-medium">
              Uma consulta personalizada permite interpretar as cartas considerando sua história, suas dúvidas e seus objetivos.
            </span>
          </p>
          
          <button
            onClick={handleWhatsApp}
            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold to-[#D4AF37] text-white px-8 md:px-10 py-4 rounded-full font-heading text-lg md:text-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6 relative z-10" />
            <span className="relative z-10 tracking-wide drop-shadow-md">Agendar minha Consulta por R$30,00</span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </FadeIn>
  );
};
