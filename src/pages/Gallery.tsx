import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Compass, Maximize2, MapPin } from 'lucide-react';
import { destinations } from '../data/destinations';

interface GalleryItem {
  id: string;
  gemName: string;
  url: string;
  region: string;
}

export const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);

  // Flatten the image array from destinations
  const allPhotos: GalleryItem[] = destinations.reduce<GalleryItem[]>((acc, dest) => {
    // Principal image
    acc.push({
      id: dest.id,
      gemName: dest.name,
      url: dest.image,
      region: dest.region
    });
    // Sub images
    dest.galleryImages.forEach((imgUrl) => {
      acc.push({
        id: dest.id,
        gemName: dest.name,
        url: imgUrl,
        region: dest.region
      });
    });
    return acc;
  }, []);

  // Deduplicate by URL so each photo appears only once
  const seenUrls = new Set<string>();
  const photosList = allPhotos.filter((item) => {
    if (!item.url) return false;
    const isDuplicate = seenUrls.has(item.url);
    seenUrls.add(item.url);
    return !isDuplicate;
  });

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIdx !== null) {
      setActivePhotoIdx((activePhotoIdx + 1) % photosList.length);
    }
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIdx !== null) {
      setActivePhotoIdx((activePhotoIdx - 1 + photosList.length) % photosList.length);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-32 pb-24 px-6 md:px-12 relative">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-accent-blue-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent-blue-950/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col gap-3 mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase text-accent-blue-400 font-semibold">
            Photo Gallery
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
            Destination <span className="blue-gradient-text">Photos</span>
          </h1>
          <p className="text-gray-400 font-light text-sm max-w-xl leading-relaxed">
            Browse beautiful photos of our secret destinations. Explore glowing caves, ancient stone structures, and remote deserts.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photosList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              onClick={() => setActivePhotoIdx(idx)}
              className="break-inside-avoid relative rounded-2xl overflow-hidden border border-accent-blue-500/10 bg-black/20 group cursor-pointer shadow-md hover:border-accent-blue-400/30 transition-all duration-300"
            >
              <img
                src={item.url}
                alt={item.gemName}
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500 brightness-[0.85] group-hover:brightness-[0.7]"
              />

              {/* Hover detail overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 gap-2">
                <span className="flex items-center gap-1 text-[9px] uppercase tracking-wider text-accent-blue-400 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-accent-blue-500" />
                  {item.region}
                </span>
                <h3 className="font-serif text-lg text-white font-semibold">
                  {item.gemName}
                </h3>
                <div className="flex items-center gap-1 text-[10px] text-gray-400 uppercase tracking-widest font-semibold mt-1">
                  View Photo
                  <Maximize2 className="w-3 h-3 text-accent-blue-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {activePhotoIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhotoIdx(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhotoIdx(null)}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 cursor-pointer transition-all"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left navigation arrow */}
            <button
              onClick={handlePrevPhoto}
              className="absolute left-6 z-40 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 cursor-pointer transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Center photo display with overlay captions */}
            <motion.div
              key={activePhotoIdx}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center pointer-events-none"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photosList[activePhotoIdx].url}
                alt={photosList[activePhotoIdx].gemName}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl pointer-events-auto border border-white/10 shadow-2xl"
              />

              {/* Caption banner below image */}
              <div className="mt-4 p-4 rounded-xl glass-panel border border-white/10 flex items-center justify-between w-full max-w-lg pointer-events-auto font-sans">
                <div>
                  <h4 className="font-serif text-sm font-semibold text-white">{photosList[activePhotoIdx].gemName}</h4>
                  <span className="text-[10px] tracking-wider text-gray-500 uppercase font-light mt-0.5 block">{photosList[activePhotoIdx].region} Region</span>
                </div>
                <button
                  onClick={() => {
                    setActivePhotoIdx(null);
                    navigate(`/explore?gem=${photosList[activePhotoIdx].id}`);
                  }}
                  className="px-4 py-2 rounded-lg bg-accent-blue-600 hover:bg-accent-blue-500 text-white text-[10px] uppercase font-bold tracking-widest flex items-center gap-1 cursor-pointer transition-all"
                >
                  View Details
                  <Compass className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* Right navigation arrow */}
            <button
              onClick={handleNextPhoto}
              className="absolute right-6 z-40 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 cursor-pointer transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
