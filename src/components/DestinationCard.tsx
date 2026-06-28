import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, ArrowUpRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Destination } from '../data/destinations';

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const difficultyColors = {
    Easy: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/20',
    Moderate: 'border-accent-blue-500/30 text-accent-blue-400 bg-accent-blue-950/20',
    Challenging: 'border-amber-500/30 text-amber-400 bg-amber-950/20',
    Extreme: 'border-rose-500/30 text-rose-400 bg-rose-950/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col h-full group"
    >
      {/* Image Container with overlays */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        {/* Soft linear dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent opacity-80" />
        
        {/* Experience Type Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 text-[10px] tracking-wider uppercase font-sans font-medium rounded-full bg-black/60 backdrop-blur-md text-accent-blue-400 border border-accent-blue-500/20">
          {destination.experienceType}
        </span>

        {/* Difficulty Badge */}
        <span className={`absolute top-4 right-4 px-3 py-1 text-[10px] tracking-wider uppercase font-sans font-medium rounded-full border ${difficultyColors[destination.difficulty]}`}>
          {destination.difficulty}
        </span>
      </div>

      {/* Info Content */}
      <div className="p-6 flex flex-col flex-grow justify-between gap-4">
        <div className="flex flex-col gap-2">
          {/* Location & Rating row */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center gap-1.5 font-light">
              <MapPin className="w-3.5 h-3.5 text-accent-blue-500/60" />
              {destination.region}
            </span>
            <span className="flex items-center gap-1 text-accent-blue-400 font-medium">
              <Star className="w-3.5 h-3.5 fill-accent-blue-500/20 text-accent-blue-400" />
              {destination.rating.toFixed(1)}
            </span>
          </div>

          {/* Title & Tagline */}
          <h3 className="font-serif text-xl text-white group-hover:text-accent-blue-300 transition-colors duration-300">
            {destination.name}
          </h3>
          <p className="text-xs text-accent-blue-400/80 tracking-wide font-light italic">
            {destination.tagline}
          </p>
          <p className="text-gray-400 font-light text-sm line-clamp-3 leading-relaxed mt-2">
            {destination.description}
          </p>
        </div>

        {/* Bottom Details Row */}
        <div className="flex items-center justify-between pt-4 border-t border-accent-blue-500/10 mt-auto">
          <span className="flex items-center gap-1 text-xs text-gray-400 font-light">
            <Clock className="w-3.5 h-3.5 text-accent-blue-500/40" />
            {destination.duration}
          </span>

          <Link
            to={`/explore?gem=${destination.id}`}
            className="flex items-center gap-1 text-xs uppercase font-medium tracking-wider text-accent-blue-400 group-hover:text-accent-blue-200 transition-colors duration-300"
          >
            View Details
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
