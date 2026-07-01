import React, { useState } from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import LightGallery from 'lightgallery/react';
// @ts-ignore
import lgThumbnail from 'lightgallery/plugins/thumbnail';
// @ts-ignore
import lgZoom from 'lightgallery/plugins/zoom';

interface SpaceType {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
}

const spacesData: SpaceType[] = [
  {
    id: "space-1",
    name: "Living Room",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    description: "Expansive layouts using warm timber slats, plaster-coated fireplaces, and integrated low-profile custom lounges."
  },
  {
    id: "space-2",
    name: "Master Bedroom",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    description: "Tactile fabrics, soft ambient recessed profiles, and integrated low-level headboards wrapped in raw bouclé."
  },
  {
    id: "space-3",
    name: "Chef's Kitchen",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    description: "Sleek, handleless cabinetry featuring custom wood grains, fluted kitchen islands, and dark quartzite slabs."
  },
  {
    id: "space-4",
    name: "Editorial Dining",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
    description: "Bespoke solid wood tables lit by custom plaster pendants, establishing a distinct focal point for gathering."
  },
  {
    id: "space-5",
    name: "Travertine Closet",
    category: "Wardrobe",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
    description: "Glass wardrobe doors framed in satin anodized metal, highlighted with integrated vertical sensor lights."
  },
  {
    id: "space-6",
    name: "Minimalist Office",
    category: "Home Office",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    description: "Clean study tables with concealed wire tracks, custom floor-to-ceiling bookshelves, and acoustic wall panels."
  },
  {
    id: "space-7",
    name: "Luxury Villa",
    category: "Villa",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    description: "Grand architectural scales integrating indoor gardens, floating concrete stairs, and timber soffits."
  },
  {
    id: "space-8",
    name: "Creative Kids Room",
    category: "Children's Room",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    description: "Playful yet structured spaces featuring built-in bunk beds, smart storage drawers, and soft organic colors."
  }
];

const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Dining", "Wardrobe", "Home Office", "Villa", "Children's Room"];

export const SpacesWeTransform: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSpaces = activeCategory === "All"
    ? spacesData
    : spacesData.filter(space => space.category === activeCategory);

  return (
    <section id="spaces" className="py-14 md:py-24 bg-woodify-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-inter text-xs tracking-widest uppercase font-semibold text-woodify-burgundy mb-3"
          >
            Spatial Portfolios
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-woodify-text mb-6"
          >
            Spaces We Transform
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-inter text-sm text-woodify-text/65 leading-relaxed font-light"
          >
            We sculpt layouts to flow around your lifestyle. Explore individual spaces crafted with premium Scandinavian hardware and Japanese structural sensibilities.
          </motion.p>
        </div>

        {/* Categories Tab Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-inter text-xs tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-woodify-text text-white shadow-md'
                  : 'bg-white hover:bg-woodify-text/5 text-woodify-text/75 border border-woodify-text/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Container utilizing LightGallery */}
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredSpaces.map((space) => (
            <a
              key={space.id}
              href={space.image}
              data-sub-html={`<h4>${space.name}</h4><p>${space.description}</p>`}
              className="group block relative rounded-2xl overflow-hidden aspect-[4/5] bg-white border border-woodify-text/5 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Frame */}
              <div className="w-full h-full overflow-hidden">
                <img
                  src={space.image}
                  alt={space.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Gradient Backdrop Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Card Copy */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="font-inter text-[10px] tracking-widest uppercase text-white/70 mb-1.5 block">
                  {space.category}
                </span>
                <h3 className="font-playfair text-xl font-bold mb-2 group-hover:text-woodify-burgundy transition-colors duration-300">
                  {space.name}
                </h3>
                <p className="font-inter text-[11px] text-white/70 leading-relaxed font-light line-clamp-2 h-0 group-hover:h-8 transition-all duration-300 overflow-hidden">
                  {space.description}
                </p>
              </div>

              {/* Corner Action Tag */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white rounded-full w-8 h-8 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20">
                +
              </div>
            </a>
          ))}
        </LightGallery>

      </div>
    </section>
  );
};

export default SpacesWeTransform;
