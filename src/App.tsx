import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/Services';
import SpacesWeTransform from './components/Services/Spaces';
import DesignPhilosophy from './components/Philosophy';
import InteriorPackages from './components/Packages';
import OurProcess from './components/Process';
import Materials from './components/Materials';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Main Landing Page Layout
const LandingPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <SpacesWeTransform />
      <DesignPhilosophy />
      <InteriorPackages />
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
      </Routes>
    </Router>
  );
};

export default App;
