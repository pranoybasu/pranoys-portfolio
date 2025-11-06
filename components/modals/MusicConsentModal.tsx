'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicConsentModalProps {
  onConsent: (accepted: boolean) => void;
}

export function MusicConsentModal({ onConsent }: MusicConsentModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const musicConsent = localStorage.getItem('music-consent');
    
    if (musicConsent === null) {
      // First visit - show modal after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      // User has already made a choice
      onConsent(musicConsent === 'true');
    }
  }, [onConsent]);

  const handleChoice = (accepted: boolean) => {
    // Store the choice in localStorage
    localStorage.setItem('music-consent', String(accepted));
    
    // Notify parent component
    onConsent(accepted);
    
    // Hide modal
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => handleChoice(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-2rem)] max-w-md"
          >
            <div className="glass-strong rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/20">
              {/* Icon */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-cosmic-blue to-cosmic-cyan flex items-center justify-center">
                  <Volume2 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-cosmic-blue to-cosmic-cyan bg-clip-text text-transparent">
                Enhance Your Experience
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-center text-gray-300 mb-6 sm:mb-8">
                Would you like to enable background music for a more immersive journey through my portfolio?
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => handleChoice(false)}
                  className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-white/20 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 group text-sm sm:text-base"
                >
                  <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  <span>No Thanks</span>
                </button>
                
                <button
                  onClick={() => handleChoice(true)}
                  className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-cosmic-blue to-cosmic-cyan hover:shadow-lg hover:shadow-cosmic-blue/50 transition-all duration-300 flex items-center justify-center gap-2 group font-semibold text-sm sm:text-base"
                >
                  <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  <span>Yes, Play Music</span>
                </button>
              </div>

              {/* Footer note */}
              <p className="text-xs text-center text-gray-400 mt-4 sm:mt-6">
                You can change this preference anytime using the music controls
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}