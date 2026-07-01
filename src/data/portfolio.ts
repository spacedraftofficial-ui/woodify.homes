// Import Living Room images
import L1 from '../assets/IMG/Living Room/L 1.jpg';
import L2 from '../assets/IMG/Living Room/L 2.jpg';
import L3 from '../assets/IMG/Living Room/L 3.jpg';
import L4 from '../assets/IMG/Living Room/L 4.jpg';
import L5 from '../assets/IMG/Living Room/L 5.jpg';
import L6 from '../assets/IMG/Living Room/L 6.jpg';

// Import Bedroom images
import B1 from '../assets/IMG/Bedroom/B 1.jpg';
import B2 from '../assets/IMG/Bedroom/B 2.jpg';
import B3 from '../assets/IMG/Bedroom/B 3.jpg';
import B4 from '../assets/IMG/Bedroom/B 4.jpg';
import B5 from '../assets/IMG/Bedroom/B 5.jpg';
import B6 from '../assets/IMG/Bedroom/B 6.jpg';

// Import Kitchen images
import K1 from '../assets/IMG/Kitchen/K 1.jpg';
import K2 from '../assets/IMG/Kitchen/K 2.jpg';
import K3 from '../assets/IMG/Kitchen/K 3.jpg';
import K4 from '../assets/IMG/Kitchen/K 4.jpg';
import K5 from '../assets/IMG/Kitchen/K 5.jpg';
import K6 from '../assets/IMG/Kitchen/K 6.jpg';

// Import Dining (DInini Table) images
import D1 from '../assets/IMG/DInini Table/D 1.jpg';
import D2 from '../assets/IMG/DInini Table/D 2.jpg';
import D3 from '../assets/IMG/DInini Table/D 3.jpg';
import D4 from '../assets/IMG/DInini Table/D 4.jpg';
import D5 from '../assets/IMG/DInini Table/D 5.jpg';
import D6 from '../assets/IMG/DInini Table/D 6.jpg';

// Import Wardrobe images
import W1 from '../assets/IMG/Wardrobe/W 1.jpg';
import W2 from '../assets/IMG/Wardrobe/W 2.jpg';
import W3 from '../assets/IMG/Wardrobe/W 3.jpg';
import W4 from '../assets/IMG/Wardrobe/W 4.jpg';
import W5 from '../assets/IMG/Wardrobe/W 5.jpg';
import W6 from '../assets/IMG/Wardrobe/W 6.jpg';

// Import Home Office images
import H1 from '../assets/IMG/Home Office/H 1.jpg';
import H2 from '../assets/IMG/Home Office/H 2.jpg';
import H3 from '../assets/IMG/Home Office/H 3.jpg';
import H4 from '../assets/IMG/Home Office/H 4.jpg';
import H5 from '../assets/IMG/Home Office/H 5.jpg';
import H6 from '../assets/IMG/Home Office/H 6.jpg';

// Import Villa (VIlla) images
import V1 from '../assets/IMG/VIlla/V 1.jpg';
import V2 from '../assets/IMG/VIlla/V 2.jpg';
import V3 from '../assets/IMG/VIlla/V 3.jpg';
import V4 from '../assets/IMG/VIlla/V 4.jpg';
import V5 from '../assets/IMG/VIlla/V 5.jpg';

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
    description: "A harmonious blend of Scandinavian functionality and Japanese rustic minimalism. Featuring clean lines, warm oak paneling, and an abundance of natural light.",
    image: L1,
    category: "Living Room",
    additionalImages: [L5, L6]
  },
  {
    id: "terracotta-lounge",
    title: "The Terracotta Lounge",
    location: "Goa, India",
    area: "2,800 sq.ft.",
    style: "Modern Mediterranean",
    year: 2025,
    description: "An earthy, inviting living room highlighting warm terracotta floor tiling, raw plaster walls, and custom low-profile seating dressed in raw linen fabrics.",
    image: L2,
    category: "Living Room",
    additionalImages: [L5, L6]
  },
  {
    id: "velvet-salon",
    title: "The Velvet Salon",
    location: "Mumbai, India",
    area: "2,100 sq.ft.",
    style: "Parisian Chic Modern",
    year: 2026,
    description: "A highly sophisticated living space featuring crown molding detail, custom Parisian velvet armchairs, chevron oak flooring, and hand-polished brass accents.",
    image: L3,
    category: "Living Room",
    additionalImages: [L5, L6]
  },
  {
    id: "concrete-hearth",
    title: "The Concrete Hearth",
    location: "Pune, India",
    area: "2,600 sq.ft.",
    style: "Industrial Minimalist",
    year: 2026,
    description: "A modern concrete-focused loft emphasizing structural columns, raw microcement finishes, black matte steel accents, and plush custom-upholstered sectionals.",
    image: L4,
    category: "Living Room",
    additionalImages: [L5, L6]
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
    image: B1,
    category: "Bedroom",
    additionalImages: [B5, B6]
  },
  {
    id: "walnut-retreat",
    title: "The Walnut Retreat",
    location: "Bangalore, India",
    area: "580 sq.ft.",
    style: "Mid-Century Modern",
    year: 2025,
    description: "A cozy bedroom retreat anchored by rich walnut bed frames, woven cane headboards, warm ambient accent lighting, and hand-knotted organic wool rugs.",
    image: B2,
    category: "Bedroom",
    additionalImages: [B5, B6]
  },
  {
    id: "linen-alcove",
    title: "The Linen Alcove",
    location: "Chennai, India",
    area: "520 sq.ft.",
    style: "Scandinavian Minimalist",
    year: 2026,
    description: "A serene, calming sleeping space using soft beige tones, bouclé fabrics, floating bedside nightstands, and organic clay pendant light fixtures.",
    image: B3,
    category: "Bedroom",
    additionalImages: [B5, B6]
  },
  {
    id: "canopy-sanctuary",
    title: "The Canopy Sanctuary",
    location: "Kochi, India",
    area: "700 sq.ft.",
    style: "Tropical Modernist",
    year: 2025,
    description: "A luxurious master suite featuring a custom teak wood poster bed, woven palm leaf light accents, slate stone flooring, and private glass doors opening to a lush garden patio.",
    image: B4,
    category: "Bedroom",
    additionalImages: [B5, B6]
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
    image: K1,
    category: "Kitchen",
    additionalImages: [K5, K6]
  },
  {
    id: "alabaster-galley",
    title: "The Alabaster Galley",
    location: "Hyderabad, India",
    area: "380 sq.ft.",
    style: "Seamless White Minimalist",
    year: 2025,
    description: "An ultra-clean kitchen layout using white matte lacquer cabinets, seamless solid-surface quartz countertops, and concealed touch-to-open drawer profiles.",
    image: K2,
    category: "Kitchen",
    additionalImages: [K5, K6]
  },
  {
    id: "sage-workshop",
    title: "The Sage Workshop",
    location: "Ooty, India",
    area: "400 sq.ft.",
    style: "Modern Country Farmhouse",
    year: 2026,
    description: "Featuring painted sage green shaker cabinets, rustic solid oak open shelving, a white fireclay farmhouse sink, and polished soapstone prep spaces.",
    image: K3,
    category: "Kitchen",
    additionalImages: [K5, K6]
  },
  {
    id: "obsidian-island",
    title: "The Obsidian Island",
    location: "Delhi, India",
    area: "480 sq.ft.",
    style: "Luxury Monolithic Dark Kitchen",
    year: 2025,
    description: "A dramatic design statement built around a massive Nero Marquina marble island, dark charred timber accents, smart touch-controlled storage, and built-in wine vaults.",
    image: K4,
    category: "Kitchen",
    additionalImages: [K5, K6]
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
    image: D1,
    category: "Dining",
    additionalImages: [D5, D6]
  },
  {
    id: "travertine-hearth",
    title: "The Travertine Hearth",
    location: "Hyderabad, India",
    area: "650 sq.ft.",
    style: "Minimalist Modern Dining",
    year: 2025,
    description: "Centered around a rough-hewn stone block table, this space uses matte microcement walls, raw linen slipcover chairs, and organic sculptural paper pendants.",
    image: D2,
    category: "Dining",
    additionalImages: [D5, D6]
  },
  {
    id: "oak-refectory",
    title: "The Oak Refectory",
    location: "Bangalore, India",
    area: "550 sq.ft.",
    style: "Rustic Scandinavian Dining",
    year: 2026,
    description: "An open-plan dining space utilizing solid white oak planks, floating bench seating, industrial steel pendants, and green potted accent plants.",
    image: D3,
    category: "Dining",
    additionalImages: [D5, D6]
  },
  {
    id: "marble-banquette",
    title: "The Marble Banquette",
    location: "Kolkata, India",
    area: "600 sq.ft.",
    style: "Editorial Contemporary Dining",
    year: 2025,
    description: "Featuring a custom Calacatta marble dining table, curved velvet dining booths, brass detailing, and architectural spotlight tracks.",
    image: D4,
    category: "Dining",
    additionalImages: [D5, D6]
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
    image: W1,
    category: "Wardrobe",
    additionalImages: [W5, W6]
  },
  {
    id: "glass-showcase",
    title: "The Glass Showcase",
    location: "Delhi, India",
    area: "550 sq.ft.",
    style: "Italian Minimalist Boutique",
    year: 2025,
    description: "A luxury walk-in closet designed with smoked bronze glass doors, custom dark cedar shelving, and an integrated velvet-lined jewelry island.",
    image: W2,
    category: "Wardrobe",
    additionalImages: [W5, W6]
  },
  {
    id: "cedar-armoire",
    title: "The Cedar Armoire",
    location: "Bangalore, India",
    area: "420 sq.ft.",
    style: "Warm Timber Luxury Dressing",
    year: 2026,
    description: "A dressing room constructed from aromatic red cedar drawers, custom suede garment liners, and integrated warm-spectrum vertical LED bars.",
    image: W3,
    category: "Wardrobe",
    additionalImages: [W5, W6]
  },
  {
    id: "velvet-vanity",
    title: "The Velvet Vanity",
    location: "Mumbai, India",
    area: "480 sq.ft.",
    style: "Contemporary Premium Boudoir",
    year: 2025,
    description: "A luxury dressing space with cream-lacquered wardrobe faces, a custom mohair-covered vanity stool, fluted glass panels, and solid brass drawer knobs.",
    image: W4,
    category: "Wardrobe",
    additionalImages: [W5, W6]
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
    image: H1,
    category: "Home Office",
    additionalImages: [H5, H6]
  },
  {
    id: "sunlight-atelier",
    title: "The Sunlight Atelier",
    location: "Pune, India",
    area: "320 sq.ft.",
    style: "Creative Writing Studio",
    year: 2025,
    description: "A bright office optimized for focus, highlighting light-toned wood desks, linen lounge chairs, and modular storage modules against clean textured white walls.",
    image: H2,
    category: "Home Office",
    additionalImages: [H5, H6]
  },
  {
    id: "oak-bureau",
    title: "The Oak Bureau",
    location: "Bangalore, India",
    area: "380 sq.ft.",
    style: "Minimalist Architect Studio",
    year: 2026,
    description: "An architect's working space using premium solid white oak workbenches, large storage cubbies for layouts, and adjustable task track lights.",
    image: H3,
    category: "Home Office",
    additionalImages: [H5, H6]
  },
  {
    id: "library-study",
    title: "The Library Study",
    location: "Hyderabad, India",
    area: "420 sq.ft.",
    style: "Traditional Modernist Library",
    year: 2025,
    description: "A classic study featuring a dark-stained wood library wall, a custom premium leather desk pad, and classic brass desk lighting accents.",
    image: H4,
    category: "Home Office",
    additionalImages: [H5, H6]
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
    image: V1,
    category: "Villa",
    additionalImages: [V2, V5]
  },
  {
    id: "concrete-monolith",
    title: "The Concrete Monolith",
    location: "Goa, India",
    area: "6,200 sq.ft.",
    style: "Brutalist Modernist Villa",
    year: 2025,
    description: "Constructed of cast-in-place raw board-marked concrete and offset by rich warm teak paneling, pivoting steel entryways, and infinity pool views.",
    image: V2,
    category: "Villa",
    additionalImages: [V1, V5]
  },
  {
    id: "cliffside-haven",
    title: "The Cliffside Haven",
    location: "Alibaug, India",
    area: "7,500 sq.ft.",
    style: "Coastal Luxury Villa",
    year: 2025,
    description: "A premium ocean-facing estate constructed around an open pavilion concept, using rough limestone columns, raw concrete beams, and high glass facades.",
    image: V3,
    category: "Villa",
    additionalImages: [V4, V5]
  },
  {
    id: "pavilion-villa",
    title: "The Pavilion Villa",
    location: "Lonavala, India",
    area: "5,800 sq.ft.",
    style: "Contemporary Pavilions",
    year: 2026,
    description: "A series of interconnected glass pavilions linked by floating wooden breezeways and manicured landscape water features.",
    image: V4,
    category: "Villa",
    additionalImages: [V3, V5]
  }
];
