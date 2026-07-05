import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Info, MessageCircle } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import { generateWhatsAppLink } from '../../utils/whatsapp';
import { Button } from '../ui/Button';

const servicesOptions = [
  "👼 Leitura com os Anjos",
  "🌸 Leitura da Criança Interior",
  "🎂 Leitura de Aniversário",
  "🌈 Leitura dos Chakras",
  "🧭 Leitura para Tomada de Decisões",
  "🎯 Leitura para Alcançar um Objetivo",
  "🔍 Leitura para Analisar uma Situação da Vida",
  "💖 Leitura para o Amor-Próprio",
  "🕊️ Leitura para Liberar o Perdão e Seguir em Frente",
  "✨ Ainda não sei",
];

export const BookingModal = () => {
  const { isModalOpen, closeModal, selectedService } = useBooking();
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    service: '',
  });

  useEffect(() => {
    if (isModalOpen) {
      setFormData(prev => ({
        ...prev,
        service: selectedService || ''
      }));
    } else {
      // Reset when closed
      setFormData({
        name: '',
        date: '',
        time: '',
        service: '',
      });
    }
  }, [isModalOpen, selectedService]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContinue = () => {
    // Format date from yyyy-mm-dd to dd/mm/yyyy if present
    let formattedDate = formData.date;
    if (formattedDate) {
      const [year, month, day] = formattedDate.split('-');
      formattedDate = `${day}/${month}/${year}`;
    }

    const dataToSend = {
      ...formData,
      date: formattedDate,
    };
    
    const url = generateWhatsAppLink(dataToSend);
    window.open(url, '_blank', 'noopener,noreferrer');
    closeModal();
  };

  const handleDirect = () => {
    const url = generateWhatsAppLink();
    window.open(url, '_blank', 'noopener,noreferrer');
    closeModal();
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
            className="fixed inset-0 bg-pink-light/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, type: "spring", bounce: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-md rounded-[32px] shadow-xl border border-pink-light/50 overflow-hidden relative z-50 flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-pink-light/30">
                <h2 className="font-heading text-2xl text-text-main">Agende sua consulta</h2>
                <button 
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full bg-pink-light/50 flex items-center justify-center text-text-main/70 hover:text-text-main hover:bg-pink-soft transition-colors focus:outline-none"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
                <p className="text-sm text-text-main/80 mb-6 text-balance">
                  Se desejar, informe alguns dados para facilitar o atendimento.
                  <br />
                  <span className="font-medium text-pink-dark">Os campos abaixo são totalmente opcionais.</span>
                </p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-main mb-1.5 ml-1">Nome</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Digite seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border border-pink-medium/30 bg-pink-light/10 text-text-main placeholder:text-text-main/40 focus:outline-none focus:ring-2 focus:ring-pink-medium focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-text-main mb-1.5 ml-1">Data desejada</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border border-pink-medium/30 bg-pink-light/10 text-text-main placeholder:text-text-main/40 focus:outline-none focus:ring-2 focus:ring-pink-medium focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-text-main mb-1.5 ml-1">Horário desejado</label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border border-pink-medium/30 bg-pink-light/10 text-text-main placeholder:text-text-main/40 focus:outline-none focus:ring-2 focus:ring-pink-medium focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-text-main mb-1.5 ml-1">Qual leitura gostaria?</label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border border-pink-medium/30 bg-pink-light/10 text-text-main focus:outline-none focus:ring-2 focus:ring-pink-medium focus:border-transparent transition-all appearance-none pr-10"
                      >
                        <option value="">Selecione uma opção (opcional)</option>
                        {servicesOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-text-main/50">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-3 p-4 bg-pink-light/30 rounded-2xl text-xs sm:text-sm text-text-main/80">
                  <Info className="w-5 h-5 text-pink-dark flex-shrink-0 mt-0.5" />
                  <p>
                    Todos os campos são opcionais. Se preferir, você pode iniciar a conversa imediatamente pelo WhatsApp sem preencher nenhuma informação.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-pink-light/30 bg-white/50 flex flex-col gap-3">
                <Button onClick={handleContinue} className="w-full">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Continuar para o WhatsApp
                </Button>
                
                <button
                  onClick={handleDirect}
                  className="text-sm text-text-main/70 hover:text-pink-dark font-medium transition-colors py-2"
                >
                  Prefiro ir direto para o WhatsApp
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
