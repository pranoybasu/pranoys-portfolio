'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/gallery/1.jpeg',
    alt: 'Gallery Image 1',
    caption: '',
    category: '',
  },
  {
    id: 2,
    src: '/images/gallery/2.jpeg',
    alt: 'Gallery Image 2',
    caption: '',
    category: '',
  },
  {
    id: 3,
    src: '/images/gallery/3.jpeg',
    alt: 'Gallery Image 3',
    caption: '',
    category: '',
  },
  {
    id: 4,
    src: '/images/gallery/4.jpeg',
    alt: 'Gallery Image 4',
    caption: '',
    category: '',
  },
  {
    id: 5,
    src: '/images/gallery/5.jpeg',
    alt: 'Gallery Image 5',
    caption: '',
    category: '',
  },
  {
    id: 6,
    src: '/images/gallery/6.jpeg',
    alt: 'Gallery Image 6',
    caption: '',
    category: '',
  },
  {
    id: 7,
    src: '/images/gallery/7.jpeg',
    alt: 'Gallery Image 7',
    caption: '',
    category: '',
  },
  {
    id: 8,
    src: '/images/gallery/8.jpeg',
    alt: 'Gallery Image 8',
    caption: '',
    category: '',
  },
  {
    id: 9,
    src: '/images/gallery/9.jpeg',
    alt: 'Gallery Image 9',
    caption: '',
    category: '',
  },
  {
    id: 10,
    src: '/images/gallery/10.jpeg',
    alt: 'Gallery Image 10',
    caption: '',
    category: '',
  },
  {
    id: 11,
    src: '/images/gallery/11.jpeg',
    alt: 'Gallery Image 11',
    caption: '',
    category: '',
  },
  {
    id: 12,
    src: '/images/gallery/12.jpeg',
    alt: 'Gallery Image 12',
    caption: '',
    category: '',
  },
];

function Lightbox({
  image,
  onClose,
  onNext,
  onPrev,
}: {
  image: GalleryImage;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-cosmic-cyan transition-colors z-10"
        aria-label="Close lightbox"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 text-white hover:text-cosmic-cyan transition-colors z-10"
        aria-label="Previous image"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-6xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <LightboxImage image={image} />
      </motion.div>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 text-white hover:text-cosmic-cyan transition-colors z-10"
        aria-label="Next image"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Image Counter */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
        {galleryImages.findIndex((img) => img.id === image.id) + 1} / {galleryImages.length}
      </div>
    </motion.div>
  );
}

function LightboxImage({ image }: { image: GalleryImage }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative w-full h-full flex flex-col items-center">
      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
        {!imageError ? (
          <>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="90vw"
              className={`object-contain transition-opacity duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              priority
            />
            {/* Loading placeholder while image loads */}
            {!imageLoaded && (
              <div className="absolute inset-0">
                <ImagePlaceholder category={image.category} size="large" />
              </div>
            )}
          </>
        ) : (
          /* Show placeholder if image fails to load */
          <ImagePlaceholder category={image.category} size="large" />
        )}
      </div>
      
      {/* Caption */}
      <div className="mt-6 text-center">
        <p className="text-xl text-white font-semibold mb-2">{image.caption}</p>
        <span className="px-3 py-1 rounded-full bg-cosmic-blue/20 text-cosmic-cyan text-sm border border-cosmic-blue/30">
          {image.category}
        </span>
      </div>
    </div>
  );
}

function GalleryCard({ image, index, onClick }: { image: GalleryImage; index: number; onClick: () => void }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-square rounded-lg overflow-hidden glass border border-cosmic-blue/20 hover:border-cosmic-cyan/50 transition-all duration-300">
        {/* Try to load actual image, fallback to placeholder */}
        {!imageError ? (
          <>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className={`object-cover transition-opacity duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
            {/* Loading placeholder while image loads */}
            {!imageLoaded && (
              <div className="absolute inset-0">
                <ImagePlaceholder category={image.category} />
              </div>
            )}
          </>
        ) : (
          /* Show placeholder if image fails to load */
          <ImagePlaceholder category={image.category} />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-white font-semibold mb-1">{image.caption}</p>
            <span className="text-cosmic-cyan text-sm">{image.category}</span>
          </div>
        </div>

        {/* Zoom Icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 rounded-full bg-cosmic-blue/80 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <section id="gallery" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cosmic-blue to-cosmic-cyan bg-clip-text text-transparent">
            Beyond the Code
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A glimpse into my world outside of development - adventures, travels, and moments that inspire
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <GalleryCard
              key={image.id}
              image={image}
              index={index}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>

        {/* Category Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {['Adventure', 'Travel', 'Nature', 'Hobbies'].map((category) => (
            <div
              key={category}
              className="px-4 py-2 rounded-full glass border border-cosmic-blue/30 text-gray-300 text-sm"
            >
              {category === 'Adventure' ? '⛰️' : 
               category === 'Travel' ? '✈️' : 
               category === 'Nature' ? '🌅' : 
               '📸'}{' '}
              {category}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </AnimatePresence>
    </section>
  );
}