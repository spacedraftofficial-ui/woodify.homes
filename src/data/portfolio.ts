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
    id: "culinary-atelier",
    title: "The Culinary Atelier",
    location: "Mumbai, India",
    area: "450 sq.ft. (Kitchen)",
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
    id: "wabi-sabi-sanctuary",
    title: "Wabi-Sabi Bedroom Suite",
    location: "Pune, India",
    area: "650 sq.ft. (Master Suite)",
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
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80"
    ]
  },
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
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "serein-lounge",
    title: "The Serein Lounge",
    location: "Bangalore, India",
    area: "2,800 sq.ft.",
    style: "Scandinavian Minimalist",
    year: 2026,
    description: "A calming living room focusing on organic shapes, warm textured plaster walls, and custom white boucle furniture surrounding a solid stone hearth.",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80",
    category: "Living Room",
    additionalImages: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "oasis-estate",
    title: "The Oasis Estate",
    location: "Hyderabad, India",
    area: "6,200 sq.ft.",
    style: "Luxury Modern Villa",
    year: 2026,
    description: "An open-concept luxury estate merging indoor living with lush landscapes through massive glass pivots and double-height custom concrete ceilings.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    category: "Villa",
    additionalImages: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "noir-kitchen",
    title: "Noir Culinary Studio",
    location: "Mumbai, India",
    area: "480 sq.ft.",
    style: "Modern Editorial Kitchen",
    year: 2025,
    description: "A striking kitchen utilizing dark stained wood cabinetry, a massive black quartzite island, and custom brass linear track systems.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    category: "Kitchen",
    additionalImages: [
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "japandi-suite",
    title: "Japandi Master Suite",
    location: "Pune, India",
    area: "700 sq.ft.",
    style: "Oak Wood & Plaster Bedroom",
    year: 2025,
    description: "A serene master suite designed with light oak paneling, integrated floating side tables, and sliding shoji-inspired screens.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    category: "Bedroom",
    additionalImages: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "oak-linen-workspace",
    title: "Oak & Linen Workspace",
    location: "Delhi NCR, India",
    area: "320 sq.ft.",
    style: "Minimalist Oak Study",
    year: 2026,
    description: "An elegant home office utilizing floating white oak shelving, acoustically treated linen wall panels, and hidden integrated cable routing.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    category: "Home Office",
    additionalImages: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "travertine-dining",
    title: "Travertine Dining Hall",
    location: "Chennai, India",
    area: "750 sq.ft.",
    style: "Minimalist Editorial Dining",
    year: 2025,
    description: "A dining room centered around a monolithic raw travertine table, custom-molded neutral chairs, and minimalist recessed lighting.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1200&q=80",
    category: "Dining",
    additionalImages: [
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "glass-dressing",
    title: "Glass Anodized Dressing Room",
    location: "Kolkata, India",
    area: "450 sq.ft.",
    style: "Modern Glass Closet",
    year: 2025,
    description: "Sleek floor-to-ceiling closets using smoked glass doors framed in black anodized metal, complete with integrated custom shoe walls.",
    image: "https://images.unsplash.com/photo-1558882224-cca166733360?auto=format&fit=crop&w=1200&q=80",
    category: "Wardrobe",
    additionalImages: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
    ]
  }
];
