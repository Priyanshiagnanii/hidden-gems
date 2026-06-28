import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setStatus('submitting');
    
    // Simulate API registration
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <div className="relative py-20 px-6 md:px-12 rounded-3xl overflow-hidden glass-panel">
      {/* Background radial highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <span className="text-[10px] tracking-[0.4em] uppercase text-accent-blue-400 font-semibold block mb-3">
          Join Us
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-gray-400 font-light mb-8 text-sm md:text-base leading-relaxed">
          Subscribe to receive travel tips, destination guides, and special trip itineraries directly in your inbox.
        </p>

        <AnimatePresence mode="wait">
          {status !== 'success' ? (
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <div className="flex-grow relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'submitting'}
                  className="w-full px-5 py-3.5 bg-black/40 border border-accent-blue-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue-400 focus:ring-1 focus:ring-accent-blue-400/20 transition-all font-light text-sm"
                />
                {error && (
                  <span className="absolute left-0 -bottom-6 text-xs text-red-400 font-light">
                    {error}
                  </span>
                )}
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="blue-shimmer-btn px-6 py-3.5 text-white font-semibold rounded-xl text-sm tracking-wider uppercase transition-all duration-300 shadow-md shadow-accent-blue-950/40 flex items-center justify-center gap-2 hover:scale-[1.02] cursor-pointer"
              >
                {status === 'submitting' ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                     Subscribe
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-4 text-accent-blue-400 gap-3"
            >
              <CheckCircle2 className="w-12 h-12 text-accent-blue-400 animate-pulse" />
              <h3 className="font-serif text-xl text-white">Subscription Successful</h3>
              <p className="text-gray-400 text-sm font-light">
                Welcome to the Atlas. You will receive our next update shortly.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="text-xs uppercase text-accent-blue-400 hover:text-accent-blue-300 tracking-wider mt-2 border-b border-accent-blue-500/30 pb-0.5 cursor-pointer"
              >
                Subscribe another email address
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
