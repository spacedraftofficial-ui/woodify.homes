import React from 'react';
import { motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi';
import { packagesData } from '../../data/packages';

export const InteriorPackages: React.FC = () => {
  const handleSelectPackage = (packageName: string) => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // pre-fill the message or subject input in the form
      const messageTextarea = document.querySelector('#form-message') as HTMLTextAreaElement;
      if (messageTextarea) {
        messageTextarea.value = `I am interested in learning more about the "${packageName}" package options for my residence.`;
      }
    }
  };

  return (
    <section id="packages" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-inter text-xs tracking-widest uppercase font-semibold text-woodify-burgundy mb-3"
          >
            Pricing & Inclusions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-woodify-text mb-6"
          >
            Curated Interior Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-inter text-sm text-woodify-text/65 leading-relaxed font-light"
          >
            Transparent commercial outlines designed around standard residence scopes. Choose a design tier that fits your family's blueprint.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packagesData.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 relative border ${
                pkg.isFeatured
                  ? 'bg-woodify-burgundy text-white shadow-2xl scale-105 z-10 border-transparent'
                  : 'bg-woodify-bg text-woodify-text hover:bg-white hover:shadow-xl border-woodify-text/5'
              }`}
            >
              {/* Featured Badge */}
              {pkg.isFeatured && (
                <span className="absolute top-0 right-8 transform -translate-y-1/2 bg-woodify-coral text-white font-inter text-[9px] tracking-widest uppercase font-bold px-4 py-1.5 rounded-full shadow-md">
                  Most Preferred
                </span>
              )}

              {/* Package Details */}
              <div>
                <span className={`font-inter text-[10px] tracking-widest uppercase font-semibold ${
                  pkg.isFeatured ? 'text-white/80' : 'text-woodify-burgundy'
                } mb-2 block`}>
                  {pkg.sizeLimit}
                </span>
                
                <h3 className="font-playfair text-2xl font-bold mb-4">
                  {pkg.name}
                </h3>
                
                <p className={`font-inter text-xs font-light leading-relaxed mb-8 ${
                  pkg.isFeatured ? 'text-white/75' : 'text-woodify-text/70'
                }`}>
                  {pkg.description}
                </p>

                <div className="mb-8">
                  <span className="font-playfair text-3xl sm:text-4xl font-bold">
                    {pkg.price}
                  </span>
                  <span className={`font-inter text-[10px] tracking-wider block mt-1 ${
                    pkg.isFeatured ? 'text-white/60' : 'text-woodify-text/40'
                  }`}>
                    Estimated Standard Price (inclusive of tax)
                  </span>
                </div>

                {/* Features List */}
                <div className={`border-t pt-8 mb-10 ${
                  pkg.isFeatured ? 'border-white/10' : 'border-woodify-text/10'
                }`}>
                  <ul className="space-y-4">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div className={`rounded-full p-1 flex items-center justify-center text-xs mt-0.5 ${
                          pkg.isFeatured ? 'bg-white/15 text-white' : 'bg-woodify-burgundy/10 text-woodify-burgundy'
                        }`}>
                          <HiCheck />
                        </div>
                        <span className={`font-inter text-xs leading-relaxed font-light ${
                          pkg.isFeatured ? 'text-white/85' : 'text-woodify-text/75'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Action */}
              <button
                onClick={() => handleSelectPackage(pkg.name)}
                className={`w-full text-center block font-inter text-xs tracking-widest uppercase font-semibold py-4 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 ${
                  pkg.isFeatured
                    ? 'bg-white hover:bg-woodify-coral text-woodify-text hover:text-white shadow-lg'
                    : 'bg-woodify-text hover:bg-luxury-gradient text-white hover:shadow-lg'
                }`}
              >
                Inquire Package
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InteriorPackages;
