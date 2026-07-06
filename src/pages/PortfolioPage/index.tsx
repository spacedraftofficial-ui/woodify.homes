import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../../data/portfolio';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { trackEvent } from '../../utils/tracking';
import { HiArrowRight, HiLocationMarker } from 'react-icons/hi';

export const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const navigate = useNavigate();

  const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Dining", "Wardrobe", "Home Office", "Villa"];

  const filteredProjects = activeCategory === "All"
    ? portfolioData
    : portfolioData.filter(project => project.category === activeCategory);

  useEffect(() => {
    document.title = "Immersive Residential Portfolio | Woodify Homes";
    trackEvent('portfolio_view', { category: activeCategory });
  }, [activeCategory]);

  const handleExploreProject = (id: string) => {
    trackEvent('project_view', { project_id: id });
    navigate(`/projects/${id}`);
  };

  return (
    <div className="min-h-screen bg-woodify-bg pt-28 flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 w-full py-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-inter text-xs tracking-widest uppercase font-semibold text-woodify-burgundy mb-3"
          >
            Design Showcase
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl font-bold tracking-tight text-woodify-text mb-6"
          >
            Immersive Residential Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-inter text-sm text-woodify-text/65 leading-relaxed font-light"
          >
            Scandinavian elegance meets Japanese minimalism. Browse our completed spaces across Chennai's finest neighborhoods and explore detailed client case studies.
          </motion.p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center gap-2.5 max-w-full overflow-x-auto pb-4 scrollbar-none mb-12 border-b border-woodify-text/5 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-inter text-xs tracking-widest uppercase px-5 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-woodify-burgundy text-white shadow-md font-bold'
                  : 'bg-white hover:bg-woodify-text/5 text-woodify-text/75 border border-woodify-text/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const propType = project.propertyType || (project.category === 'Villa' ? 'Luxury Villa' : '3 BHK Apartment');
              const bhk = project.bhk || (project.category === 'Villa' ? 'Villa' : '3 BHK');
              
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-white border border-woodify-text/5 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-end"
                >
                  {/* Image Frame */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  </div>

                  {/* Card Details Overlay */}
                  <div className="relative p-6 sm:p-8 text-white z-10 w-full">
                    <span className="font-inter text-[9px] tracking-widest uppercase text-woodify-coral mb-2 block font-semibold">
                      {project.style}
                    </span>
                    
                    <h3 className="font-playfair text-2xl font-bold mb-2">
                      {project.title}
                    </h3>

                    {/* Metadata strip */}
                    <div className="flex gap-4 font-inter text-[10px] text-white/70 mb-4 font-light">
                      <span className="bg-white/10 px-2 py-0.5 rounded-md">{propType}</span>
                      <span className="bg-white/10 px-2 py-0.5 rounded-md">{bhk}</span>
                      <span className="bg-white/10 px-2 py-0.5 rounded-md">{project.area}</span>
                    </div>

                    <p className="font-inter text-[11px] text-white/75 leading-relaxed font-light mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Footer Section */}
                    <div className="flex justify-between items-center border-t border-white/15 pt-4 mt-2">
                      <div className="flex items-center gap-1.5 text-white/80">
                        <HiLocationMarker className="text-woodify-coral text-xs" />
                        <span className="font-inter text-[10px] font-medium">{project.location}</span>
                      </div>
                      
                      <button
                        onClick={() => handleExploreProject(project.id)}
                        className="bg-white hover:bg-woodify-coral text-woodify-text hover:text-white font-inter text-[9px] tracking-widest uppercase font-semibold px-4 py-2.5 rounded-full transition-all duration-350 flex items-center gap-1.5"
                      >
                        Explore This Home <HiArrowRight className="text-xs" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
