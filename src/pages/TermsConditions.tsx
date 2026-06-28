import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, CheckCircle2, FileText, ExternalLink, RefreshCw, AlertTriangle, UserCheck } from 'lucide-react';

export const TermsConditions: React.FC = () => {
  const termPoints = [
    {
      icon: <FileText className="w-5 h-5 text-accent-blue-400 shrink-0" />,
      title: "Content & Accuracy",
      description: "The content on Hidden Gems is provided for informational and travel inspiration purposes only. While we strive to keep destination information accurate and up to date, we cannot guarantee its completeness or availability."
    },
    {
      icon: <UserCheck className="w-5 h-5 text-accent-blue-400 shrink-0" />,
      title: "Responsible Use",
      description: "You agree to use the website responsibly and not engage in any activity that may harm, disrupt, or interfere with the website or its services."
    },
    {
      icon: <Shield className="w-5 h-5 text-accent-blue-400 shrink-0" />,
      title: "Intellectual Property",
      description: "All content, including text, images, graphics, logos, icons, and design elements, is the property of Hidden Gems unless otherwise stated and may not be copied, reproduced, or distributed without prior written permission."
    },
    {
      icon: <ExternalLink className="w-5 h-5 text-accent-blue-400 shrink-0" />,
      title: "Third-Party Connections",
      description: "Our website may contain links to third-party websites or travel partners. Hidden Gems is not responsible for the content, services, or privacy practices of those external websites."
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-accent-blue-400 shrink-0" />,
      title: "Modifications to Services",
      description: "We reserve the right to modify, update, or discontinue any part of the website or these Terms & Conditions at any time without prior notice."
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-accent-blue-400 shrink-0" />,
      title: "Limitation of Liability",
      description: "Hidden Gems shall not be liable for any direct or indirect loss, damage, or inconvenience resulting from the use of this website or reliance on its content."
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-accent-blue-400 shrink-0" />,
      title: "Acknowledgement & Agreement",
      description: "By continuing to use Hidden Gems, you acknowledge that you have read, understood, and agreed to these Terms & Conditions."
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
            Agreement
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Terms & <span className="blue-gradient-text">Conditions</span>
          </h1>
          <p className="text-gray-400 font-light text-sm md:text-base max-w-2xl leading-relaxed mt-2">
            Please read these terms carefully before using Hidden Gems.
          </p>
        </motion.div>

        {/* Terms Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel text-left p-8 md:p-12 rounded-3xl border-accent-blue-500/10 shadow-2xl relative"
        >
          <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed mb-8 border-b border-accent-blue-500/10 pb-6">
            Welcome to <strong className="font-semibold text-white">Hidden Gems</strong>. By accessing and using our website, you agree to the following Terms & Conditions.
          </p>

          <div className="flex flex-col gap-8">
            {termPoints.map((point, index) => (
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
              <h4 className="text-sm font-semibold text-white">Have questions about our terms of service?</h4>
              <p className="text-gray-400 font-light text-xs mt-1">Contact our administration team for details.</p>
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
      </div>
    </div>
  );
};
