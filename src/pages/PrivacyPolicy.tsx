import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, CheckCircle2, Lock, Eye, Database, Cookie } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  const policyPoints = [
    {
      icon: <Database className="w-5 h-5 text-accent-blue-400 shrink-0" />,
      title: "Information Collection",
      description: "We only collect information you voluntarily provide, such as your name, email address, and travel preferences through contact or booking forms."
    },
    {
      icon: <Eye className="w-5 h-5 text-accent-blue-400 shrink-0" />,
      title: "How We Use Information",
      description: "We use this information to respond to your inquiries, improve our services, and provide personalized travel recommendations."
    },
    {
      icon: <Cookie className="w-5 h-5 text-accent-blue-400 shrink-0" />,
      title: "Cookies & Analytics",
      description: "Our website uses cookies and analytics to enhance user experience and understand website performance."
    },
    {
      icon: <Lock className="w-5 h-5 text-accent-blue-400 shrink-0" />,
      title: "Data Sharing & Protection",
      description: "We never sell or rent your personal information to third parties. Your data is shared only with trusted service providers when necessary to deliver our services or comply with legal obligations."
    },
    {
      icon: <Shield className="w-5 h-5 text-accent-blue-400 shrink-0" />,
      title: "Security Safeguards",
      description: "We use industry-standard security measures to safeguard your information, but no online transmission can be guaranteed to be 100% secure."
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-accent-blue-400 shrink-0" />,
      title: "Your Agreement",
      description: "By using Hidden Gems, you agree to this Privacy Policy and the collection and use of information as described above."
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-32 pb-24 px-6 md:px-12 relative flex flex-col items-center">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-blue-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-accent-blue-950/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10 font-sans text-center">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-3 mb-12"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-accent-blue-400 font-semibold">
            Legal & Trust
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Privacy <span className="blue-gradient-text">Policy</span>
          </h1>
          <p className="text-gray-400 font-light text-sm md:text-base max-w-2xl leading-relaxed mt-2">
            Your privacy matters to us. Here's how we collect, use, and protect your information.
          </p>
        </motion.div>

        {/* Policy Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel text-left p-8 md:p-12 rounded-3xl border-accent-blue-500/10 shadow-2xl relative"
        >
          <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed mb-8 border-b border-accent-blue-500/10 pb-6">
            At <strong className="font-semibold text-white">Hidden Gems</strong>, we respect your privacy and are committed to protecting your personal information.
          </p>

          <div className="flex flex-col gap-8">
            {policyPoints.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 md:gap-5"
              >
                <div className="p-3 bg-accent-blue-950/30 border border-accent-blue-500/15 rounded-2xl shrink-0 mt-0.5">
                  {point.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xs font-semibold text-accent-blue-300 tracking-wider uppercase">
                    {point.title}
                  </h3>
                  <p className="text-gray-400 font-light text-xs md:text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section within Card */}
          <div className="mt-12 pt-8 border-t border-accent-blue-500/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-sm font-semibold text-white">Have questions about our privacy policies?</h4>
              <p className="text-gray-400 font-light text-xs mt-1">Get in touch with our security compliance team.</p>
            </div>
            <a 
              href="mailto:hiddengems@gmail.com"
              className="px-5 py-3 rounded-xl border border-accent-blue-500/20 bg-accent-blue-950/20 hover:bg-accent-blue-900/40 hover:border-accent-blue-400 text-xs font-semibold uppercase tracking-widest text-accent-blue-300 flex items-center gap-2 cursor-pointer transition-all shrink-0"
            >
              <Mail className="w-4 h-4" />
              hiddengems@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Last Updated Label */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 text-xs font-light text-gray-500"
        >
          Last Updated: June 2026
        </motion.div>
      </div>
    </div>
  );
};
