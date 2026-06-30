export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is Woodify Homes' signature design philosophy?",
    answer: "Our signature philosophy lies at the intersection of Scandinavian functionality and Japanese minimalism (Japandi). We build uncluttered, sensory-rich spaces using natural timber, textured stones, warm lighting layers, and premium details tailored specifically to your daily rituals."
  },
  {
    id: "faq-2",
    question: "How long does a typical interior transformation take?",
    answer: "A standard 2BHK/3BHK project takes between 45 to 60 business days from the date of final 3D design approval. More detailed villa custom projects requiring structural remodeling, microcement plastering, or custom stone carving can take 90 to 120 days."
  },
  {
    id: "faq-3",
    question: "Do you offer warranties on structural elements and woodwork?",
    answer: "Yes, we offer an industry-leading 10-year warranty on all structural BWR (Boiling Water Resistant) plywood core elements and a 3-year warranty on soft-close hardware, custom laminate, and glass components."
  },
  {
    id: "faq-4",
    question: "Can we visit your completed sites or active workshops?",
    answer: "Absolutely. We encourage prospective clients to experience our quality firsthand. We can schedule a guided tour of active sites or a walkthrough of our state-of-the-art modular manufacturing facility in Bangalore/Hyderabad."
  },
  {
    id: "faq-5",
    question: "Do you charge for the initial design consultation and site visit?",
    answer: "The initial creative brief discussion at our studio is completely free. For on-site physical measurements, layout assessment, and preliminary moodboard formulation, we charge a nominal site visit fee which is fully adjusted against your project booking amount."
  },
  {
    id: "faq-6",
    question: "What is your policy on material transparency and pricing?",
    answer: "We operate on a zero-hidden-cost policy. Your approved estimate details the exact brands, grades, thickness of wood, hardware models, and finish codes. Any deviations must be approved via formal change orders before site installation."
  }
];
