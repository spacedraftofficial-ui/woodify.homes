import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheck, HiOutlineInformationCircle } from 'react-icons/hi';
import { packagesData } from '../../data/packages';
import { openLeadModal } from '../ui/LeadModal';
import { trackEvent } from '../../utils/tracking';

type TabType = "2 BHK" | "3 BHK" | "4 BHK";

const materialLevels: Record<string, string> = {
  "Classic Design": "Premium Laminate Finish",
  "Elite Curation": "High-Gloss Acrylic Finish",
  "Premium Luxury": "Hand-Polished PU / Veneer Finish"
};

const warranties: Record<string, string> = {
  "Classic Design": "3-Year Structure & Hinge Warranty",
  "Elite Curation": "5-Year Complete Home Warranty",
  "Premium Luxury": "10-Year Bespoke Turnkey Warranty"
};

export const InteriorPackages: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("3 BHK");

  const handleSelectPackage = (packageName: string) => {
    trackEvent('cta_click', {
      placement: 'homepage_packages_card',
      package_tier: packageName,
      configuration: activeTab
    });
    openLeadModal(`Homepage - ${activeTab}`, `${activeTab} - ${packageName}`);
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    trackEvent('package_view', {
      configuration: tab,
      source: 'homepage_packages'
    });
  };

  return (
    <section id="packages" className="py-14 md:py-24 bg-white overflow-hidden border-b border-woodify-text/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
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
            Interior Packages Designed Around the Way You Live
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

        {/* BHK Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap border-b border-woodify-text/5 pb-6">
          {(["2 BHK", "3 BHK", "4 BHK"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`font-inter text-[11px] tracking-widest uppercase px-6 py-3.5 rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-woodify-burgundy text-white shadow-md font-bold'
                  : 'bg-woodify-bg text-woodify-text/75 hover:bg-woodify-text/5 hover:text-woodify-text border border-woodify-text/5'
              }`}
            >
              {tab} Packages
            </button>
          ))}
        </div>

        {/* Dynamic Cards Grid */}
        <div className="min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
            >
              {(packagesData[activeTab] || []).map((pkg) => (
                <div
                  key={pkg.id}
                  className={`rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 relative border ${
                    pkg.isFeatured
                      ? 'bg-woodify-burgundy text-white shadow-2xl scale-102 lg:scale-105 z-10 border-transparent'
                      : 'bg-woodify-bg text-woodify-text hover:bg-white hover:shadow-xl border-woodify-text/5'
                  }`}
                >
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
                      {activeTab} Configuration
                    </span>
                    
                    <h3 className="font-playfair text-2xl font-bold mb-4">
                      {pkg.name}
                    </h3>

                    {/* Starting Price */}
                    <div className="my-5 py-3 border-y border-current/10">
                      <span className="font-inter text-[9px] tracking-widest uppercase block mb-0.5 opacity-70">
                        Starting Price
                      </span>
                      <span className="font-playfair text-2xl sm:text-3xl font-extrabold leading-none">
                        {pkg.price}
                      </span>
                    </div>

                    {/* Material & Warranty */}
                    <div className="space-y-2 mb-6">
                      <div>
                        <span className="font-inter text-[9px] tracking-wider uppercase font-semibold block opacity-50">Material Level:</span>
                        <p className="font-inter text-xs font-semibold mt-0.5">{materialLevels[pkg.name] || "Standard Materials"}</p>
                      </div>
                      <div>
                        <span className="font-inter text-[9px] tracking-wider uppercase font-semibold block opacity-50">Warranty:</span>
                        <p className="font-inter text-xs font-semibold mt-0.5">{warranties[pkg.name] || "Standard Warranty"}</p>
                      </div>
                    </div>
                    
                    <p className={`font-inter text-xs font-light leading-relaxed mb-8 ${
                      pkg.isFeatured ? 'text-white/75' : 'text-woodify-text/70'
                    }`}>
                      {pkg.description}
                    </p>

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
                    Get Package Estimate
                  </button>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pricing Disclaimer */}
        <div className="mt-12 bg-white/50 backdrop-blur-md p-6 rounded-2xl border border-woodify-text/5 flex items-start gap-4 max-w-4xl mx-auto">
          <HiOutlineInformationCircle className="text-2xl text-woodify-burgundy flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-inter text-[10px] tracking-widest uppercase font-semibold text-woodify-text/50 block mb-1">
              Important Pricing Disclaimer
            </span>
            <p className="font-inter text-[11px] text-woodify-text/65 leading-relaxed font-light">
              Package prices are indicative starting prices. Final pricing will vary based on actual site dimensions, selected designs, materials, finishes, scope of work, location, site conditions and customization requirements. Complete quotes are finalized after design freeze.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InteriorPackages;

