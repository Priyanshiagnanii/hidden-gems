import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Landmark, Compass, Trees, Flame, ArrowRight } from 'lucide-react';

interface ExperienceCategory {
  type: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  bgImage: string;
}

export const Experiences: React.FC = () => {
  const navigate = useNavigate();

  const categories: ExperienceCategory[] = [
    {
      type: "Celestial",
      name: "Starry Skies",
      tagline: "Enjoy the stars in clear, dark night skies",
      description: "Stargazing dome camps, northern lights viewings, and night sky photography in places with absolutely no light pollution.",
      icon: Star,
      accentColor: "text-indigo-400 border-indigo-500/20 bg-indigo-950/20",
      bgImage: "/svalbard_real.png"
    },
    {
      type: "Antiquity",
      name: "Ancient History",
      tagline: "Walk through ancient stone cities and carvings",
      description: "Explore ancient underground cities, cliffside tombs, and historical ruins left by old civilizations in quiet, isolated settings.",
      icon: Landmark,
      accentColor: "text-amber-400 border-amber-500/20 bg-amber-950/20",
      bgImage: "/hegra_real.jpg"
    },
    {
      type: "Marine",
      name: "Underground Water",
      tagline: "Sail through quiet, glowing caves and lagoons",
      description: "Take quiet boat trips through underground rivers, stone caves, and coastal waters that naturally glow in the dark.",
      icon: Compass,
      accentColor: "text-accent-blue-400 border-accent-blue-500/20 bg-accent-blue-950/20",
      bgImage: "/bazaruto_real.png"
    },
    {
      type: "Forest",
      name: "Forests & Canopies",
      tagline: "Hike through deep forests and rocky cliffs",
      description: "Hike through towering stone needle forests, clear waterfalls, and green valleys filled with rare plants and animals.",
      icon: Trees,
      accentColor: "text-emerald-400 border-emerald-500/20 bg-emerald-950/20",
      bgImage: "/yakushima_real.png"
    },
    {
      type: "Volcanic",
      name: "Volcanoes & Deserts",
      tagline: "Explore hot sandy dunes and volcanic landscapes",
      description: "Travel to amazing nature borders, like desert dunes filled with seasonal lakes, black volcanic structures, and hot springs.",
      icon: Flame,
      accentColor: "text-rose-400 border-rose-500/20 bg-rose-950/20",
      bgImage: "/deadvlei_real.png"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-32 pb-24 px-6 md:px-12 relative">
      {/* Background Glows */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-accent-blue-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-blue-950/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col gap-3 mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase text-accent-blue-400 font-semibold">
            Travel Categories
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
            Travel <span className="blue-gradient-text">Experiences</span>
          </h1>
          <p className="text-gray-400 font-light text-sm max-w-xl leading-relaxed">
            We group our unique trips into 5 types of environments. Find the perfect experience that matches your travel style.
          </p>
        </div>

        {/* Categories Stack */}
        <div className="flex flex-col gap-10">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="glass-panel rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[300px] border border-accent-blue-500/10 group relative"
              >
                {/* Visual Category Illustration */}
                <div className="lg:col-span-4 relative overflow-hidden h-[200px] lg:h-auto min-h-[250px]">
                  <img
                    src={cat.bgImage}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.4] lg:brightness-[0.5]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-dark-bg via-transparent to-transparent" />
                  
                  {/* Floating Icon Indicator */}
                  <div className={`absolute top-6 left-6 p-3 rounded-2xl border ${cat.accentColor} backdrop-blur-md`}>
                    <Icon className="w-6 h-6 shrink-0" />
                  </div>
                </div>

                {/* Description Text */}
                <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-center gap-4 relative z-10">
                  <span className="text-[10px] tracking-[0.2em] font-semibold uppercase text-accent-blue-400">
                    Category 0{idx + 1}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-white">
                    {cat.name}
                  </h3>
                  <h4 className="text-sm italic text-accent-blue-200/80 font-serif font-light">
                    "{cat.tagline}"
                  </h4>
                  <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed max-w-2xl mt-1">
                    {cat.description}
                  </p>

                  <button
                    onClick={() => navigate(`/explore?experience=${encodeURIComponent(cat.type)}`)}
                    className="px-6 py-3 rounded-xl border border-accent-blue-500/20 bg-accent-blue-950/20 hover:bg-accent-blue-900/40 hover:border-accent-blue-400 text-xs font-semibold uppercase tracking-widest text-accent-blue-300 flex items-center justify-center gap-2 group w-max cursor-pointer mt-4 transition-all"
                  >
                    View Destinations
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
