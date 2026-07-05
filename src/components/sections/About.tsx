import React from 'react';
import { Section, FadeIn } from '../ui/Section';
import { Sparkles, Shield, Heart } from 'lucide-react';
import imagem5 from '../imagem5.jpg';

export const About = () => {
  return (
    <Section id="sobre" className="bg-transparent relative w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center w-full">
        <FadeIn direction="right" className="relative order-2 md:order-1 w-full max-w-sm mx-auto md:max-w-none">
          <div className="aspect-[4/5] rounded-[24px] md:rounded-[32px] overflow-hidden border border-white p-2 md:p-3 bg-white/40 backdrop-blur-xl shadow-xl shadow-pink-medium/10 relative z-10">
            <img 
              src={imagem5}
              alt="Ambiente de consulta acolhedor" 
              loading="lazy"
              className="w-full h-full object-cover rounded-[16px] md:rounded-[24px]"
            />
          </div>
          {/* Subtle decorative element */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 md:w-48 md:h-48 bg-pink-light/50 rounded-full -z-10 blur-2xl"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 md:w-48 md:h-48 bg-pink-medium/30 rounded-full -z-10 blur-2xl"></div>
        </FadeIn>

        <div className="max-w-xl w-full order-1 md:order-2">
          <FadeIn direction="left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 md:mb-8 text-balance">Seu momento de acolhimento</h2>
            <p className="text-base sm:text-lg text-text-main/80 mb-8 leading-relaxed text-balance">
              Cada consulta é realizada individualmente, respeitando seu momento, suas dúvidas e seu tempo. O atendimento acontece por videochamada ou presencialmente, em um ambiente reservado, acolhedor e com total sigilo.
            </p>
            
            <div className="space-y-4 md:space-y-6">
              {[
                { icon: Heart, text: "Ambiente livre de julgamentos" },
                { icon: Shield, text: "Total sigilo e privacidade" },
                { icon: Sparkles, text: "Orientação focada no seu bem-estar" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/40 backdrop-blur-md border border-white p-3 md:p-4 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/80 border border-white flex flex-shrink-0 items-center justify-center text-gold shadow-sm">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                  </div>
                  <span className="text-base md:text-lg font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};
