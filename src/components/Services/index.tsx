import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiFeather, 
  FiLayers, 
  FiTrendingUp, 
  FiDollarSign, 
  FiUsers, 
  FiClock 
} from 'react-icons/fi';

interface Pillar {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const pillars: Pillar[] = [
  {
    title: "Thoughtful Design",
    description: "Every blueprint is tailored to your habits and rhythms. We avoid template design, crafting distinct layouts that breathe naturally.",
    icon: FiFeather
  },
  {
    title: "Premium Materials",
    description: "From German soft-close fittings to FSC-certified solid oak, we select raw materials that age beautifully and release zero harmful toxins.",
    icon: FiLayers
  },
  {
    title: "Reliable Execution",
    description: "80% of our woodwork is pre-fabricated in our modern, automated plant, ensuring millimeter-level precision and flawless installation.",
    icon: FiTrendingUp
  },
  {
    title: "Transparent Pricing",
    description: "Receive a detailed, fully itemized commercial cost sheet. No margins on accessories, no hidden markup, and zero cost overruns.",
    icon: FiDollarSign
  },
  {
    title: "Dedicated Team",
    description: "Your home is curated by an integrated unit comprising a Senior Designer, a dedicated Site Engineer, and a hands-on Project Manager.",
    icon: FiUsers
  },
  {
    title: "Timely Handover",
    description: "We back our timelines with commercial penalties. A complete 45 to 60-day roadmap managed with absolute logistical transparency.",
    icon: FiClock
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-14 md:py-24 bg-white relative overflow-hidden">
      {/* Editorial Decorative Background Pattern */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-woodify-bg rounded-full filter blur-3xl opacity-30 -z-10" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-woodify-burgundy/5 rounded-full filter blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="max-w-2xl mb-10 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-inter text-xs tracking-widest uppercase font-semibold text-woodify-burgundy mb-3"
          >
            The Woodify Guarantee
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-woodify-text leading-tight"
          >
            Crafting Homes with Quiet Intentionality
          </motion.h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="p-8 rounded-2xl bg-woodify-bg hover:bg-white hover:shadow-2xl transition-all duration-300 border border-woodify-text/5 flex flex-col justify-between h-80 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-luxury-gradient flex items-center justify-center text-woodify-burgundy group-hover:text-white transition-all duration-300 shadow-sm border border-woodify-text/5 mb-8">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-woodify-text mb-4">
                    {pillar.title}
                  </h3>
                  <p className="font-inter text-xs text-woodify-text/65 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
                
                {/* Micro Action link */}
                <div className="mt-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-inter text-[10px] tracking-wider uppercase font-semibold text-woodify-burgundy">
                    Read standard
                  </span>
                  <span className="text-woodify-burgundy text-xs">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
