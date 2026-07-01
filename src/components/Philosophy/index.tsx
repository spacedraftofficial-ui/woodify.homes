import React from 'react';
import { motion } from 'framer-motion';
import sketchImg from '../../assets/architectural_sketch.png';

interface PhilosophyPillar {
  number: string;
  title: string;
  description: string;
}

const pillars: PhilosophyPillar[] = [
  {
    number: "01",
    title: "Structural Honesty",
    description: "We believe a joint should tell the story of its support. We display raw wood grains, structural pillars, and natural stone profiles instead of maskings, honoring the authentic weight of materials."
  },
  {
    number: "02",
    title: "Sensory Warmth",
    description: "Design is tactile. We focus on how wood fibers feel beneath your fingers, how a metal pull responds to touch, and how warm light refracts on textured plaster at dusk to soothe the nervous system."
  },
  {
    number: "03",
    title: "Temporal Grace",
    description: "True luxury improves with age. We build with solid timbers and raw stones that develop a rich, personal patina over years of contact, transforming your spaces into living diaries of your life."
  }
];

export const DesignPhilosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-14 md:py-24 bg-woodify-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Premium Editorial Typography & Details */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-inter text-xs tracking-widest uppercase font-semibold text-woodify-burgundy mb-3"
            >
              The Woodify Code
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-woodify-text leading-tight mb-8"
            >
              Simplicity is the Quiet <br />
              Expression of Complexity
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-inter text-sm md:text-base text-woodify-text/70 leading-relaxed font-light mb-16 max-w-xl"
            >
              Our design language is rooted in Japandi (Scandinavian warmth mixed with Japanese Zen). It is a dialogue between light, material, and emptiness, creating breathing space within the layout.
            </motion.p>

            {/* Philosophy Pillars List */}
            <div className="space-y-12">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  className="flex gap-6 sm:gap-8 border-b border-woodify-text/10 pb-8 last:border-0"
                >
                  <span className="font-playfair text-2xl font-normal text-woodify-burgundy/40 italic">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-woodify-text mb-3">
                      {pillar.title}
                    </h3>
                    <p className="font-inter text-xs text-woodify-text/65 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Drawing Illustration */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Soft backdrop circle for editorial emphasis */}
            <div className="absolute inset-0 bg-[#EFECE6] rounded-full filter blur-2xl opacity-60 scale-75 -z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="w-full max-w-sm aspect-square bg-white p-8 rounded-2xl shadow-xl border border-woodify-text/5 overflow-hidden flex items-center justify-center"
            >
              <img
                src={sketchImg}
                alt="Woodify architectural joinery sketch"
                className="w-full h-full object-contain filter grayscale transition-all duration-700 hover:grayscale-0"
                loading="lazy"
              />
            </motion.div>

            {/* Tiny aesthetic tag */}
            <div className="absolute -bottom-4 right-8 bg-woodify-text text-white font-inter text-[9px] tracking-widest uppercase font-semibold px-4 py-2 rounded-full shadow-md">
              PLATE 04 / JOINERY
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;
