import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Globe, TreePine, Recycle, Mountain, Footprints, Heart } from 'lucide-react';

export const EcoPledge: React.FC = () => {
  const pledgePoints = [
    {
      icon: <TreePine className="w-5 h-5 text-emerald-400 shrink-0" />,
      title: "Protect Wildlife & Habitats",
      description: "Respect wildlife and natural habitats. Keep a safe distance and observe without disrupting their natural behaviors."
    },
    {
      icon: <Recycle className="w-5 h-5 text-emerald-400 shrink-0" />,
      title: "Reduce Waste & Recycle",
      description: "Reduce plastic waste and recycle whenever possible. Avoid single-use plastics and dispose of waste in designated areas."
    },
    {
      icon: <Heart className="w-5 h-5 text-emerald-400 shrink-0" />,
      title: "Support Local Communities",
      description: "Support local businesses, guides, and artisans. Ensure your travel expenditures directly benefit the local economy."
    },
    {
      icon: <Mountain className="w-5 h-5 text-emerald-400 shrink-0" />,
      title: "Preserve Heritage Landmarks",
      description: "Preserve historical and cultural landmarks. Follow local guidelines and avoid touching, altering, or defacing historical sites."
    },
    {
      icon: <Footprints className="w-5 h-5 text-emerald-400 shrink-0" />,
      title: "Leave No Trace",
      description: "Travel responsibly and leave every destination cleaner than you found it. Pack out what you pack in, protecting fragile ecosystems."
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-32 pb-24 px-6 md:px-12 relative flex flex-col items-center">
      {/* Background Soft Glows with a hint of natural green and blue */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-blue-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-emerald-950/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-accent-blue-950/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10 font-sans text-center">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-3 mb-12"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-emerald-400 font-semibold flex items-center gap-1.5">
            <Leaf className="w-3.5 h-3.5" />
            Sustainability
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Eco-Friendly <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-accent-blue-400 bg-clip-text text-transparent">Pledge</span>
          </h1>
          <p className="text-gray-400 font-light text-sm md:text-base max-w-2xl leading-relaxed mt-2">
            Exploring the world responsibly, one hidden gem at a time.
          </p>
        </motion.div>

        {/* Pledge Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel text-left p-8 md:p-12 rounded-3xl border-accent-blue-500/10 shadow-2xl relative"
        >
          <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed mb-8 border-b border-accent-blue-500/10 pb-6">
            At <strong className="font-semibold text-white">Hidden Gems</strong>, we believe that every journey should leave a positive impact. We are committed to promoting responsible tourism that protects nature, respects local cultures, and supports local communities.
          </p>

          <h3 className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-6">
            We encourage every traveler to:
          </h3>

          <div className="flex flex-col gap-8 mb-10">
            {pledgePoints.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 md:gap-5"
              >
                <div className="p-3 bg-emerald-950/20 border border-emerald-500/15 rounded-2xl shrink-0 mt-0.5">
                  {point.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-xs font-semibold text-gray-200 tracking-wider uppercase">
                    {point.title}
                  </h4>
                  <p className="text-gray-400 font-light text-xs md:text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-300 font-light text-xs md:text-sm leading-relaxed mb-10 border-t border-accent-blue-500/10 pt-8">
            Together, we can protect the world's hidden treasures for future generations while creating meaningful travel experiences.
          </p>

          {/* Closing Statement Section */}
          <div className="pt-6 border-t border-accent-blue-500/10 flex flex-col md:flex-row items-center justify-center gap-3 text-center">
            <span className="font-serif text-base md:text-lg italic text-emerald-300/80 tracking-wide">
              "Explore Responsibly. Protect Nature. Inspire Future Adventures."
            </span>
            <div className="flex items-center gap-1">
              <Leaf className="w-5 h-5 text-emerald-400 animate-pulse shrink-0" />
              <Globe className="w-5 h-5 text-teal-400 shrink-0" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
