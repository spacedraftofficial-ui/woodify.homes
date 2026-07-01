import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineHashtag, HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { portfolioData, type Project } from '../../data/portfolio';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Dining", "Wardrobe", "Home Office", "Villa"];

  const filteredProjects = activeCategory === "All"
    ? portfolioData
    : portfolioData.filter(project => project.category === activeCategory);

  const handleInquireProject = (title: string) => {
    setSelectedProject(null);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const messageTextarea = document.querySelector('#form-message') as HTMLTextAreaElement;
      if (messageTextarea) {
        messageTextarea.value = `I am interested in learning more about the layout and design style of "${title}".`;
      }
    }
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-woodify-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-inter text-xs tracking-widest uppercase font-semibold text-woodify-burgundy mb-3"
            >
              Selected Works
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-woodify-text leading-tight"
            >
              Immersive Residential Portfolio
            </motion.h2>
          </div>

          {/* Categories Tab Scroll */}
          <div className="flex flex-wrap gap-2.5 max-w-full overflow-x-auto pb-2 scrollbar-none">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-inter text-[10px] tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-300 ${activeCategory === category
                    ? 'bg-woodify-text text-white shadow-md'
                    : 'bg-white hover:bg-woodify-text/5 text-woodify-text/75 border border-woodify-text/5'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Layout (Horizontal Swiper for 'All', Grid for Category Tabs) */}
        {activeCategory === "All" ? (
          <div className="relative">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              centeredSlides={true}
              grabCursor={true}
              watchSlidesProgress={true}
              slidesPerView={'auto'}
              className="pb-32 portfolio-arc-swiper"
            >
              {filteredProjects.map((project) => (
                <SwiperSlide key={project.id} className="w-[280px] sm:w-[320px] md:w-[360px] select-none">
                  <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-white border border-woodify-text/5 shadow-sm hover:shadow-2xl transition-all duration-500">
                    {/* Image Frame */}
                    <div className="w-full h-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300" />
                    </div>

                    {/* Card Inclusions */}
                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white z-10">
                      <span className="font-inter text-[9px] tracking-widest uppercase text-woodify-coral mb-2 block font-semibold">
                        {project.style}
                      </span>
                      
                      <h3 className="font-playfair text-2xl font-bold mb-2">
                        {project.title}
                      </h3>

                      <p className="font-inter text-[11px] text-white/60 leading-relaxed font-light mb-6 line-clamp-2 h-0 group-hover:h-8 transition-all duration-500 overflow-hidden">
                        {project.description}
                      </p>

                      {/* Micro Info Sheet */}
                      <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-2">
                        <div>
                          <p className="font-inter text-[9px] text-white/50 tracking-wider uppercase">Location</p>
                          <p className="font-inter text-[10px] font-medium text-white/95">{project.location}</p>
                        </div>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="bg-white hover:bg-woodify-burgundy hover:text-white text-woodify-text font-inter text-[9px] tracking-widest uppercase font-semibold px-4 py-2 rounded-full transition-colors flex items-center gap-1"
                        >
                          View Case <HiChevronRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-white border border-woodify-text/5 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image Frame */}
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300" />
                  </div>

                  {/* Card Inclusions */}
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white z-10">
                    <span className="font-inter text-[9px] tracking-widest uppercase text-woodify-coral mb-2 block font-semibold">
                      {project.style}
                    </span>
                    
                    <h3 className="font-playfair text-2xl font-bold mb-2">
                      {project.title}
                    </h3>

                    <p className="font-inter text-[11px] text-white/60 leading-relaxed font-light mb-6 line-clamp-2 h-0 group-hover:h-8 transition-all duration-500 overflow-hidden">
                      {project.description}
                    </p>

                    {/* Micro Info Sheet */}
                    <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-2">
                      <div>
                        <p className="font-inter text-[9px] text-white/50 tracking-wider uppercase">Location</p>
                        <p className="font-inter text-[10px] font-medium text-white/95">{project.location}</p>
                      </div>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="bg-white hover:bg-woodify-burgundy hover:text-white text-woodify-text font-inter text-[9px] tracking-widest uppercase font-semibold px-4 py-2 rounded-full transition-colors flex items-center gap-1"
                      >
                        View Case <HiChevronRight />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Detailed Modal pop-up window */}
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black z-50 cursor-pointer"
              />

              {/* Panel Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-x-4 bottom-4 top-4 md:inset-x-12 md:bottom-12 md:top-12 lg:inset-x-24 lg:bottom-16 lg:top-16 bg-[#F8F6F2] rounded-3xl z-50 shadow-2xl overflow-hidden border border-woodify-text/5 flex flex-col lg:flex-row"
              >

                {/* Left Side: Images Slideshow */}
                <div className="w-full lg:w-3/5 h-2/5 lg:h-full relative bg-black">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 left-6 z-50 bg-black/40 hover:bg-black/80 text-white rounded-full p-3 text-lg border border-white/10 transition-colors"
                    aria-label="Close project panel"
                  >
                    <HiX />
                  </button>

                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="w-full h-full"
                  >
                    <SwiperSlide>
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                    {selectedProject.additionalImages?.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={img}
                          alt={`${selectedProject.title} detail angle ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Right Side: Editorial Metadata Details */}
                <div className="w-full lg:w-2/5 h-3/5 lg:h-full p-8 md:p-12 overflow-y-auto flex flex-col justify-between bg-white border-l border-woodify-text/5">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-inter text-[10px] tracking-widest uppercase font-semibold text-woodify-burgundy">
                        {selectedProject.category}
                      </span>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="hidden lg:block text-woodify-text hover:text-woodify-burgundy text-xl p-2 focus:outline-none"
                      >
                        <HiX />
                      </button>
                    </div>

                    <h3 className="font-playfair text-3xl font-bold text-woodify-text mb-4">
                      {selectedProject.title}
                    </h3>

                    <p className="font-inter text-xs text-woodify-text/70 leading-relaxed font-light mb-8">
                      {selectedProject.description}
                    </p>

                    {/* Metadata Sheet */}
                    <div className="border-t border-woodify-text/10 pt-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <HiOutlineLocationMarker className="text-woodify-burgundy" />
                        <div>
                          <p className="font-inter text-[8px] text-woodify-text/45 tracking-wider uppercase">Location</p>
                          <p className="font-inter text-xs font-semibold text-woodify-text">{selectedProject.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <HiOutlineHashtag className="text-woodify-burgundy" />
                        <div>
                          <p className="font-inter text-[8px] text-woodify-text/45 tracking-wider uppercase">Area & Layout</p>
                          <p className="font-inter text-xs font-semibold text-woodify-text">{selectedProject.area}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <HiOutlineCalendar className="text-woodify-burgundy" />
                        <div>
                          <p className="font-inter text-[8px] text-woodify-text/45 tracking-wider uppercase">Year Completed</p>
                          <p className="font-inter text-xs font-semibold text-woodify-text">{selectedProject.year}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-6 border-t border-woodify-text/10 flex flex-col gap-3">
                    <button
                      onClick={() => handleInquireProject(selectedProject.title)}
                      className="w-full text-center block bg-woodify-text hover:bg-woodify-burgundy text-white font-inter text-xs tracking-widest uppercase font-semibold py-4 rounded-full transition-colors shadow-sm"
                    >
                      Inquire About This Look
                    </button>
                  </div>
                </div>

              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Portfolio;
