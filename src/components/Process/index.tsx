import React, { useRef, useState, useLayoutEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { processData } from '../../data/process';

export const OurProcess: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstBubbleRef = useRef<HTMLDivElement>(null);
  const lastBubbleRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState<number>(0);

  // Track scroll progress through the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  useLayoutEffect(() => {
    const updateLineHeight = () => {
      if (firstBubbleRef.current && lastBubbleRef.current) {
        const firstRect = firstBubbleRef.current.getBoundingClientRect();
        const lastRect = lastBubbleRef.current.getBoundingClientRect();
        // The distance between the tops of the first and last bubbles
        const height = lastRect.top - firstRect.top;
        setLineHeight(height);
      }
    };

    updateLineHeight();
    
    window.addEventListener('resize', updateLineHeight);
    
    // Backup check after page assets load
    const timer = setTimeout(updateLineHeight, 500);

    return () => {
      window.removeEventListener('resize', updateLineHeight);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="process" className="py-14 md:py-24 bg-woodify-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-16">
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
            Your Journey Home
          </motion.h2>
        </div>

        {/* Timeline Layout */}
        <div ref={containerRef} className="relative">
          {/* Central Vertical Connector Line (Static Gray Background) */}
          <div 
            style={{ 
              height: lineHeight ? `${lineHeight}px` : '85%',
              top: '20px'
            }}
            className="absolute left-[39px] md:left-1/2 w-[3px] bg-woodify-text/10 transform -translate-x-1/2 z-0" 
          />

          {/* Animated Active Connector Line (Grows on Scroll) */}
          <motion.div
            style={{ 
              height: lineHeight ? `${lineHeight}px` : '85%',
              top: '20px',
              scaleY: scrollYProgress, 
              originY: 0, 
              x: "-50%" 
            }}
            className="absolute left-[39px] md:left-1/2 w-[3px] bg-luxury-gradient z-0"
          />

          {/* Timeline Nodes */}
          <div className="space-y-16 md:space-y-24">
            {processData.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const isFirst = idx === 0;
              const isLast = idx === processData.length - 1;
              return (
                <div 
                  key={step.number} 
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } relative`}
                >
                  
                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Central Node Indicator - Animates when it comes into scroll view */}
                  <motion.div 
                    ref={isFirst ? firstBubbleRef : (isLast ? lastBubbleRef : undefined)}
                    initial={{ scale: 0.85, backgroundColor: "#ffffff", borderColor: "rgba(92, 36, 50, 0.3)", x: "-50%" }}
                    whileInView={{ scale: 1, backgroundColor: "#5C2432", borderColor: "#5C2432", x: "-50%" }}
                    viewport={{ once: true, margin: "-120px 0px -120px 0px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute left-[39px] md:left-1/2 top-1 w-8 h-8 rounded-full border-2 shadow-md flex items-center justify-center z-20"
                  >
                    <motion.span 
                      initial={{ color: "#5C2432" }}
                      whileInView={{ color: "#ffffff" }}
                      viewport={{ once: true, margin: "-120px 0px -120px 0px" }}
                      className="font-playfair text-[10px] font-bold"
                    >
                      {step.number}
                    </motion.span>
                  </motion.div>

                  {/* Content Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full md:w-1/2 pl-16 ${
                      isEven ? 'md:pl-0 md:pr-16' : 'md:pl-16 md:pr-0'
                    }`}
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
