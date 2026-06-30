export interface MaterialItem {
  id: string;
  name: string;
  type: string;
  description: string;
  highlights: string[];
  image: string;
}

export const materialsData: MaterialItem[] = [
  {
    id: "wood",
    name: "Architectural Timber",
    type: "Solid Oak & Walnut",
    description: "Ethically sourced European white oak and American walnut, dried to perfect moisture levels to prevent warping in Indian climates.",
    highlights: ["10-year warranty", "FSC Sustainable Certified", "Matte clear-coat finishing"],
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "laminate",
    name: "Premium Surfaces",
    type: "Anti-Fingerprint Acrylic",
    description: "Super-matte laminates that repel grease and dust. Resistant to micro-scratches with thermal healing properties.",
    highlights: ["0.8mm & 1mm thickness", "Seamless laser-edge banding", "Anti-bacterial coating"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "stone",
    name: "Natural Stones",
    type: "Travertine & Marble",
    description: "Italian marble slabs and porous travertine chosen individually for distinct grain patterns and architectural weight.",
    highlights: ["Slab-matched bookmatching", "Sealed with food-grade epoxy", "Tactile honed finishes"],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "hardware",
    name: "Precision Fittings",
    type: "German Soft-Close Units",
    description: "Fully integrated heavy-duty runners and soft-close cabinet hinges from Blum and Hettich, tested for 200,000 opening cycles.",
    highlights: ["Lifetime mechanical warranty", "110-degree clip hinges", "Integrated damping"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "lighting",
    name: "Light Control",
    type: "Magnetic Low-Voltage Tracks",
    description: "Deep-recessed track lighting and architectural profiles that limit glare and reveal true colors (CRI >95).",
    highlights: ["24V Safe magnetic tracks", "Dimmable smart integration", "Warm-to-dim options"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "glass",
    name: "Structural Glazing",
    type: "Fluted & Tinted Panels",
    description: "Architectural ribbed glass partitions framed in matte black metal, reflecting light while defining private thresholds.",
    highlights: ["Tempered safety glass", "Custom fluting patterns", "Bronze & grey tinting"],
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=400&q=80"
  }
];
