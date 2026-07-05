import React from 'react';
import { Section, FadeIn } from '../ui/Section';
import { CalendarHeart, MessageCircle, CheckCircle2, Video } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      icon: CalendarHeart,
      title: "1. Escolha uma data",
      desc: "Defina o melhor dia e horário para o seu momento de reflexão."
    },
    {
      icon: MessageCircle,
      title: "2. Envie mensagem",
      desc: "Clique no botão do WhatsApp e envie os dados solicitados."
    },
    {
      icon: CheckCircle2,
      title: "3. Confirmação",
      desc: "Receba a confirmação do agendamento e orientações para pagamento."
    },
    {
      icon: Video,
      title: "4. A Consulta",
      desc: "No horário marcado, iniciaremos nossa videochamada ou chamada de voz."
    }
  ];

  return (
    <Section className="bg-transparent w-full">
      <FadeIn className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 md:mb-6 text-balance">Como Funciona</h2>
        <p className="text-base sm:text-lg md:text-xl text-text-main/80 text-balance">Um processo simples e transparente para que você se preocupe apenas com o seu momento.</p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full">
        {steps.map((step, index) => (
          <FadeIn key={index} delay={index * 0.1} className="relative group w-full">
            <div className="h-full flex flex-col p-6 sm:p-8 rounded-[24px] md:rounded-[32px] bg-white/50 backdrop-blur-xl border border-white transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-pink-medium/10 lg:hover:-translate-y-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/80 border border-white shadow-sm flex items-center justify-center text-gold mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium mb-2 md:mb-3">{step.title}</h3>
              <p className="text-sm sm:text-base text-text-main/70 leading-relaxed">{step.desc}</p>
            </div>
            {/* Connector line for desktop */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-16 -right-4 w-8 border-t-2 border-dashed border-pink-medium/50 z-0"></div>
            )}
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};
