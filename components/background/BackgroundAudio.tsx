'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const playlist = [
  '/Daft Punk - Veridis Quo (Official Audio).mp3',
  '/Daft_Punk_Within.mp3'
];

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.25); // 25% default volume
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      // Set initial volume to 60%
      audioRef.current.volume = volume;
      
      // Attempt to autoplay
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log('Audio autoplay was prevented:', error);
            // If autoplay is blocked, wait for user interaction
            const handleFirstInteraction = () => {
              audioRef.current?.play().then(() => {
                setIsPlaying(true);
              });
              document.removeEventListener('click', handleFirstInteraction);
              document.removeEventListener('keydown', handleFirstInteraction);
            };
            
            document.addEventListener('click', handleFirstInteraction);
            document.addEventListener('keydown', handleFirstInteraction);
          });
      }
    }
  }, [volume]);

  // Handle track ended - play next track in playlist
  const handleTrackEnded = () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(nextIndex);
    
    // Wait for audio source to update, then play
    setTimeout(() => {
      if (audioRef.current && isPlaying) {
        audioRef.current.play();
      }
    }, 100);
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const playNextTrack = () => {
    if (audioRef.current) {
      const nextIndex = (currentTrackIndex + 1) % playlist.length;
      setCurrentTrackIndex(nextIndex);
      
      // Load the new track source and play
      audioRef.current.src = playlist[nextIndex];
      audioRef.current.load();
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error('Error playing next track:', error);
      });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        preload="auto"
        className="hidden"
        onEnded={handleTrackEnded}
      >
        <source src={playlist[currentTrackIndex]} type="audio/mpeg" />
      </audio>

      {/* Music Controls - Fixed Position Bottom Right */}
      <div
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-14 right-0 w-56 md:bottom-16 md:w-64 p-3 md:p-4 rounded-lg glass border border-cosmic-blue/30 bg-cosmic-darker/95 backdrop-blur-md space-y-2 md:space-y-3"
            >
              {/* Track Info */}
              <div className="text-xs text-gray-400 truncate">
                Track {currentTrackIndex + 1}/{playlist.length}
              </div>

              {/* Volume Control */}
              <div className="space-y-2">
                <label htmlFor="volume-slider" className="flex items-center justify-between text-xs text-gray-400">
                  <span>Volume</span>
                  <span>{Math.round(volume * 100)}%</span>
                </label>
                <input
                  id="volume-slider"
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  aria-label="Volume control"
                  className="w-full h-1 bg-cosmic-blue/30 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* Control Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={togglePlayPause}
                  className="flex-1 px-3 py-2 rounded-lg glass border border-cosmic-blue/30 text-cosmic-blue hover:bg-cosmic-blue/10 transition-all duration-200 text-sm"
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button
                  onClick={toggleMute}
                  className="flex-1 px-3 py-2 rounded-lg glass border border-cosmic-cyan/30 text-cosmic-cyan hover:bg-cosmic-cyan/10 transition-all duration-200 text-sm"
                >
                  {isMuted ? 'Unmute' : 'Mute'}
                </button>
              </div>

              {/* Next Track Button */}
              <button
                onClick={playNextTrack}
                className="w-full px-3 py-2 rounded-lg glass border border-cosmic-pink/30 text-cosmic-pink hover:bg-cosmic-pink/10 transition-all duration-200 text-sm flex items-center justify-center gap-2"
              >
                <span>Next Track</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Music Icon Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full glass border border-cosmic-blue/30 bg-cosmic-darker/95 backdrop-blur-md flex items-center justify-center text-cosmic-blue hover:text-cosmic-cyan transition-colors"
        >
          {isPlaying ? (
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
            </svg>
          ) : (
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
          )}
        </motion.button>
      </div>
    </>
  );
}