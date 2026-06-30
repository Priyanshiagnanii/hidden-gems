import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9" fill="currentColor" />
  </svg>
);

const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg border-t border-accent-blue-500/10 pt-20 pb-10 px-6 md:px-12 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Block */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-accent-blue-500/40 bg-accent-blue-950/20 overflow-hidden">
              <img
                src="/logo.jpg"
                alt="Hidden Gems Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-serif tracking-[0.2em] text-md font-bold text-white group-hover:text-accent-blue-300 transition-colors duration-300">
              HIDDEN GEMS
            </span>
          </Link>
          <p className="text-gray-400 font-light text-sm leading-relaxed">
            We create unique travel guides to the world's most quiet and beautiful natural places, focusing on eco-friendly trips.
          </p>
          <div className="flex items-center gap-4 text-accent-blue-500/60">
            <a href="#" className="hover:text-accent-blue-400 transition-colors duration-300" aria-label="Instagram"><InstagramIcon className="w-5 h-5" /></a>
            <a href="#" className="hover:text-accent-blue-400 transition-colors duration-300" aria-label="YouTube"><YoutubeIcon className="w-5 h-5" /></a>
            <a href="#" className="hover:text-accent-blue-400 transition-colors duration-300" aria-label="Twitter"><TwitterIcon className="w-5 h-5" /></a>
            <a href="#" className="hover:text-accent-blue-400 transition-colors duration-300" aria-label="Globe"><Globe className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Navigation Grid 1 */}
        <div className="flex flex-col gap-5">
          <h3 className="font-serif text-white tracking-widest text-sm uppercase border-b border-accent-blue-500/10 pb-2">
            Destinations
          </h3>
          <ul className="flex flex-col gap-3 text-sm font-light text-gray-400">
            <li><Link to="/explore" className="hover:text-accent-blue-400 transition-colors">Explore All Places</Link></li>
            <li><Link to="/regions" className="hover:text-accent-blue-400 transition-colors">Browse Regions</Link></li>
            <li><Link to="/experiences" className="hover:text-accent-blue-400 transition-colors">Travel Types</Link></li>
            <li><Link to="/map" className="hover:text-accent-blue-400 transition-colors">Interactive World Map</Link></li>
            <li><Link to="/gem-of-the-week" className="hover:text-accent-blue-400 transition-colors">Featured Destination</Link></li>
          </ul>
        </div>

        {/* Navigation Grid 2 */}
        <div className="flex flex-col gap-5">
          <h3 className="font-serif text-white tracking-widest text-sm uppercase border-b border-accent-blue-500/10 pb-2">
            Guides & Press
          </h3>
          <ul className="flex flex-col gap-3 text-sm font-light text-gray-400">
            <li><Link to="/blog" className="hover:text-accent-blue-400 transition-colors">Travel Blog</Link></li>
            <li><Link to="/about" className="hover:text-accent-blue-400 transition-colors">Our Story & Philosophy</Link></li>
            <li><Link to="/about" className="hover:text-accent-blue-400 transition-colors">Eco Commitment</Link></li>
            <li><a href="#" className="hover:text-accent-blue-400 transition-colors">Press & Media</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-5">
          <h3 className="font-serif text-white tracking-widest text-sm uppercase border-b border-accent-blue-500/10 pb-2">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-4 text-sm font-light text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent-blue-500/60 shrink-0 mt-0.5" />
              <span>12, Connaught Place, New Delhi, Delhi – 110001, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent-blue-500/60 shrink-0" />
              <span>+91 11 4567 8900</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent-blue-500/60 shrink-0" />
              <span>hiddengems@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Quote Banner */}
      <div className="max-w-3xl mx-auto text-center border-t border-accent-blue-500/10 pt-12 pb-8">
        <p className="font-serif text-lg italic text-accent-blue-200/60 leading-relaxed mb-3">
          "The world is full of beautiful places. We just need to protect them while exploring."
        </p>
        <span className="text-[10px] tracking-[0.3em] uppercase text-accent-blue-400 block">
          - OUR PROMISE
        </span>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-accent-blue-500/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-gray-500">
        <p>© 2026 Hidden Gems Travel Ltd. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link to="/privacy-policy" className="hover:text-accent-blue-500 transition-colors">Privacy Policy</Link>
          <Link to="/eco-pledge" className="hover:text-accent-blue-500 transition-colors">Eco-Friendly Pledge</Link>
          <Link to="/terms-conditions" className="hover:text-accent-blue-500 transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};
