'use client';

import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  { id: 1, src: '/projects.jpg', alt: 'Coffs Harbour Luxury Builder' },
  { id: 2, src: '/projects-1.png', alt: 'Coffs Harbour Luxury Builder Al Fresco' },
  { id: 3, src: '/projects-2.png', alt: 'Coffs Harbour Luxury Builder Pool' },
  { id: 4, src: '/projects-3.png', alt: 'Coffs Harbour Luxury Builder Outdoor Area' },
  { id: 5, src: '/projects-4.png', alt: 'Coffs Harbour Luxury Builder Living Room' },
  { id: 6, src: '/services-2.jpg', alt: 'Coffs Harbour Luxury Builder Bathroom' },
  { id: 7, src: '/services-3.jpg', alt: 'Coffs Harbour Luxury Builder Staircase' },
  { id: 8, src: '/services.png', alt: 'Coffs Harbour Luxury Builder Kitchen' },
  { id: 9, src: '/stairs.png', alt: 'Coffs Harbour Luxury Builder Stairs' },
  { id: 10, src: '/dedication.jpg', alt: 'Coffs Harbour Luxury Builder Pool' },
  { id: 11, src: '/features.jpg', alt: 'Coffs Harbour Luxury Builder Extensions Renovation' },
  // { id: 12, src: '/gallery/luxury-builder-12.jpg', alt: 'Coffs Harbour Luxury Builder Entry' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % galleryImages.length);
  };

  const previousImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedImage(null);
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') previousImage();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Gallery Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative mb-4 cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  previousImage();
                }}
                className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
              >
                <FaChevronLeft className="text-4xl" />
              </button>

              <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  className="object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
              >
                <FaChevronRight className="text-4xl" />
              </button>

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <FaTimes className="text-4xl" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 