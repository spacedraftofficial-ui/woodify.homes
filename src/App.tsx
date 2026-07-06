import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/Services';

import DesignPhilosophy from './components/Philosophy';
import InteriorPackages from './components/Packages';
import OurProcess from './components/Process';
import Materials from './components/Materials';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import new subpages and components
import PackagesPage from './pages/PackagesPage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectCaseStudy from './pages/ProjectCaseStudy';
import CRMDashboard from './pages/CRMDashboard';
import { LeadModal } from './components/ui/LeadModal';
import MobileCTA from './components/MobileCTA';
import VillaInterior from './components/VillaInterior';

// Main Landing Page Layout
const LandingPage: React.FC = () => {
  React.useEffect(() => {
    document.title = "Woodify Homes | Premium Residential Interiors & Turnkey Home Design";
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      
      <DesignPhilosophy />
      <InteriorPackages />
      <VillaInterior />
      <OurProcess />
      <Materials />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/projects" element={<PortfolioPage />} />
        <Route path="/projects/:id" element={<ProjectCaseStudy />} />
        <Route path="/crm" element={<CRMDashboard />} />
      </Routes>
      <LeadModal />
      <MobileCTA />
    </Router>
  );
};

export default App;
