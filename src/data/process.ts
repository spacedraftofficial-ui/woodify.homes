export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const processData: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    subtitle: "Aesthetic Alignment",
    description: "Meet with our design directors to map out your lifestyle needs, aesthetic preferences, and budget baseline. We align on spatial layout themes."
  },
  {
    number: "02",
    title: "Site Visit",
    subtitle: "Contextual Audit",
    description: "Our engineering team conducts laser-guided physical measurements, analyzes light penetration patterns, and audits plumbing/electrical vectors."
  },
  {
    number: "03",
    title: "Design",
    subtitle: "Creative Validation",
    description: "Experience photorealistic 3D virtual tours of your curated spaces. Touch and choose materials from our physical mood board trunks."
  },
  {
    number: "04",
    title: "Budget Approval",
    subtitle: "Commercial Integrity",
    description: "Receive a transparently detailed invoice containing brand codes, dimensions, and materials. Zero hidden charges, finalized before booking."
  },
  {
    number: "05",
    title: "Execution",
    subtitle: "Precision Engineering",
    description: "Modular frames are manufactured in our automated factory and dry-fitted for quality, reducing on-site dust and noise by 80%."
  },
  {
    number: "06",
    title: "Quality Check",
    subtitle: "140-Point Audit",
    description: "Our quality control division runs meticulous test matrices inspecting soft-close hinges, drawer alignment, moisture seals, and load limits."
  },
  {
    number: "07",
    title: "Handover",
    subtitle: "The Final Reveal",
    description: "Following a professional deep cleaning and detailed styling, we hand over the keys to your beautifully realized custom home."
  }
];
