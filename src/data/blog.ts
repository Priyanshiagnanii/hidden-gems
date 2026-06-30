export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "sustainable-luxury-travel",
    title: "The Future of Travel: Redefining Sustainable Luxury",
    excerpt: "How modern travelers are shifting from just visiting places to actively helping protect and restore nature.",
    content: "True luxury is no longer about consuming things, but about protecting the world. In the past, high-end travel often meant waste and excess. Today, a quiet change is happening. When visiting remote areas like the Svalbard ice domes or Madagascar's stone forest, travelers can leave zero trace while helping save local wildlife. In this article, we look at how eco-lodges are offering high-end stays while actively helping restore the environment.",
    date: "June 12, 2026",
    readTime: "6 Min Read",
    author: {
      name: "Aarav Sharma",
      role: "Travel Reporter",
      avatar: "/aarav_sharma.png"
    },
    image: "/sustainable_luxury_blog.png",
    tags: ["Conservation", "Luxury Travel", "Ethics"]
  },
  {
    id: "astrophotography-wilderness-guide",
    title: "Capturing the Stars: A Guide to Night Sky Photography",
    excerpt: "Learn the skills and tips you need to photograph beautiful starry skies in places with no light pollution.",
    content: "Standing under New Zealand's night sky, the Milky Way looks like a bright cloud of stars. For photographers, capturing this is a great challenge. It requires adjusting exposure, calculating shutter speeds to avoid blurry stars, and blending dark scenery with bright skies. Our guide covers the gear, settings, and simple tips you need to take beautiful night sky photos on your next trip.",
    date: "May 28, 2026",
    readTime: "8 Min Read",
    author: {
      name: "Priya Patel",
      role: "Expedition Photographer",
      avatar: "/priya_patel.png"
    },
    image: "/astrophotography_blog.png",
    tags: ["Photography", "Astrophotography", "Gear"]
  },
  {
    id: "unearthing-civilizations",
    title: "Secrets of the Sand: Discovering Hegra's Ancient Trade Routes",
    excerpt: "A look at the ancient Nabataean kingdom and the quiet stone tombs carved into the rocks of the Saudi Arabian desert.",
    content: "While Petra is filled with tourists, its sister city Hegra in AlUla has stayed quiet for hundreds of years. As experts study its rock carvings, we are beginning to understand the trade paths that connected ancient Arabia with Rome. We speak with researchers about the historical writings, old water channels, and religious customs carved into these huge desert stone structures.",
    date: "April 15, 2026",
    readTime: "10 Min Read",
    author: {
      name: "Karan Malhotra",
      role: "Lead Expedition Guide",
      avatar: "/karan_malhotra.png"
    },
    image: "/hegra_real.jpg",
    tags: ["History", "Archaeology", "AlUla"]
  }
];
