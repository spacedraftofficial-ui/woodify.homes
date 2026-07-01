import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { materialsData } from '../../data/materials';

export const Materials: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="materials" className="py-14 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-inter text-xs tracking-widest uppercase font-semibold text-woodify-burgundy mb-3"
          >
            Material Integrity
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-woodify-text mb-6"
          >
            Honest, Premium Raw Materials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-inter text-sm text-woodify-text/65 leading-relaxed font-light"
          >
            A space is only as honest as the elements it comprises. We source premium-grade sustainable substrates and hardware engineered to survive generations.
          </motion.p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materialsData.map((material, idx) => {
            const isExpanded = expandedCard === material.id;
            return (
              <motion.div
                key={material.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                layout
                className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-woodify-bg border border-woodify-text/5 group cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-500"
                onClick={() => toggleExpand(material.id)}
              >
                {/* Image Overlay */}
                <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
                  <img
                    src={material.image}
                    alt={material.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-85" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end text-white select-none">
                  <div>
                    <span className="font-inter text-[9px] tracking-widest uppercase text-woodify-coral mb-2 block font-bold">
                      {material.type}
                    </span>
                    <h3 className="font-playfair text-2xl font-bold mb-4">
                      {material.name}
                    </h3>
                  </div>

                  {/* Expanding Details Section */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="font-inter text-xs text-white/80 leading-relaxed font-light mb-6">
                      {material.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="border-t border-white/10 pt-4 mb-2">
                      <h4 className="font-playfair text-xs font-bold text-white mb-2">Specifications:</h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {material.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="font-inter text-[10px] text-white/70 flex items-center gap-2">
                            <span className="w-1 h-1 bg-woodify-coral rounded-full" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Interactive Accordion Action Handle */}
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
                    <span className="font-inter text-[10px] tracking-widest uppercase font-semibold text-white/60">
                      {isExpanded ? 'Show less' : 'Tap to expand'}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm hover:bg-white hover:text-woodify-text transition-colors">
                      {isExpanded ? <HiMinus /> : <HiPlus />}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Materials;
