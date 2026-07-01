export interface Project {
  id: string;
  title: string;
  location: string;
  area: string;
  style: string;
  year: number;
  description: string;
  image: string;
  category: 'Living Room' | 'Bedroom' | 'Kitchen' | 'Dining' | 'Wardrobe' | 'Home Office' | 'Villa';
  additionalImages?: string[];
}

export const portfolioData: Project[] = [
  // ==================== LIVING ROOM ====================
  {
    id: "nordic-oasis",
    title: "The Nordic Oasis",
    location: "Bangalore, India",
    area: "3,200 sq.ft.",
    style: "Japandi Minimalist",
    year: 2025,
    description: "A harmonious blend of Scandinavian functionality and Japanese rustic minimalism. Featuring clean lines, warm oak paneling, and an abundance of natural light streaming through floor-to-ceiling glass panes.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    category: "Living Room",
    additionalImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "terracotta-lounge",
    title: "The Terracotta Lounge",
    location: "Goa, India",
    area: "2,800 sq.ft.",
    style: "Modern Mediterranean",
    year: 2025,
    description: "An earthy, inviting living room highlighting warm terracotta floor tiling, raw plaster walls, and custom low-profile seating dressed in raw linen fabrics.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    category: "Living Room",
    additionalImages: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "velvet-salon",
    title: "The Velvet Salon",
    location: "Mumbai, India",
    area: "2,100 sq.ft.",
    style: "Parisian Chic Modern",
    year: 2026,
    description: "A highly sophisticated living space featuring crown molding detail, custom Parisian velvet armchairs, chevron oak flooring, and hand-polished brass accents.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    category: "Living Room",
    additionalImages: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "concrete-hearth",
    title: "The Concrete Hearth",
    location: "Pune, India",
    area: "2,600 sq.ft.",
    style: "Industrial Minimalist",
    year: 2026,
    description: "A modern concrete-focused loft emphasizing structural columns, raw microcement finishes, black matte steel accents, and plush custom-upholstered sectionals.",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80",
    category: "Living Room",
    additionalImages: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
    ]
  },

  // ==================== BEDROOM ====================
  {
    id: "wabi-sabi-sanctuary",
    title: "Wabi-Sabi Bedroom Suite",
    location: "Pune, India",
    area: "650 sq.ft.",
    style: "Japanese Minimalist",
    year: 2025,
    description: "Embracing the beauty of imperfection with microcement walls, raw linen drapery, and custom low-profile platform beds crafted from reclaimed cedar logs.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    category: "Bedroom",
    additionalImages: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "walnut-retreat",
    title: "The Walnut Retreat",
    location: "Bangalore, India",
    area: "580 sq.ft.",
    style: "Mid-Century Modern",
    year: 2025,
    description: "A cozy bedroom retreat anchored by rich walnut bed frames, woven cane headboards, warm ambient accent lighting, and hand-knotted organic wool rugs.",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
    category: "Bedroom",
    additionalImages: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "linen-alcove",
    title: "The Linen Alcove",
    location: "Chennai, India",
    area: "520 sq.ft.",
    style: "Scandinavian Minimalist",
    year: 2026,
    description: "A serene, calming sleeping space using soft beige tones, bouclé fabrics, floating bedside nightstands, and organic clay pendant light fixtures.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    category: "Bedroom",
    additionalImages: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "canopy-sanctuary",
    title: "The Canopy Sanctuary",
    location: "Kochi, India",
    area: "700 sq.ft.",
    style: "Tropical Modernist",
    year: 2025,
    description: "A luxurious master suite featuring a custom teak wood poster bed, woven palm leaf light accents, slate stone flooring, and private glass doors opening to a lush garden patio.",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
    category: "Bedroom",
    additionalImages: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
    ]
  },

  // ==================== KITCHEN ====================
  {
    id: "culinary-atelier",
    title: "The Culinary Atelier",
    location: "Mumbai, India",
    area: "450 sq.ft.",
    style: "Editorial Luxury Kitchen",
    year: 2025,
    description: "A chef's kitchen featuring fluted dark walnut cabinetry, premium Arabescato marble countertops, and integrated state-of-the-art appliances with tactile brass details.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    category: "Kitchen",
    additionalImages: [
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "alabaster-galley",
    title: "The Alabaster Galley",
    location: "Hyderabad, India",
    area: "380 sq.ft.",
    style: "Seamless White Minimalist",
    year: 2025,
    description: "An ultra-clean kitchen layout using white matte lacquer cabinets, seamless solid-surface quartz countertops, and concealed touch-to-open drawer profiles.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    category: "Kitchen",
    additionalImages: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "sage-workshop",
    title: "The Sage Workshop",
    location: "Ooty, India",
    area: "400 sq.ft.",
    style: "Modern Country Farmhouse",
    year: 2026,
    description: "Featuring painted sage green shaker cabinets, rustic solid oak open shelving, a white fireclay farmhouse sink, and polished soapstone prep spaces.",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80",
    category: "Kitchen",
    additionalImages: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "obsidian-island",
    title: "The Obsidian Island",
    location: "Delhi, India",
    area: "480 sq.ft.",
    style: "Luxury Monolithic Dark Kitchen",
    year: 2025,
    description: "A dramatic design statement built around a massive Nero Marquina marble island, dark charred timber accents, smart touch-controlled storage, and built-in wine vaults.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    category: "Kitchen",
    additionalImages: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
    ]
  },

  // ==================== DINING ====================
  {
    id: "fluted-dining-hall",
    title: "The Fluted Dining Salon",
    location: "Chennai, India",
    area: "800 sq.ft.",
    style: "Luxury Editorial Dining",
    year: 2025,
    description: "A formal dining room highlighted by a custom 12-seater travertine table, plush velvet-clad chairs, and a bespoke hand-blown glass chandelier that acts as a sculptural centerpiece.",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    category: "Dining",
    additionalImages: [
      "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "travertine-hearth",
    title: "The Travertine Hearth",
    location: "Hyderabad, India",
    area: "650 sq.ft.",
    style: "Minimalist Modern Dining",
    year: 2025,
    description: "Centered around a rough-hewn stone block table, this space uses matte microcement walls, raw linen slipcover chairs, and organic sculptural paper pendants.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1200&q=80",
    category: "Dining",
    additionalImages: [
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "oak-refectory",
    title: "The Oak Refectory",
    location: "Bangalore, India",
    area: "550 sq.ft.",
    style: "Rustic Scandinavian Dining",
    year: 2026,
    description: "An open-plan dining space utilizing solid white oak planks, floating bench seating, industrial steel pendants, and green potted accent plants.",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80",
    category: "Dining",
    additionalImages: [
      "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "marble-banquette",
    title: "The Marble Banquette",
    location: "Kolkata, India",
    area: "600 sq.ft.",
    style: "Editorial Contemporary Dining",
    year: 2025,
    description: "Featuring a custom Calacatta marble dining table, curved velvet dining booths, brass detailing, and architectural spotlight tracks.",
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80",
    category: "Dining",
    additionalImages: [
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80"
    ]
  },

  // ==================== WARDROBE ====================
  {
    id: "travertine-dressing",
    title: "The Travertine Wardrobe",
    location: "Kolkata, India",
    area: "500 sq.ft.",
    style: "Luxury Walk-in Wardrobe",
    year: 2025,
    description: "Bespoke floor-to-ceiling closets with leather-wrapped drawers, micro-LED lighting profiles, and integrated dehumidification systems to preserve couture clothing.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
    category: "Wardrobe",
    additionalImages: [
      "https://images.unsplash.com/photo-1558882224-cca166733360?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "glass-showcase",
    title: "The Glass Showcase",
    location: "Delhi, India",
    area: "550 sq.ft.",
    style: "Italian Minimalist Boutique",
    year: 2025,
    description: "A luxury walk-in closet designed with smoked bronze glass doors, custom dark cedar shelving, and an integrated velvet-lined jewelry island.",
    image: "https://images.unsplash.com/photo-1558882224-cca166733360?auto=format&fit=crop&w=1200&q=80",
    category: "Wardrobe",
    additionalImages: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "cedar-armoire",
    title: "The Cedar Armoire",
    location: "Bangalore, India",
    area: "420 sq.ft.",
    style: "Warm Timber Luxury Dressing",
    year: 2026,
    description: "A dressing room constructed from aromatic red cedar drawers, custom suede garment liners, and integrated warm-spectrum vertical LED bars.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    category: "Wardrobe",
    additionalImages: [
      "https://images.unsplash.com/photo-1558882224-cca166733360?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "velvet-vanity",
    title: "The Velvet Vanity",
    location: "Mumbai, India",
    area: "480 sq.ft.",
    style: "Contemporary Premium Boudoir",
    year: 2025,
    description: "A luxury dressing space with cream-lacquered wardrobe faces, a custom mohair-covered vanity stool, fluted glass panels, and solid brass drawer knobs.",
    image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80",
    category: "Wardrobe",
    additionalImages: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
    ]
  },

  // ==================== HOME OFFICE ====================
  {
    id: "monochrome-study",
    title: "The Monochrome Study",
    location: "Delhi NCR, India",
    area: "350 sq.ft.",
    style: "Executive Home Office",
    year: 2026,
    description: "A highly focused home office featuring rich black stained oak shelving, architectural task lighting, and ergonomically integrated leather seating.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    category: "Home Office",
    additionalImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "sunlight-atelier",
    title: "The Sunlight Atelier",
    location: "Pune, India",
    area: "320 sq.ft.",
    style: "Creative Writing Studio",
    year: 2025,
    description: "A bright office optimized for focus, highlighting light-toned wood desks, linen lounge chairs, and modular storage modules against clean textured white walls.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    category: "Home Office",
    additionalImages: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "oak-bureau",
    title: "The Oak Bureau",
    location: "Bangalore, India",
    area: "380 sq.ft.",
    style: "Minimalist Architect Studio",
    year: 2026,
    description: "An architect's working space using premium solid white oak workbenches, large storage cubbies for layouts, and adjustable task track lights.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    category: "Home Office",
    additionalImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "library-study",
    title: "The Library Study",
    location: "Hyderabad, India",
    area: "420 sq.ft.",
    style: "Traditional Modernist Library",
    year: 2025,
    description: "A classic study featuring a dark-stained wood library wall, a custom premium leather desk pad, and classic brass desk lighting accents.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    category: "Home Office",
    additionalImages: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
    ]
  },

  // ==================== VILLA ====================
  {
    id: "vitreous-villa",
    title: "Vitreous House",
    location: "Hyderabad, India",
    area: "5,500 sq.ft.",
    style: "Modern Glass Architecture",
    year: 2026,
    description: "An architectural marvel constructed of glass, steel, and premium white marble. Designed to bring the surrounding lush greenery indoors while maintaining absolute privacy and premium thermal comfort.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    category: "Villa",
    additionalImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "concrete-monolith",
    title: "The Concrete Monolith",
    location: "Goa, India",
    area: "6,200 sq.ft.",
    style: "Brutalist Modernist Villa",
    year: 2025,
    description: "Constructed of cast-in-place raw board-marked concrete and offset by rich warm teak paneling, pivoting steel entryways, and infinity pool views.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    category: "Villa",
    additionalImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "cliffside-haven",
    title: "The Cliffside Haven",
    location: "Alibaug, India",
    area: "7,500 sq.ft.",
    style: "Coastal Luxury Villa",
    year: 2025,
    description: "A premium ocean-facing estate constructed around an open pavilion concept, using rough limestone columns, raw concrete beams, and high glass facades.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    category: "Villa",
    additionalImages: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "pavilion-villa",
    title: "The Pavilion Villa",
    location: "Lonavala, India",
    area: "5,800 sq.ft.",
    style: "Contemporary Pavilions",
    year: 2026,
    description: "A series of interconnected glass pavilions linked by floating wooden breezeways and manicured landscape water features.",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    category: "Villa",
    additionalImages: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80"
    ]
  }
];
