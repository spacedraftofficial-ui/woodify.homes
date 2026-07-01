import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter: React.FC<{ value: number; suffix?: string; duration?: number }> = ({ value, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalSteps = 50;
      const stepTime = (duration * 1000) / totalSteps;
      const increment = Math.ceil(end / totalSteps);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-playfair text-4xl sm:text-5xl font-bold text-woodify-burgundy">
      {count}{suffix}
    </span>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-woodify-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Sub-header Editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Mission, Vision, and Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-inter text-xs tracking-widest uppercase font-semibold text-woodify-burgundy mb-3">
                A Legacy of Craft
              </p>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-woodify-text leading-tight mb-8">
                Refining the Concept of Luxury Living
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-inter text-sm sm:text-base text-woodify-text/75 leading-relaxed font-light space-y-6"
            >
              <p>
                At Woodify Homes, we believe that an interior is not just a combination of walls and furniture; it is the silent theater of your life. Inspired by the meticulous discipline of Japanese architecture and the warm, comforting elegance of Scandinavian design, we craft environments that elevate the everyday.
              </p>
              <p>
                Our studio was founded on a simple conviction: luxury is not about excess, but the absolute harmony of material, light, and utility. Every joint, every texture, and every shadow is planned with quiet intentionality.
              </p>
            </motion.div>

            {/* Split Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 pt-8 border-t border-woodify-text/10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="font-playfair text-lg font-bold text-woodify-text mb-2">Our Mission</h4>
                <p className="font-inter text-xs text-woodify-text/65 leading-relaxed font-light">
                  To eliminate the stress of residential fabrication by providing completely transparent pricing, modular precision, and customized high-end craftsmanship.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="font-playfair text-lg font-bold text-woodify-text mb-2">Our Vision</h4>
                <p className="font-inter text-xs text-woodify-text/65 leading-relaxed font-light">
                  To set the standard for premium, low-emission residential spaces in India, demonstrating that sustainable materials can achieve unparalleled luxury.
                </p>
              </motion.div>
            </div>

            {/* Micro counters in narrative */}
            <div className="flex gap-12 mt-12">
              <div className="flex flex-col">
                <Counter value={98} suffix="%" />
                <span className="font-inter text-[10px] tracking-widest uppercase text-woodify-text/50 mt-2 font-medium">
                  Client Retention
                </span>
              </div>
              <div className="flex flex-col">
                <Counter value={140} suffix="+" />
                <span className="font-inter text-[10px] tracking-widest uppercase text-woodify-text/50 mt-2 font-medium">
                  Inspection Points
                </span>
              </div>
              <div className="flex flex-col">
                <Counter value={12} suffix="k" />
                <span className="font-inter text-[10px] tracking-widest uppercase text-woodify-text/50 mt-2 font-medium">
                  Wood Samples
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography Collage */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
                alt="Minimal luxury living room"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-woodify-text/25 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating Editorial Quote Frame */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: -30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-8 -left-6 sm:-left-12 bg-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-[280px] sm:max-w-xs border border-woodify-text/5"
            >
              <span className="font-playfair text-5xl text-woodify-burgundy/20 block leading-none h-4">“</span>
              <p className="font-playfair text-sm italic text-woodify-text/80 leading-relaxed mb-4">
                Simplicity is the ultimate sophistication. When a home matches your pattern of life, it becomes an instrument of peace.
              </p>
              <p className="font-inter text-[10px] tracking-wider uppercase font-semibold text-woodify-text">
                — Studio McGee Inspired
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
