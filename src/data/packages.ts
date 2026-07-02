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
      price: "₹6.99 Lakhs",
      description: "A practical and stylish solution featuring essential modular interiors, smart storage, quality finishes, and everything required for comfortable everyday living.",
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
      price: "₹9.49 Lakhs",
      description: "Enhanced with premium finishes, designer elements, upgraded storage solutions, decorative lighting, and refined detailing for a sophisticated living experience.",
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
      price: "₹12.99 Lakhs",
      description: "A luxury turnkey interior solution with bespoke designs, premium materials, elegant finishes, advanced storage systems, and personalized styling for an exceptional home.",
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
      price: "₹8.99 Lakhs",
      description: "A beautifully designed modular interior offering efficient layouts and durable materials, tailored for larger families.",
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
      price: "₹12.49 Lakhs",
      description: "Premium finishes, upgraded wardrobes, designer ceilings, enhanced lighting, and elegant living spaces.",
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
      price: "₹16.99 Lakhs",
      description: "Luxury interiors featuring bespoke furniture, designer wall treatments, premium kitchens, customized bedrooms, and complete turnkey execution.",
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
      price: "₹11.99 Lakhs",
      description: "Elegant modular interiors designed for larger homes with ample storage and refined finishes.",
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
      price: "₹16.99 Lakhs",
      description: "A premium home experience with upgraded materials, designer concepts, decorative lighting, and sophisticated aesthetics.",
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
      price: "₹22.99 Lakhs",
      description: "Our most luxurious apartment package featuring designer interiors, premium materials, custom furniture, and complete turnkey execution with personalized design consultation.",
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
