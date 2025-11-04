'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { useKonamiCode } from '@/hooks/useKonamiCode';
import { useSmoothScroll } from '@/hooks/useScrollAnimation';

// Lazy load heavy components
const BackgroundVideo = dynamic(() => import('@/components/background/BackgroundVideo'), { ssr: false });
const BackgroundAudio = dynamic(() => import('@/components/background/BackgroundAudio'), { ssr: false });
const CursorGlow = dynamic(() => import('@/components/effects/CursorGlow'), { ssr: false });
const Navigation = dynamic(() => import('@/components/layout/Navigation'));
const HeroSection = dynamic(() => import('@/components/sections/HeroSection'));
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'));
const SkillsSection = dynamic(() => import('@/components/sections/SkillsSection'));
const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'));
const BrickBreakerSection = dynamic(() => import('@/components/sections/BrickBreakerSection'));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'));
const BrickBreakerGame = dynamic(() => import('@/components/game/BrickBreakerGame'), { ssr: false });
export default function Home() {
  const [showGame, setShowGame] = useState(false);

  // Activate Easter egg with Konami code
  useKonamiCode(() => {
    setShowGame(true);
  });

  // Enable smooth scrolling
  useSmoothScroll();

  // Add smooth CSS scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background Elements */}
      <BackgroundVideo />
      <BackgroundAudio />
      <CursorGlow />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <BrickBreakerSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-white/50 text-sm">
        <p>&copy; {new Date().getFullYear()} Pranoy Basu. All rights reserved.</p>
      </footer>

      {/* Easter Egg: Brick Breaker Game */}
      <BrickBreakerGame isOpen={showGame} onClose={() => setShowGame(false)} />
    </main>
  );
}