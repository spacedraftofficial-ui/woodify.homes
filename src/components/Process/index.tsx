import React from 'react';
import { motion } from 'framer-motion';
import { processData } from '../../data/process';

export const OurProcess: React.FC = () => {
  return (
    <section id="process" className="py-14 md:py-24 bg-woodify-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-inter text-xs tracking-widest uppercase font-semibold text-woodify-burgundy mb-3"
          >
            Work Execution Flow
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-woodify-text leading-tight"
          >
            A Seamless Design Roadmap
          </motion.h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Central Vertical Connector Line (Desktop only) */}
          <div className="absolute left-[39px] md:left-1/2 top-4 bottom-4 w-[1px] bg-woodify-text/10 transform -translate-x-1/2 -z-10" />

          {/* Timeline Nodes */}
          <div className="space-y-16 md:space-y-24">
            {processData.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={step.number} 
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } relative`}
                >
                  
                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Central Node Indicator */}
                  <div className="absolute left-[39px] md:left-1/2 top-1 w-8 h-8 rounded-full bg-white border-2 border-woodify-burgundy shadow-md flex items-center justify-center transform -translate-x-1/2 z-20">
                    <span className="font-playfair text-[10px] font-bold text-woodify-burgundy">
                      {step.number}
                    </span>
                  </div>

                  {/* Content Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full md:w-1/2 pl-16 md:pl-0 md:px-16"
                  >
                    <div className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl border border-woodify-text/5 transition-all duration-300 group">
                      <span className="font-inter text-[9px] tracking-widest uppercase font-semibold text-woodify-burgundy/80 block mb-1">
                        {step.subtitle}
                      </span>
                      <h3 className="font-playfair text-xl font-bold text-woodify-text mb-3 group-hover:text-woodify-coral transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="font-inter text-xs text-woodify-text/65 leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurProcess;
