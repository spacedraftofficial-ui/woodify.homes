import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import logoLight from '../../assets/logo_light.png';

export const Footer: React.FC = () => {
  const [emailSubscribed, setEmailSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailSubscribed(true);
    setTimeout(() => setEmailSubscribed(false), 5000);
  };

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-woodify-text text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Double-Decker Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-6">
            <img
              src={logoLight}
              alt="Woodify Homes Logo"
              className="h-10 w-auto object-contain animate-fade-in"
            />
            <p className="font-inter text-xs text-white/60 leading-relaxed font-light max-w-sm">
              An award-winning architecture and residential interior design studio crafting custom Scandinavian-Japanese (Japandi) spaces that embody structural honesty, sensory warmth, and temporal grace.
            </p>
            {/* Socials */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://facebook.com/woodifyhomes"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-woodify-coral flex items-center justify-center text-xs transition-colors"
                aria-label="Facebook Link"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com/woodifyhomes"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-woodify-coral flex items-center justify-center text-xs transition-colors"
                aria-label="Instagram Link"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/company/woodifyhomes"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-woodify-coral flex items-center justify-center text-xs transition-colors"
                aria-label="LinkedIn Link"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://pinterest.com/woodifyhomes"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-woodify-coral flex items-center justify-center text-xs transition-colors"
                aria-label="Pinterest Link"
              >
                <FaPinterestP />
              </a>
            </div>
          </div>

          {/* Column 2: Studio Navigation Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-playfair text-sm font-bold tracking-wider uppercase text-white/90">
              The Studio
            </h4>
            <ul className="space-y-3 font-inter text-xs text-white/55 font-light">
              <li>
                <a
                  href="#about"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('#about'); }}
                  className="hover:text-woodify-coral transition-colors"
                >
                  About Story
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('#why-choose-us'); }}
                  className="hover:text-woodify-coral transition-colors"
                >
                  Why Woodify
                </a>
              </li>
              <li>
                <a
                  href="#philosophy"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('#philosophy'); }}
                  className="hover:text-woodify-coral transition-colors"
                >
                  Philosophy
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('#process'); }}
                  className="hover:text-woodify-coral transition-colors"
                >
                  Design Process
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('#faq'); }}
                  className="hover:text-woodify-coral transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Design Offerings */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-playfair text-sm font-bold tracking-wider uppercase text-white/90">
              Transformations
            </h4>
            <ul className="space-y-3 font-inter text-xs text-white/55 font-light">
              <li>
                <a
                  href="#spaces"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('#spaces'); }}
                  className="hover:text-woodify-coral transition-colors"
                >
                  Living Rooms
                </a>
              </li>
              <li>
                <a
                  href="#spaces"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('#spaces'); }}
                  className="hover:text-woodify-coral transition-colors"
                >
                  Master Bedrooms
                </a>
              </li>
              <li>
                <a
                  href="#spaces"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('#spaces'); }}
                  className="hover:text-woodify-coral transition-colors"
                >
                  Modular Kitchens
                </a>
              </li>
              <li>
                <a
                  href="#spaces"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('#spaces'); }}
                  className="hover:text-woodify-coral transition-colors"
                >
                  Travertine Closets
                </a>
              </li>
              <li>
                <a
                  href="#spaces"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('#spaces'); }}
                  className="hover:text-woodify-coral transition-colors"
                >
                  Luxury Villas
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-playfair text-sm font-bold tracking-wider uppercase text-white/90">
              Studio Newsletter
            </h4>
            <p className="font-inter text-xs text-white/50 leading-relaxed font-light">
              Subscribe to receive curated editorial design pieces, updates on active case studies, and insights into luxury timber fabrication.
            </p>

            {emailSubscribed ? (
              <p className="font-playfair text-xs italic text-woodify-coral transition-all">
                ✓ Thank you. You are added to our editorial ledger.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-xs focus:outline-none focus:border-woodify-coral transition-colors text-white"
                  aria-label="Newsletter email address input"
                />
                <button
                  type="submit"
                  className="bg-white hover:bg-woodify-coral text-woodify-text hover:text-white font-inter text-[10px] tracking-widest uppercase font-semibold px-6 py-3 rounded-xl transition-all"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer Sub-Copyright Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12">
          <p className="font-inter text-[10px] text-white/40 font-light tracking-wider uppercase">
            © {new Date().getFullYear()} Woodify Homes. All rights reserved.
          </p>
          <div className="flex gap-6 font-inter text-[10px] text-white/40 font-light tracking-wider uppercase">
            <a href="#about" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#about" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
