import React, { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { trackEvent } from '../../utils/tracking';

export interface LeadInputs {
  name: string;
  mobile: string;
  email: string;
  city: string;
  bhk: string;
  budget: string;
  possession: string;
}

interface LeadFormProps {
  sourcePage: string;
  selectedPackage?: string;
  onSuccess?: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ sourcePage, selectedPackage = '', onSuccess }) => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasStartedForm, setHasStartedForm] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<LeadInputs>({
    defaultValues: {
      city: 'Chennai',
      bhk: selectedPackage ? selectedPackage.split(' ')[0] : '3 BHK',
      budget: '₹10-15 Lakhs',
      possession: 'Immediate'
    }
  });

  // Track Form Start when user first interacts/focuses a field
  const handleFormFocus = () => {
    if (!hasStartedForm) {
      setHasStartedForm(true);
      trackEvent('form_start', {
        source_page: sourcePage,
        package_selected: selectedPackage,
        device_type: getDeviceType()
      });
    }
  };

  const getDeviceType = () => {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  };

  const onSubmit: SubmitHandler<LeadInputs> = async (data) => {
    setIsSubmitting(true);
    
    // Parse UTM Parameters
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source') || 'organic';
    const utmCampaign = urlParams.get('utm_campaign') || 'direct';

    const newLead = {
      id: 'L-' + Math.random().toString(36).substring(2, 9).toUpperCase(),
      name: data.name,
      mobile: data.mobile,
      email: data.email,
      city: data.city,
      bhk: data.bhk,
      budget: data.budget,
      possession: data.possession,
      packageSelected: selectedPackage || 'Custom Design Scope',
      sourcePage: sourcePage,
      utmSource: utmSource,
      utmCampaign: utmCampaign,
      deviceType: getDeviceType(),
      timestamp: new Date().toISOString(),
      status: 'Website Lead', // Initial assignment status
      notes: `Lead generated from ${sourcePage}`
    };

    // Save lead locally to simulate CRM Connection
    try {
      const existingLeadsJson = localStorage.getItem('woodify_crm_leads');
      const existingLeads = existingLeadsJson ? JSON.parse(existingLeadsJson) : [];
      existingLeads.unshift(newLead);
      localStorage.setItem('woodify_crm_leads', JSON.stringify(existingLeads));
    } catch (e) {
      console.error('Error saving lead to local database:', e);
    }

    // Track Form Submit
    trackEvent('form_submit', {
      lead_id: newLead.id,
      source_page: sourcePage,
      package_selected: selectedPackage || 'None',
      bhk: data.bhk,
      budget: data.budget,
      utm_source: utmSource,
      utm_campaign: utmCampaign,
      device_type: newLead.deviceType
    });

    // Simulate Server delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitSuccessful(true);
    reset();

    if (onSuccess) {
      setTimeout(() => {
        onSuccess();
      }, 2000);
    }
  };

  return (
    <div className="w-full relative">
      {isSubmitSuccessful ? (
        <div className="text-center py-12 px-6 bg-white/70 backdrop-blur-md rounded-2xl border border-woodify-burgundy/15 flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-woodify-burgundy/10 flex items-center justify-center mb-6">
            <span className="text-3xl text-woodify-burgundy">✓</span>
          </div>
          <h3 className="font-playfair text-2xl font-bold text-woodify-text mb-3">
            Consultation Booked!
          </h3>
          <p className="font-inter text-xs text-woodify-text/70 leading-relaxed max-w-sm">
            Thank you, {sourcePage.includes('Hero') ? 'valued guest' : 'interior enthusiast'}. Your design profile is registered in our CRM pipeline. A design partner will reach out within 24 hours to coordinate site dimensions and measurements.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} onFocus={handleFormFocus} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label htmlFor="lead-name" className="font-inter text-[10px] tracking-widest uppercase font-semibold text-woodify-text/60 mb-1.5 block">
                Full Name *
              </label>
              <input
                id="lead-name"
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Vikram Sen"
                className={`w-full bg-white font-inter text-xs rounded-xl px-4 py-3 border focus:outline-none transition-all ${
                  errors.name ? 'border-red-500' : 'border-woodify-text/10 focus:border-woodify-burgundy'
                }`}
              />
              {errors.name && <span className="text-[9px] text-red-500 mt-1 block">{errors.name.message}</span>}
            </div>

            {/* Mobile */}
            <div>
              <label htmlFor="lead-mobile" className="font-inter text-[10px] tracking-widest uppercase font-semibold text-woodify-text/60 mb-1.5 block">
                Mobile Number *
              </label>
              <input
                id="lead-mobile"
                type="tel"
                {...register("mobile", { 
                  required: "Mobile is required",
                  pattern: { value: /^[0-9+() -]{10,15}$/, message: "Valid mobile number required" } 
                })}
                placeholder="+91 98765 43210"
                className={`w-full bg-white font-inter text-xs rounded-xl px-4 py-3 border focus:outline-none transition-all ${
                  errors.mobile ? 'border-red-500' : 'border-woodify-text/10 focus:border-woodify-burgundy'
                }`}
              />
              {errors.mobile && <span className="text-[9px] text-red-500 mt-1 block">{errors.mobile.message}</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label htmlFor="lead-email" className="font-inter text-[10px] tracking-widest uppercase font-semibold text-woodify-text/60 mb-1.5 block">
                Email Address *
              </label>
              <input
                id="lead-email"
                type="email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } 
                })}
                placeholder="vikram@outlook.com"
                className={`w-full bg-white font-inter text-xs rounded-xl px-4 py-3 border focus:outline-none transition-all ${
                  errors.email ? 'border-red-500' : 'border-woodify-text/10 focus:border-woodify-burgundy'
                }`}
              />
              {errors.email && <span className="text-[9px] text-red-500 mt-1 block">{errors.email.message}</span>}
            </div>

            {/* City */}
            <div>
              <label htmlFor="lead-city" className="font-inter text-[10px] tracking-widest uppercase font-semibold text-woodify-text/60 mb-1.5 block">
                City *
              </label>
              <input
                id="lead-city"
                type="text"
                {...register("city", { required: "City is required" })}
                placeholder="Chennai"
                className={`w-full bg-white font-inter text-xs rounded-xl px-4 py-3 border focus:outline-none transition-all ${
                  errors.city ? 'border-red-500' : 'border-woodify-text/10 focus:border-woodify-burgundy'
                }`}
              />
              {errors.city && <span className="text-[9px] text-red-500 mt-1 block">{errors.city.message}</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* BHK Type */}
            <div>
              <label htmlFor="lead-bhk" className="font-inter text-[10px] tracking-widest uppercase font-semibold text-woodify-text/60 mb-1.5 block">
                BHK Type
              </label>
              <select
                id="lead-bhk"
                {...register("bhk")}
                className="w-full bg-white font-inter text-xs rounded-xl px-3 py-3 border border-woodify-text/10 focus:outline-none focus:border-woodify-burgundy appearance-none"
              >
                <option value="2 BHK">2 BHK</option>
                <option value="3 BHK">3 BHK</option>
                <option value="4 BHK">4 BHK</option>
                <option value="Villa">Villa Interiors</option>
              </select>
            </div>

            {/* Budget Range */}
            <div>
              <label htmlFor="lead-budget" className="font-inter text-[10px] tracking-widest uppercase font-semibold text-woodify-text/60 mb-1.5 block">
                Budget Range
              </label>
              <select
                id="lead-budget"
                {...register("budget")}
                className="w-full bg-white font-inter text-xs rounded-xl px-3 py-3 border border-woodify-text/10 focus:outline-none focus:border-woodify-burgundy appearance-none"
              >
                <option value="₹5-10 Lakhs">₹5-10 Lakhs</option>
                <option value="₹10-15 Lakhs">₹10-15 Lakhs</option>
                <option value="₹15-20 Lakhs">₹15-20 Lakhs</option>
                <option value="₹20-30 Lakhs">₹20-30 Lakhs</option>
                <option value="₹30+ Lakhs">₹30+ Lakhs</option>
              </select>
            </div>

            {/* Possession Status */}
            <div>
              <label htmlFor="lead-possession" className="font-inter text-[10px] tracking-widest uppercase font-semibold text-woodify-text/60 mb-1.5 block">
                Possession Status
              </label>
              <select
                id="lead-possession"
                {...register("possession")}
                className="w-full bg-white font-inter text-xs rounded-xl px-3 py-3 border border-woodify-text/10 focus:outline-none focus:border-woodify-burgundy appearance-none"
              >
                <option value="Immediate">Immediate</option>
                <option value="1-3 Months">1-3 Months</option>
                <option value="3-6 Months">3-6 Months</option>
                <option value="6+ Months">6+ Months</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-woodify-text hover:bg-luxury-gradient text-white font-inter text-xs tracking-widest uppercase font-semibold py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {isSubmitting ? 'Securing Spot...' : 'Book My Consultation'}
          </button>
        </form>
      )}
    </div>
  );
};
