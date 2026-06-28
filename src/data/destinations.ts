export interface Destination {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  region: string; // 'America' | 'Europe' | 'Asia-Pacific' | 'Africa-ME' | 'Polar'
  experienceType: 'Celestial' | 'Antiquity' | 'Marine' | 'Forest' | 'Volcanic';
  duration: string; // e.g. "3-5 Days"
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Extreme';
  coordinates: { x: number; y: number }; // percentage positions on our custom SVG map (0-100)
  rating: number;
  image: string;
  galleryImages: string[];
  bestTime: string;
  highlights: string[];
  luxuryStay: string;
  adventurerTip: string;
}

export const destinations: Destination[] = [
  {
    id: "waitomo-caves",
    name: "Waitomo Glowworm Labyrinth",
    tagline: "The Starry Labyrinth of the Deep",
    description: "Explore silent underground waters lit up by thousands of glowing blue worms, deep under the hills of New Zealand.",
    longDescription: "Deep beneath the green hills of New Zealand lies an ancient underground cave carved over millions of years by water currents. The Waitomo Glowworm Labyrinth is a quiet place of still water and stone, but its true wonder is on the ceiling. Hanging above are thousands of unique glowworms found only in New Zealand. As you float silently on a raft, the cave ceiling lights up like a beautiful starry night sky. Visiting this cave lets you experience a magical, quiet light show in complete darkness.",
    region: "Asia-Pacific",
    experienceType: "Marine",
    duration: "2-3 Days",
    difficulty: "Easy",
    coordinates: { x: 88, y: 78 },
    rating: 4.9,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Glowworm_Grotto%2C_Waitomo_Glowworm_Cave.jpg", // Standard beautiful ocean/cave lighting
    galleryImages: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "November to April",
    highlights: [
      "Silent boat cruise through the Glowworm Grotto",
      "Black water rafting through active cave chambers",
      "Exploring the high-vaulted Cathedral cavern",
      "Private guided eco-tour learning about cave geology"
    ],
    luxuryStay: "The Sanctuary Lodge at Waitomo (Private helipad, glass roof suites)",
    adventurerTip: "Book the deep-cave caving experience after hours. It is completely quiet and lets you observe the glowworms without any ambient noise from other groups."
  },
  {
    id: "lencois-maranhenses",
    name: "Lençóis Maranhenses",
    tagline: "Dunes of Crystal Rain",
    description: "A beautiful desert of white sand dunes filled with thousands of seasonal, clear blue-green lakes.",
    longDescription: "At first, Lençóis Maranhenses looks like a dry desert right next to the ocean. However, this amazing place gets plenty of rain every year. The rainwater gets trapped between the white sand dunes, creating thousands of temporary green and blue lakes. Between June and September, these pools fill with warm, clear water. Swimming in these quiet natural pools, surrounded by nothing but soft white sand and the sound of the wind, is a peaceful experience you will never forget.",
    region: "America",
    experienceType: "Volcanic",
    duration: "4-5 Days",
    difficulty: "Moderate",
    coordinates: { x: 35, y: 55 },
    rating: 4.8,
    image: "/lencois_new_cover.png",
    galleryImages: [
      "/lencois_gallery1.jpg",
      "/lencois_gallery2.jpg",
      "/lencois_gallery3.jpg"
    ],
    bestTime: "June to August",
    highlights: [
      "Swimming in the Lagoa Azul and Lagoa Bonita",
      "Overhead private charter flight to witness the scale of the dunes",
      "Sunset trek across the pristine white sand peaks",
      "River tour of Rio Preguiças by private speedboat"
    ],
    luxuryStay: "Atins Dune Eco-Resort (Luxury villas tucked between palm trees and sand)",
    adventurerTip: "Choose a 3-day trek across the park with a local guide. You will sleep under the stars in small oasis communities and swim in pools that have no other visitors."
  },
  {
    id: "derinkuyu-underground",
    name: "Derinkuyu Stone Realm",
    tagline: "The Sunken Stone Realm of Cappadocia",
    description: "Explore a massive, multi-level ancient city built deep underground into soft rock, dating back thousands of years.",
    longDescription: "Cappadocia is famous for its hot air balloons, but deep underground lies an ancient city that will amaze you. Derinkuyu is an underground city built 18 floors deep into soft volcanic rock. It was made to shelter up to 20,000 people and features homes, churches, wine cellars, stables, and air shafts. The city could be locked from the inside with large stone doors. Walking through these low, quiet pathways lets you see how ancient people built a whole world underground.",
    region: "Europe",
    experienceType: "Antiquity",
    duration: "3-4 Days",
    difficulty: "Moderate",
    coordinates: { x: 55, y: 35 },
    rating: 4.7,
    image: "/derinkuyu_real.jpg",
    galleryImages: [
      "/derinkuyu_real.jpg",
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "April to October",
    highlights: [
      "Traversing the 8 levels open to the public",
      "Deciphering ancient stone wheel security locks",
      "Visiting the underground cruciform church",
      "Private wine tasting in an ancient volcanic subterranean cellar"
    ],
    luxuryStay: "The Sacred House Cappadocia (Cave palace, antique grandeur, indoor heated pool)",
    adventurerTip: "Go early in the morning before tourist buses arrive. The subterranean atmosphere is completely different when you are the only one walking down the narrow shafts."
  },
  {
    id: "svalbard-northern-camp",
    name: "Svalbard Midnight Hearth",
    tagline: "The Midnight Hearth of the Arctic",
    description: "A luxury dome camp in the Arctic wilderness, offering beautiful views of the northern lights and clear glaciers.",
    longDescription: "Located between Norway and the North Pole, Svalbard is a land of snow and glaciers. From November to February, the sun never rises, leaving the landscape in a soft blue twilight. Far away from city lights, the Midnight Hearth is a camp of heated glass domes. Here, you can watch the northern lights directly from your warm bed. By day, you can explore ice caves and ride dog sleds, and by night, enjoy fresh local food by a warm fire in the Arctic wilderness.",
    region: "Polar",
    experienceType: "Celestial",
    duration: "5-6 Days",
    difficulty: "Challenging",
    coordinates: { x: 48, y: 12 },
    rating: 4.9,
    image: "/svalbard_real.png",
    galleryImages: [
      "https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1483168527879-c66136b56105?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "December to February (Aurora) or June (Midnight Sun)",
    highlights: [
      "Stargazing and Aurora viewing from luxury glass domes",
      "Guided snowmobile safari to active tidewater glaciers",
      "Exploring deep glacier ice caves of blue crystal",
      "Traditional husky dog sledding across frozen valleys"
    ],
    luxuryStay: "Midnight Hearth Domes (Private wood-burning fires, premium furs, Scandinavian chefs)",
    adventurerTip: "Prepare for cold temperatures (-20°C). Bring high-quality wool thermal base layers. The camp provides Arctic outer suits, but personal layering is key to enjoying the excursions."
  },
  {
    id: "tsingy-de-bemaraha",
    name: "Tsingy Stone Forest",
    tagline: "The Forest of Stone Needles",
    description: "A forest of sharp, vertical stone needles rising above the dry woods of Western Madagascar.",
    longDescription: "Tsingy de Bemaraha is one of the most unusual landscapes on earth. The word 'tsingy' means 'where you cannot walk barefoot.' Water and wind have carved the stone into a forest of razor-sharp spikes. Exploring the park means walking across high suspension bridges, climbing ladders built into the rock, and crawling through narrow caves. Yet, rare plants and lemurs live here, jumping easily from one sharp rock to another.",
    region: "Africa-ME",
    experienceType: "Forest",
    duration: "4-6 Days",
    difficulty: "Extreme",
    coordinates: { x: 58, y: 64 },
    rating: 4.6,
    image: "/tsingy_real.jpg",
    galleryImages: [
      "/tsingy_real.jpg",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "May to October (Dry season)",
    highlights: [
      "Crossing the famous suspension bridge 100 meters above the canyon",
      "Spotting rare Decken's sifaka lemurs in their stone habitat",
      "Navigating the cave networks hidden below the needles",
      "Private aerial view helicopter trip of the reserve"
    ],
    luxuryStay: "Le Soleil des Tsingy (Premium bungalows on a ridge overlooking the forest canopy)",
    adventurerTip: "You must be in good physical shape. The park hikes require harness clipping, heights, and crawling. Wear boots with thick Vibram soles, as the rock is sharp enough to cut thin shoes."
  },
  {
    id: "hegra-alula",
    name: "The Silent Tomb of Hegra",
    tagline: "Echoes of the Nabataeans",
    description: "Saudi Arabia's famous historic site: over 100 large tombs carved directly into giant desert rocks.",
    longDescription: "For hundreds of years, the ancient city of Hegra lay forgotten in the desert sands of AlUla. Built by the same civilization that built Petra, Hegra was a major stop on ancient trade paths. While Petra is hidden in a narrow canyon, Hegra is set in a wide desert valley filled with giant red rocks. Ancient builders carved beautiful tombs directly into these rocks. Walking around these giant stone monuments and feeling the desert wind is like stepping back in time.",
    region: "Africa-ME",
    experienceType: "Antiquity",
    duration: "3 Days",
    difficulty: "Easy",
    coordinates: { x: 54, y: 44 },
    rating: 4.8,
    image: "/hegra_real.jpg",
    galleryImages: [
      "/hegra_real.jpg",
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "October to April",
    highlights: [
      "Viewing the iconic Qasr al-Farid, a single four-story tomb carved out of an isolated rock",
      "Night tours with torches and storytelling under the desert sky",
      "Private vintage Land Rover ride through the archaeological park",
      "Hot air balloon ride at dawn over the rock monuments"
    ],
    luxuryStay: "Habitas AlUla (Sustainable glass-walled luxury villas blending into the sandstone canyons)",
    adventurerTip: "Take the afternoon tour. The golden hour light turns the red sandstone a deep burning orange, which is perfect for photographing the intricate carvings."
  },
  {
    id: "jiuzhaigou-mirror",
    name: "Jiuzhaigou Mirror Lakes",
    tagline: "The Mirror of Heaven",
    description: "A beautiful valley of waterfalls and crystal-clear lakes that reflect snowy mountains and colorful trees.",
    longDescription: "Located on the edge of the mountains, Jiuzhaigou is famous for its colorful lakes. These lakes are incredibly clear due to natural minerals. On calm days, the water acts as a perfect mirror, reflecting green pine trees, waterfalls, and white snowy mountains. The lakes change color from blue to green and yellow depending on the time of day. Walking along the wooden paths feels like stepping into a beautiful painting.",
    region: "Asia-Pacific",
    experienceType: "Forest",
    duration: "3-4 Days",
    difficulty: "Easy",
    coordinates: { x: 74, y: 39 },
    rating: 4.9,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/1_jiuzhaigou_valley_wu_hua_hai_2011b.jpg/3840px-1_jiuzhaigou_valley_wu_hua_hai_2011b.jpg",
    galleryImages: [
      "https://images.unsplash.com/photo-1472214222555-d404758b1c42?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "October (for autumn foliage colors)",
    highlights: [
      "Viewing the Five-Flower Lake with its submerged ancient trees",
      "Walking behind the wide Nuorilang Waterfall",
      "Exploring the historic Zharu Tibetan Monastery",
      "Private photography guide for early entry access"
    ],
    luxuryStay: "Ritz-Carlton Reserve Jiuzhaigou (Villas overlooking the valley, traditional Tibetan spa)",
    adventurerTip: "Autumn is beautiful but busy. Visit during early November when the leaves are still colorful but the crowds have decreased significantly. The air is crisp and the lake reflections are sharp."
  },
  {
    id: "havasu-falls",
    name: "Havasu Falls",
    tagline: "The Turquoise Oasis of the Grand Canyon",
    description: "Stunning turquoise waterfalls flowing over red rock cliffs in a remote canyon, accessible only by foot or helicopter.",
    longDescription: "Hidden deep within the Havasu Creek canyon, on the Havasupai Indian Reservation, Havasu Falls is one of the most beautiful and remote waterfalls in North America. The water gets its bright blue-green color from high amounts of calcium carbonate. The water drops over a 100-foot vertical cliff into a series of clear pools. Reaching this remote paradise requires a challenging 10-mile hike each way, or a helicopter ride, ensuring it remains an exclusive, quiet escape.",
    region: "America",
    experienceType: "Forest",
    duration: "3-4 Days",
    difficulty: "Challenging",
    coordinates: { x: 16, y: 26 },
    rating: 4.9,
    image: "/havasu_falls_cover.png",
    galleryImages: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "March to May & September to November",
    highlights: [
      "Turquoise waterfalls in the Grand Canyon region",
      "Accessible only by hiking or helicopter",
      "Best visited from March–May and September–November",
      "Camp along the scenic banks of Havasu Creek"
    ],
    luxuryStay: "Grand Canyon Oasis Glamping (Luxury safari tents with private canyon viewing decks)",
    adventurerTip: "Permits are required and sell out within minutes of release. Make sure to secure your permit months in advance of your planned hike."
  },
  {
    id: "north-cascades",
    name: "North Cascades National Park",
    tagline: "The American Alps of the Pacific Northwest",
    description: "A wilderness of jagged peaks, ancient glaciers, and crystalline alpine lakes, offering peace away from Yosemite's crowds.",
    longDescription: "Known as the 'American Alps,' North Cascades National Park is a dramatic alpine wonderland in Washington State. It is home to over 300 glaciers, deep forested valleys, and stunning turquoise alpine lakes. Because it is less accessible by car compared to other parks, it sees a fraction of Yosemite's tourist crowds. Visiting North Cascades rewards travelers with pristine mountain silence, challenging hiking trails, and breathtaking views of sharp, snowy peaks reflecting in clear blue waters.",
    region: "America",
    experienceType: "Forest",
    duration: "4-5 Days",
    difficulty: "Challenging",
    coordinates: { x: 14, y: 20 },
    rating: 4.8,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Cascade_Pass_and_Pelton_Basin.jpg",
    galleryImages: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "Mid-June to late September",
    highlights: [
      "Glaciers, alpine lakes, and far fewer tourists than Yosemite",
      "Hike the high-altitude Cascade Pass Trail",
      "Stunning views of Diablo Lake's turquoise waters",
      "Observe diverse wildlife including mountain goats"
    ],
    luxuryStay: "Alpine Creek Retreat (Secluded wooden cabins with stone fireplaces and glacier views)",
    adventurerTip: "The high-altitude trails can remain snow-covered well into July. Bring microspikes if you plan to hike early in the summer season."
  },
  {
    id: "great-sand-dunes",
    name: "Great Sand Dunes National Park",
    tagline: "Massive Dunes Under Mountain Peaks",
    description: "The tallest sand dunes in North America, set against a stunning backdrop of snow-capped mountains.",
    longDescription: "Located in southern Colorado, Great Sand Dunes National Park protects the tallest sand dunes in North America, rising over 750 feet. This dramatic landscape is set against the backdrop of the rugged, snow-dusted Sangre de Cristo Mountains. Visitors can experience the thrill of sandboarding down the massive slopes, splash in the seasonal Medano Creek at the dunes' base, and witness some of the darkest, most clear night skies in the country.",
    region: "America",
    experienceType: "Volcanic",
    duration: "2-3 Days",
    difficulty: "Moderate",
    coordinates: { x: 18, y: 24 },
    rating: 4.7,
    image: "/great_sand_dunes_cover.png",
    galleryImages: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1520117006849-c6b90c7f5df5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "May to September",
    highlights: [
      "Massive dunes with mountain backdrops",
      "Sandboarding and stargazing are popular",
      "Splash in the seasonal Medano Creek",
      "Camp in the backcountry under clear night skies"
    ],
    luxuryStay: "The Sangre de Cristo Lodge (Eco-luxury suites overlooking the sand dunes)",
    adventurerTip: "The sand can reach 150°F (65°C) in summer afternoons. Plan your dune hikes for early morning or late evening to protect your feet."
  },
  {
    id: "cumberland-island",
    name: "Cumberland Island National Seashore",
    tagline: "Wild Horses and Ruins of the Gilded Age",
    description: "A pristine barrier island off the coast of Georgia with wild horses, empty beaches, and historic mansion ruins.",
    longDescription: "Cumberland Island is Georgia's largest and southernmost barrier island, offering a rare blend of nature and history. Accessible only by a brief ferry ride, the island remains largely undeveloped, keeping crowds far away. Here, wild horses roam free along 18 miles of empty, white-sand beaches, through maritime oak forests draped in Spanish moss, and around the historic stone ruins of Dungeness, a grand Gilded Age mansion built by the Carnegie family.",
    region: "America",
    experienceType: "Marine",
    duration: "2-3 Days",
    difficulty: "Easy",
    coordinates: { x: 23, y: 28 },
    rating: 4.7,
    image: "/cumberland_cover.png",
    galleryImages: [
      "/cumberland_real.jpg",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "October to April",
    highlights: [
      "Wild horses, pristine beaches, and historic ruins",
      "Limited ferry access keeps crowds away",
      "Hike through Spanish moss-draped maritime oak forests",
      "Tour the ruins of the Dungeness Mansion"
    ],
    luxuryStay: "Greyfield Inn (Historic 19th-century estate with private beach access and fine dining)",
    adventurerTip: "There are no stores or restaurants on the island. You must bring all your own water, food, and supplies for a day trip or camping stay."
  },
  {
    id: "faroe-islands",
    name: "Faroe Islands",
    tagline: "The Emerald Cliffs of the North Atlantic",
    description: "An archipelago of dramatic green cliffs, cascading waterfalls, and quiet sheep pastures rising from the cold North Atlantic.",
    longDescription: "The Faroe Islands are a self-governing archipelago under Denmark, located between Norway and Iceland. This remote group of volcanic islands is famous for its dramatic, windswept green cliffs, deep fjords, and picturesque villages. Visitors can hike to the iconic cliffside waterfall of Múlafossur, stand on the edge of the floating lake Sørvágsvatn, and watch thousands of puffins nesting on the steep grassy slopes, all while enjoying absolute silence and crisp ocean winds.",
    region: "Europe",
    experienceType: "Marine",
    duration: "4-5 Days",
    difficulty: "Moderate",
    coordinates: { x: 44, y: 19 },
    rating: 4.9,
    image: "/faroe_islands_real.jpg",
    galleryImages: [
      "/faroe_islands_real.jpg",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "June to August",
    highlights: [
      "Dramatic green cliffs and cascading coastal waterfalls",
      "Hike to the floating lake of Sørvágsvatn",
      "Watch nesting puffins on Mykines island",
      "Navigate the steep volcanic fjords by boat"
    ],
    luxuryStay: "Havgrím Seaside Hotel (Historic boutique hotel with panoramic ocean suites and organic local cuisine)",
    adventurerTip: "Weather in the Faroes can change in seconds. Always carry a waterproof outer shell and high-traction boots, as the grassy clifftop trails can become extremely slippery when wet."
  },
  {
    id: "lofoten-islands",
    name: "Lofoten Islands",
    tagline: "Peak-Dotted Fjords and Arctic Waters",
    description: "An archipelago of sharp alpine peaks rising directly out of cold Arctic waters, dotted with red fishing cabins.",
    longDescription: "Located inside the Arctic Circle in Northern Norway, the Lofoten Islands are known for their dramatic natural beauty. The islands feature majestic granite peaks, clear blue fjords, and white sand beaches that look tropical but have freezing Arctic waters. Charming red fisherman cabins (rorbuer) line the rocky shores of fishing villages like Reine and Henningsvær. During the winter, it is a prime spot for viewing the Northern Lights, while summer brings the endless daylight of the Midnight Sun.",
    region: "Europe",
    experienceType: "Marine",
    duration: "5-6 Days",
    difficulty: "Challenging",
    coordinates: { x: 47, y: 18 },
    rating: 4.9,
    image: "/lofoten_islands_real.jpg",
    galleryImages: [
      "/lofoten_islands_real.jpg",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "September to April (Northern Lights) or June to August (Midnight Sun)",
    highlights: [
      "Jagged peaks rising out of cold Arctic fjords",
      "Stay in traditional red fisherman cabins",
      "Watch the Northern Lights dance over Reinebringen peak",
      "Surf on the white sand beaches of Unstad"
    ],
    luxuryStay: "Reine Rorbuer (Eco-luxury restored cabins with private fjord-view hot tubs and Nordic dining)",
    adventurerTip: "Hike Reinebringen at dawn to avoid the midday hikers. The trail has 1,560 stone stairs built by Sherpas, making it a steep but highly rewarding climb."
  },
  {
    id: "meteora",
    name: "Meteora",
    tagline: "Monasteries Suspended in the Air",
    description: "Six ancient Eastern Orthodox monasteries built on top of immense natural sandstone pillars rising from the plain of Thessaly.",
    longDescription: "Meteora is a UNESCO World Heritage site in Greece, home to one of the most spectacular complexes of monasteries in the world. Built on top of massive natural sandstone pillars that rise over 1,000 feet, these monasteries were founded by hermit monks in the 14th century seeking safety and solitude. Originally, monks climbed rope ladders or were pulled up in nets. Today, you can climb stone steps cut into the rock to visit these active sanctuaries and admire their beautiful Byzantine frescoes and endless views.",
    region: "Europe",
    experienceType: "Antiquity",
    duration: "3 Days",
    difficulty: "Moderate",
    coordinates: { x: 52, y: 34 },
    rating: 4.8,
    image: "/meteora_real.jpg",
    galleryImages: [
      "/meteora_real.jpg",
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "September to November or April to June",
    highlights: [
      "Six active monasteries perched on 1,000-foot rock pillars",
      "Explore Byzantine frescoes and ancient holy libraries",
      "Hike through winding sandstone rock trails",
      "Spectacular sunset views over the Thessalian plain"
    ],
    luxuryStay: "Meteora Grand Forest Lodge (Luxury suites surrounded by oak trees with views of the rock pillars)",
    adventurerTip: "Respect the strict dress code for visiting the monasteries (shoulders covered, long pants for men, and long skirts for women). Women can borrow wrap skirts at the entrance if needed."
  },
  {
    id: "azores",
    name: "Azores",
    tagline: "The Mid-Atlantic Eden of Lakes and Calderas",
    description: "A remote volcanic archipelago in the Atlantic, featuring green crater lakes, hot springs, and whale sanctuaries.",
    longDescription: "The Azores are an archipelago of nine volcanic islands situated in the middle of the Atlantic Ocean. Known as Europe's Hawaii, these islands feature lush, green volcanic calderas, geothermal hot springs, and stunning twin lakes of blue and green. The surrounding deep ocean waters are a sanctuary for whales and dolphins, making it one of the best marine viewing spots in the world. Visitors can relax in warm iron baths, hike along crater rims, and enjoy quiet, peaceful villages.",
    region: "Europe",
    experienceType: "Volcanic",
    duration: "5-7 Days",
    difficulty: "Easy",
    coordinates: { x: 38, y: 35 },
    rating: 4.8,
    image: "/azores_real.jpg",
    galleryImages: [
      "/azores_real.jpg",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "June to September",
    highlights: [
      "Lush green volcanic calderas and twin crater lakes",
      "Relax in natural geothermal iron-rich hot springs",
      "Whale and dolphin watching in the deep Atlantic",
      "Hike through tea plantations and hydrangeas"
    ],
    luxuryStay: "Terra Nostra Garden Hotel (Art Deco luxury hotel located inside a geothermal botanical garden)",
    adventurerTip: "Try the local 'Cozido das Furnas,' a traditional meat stew that is slow-cooked underground in the hot volcanic soil of Furnas for several hours."
  },
  {
    id: "plitvice-lakes",
    name: "Plitvice Lakes",
    tagline: "The Cascading Terraces of Emerald Lakes",
    description: "Sixteen terraced crystalline lakes joined by waterfalls and limestone canyons, explored via wooden boardwalks.",
    longDescription: "Plitvice Lakes National Park is Croatia's oldest and largest national park, and a UNESCO World Heritage site. It is world-famous for its sixteen terraced lakes that cascade into one another via spectacular waterfalls. The water color changes constantly from emerald green to turquoise and deep blue depending on the mineral content and angle of the sun. Visitors can walk along miles of wooden boardwalks built over the crystal-clear waters, getting incredibly close to the rushing falls and deep limestone canyons.",
    region: "Europe",
    experienceType: "Forest",
    duration: "2-3 Days",
    difficulty: "Easy",
    coordinates: { x: 49, y: 31 },
    rating: 4.9,
    image: "/plitvice_lakes_real.jpg",
    galleryImages: [
      "/plitvice_lakes_real.jpg",
      "https://images.unsplash.com/photo-1472214222555-d404758b1c42?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "May to September",
    highlights: [
      "Sixteen crystalline lakes connected by cascading waterfalls",
      "Walk on wooden boardwalks floating over the water",
      "Hike through dense beech and pine forests",
      "Boat cruise across Lake Kozjak"
    ],
    luxuryStay: "Hotel Jezero Luxury Cabins (Secluded forest cabins adjacent to the park entrance with private saunas)",
    adventurerTip: "Arrive at the park at 7:00 AM opening time. The wooden boardwalks can get congested in the afternoon, but early morning offers peaceful solitude with misty lake reflections."
  },
  {
    id: "trolltunga",
    name: "Trolltunga",
    tagline: "The Troll's Tongue Over the Abyss",
    description: "A dramatic horizontal cliff ledge jutting 700 meters above Ringedalsvatnet lake in Norway, one of the world's most spectacular viewpoints.",
    longDescription: "Trolltunga, meaning 'Troll's Tongue,' is a breathtaking rock formation in Hardanger, Norway, that juts horizontally out of a mountain cliff approximately 700 meters above the glacial Ringedalsvatnet lake. The hike to reach it covers around 27 kilometers round-trip across rugged Norwegian highland terrain — through birch forests, over rocky ridges, and along ancient glacier-carved plateaus. The surrounding landscape is a world of barren, wind-carved rock, snow patches, and sweeping views over a deep blue fjord. Standing on the tongue, with nothing but air beneath your feet for hundreds of meters, is one of the most exhilarating experiences in Europe.",
    region: "Europe",
    experienceType: "Forest",
    duration: "2-3 Days",
    difficulty: "Challenging",
    coordinates: { x: 47, y: 21 },
    rating: 4.9,
    image: "/trolltunga_real.png",
    galleryImages: [
      "/trolltunga_real.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Trolltunga_Norway_2013.jpg/1280px-Trolltunga_Norway_2013.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hardangerfjord_2013.jpg/1280px-Hardangerfjord_2013.jpg"
    ],
    bestTime: "Late June to September",
    highlights: [
      "Stand on the famous horizontal ledge 700m above the fjord",
      "Epic 27km round-trip hike across pristine Norwegian highland",
      "Dramatic views over Ringedalsvatnet lake and Hardangerfjord",
      "Wild camping overnight on the plateau under the midnight sun"
    ],
    luxuryStay: "Hardanger Hotel (Elegant fjordside hotel with panoramic water views, fine Nordic dining, and private boat excursions)",
    adventurerTip: "Start the hike no later than 5:00 AM to beat the crowds and secure a perfect photo at the tongue without waiting. Bring trekking poles — the descents over wet rock are steep and demanding."
  },

  {
    id: "cape-may",
    name: "Cape May",
    tagline: "Victorian Charm by the Atlantic Shore",
    description: "A historic seaside town at the southern tip of New Jersey, famous for its grand Victorian homes and pristine beaches.",
    longDescription: "Cape May is one of the oldest seaside resort towns in America, located at the southern tip of New Jersey. The entire city is a National Historic Landmark, home to one of the largest collections of late 19th-century Victorian frame buildings in the country. Visitors can stroll along tree-lined streets bordered by beautifully restored gingerbread cottages, relax on clean, quiet beaches, climb the historic Cape May Lighthouse for views of the Delaware Bay, and watch migratory birds and dolphins along the coast.",
    region: "America",
    experienceType: "Marine",
    duration: "2-3 Days",
    difficulty: "Easy",
    coordinates: { x: 24, y: 26 },
    rating: 4.7,
    image: "/cape_may_real.jpg",
    galleryImages: [
      "/cape_may_real.jpg",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "May to September",
    highlights: [
      "Grand Victorian homes and national historic landmark status",
      "Climb the historic Cape May Lighthouse for bay views",
      "Pristine beaches perfect for relaxing and sunset walks",
      "Observe migratory birds at the Cape May Point State Park"
    ],
    luxuryStay: "The Congress Hall (America's oldest seaside resort, offering classic luxury and beach cabanas)",
    adventurerTip: "Rent a bicycle to explore the town's historic streets and nearby nature trails. It's the easiest and most enjoyable way to get around without dealing with summer parking."
  },
  {
    id: "raja-ampat",
    name: "Raja Ampat",
    tagline: "The Last Paradise of Pristine Coral Reefs",
    description: "An archipelago of jungle-covered islands surrounded by the world's most biodiverse coral reefs and turquoise waters.",
    longDescription: "Raja Ampat, located off the northwest tip of Bird's Head Peninsula in West Papua, Indonesia, is a breathtaking archipelago of over 1,500 small islands, cays, and shoals. Known as the crown jewel of the Coral Triangle, it contains the richest marine life biodiversity recorded on Earth. Its signature landscape features steep, mushroom-shaped karst islets rising from crystalline turquoise waters, beneath which lies a vibrant underwater wonderland of colorful corals, giant manta rays, and rare marine species, offering a remote paradise for divers and nature lovers alike.",
    region: "Asia-Pacific",
    experienceType: "Marine",
    duration: "5-7 Days",
    difficulty: "Moderate",
    coordinates: { x: 78, y: 58 },
    rating: 4.9,
    image: "/raja_ampat_real.png",
    galleryImages: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "October to April",
    highlights: [
      "Dive or snorkel in the world's most biodiverse coral reefs",
      "Climb to the iconic Piaynemo viewpoint over karst islands",
      "Explore hidden lagoons and limestone sea caves",
      "Kayaking through pristine, jungle-fringed waters"
    ],
    luxuryStay: "Raja Ampat Biodiversity Resort (Eco-luxury beach cottages with private dive guides)",
    adventurerTip: "Internet and cellular signal is extremely limited. Treat this as a digital detox, and make sure to bring enough cash since there are no ATMs on the remote islands."
  },
  {
    id: "socotra",
    name: "Socotra",
    tagline: "The Alien Landscape of Dragon's Blood Trees",
    description: "A remote island in the Indian Ocean, famous for its unique plant life, including the iconic Dragon's Blood Trees.",
    longDescription: "Socotra is one of the most isolated landforms on Earth, located in the Indian Ocean between the Horn of Africa and the Arabian Peninsula. Due to millions of years of isolation, over a third of its plant life is found nowhere else on the planet, giving it an otherworldly, alien appearance. The most famous species is the Dragon's Blood Tree, which resembles an umbrella and bleeds red sap when cut. The island also features soaring limestone plateaus, deep canyons, white sand dunes, and pristine beaches with zero tourist crowds.",
    region: "Africa-ME",
    experienceType: "Volcanic",
    duration: "5-6 Days",
    difficulty: "Challenging",
    coordinates: { x: 59, y: 48 },
    rating: 4.9,
    image: "/socotra_real.jpg",
    galleryImages: [
      "/socotra_real.jpg",
      "https://images.unsplash.com/photo-1582298538104-e22e5404d7aa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "October to April",
    highlights: [
      "Walk through forests of prehistoric Dragon's Blood Trees",
      "Camp on the pristine white sand dunes of Arher",
      "Swim in the clear freshwater pools of Homhil Canyon",
      "Explore the massive underground chambers of Hoq Cave"
    ],
    luxuryStay: "Socotra Eco-Camp Luxury Safari Tents (Custom private campsite setup under the stars with a local chef)",
    adventurerTip: "Infrastructure on the island is very basic. Travel is done in 4x4 vehicles, and accommodation is mostly camping. Bring high-quality sleeping gear, headlamps, and all personal hygiene supplies."
  },
  {
    id: "yakushima",
    name: "Yakushima",
    tagline: "The Ancient Mossy Forests of Mononoke",
    description: "A subtropical island in Japan covered by dense, ancient cedar forests draped in deep green moss and mountain mists.",
    longDescription: "Yakushima is a circular, mountainous island off the southern coast of Kyushu, Japan. It is a UNESCO World Heritage site covered in ancient, mystical cedar forests (yakusugi) that have lived for thousands of years. The forest's moss-covered roots, rushing waterfalls, and constant mountain mists served as the direct inspiration for Hayao Miyazaki's animated masterpiece, Princess Mononoke. Hiking trails wind through the giant trees, leading to the legendary Jomon Sugi, a massive cedar estimated to be between 2,000 and 7,200 years old.",
    region: "Asia-Pacific",
    experienceType: "Forest",
    duration: "3-4 Days",
    difficulty: "Challenging",
    coordinates: { x: 81, y: 37 },
    rating: 4.8,
    image: "/yakushima_real.png",
    galleryImages: [
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "May to October",
    highlights: [
      "Hike through the moss-draped Shiratani Unsuikyo Ravine",
      "Stand before the Jomon Sugi, Japan's oldest cedar tree",
      "Relax in coastal hot springs right next to the ocean",
      "Spot native Yakushima deer and macaques in the woods"
    ],
    luxuryStay: "Sankara Hotel & Spa Yakushima (Luxury villas nestled between mountains and sea with premium spa services)",
    adventurerTip: "Yakushima is one of the wettest places on earth—locals say it rains '35 days a month.' High-quality rain gear, waterproof boots, and dry bags for electronics are absolute essentials."
  },
  {
    id: "spiti-valley",
    name: "Spiti Valley",
    tagline: "The Cold Desert and Monasteries of the Himalayas",
    description: "A high-altitude cold desert valley in the Himalayas, home to ancient cliffside monasteries and rugged mountain passes.",
    longDescription: "Spiti Valley, situated high in the Indian Himalayas, is a cold desert mountain valley known for its rugged landscapes and rich Buddhist culture. Flanked by soaring peaks, the valley is home to ancient cliffside monasteries like Key Gompa, which resembles a castle built on a hill. Traveling through Spiti requires traversing high mountain passes, crossing rushing glacial streams, and driving along narrow, winding roads carved into cliffs. It offers an escape into a quiet, barren, and beautiful mountain world.",
    region: "Asia-Pacific",
    experienceType: "Antiquity",
    duration: "6-8 Days",
    difficulty: "Extreme",
    coordinates: { x: 67, y: 39 },
    rating: 4.9,
    image: "/spiti_valley_real.png",
    galleryImages: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582298538104-e22e5404d7aa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "June to September",
    highlights: [
      "Explore Key Gompa, a 1,000-year-old monastery on a cliff",
      "Drive across the Kunzum Pass at 15,000 feet",
      "Camp near the crescent-shaped Chandra Taal (Moon Lake)",
      "Visit Hikkim, home to the world's highest post office"
    ],
    luxuryStay: "Spiti Valley Heritage Eco-Lodge (Heated mud-brick suites with local Himachali dining and mountain views)",
    adventurerTip: "Spiti lies at altitudes above 12,000 feet. Spend at least two days in Manali or Shimla before entering the valley to acclimate and avoid acute mountain sickness (AMS)."
  },
  {
    id: "luang-prabang",
    name: "Luang Prabang",
    tagline: "Golden Temples and Alms-Giving Ceremonies",
    description: "An ancient royal capital on the Mekong River, famous for its preserved French-Lao architecture, golden temples, and waterfalls.",
    longDescription: "Luang Prabang is a beautiful, peaceful town in northern Laos, situated on a peninsula formed by the Mekong and Nam Khan Rivers. A UNESCO World Heritage site, it is celebrated for its unique blend of traditional Lao wooden houses and French colonial brick architecture. Every morning at dawn, hundreds of saffron-robed monks walk silently through the streets in the Tak Bat alms-giving ceremony. The town is surrounded by dense jungle, blue cascading waterfalls like Kuang Si, and sacred caves filled with Buddha statues.",
    region: "Asia-Pacific",
    experienceType: "Antiquity",
    duration: "3-4 Days",
    difficulty: "Easy",
    coordinates: { x: 73, y: 46 },
    rating: 4.8,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Phou_si_Luang_Prabang_Laos_%E3%83%97%E3%83%BC%E3%82%B7%E3%83%BC%E3%81%AE%E4%B8%98_%E3%83%A9%E3%82%AA%E3%82%B9%E3%83%BB%E3%83%AB%E3%82%A2%E3%83%B3%E3%83%97%E3%83%A9%E3%83%90%E3%83%BC%E3%83%B3_DSCF6777.jpg",
    galleryImages: [
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "November to February",
    highlights: [
      "Witness the sacred morning Tak Bat alms-giving ceremony",
      "Swim in the multi-tiered, turquoise pools of Kuang Si Falls",
      "Explore the gilded Wat Xieng Thong temple",
      "Take a private sunset cruise down the Mekong River"
    ],
    luxuryStay: "Amantaka (A luxurious resort set in a historic estate, featuring private pools and serene gardens)",
    adventurerTip: "Climb Mount Phousi in the center of town for a 360-degree view of the rivers and mountains. Go about 45 minutes before sunset, and bring a camera for the stunning golden hour views."
  },
  {
    id: "bukhara",
    name: "Bukhara",
    tagline: "The Oasis City of the Silk Road",
    description: "An ancient Central Asian trade city filled with massive blue-tiled madrassas, domed bazaars, and stone fortresses.",
    longDescription: "Bukhara is a historic oasis city located on the ancient Silk Road in Uzbekistan. With a history stretching back over 2,000 years, the city boasts a beautifully preserved historic center that feels like an open-air museum. Massive, intricate blue-tiled madrassas, tall minarets that survived Genghis Khan's raids, and historic brick trading domes still hum with merchants. Walking through Bukhara's quiet, sandy-toned streets lets travelers trace the steps of ancient traders, scholars, and builders.",
    region: "Asia-Pacific",
    experienceType: "Antiquity",
    duration: "3 Days",
    difficulty: "Easy",
    coordinates: { x: 63, y: 33 },
    rating: 4.8,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/2012_Bukhara_7515821196_cropped.jpg",
    galleryImages: [
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "April to June & September to November",
    highlights: [
      "Stand in the Po-i-Kalyan complex with its historic minaret",
      "Explore the Ark of Bukhara, a massive 5th-century fortress",
      "Shop for silk, carpets, and spices in historic trading domes",
      "Relax by the Lyabi-Khauz pool surrounded by ancient mulberry trees"
    ],
    luxuryStay: "Mercure Bukhara Old Town (Luxury boutique hotel blending traditional Uzbek brickwork with modern comforts)",
    adventurerTip: "Make sure to visit a traditional Uzbek bathhouse (Hammam) in the Old Town. The Hammam Bozori Kord dates back to the 16th century and offers historic scrub and massage rituals."
  },
  {
    id: "taroko-gorge",
    name: "Taroko National Park",
    tagline: "The Marble Canyons and Shrines of Taiwan",
    description: "A spectacular canyon carved by the Liwu River through solid marble cliffs, featuring temples perched over waterfalls.",
    longDescription: "Taroko National Park is one of Taiwan's most famous natural wonders, centered around the spectacular Taroko Gorge. Carved over millions of years by the Liwu River, the canyon features vertical cliffs of solid marble, deep tunnels, and rushing white-water streams. Winding hiking trails lead across suspension bridges, through damp caves, and to shrines like the Eternal Spring Shrine, which is built directly over a cascading waterfall. It is a stunning combination of raw geological power and peaceful mountain scenery.",
    region: "Asia-Pacific",
    experienceType: "Forest",
    duration: "2-3 Days",
    difficulty: "Moderate",
    coordinates: { x: 78, y: 43 },
    rating: 4.8,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Jiuqudong_2003-01.jpg",
    galleryImages: [
      "https://images.unsplash.com/photo-1472214222555-d404758b1c42?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "October to April",
    highlights: [
      "Hike the dramatic clifftop Zhuilu Old Trail",
      "Visit the Eternal Spring Shrine built over a waterfall",
      "Cross suspension bridges over the turquoise Liwu River",
      "Explore the marble arches of the Swallow Grotto"
    ],
    luxuryStay: "Silks Place Taroko (A luxury resort located inside the park, featuring an outdoor rooftop pool with canyon views)",
    adventurerTip: "The Zhuilu Old Trail requires a special permit in advance and is limited to a small number of hikers daily. Apply online at least 3-4 weeks prior to your visit."
  },
  {
    id: "perhentian-islands",
    name: "Perhentian Islands",
    tagline: "Crystalline Waters and Coral Shallows",
    description: "Two pristine tropical islands off the coast of Malaysia, offering sandy beaches, turtle sanctuaries, and clear waters.",
    longDescription: "The Perhentian Islands consist of Perhentian Besar and Perhentian Kecil, located off the northeastern coast of West Malaysia. Covered in thick, green jungle, the islands are surrounded by white sand beaches and coral reefs with extremely clear water. The islands are preserved as a marine park, keeping motorized vehicles away and protecting a rich marine habitat. Snorkelers and divers can easily swim off the beach to spot sea turtles, blacktip reef sharks, and colorful reef fish in warm, calm waters.",
    region: "Asia-Pacific",
    experienceType: "Marine",
    duration: "3-4 Days",
    difficulty: "Easy",
    coordinates: { x: 74, y: 52 },
    rating: 4.7,
    image: "/perhentian_islands_real.png",
    galleryImages: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "March to October (Islands close during monsoon season)",
    highlights: [
      "Snorkel directly from the beach with sea turtles and sharks",
      "Hike jungle trails connecting secret sandy bays",
      "Watch spectacular beach sunsets on Perhentian Kecil",
      "Volunteer at a local green sea turtle conservation project"
    ],
    luxuryStay: "Alunan Resort (Bespoke contemporary villas built on a steep jungle hillside overlooking a private bay)",
    adventurerTip: "Visit during May or June for the best underwater visibility. The islands are completely closed from November to February due to the rough seas of the northeast monsoon."
  },
  {
    id: "mount-cook",
    name: "Aoraki / Mount Cook National Park",
    tagline: "Glaciers and Starry Southern Skies",
    description: "A spectacular alpine reserve centered around New Zealand's tallest peak, featuring massive glaciers and a dark sky sanctuary.",
    longDescription: "Aoraki / Mount Cook National Park encompasses the most rugged peaks and largest glaciers in New Zealand. The park features 23 peaks rising over 10,000 feet, dominated by Aoraki (Mount Cook), New Zealand's highest peak. Winding trails like the Hooker Valley Track lead hikers over suspension bridges to glacial lakes filled with floating icebergs. By night, the park is part of the Aoraki Mackenzie International Dark Sky Reserve, offering some of the clearest, most spectacular stargazing and Southern Lights viewing in the Southern Hemisphere.",
    region: "Asia-Pacific",
    experienceType: "Celestial",
    duration: "3-4 Days",
    difficulty: "Moderate",
    coordinates: { x: 87, y: 81 },
    rating: 4.9,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Mt_Cook_LC0247.jpg",
    galleryImages: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "November to April",
    highlights: [
      "Hike the Hooker Valley Track to views of glacier lake icebergs",
      "Stargazing within the International Dark Sky Reserve",
      "Take a ski plane flight to land on the Tasman Glacier",
      "Spot native kea alpine parrots around the mountain village"
    ],
    luxuryStay: "The Hermitage Hotel Premium Chalets (Secluded luxury chalets with glass walls facing Mount Cook)",
    adventurerTip: "Walk the Hooker Valley Track at sunset or during the night. The stars are incredibly bright, and you will have the popular track completely to yourself under the Milky Way."
  },
  {
    id: "deadvlei-sossusvlei",
    name: "Deadvlei & Sossusvlei",
    tagline: "The Clay Pan of Skeleton Trees and Red Dunes",
    description: "A white clay pan characterized by dark, dead camel thorn trees against a backdrop of orange sand dunes.",
    longDescription: "Deadvlei is a white clay pan located near the more famous salt pan of Sossusvlei, inside the Namib-Naukluft Park of Namibia. Surrounded by some of the highest sand dunes in the world, which reach up to 1,300 feet, the pan was formed after a river flooded and allowed camel thorn trees to grow. When the climate changed and dunes blocked the water, the trees died. The dry climate has preserved the blackened skeletons of these trees for over 900 years, creating a stark, beautiful contrast of black wood, white clay, orange sand, and deep blue sky.",
    region: "Africa-ME",
    experienceType: "Volcanic",
    duration: "3-4 Days",
    difficulty: "Moderate",
    coordinates: { x: 49, y: 73 },
    rating: 4.9,
    image: "/deadvlei_real.png",
    galleryImages: [
      "/deadvlei_real.png",
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Deadvlei_trees_dunes_.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/e/e5/Deadvlei_trees_dunes_.JPG"
    ],
    bestTime: "May to September",
    highlights: [
      "Photograph the 900-year-old preserved camel thorn trees",
      "Climb Big Daddy, the tallest dune in the Sossusvlei area",
      "Watch the sunrise paint the dunes a burning orange",
      "Explore the towering red sand ridges of Dune 45"
    ],
    luxuryStay: "Sossusvlei Desert Lodge (Ultra-luxury glass villas with private pools and stargazing skylights)",
    adventurerTip: "Enter the park gates at sunrise. The early morning light creates sharp, dramatic shadows on the dunes, which is the absolute best time for photography before the heat of the day sets in."
  },
  {
    id: "danakil-depression",
    name: "Danakil Depression",
    tagline: "The Neon Geothermal Fields of the Afar",
    description: "One of the hottest and lowest points on Earth, famous for its neon yellow-green hydrothermal salt springs and active lava lakes.",
    longDescription: "The Danakil Depression is a geological depression in northeastern Ethiopia, lying more than 300 feet below sea level. It is one of the most extreme environments on Earth, with volcanic activity creating neon-colored hot springs, yellow sulfur fields, and massive salt pans. The area is home to Dallol, a hydrothermal field of brilliant yellow, green, and red mineral formations, and Erta Ale, an active basaltic shield volcano with a persistent lava lake. It is a stunning, harsh landscape that feels like another planet.",
    region: "Africa-ME",
    experienceType: "Volcanic",
    duration: "4-5 Days",
    difficulty: "Extreme",
    coordinates: { x: 56, y: 49 },
    rating: 4.8,
    image: "/danakil_real.png",
    galleryImages: [
      "/danakil_real.png",
      "/erta_ale_real.png",
      "/afar_salt_caravan_real.png"
    ],
    bestTime: "November to February (Cooler winter months)",
    highlights: [
      "Explore the neon yellow and green hot springs of Dallol",
      "Trek to the active lava lake of Erta Ale volcano",
      "Witness traditional Afar salt caravans harvesting blocks",
      "Explore the massive salt canyons and salt flats"
    ],
    luxuryStay: "Danakil Expedition Glamping (Premium mobile camp set up with cooling fans and private bathroom facilities)",
    adventurerTip: "Daily temperatures routinely exceed 40°C (104°F). Hydration is critical. Drink at least 4-5 liters of water daily, and carry electrolyte replacement tablets."
  },
  {
    id: "musandam-peninsula",
    name: "Musandam Peninsula",
    tagline: "The Fjords of Arabia",
    description: "A mountainous peninsula separating the Persian Gulf and Gulf of Oman, featuring stark limestone cliffs and turquoise waters.",
    longDescription: "The Musandam Peninsula is an exclave of Oman, separated from the rest of the country by the UAE. Dotted with dramatic, sheer limestone mountains that rise straight out of the sea, it is often called the 'Norway of the Middle East.' Visitors can sail through the deep, quiet fjords on traditional wooden dhows, swim with dolphins in the clear waters, and explore isolated fishing villages accessible only by boat, surrounded by absolute silence and desert mountains.",
    region: "Africa-ME",
    experienceType: "Marine",
    duration: "3 Days",
    difficulty: "Easy",
    coordinates: { x: 58, y: 43 },
    rating: 4.7,
    image: "/musandam_cover_real.png",
    galleryImages: [
      "/musandam_cover_real.png",
      "/musandam_aerial_real.png",
      "/musandam_island_real.png"
    ],
    bestTime: "November to March",
    highlights: [
      "Cruise the fjords on a traditional wooden Omani dhow",
      "Snorkel with colorful marine life around Telegraph Island",
      "Spot wild humpback and bottlenose dolphins in the bay",
      "Drive the steep mountain roads up to Jebel Harim"
    ],
    luxuryStay: "Six Senses Zighy Bay (Bespoke stone villas with private pools set between mountains and a private sandy beach)",
    adventurerTip: "Take a dhow cruise that includes overnight camping on a secluded beach inside the fjords. Stargazing in the calm, cliff-sheltered waters is spectacular."
  },
  {
    id: "bazaruto-archipelago",
    name: "Bazaruto Archipelago",
    tagline: "The Sand Dunes and Marine Sanctuary of the Indian Ocean",
    description: "A group of six islands off the coast of Mozambique, featuring towering white sand dunes, coral reefs, and rare dugongs.",
    longDescription: "The Bazaruto Archipelago is a protected marine park consisting of six beautiful, sandy islands in the Indian Ocean. The islands feature massive, windswept white sand dunes that drop directly into the turquoise ocean waters. Beneath the surface lies the Two Mile Reef, home to over 2,000 species of fish, sea turtles, manta rays, and the last remaining population of dugongs (sea cows) in the Western Indian Ocean. It is a peaceful paradise of empty beaches and spectacular snorkeling.",
    region: "Africa-ME",
    experienceType: "Marine",
    duration: "4-5 Days",
    difficulty: "Easy",
    coordinates: { x: 55, y: 68 },
    rating: 4.8,
    image: "/bazaruto_real.png",
    galleryImages: [
      "/bazaruto_real.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Vilankulo_Mozambique_from_air.jpg/1280px-Vilankulo_Mozambique_from_air.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Bazaruto_Island.jpg/1280px-Bazaruto_Island.jpg"
    ],
    bestTime: "May to November",
    highlights: [
      "Slide down the massive sand dunes of Bazaruto Island",
      "Snorkel the vibrant coral gardens of the Two Mile Reef",
      "Spot rare dugongs in the shallow seagrass channels",
      "Sail on a traditional wooden dhow at sunset"
    ],
    luxuryStay: "Anantara Bazaruto Island Resort (Beachfront luxury pool villas with private dining under the stars)",
    adventurerTip: "Make sure to take a boat to Paradise Island (Santa Carolina). It is a tiny, deserted island with beautiful abandoned buildings, crystal pools, and empty beaches."
  },
  {
    id: "meroe-pyramids",
    name: "Meroë Pyramids",
    tagline: "The Silent Royal Tombs of the Nubian Desert",
    description: "Over 200 ancient steep-sided Nubian pyramids built into the desert sands, with absolutely no tourist crowds.",
    longDescription: "Meroë is an ancient city on the east bank of the Nile River in Sudan, famous for its royal cemetery of Nubian pyramids. Built by the rulers of the Kingdom of Kush between 300 BC and 300 AD, these pyramids are smaller and steeper than the Egyptian ones. The ruins are set in the rolling orange sands of the Nubian Desert. Unlike the crowded pyramids of Giza, Meroë is incredibly quiet and peaceful. Visitors can walk among these ancient tombs in complete solitude, accompanied only by the desert wind.",
    region: "Africa-ME",
    experienceType: "Antiquity",
    duration: "3 Days",
    difficulty: "Challenging",
    coordinates: { x: 53, y: 47 },
    rating: 4.8,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/NubianMeroePyramids30sep2005%282%29.jpg",
    galleryImages: [
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582298538104-e22e5404d7aa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "November to February",
    highlights: [
      "Walk among over 200 ancient steep-sided Nubian pyramids",
      "Explore the intricate tomb relief carvings inside the chapels",
      "Ride a camel across the orange Nubian desert sands at sunset",
      "Camp in the desert under a clear, unpolluted night sky"
    ],
    luxuryStay: "Meroë Desert Camp (Comfortable safari-style tents with views of the pyramids and traditional Nubian meals)",
    adventurerTip: "Make sure to bring a headlamp. Many of the small pyramid chapels have beautifully preserved carvings inside their dark entry chambers that are best explored with personal lighting."
  },
  {
    id: "salalah",
    name: "Salalah",
    tagline: "The Monsoon Oasis of Frankincense",
    description: "A green coastal city in Oman, transformed by the seasonal Khareef monsoon into a lush paradise of waterfalls and mist.",
    longDescription: "Salalah is the capital of Oman's southern Dhofar province. While the rest of the Arabian Peninsula suffers from intense summer heat, Salalah is transformed by the seasonal Khareef (monsoon) from June to September. The monsoon brings cool breezes, constant mist, and rains that turn the desert mountains into a lush, green paradise of active waterfalls and rivers. The region is also famous for its ancient frankincense trees, which have been harvested for thousands of years to trade across the ancient world.",
    region: "Africa-ME",
    experienceType: "Forest",
    duration: "3-4 Days",
    difficulty: "Easy",
    coordinates: { x: 57, y: 46 },
    rating: 4.7,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Dunst_Oman_scan0322_-_Burj_al_Nahda.jpg/3840px-Dunst_Oman_scan0322_-_Burj_al_Nahda.jpg",
    galleryImages: [
      "https://images.unsplash.com/photo-1472214222555-d404758b1c42?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "July to September (Khareef season) or October to April",
    highlights: [
      "See the desert mountains turn lush green during the Khareef",
      "Explore the active waterfalls of Wadi Darbat",
      "Visit the ancient ruins of the Frankincense Land archaeological site",
      "Walk along empty, mist-shrouded white sand beaches"
    ],
    luxuryStay: "Alila Hinu Bay (Eco-luxury resort blending Omani architecture with modern luxury, overlooking a private bay)",
    adventurerTip: "If visiting during the Khareef, rent a 4x4. The mountain roads become wet and slippery with mist, and having 4WD is necessary to safely access some of the best mountain waterfalls."
  },
  {
    id: "lalibela",
    name: "Lalibela",
    tagline: "The Rock-Hewn Churches of the Highlands",
    description: "Eleven medieval monolithic churches carved directly out of solid red volcanic rock, active for centuries.",
    longDescription: "Lalibela is a town in the mountainous highlands of northern Ethiopia, famous for its eleven monolithic churches built in the 12th and 13th centuries. Instead of building from the ground up, builders carved these massive structures directly into solid red volcanic rock. The most iconic is Bete Giyorgis (Church of St. George), carved in the shape of a perfect cross. These subterranean churches are connected by a network of tunnels, trenches, and steps. Today, they remain active places of worship, filled with chanting priests and white-shrouded pilgrims.",
    region: "Africa-ME",
    experienceType: "Antiquity",
    duration: "3 Days",
    difficulty: "Moderate",
    coordinates: { x: 55, y: 51 },
    rating: 4.9,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Lalibela%2C_san_giorgio%2C_esterno_24.jpg/3840px-Lalibela%2C_san_giorgio%2C_esterno_24.jpg",
    galleryImages: [
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582298538104-e22e5404d7aa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "October to March",
    highlights: [
      "Stand before the iconic Bete Giyorgis church, carved in a cross shape",
      "Traverse the dark underground tunnels connecting the rock sanctuaries",
      "Observe early morning Coptic Christian chanting ceremonies",
      "Hike to the mountain monastery of Asheton Maryam"
    ],
    luxuryStay: "Mezena Resort (Luxury stone bungalows set on a hillside overlooking the Lalibela valley)",
    adventurerTip: "Hire a certified local guide at the entrance. The church complex is a maze, and having a guide will help you understand the deep history and find the hidden tunnel entrances."
  },
  {
    id: "lake-malawi",
    name: "Lake Malawi",
    tagline: "The Lake of Stars",
    description: "A massive freshwater lake with crystal-clear waters, home to hundreds of colorful cichlid fish and quiet islands.",
    longDescription: "Lake Malawi is one of the African Great Lakes, located between Malawi, Mozambique, and Tanzania. Known as the 'Lake of Stars' due to the lights of fishermen's lanterns at night, it is famous for having the highest number of fish species of any lake in the world, including hundreds of colorful cichlid fish found nowhere else. The water is incredibly clear and calm, making it look and feel like a tropical ocean but without salt or tides. Visitors can kayak to remote granite islands, swim in clear water, and enjoy quiet sandy beaches.",
    region: "Africa-ME",
    experienceType: "Marine",
    duration: "4-5 Days",
    difficulty: "Easy",
    coordinates: { x: 54, y: 63 },
    rating: 4.8,
    image: "/lake_malawi_real.png",
    galleryImages: [
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "May to October",
    highlights: [
      "Snorkel with hundreds of colorful native cichlid fish",
      "Kayak to the uninhabited, granite Domwe Island",
      "Paddleboard through the calm waters of Cape Maclear",
      "Observe fish eagles hunting from the lakeside trees"
    ],
    luxuryStay: "Kaya Mawa Lodge (Eco-luxury stone villas built into the cliffs of Likoma Island)",
    adventurerTip: "Make sure to take a boat trip to Likoma Island. It features a massive, historic stone cathedral built in the early 20th century that is still active and incredibly beautiful."
  },
  {
    id: "wadi-rum",
    name: "Wadi Rum",
    tagline: "The Valley of the Moon",
    description: "A dramatic desert valley featuring red sandstone canyons, natural stone arches, and ancient Nabataean petroglyphs.",
    longDescription: "Wadi Rum, also known as the Valley of the Moon, is a spectacular desert valley cut into the sandstone and granite rock in southern Jordan. It features a stunning desert landscape of red sand dunes, sheer rock cliffs, deep narrow canyons, and natural stone arches. The area has been inhabited by human civilizations since prehistoric times, leaving behind ancient petroglyphs, inscriptions, and temples. Today, visitors can experience Bedouin hospitality, explore the dunes in 4x4s, and stay in desert dome camps under the stars.",
    region: "Africa-ME",
    experienceType: "Volcanic",
    duration: "2-3 Days",
    difficulty: "Easy",
    coordinates: { x: 53, y: 43 },
    rating: 4.9,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Mountain_in_Wadi_Rum%2C_Jordan.jpg",
    galleryImages: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582298538104-e22e5404d7aa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "March to May & September to November",
    highlights: [
      "Explore the red desert dunes and canyons by 4x4 vehicle",
      "Hike to the natural sandstone arches of Burdha and Um Frouth",
      "Discover ancient petroglyphs in the Khazali Canyon",
      "Enjoy tea and traditional Bedouin dining in a desert camp"
    ],
    luxuryStay: "Wadi Rum Bubble Domes (Luxury geodesic dome tents with private decks and panoramic desert views)",
    adventurerTip: "Make sure to do a stargazing tour. The desert has almost zero light pollution, and the night sky is incredibly clear, showing the Milky Way in spectacular detail."
  },
  {
    id: "south-georgia",
    name: "South Georgia Island",
    tagline: "The Serengeti of the Southern Ocean",
    description: "A remote sub-Antarctic island covered in glaciers, home to millions of king penguins, elephant seals, and whaling history.",
    longDescription: "South Georgia Island is a mountainous, glacier-covered island in the southern Atlantic Ocean. Often described as the 'Serengeti of the Southern Ocean,' it is one of the most important breeding sites for wildlife in the world. Visitors can stand on beaches packed with hundreds of thousands of king penguins, watch massive southern elephant seals battle for territory, and explore the abandoned, rusting historic whaling stations of Grytviken, where the legendary explorer Sir Ernest Shackleton is buried.",
    region: "Polar",
    experienceType: "Marine",
    duration: "6-8 Days",
    difficulty: "Challenging",
    coordinates: { x: 38, y: 86 },
    rating: 4.9,
    image: "/south_georgia_real.png",
    galleryImages: [
      "https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1483168527879-c66136b56105?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "November to March (Southern Summer)",
    highlights: [
      "See massive king penguin colonies numbering in the hundreds of thousands",
      "Observe giant elephant seals and Antarctic fur seals",
      "Visit Grytviken and the grave of explorer Sir Ernest Shackleton",
      "Cruise past towering glaciers and floating blue icebergs"
    ],
    luxuryStay: "Antarctic Expedition Cruise Suite (Bespoke luxury suite on a polar expedition vessel with private balcony and expert naturalists)",
    adventurerTip: "Visiting requires booking a specialized polar expedition cruise. Look for vessels with zodiac landing craft and small passenger counts (under 200) to ensure maximum time ashore."
  },
  {
    id: "scoresby-sund",
    name: "Scoresby Sund",
    tagline: "The Largest Fjord System on Earth",
    description: "A massive, remote fjord system in eastern Greenland filled with towering basalt cliffs, massive glaciers, and icebergs.",
    longDescription: "Scoresby Sund is the largest and longest fjord system in the world, cutting over 210 miles into eastern Greenland. The fjords are framed by vertical cliffs of basalt rising up to 6,000 feet, which dwarf the massive icebergs floating in the calm, cold waters. The region is home to Ittoqqortoormiit, one of the most remote inhabited settlements on Earth. Visitors can navigate the labyrinth of ice-choked fjords, watch glaciers calve massive walls of ice, and spot Arctic wildlife like muskoxen and narwhals.",
    region: "Polar",
    experienceType: "Marine",
    duration: "5-7 Days",
    difficulty: "Challenging",
    coordinates: { x: 45, y: 7 },
    rating: 4.9,
    image: "/scoresby_sund_real.png",
    galleryImages: [
      "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1483168527879-c66136b56105?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "July to September",
    highlights: [
      "Navigate the world's largest fjord system by zodiac or kayak",
      "See icebergs the size of city blocks drifting in the water",
      "Visit the remote Inuit hunting village of Ittoqqortoormiit",
      "Spot Arctic wildlife including muskoxen, seals, and narwhals"
    ],
    luxuryStay: "Scoresby Sund Expedition Yacht (Private luxury ice-breaker yacht with helicopter deck and gourmet dining)",
    adventurerTip: "Late August and September are the best times to visit if you wish to see the northern lights dancing over the massive icebergs, as the summer midnight sun begins to fade into dark nights."
  },
  {
    id: "deception-island",
    name: "Deception Island",
    tagline: "The Sunken Volcanic Caldera of the Far South",
    description: "An active volcanic island in the South Shetland Islands, featuring a flooded caldera accessible by ship and geothermal black sand beaches.",
    longDescription: "Deception Island is one of the most unusual places in Antarctica. It is the flooded caldera of an active volcano, forming a ring-shaped island with a narrow opening known as Neptune's Bellows. Ships can sail directly into the center of the volcano. The island is famous for its black sand beaches, geothermal hot springs that steam in the freezing air, and the decaying ruins of early 20th-century whaling stations and scientific research bases that were abandoned during volcanic eruptions.",
    region: "Polar",
    experienceType: "Volcanic",
    duration: "4-5 Days",
    difficulty: "Challenging",
    coordinates: { x: 33, y: 91 },
    rating: 4.9,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Deception_island.jpg",
    galleryImages: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582298538104-e22e5404d7aa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1483168527879-c66136b56105?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "December to February",
    highlights: [
      "Sail through Neptune's Bellows into the flooded volcanic caldera",
      "Relax on steaming geothermal black sand beaches at Whalers Bay",
      "Explore abandoned historic whaling stations and research bases",
      "Spot chinstrap penguins nesting on the outer volcanic cliffs"
    ],
    luxuryStay: "Antarctic Expedition Suite (Luxury stateroom on a boutique expedition vessel with private veranda and butler service)",
    adventurerTip: "Take the polar plunge! Whalers Bay is one of the few places in Antarctica where you can swim in water warmed slightly by geothermal heat, though it's still freezing."
  },
  {
    id: "wrangel-island",
    name: "Wrangel Island",
    tagline: "The Last Sanctuary of the Mammoth",
    description: "A remote, mountainous island in the Arctic Ocean, home to the world's highest density of polar bear dens and Pacific walruses.",
    longDescription: "Wrangel Island is a mountainous island located in the Arctic Ocean, between the Chukchi and East Siberian seas. Famous as the last place on Earth where woolly mammoths survived (until about 4,000 years ago), it is a UNESCO World Heritage site and a critical sanctuary for Arctic wildlife. It has the highest concentration of polar bear maternity dens in the world and is the primary calving ground for Pacific walruses, which pack its rocky beaches in the tens of thousands. The island is also home to muskoxen, reindeer, and millions of nesting seabirds.",
    region: "Polar",
    experienceType: "Marine",
    duration: "6-8 Days",
    difficulty: "Extreme",
    coordinates: { x: 91, y: 8 },
    rating: 4.9,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/%D0%9D%D0%B8%D0%B7%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%87%D0%BD%D0%BE%D1%81%D1%82%D1%8C_%D0%BD%D0%B0%D0%B4_%D0%A1%D0%BE%D0%BC%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%BC%D0%B8_%D0%B3%D0%BE%D1%80%D0%B0%D0%BC%D0%B8.jpg/3840px-%D0%9D%D0%B8%D0%B7%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%87%D0%BD%D0%BE%D1%81%D1%82%D1%8C_%D0%BD%D0%B0%D0%B4_%D0%A1%D0%BE%D0%BC%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%BC%D0%B8_%D0%B3%D0%BE%D1%80%D0%B0%D0%BC%D0%B8.jpg",
    galleryImages: [
      "https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1483168527879-c66136b56105?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "August",
    highlights: [
      "Spot polar bears patrolling the coast and mountain tundra",
      "Witness massive walrus rookeries containing thousands of animals",
      "Walk through fossil beds containing woolly mammoth tusks",
      "Explore pristine, glaciated valleys and mountain pass tundra"
    ],
    luxuryStay: "Arctic Icebreaker Expedition Cabin (Private deluxe cabin on a polar research-class vessel with onboard helicopter and naturalists)",
    adventurerTip: "Visiting Wrangel Island is extremely restricted and requires government permits. Only a few tourist vessels visit the island each year, so bookings must be made over a year in advance."
  },
  {
    id: "baffin-island",
    name: "Baffin Island",
    tagline: "The Soaring Granite Cliffs of the Arctic",
    description: "Canada's largest island, home to towering granite peaks like Mount Thor and Auyuittuq's icy wilderness.",
    longDescription: "Baffin Island is a massive wilderness in northeastern Canada, located in the territory of Nunavut. The island is famous for its dramatic alpine scenery, centered around Auyuittuq National Park (meaning 'the land that never melts'). Here, vertical granite peaks rise out of icy fjords, including Mount Thor, which features the Earth's greatest vertical drop at 4,101 feet. Visitors can trek through the Akshayuk Pass, travel across the sea ice by snowmobile, and witness the rich culture of the local Inuit communities.",
    region: "Polar",
    experienceType: "Forest",
    duration: "5-7 Days",
    difficulty: "Extreme",
    coordinates: { x: 34, y: 10 },
    rating: 4.8,
    image: "/baffin_island_real.png",
    galleryImages: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1483168527879-c66136b56105?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "July to August (Hiking) or March to May (Winter travel)",
    highlights: [
      "Stand before Mount Thor, the world's steepest vertical drop",
      "Trek through the Akshayuk Pass in Auyuittuq National Park",
      "Search for narwhals, bowhead whales, and polar bears at the ice edge",
      "Learn about traditional Inuit culture and dog sledding"
    ],
    luxuryStay: "Baffin Arctic Basecamp (Luxury heated yurt domes with glass roofs and local guides)",
    adventurerTip: "Trekking in Auyuittuq is a true wilderness experience with no facilities or cell coverage. You must be completely self-sufficient and register with Parks Canada rangers before entry."
  },
  {
    id: "disko-bay",
    name: "Disko Bay",
    tagline: "The Iceberg Factory of the West",
    description: "A coastal bay in western Greenland famous for massive icebergs calved from the Jakobsbavn Glacier.",
    longDescription: "Disko Bay is a wide bay off the coast of western Greenland, centered around the Ilulissat Icefjord, a UNESCO World Heritage site. The fjord is fed by the Jakobshavn Glacier, the most productive glacier in the Northern Hemisphere, which calves massive icebergs that drift slowly through the bay. Visitors can sail among these towering sculptures of white and blue ice, kayak in the quiet waters, and walk along the coastal boardwalks of Ilulissat to see the ice fjord from land.",
    region: "Polar",
    experienceType: "Marine",
    duration: "3-4 Days",
    difficulty: "Easy",
    coordinates: { x: 41, y: 8 },
    rating: 4.9,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Disko-bay-icebergs.jpg/3840px-Disko-bay-icebergs.jpg",
    galleryImages: [
      "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1483168527879-c66136b56105?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "June to September",
    highlights: [
      "Sail among massive blue icebergs in Disko Bay at midnight",
      "Hike along the Ilulissat Icefjord boardwalks",
      "Spot humpback and fin whales feeding near the ice",
      "Explore the historic settlement of Ilulissat"
    ],
    luxuryStay: "Hotel Arctic Ilulissat (Luxury hotel overlooking the ice fjord, featuring heated aluminum igloo rooms)",
    adventurerTip: "Take a boat tour during the midnight sun. The low golden light hits the icebergs and turns them pink, orange, and gold, offering a magical, silent light show."
  },
  {
    id: "lemaire-channel",
    name: "Lemaire Channel",
    tagline: "The Kodak Gap of the Frozen Continent",
    description: "A narrow, steep-sided channel between the Antarctic Peninsula and Booth Island, famed for its mountain walls and reflections.",
    longDescription: "The Lemaire Channel is a narrow passage that runs between Kiev Peninsula on the Antarctic mainland and Booth Island. Often nicknamed the 'Kodak Gap' due to its incredible photogenic beauty, the channel is just 5 miles long and less than a mile wide at its narrowest point. It is framed by sheer, snow-draped mountain peaks rising over 3,000 feet straight out of the water, which reflects them perfectly on calm days. Cruising through the channel requires navigating past floating icebergs and chunks of sea ice.",
    region: "Polar",
    experienceType: "Marine",
    duration: "4-5 Days",
    difficulty: "Challenging",
    coordinates: { x: 32, y: 93 },
    rating: 4.9,
    image: "/lemaire_channel_real.png",
    galleryImages: [
      "https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1483168527879-c66136b56105?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "December to February",
    highlights: [
      "Cruise through the narrow, steep-walled Lemaire Channel",
      "Observe crab-eater and leopard seals resting on ice floes",
      "Spot humpback, minke, and killer whales in the deep water",
      "See massive glaciers dropping ice directly into the passage"
    ],
    luxuryStay: "Boutique Polar Vessel Owner's Suite (Deluxe suite on a luxury exploration vessel, featuring floor-to-ceiling windows)",
    adventurerTip: "Make sure to stand on the ship's bow rather than inside. The feeling of the cold wind, the sound of the ship pushing aside chunks of ice, and the massive scale of the rock walls are best experienced outdoors."
  },
  {
    id: "churchill",
    name: "Churchill",
    tagline: "The Polar Bear Capital of the World",
    description: "A remote town on Hudson Bay, Manitoba, famous for polar bear migrations and summer beluga whale encounters.",
    longDescription: "Churchill is a small town located on the shores of Hudson Bay in northern Manitoba, Canada. Accessible only by train or plane, it is famous as the 'Polar Bear Capital of the World.' Every autumn, polar bears gather along the coast, waiting for the bay to freeze over so they can hunt seals. Visitors can travel out onto the tundra in specialized Tundra Buggies to observe these massive predators up close. In summer, the Churchill River estuary is flooded by thousands of friendly, singing beluga whales.",
    region: "Polar",
    experienceType: "Marine",
    duration: "3-4 Days",
    difficulty: "Easy",
    coordinates: { x: 26, y: 18 },
    rating: 4.8,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Churchill%2C_Manitoba_%282010%29.jpg/3840px-Churchill%2C_Manitoba_%282010%29.jpg",
    galleryImages: [
      "https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1483168527879-c66136b56105?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "October to November (Bears) or July to August (Beluga whales & Aurora)",
    highlights: [
      "Observe wild polar bears from a specialized Tundra Buggy",
      "Kayak or snorkel with thousands of singing beluga whales in summer",
      "Watch the Northern Lights dance over the boreal forest",
      "Explore the historic stone ruins of Prince of Wales Fort"
    ],
    luxuryStay: "Lazy Bear Lodge (A classic log lodge handcrafted from local timber, featuring fine wilderness dining)",
    adventurerTip: "If visiting in summer to see belugas, take a boat tour that utilizes a hydrophone. You will be able to hear the whales 'singing' to each other in real-time, which is an amazing experience."
  },
  {
    id: "lapland",
    name: "Lapland",
    tagline: "The Winter Wonderland of the Arctic",
    description: "Finland's northernmost region, characterized by snowy forests, reindeer safaris, and glass igloos under the northern lights.",
    longDescription: "Lapland is Finland's vast, northernmost province, sitting mostly inside the Arctic Circle. Known as a winter wonderland, the region is covered in deep, snow-draped pine forests, frozen lakes, and rolling fells. Visitors can travel through the woods on sleds pulled by huskies or reindeer, experience traditional Finnish wood-fired saunas, and stay in luxury glass igloos designed specifically for watching the Northern Lights directly from bed in complete warmth.",
    region: "Polar",
    experienceType: "Celestial",
    duration: "4-5 Days",
    difficulty: "Easy",
    coordinates: { x: 50, y: 15 },
    rating: 4.9,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Arctic_circle_santa_village.jpg",
    galleryImages: [
      "https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1483168527879-c66136b56105?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "December to March",
    highlights: [
      "Sleep in a glass igloo under the green northern lights",
      "Drive a sled pulled by a team of Siberian huskies",
      "Visit a traditional Sami reindeer farm and ride in a sleigh",
      "Experience a classic Finnish sauna and ice plunge"
    ],
    luxuryStay: "Levin Iglut (Premium glass igloos perched on a cliffside Fell with panoramic sky views and private hot tubs)",
    adventurerTip: "Make sure to dress in layers: a wool thermal base, a warm fleece middle layer, and a windproof/waterproof outer layer. Sled dog trips create significant wind chill, so face coverings and goggles are helpful."
  },
  {
    id: "bisti-wilderness",
    name: "Bisti/De-Na-Zin Wilderness",
    tagline: "The Alien Badlands of the High Desert",
    description: "A remote, surreal landscape of uniquely eroded rock formations, hoodoos, and petrified wood in New Mexico.",
    longDescription: "The Bisti/De-Na-Zin Wilderness is a 45,000-acre wilderness area located in San Juan County, New Mexico. Formed by ancient rivers depositing layers of sandstone, shale, coal, and silt, it has been sculpted by wind and water into a maze of hoodoos, spires, and pinnacles. It is one of the most surreal and quiet wilderness regions in North America, offering hikers a chance to wander through a silent, prehistoric-looking maze of colorful, wind-worn rock structures.",
    region: "America",
    experienceType: "Volcanic",
    duration: "2 Days",
    difficulty: "Moderate",
    coordinates: { x: 17, y: 25 },
    rating: 4.8,
    image: "/bisti_wilderness.png",
    galleryImages: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1520117006849-c6b90c7f5df5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "September to November & March to May",
    highlights: [
      "Wander through a maze of eroded rock hoodoos and spires",
      "Explore the uniquely shaped 'Cracked Eggs' rock formations",
      "Search for fragments of petrified wood strewn across the clay",
      "Experience absolute quiet under the dark desert night skies"
    ],
    luxuryStay: "The Farmington El Prado Suites (Bespoke southwestern-style suites with local dining and guided wilderness access)",
    adventurerTip: "There are no marked trails, water sources, or cell service in the wilderness. You must carry a GPS or offline map, plenty of water, and register with the BLM office."
  },
  {
    id: "marfa",
    name: "Marfa",
    tagline: "Mysterious Desert Lights and Minimalist Art",
    description: "A remote West Texas town famed for the mysterious Marfa Lights and its thriving community of minimalist contemporary art.",
    longDescription: "Marfa is a small, remote desert city in West Texas. It is famous for the 'Marfa Lights'—mysterious glowing spheres that appear on the horizon at night, a phenomenon that has puzzled scientists and visitors for decades. In the 1970s, artist Donald Judd moved to Marfa, transforming it into a world-renowned destination for minimalist contemporary art. Today, it offers a stark, beautiful combination of desert landscapes, large-scale outdoor sculptures, and unexplained lights in the dark night sky.",
    region: "America",
    experienceType: "Celestial",
    duration: "2 Days",
    difficulty: "Easy",
    coordinates: { x: 19, y: 29 },
    rating: 4.7,
    image: "/marfa_cover.png",
    galleryImages: [
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "October to April",
    highlights: [
      "Observe the unexplained nighttime phenomenon of the Marfa Lights",
      "Tour the Chinati Foundation's large-scale outdoor concrete art installations",
      "Visit the iconic Prada Marfa art installation in the desert",
      "Stargaze in the high-desert plains with minimal light pollution"
    ],
    luxuryStay: "Hotel Saint George (A sleek, modern luxury hotel in downtown Marfa featuring local artwork and fine dining)",
    adventurerTip: "Visit the Marfa Lights Viewing Center just outside of town after 9 PM. The lights are unpredictable but best seen on clear, dry nights when atmospheric conditions are stable."
  },
  {
    id: "salvation-mountain",
    name: "Salvation Mountain",
    tagline: "The Colorful Desert Monument of Love",
    description: "A massive, vibrant folk-art installation in the California desert, made of straw, adobe, and thousands of gallons of paint.",
    longDescription: "Salvation Mountain is a colorful, large-scale folk-art installation located in the Colorado Desert of Southern California, near Slab City. Built over three decades by local resident Leonard Knight, the mountain is constructed from local adobe clay, straw, and decorated with thousands of gallons of latex paint. It features murals, biblical scriptures, and messages of love, standing as a bright, towering monument in the middle of a barren desert landscape.",
    region: "America",
    experienceType: "Antiquity",
    duration: "1-2 Days",
    difficulty: "Easy",
    coordinates: { x: 13, y: 27 },
    rating: 4.6,
    image: "/salvation_mountain.png",
    galleryImages: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1520117006849-c6b90c7f5df5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "November to March",
    highlights: [
      "Explore the towering, paint-covered clay arches and caverns",
      "See the hand-painted messages and mural art spreading love",
      "Walk the yellow brick road path up to the top of the mountain",
      "Visit the nearby off-grid Slab City art community"
    ],
    luxuryStay: "La Quinta Resort & Club (A historic Spanish-style resort in nearby Palm Springs with luxury casitas and pools)",
    adventurerTip: "The desert temperature gets extremely high in the summer. Visit during the cooler winter months, and always bring plenty of water. The site is maintained by volunteers, so donations are welcomed."
  },
  {
    id: "antelope-canyon",
    name: "Antelope Canyon",
    tagline: "The Cathedral of Sandstone Light",
    description: "A world-famous slot canyon in Arizona, celebrated for its smooth wave-like rock walls and beams of sunlight.",
    longDescription: "Antelope Canyon is a breathtaking slot canyon located on Navajo land east of Page, Arizona. Formed over thousands of years by flash flooding, the canyon features smooth, flowing sandstone walls that resemble waves of red and orange rock. When the sun is high in the summer sky, shafts of light shine down into the narrow passages, illuminating the dust and rock in a spectacular, cathedral-like display of colors ranging from gold to purple.",
    region: "America",
    experienceType: "Volcanic",
    duration: "2 Days",
    difficulty: "Moderate",
    coordinates: { x: 15, y: 24 },
    rating: 4.9,
    image: "/antelope_canyon.png",
    galleryImages: [
      "https://images.unsplash.com/photo-1505245208761-ba872912fac0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "May to September (for midday light beams)",
    highlights: [
      "Walk through the narrow, wave-like sandstone canyon walls",
      "Witness the famous midday shafts of light illuminating the canyon floor",
      "Learn about Navajo history and geology from a native guide",
      "Capture stunning photographs of the red and orange rock formations"
    ],
    luxuryStay: "Amangiri (Ultra-luxury desert resort nestled into canyon landscapes in nearby Utah, featuring pavilion suites)",
    adventurerTip: "You can only enter the canyon with a Navajo-authorized tour guide. Book the midday tour well in advance (3-6 months) if you want to capture the iconic light beams."
  },
  {
    id: "giants-causeway",
    name: "Giant's Causeway",
    tagline: "The Ancient Columns of the Atlantic Coast",
    description: "A UNESCO World Heritage site in Northern Ireland featuring thousands of perfectly interlocking hexagonal basalt columns formed by ancient volcanic activity.",
    longDescription: "Giant's Causeway is a dramatic geological wonder on the north coast of Northern Ireland, consisting of approximately 40,000 interlocking basalt columns formed by an ancient volcanic eruption around 60 million years ago. The columns are so perfectly hexagonal they look as though they were carved by hand. According to local legend, the giant Finn McCool built the causeway as a path to Scotland. The site sits at the foot of dramatic black basalt cliffs, with crashing Atlantic waves on one side and the wild, green coastal headlands stretching away on the other.",
    region: "Europe",
    experienceType: "Volcanic",
    duration: "2-3 Days",
    difficulty: "Easy",
    coordinates: { x: 42, y: 23 },
    rating: 4.8,
    image: "/giants_causeway.png",
    galleryImages: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80"
    ],
    bestTime: "May to September",
    highlights: [
      "Walk across the famous hexagonal basalt columns into the crashing surf",
      "Hike the spectacular cliff-top coastal path for panoramic views",
      "Explore the Organ, the Giant's Boot, and the Wishing Well formations",
      "Visit the nearby ruins of Dunluce Castle perched on a sea cliff"
    ],
    luxuryStay: "Bushmills Inn (A luxury 17th-century coaching inn near the causeway featuring turf fires, whiskey bar, and private garden suites)",
    adventurerTip: "Arrive at sunrise before the car park opens. The causeway is free to walk onto at any time, and the early morning light hitting the wet columns turns them silver — completely unlike the midday tourist experience."
  }
];
