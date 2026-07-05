import React, { useRef, useState } from 'react';
import { Section, FadeIn } from '../ui/Section';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayClick = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleMuteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <Section id="conheca" className="bg-transparent">
      <div className="max-w-4xl mx-auto text-center w-full">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 md:mb-6 text-balance">Conheça meu trabalho</h2>
          <p className="text-base sm:text-lg md:text-xl text-text-main/80 mb-8 md:mb-12 max-w-2xl mx-auto text-balance">
            Assista ao vídeo e descubra como funciona uma consulta acolhedora, intuitiva e personalizada.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="w-full flex justify-center">
          <div className="relative aspect-[9/16] w-full max-w-[320px] sm:max-w-[400px] rounded-2xl md:rounded-[32px] overflow-hidden shadow-lg bg-white/40 backdrop-blur-xl border border-white group p-1.5 sm:p-2 md:p-3">
            <div 
              className="relative w-full h-full rounded-xl md:rounded-[24px] overflow-hidden bg-black cursor-pointer"
              onClick={handlePlayClick}
            >
              <video 
                ref={videoRef}
                src="/videos/tarotstefanie.mp4"
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                playsInline
                preload="metadata"
              />
              
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-500"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gold shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:bg-white pl-1">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 fill-current translate-x-0.5" aria-label="Reproduzir vídeo" />
                  </div>
                </div>
              )}

              {isPlaying && (
                <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={handleMuteClick}
                    className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  <button 
                    onClick={handlePlayClick}
                    className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
                  >
                    <Pause className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};
