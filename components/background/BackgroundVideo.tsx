'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Ensure video plays with proper settings
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay was prevented:', error);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-darker via-cosmic-dark to-cosmic-darker" />
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm"
        style={{ filter: 'blur(4px)' }}
      >
        <source src="/finalvideoforPortfoliobkg.mp4" type="video/mp4" />
      </video>
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-darker/50 via-transparent to-cosmic-darker/80" />
    </div>
  );
}