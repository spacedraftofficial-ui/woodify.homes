export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const processData: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Aesthetic Alignment",
    description: "Begin with an immersive design consultation mapping your lifestyle rhythms, space goals, and design baseline."
  },
  {
    number: "02",
    title: "Imagine",
    subtitle: "Spatial Ideation",
    description: "Our design studio curates custom spatial floorplans, structural themes, and tactile mood board options."
  },
  {
    number: "03",
    title: "Visualize",
    subtitle: "Creative Validation",
    description: "Walk through high-fidelity, photorealistic 3D virtual tours of your custom spaces before a single component is built."
  },
  {
    number: "04",
    title: "Finalize",
    subtitle: "Design Freeze",
    description: "Review a transparently detailed invoice containing brand codes, dimensions, and materials. Zero hidden charges, finalized before booking."
  },
  {
    number: "05",
    title: "Create",
    subtitle: "Factory Fabrication",
    description: "Your modular panels and custom cabinetry are built inside our automated plant using high-precision German equipment."
  },
  {
    number: "06",
    title: "Transform",
    subtitle: "Precision Assembly",
    description: "Millimeter-accurate parts are delivered and installed dry-fit style, reducing on-site dust and noise by 80%."
  },
  {
    number: "07",
    title: "Inspect",
    subtitle: "140-Point Quality Audit",
    description: "Our quality team runs rigorous test matrices checking hinge fatigue, alignments, moisture seals, and load limits."
  },
  {
    number: "08",
    title: "Welcome Home",
    subtitle: "The Final Reveal",
    description: "Enjoy a professional deep cleaning and detailed spatial styling before receiving the keys to your custom residence."
  },
  {
    number: "09",
    title: "Stay Connected",
    subtitle: "Support & Maintenance",
    description: "Access our active 10-year warranty program, dedicated client helpline, and regular post-handover maintenance check-ups."
  }
];
