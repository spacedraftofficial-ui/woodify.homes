import React, { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

interface FormInputs {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // In a production app, this would POST to an email delivery endpoint
    // Because this is a static build, we show a premium success animation.
    console.log("Contact form submitted data:", data);
    setIsSubmitSuccessful(true);
    reset();
    setTimeout(() => setIsSubmitSuccessful(false), 5000);
  };

  const handleWhatsAppChat = () => {
    const message = encodeURIComponent("Hello Woodify Homes. I would like to book a free consultation for my residence.");
    window.open(`https://wa.me/919042863983?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Title */}
        <div className="max-w-3xl mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-inter text-xs tracking-widest uppercase font-semibold text-woodify-burgundy mb-3"
          >
            Start Your Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-woodify-text leading-tight"
          >
            Collaborate With Our Design Studio
          </motion.h2>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left: Contact Info & Map */}
          <div className="lg:col-span-5 space-y-12">

            {/* Info cards */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-woodify-bg border border-woodify-text/5 flex items-center justify-center text-woodify-burgundy flex-shrink-0">
                  <HiOutlinePhone className="text-lg" />
                </div>
                <div>
                  <h4 className="font-playfair text-sm font-bold text-woodify-text">Phone Enquiry</h4>
                  <p className="font-inter text-xs text-woodify-text/70 mt-1 hover:text-woodify-burgundy transition-colors">
                    <a href="tel:+919042863983">+91 90428 63983</a>
                  </p>
                  <p className="font-inter text-xs text-woodify-text/70">
                    <a href="tel:+918023456789">+91 (80) 2345 6789</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-woodify-bg border border-woodify-text/5 flex items-center justify-center text-woodify-burgundy flex-shrink-0">
                  <HiOutlineMail className="text-lg" />
                </div>
                <div>
                  <h4 className="font-playfair text-sm font-bold text-woodify-text">Studio Email</h4>
                  <p className="font-inter text-xs text-woodify-text/70 mt-1 hover:text-woodify-burgundy transition-colors">
                    <a href="mailto:design@woodifyhomes.com">design@woodifyhomes.com</a>
                  </p>
                  <p className="font-inter text-xs text-woodify-text/70">
                    <a href="mailto:info@woodifyhomes.com">info@woodifyhomes.com</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-woodify-bg border border-woodify-text/5 flex items-center justify-center text-woodify-burgundy flex-shrink-0">
                  <HiOutlineLocationMarker className="text-lg" />
                </div>
                <div>
                  <h4 className="font-playfair text-sm font-bold text-woodify-text">Headquarters</h4>
                  <p className="font-inter text-xs text-woodify-text/70 mt-1 leading-relaxed font-light">
                    82, Richmond Road, Richmond Town, <br />
                    Bangalore, Karnataka, 560025, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-woodify-bg border border-woodify-text/5 flex items-center justify-center text-woodify-burgundy flex-shrink-0">
                  <HiOutlineClock className="text-lg" />
                </div>
                <div>
                  <h4 className="font-playfair text-sm font-bold text-woodify-text">Studio Hours</h4>
                  <p className="font-inter text-xs text-woodify-text/70 mt-1 font-light">
                    Monday – Saturday: 10:00 AM – 7:00 PM <br />
                    Sunday: By appointment only
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct CTA */}
            <div className="p-6 rounded-2xl bg-[#25D366]/5 border border-[#25D366]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-playfair text-base font-bold text-woodify-text flex items-center gap-2">
                  <FaWhatsapp className="text-[#25D366] text-xl" /> Instant Consultation
                </h4>
                <p className="font-inter text-xs text-woodify-text/65 mt-1 font-light">
                  Skip the form and chat directly with a designer.
                </p>
              </div>
              <button
                onClick={handleWhatsAppChat}
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-inter text-[10px] tracking-widest uppercase font-semibold px-5 py-3 rounded-full transition-all shadow-md flex items-center gap-1.5 self-start sm:self-auto"
              >
                Chat on WhatsApp
              </button>
            </div>

            {/* Google Maps embed placeholder */}
            <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-woodify-text/5 shadow-sm">
              <iframe
                title="Woodify Homes Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3887.989714777478!2d77.5992!3d12.9667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzAwLjEiTiA3N8KwMzUnNTcuMSJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                className="w-full h-full border-none filter grayscale opacity-80"
                allowFullScreen={false}
                loading="lazy"
              />
            </div>

          </div>

          {/* Right: Premium Form Container */}
          <div className="lg:col-span-7 bg-woodify-bg p-8 sm:p-12 rounded-3xl border border-woodify-text/5 relative">

            {/* Form submission toast overlay */}
            <AnimatePresence>
              {isSubmitSuccessful && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-woodify-bg/95 rounded-3xl flex flex-col items-center justify-center p-8 text-center z-20"
                >
                  <span className="font-playfair text-6xl text-woodify-burgundy block mb-6">✓</span>
                  <h3 className="font-playfair text-2xl font-bold text-woodify-text mb-3">
                    Consultation Requested
                  </h3>
                  <p className="font-inter text-xs text-woodify-text/75 leading-relaxed font-light max-w-sm">
                    Thank you. Your request details have been registered. A design director will contact you via phone or email within the next 24 business hours to schedule measurements.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="form-name" className="font-inter text-[10px] tracking-widest uppercase font-semibold text-woodify-text/60 mb-2 block">
                    Full Name *
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="E.g., Vikram Sen"
                    className={`w-full bg-white font-inter text-xs rounded-xl px-4 py-3 border focus:outline-none transition-all ${errors.name ? 'border-red-500' : 'border-woodify-text/10 focus:border-woodify-burgundy'
                      }`}
                  />
                  {errors.name && <span className="text-[10px] text-red-500 mt-1 block">{errors.name.message}</span>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="form-email" className="font-inter text-[10px] tracking-widest uppercase font-semibold text-woodify-text/60 mb-2 block">
                    Email Address *
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" }
                    })}
                    placeholder="E.g., vikram@outlook.com"
                    className={`w-full bg-white font-inter text-xs rounded-xl px-4 py-3 border focus:outline-none transition-all ${errors.email ? 'border-red-500' : 'border-woodify-text/10 focus:border-woodify-burgundy'
                      }`}
                  />
                  {errors.email && <span className="text-[10px] text-red-500 mt-1 block">{errors.email.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label htmlFor="form-phone" className="font-inter text-[10px] tracking-widest uppercase font-semibold text-woodify-text/60 mb-2 block">
                    Phone Number *
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: { value: /^[0-9+() -]+$/, message: "Invalid phone number" }
                    })}
                    placeholder="E.g., +91 98765 43210"
                    className={`w-full bg-white font-inter text-xs rounded-xl px-4 py-3 border focus:outline-none transition-all ${errors.phone ? 'border-red-500' : 'border-woodify-text/10 focus:border-woodify-burgundy'
                      }`}
                  />
                  {errors.phone && <span className="text-[10px] text-red-500 mt-1 block">{errors.phone.message}</span>}
                </div>

                {/* Subject Selection */}
                <div>
                  <label htmlFor="form-subject" className="font-inter text-[10px] tracking-widest uppercase font-semibold text-woodify-text/60 mb-2 block">
                    Service / Package interest
                  </label>
                  <select
                    id="form-subject"
                    {...register("subject")}
                    className="w-full bg-white font-inter text-xs rounded-xl px-4 py-3 border border-woodify-text/10 focus:outline-none focus:border-woodify-burgundy appearance-none"
                  >
                    <option value="Elite Curation Package">Elite Curation Package</option>
                    <option value="Premium Luxury Package">Premium Luxury Package</option>
                    <option value="Classic Design Package">Classic Design Package</option>
                    <option value="Custom Modular Kitchen">Custom Modular Kitchen</option>
                    <option value="Bespoke Complete Villa Scope">Bespoke Complete Villa Scope</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="form-message" className="font-inter text-[10px] tracking-widest uppercase font-semibold text-woodify-text/60 mb-2 block">
                  Project Details *
                </label>
                <textarea
                  id="form-message"
                  {...register("message", { required: "Message details are required" })}
                  rows={5}
                  placeholder="Share a brief overview of your home (e.g., BHK size, floorplan layout, possession date, custom carpentry goals)..."
                  className={`w-full bg-white font-inter text-xs rounded-xl px-4 py-3 border focus:outline-none transition-all resize-none ${errors.message ? 'border-red-500' : 'border-woodify-text/10 focus:border-woodify-burgundy'
                    }`}
                />
                {errors.message && <span className="text-[10px] text-red-500 mt-1 block">{errors.message.message}</span>}
              </div>

              {/* CTA Submission Button */}
              <button
                type="submit"
                className="w-full bg-woodify-text hover:bg-luxury-gradient text-white font-inter text-xs tracking-widest uppercase font-semibold py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Send Request Details
              </button>

              <p className="text-[10px] text-center text-woodify-text/40 font-light mt-4 leading-relaxed">
                By submitting this request, you agree to receive follow-up contact details regarding layout estimations.
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
