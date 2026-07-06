import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheck, HiOutlineInformationCircle } from 'react-icons/hi';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { packagesData } from '../../data/packages';
import { openLeadModal } from '../../components/ui/LeadModal';
import { trackEvent } from '../../utils/tracking';

type TabType = "2 BHK" | "3 BHK" | "4 BHK" | "Villa Interiors";

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

export const PackagesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = (searchParams.get('tab') === 'villa' ? 'Villa Interiors' : '3 BHK') as TabType;
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);

  // Synchronize tab selection with URL search parameters
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'villa') {
      setActiveTab('Villa Interiors');
    } else if (tabParam === '2bhk') {
      setActiveTab('2 BHK');
    } else if (tabParam === '3bhk') {
      setActiveTab('3 BHK');
    } else if (tabParam === '4bhk') {
      setActiveTab('4 BHK');
    }
  }, [searchParams]);

  // Update page title and track event for SEO & Analytics
  useEffect(() => {
    if (activeTab === 'Villa Interiors') {
      document.title = "Luxury Villa Interior Design & Turnkey Solutions | Woodify Homes";
    } else {
      document.title = `Home Interior Packages for 2 BHK, 3 BHK & 4 BHK | Woodify Homes`;
    }

    trackEvent('package_view', {
      configuration: activeTab,
      source: 'packages_page'
    });
  }, [activeTab]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    let tabQuery = '3bhk';
    if (tab === '2 BHK') tabQuery = '2bhk';
    if (tab === '4 BHK') tabQuery = '4bhk';
    if (tab === 'Villa Interiors') tabQuery = 'villa';
    setSearchParams({ tab: tabQuery });
  };

  const handleGetEstimate = (packageName: string) => {
    trackEvent('cta_click', {
      placement: 'packages_page_card',
      package_tier: packageName,
      configuration: activeTab
    });
    openLeadModal(`Packages Page - ${activeTab}`, `${activeTab} - ${packageName}`);
  };

  const handleSpeakToDesignTeam = () => {
    trackEvent('cta_click', {
      placement: 'packages_page_villa',
      package_tier: 'Bespoke Complete Villa Scope',
      configuration: 'Villa Interiors'
    });
    openLeadModal('Packages Page - Villa', 'Bespoke Complete Villa Scope');
  };

  return (
    <div className="min-h-screen bg-woodify-bg pt-28 pb-12 flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 w-full py-8">
        {/* Editorial Headers */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-inter text-xs tracking-widest uppercase font-semibold text-woodify-burgundy mb-3"
          >
            Transparent Pricing Structure
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl font-bold tracking-tight text-woodify-text mb-6"
          >
            Interior Packages Designed Around the Way You Live
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-inter text-sm text-woodify-text/65 leading-relaxed font-light"
          >
            Explore our curated residential configuration budgets. Select a design tier that fits your family's space requirements, or speak with our architects for a fully custom design program.
          </motion.p>
        </div>

        {/* Dynamic Navigation Tabs */}
        <div className="flex justify-center gap-3 mb-16 flex-wrap border-b border-woodify-text/5 pb-6">
          {(["2 BHK", "3 BHK", "4 BHK", "Villa Interiors"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`font-inter text-xs tracking-widest uppercase px-6 py-3.5 rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-woodify-burgundy text-white shadow-lg font-bold'
                  : 'bg-white text-woodify-text/75 hover:bg-woodify-text/5 hover:text-woodify-text border border-woodify-text/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="min-h-[450px]">
          <AnimatePresence mode="wait">
            {activeTab !== "Villa Interiors" ? (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-12"
              >
                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                  {(packagesData[activeTab] || []).map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 relative border ${
                        pkg.isFeatured
                          ? 'bg-woodify-burgundy text-white shadow-2xl scale-102 lg:scale-105 z-10 border-transparent'
                          : 'bg-white text-woodify-text hover:shadow-xl border-woodify-text/5'
                      }`}
                    >
                      {pkg.isFeatured && (
                        <span className="absolute top-0 right-8 transform -translate-y-1/2 bg-woodify-coral text-white font-inter text-[9px] tracking-widest uppercase font-bold px-4 py-1.5 rounded-full shadow-md">
                          Most Preferred Configuration
                        </span>
                      )}

                      {/* Package Contents */}
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <span className={`font-inter text-[9px] tracking-widest uppercase font-semibold ${
                              pkg.isFeatured ? 'text-white/80' : 'text-woodify-burgundy'
                            } block mb-1`}>
                              {activeTab} Configuration
                            </span>
                            <h3 className="font-playfair text-2xl font-bold">
                              {pkg.name}
                            </h3>
                          </div>
                        </div>

                        {/* Starting Price */}
                        <div className="my-6 py-4 border-y border-current/10">
                          <span className="font-inter text-[10px] tracking-widest uppercase block mb-1 opacity-70">
                            Starting Price
                          </span>
                          <span className="font-playfair text-3xl sm:text-4xl font-extrabold leading-none">
                            {pkg.price}
                          </span>
                          <span className="font-inter text-[9px] block mt-1.5 opacity-50">
                            Standard inclusion estimates (inclusive of tax)
                          </span>
                        </div>

                        {/* Material level & Warranty Info */}
                        <div className="space-y-3 mb-6">
                          <div>
                            <span className="font-inter text-[9px] tracking-wider uppercase font-semibold block opacity-60">Material Level:</span>
                            <p className="font-inter text-xs font-medium mt-0.5">{materialLevels[pkg.name] || "Standard Materials"}</p>
                          </div>
                          <div>
                            <span className="font-inter text-[9px] tracking-wider uppercase font-semibold block opacity-60">Warranty:</span>
                            <p className="font-inter text-xs font-medium mt-0.5">{warranties[pkg.name] || "Standard Warranty"}</p>
                          </div>
                        </div>

                        <p className={`font-inter text-xs font-light leading-relaxed mb-8 ${
                          pkg.isFeatured ? 'text-white/80' : 'text-woodify-text/70'
                        }`}>
                          {pkg.description}
                        </p>

                        {/* Key Inclusions */}
                        <div className="border-t border-current/10 pt-6 mb-10">
                          <span className="font-inter text-[10px] tracking-widest uppercase font-semibold block mb-4">
                            Key Inclusions
                          </span>
                          <ul className="space-y-3.5">
                            {pkg.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-3">
                                <div className={`rounded-full p-0.5 flex items-center justify-center text-xs mt-0.5 ${
                                  pkg.isFeatured ? 'bg-white/20 text-white' : 'bg-woodify-burgundy/10 text-woodify-burgundy'
                                }`}>
                                  <HiCheck />
                                </div>
                                <span className="font-inter text-xs leading-normal font-light opacity-90">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA */}
                      <button
                        onClick={() => handleGetEstimate(pkg.name)}
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
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="villa"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl mx-auto text-center py-16 px-8 rounded-3xl bg-white border border-woodify-text/5 shadow-sm"
              >
                <span className="font-inter text-xs tracking-widest uppercase font-semibold text-woodify-burgundy mb-4 block">
                  Bespoke Architectural Scope
                </span>
                
                <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-woodify-text leading-tight mb-6">
                  No Packages. No Templates. <br />
                  <span className="italic font-normal text-woodify-burgundy">Just Your Home.</span>
                </h2>
                
                <p className="font-inter text-sm text-woodify-text/70 leading-relaxed font-light max-w-2xl mx-auto mb-10">
                  Every villa is individually designed around its architecture, surroundings and the people who call it home. We craft contextual woodwork programs that honor structural intent and provide quiet, organic luxury.
                </p>

                <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-6 py-6 px-10 rounded-2xl bg-woodify-bg border border-woodify-text/5 mb-10">
                  <div className="text-center sm:text-left">
                    <span className="font-inter text-[10px] tracking-widest uppercase text-woodify-text/40 block">Pricing Program</span>
                    <span className="font-playfair text-lg font-bold text-woodify-burgundy mt-1 block">Contact Sales for Pricing</span>
                  </div>
                  <div className="w-[1px] h-10 bg-woodify-text/10 hidden sm:block" />
                  <div className="text-center sm:text-left">
                    <span className="font-inter text-[10px] tracking-widest uppercase text-woodify-text/40 block">Warranty Period</span>
                    <span className="font-playfair text-lg font-bold text-woodify-burgundy mt-1 block">10-Year Structural Coverage</span>
                  </div>
                </div>

                <div>
                  <button
                    onClick={handleSpeakToDesignTeam}
                    className="bg-woodify-text hover:bg-luxury-gradient text-white font-inter text-xs tracking-widest uppercase font-semibold px-10 py-4 rounded-full transition-all shadow-md hover:shadow-lg"
                  >
                    Speak to Our Design Team
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pricing Disclaimer */}
        <div className="mt-16 bg-white/50 backdrop-blur-md p-6 rounded-2xl border border-woodify-text/5 flex items-start gap-4 max-w-4xl mx-auto">
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
      </main>

      <Footer />
    </div>
  );
};

export default PackagesPage;
