import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, MapPin, Phone, Mail, Compass, HelpCircle } from 'lucide-react';
import { destinations } from '../data/destinations';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const queryGem = searchParams.get('gem') || '';

  // Local Form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [targetGem, setTargetGem] = useState(queryGem);
  const [travelDate, setTravelDate] = useState('');
  const [groupSize, setGroupSize] = useState('2');
  const [notes, setNotes] = useState('');

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Update selected gem if URL query parameter changes
  useEffect(() => {
    if (queryGem) {
      setTargetGem(queryGem);
    }
  }, [queryGem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !travelDate) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }
    if (!email.includes('@')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    
    setErrorMessage('');
    setFormStatus('submitting');

    // Simulate API booking transmission
    setTimeout(() => {
      setFormStatus('success');
      setFullName('');
      setEmail('');
      setTravelDate('');
      setTargetGem('');
      setNotes('');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-32 pb-24 px-6 md:px-12 relative flex items-center justify-center">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-accent-blue-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-blue-950/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10 font-sans">
        {/* LEFT COLUMN: INFO CARD */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-36">
          <span className="text-[10px] tracking-[0.4em] uppercase text-accent-blue-400 font-semibold">
            Trip Planner
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
            Plan Your <span className="blue-gradient-text">Custom Trip</span>
          </h1>
          <p className="text-gray-400 font-light text-sm leading-relaxed max-w-sm">
            Get in touch with us to plan your trip, get travel permits, and find the perfect quiet spot.
          </p>

          <div className="flex flex-col gap-4 text-xs font-light text-gray-400 mt-4 border-t border-accent-blue-500/10 pt-6">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent-blue-500/60 shrink-0" />
              <span>12, Connaught Place, New Delhi, Delhi – 110001, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent-blue-500/60 shrink-0" />
              <span>+91 11 4567 8900</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent-blue-500/60 shrink-0" />
              <span>hiddengems@gmail.com</span>
            </div>
          </div>

          {/* Guidelines notes */}
          <div className="glass-panel p-4 rounded-xl border-accent-blue-500/5 flex gap-3 text-[11px] text-gray-500 leading-relaxed mt-4 bg-accent-blue-950/5">
            <HelpCircle className="w-5 h-5 text-accent-blue-500/30 shrink-0 mt-0.5" />
            <p>
              Note: Group sizes are capped at 6 participants max to preserve delicate microclimates and comply with zero footprint charters.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: BOOKING FORM CARD */}
        <div className="lg:col-span-7 glass-panel p-8 md:p-10 rounded-3xl border-accent-blue-500/10 shadow-2xl relative">
          <AnimatePresence mode="wait">
            {formStatus !== 'success' ? (
              <motion.form
                key="booking-form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 text-sm"
              >
                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3 rounded-lg border border-red-500/30 bg-red-950/20 text-xs text-red-400 font-light">
                    {errorMessage}
                  </div>
                )}

                {/* Name & Email inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Genevieve Dubois"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      disabled={formStatus === 'submitting'}
                      className="px-4 py-3 bg-black/40 border border-accent-blue-500/20 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-accent-blue-400 focus:ring-1 focus:ring-accent-blue-400/25 transition-all text-xs font-light"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Email Address *</label>
                    <input
                      type="email"
                      placeholder="hiddengems@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={formStatus === 'submitting'}
                      className="px-4 py-3 bg-black/40 border border-accent-blue-500/20 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-accent-blue-400 focus:ring-1 focus:ring-accent-blue-400/25 transition-all text-xs font-light"
                    />
                  </div>
                </div>

                {/* Target Destination Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Select Destination</label>
                  <select
                    value={targetGem}
                    onChange={(e) => setTargetGem(e.target.value)}
                    disabled={formStatus === 'submitting'}
                    className="px-4 py-3 bg-black/40 border border-accent-blue-500/20 rounded-xl text-white focus:outline-none focus:border-accent-blue-400 focus:ring-1 focus:ring-accent-blue-400/25 transition-all text-xs font-light cursor-pointer select-none"
                  >
                    <option value="" className="bg-dark-bg text-gray-400">Choose a place (Optional)</option>
                    {destinations.map(gem => (
                      <option key={gem.id} value={gem.id} className="bg-dark-bg text-white">
                        {gem.name} ({gem.region})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Travel window & Group Size */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Preferred Departure *</label>
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      disabled={formStatus === 'submitting'}
                      className="px-4 py-3 bg-black/40 border border-accent-blue-500/20 rounded-xl text-white focus:outline-none focus:border-accent-blue-400 focus:ring-1 focus:ring-accent-blue-400/25 transition-all text-xs font-light select-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Group Size (Max 6)</label>
                    <select
                      value={groupSize}
                      onChange={(e) => setGroupSize(e.target.value)}
                      disabled={formStatus === 'submitting'}
                      className="px-4 py-3 bg-black/40 border border-accent-blue-500/20 rounded-xl text-white focus:outline-none focus:border-accent-blue-400 focus:ring-1 focus:ring-accent-blue-400/25 transition-all text-xs font-light cursor-pointer"
                    >
                      <option value="1" className="bg-dark-bg">1 Explorer (Solo Solitude)</option>
                      <option value="2" className="bg-dark-bg">2 Explorers</option>
                      <option value="3" className="bg-dark-bg">3 Explorers</option>
                      <option value="4" className="bg-dark-bg">4 Explorers</option>
                      <option value="5" className="bg-dark-bg">5 Explorers</option>
                      <option value="6" className="bg-dark-bg">6 Explorers (Max Capacity)</option>
                    </select>
                  </div>
                </div>

                {/* Notes Custom dossier */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Bespoke Requirements / Notes</label>
                  <textarea
                    rows={4}
                    placeholder="Specify flight charters, dietary requirements, or physical parameters..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    disabled={formStatus === 'submitting'}
                    className="px-4 py-3 bg-black/40 border border-accent-blue-500/20 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-accent-blue-400 focus:ring-1 focus:ring-accent-blue-400/25 transition-all text-xs font-light resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="blue-shimmer-btn py-4 text-white font-semibold rounded-xl text-xs tracking-widest uppercase transition-all duration-300 shadow-md shadow-accent-blue-950/40 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 cursor-pointer mt-2"
                >
                  {formStatus === 'submitting' ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Submit Booking Request
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center py-12 text-accent-blue-400 gap-4 text-center font-sans"
              >
                <CheckCircle2 className="w-16 h-16 text-accent-blue-400 animate-pulse" />
                <h3 className="font-serif text-2xl text-white">Request Submitted!</h3>
                <p className="text-gray-400 text-sm font-light max-w-sm leading-relaxed">
                  We have received your trip request. Our travel planners will email you details shortly.
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="px-6 py-3 rounded-xl border border-accent-blue-500/20 bg-accent-blue-950/20 hover:bg-accent-blue-900/40 hover:border-accent-blue-400 text-xs font-semibold uppercase tracking-widest text-accent-blue-300 flex items-center justify-center gap-2 cursor-pointer transition-all mt-4"
                >
                  Send another request
                  <Compass className="w-4 h-4 text-accent-blue-400" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
