'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// Lazy load components
const Navigation = dynamic(() => import('@/components/layout/Navigation'));
const GallerySection = dynamic(() => import('@/components/sections/GallerySection'));
const BackgroundVideo = dynamic(() => import('@/components/background/BackgroundVideo'), { ssr: false });
const BackgroundAudio = dynamic(() => import('@/components/background/BackgroundAudio'), { ssr: false });
const CursorGlow = dynamic(() => import('@/components/effects/CursorGlow'), { ssr: false });

export default function GalleryPage() {
  // Set page title
  useEffect(() => {
    document.title = 'Personal Gallery | Pranoy Basu';
  }, []);
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background Elements */}
      <BackgroundVideo />
      <BackgroundAudio />
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