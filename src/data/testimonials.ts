export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  project: string;
  image: string;
  
  // V2.0 Testimonial Fields
  location: string;
  propertyType: string;
  shortReview: string;
  videoUrl?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Vikram & Neha Sen",
    role: "Homeowners, The Nordic Oasis",
    quote: "Woodify transformed our empty apartment into a sanctuary of light and warmth. The blending of oak slats with clean plaster walls exceeds what we imagined. Their attention to minor joint alignments is spectacular.",
    rating: 5,
    project: "The Nordic Oasis, Bangalore",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    location: "Adyar, Chennai",
    propertyType: "3 BHK Apartment",
    shortReview: "Absolute masterpiece of wood craftsmanship and spatial light management.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "t2",
    name: "Ananya Reddy",
    role: "Architectural Collector, Vitreous House",
    quote: "Working with Woodify felt like collaborating with an editorial design studio. They understood the delicate requirements of glass structural framing and delivered timber textures that soften our modernist space beautifully.",
    rating: 5,
    project: "Vitreous House, Hyderabad",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    location: "T. Nagar, Chennai",
    propertyType: "Luxury Villa",
    shortReview: "A perfect design partner for architects and structural glass layout designers.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "t3",
    name: "Rajesh Malhotra",
    role: "Tech Entrepreneur",
    quote: "The monochrome study is a masterclass in ergonomics and minimal style. Woodify integrated power cables within the structure of the oak desk completely unseen. The lighting control adds so much focus.",
    rating: 5,
    project: "The Monochrome Study, Delhi NCR",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    location: "Poes Garden, Chennai",
    propertyType: "Executive Home Office",
    shortReview: "Concealed cables, custom dimming, and premium black oak finish. Fantastic focus den."
  },
  {
    id: "t4",
    name: "Dr. Shireen Ahmad",
    role: "Senior Consultant Surgeon",
    quote: "We wanted a space where the dining experience felt like a premium restaurant. The fluted wall panels and the travertine top are gorgeous. The execution was timely and transparently itemized.",
    rating: 5,
    project: "Fluted Dining Salon, Chennai",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    location: "Mylapore, Chennai",
    propertyType: "Dining Area & Panel Work",
    shortReview: "Gorgeous travertine stone table and fluted wall wood work. Exquisite detailing."
  }
];

export const googleRatingStats = {
  averageRating: 4.9,
  totalReviews: 242,
  badgeText: "Google Business Top Rated Interior Studio"
};
