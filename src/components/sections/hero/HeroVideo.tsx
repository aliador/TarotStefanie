import React from 'react';
import { motion } from 'motion/react';
import { heroConfig } from '../../../config/heroConfig';

export const HeroVideo = () => {
  return (
    <motion.div 
      className="absolute inset-0 z-0 w-full h-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Desktop Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="hidden lg:block absolute top-0 left-0 w-full h-full object-cover"
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src={heroConfig.video.desktopWebm} type="video/webm" />
        <source src={heroConfig.video.desktop} type="video/mp4" />
      </video>

      {/* Mobile Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="block lg:hidden absolute top-0 left-0 w-full h-full object-cover"
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src={heroConfig.video.mobileWebm} type="video/webm" />
        <source src={heroConfig.video.mobile} type="video/mp4" />
      </video>
    </motion.div>
  );
};
