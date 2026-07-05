import React, { useState } from 'react';
import { Section, FadeIn } from '../ui/Section';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    q: "Quanto custa?",
    a: "O valor de qualquer leitura online é de R$ 30,00."
  },
  {
    q: "Quanto tempo dura?",
    a: "A duração varia de acordo com a leitura escolhida e o fluxo da consulta, mas geralmente dura entre 30 a 60 minutos, garantindo que todas as suas dúvidas sejam acolhidas sem pressa."
  },
  {
    q: "Como funciona a consulta?",
    a: "No horário agendado, realizaremos uma videochamada ou presencialmente (conforme sua preferência). A leitura é feita ao vivo, de forma interativa e focada no seu momento."
  },
  {
    q: "Posso remarcar?",
    a: "Sim. Caso haja algum imprevisto, peço apenas que avise com pelo menos 24h de antecedência para reagendarmos sem custo."
  },
  {
    q: "Preciso instalar algum aplicativo?",
    a: "Utilizamos preferencialmente o WhatsApp para as chamadas de vídeo ou voz, o que facilita o acesso. Caso prefira Google Meet ou Zoom, podemos combinar."
  },
  {
    q: "As consultas ficam gravadas?",
    a: "Para garantir total sigilo e privacidade do seu momento, as consultas não são gravadas. No entanto, você é livre para fazer anotações durante o atendimento."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-transparent w-full">
      <div className="max-w-3xl mx-auto w-full">
        <FadeIn className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 md:mb-6 text-balance">Perguntas Frequentes</h2>
          <p className="text-base sm:text-lg md:text-xl text-text-main/80 text-balance">Esclareça suas dúvidas sobre os atendimentos.</p>
        </FadeIn>

        <div className="space-y-3 sm:space-y-4 w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={index} delay={index * 0.05} className="w-full">
                <div 
                  className={cn(
                    "border border-white rounded-[20px] sm:rounded-[24px] overflow-hidden transition-all bg-white/40 backdrop-blur-xl shadow-sm w-full",
                    isOpen ? "shadow-md shadow-pink-medium/10 bg-white/60" : "lg:hover:bg-white/50"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex items-center justify-between w-full p-4 sm:p-5 md:p-6 text-left min-h-[56px] sm:min-h-[64px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-medium pr-4 sm:pr-8 leading-snug">{faq.q}</span>
                    <div className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300",
                      isOpen ? "bg-white border border-white" : "bg-white/50 border border-white/50"
                    )}>
                      <ChevronDown 
                        className={cn(
                          "w-4 h-4 sm:w-5 sm:h-5 text-gold transition-transform duration-300",
                          isOpen ? "rotate-180" : ""
                        )} 
                        aria-hidden="true"
                      />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-sm sm:text-base text-text-main/80 leading-relaxed border-t border-white/50 pt-3 sm:pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
