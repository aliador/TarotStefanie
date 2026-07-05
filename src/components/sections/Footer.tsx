import React from 'react';
import { Smartphone } from 'lucide-react';
import footerImage from '../imagem1.jpg';

export const Footer = () => {
  return (
    <footer className="relative z-10 w-full pt-12 md:pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col items-center justify-center gap-10 w-full">
          <div className="flex items-center justify-center">
            <img 
              src={footerImage} 
              alt="Tarot Stefanie" 
              loading="lazy"
            />
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-4">
            <a 
              href="https://wa.me/5511969649635" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/60 backdrop-blur-md border border-white flex items-center justify-center text-text-main hover:text-pink-dark active:scale-95 lg:hover:bg-white shadow-sm transition-all duration-300"
              aria-label="Falar no WhatsApp"
            >
              <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
