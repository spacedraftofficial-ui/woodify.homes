import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { HiArrowLeft } from 'react-icons/hi';
import { portfolioData, type Project } from '../../data/portfolio';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { openLeadModal } from '../../components/ui/LeadModal';
import { trackEvent } from '../../utils/tracking';

export const ProjectCaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [isBefore, setIsBefore] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const foundProject = portfolioData.find((p) => p.id === id);
    if (foundProject) {
      setProject(foundProject);
      document.title = `${foundProject.title} | Woodify Homes Case Study`;
      trackEvent('project_view', {
        project_id: foundProject.id,
        project_name: foundProject.title,
        category: foundProject.category
      });
    } else {
      navigate('/projects');
    }
  }, [id, navigate]);

  if (!project) return null;

  // Fallbacks for projects without explicit case study details
  const propType = project.propertyType || (project.category === 'Villa' ? 'Luxury Villa' : '3 BHK Apartment');
  const clientRequirement = project.clientRequirement || 
    "The client requested a clean, elegant transformation of their residence. They desired a layout that optimized spatial flow, incorporated bespoke wood craftsmanship, and maximized natural light.";
  const designChallenge = project.designChallenge || 
    "The main challenge lay in balancing open functional layout needs with minor structural constraints, creating smart storage systems, and routing electrical conduits invisibly.";
  const woodifySolution = project.woodifySolution || 
    "We implemented custom pre-fabricated wood paneling and low-profile floating storage modules. Premium fittings and ambient LED lighting channels were integrated for a high-end editorial feel.";
  const materialsUsed = project.materialsUsed || 
    ["FSC-Certified Marine Plywood", "Natural White Oak Veneer", "German soft-close hinges", "Premium PU paint"];
  
  const beforeAfter = project.beforeAfter || [
    { 
      before: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80", 
      after: project.image, 
      label: "Main Space Transformation" 
    }
  ];

  const testimonial = project.testimonial || (project.id === 'nordic-oasis' ? null : {
    name: "Aarti & Dev Sharma",
    role: `Owners, ${project.title}`,
    quote: "The craftsmanship is top-tier. Every line matches perfectly and the wood warmth completely changed the vibe of our home. Truly transparent billing and delivery.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  });

  const handleInquire = () => {
    trackEvent('cta_click', {
      placement: 'project_case_study_page',
      project_id: project.id,
      project_title: project.title
    });
    openLeadModal(`Case Study - ${project.title}`, `Case Study - ${project.title}`);
  };

  const toggleBeforeAfter = (index: number) => {
    setIsBefore(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
    trackEvent('before_after_toggle', {
      project_id: project.id,
      slide_index: index,
      state: !isBefore[index] ? 'before' : 'after'
    });
  };

  return (
    <div className="min-h-screen bg-woodify-bg pt-28 flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 w-full py-6">
        {/* Back Button */}
        <button
          onClick={() => navigate('/projects')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-woodify-burgundy hover:text-woodify-text transition-colors mb-8 font-inter uppercase tracking-widest"
        >
          <HiArrowLeft /> Back to Projects
        </button>

        {/* Hero Title Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <span className="font-inter text-xs tracking-widest uppercase font-semibold text-woodify-burgundy mb-2 block">
              Case Study Showcase
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-woodify-text leading-none">
              {project.title}
            </h1>
            <p className="font-inter text-sm text-woodify-text/60 mt-3 font-light">
              {project.style} &bull; {propType}
            </p>
          </div>
          
          <div className="lg:col-span-4 grid grid-cols-3 gap-4 border-t lg:border-t-0 lg:border-l border-woodify-text/10 pt-6 lg:pt-0 lg:pl-8">
            <div>
              <span className="font-inter text-[9px] tracking-wider uppercase text-woodify-text/40 block">Location</span>
              <span className="font-inter text-xs font-semibold text-woodify-text mt-0.5 block">{project.location}</span>
            </div>
            <div>
              <span className="font-inter text-[9px] tracking-wider uppercase text-woodify-text/40 block">Area</span>
              <span className="font-inter text-xs font-semibold text-woodify-text mt-0.5 block">{project.area}</span>
            </div>
            <div>
              <span className="font-inter text-[9px] tracking-wider uppercase text-woodify-text/40 block">Year</span>
              <span className="font-inter text-xs font-semibold text-woodify-text mt-0.5 block">{project.year}</span>
            </div>
          </div>
        </div>

        {/* Slideshow and Gallery */}
        <div className="rounded-3xl overflow-hidden shadow-xl aspect-[16/9] w-full relative mb-16 bg-black border border-woodify-text/5">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="w-full h-full"
          >
            <SwiperSlide>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            {project.additionalImages?.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`${project.title} detail perspective ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Case Study Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-8 space-y-10">
            {/* Client Requirement */}
            <div>
              <h3 className="font-playfair text-2xl font-bold text-woodify-text mb-3">
                Client Requirement
              </h3>
              <p className="font-inter text-sm text-woodify-text/75 leading-relaxed font-light">
                {clientRequirement}
              </p>
            </div>

            {/* Design Challenge */}
            <div>
              <h3 className="font-playfair text-2xl font-bold text-woodify-text mb-3">
                Design Challenge
              </h3>
              <p className="font-inter text-sm text-woodify-text/75 leading-relaxed font-light">
                {designChallenge}
              </p>
            </div>

            {/* Woodify Solution */}
            <div>
              <h3 className="font-playfair text-2xl font-bold text-woodify-text mb-3">
                The Woodify Solution
              </h3>
              <p className="font-inter text-sm text-woodify-text/75 leading-relaxed font-light">
                {woodifySolution}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-8 rounded-2xl border border-woodify-text/5 shadow-sm space-y-8">
            {/* Materials Used */}
            <div>
              <h4 className="font-playfair text-lg font-bold text-woodify-text mb-4 border-b pb-2">
                Materials Configured
              </h4>
              <div className="flex flex-wrap gap-2">
                {materialsUsed.map((mat) => (
                  <span
                    key={mat}
                    className="font-inter text-[10px] tracking-wider font-medium text-woodify-burgundy bg-woodify-burgundy/5 border border-woodify-burgundy/10 px-3 py-1.5 rounded-lg"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* Project description tag */}
            <div>
              <h4 className="font-playfair text-lg font-bold text-woodify-text mb-3">
                Aesthetic Style
              </h4>
              <span className="font-inter text-[11px] uppercase tracking-widest text-woodify-coral font-semibold">
                {project.style}
              </span>
            </div>
          </div>
        </div>

        {/* Before / After Transformation */}
        {beforeAfter.length > 0 && (
          <div className="mb-16">
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-woodify-text text-center mb-8">
              Visual Transformation
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {beforeAfter.map((slide, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-woodify-text/5 shadow-sm flex flex-col items-center">
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-4 bg-woodify-bg">
                    <img
                      src={isBefore[idx] ? slide.before : slide.after}
                      alt={isBefore[idx] ? "Prior to upgrade" : "Completed look"}
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                    
                    {/* Badge Indicator */}
                    <span className={`absolute top-4 right-4 font-inter text-[9px] tracking-widest uppercase font-bold px-3 py-1 rounded-full shadow-md ${
                      isBefore[idx] ? 'bg-amber-500 text-white' : 'bg-green-600 text-white'
                    }`}>
                      {isBefore[idx] ? 'Before Upgrade' : 'After Woodify'}
                    </span>
                  </div>

                  <span className="font-inter text-[11px] tracking-wider text-woodify-text/50 font-medium mb-4 block">
                    {slide.label}
                  </span>

                  <button
                    onClick={() => toggleBeforeAfter(idx)}
                    className="font-inter text-[10px] tracking-widest uppercase font-bold py-3 px-6 rounded-full border border-woodify-text/15 hover:bg-woodify-text hover:text-white transition-all"
                  >
                    {isBefore[idx] ? 'View After Transformation' : 'View Raw Original Space'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonial Section */}
        {testimonial && (
          <div className="max-w-4xl mx-auto mb-16 bg-white border border-woodify-text/5 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
            <span className="font-playfair text-7xl text-woodify-burgundy/10 absolute -top-2 left-6 leading-none select-none">
              “
            </span>
            
            <blockquote className="font-playfair text-lg sm:text-xl md:text-2xl text-woodify-text leading-relaxed font-light mb-8 relative z-10">
              {testimonial.quote}
            </blockquote>

            <div className="flex items-center gap-4 border-t border-woodify-text/10 pt-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border border-woodify-burgundy/15"
              />
              <div>
                <h4 className="font-playfair text-sm font-bold text-woodify-text">{testimonial.name}</h4>
                <p className="font-inter text-[10px] tracking-wider uppercase text-woodify-text/55 mt-0.5">{testimonial.role}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Inquire */}
        <div className="text-center bg-woodify-burgundy text-white py-12 px-8 sm:px-12 rounded-3xl max-w-4xl mx-auto border border-white/5 shadow-xl">
          <h3 className="font-playfair text-2xl sm:text-3xl font-bold leading-tight mb-4">
            Inspired by the layout of {project.title}?
          </h3>
          <p className="font-inter text-xs text-white/70 leading-relaxed font-light max-w-md mx-auto mb-8">
            Schedule a session with our design directors. We can map this design aesthetic onto your home's unique floorplan and blueprint layout.
          </p>
          <button
            onClick={handleInquire}
            className="bg-white hover:bg-woodify-coral text-woodify-text hover:text-white font-inter text-xs tracking-widest uppercase font-semibold px-8 py-4 rounded-full transition-all shadow-md transform hover:-translate-y-0.5"
          >
            Inquire About This Look
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectCaseStudy;
