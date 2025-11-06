'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Lazy load components
const Navigation = dynamic(() => import('@/components/layout/Navigation'));
const GallerySection = dynamic(() => import('@/components/sections/GallerySection'));
const BackgroundVideo = dynamic(() => import('@/components/background/BackgroundVideo'), { ssr: false });
const BackgroundAudio = dynamic(() => import('@/components/background/BackgroundAudio'), { ssr: false });
const CursorGlow = dynamic(() => import('@/components/effects/CursorGlow'), { ssr: false });

export default function GalleryPage() {
  const [musicConsent, setMusicConsent] = useState(false);

  // Set page title and check music consent
  useEffect(() => {
    document.title = 'Personal Gallery | Pranoy Basu';
    
    // Check if user has already consented to music
    const consent = localStorage.getItem('music-consent');
    if (consent === 'true') {
      setMusicConsent(true);
    }
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background Elements */}
      <BackgroundVideo />
      <BackgroundAudio musicConsent={musicConsent} />
      <CursorGlow />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Gallery Content */}
      <div className="pt-20">
        <GallerySection />
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-white/50 text-sm">
        <p>&copy; {new Date().getFullYear()} Pranoy Basu. All rights reserved.</p>
      </footer>
    </main>
  );
}