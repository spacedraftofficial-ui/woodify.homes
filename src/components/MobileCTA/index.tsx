import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { openLeadModal } from '../ui/LeadModal';
import { trackEvent } from '../../utils/tracking';
import { HiPhone, HiOutlineCalculator } from 'react-icons/hi';

export const MobileCTA: React.FC = () => {
  const handleCall = () => {
    trackEvent('call_click', { placement: 'mobile_sticky_bar' });
    window.location.href = 'tel:+918925893357';
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Woodify Team, I am interested in discussing my home interiors. I visited the Woodify Homes website.");
    trackEvent('whatsapp_click', { placement: 'mobile_sticky_bar' });
    window.open(`https://wa.me/917305778404?text=${text}`, '_blank');
  };

  const handleGetEstimate = () => {
    trackEvent('cta_click', { placement: 'mobile_sticky_bar', label: 'Get Estimate' });
    openLeadModal('Mobile Sticky Bar');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/80 backdrop-blur-md border-t border-woodify-text/10 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-4 py-3 pb-safe">
      <div className="grid grid-cols-3 gap-2.5 max-w-md mx-auto">
        {/* Call */}
        <button
          onClick={handleCall}
          className="flex flex-col items-center justify-center gap-1 py-2 bg-woodify-bg hover:bg-woodify-text/5 text-woodify-text rounded-xl border border-woodify-text/5 transition-all"
        >
          <HiPhone className="text-lg text-woodify-burgundy" />
          <span className="font-inter text-[10px] tracking-wider uppercase font-bold">Call</span>
        </button>

        {/* WhatsApp */}
        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center gap-1 py-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] rounded-xl border border-[#25D366]/10 transition-all"
        >
          <FaWhatsapp className="text-lg text-[#25D366]" />
          <span className="font-inter text-[10px] tracking-wider uppercase font-bold">WhatsApp</span>
        </button>

        {/* Get Estimate */}
        <button
          onClick={handleGetEstimate}
          className="flex flex-col items-center justify-center gap-1 py-2 bg-woodify-text hover:bg-woodify-burgundy text-white rounded-xl shadow-sm transition-all"
        >
          <HiOutlineCalculator className="text-lg text-white/90" />
          <span className="font-inter text-[10px] tracking-wider uppercase font-bold">Estimate</span>
        </button>
      </div>
    </div>
  );
};

export default MobileCTA;
