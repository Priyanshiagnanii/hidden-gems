import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Globe, Star, ArrowRight, Activity, Eye } from 'lucide-react';
import { destinations } from '../data/destinations';
import type { Destination } from '../data/destinations';

export const InteractiveMap: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredGem, setHoveredGem] = useState<Destination | null>(null);

  const handlePinClick = (gemId: string) => {
    navigate(`/explore?gem=${gemId}`);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-32 pb-24 px-6 md:px-12 relative flex flex-col items-center">
      {/* Background soft lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent-blue-900/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-accent-blue-950/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto">
        {/* Page Header */}
        <div className="flex flex-col gap-3 mb-12">
          <span className="text-[10px] tracking-[0.4em] uppercase text-accent-blue-400 font-semibold">
            World Map
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
            Interactive <span className="blue-gradient-text">Map</span>
          </h1>
          <p className="text-gray-400 font-light text-sm max-w-xl leading-relaxed">
            Find our hidden gems on the map. Hover over the glowing pins to see details, and click to learn more.
          </p>
        </div>

        {/* Immersive Map Container */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden glass-panel border border-accent-blue-500/20 bg-[#050b18] p-4 flex flex-col justify-between shadow-2xl">
          {/* Stylized Grid Overlay representing longitude and latitude */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
          
          {/* Subtle continent outlines in vector style using simple path overlays or abstract vectors */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none z-0">
            <svg viewBox="0 0 100 100" className="w-full h-full text-accent-blue-400 fill-current">
              {/* Very rough world map shapes to give visual context */}
              {/* North & South America */}
              <path d="M 10,15 Q 18,12 25,20 T 35,45 Q 38,55 35,75 T 45,90 Q 40,95 35,80 T 25,50 Q 15,40 10,15 Z" />
              {/* Greenland */}
              <path d="M 40,5 Q 45,3 48,8 T 42,15 Z" />
              {/* Africa */}
              <path d="M 45,45 Q 55,42 62,55 T 60,78 Q 50,85 46,75 T 45,45 Z" />
              {/* Europe */}
              <path d="M 43,15 Q 52,18 58,25 T 52,38 Q 48,32 43,15 Z" />
              {/* Asia & Russia */}
              <path d="M 55,20 Q 75,10 90,15 T 85,45 Q 80,50 72,55 T 68,35 Q 60,30 55,20 Z" />
              {/* Australia */}
              <path d="M 80,70 Q 88,68 90,75 T 82,85 Q 75,80 80,70 Z" />
            </svg>
          </div>

          {/* Compass Rose graphic inside map */}
          <div className="absolute bottom-6 right-8 opacity-25 z-0 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border border-dashed border-accent-blue-400/40 animate-[spin_40s_linear_infinite] flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-accent-blue-400/20 flex items-center justify-center">
                <span className="text-[10px] tracking-widest font-serif font-bold text-accent-blue-400">N</span>
              </div>
            </div>
          </div>

          {/* Coordinate Target Grid Labels */}
          <div className="absolute left-4 top-4 text-[9px] text-accent-blue-500/40 uppercase tracking-[0.2em] font-mono z-10">
            Status: Online // Map loaded successfully
          </div>

          {/* PLACING PINS */}
          <div className="absolute inset-0 z-10">
            {destinations.map((gem) => {
              return (
                <div
                  key={gem.id}
                  style={{ left: `${gem.coordinates.x}%`, top: `${gem.coordinates.y}%` }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  onMouseEnter={() => setHoveredGem(gem)}
                  onMouseLeave={() => setHoveredGem(null)}
                  onClick={() => handlePinClick(gem.id)}
                >
                  {/* Outer Pulsing Glow */}
                  <div className="absolute inset-0 w-8 h-8 -left-2 -top-2 rounded-full bg-accent-blue-500/25 animate-ping opacity-75 group-hover:scale-125 transition-transform" />
                  
                  {/* Glowing Radar Rings */}
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-accent-blue-600/30 border border-accent-blue-400/60 shadow-lg shadow-accent-blue-500/50 flex items-center justify-center">
                    {/* Tiny Central Pin */}
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  {/* Tiny Label tag */}
                  <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-sm border border-accent-blue-500/20 px-2 py-0.5 rounded text-[8px] tracking-wider text-accent-blue-300 uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {gem.name}
                  </div>
                </div>
              );
            })}
          </div>

          {/* FLOATING HOVER CARD DISPLAY */}
          <div className="absolute bottom-6 left-6 z-20 max-w-sm w-full font-sans pointer-events-none">
            <AnimatePresence>
              {hoveredGem && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass-panel p-5 rounded-2xl border-accent-blue-500/20 pointer-events-auto flex flex-col gap-3 shadow-xl shadow-black/80"
                >
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[9px] uppercase tracking-widest text-accent-blue-400 font-semibold bg-accent-blue-950/40 border border-accent-blue-500/20 px-2 py-0.5 rounded-full">
                      {hoveredGem.experienceType}
                    </span>
                    <span className="flex items-center gap-0.5 text-[10px] text-accent-blue-400 font-medium">
                      <Star className="w-3 h-3 fill-accent-blue-400" />
                      {hoveredGem.rating.toFixed(1)}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg text-white leading-tight">
                      {hoveredGem.name}
                    </h3>
                    <p className="text-[10px] text-accent-blue-400/80 font-light italic mt-0.5">
                      {hoveredGem.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-gray-400 font-light leading-relaxed line-clamp-2">
                    {hoveredGem.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-accent-blue-500/10 mt-1">
                    <span className="text-[9px] uppercase tracking-wider text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-accent-blue-500/40" />
                      {hoveredGem.region}
                    </span>
                    <button
                      onClick={() => handlePinClick(hoveredGem.id)}
                      className="text-[10px] uppercase font-bold text-accent-blue-300 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      View Details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Explanatory notes */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-400 font-light">
          <div className="flex gap-3 glass-panel p-4 rounded-xl border-accent-blue-500/5">
            <Activity className="w-5 h-5 text-accent-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-white mb-1">Glowing Pins</h4>
              <p>Glowing pins show destinations you can visit. Click them to view details.</p>
            </div>
          </div>
          <div className="flex gap-3 glass-panel p-4 rounded-xl border-accent-blue-500/5">
            <Globe className="w-5 h-5 text-accent-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-white mb-1">Interactive View</h4>
              <p>Our map helps you see exactly where in the world each destination is hidden.</p>
            </div>
          </div>
          <div className="flex gap-3 glass-panel p-4 rounded-xl border-accent-blue-500/5">
            <Eye className="w-5 h-5 text-accent-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-white mb-1">Quick Preview</h4>
              <p>Hover over any pin to see a quick summary, and click it to open the full guide.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
