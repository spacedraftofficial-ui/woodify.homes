import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logoDark from '../../assets/logo_dark.png';
import logoLight from '../../assets/logo_light.png';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Spaces', href: '#spaces' },
  { label: 'Packages', href: '#packages' },
  { label: 'Process', href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-4 shadow-sm'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
          >
            <img
              src={isScrolled ? logoDark : logoLight}
              alt="Woodify Homes Logo"
              className="h-10 w-auto object-contain transition-all duration-300"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`font-inter text-xs tracking-widest uppercase font-semibold transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:transition-all after:duration-300 hover:after:w-full ${
                      isScrolled
                        ? 'text-woodify-text/80 hover:text-woodify-burgundy after:bg-woodify-burgundy'
                        : 'text-white/85 hover:text-white after:bg-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className={`font-inter text-xs tracking-widest uppercase font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg ${
                isScrolled
                  ? 'bg-woodify-text text-white hover:bg-woodify-burgundy'
                  : 'bg-white text-woodify-text hover:bg-woodify-burgundy hover:text-white'
              }`}
            >
              Book Consult
            </a>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden text-2xl transition-colors focus:outline-none ${
              isScrolled ? 'text-woodify-text hover:text-woodify-burgundy' : 'text-white hover:text-white/80'
            }`}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-woodify-bg z-50 shadow-2xl p-8 flex flex-col justify-between lg:hidden border-l border-woodify-text/5"
            >
              <div>
                <div className="flex justify-between items-center mb-12">
                  <img
                    src={logoDark}
                    alt="Woodify Homes Logo"
                    className="h-10 w-auto object-contain"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl text-woodify-text hover:text-woodify-burgundy focus:outline-none"
                    aria-label="Close menu"
                  >
                    <HiX />
                  </button>
                </div>

                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className="font-inter text-sm tracking-widest uppercase font-semibold text-woodify-text/80 hover:text-woodify-burgundy transition-colors py-2 border-b border-woodify-text/5 block"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#contact');
                  }}
                  className="w-full text-center block bg-woodify-text hover:bg-woodify-burgundy text-white font-inter text-xs tracking-widest uppercase font-bold px-6 py-4 rounded-full transition-all duration-300"
                >
                  Book Consultation
                </a>
                <p className="text-[10px] text-center text-woodify-text/40 mt-6 font-inter tracking-widest uppercase">
                  © {new Date().getFullYear()} Woodify Homes
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
