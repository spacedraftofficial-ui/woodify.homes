export interface Package {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

export const packagesData: Record<string, Package[]> = {
  "2 BHK": [
    {
      id: "2bhk-classic",
      name: "Classic Design",
      price: "₹2,99,000+",
      description: "Elegant, essential design transformations ideal for modern 2 BHK apartment living. Practical layout planning meets premium durability.",
      features: [
        "Modular Kitchen (Laminate Finish)",
        "2 Wardrobes (Laminate Finish)",
        "TV Unit",
        "Basic False Ceiling (Living Room)",
        "Standard Electrical & Lighting",
        "Premium Paint Finish",
        "2D Design & Layout",
        "3-Year Warranty"
      ]
    },
    {
      id: "2bhk-elite",
      name: "Elite Curation",
      price: "₹4,49,000+",
      description: "Bespoke design curation featuring custom premium woodwork, designer lighting, and tailored space storage upgrades.",
      features: [
        "Acrylic Modular Kitchen",
        "2 Premium Wardrobes with Soft-Close Hardware",
        "Designer TV Unit",
        "Decorative False Ceiling with LED Lighting",
        "Crockery Unit / Utility Storage",
        "Quartz Kitchen Countertop",
        "3D Design Visualization",
        "5-Year Warranty"
      ],
      isFeatured: true
    },
    {
      id: "2bhk-luxury",
      name: "Premium Luxury",
      price: "₹6,99,000+",
      description: "An uncompromising editorial design experience with imported stone surfaces, custom furniture, and fully automated lighting integration.",
      features: [
        "Premium PU / Veneer Modular Kitchen",
        "Designer Wardrobes with Premium Accessories",
        "Luxury TV Feature Wall",
        "Smart Ambient Lighting",
        "Premium Wall Panelling",
        "Customized Furniture & Storage",
        "Complete 3D Walkthrough",
        "10-Year Warranty"
      ]
    }
  ],
  "3 BHK": [
    {
      id: "3bhk-classic",
      name: "Classic Design",
      price: "₹3,99,000+",
      description: "Elegant, essential design transformations ideal for standard 3 BHK spaces. Practical layout planning meets premium durability.",
      features: [
        "Modular Kitchen",
        "3 Wardrobes",
        "TV Unit",
        "Basic False Ceiling (Living & Dining)",
        "Premium Paint Finish",
        "Shoe Rack & Loft Storage",
        "2D Design Layout",
        "3-Year Warranty"
      ]
    },
    {
      id: "3bhk-elite",
      name: "Elite Curation",
      price: "₹5,99,000+",
      description: "Bespoke design curation featuring custom premium woodwork, false ceilings with cove lights, and dedicated workspaces.",
      features: [
        "Acrylic Modular Kitchen",
        "3 Premium Wardrobes",
        "Designer TV Unit",
        "False Ceiling with Cove Lighting",
        "Crockery Unit",
        "Study Unit / Workstation",
        "Quartz Countertop",
        "3D Visualization",
        "5-Year Warranty"
      ],
      isFeatured: true
    },
    {
      id: "3bhk-luxury",
      name: "Premium Luxury",
      price: "₹8,99,000+",
      description: "An uncompromising design experience featuring premium finishes, custom walk-in wardrobe, and smart ambient lighting.",
      features: [
        "PU / Veneer Modular Kitchen",
        "Designer Walk-in Wardrobe (Master Bedroom)",
        "Luxury TV Wall",
        "Premium False Ceiling with Smart Lighting",
        "Bar Unit / Display Unit",
        "Imported Hardware",
        "Designer Wall Panelling",
        "Full 3D Walkthrough",
        "10-Year Warranty"
      ]
    }
  ],
  "4 BHK": [
    {
      id: "4bhk-classic",
      name: "Classic Design",
      price: "₹4,99,000+",
      description: "Elegant, essential design transformations ideal for spacious 4 BHK layouts. Practical planning meets premium durability.",
      features: [
        "Modular Kitchen",
        "4 Wardrobes",
        "TV Unit",
        "False Ceiling (Living & Dining)",
        "Premium Paint Finish",
        "Utility Storage & Shoe Unit",
        "2D Design Layout",
        "3-Year Warranty"
      ]
    },
    {
      id: "4bhk-elite",
      name: "Elite Curation",
      price: "₹7,49,000+",
      description: "Bespoke design curation featuring premium materials, detailed visualizations, and specialized home office spaces.",
      features: [
        "Acrylic Modular Kitchen",
        "4 Premium Wardrobes",
        "Designer TV Unit",
        "Decorative False Ceiling with LED Lighting",
        "Crockery & Bar Unit",
        "Study Room Furniture",
        "Quartz Countertop",
        "3D Visualization",
        "5-Year Warranty"
      ],
      isFeatured: true
    },
    {
      id: "4bhk-luxury",
      name: "Premium Luxury",
      price: "₹10,99,000+",
      description: "Our most premium tier with a luxury PU/veneer kitchen, walk-in closets, smart home lighting, and customized furniture.",
      features: [
        "Luxury PU / Veneer Modular Kitchen",
        "Walk-in Wardrobe with Premium Accessories",
        "Designer TV Feature Wall",
        "Smart Home Lighting Provision",
        "Home Office / Library Unit",
        "Premium Wall & Ceiling Panelling",
        "Customized Loose Furniture",
        "Complete 3D Walkthrough",
        "10-Year Warranty"
      ]
    }
  ]
};
