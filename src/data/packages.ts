export interface Package {
  id: string;
  name: string;
  price: string;
  description: string;
  sizeLimit: string;
  features: string[];
  isFeatured?: boolean;
}

export const packagesData: Package[] = [
  {
    id: "classic",
    name: "Classic Design",
    price: "₹8,50,000+",
    description: "Elegant, essential design transformations ideal for modern apartment living. Practical layout planning meets premium durability.",
    sizeLimit: "Up to 1,200 sq.ft. (Ideal for 2 BHK)",
    features: [
      "Modular Kitchen with marine ply cabinets",
      "Wardrobes in MDF / Commercial laminate",
      "Standard living room TV unit",
      "Premium Asian Paints emulsion finishing",
      "Essential electrical layout modifications",
      "45-day guaranteed site handover"
    ]
  },
  {
    id: "elite",
    name: "Elite Curation",
    price: "₹15,00,000+",
    description: "Bespoke design curation featuring custom architectural woodwork, designer lighting, and tailored spatial zoning.",
    sizeLimit: "1,200 - 2,500 sq.ft. (Ideal for 3 BHK / Duplex)",
    features: [
      "Custom kitchen with acrylic shutter finishes",
      "Full height veneer wardrobes with soft-close hardware",
      "Designer fluted panel TV wall and foyer paneling",
      "Bespoke false ceiling with magnetic track lights",
      "Italian marble/Quartz vanity counter upgrades",
      "Complete 3D visual render walkthroughs",
      "Dedicated Project Manager & site engineer"
    ],
    isFeatured: true
  },
  {
    id: "premium",
    name: "Premium Luxury",
    price: "₹28,00,000+",
    description: "An uncompromising editorial design experience. Imported stone surfaces, custom furniture, and fully automated lighting integration.",
    sizeLimit: "2,500+ sq.ft. (Ideal for Villas & Penthouses)",
    features: [
      "Fully customized imported PU & glass kitchen shutters",
      "Bespoke walk-in closets with leather drawer trims",
      "Exquisite travertine and Statuario marble walls",
      "Architectural smart-home automated lighting systems",
      "Designer texture wall finishes and architectural metal accents",
      "Custom furniture styling & accessory curation",
      "10-year warranty on all structural wood works",
      "Weekly site update report and video logs"
    ]
  }
];
