import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { HiStar, HiPlay } from 'react-icons/hi';
import { testimonialsData, googleRatingStats } from '../../data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-14 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Sub-headers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 md:mb-16">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-inter text-xs tracking-widest uppercase font-semibold text-woodify-burgundy mb-3"
            >
              Client Perspectives
            </motion.p>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-woodify-text leading-tight">
              Beloved by Design Collectors
            </h2>
          </div>

          {/* Google Ratings Trust Badge */}
          <div className="lg:col-span-4 flex items-center lg:justify-end">
            <div className="bg-woodify-bg p-6 rounded-2xl border border-woodify-text/5 flex items-center gap-4">
              <div className="flex flex-col">
                <span className="font-inter text-[10px] tracking-wider uppercase font-semibold text-woodify-text/50">
                  Google Reviews
                </span>
                <div className="flex items-center gap-1 mt-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} />
                  ))}
                  <span className="font-inter text-xs font-semibold text-woodify-text ml-1">
                    {googleRatingStats.averageRating}
                  </span>
                </div>
                <span className="font-inter text-[10px] text-woodify-text/60 mt-1">
                  Based on {googleRatingStats.totalReviews} verified profiles
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Swiper Quotes Block */}
          <div className="lg:col-span-7">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              className="pb-16"
            >
              {testimonialsData.map((test) => (
                <SwiperSlide key={test.id}>
                  <div className="p-2 select-none">
                    <span className="font-playfair text-6xl text-woodify-burgundy/15 block mb-4 leading-none">
                      “
                    </span>
                    <blockquote className="font-playfair text-base sm:text-xl md:text-2xl text-woodify-text leading-relaxed font-light mb-6">
                      {test.quote}
                    </blockquote>
                    
                    {/* User profile citation */}
                    <div className="flex items-center gap-4 mt-6">
                      <img
                        src={test.image}
                        alt={test.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-woodify-burgundy/10 shadow-sm"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="font-playfair text-sm font-bold text-woodify-text">
                          {test.name}
                        </h4>
                        <p className="font-inter text-[10px] text-woodify-text/50 tracking-wider uppercase">
                          {test.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Premium Video Testimonial Preview Card */}
          <div className="lg:col-span-5 relative flex justify-center mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[16/10] w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-woodify-text/5 group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80"
                alt="Client residence video walkthrough frame"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition-colors duration-300 flex flex-col justify-between p-6" />

              {/* Play trigger overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white text-woodify-burgundy shadow-xl flex items-center justify-center text-xl transition-all duration-300 transform group-hover:scale-110 group-hover:bg-woodify-burgundy group-hover:text-white">
                  <HiPlay className="ml-1" />
                </div>
              </div>

              {/* Citations */}
              <div className="absolute bottom-6 left-6 text-white select-none">
                <span className="font-inter text-[8px] tracking-widest uppercase text-white/70 block mb-1">
                  Video Walkthrough
                </span>
                <h4 className="font-playfair text-md font-bold">
                  The Nordic Oasis Case Study
                </h4>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
