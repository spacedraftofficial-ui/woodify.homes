import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineHashtag, HiChevronRight } from 'react-icons/hi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { portfolioData, type Project } from '../../data/portfolio';

// ── Tiny hook to detect mobile breakpoint ───────────────────────────────────
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();

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
    <section id="portfolio" className="py-12 md:py-16 bg-woodify-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className={`flex flex-col md:flex-row ${activeCategory === "All" ? "justify-center" : "md:items-end justify-between"} gap-8 ${activeCategory === "All" ? "mb-4" : "mb-16"}`}>
          {activeCategory !== "All" && (
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
                {activeCategory} Designs
              </motion.h2>
            </div>
          )}

          {/* Categories Tab Scroll */}
          <div className={`flex flex-wrap gap-2.5 max-w-full overflow-x-auto pb-2 scrollbar-none ${activeCategory === "All" ? "justify-center" : ""}`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => { setActiveCategory(category); setActiveIndex(0); }}
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

        {/* Projects Layout */}
        {activeCategory === "All" ? (() => {
          const total = filteredProjects.length;
          const pct   = total > 1 ? activeIndex / (total - 1) : 0;

          // ── MOBILE LAYOUT: focused single-card carousel ─────────────────
          if (isMobile) {
            return (
              <div className="flex flex-col gap-6">

                {/* Header text */}
                <div className="text-center px-4">
                  <h2 className="font-playfair text-2xl font-bold tracking-tight text-woodify-text leading-tight mb-2">
                    Immersive Residential Portfolio
                  </h2>
                  <p className="font-inter text-xs text-woodify-text/55 leading-relaxed font-light mb-4">
                    Scandinavian elegance meets Japanese minimalism — across Chennai's finest neighbourhoods.
                  </p>
                  <button
                    onClick={() => {
                      const contact = document.querySelector('#contact');
                      if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-block bg-woodify-text hover:bg-woodify-burgundy text-white font-inter text-[10px] tracking-widest uppercase font-semibold px-6 py-3 rounded-full transition-colors shadow-md"
                  >
                    Start Consultation →
                  </button>
                </div>

                {/* Card + Peek Neighbours */}
                <div className="relative w-full overflow-hidden" style={{ height: 380 }}>
                  {filteredProjects.map((p, index) => {
                    const dist = index - activeIndex;
                    if (Math.abs(dist) > 1) return null; // only render -1, 0, +1
                    const translateX = dist * 82; // % offset: 0% centre, ±82% peek
                    const scale = dist === 0 ? 1 : 0.82;
                    const opacity = dist === 0 ? 1 : 0.45;
                    const zIndex = dist === 0 ? 10 : 5;
                    return (
                      <div
                        key={p.id}
                        className="absolute inset-y-0 select-none"
                        style={{
                          width: '80%',
                          left: '10%',
                          transform: `translateX(${translateX}%) scale(${scale})`,
                          opacity,
                          zIndex,
                          transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.45s ease',
                          willChange: 'transform, opacity',
                        }}
                      >
                        <div
                          className="group relative rounded-2xl overflow-hidden w-full h-full bg-white shadow-lg cursor-pointer"
                          onClick={() => dist === 0 ? setSelectedProject(p) : setActiveIndex(index)}
                        >
                          <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                          <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                            <span className="font-inter text-[9px] tracking-widest uppercase text-woodify-coral mb-1 font-semibold block">{p.style}</span>
                            <h3 className="font-playfair text-lg font-bold leading-snug mb-2">{p.title}</h3>
                            <div className="flex justify-between items-center border-t border-white/15 pt-2">
                              <p className="font-inter text-[9px] text-white/80">{p.location}</p>
                              <span className="bg-white/90 text-woodify-text font-inter text-[8px] tracking-wider uppercase font-semibold px-3 py-1 rounded-full">View →</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Counter + Slider + Arrows */}
                <div className="flex flex-col items-center gap-3 px-6">
                  <span className="font-inter text-[10px] tracking-wider font-semibold text-woodify-burgundy">
                    {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                  </span>
                  <div className="relative w-full flex items-center" style={{ height: 24 }}>
                    <div className="absolute inset-x-0 h-[2px] rounded-full bg-woodify-text/12" />
                    <div className="absolute left-0 h-[2px] rounded-full bg-woodify-burgundy transition-all duration-300" style={{ width: `${pct * 100}%` }} />
                    <input
                      type="range" min={0} max={total - 1} value={activeIndex}
                      onChange={(e) => setActiveIndex(parseInt(e.target.value, 10))}
                      className="ring-slider relative w-full appearance-none bg-transparent cursor-pointer focus:outline-none"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setActiveIndex(i => Math.max(0, i - 1))}
                      className="w-10 h-10 rounded-full border border-woodify-text/15 flex items-center justify-center text-woodify-text hover:bg-woodify-burgundy hover:text-white hover:border-woodify-burgundy transition-all text-lg font-bold"
                      aria-label="Previous">‹</button>
                    <button onClick={() => setActiveIndex(i => Math.min(total - 1, i + 1))}
                      className="w-10 h-10 rounded-full border border-woodify-text/15 flex items-center justify-center text-woodify-text hover:bg-woodify-burgundy hover:text-white hover:border-woodify-burgundy transition-all text-lg font-bold"
                      aria-label="Next">›</button>
                  </div>
                </div>

              </div>
            );
          }

          // ── DESKTOP LAYOUT: ellipse ring ────────────────────────────────
          const CARD_W   = 220;   // px — slightly larger cards
          const CARD_H   = 290;   // px — 4:5.3 aspect
          const RX       = 440;   // horizontal radius
          const RY       = 250;   // vertical radius — more breathing room
          const DEG      = 30;    // angular gap between cards (degrees)

          // Stage: tall enough to hold a full vertical ellipse + one card
          // Ellipse top edge (smallest/faded cards) sits 20px from stage top.
          const TOP_PAD  = 20;
          const CENTRE_Y = TOP_PAD + RY + CARD_H / 2;          // centre of ellipse
          const STAGE_H  = CENTRE_Y + RY + CARD_H / 2 + 24;    // bottom of active card + padding
          // Text in the upper-left void of the ellipse, above the equator
          const TEXT_Y   = CENTRE_Y - Math.round(RY * 0.55);

          return (
            <div className="flex flex-col items-center gap-6">

              {/* ── Ring Stage ───────────────────────────────────────── */}
              <div className="relative w-full overflow-visible" style={{ height: STAGE_H }}>

                {/* Center Text — anchored at the geometric centre of the ring.
                    z-index 100 keeps it above all cards at all times. */}
                <div
                  className="absolute left-1/2 text-center pointer-events-none px-6"
                  style={{ top: TEXT_Y, transform: 'translate(-50%, -50%)', zIndex: 100, width: 360 }}
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-woodify-text leading-tight mb-3"
                  >
                    Immersive Residential Portfolio
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="font-inter text-[11px] text-woodify-text/55 leading-relaxed font-light mb-4"
                  >
                    Scandinavian elegance meets Japanese minimalism — across Chennai's finest neighbourhoods.
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    onClick={() => {
                      const contact = document.querySelector('#contact');
                      if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="pointer-events-auto inline-block bg-woodify-text hover:bg-woodify-burgundy text-white font-inter text-[10px] tracking-widest uppercase font-semibold px-6 py-3 rounded-full transition-colors shadow-md"
                  >
                    Start Consultation →
                  </motion.button>
                </div>

                {/* Cards — angle=0 → bottom of ellipse (active card), angle=π → top */}
                {filteredProjects.map((project, index) => {
                  const dist  = index - activeIndex;
                  // θ = π/2 + dist·DEG puts active card (dist=0) at the bottom
                  // sin(π) = 0 → centred X; cos(π) = –1 → top of ellipse
                  const angle = (Math.PI / 2) + dist * DEG * (Math.PI / 180);

                  const cosA = Math.cos(angle);
                  const sinA = Math.sin(angle);

                  // Horizontal offset from centre
                  const offX = RX * cosA;   // cos(π/2)=0 at active → centre
                  // Vertical: sin(π/2)=1 → active card is at bottom (+RY)
                  const offY = RY * sinA;

                  const cardX = `calc(50% + ${offX}px)`;
                  const cardY = CENTRE_Y + offY;   // active: CENTRE_Y + RY (bottom)

                  // Depth: active card (sinA=1) is fullsize & opaque; back (sinA=-1) is small & faded
                  const scale   = 0.52 + 0.48 * ((sinA + 1) / 2);
                  const opacity = Math.max(0.07, 0.1 + 0.9 * ((sinA + 1) / 2));
                  // Active card must be BELOW the text box — use sinA for z: front=high
                  const zIndex  = Math.round(10 + sinA * 40);

                  return (
                    <div
                      key={project.id}
                      className="absolute select-none"
                      style={{
                        width:  CARD_W,
                        height: CARD_H,
                        left:   cardX,
                        top:    cardY,
                        transform:  `translate(-50%, -50%) scale(${scale})`,
                        opacity,
                        zIndex,
                        transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease, left 0.5s cubic-bezier(0.16,1,0.3,1), top 0.5s cubic-bezier(0.16,1,0.3,1)',
                        willChange: 'transform, opacity, left, top',
                      }}
                    >
                      <div
                        className="group relative rounded-2xl overflow-hidden w-full h-full bg-white shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                        <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                          <span className="font-inter text-[8px] tracking-widest uppercase text-woodify-coral mb-1 font-semibold block">
                            {project.style}
                          </span>
                          <h3 className="font-playfair text-sm font-bold leading-snug mb-2">{project.title}</h3>
                          <div className="flex justify-between items-center border-t border-white/15 pt-2">
                            <p className="font-inter text-[8px] text-white/75">{project.location}</p>
                            <span className="bg-white/90 text-woodify-text font-inter text-[7px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded-full">
                              View →
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ── Slider Control — below the ring, properly positioned ──── */}
              <div className="w-full max-w-sm px-4 flex flex-col items-center gap-2 mt-2">
                {/* Counter label */}
                <span className="font-inter text-[10px] tracking-wider font-semibold text-woodify-burgundy">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </span>

                {/* Slider track */}
                <div className="relative w-full flex items-center" style={{ height: 24 }}>
                  {/* Track background */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] rounded-full bg-woodify-text/12" />
                  {/* Filled portion */}
                  <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] rounded-full bg-woodify-burgundy transition-all duration-300"
                    style={{ width: `${pct * 100}%` }}
                  />
                  <input
                    type="range"
                    min={0}
                    max={total - 1}
                    value={activeIndex}
                    onChange={(e) => setActiveIndex(parseInt(e.target.value, 10))}
                    className="ring-slider relative w-full appearance-none bg-transparent cursor-pointer focus:outline-none"
                  />
                </div>

                {/* Prev / Next arrow buttons */}
                <div className="flex gap-3 mt-1">
                  <button
                    onClick={() => setActiveIndex(i => Math.max(0, i - 1))}
                    className="w-9 h-9 rounded-full border border-woodify-text/15 flex items-center justify-center text-woodify-text hover:bg-woodify-burgundy hover:text-white hover:border-woodify-burgundy transition-all duration-250 text-base font-bold"
                    aria-label="Previous project"
                  >‹</button>
                  <button
                    onClick={() => setActiveIndex(i => Math.min(total - 1, i + 1))}
                    className="w-9 h-9 rounded-full border border-woodify-text/15 flex items-center justify-center text-woodify-text hover:bg-woodify-burgundy hover:text-white hover:border-woodify-burgundy transition-all duration-250 text-base font-bold"
                    aria-label="Next project"
                  >›</button>
                </div>
              </div>

            </div>
          );
        })() : (
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
                className="fixed inset-0 bg-black z-[200] cursor-pointer"
              />

              {/* Panel Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-x-4 bottom-4 top-4 md:inset-x-12 md:bottom-12 md:top-12 lg:inset-x-24 lg:bottom-16 lg:top-16 bg-[#F8F6F2] rounded-3xl z-[200] shadow-2xl overflow-hidden border border-woodify-text/5 flex flex-col lg:flex-row"
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
