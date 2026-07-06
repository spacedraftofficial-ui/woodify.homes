import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { openLeadModal } from '../ui/LeadModal';
import { trackEvent } from '../../utils/tracking';

const trustPillars = [
  'Thoughtful Design',
  'Factory Precision',
  'Transparent Execution',
  'Dedicated Project Management',
  'Long-Term Service Support',
];

export const Hero: React.FC = () => {

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookConsultation = () => {
    trackEvent('cta_click', { placement: 'hero_section', label: 'Book a Free Consultation' });
    openLeadModal('Hero Section');
  };

  const handleExploreProjects = () => {
    trackEvent('cta_click', { placement: 'hero_section', label: 'Explore Our Projects' });
    handleScrollTo('#portfolio');
  };

  return (
    <>
      <section
        id="home"
        className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-woodify-bg"
      >
        {/* Background Image with Zoom & Fade-in */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(27,27,27,0.5) 0%, rgba(27,27,27,0.4) 60%, rgba(248,246,242,1) 98%), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')`,
            }}
          />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex flex-col justify-between pt-32 pb-16">
          
          {/* Editorial Text Block */}
          <div className="flex-1 flex flex-col justify-center items-start max-w-3xl mt-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-inter text-xs md:text-sm tracking-widest uppercase font-semibold text-white/95 mb-4 bg-woodify-burgundy/80 px-4 py-1.5 rounded-full backdrop-blur-md"
            >
              Luxury Residential Interiors
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-playfair text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-sm"
            >
              Timeless Design. <br />
              <span className="italic font-normal text-woodify-bg">A Home That’s Truly Yours.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-inter text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mb-8 drop-shadow-sm"
            >
              Thoughtfully designed residential interiors brought to life through factory precision, sustainable material choices and seamless turnkey execution.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button
                onClick={handleBookConsultation}
                className="bg-woodify-burgundy hover:bg-woodify-text text-white font-inter text-xs tracking-widest uppercase font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl border border-white/10"
              >
                Book a Free Consultation
              </button>
              <button
                onClick={handleExploreProjects}
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-woodify-text text-white font-inter text-xs tracking-widest uppercase font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Explore Our Projects
              </button>
            </motion.div>
          </div>

          {/* Floating Statistics & Scroll Indicator Footer */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/15 pt-8">
            {/* Animated Statistics */}
            <div className="grid grid-cols-3 gap-6 sm:gap-12 md:gap-16">
              <div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="font-playfair text-2xl sm:text-3xl font-semibold text-woodify-text"
                >
                  500+
                </motion.h3>
                <p className="font-inter text-[10px] sm:text-xs tracking-widest uppercase text-woodify-text/60 mt-1">
                  Projects Completed
                </p>
              </div>
              <div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.1 }}
                  className="font-playfair text-2xl sm:text-3xl font-semibold text-woodify-text"
                >
                  10+
                </motion.h3>
                <p className="font-inter text-[10px] sm:text-xs tracking-widest uppercase text-woodify-text/60 mt-1">
                  Years Experience
                </p>
              </div>
              <div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="font-playfair text-2xl sm:text-3xl font-semibold text-woodify-text"
                >
                  100%
                </motion.h3>
                <p className="font-inter text-[10px] sm:text-xs tracking-widest uppercase text-woodify-text/60 mt-1">
                  Custom Design
                </p>
              </div>
            </div>

            {/* Animated Scroll Down Indicator */}
            <motion.div
              onClick={() => handleScrollTo('#about')}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="flex items-center gap-3 cursor-pointer group self-center md:self-auto"
            >
              <span className="font-inter text-[10px] tracking-widest uppercase font-semibold text-woodify-text/70 group-hover:text-woodify-burgundy transition-colors duration-300">
                Scroll to explore
              </span>
              <div className="p-2.5 rounded-full border border-woodify-text/10 group-hover:border-woodify-burgundy group-hover:bg-woodify-burgundy group-hover:text-white transition-all duration-300 animate-bounce">
                <HiArrowDown className="text-sm" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Strip Below Hero */}
      <div className="bg-woodify-burgundy text-white py-5 px-6 relative z-10 border-y border-white/5 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          {trustPillars.map((pillar) => (
            <div key={pillar} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-woodify-coral animate-ping" />
              <span className="font-inter text-[10px] sm:text-xs tracking-widest uppercase font-semibold text-white/90">
                {pillar}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;

