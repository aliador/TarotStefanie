/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/sections/hero/Hero';
import { VideoSection } from './components/sections/VideoSection';
import { About } from './components/sections/About';
import { HowItWorks } from './components/sections/HowItWorks';
import { Services } from './components/sections/Services';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/sections/Footer';
import { HeroWhatsApp } from './components/sections/hero/HeroWhatsApp';
import { BookingProvider } from './context/BookingContext';
import { BookingModal } from './components/ui/BookingModal';
import heroImage from './components/imagem2.jpg';
import mobileBgImage from './components/imagem3.png';

export default function App() {
  return (
    <BookingProvider>
      <div className="min-h-screen bg-transparent font-body text-text-main selection:bg-pink-medium/30 selection:text-text-main relative z-0">
        {/* Fixed Background Image */}
        <div className="fixed inset-0 z-[-2] overflow-hidden bg-white pointer-events-none">
          <picture>
            <source media="(max-aspect-ratio: 9/16), (max-width: 768px)" srcSet={mobileBgImage} />
            <img 
              src={heroImage}
              alt="Ambiente acolhedor"
              className="absolute inset-0 w-full h-full object-contain object-center opacity-95"
              style={{
                filter: 'saturate(1.15) brightness(1.15) contrast(1.05)',
              }}
              loading="eager"
              fetchPriority="high"
            />
          </picture>
          
          {/* Overlay */}
          <div 
            className="absolute inset-0 mix-blend-normal"
            style={{
              background: 'linear-gradient(135deg, rgba(253,247,248,0.55), rgba(247,227,234,0.40), rgba(255,255,255,0.15))'
            }}
          />

          {/* Vignette Effect for Depth */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, transparent 30%, rgba(106, 76, 87, 0.15) 150%)'
            }}
          />
        </div>

        {/* Decorative Mesh Gradients for Frosted Glass Effect */}
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-gradient-to-br from-pink-light to-pink-soft opacity-60 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-tr from-pink-medium to-primary opacity-50 blur-[120px] rounded-full"></div>
        </div>

        <main className="relative z-10 w-full overflow-x-clip">
          <Hero />
          <VideoSection />
          <About />
          <HowItWorks />
          <Services />
          <Pricing />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <HeroWhatsApp />
        <BookingModal />
      </div>
    </BookingProvider>
  );
}
