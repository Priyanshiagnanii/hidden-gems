import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass, Globe, Sparkles, Map, Calendar, BookOpen, Info, Mail, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', icon: Globe },
    { name: 'Explore', path: '/explore', icon: Compass },
    { name: 'Regions', path: '/regions', icon: Globe },
    { name: 'Experiences', path: '/experiences', icon: Sparkles },
    { name: 'World Map', path: '/map', icon: Map },
    { name: 'Featured Gem', path: '/gem-of-the-week', icon: Calendar },
    { name: 'Gallery', path: '/gallery', icon: ImageIcon },
    { name: 'Blog', path: '/blog', icon: BookOpen },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'py-4 bg-dark-bg/85 backdrop-blur-md border-b border-accent-blue-500/20 shadow-lg shadow-black/40'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex items-center justify-center rounded-full border border-accent-blue-500/40 bg-accent-blue-950/20 group-hover:border-accent-blue-400 transition-all duration-300">
              <span className="font-serif text-lg font-bold blue-gradient-text">H</span>
              <div className="absolute inset-0 rounded-full border border-accent-blue-400/0 group-hover:border-accent-blue-400/40 group-hover:scale-110 transition-all duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.2em] text-lg font-bold text-white group-hover:text-accent-blue-300 transition-colors duration-300">
                HIDDEN GEMS
              </span>
              <span className="text-[9px] tracking-[0.4em] uppercase text-accent-blue-400 font-sans">
                Hidden Travel Guides
              </span>
            </div>
          </Link>

          {/* Desktop Nav links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 6).map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs tracking-wider uppercase font-sans transition-all duration-300 hover:text-accent-blue-400 relative py-1 ${
                    isActive ? 'text-accent-blue-400 font-medium' : 'text-gray-400'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent-blue-600 to-accent-blue-400"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Separator line */}
            <div className="h-4 w-[1px] bg-accent-blue-500/30" />

            <div className="flex items-center gap-6">
              {navLinks.slice(6).map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-xs tracking-wider uppercase font-sans transition-all duration-300 hover:text-accent-blue-400 relative py-1 ${
                      isActive ? 'text-accent-blue-400 font-medium' : 'text-gray-400'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavLine"
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent-blue-600 to-accent-blue-400"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Hamburguer Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-400 hover:text-accent-blue-400 transition-colors duration-300 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-lg lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 w-full max-w-sm h-full bg-dark-bg/95 border-l border-accent-blue-500/20 px-8 py-24 flex flex-col justify-between overflow-y-auto"
            >
              <div className="flex flex-col gap-6">
                <p className="text-[10px] tracking-[0.3em] uppercase text-accent-blue-400/60 font-medium mb-2 border-b border-accent-blue-500/20 pb-2">
                  Navigation
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {navLinks.map((link, idx) => {
                    const Icon = link.icon;
                    const isActive = location.pathname === link.path;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          to={link.path}
                          className={`flex items-center gap-4 text-base tracking-widest uppercase py-2 transition-all duration-300 ${
                            isActive ? 'text-accent-blue-400 font-medium pl-2' : 'text-gray-300 hover:text-accent-blue-300'
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isActive ? 'text-accent-blue-400' : 'text-accent-blue-500/60'}`} />
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Menu Footer */}
              <div className="border-t border-accent-blue-500/10 pt-6 mt-8">
                <p className="font-serif text-sm italic text-accent-blue-200/70 mb-2">
                  "Find hidden places and discover the world."
                </p>
                <p className="text-[10px] uppercase text-gray-500 tracking-wider">
                  © 2026 Hidden Gems. All rights reserved.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
