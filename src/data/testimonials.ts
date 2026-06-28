export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  location: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Genevieve Dubois",
    role: "Collector & Patron",
    quote: "The expedition to the Svalbard yurts was meticulously curated. Floating inside ice caves in complete stillness, then returning to gourmet fireside dining is a memory that will stay with me forever.",
    rating: 5,
    location: "Geneva, Switzerland",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "2",
    name: "Arthur Pendelton",
    role: "Architectural Historian",
    quote: "Standing in Hegra at sunset without any crowds, feeling the silence of the tombs, was a profound experience. Hidden Gems respects the integrity of these sites while offering unparalleled luxury.",
    rating: 5,
    location: "London, United Kingdom",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "3",
    name: "Sophia Martinez",
    role: "Conservationist & Explorer",
    quote: "Their commitment to zero-footprint travel in places like Lençóis Maranhenses is exemplary. Every detail from logistics to lodging is handled with absolute ecological care and premium quality.",
    rating: 5,
    location: "San Francisco, California",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "4",
    name: "Arjun Mehta",
    role: "Travel Photographer",
    quote: "Hidden Gems took me to Spiti Valley in a way no operator ever has — private monastery access at dawn, zero other tourists, and accommodation in a centuries-old mud-brick guesthouse. It was the most authentic Himalayan experience of my life.",
    rating: 5,
    location: "Mumbai, India",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "5",
    name: "Priya Nair",
    role: "Wildlife Biologist",
    quote: "I had dreamt of the Danakil Depression for years. Hidden Gems made it a reality — expertly managed logistics in one of the world's most extreme environments, with camp setups that felt like luxury safari retreats on another planet.",
    rating: 5,
    location: "Bangalore, India",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "6",
    name: "Rohan Sharma",
    role: "Adventure Travel Blogger",
    quote: "Trolltunga at sunrise with a private guide and zero crowds was breathtaking. Hidden Gems planned every detail — the hiking schedule, the gear, the stay in a fjordside cabin. Pure magic from start to finish.",
    rating: 5,
    location: "New Delhi, India",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "7",
    name: "Ananya Krishnan",
    role: "Luxury Travel Curator",
    quote: "The Bazaruto Archipelago trip was flawless. Snorkeling with rare dugongs, sleeping in an overwater villa, and watching the sun sink into the Indian Ocean from an empty white sand beach — Hidden Gems delivered perfection.",
    rating: 5,
    location: "Chennai, India",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  }
];
