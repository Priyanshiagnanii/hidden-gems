import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Compass, HeartHandshake, EyeOff, Globe } from 'lucide-react';

export const About: React.FC = () => {
  const navigate = useNavigate();

  const principles = [
    {
      title: "Quiet & Private Stays",
      description: "We keep our group sizes very small and choose quiet paths. This keeps you away from crowds and helps you connect deeply with nature.",
      icon: EyeOff
    },
    {
      title: "Zero-Footprint Travel",
      description: "Our trips are designed to keep nature safe. We use solar power, walk or paddle instead of using motors, and support lodges that fund local wildlife conservation projects.",
      icon: ShieldCheck
    },
    {
      title: "Eco-Friendly Stays",
      description: "We choose hotels and lodges built with eco-friendly materials that blend perfectly into the local landscape, from glass domes in Arctic valleys to stone villas in deserts.",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-32 pb-24 px-6 md:px-12 relative flex flex-col items-center">
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-accent-blue-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-blue-950/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto font-sans">
        {/* Page Header */}
        <div className="flex flex-col gap-3 mb-16 text-center md:text-left">
          <span className="text-[10px] tracking-[0.4em] uppercase text-accent-blue-400 font-semibold">
            Our Mission
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
            Our <span className="blue-gradient-text">Story</span>
          </h1>
          <p className="text-gray-400 font-light text-sm max-w-xl leading-relaxed mt-2">
            Hidden Gems was started to solve a simple problem: the more beautiful a place is, the more tourist crowds can ruin its natural environment.
          </p>
        </div>

        {/* Narrative Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-accent-blue-500/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80"
              alt="Silent Forest Canopy"
              className="w-full h-full object-cover brightness-[0.7]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/85 via-transparent to-transparent" />
          </div>

          <div className="flex flex-col gap-6 text-gray-300 font-light text-sm md:text-base leading-relaxed">
            <h3 className="font-serif text-2xl text-white font-semibold leading-tight">
              Protecting Special Places
            </h3>
            <p>
              We believe true luxury is about protecting nature, not consuming it. The world has many beautiful hidden gems, but they need travelers who visit gently and respect the environment.
            </p>
            <p>
              We combine high-end solar-powered stays, expert nature guides, and small group limits to let you explore these special places safely. Every trip helps support local wildlife and nature projects.
            </p>
          </div>
        </div>

        {/* PRINCIPLES STACK */}
        <div className="flex flex-col gap-8 mb-20">
          <h3 className="font-serif text-xl text-center text-white tracking-widest uppercase mb-4">
            Our Core Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((pr, idx) => {
              const Icon = pr.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-2xl border-accent-blue-500/10 flex flex-col gap-4 hover:border-accent-blue-400/30 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl border border-accent-blue-500/20 bg-accent-blue-950/20 w-max text-accent-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg text-white font-semibold">
                    {pr.title}
                  </h4>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {pr.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ECOLOGICAL CALLOUT */}
        <div className="glass-panel p-8 rounded-3xl border-accent-blue-500/10 text-center flex flex-col items-center gap-6 bg-accent-blue-950/10 mb-8">
          <div className="w-12 h-12 rounded-full border border-accent-blue-400/20 flex items-center justify-center bg-accent-blue-950/40 text-accent-blue-400">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-serif text-xl text-white font-semibold">Our Promise to Nature</h4>
            <p className="text-xs text-gray-400 font-light max-w-xl leading-relaxed">
              We give 15% of our bookings directly to local nature funds. All our trips are checked by environmental experts to ensure we leave no trace behind.
            </p>
          </div>

          <button
            onClick={() => navigate('/explore')}
            className="px-6 py-3 rounded-xl border border-accent-blue-500/20 bg-accent-blue-950/20 hover:bg-accent-blue-900/40 hover:border-accent-blue-400 text-xs font-semibold uppercase tracking-widest text-accent-blue-300 flex items-center justify-center gap-2 group cursor-pointer transition-all"
          >
            View Destinations
            <Compass className="w-4 h-4 text-accent-blue-400 group-hover:rotate-45 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
};
