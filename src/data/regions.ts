export interface Region {
  id: string; // matches Destination['region'] e.g. 'Americas', 'Europe', 'Asia-Pacific', 'Africa-ME', 'Polar'
  name: string;
  fullName: string;
  description: string;
  gemCount: number;
  highlightText: string;
  image: string;
}

export const regions: Region[] = [
  {
    id: "America",
    name: "America",
    fullName: "America",
    description: "From the windy sand dunes in Brazil to crystal caves in Mexico, explore beautiful natural wonders.",
    gemCount: 10,
    highlightText: "Sand dunes & crystal caves",
    image: "/havasu_falls_cover.png"
  },
  {
    id: "Europe",
    name: "Europe",
    fullName: "Europe & Mediterranean",
    description: "Discover ancient underground stone cities, snowy mountain peaks, and quiet coastal villages filled with history.",
    gemCount: 7,
    highlightText: "Underground towns & cave vaults",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "Asia-Pacific",
    name: "Asia-Pacific",
    fullName: "Asia & Pacific Islands",
    description: "Journey through glowing caves in New Zealand, volcanic islands, and colorful valleys under snowy mountains.",
    gemCount: 10,
    highlightText: "Glowing caves & mineral lakes",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "Africa-ME",
    name: "Africa-ME",
    fullName: "Africa & Middle East",
    description: "Walk through tall stone forests in Madagascar and ancient rock tombs in the Saudi Arabian desert.",
    gemCount: 12,
    highlightText: "Stone forests & desert rocks",
    image: "/africa_me_cover.png"
  },
  {
    id: "Polar",
    name: "Polar Regions",
    fullName: "The High Arctic & Polar Regions",
    description: "Travel to the edges of the earth, where you can stay in glass domes under the green northern lights.",
    gemCount: 10,
    highlightText: "Arctic nights & crystal glaciers",
    image: "https://images.unsplash.com/photo-1483168527879-c66136b56105?auto=format&fit=crop&w=800&q=80"
  }
];
