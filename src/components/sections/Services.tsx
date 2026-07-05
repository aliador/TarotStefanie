import React from 'react';
import { Section, FadeIn } from '../ui/Section';
import { useBooking } from '../../context/BookingContext';

export const Services = () => {
  const { openModal } = useBooking();

  const services = [
    {
      icon: "👼",
      title: "Leitura com os Anjos",
      fullTitle: "👼 Leitura com os Anjos",
      desc: "Receba mensagens de orientação, proteção e acolhimento."
    },
    {
      icon: "🌸",
      title: "Leitura da Criança Interior",
      fullTitle: "🌸 Leitura da Criança Interior",
      desc: "Compreenda emoções, fortaleça sua essência e promova autoconhecimento."
    },
    {
      icon: "🎂",
      title: "Leitura de Aniversário",
      fullTitle: "🎂 Leitura de Aniversário",
      desc: "Conheça as energias e oportunidades do seu novo ciclo."
    },
    {
      icon: "🌈",
      title: "Leitura dos Chakras",
      fullTitle: "🌈 Leitura dos Chakras",
      desc: "Analise o equilíbrio energético e identifique pontos que merecem atenção."
    },
    {
      icon: "🧭",
      title: "Tomada de Decisões",
      fullTitle: "🧭 Leitura para Tomada de Decisões",
      desc: "Obtenha clareza para refletir sobre escolhas importantes."
    },
    {
      icon: "🎯",
      title: "Alcançar um Objetivo",
      fullTitle: "🎯 Leitura para Alcançar um Objetivo",
      desc: "Explore caminhos e possibilidades para atingir seus objetivos."
    },
    {
      icon: "🔍",
      title: "Analisar uma Situação",
      fullTitle: "🔍 Leitura para Analisar uma Situação da Vida",
      desc: "Compreenda melhor desafios, relacionamentos ou momentos importantes."
    },
    {
      icon: "💖",
      title: "Amor-Próprio",
      fullTitle: "💖 Leitura para o Amor-Próprio",
      desc: "Fortaleça autoestima, confiança e conexão consigo."
    },
    {
      icon: "🕊️",
      title: "Liberar e Seguir",
      fullTitle: "🕊️ Leitura para Liberar o Perdão e Seguir em Frente",
      desc: "Encerre ciclos, libere emoções e abra espaço para novas possibilidades."
    }
  ];

  return (
    <Section id="leituras" className="bg-transparent relative w-full">
      <div className="absolute inset-0 bg-pink-light/30 backdrop-blur-3xl border-y border-white/50 -z-10"></div>
      
      <FadeIn className="text-center max-w-4xl mx-auto mb-10 md:mb-16 pt-6 md:pt-8 w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 md:mb-6 text-balance">Escolha a leitura que faz sentido para o seu momento</h2>
        <p className="text-base sm:text-lg md:text-xl text-text-main/80 text-balance">Diversas abordagens para iluminar o seu caminho e trazer clareza.</p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-6 md:pb-8 w-full">
        {services.map((service, index) => (
          <FadeIn key={index} delay={index * 0.05} className="h-full w-full">
            <button 
              onClick={() => openModal(service.fullTitle)}
              className="flex flex-col h-full w-full text-left p-6 sm:p-8 rounded-[24px] md:rounded-[32px] bg-white/60 backdrop-blur-xl border border-white shadow-sm lg:hover:shadow-lg lg:hover:-translate-y-1 lg:hover:border-pink-medium/50 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-medium"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/80 border border-white rounded-xl sm:rounded-2xl shadow-sm flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6" aria-hidden="true">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-text-main/70 leading-relaxed mb-0 flex-grow">{service.desc}</p>
            </button>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};
