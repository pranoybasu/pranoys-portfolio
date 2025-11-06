'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(0.4);

  useEffect(() => {
    if (videoRef.current) {
      // Ensure video plays with proper settings
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay was prevented:', error);
      });
    }

    // Handle scroll to fade out video
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Fade out video as user scrolls down from hero section
      const fadeStart = windowHeight * 0.3; // Start fading at 30% scroll
      const fadeEnd = windowHeight * 0.8; // Complete fade at 80% scroll
      
      if (scrollPosition < fadeStart) {
        setVideoOpacity(0.4);
      } else if (scrollPosition > fadeEnd) {
        setVideoOpacity(0);
      } else {
        const fadeProgress = (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
        setVideoOpacity(0.4 * (1 - fadeProgress));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video - Constrained to Hero Section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-darker via-cosmic-dark to-cosmic-darker dark:opacity-100 opacity-0 transition-opacity duration-500" />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover blur-sm transition-opacity duration-500"
          style={{
            filter: 'blur(4px)',
            opacity: videoOpacity
          }}
        >
          <source src="/finalvideoforPortfoliobkg.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient for better text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-cosmic-darker/50 via-transparent to-cosmic-darker/80 dark:opacity-100 opacity-0 transition-opacity duration-500"
          style={{ opacity: videoOpacity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Picture */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cosmic-blue/50 shadow-2xl shadow-cosmic-blue/30">
              <Image
                src="/images/main/Main pic.jpeg"
                alt="Pranoy Basu"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cosmic-blue via-cosmic-cyan to-cosmic-pink bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            Pranoy Basu
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Software Engineer
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-cosmic-blue to-cosmic-cyan text-white font-semibold hover:shadow-lg hover:shadow-cosmic-blue/50 transition-all duration-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg glass border border-cosmic-blue/50 text-cosmic-blue hover:bg-cosmic-blue/10 transition-all duration-200"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-cosmic-cyan/50 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-cosmic-cyan"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}