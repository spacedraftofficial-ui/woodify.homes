import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { LeadForm } from '../LeadForm';

export const LeadModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [packageName, setPackageName] = useState('');
  const [source, setSource] = useState('');

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ packageName?: string; sourcePage: string }>;
      if (customEvent.detail) {
        setPackageName(customEvent.detail.packageName || '');
        setSource(customEvent.detail.sourcePage || 'Global Modal Trigger');
      }
      setIsOpen(true);
    };

    window.addEventListener('woodify_open_lead_modal', handleOpen);
    return () => window.removeEventListener('woodify_open_lead_modal', handleOpen);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black z-[300] backdrop-blur-xs cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-lg mx-auto bg-woodify-bg rounded-2xl z-[300] shadow-2xl overflow-hidden border border-woodify-text/5 flex flex-col p-6 sm:p-8"
            style={{ transformOrigin: 'center center' }}
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="font-inter text-[9px] tracking-widest uppercase font-semibold text-woodify-burgundy block mb-1">
                  Woodify Curation Studio
                </span>
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-woodify-text">
                  {packageName ? `Estimate for ${packageName}` : 'Book Design Consultation'}
                </h3>
              </div>
              <button
                onClick={handleClose}
                className="text-woodify-text hover:text-woodify-burgundy p-2 text-xl focus:outline-none"
                aria-label="Close form modal"
              >
                <HiX />
              </button>
            </div>

            <LeadForm 
              sourcePage={source} 
              selectedPackage={packageName} 
              onSuccess={handleClose} 
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Global helper to open Lead Modal
export const openLeadModal = (sourcePage: string, packageName?: string) => {
  if (typeof window !== 'undefined') {
    const event = new CustomEvent('woodify_open_lead_modal', {
      detail: { packageName, sourcePage }
    });
    window.dispatchEvent(event);
  }
};
