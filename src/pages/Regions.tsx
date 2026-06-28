import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, ArrowRight } from 'lucide-react';
import { regions } from '../data/regions';

export const Regions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-32 pb-24 px-6 md:px-12 relative">
      {/* Background soft glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-accent-blue-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent-blue-950/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col gap-3 mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase text-accent-blue-400 font-semibold">
            Travel Regions
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
            Continental <span className="blue-gradient-text">Regions</span>
          </h1>
          <p className="text-gray-400 font-light text-sm max-w-xl leading-relaxed">
            We group our destinations into 5 world regions. Explore unique landscapes, from icy poles to remote deserts.
          </p>
        </div>

        {/* Detailed Regions Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regions.map((region, idx) => (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col h-[380px] md:h-[420px] relative group"
            >
              {/* Background cover image */}
              <img
                src={region.image}
                alt={region.fullName}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.35] group-hover:brightness-[0.25]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/25 to-transparent" />

              {/* Information Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end gap-4 z-10">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 text-[9px] uppercase tracking-widest text-accent-blue-300 font-semibold bg-accent-blue-950/40 border border-accent-blue-500/20 rounded-full flex items-center gap-1.5 w-max">
                    <Globe className="w-3.5 h-3.5 text-accent-blue-400" />
                    {region.gemCount} Destinations
                  </span>
                  <span className="text-[10px] tracking-wider text-gray-400 uppercase font-light">
                    {region.highlightText}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-2xl md:text-3xl text-white group-hover:text-accent-blue-300 transition-colors">
                    {region.fullName}
                  </h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed max-w-xl">
                    {region.description}
                  </p>
                </div>

                <button
                  onClick={() => navigate(`/explore?region=${encodeURIComponent(region.id)}`)}
                  className="px-6 py-3 rounded-xl border border-accent-blue-500/20 bg-accent-blue-950/20 hover:bg-accent-blue-900/40 hover:border-accent-blue-400 text-xs font-semibold uppercase tracking-widest text-accent-blue-300 flex items-center justify-center gap-2 group w-max cursor-pointer transition-all mt-2"
                >
                  View Destinations
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
