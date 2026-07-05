import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BookingContextType {
  isModalOpen: boolean;
  openModal: (service?: string) => void;
  closeModal: () => void;
  selectedService: string;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openModal = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService('');
  };

  return (
    <BookingContext.Provider value={{ isModalOpen, openModal, closeModal, selectedService }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
