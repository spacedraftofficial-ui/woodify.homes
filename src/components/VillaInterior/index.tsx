import React from 'react';
import { motion } from 'framer-motion';
import { openLeadModal } from '../ui/LeadModal';
import { trackEvent } from '../../utils/tracking';

export const VillaInterior: React.FC = () => {
  const handleSpeakToDesignTeam = () => {
    trackEvent('cta_click', {
      placement: 'homepage_villa_section',
      package_tier: 'Bespoke Complete Villa Scope',
      configuration: 'Villa Interiors'
    });
    openLeadModal('Homepage - Villa Section', 'Bespoke Complete Villa Scope');
  };

  return (
    <section id="villa-interior" className="py-16 md:py-28 bg-woodify-bg border-b border-woodify-text/5 relative overflow-hidden">
      {/* Editorial Decorative Background Pattern */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-35 -z-10" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-woodify-burgundy/5 rounded-full filter blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-inter text-xs tracking-widest uppercase font-semibold text-woodify-burgundy mb-4 block"
          >
            Bespoke Architectural Scope
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-5xl font-bold text-woodify-text leading-tight mb-6"
          >
            No Packages. No Templates. <br />
            <span className="italic font-normal text-woodify-burgundy">Just Your Home.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-sm md:text-base text-woodify-text/70 leading-relaxed font-light max-w-2xl mx-auto mb-12"
          >
            Every villa is individually designed around its architecture, surroundings, and the people who call it home. We craft contextual woodwork programs that honor structural intent and provide quiet, organic luxury tailored to your signature lifestyle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex flex-col sm:flex-row items-center justify-center gap-8 py-6 px-12 rounded-2xl bg-white border border-woodify-text/5 shadow-md mb-12"
          >
            <div className="text-center sm:text-left">
              <span className="font-inter text-[10px] tracking-widest uppercase text-woodify-text/40 block">Pricing Program</span>
              <span className="font-playfair text-lg font-bold text-woodify-burgundy mt-1 block">Contact Sales for Pricing</span>
            </div>
            <div className="w-[1px] h-12 bg-woodify-text/10 hidden sm:block" />
            <div className="text-center sm:text-left">
              <span className="font-inter text-[10px] tracking-widest uppercase text-woodify-text/40 block">Warranty Period</span>
              <span className="font-playfair text-lg font-bold text-woodify-burgundy mt-1 block">10-Year Structural Coverage</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={handleSpeakToDesignTeam}
              className="bg-woodify-text hover:bg-luxury-gradient text-white font-inter text-xs tracking-widest uppercase font-semibold px-12 py-4 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Speak to Our Design Team
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VillaInterior;
