import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Compass, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { regions } from '../data/regions';
import { destinations } from '../data/destinations';
import { testimonials } from '../data/testimonials';
import { DestinationCard } from '../components/DestinationCard';
import { Newsletter } from '../components/Newsletter';

export const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/explore?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/explore');
    }
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Select top 3 highest rated destinations as featured
  const featuredGems = [...destinations]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  // Gem of the Week is Trolltunga
  const gemOfTheWeek = destinations.find(d => d.id === 'trolltunga') || destinations[0];

  return (
    <div className="min-h-screen bg-dark-bg text-white relative">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Full-screen Background Image with overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
            alt="Cinematic Mountain Wilderness"
            className="w-full h-full object-cover object-center transform scale-105 filter brightness-[0.4]"
          />
          {/* Deep Navy/Black Radial Overlay and Linear bottom fades */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/20 via-dark-bg/40 to-dark-bg" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#020617_90%)]" />
        </div>

        {/* Content Container */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10 flex flex-col items-center gap-6 mt-16">
          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-4 py-1.5 rounded-full border border-accent-blue-500/30 bg-accent-blue-950/20 backdrop-blur-md text-[10px] uppercase tracking-[0.4em] text-accent-blue-300 font-semibold"
          >
            A Guide to Hidden Places
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-white leading-none max-w-4xl"
          >
            Discover the world's <br />
            <span className="blue-gradient-text">hidden gems.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 font-sans font-light text-base md:text-lg max-w-2xl leading-relaxed tracking-wide"
          >
            Explore secret destinations beyond the tourist trail — quietly mapped, beautifully told.
          </motion.p>

          {/* Search Bar */}
          <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full max-w-2xl mt-4 flex items-center p-2 rounded-2xl glass-panel shadow-2xl"
          >
            <div className="flex-grow flex items-center px-4 gap-2">
              <Search className="w-5 h-5 text-accent-blue-400 shrink-0" />
              <input
                type="text"
                placeholder="Search by country, name, or weather..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none text-white placeholder-gray-400 focus:outline-none focus:ring-0 text-sm py-2 font-light"
              />
            </div>
            <button
              type="submit"
              className="blue-shimmer-btn px-6 py-3 rounded-xl text-white font-medium text-xs tracking-widest uppercase transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-md flex items-center gap-1 cursor-pointer shrink-0"
            >
              Search
            </button>
          </motion.form>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 mt-6"
          >
            <Link
              to="/explore"
              className="px-8 py-4 rounded-xl border border-accent-blue-500/20 bg-accent-blue-950/20 hover:bg-accent-blue-900/40 hover:border-accent-blue-400/50 transition-all duration-300 text-sm tracking-wider uppercase font-medium flex items-center justify-center gap-2 group backdrop-blur-sm cursor-pointer"
            >
              Explore Places
              <Compass className="w-4 h-4 text-accent-blue-400 group-hover:rotate-45 transition-transform duration-500" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-white text-dark-bg hover:bg-gray-100 hover:scale-[1.02] active:scale-95 transition-all duration-300 text-sm tracking-wider uppercase font-semibold flex items-center justify-center gap-1 cursor-pointer shadow-lg shadow-white/5"
            >
              Book a Trip
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
          <span className="text-[9px] uppercase tracking-[0.2em] font-sans font-light">Scroll to Explore</span>
          <div className="w-[1px] h-6 bg-accent-blue-500/40" />
        </div>
      </section>

      {/* 2. REGIONS EXPLORER SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-accent-blue-400 font-semibold">
              The Continents
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold">
              Explore by <span className="blue-gradient-text">Region</span>
            </h2>
          </div>
          <p className="text-gray-400 font-light text-sm max-w-md leading-relaxed">
            Our travel guides cover the world's most beautiful natural spots. Select a region below to start exploring.
          </p>
        </div>

        {/* Region Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {regions.map((region, idx) => (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative h-96 rounded-2xl overflow-hidden glass-panel border border-accent-blue-500/10 cursor-pointer"
              onClick={() => navigate(`/explore?region=${encodeURIComponent(region.id)}`)}
            >
              {/* Background image */}
              <img
                src={region.image}
                alt={region.fullName}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-[0.4] group-hover:brightness-[0.3]"
              />
              {/* Overlay shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/30 to-transparent" />
              
              {/* Info details */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end gap-3 z-10">
                <span className="text-[9px] uppercase tracking-widest text-accent-blue-400 font-medium">
                  {region.gemCount} active place{region.gemCount > 1 ? 's' : ''}
                </span>
                <h3 className="font-serif text-xl text-white group-hover:text-accent-blue-300 transition-colors">
                  {region.name}
                </h3>
                <p className="text-xs text-gray-400 font-light line-clamp-3 leading-relaxed opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-300">
                  {region.description}
                </p>
                <div className="flex items-center gap-1 text-[10px] uppercase font-semibold text-accent-blue-400 tracking-wider pt-2 border-t border-accent-blue-500/0 group-hover:border-accent-blue-500/20 transition-all">
                  Browse Region
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. GEM OF THE WEEK EDITORIAL */}
      <section className="py-24 bg-gradient-to-b from-dark-bg to-accent-blue-950/20 border-y border-accent-blue-500/5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text/Content block */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-[10px] tracking-[0.4em] uppercase text-accent-blue-400 font-bold px-3 py-1 border border-accent-blue-400/20 bg-accent-blue-950/40 rounded-full w-max">
              Featured Destination
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
              {gemOfTheWeek.name}
            </h2>
            <p className="text-accent-blue-400 italic font-serif text-base tracking-wide">
              "{gemOfTheWeek.tagline}"
            </p>
            <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed">
              {gemOfTheWeek.longDescription.slice(0, 320)}...
            </p>
            
            {/* Quick specifications */}
            <div className="grid grid-cols-2 gap-4 border-y border-accent-blue-500/10 py-6 my-2">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-gray-500 block mb-1">Region</span>
                <span className="text-sm font-medium text-white">{gemOfTheWeek.region}</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider text-gray-500 block mb-1">Difficulty</span>
                <span className="text-sm font-medium text-accent-blue-400">{gemOfTheWeek.difficulty}</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider text-gray-500 block mb-1">Duration</span>
                <span className="text-sm font-medium text-white">{gemOfTheWeek.duration}</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider text-gray-500 block mb-1">Best Time</span>
                <span className="text-sm font-medium text-white">{gemOfTheWeek.bestTime}</span>
              </div>
            </div>

            <Link
              to="/gem-of-the-week"
              className="px-6 py-3.5 rounded-xl border border-accent-blue-500/20 bg-accent-blue-950/20 hover:bg-accent-blue-900/40 hover:border-accent-blue-400 transition-all font-medium text-xs uppercase tracking-widest text-accent-blue-300 flex items-center justify-center gap-2 group w-max cursor-pointer"
            >
              Read Full Guide
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Immersive Image Display */}
          <div className="lg:col-span-7 relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden group shadow-2xl">
            <img
              src={gemOfTheWeek.image}
              alt={gemOfTheWeek.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.7] group-hover:brightness-[0.6]"
            />
            {/* Visual borders overlay */}
            <div className="absolute inset-4 rounded-2xl border border-white/10 pointer-events-none" />
            
            {/* Image caption banner */}
            <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl glass-panel border border-white/10 flex items-center justify-between gap-4">
              <div>
                <span className="text-[9px] tracking-widest text-accent-blue-400 uppercase font-semibold">Hidden Cave</span>
                <h4 className="font-serif text-lg text-white mt-1">Coordinates Verified</h4>
              </div>
              <Link
                to={`/explore?gem=${gemOfTheWeek.id}`}
                className="w-10 h-10 rounded-full bg-white text-dark-bg flex items-center justify-center hover:scale-110 transition-transform shadow-md cursor-pointer shrink-0"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED GEMS GRID */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-accent-blue-400 font-semibold">
              Curated Selection
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold">
              Featured <span className="blue-gradient-text">Places</span>
            </h2>
          </div>
          <Link
            to="/explore"
            className="text-sm font-semibold uppercase tracking-wider text-accent-blue-400 hover:text-accent-blue-300 transition-colors flex items-center gap-1.5 group cursor-pointer"
          >
            Browse All Places
            <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
          </Link>
        </div>

        {/* Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredGems.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </section>

      {/* 5. TESTIMONIALS CAROUSEL */}
      <section className="py-24 bg-gradient-to-t from-dark-bg via-accent-blue-950/10 to-dark-bg border-t border-accent-blue-500/5 px-6 md:px-12">
        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center gap-8">
          <span className="text-[10px] tracking-[0.4em] uppercase text-accent-blue-400 font-bold">
            Traveler Reviews
          </span>

          <div className="relative min-h-[220px] flex items-center justify-center">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: idx === activeTestimonial ? 1 : 0,
                  scale: idx === activeTestimonial ? 1 : 0.95,
                  zIndex: idx === activeTestimonial ? 10 : 0,
                  position: idx === activeTestimonial ? 'relative' : 'absolute',
                }}
                transition={{ duration: 0.5 }}
                className={`${idx === activeTestimonial ? 'block' : 'pointer-events-none'}`}
              >
                {/* 5-star rating */}
                <div className="flex justify-center gap-1 text-accent-blue-400 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-blue-400" />
                  ))}
                </div>

                {/* Big Quote */}
                <p className="font-serif text-xl md:text-2xl text-white italic leading-relaxed max-w-3xl">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-center gap-3 mt-8">
                  <div className="w-12 h-12 rounded-full bg-accent-blue-900/60 border border-accent-blue-500/30 flex items-center justify-center shrink-0">
                    <span className="font-serif text-accent-blue-300 text-lg font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-serif text-sm font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-[11px] text-gray-500 font-light font-sans">{testimonial.role} — {testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={handlePrevTestimonial}
              className="w-10 h-10 rounded-full border border-accent-blue-500/20 bg-accent-blue-950/20 flex items-center justify-center hover:border-accent-blue-400 text-accent-blue-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs text-gray-500 font-light font-sans">
              0{activeTestimonial + 1} / 0{testimonials.length}
            </span>
            <button
              onClick={handleNextTestimonial}
              className="w-10 h-10 rounded-full border border-accent-blue-500/20 bg-accent-blue-950/20 flex items-center justify-center hover:border-accent-blue-400 text-accent-blue-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. NEWSLETTER SUBSCRIPTION */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto mb-12">
        <Newsletter />
      </section>
    </div>
  );
};
