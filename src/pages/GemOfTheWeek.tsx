import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, Compass, ArrowRight, Quote, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { destinations } from '../data/destinations';

const spotlightsData: Record<string, {
  narrative: React.ReactNode;
  quote: string;
  itinerary: { day: string; title: string; description: string }[];
  ecoProtection: string;
}> = {
  trolltunga: {
    quote: "Standing on the tongue, suspended between the fjord and the sky, is a humbling reminder of the geological forces that shaped our world.",
    narrative: (
      <>
        <p>
          Few viewpoints on Earth capture the raw, silent majesty of ancient glaciers like Trolltunga. Rising 700 meters above the deep blue glacial waters of Lake Ringedalsvatnet in the Hardanger region of Norway, this dramatic granite ledge juts horizontally into thin air, defying gravity and offering a window into the ice age that carved these spectacular fjords.
        </p>
        <p>
          Reaching Trolltunga is a journey of endurance and beauty. The 27-kilometer round-trip hike traverses rugged Norwegian highland terrain, taking you through lush birch forests, over massive granite domes, and past deep glacial crevices. Up on the plateau, the landscape transitions into a stark, wind-carved alpine tundra, where snow patches persist even in the height of summer, reflecting the bright northern skies.
        </p>
      </>
    ),
    itinerary: [
      {
        day: "Day 01",
        title: "The Ascent & Mountain Camp",
        description: "Arrive in Odda and begin your guided hike from Skjeggeddal. Climb through birch forests and steep rocky terrain. Reach the high mountain plateau by late afternoon. Set up camp near Trolltunga, enjoying a warm dinner under the midnight sun as the daytime crowds dissipate."
      },
      {
        day: "Day 02",
        title: "Standing on the Tongue",
        description: "Wake up early for first-light photos on Trolltunga with no wait times. Spend the morning exploring the surrounding glacial lakes, crevasses, and viewpoints over Ringedalsvatnet. Hike back across the ancient granite plateaus, taking in the dramatic Norwegian wilderness."
      },
      {
        day: "Day 03",
        title: "Fjord Relaxation",
        description: "Complete your descent to the valley floor. Transfer to the elegant Hardanger Hotel. Unwind with a traditional Nordic sauna overlooking the waters, followed by a celebratory dinner featuring local organic seafood and seasonal Nordic delicacies."
      }
    ],
    ecoProtection: "Trolltunga is a protected high-alpine ecosystem. To preserve the delicate mountain soil, alpine flora, and water purity, wild camping is strictly limited to designated zones, and hikers must adhere to Leave No Trace principles. All waste must be packed out."
  },
  'waitomo-caves': {
    quote: "As the raft glides deeper, the damp ceiling dissolves into a brilliant sapphire cosmos. It is a silent communion with an ancient subterranean night.",
    narrative: (
      <>
        <p>
          It is rare for the human eye to witness complete, unfiltered darkness. Modern lighting structures, cell towers, and urban glow chase shadows from the landscape. But deep beneath New Zealand's North Island, inside the lime-hollowed channels of the Waitomo Labyrinth, darkness remains absolute. It is in this vacuum that one of nature's most dazzling biological lights is born.
        </p>
        <p>
          The Arachnocampa luminosa glowworms are delicate larvae that cling to cave vaults, dangling threads of sticky silk to catch microscopic insects. To lure prey, they emit a cold, chemical light. Individually, a single larva is a faint blue needle. Together, they form stellar nurseries that rival the night skies of the Sahara, reflected in the slow-moving subterranean waterways below.
        </p>
      </>
    ),
    itinerary: [
      {
        day: "Day 01",
        title: "Descending into the Cave",
        description: "Arrive at the luxury Sanctuary Lodge at Waitomo. After a safety briefing, begin your private evening walk into the cave entrance. Walk down into the dry upper cave chambers. Enjoy a candlelit dinner in the Cathedral cavern, listening to the natural sound of the deep stone room."
      },
      {
        day: "Day 02",
        title: "Underground Rafting & Glowworms",
        description: "Put on wetsuits and safety gear for a black water rafting adventure. Walk into the underground river and float through quiet chambers. Turn off your headlights and float silently in the Glowworm Grotto, watching thousands of glowing blue worms light up the ceiling like stars. End the day with a relaxing massage back at the lodge."
      },
      {
        day: "Day 03",
        title: "Valley Hikes & Forest Views",
        description: "Start your morning with a fresh breakfast overlooking the misty valleys. Take a guided hike through the beautiful forests around the caves. Learn about the programs protecting the glowworms and the cave's natural environment. Depart in the afternoon by private helicopter."
      }
    ],
    ecoProtection: "Waitomo Glowworm Grotto is a protected biological monument. Private access is capped at 12 visitors per week to prevent heat and moisture build-up from altering larvae life cycles. All excursions are conducted on non-motorized rafts."
  },
  'raja-ampat': {
    quote: "Diving in Raja Ampat feels like entering the world's most vibrant watercolor painting, where the colors are alive and ever-changing.",
    narrative: (
      <>
        <p>
          Located off the northwest tip of Bird's Head Peninsula in Papua, Indonesia, Raja Ampat (the Four Kings) is an archipelago comprising over 1,500 small islands, cays, and shoals. It is widely considered the global epicenter of marine biodiversity, boasting more species of fish, coral, and mollusks than anywhere else on earth.
        </p>
        <p>
          The limestone karst islands rise like emerald mushrooms from the crystal-clear turquoise waters. Below the surface, coral gardens are teeming with life, from microscopic pygmy seahorses to giant manta rays gliding majestically through the deep blue channels.
        </p>
      </>
    ),
    itinerary: [
      {
        day: "Day 01",
        title: "Karst Navigation",
        description: "Board your private luxury liveaboard yacht. Cruise through the labyrinth of limestone karsts in the Kabui Bay. Paddleboard through hidden lagoons and watch the sunset from a secluded sandy beach."
      },
      {
        day: "Day 02",
        title: "Marine Exploration",
        description: "Dive or snorkel at Cape Kri, holding the world record for the most fish species recorded on a single dive. Discover pristine coral reefs and swim alongside gentle sea turtles and manta rays."
      },
      {
        day: "Day 03",
        title: "Pianemo Viewpoint",
        description: "Climb the wooden steps of Pianemo Island for the iconic panoramic view of star-shaped karst islands. Conclude the tour with a beachside traditional feast under the stars."
      }
    ],
    ecoProtection: "Raja Ampat is a Marine Protected Area (MPA). All visitors are required to pay a conservation fee, stay at eco-resorts or certified liveboards, use reef-safe sunscreen, and strictly avoid touching or damaging the fragile coral reefs."
  },
  'svalbard-northern-camp': {
    quote: "Beneath the dancing auroral crown, the Arctic quiet speaks in whispers of ice and ancient solar winds.",
    narrative: (
      <>
        <p>
          Deep within the Arctic Circle on the Spitsbergen archipelago, Svalbard is a raw, snow-carved frontier where the wilderness rules. During the long polar nights, the sun never rises, wrapping the glaciers and mountains in a deep sapphire twilight that sets the stage for the world's most vivid auroral activity.
        </p>
        <p>
          The Midnight Hearth camp features custom heated glass geodome structures designed to offer panoramic views of the polar sky. Guests can fall asleep watching the green and violet aurora curtains dance overhead, while absolute quiet envelops the frozen valleys outside.
        </p>
      </>
    ),
    itinerary: [
      {
        day: "Day 01",
        title: "Polar Night Dog Sledding",
        description: "Arrive in Longyearbyen and take an active dog sledding expedition into the Bolterdalen valley. Guide your team of huskies under the starlit sky. Settle into your luxury geodome for a warm Nordic meal."
      },
      {
        day: "Day 02",
        title: "Glacier Ice Caves Exploration",
        description: "Embark on a snowcat trek to a massive glacier. Headlamp in hand, descend into the blue ice caves carved by summer meltwater. Spend the evening on an aurora photo safari led by professional naturalists."
      },
      {
        day: "Day 03",
        title: "Ghost Town Snowmobile Trek",
        description: "Snowmobile across frozen fjords to the abandoned Russian mining town of Pyramiden. Savor hot drinks in the shadow of massive mountains, and return to the hearth for a final polar evening."
      }
    ],
    ecoProtection: "Svalbard's high-arctic tundra is a highly fragile environment. Guests must keep to designated snowmobile tracks, use low-emission engines, respect local wildlife, and strictly follow polar bear safety boundaries."
  },
  'havasu-falls': {
    quote: "A turquoise dream suspended in red sandstone, where the roar of water sings the ancient song of the Canyon.",
    narrative: (
      <>
        <p>
          Hidden within the deep canyons of Arizona, Havasu Falls is a legendary turquoise oasis located on the sovereign land of the Havasupai Tribe. The striking blue-green waters, colored by high levels of calcium carbonate, flow over massive red sandstone cliffs, creating a spectacular contrast against the desert walls.
        </p>
        <p>
          Reaching Havasu Falls requires a challenging 10-mile trek down through rocky canyon walls. The reward is a secluded sanctuary of travertine pools, lush green grapevines, and the thundering sound of water falling into deep pools.
        </p>
      </>
    ),
    itinerary: [
      {
        day: "Day 01",
        title: "The Sandstone Descent",
        description: "Begin your early morning hike from Hualapai Hilltop. Walk through winding canyon paths to the remote Havasupai Village. Register with the tribal council and set up camp under cottonwood trees near the falls."
      },
      {
        day: "Day 02",
        title: "Mooney & Beaver Falls",
        description: "Walk down the steep, cliff-face ladders to Mooney Falls. Continue trekking through the canyon floor, crossing streams and lush vegetation, to reach the tiered travertine pools of Beaver Falls. Swim and relax."
      },
      {
        day: "Day 03",
        title: "Canyon Ascent & Departure",
        description: "Wake early for a quiet morning swim at Havasu Falls before the sun hits the valley floor. Pack up your gear and begin the challenging uphill hike back to the trailhead, or transfer via helicopter."
      }
    ],
    ecoProtection: "Havasu Falls is located on Havasupai Tribal land. Visitors must strictly adhere to tribal laws, respect sacred grounds, pack out all trash, and follow a strict zero-chemical policy in the natural streams."
  },
  'faroe-islands': {
    quote: "Where green-cloaked volcanic cliffs rise like giants out of the cold, churning North Atlantic spray.",
    narrative: (
      <>
        <p>
          The Faroe Islands rise like basalt fortresses out of the cold waters of the North Atlantic. This rugged archipelago is characterized by steep, green-cloaked volcanic cliffs, dramatic waterfalls emptying directly into the ocean, and deep, quiet fjords carved by ancient glaciers.
        </p>
        <p>
          Due to their isolated position and stormy climate, the islands remain a pristine wilderness. Traditional turf-roofed villages sit in the valleys, and millions of seabirds, including Atlantic puffins, nest on the sheer sea cliffs.
        </p>
      </>
    ),
    itinerary: [
      {
        day: "Day 01",
        title: "Gásadalur & Múlafossur",
        description: "Arrive at Vágar Airport and drive directly to Gásadalur. Hike the old postal path over the mountain. Watch the iconic Múlafossur waterfall plunge into the ocean. Settle into a traditional turf cottage."
      },
      {
        day: "Day 02",
        title: "Mykines Bird Cliffs",
        description: "Take a morning ferry to Mykines, the westernmost island. Hike to the lighthouse, walking among thousands of nesting puffins. Savor fresh Faroese seafood and learn about local wool-weaving traditions."
      },
      {
        day: "Day 03",
        title: "Sørvágsvatn Lake Over Ocean",
        description: "Hike along the edge of Lake Sørvágsvatn, which appears to float hundreds of feet directly above the ocean. Walk to the steep Bøsdalafossur cliffs and take in the panoramic views of the North Atlantic."
      }
    ],
    ecoProtection: "The Faroese volcanic soil is highly susceptible to erosion. All visitors must stick to designated sheep-trails, pay local conservation fees, and keep a respectful distance from nesting seabird colonies."
  },
  'lofoten-islands': {
    quote: "Red fishing cabins clustered under soaring granite peaks, reflected in crystal-clear polar waters.",
    narrative: (
      <>
        <p>
          Located above the Arctic Circle in Norway, the Lofoten Islands are famous for their dramatic alpine scenery. Sheer granite mountains rise directly out of the ocean, protecting quiet, crystal-clear fjords and pristine sandy beaches.
        </p>
        <p>
          Lofoten retains a strong connection to its Viking and fishing history. Red fishing cabins (rorbuer) line the harbors, and the island is filled with local art galleries, organic bakeries, and outdoor activities like climbing and sea kayaking.
        </p>
      </>
    ),
    itinerary: [
      {
        day: "Day 01",
        title: "Rorbu Cabin & Reinefjord",
        description: "Arrive in Leknes and transfer to the historic fishing village of Reine. Settle into a luxury renovated rorbu cabin. Take a quiet boat cruise through the sheer Reinefjord, admiring the granite peaks."
      },
      {
        day: "Day 02",
        title: "Reinebringen Peak Climb",
        description: "Climb the 1,560 stone steps up to Reinebringen. Savor the panoramic views of the archipelago and the fjord below. Spend the afternoon sea kayaking along the rocky coastlines."
      },
      {
        day: "Day 03",
        title: "Haukland Beach & Bonfire",
        description: "Hike along the white sands of Haukland Beach. Swim in the cold Arctic waters and enjoy a warm bonfire. Dine on local cod and organic ingredients at a traditional restaurant in Henningsvær."
      }
    ],
    ecoProtection: "Lofoten's marine and coastal ecosystems are delicate. Visitors are required to carry out all waste, use eco-friendly sea transit, and respect local sheep-grazing zones on the beaches."
  },
  'plitvice-lakes': {
    quote: "A cascading limestone labyrinth of sixteen crystal lakes, carved by moss and minerals over millennia.",
    narrative: (
      <>
        <p>
          Deep in the karst mountains of Croatia, Plitvice Lakes is a breathtaking system of 16 natural terraced lakes. The lakes are connected by a series of beautiful waterfalls and streams, carved out over thousands of years by the deposition of calcium carbonate (tufa barriers).
        </p>
        <p>
          The water changes colors constantly, shifting from bright emerald green to turquoise and deep blue depending on the mineral content and sunlight. Visitors walk along wooden boardwalks that wind over the water, through lush beech and spruce forests.
        </p>
      </>
    ),
    itinerary: [
      {
        day: "Day 01",
        title: "Upper Lakes Walkway",
        description: "Arrive at the park and begin your exploration of the Upper Lakes. Walk along the wooden paths built directly over the crystal waters. Take an eco-friendly electric boat across Lake Kozjak."
      },
      {
        day: "Day 02",
        title: "Lower Lakes & Veliki Slap",
        description: "Walk down through the limestone canyons of the Lower Lakes. Visit the massive Veliki Slap, Croatia's tallest waterfall. Explore the deep caves carved in the canyon walls and photograph the emerald pools."
      },
      {
        day: "Day 03",
        title: "Forest Trails Hike",
        description: "Hike the quiet forest trails surrounding the lakes, looking for rare orchids and wildlife. Enjoy a traditional dinner at a local village, featuring organic honey, cheeses, and roasted meats."
      }
    ],
    ecoProtection: "Plitvice Lakes is a highly sensitive tufa-forming ecosystem. To preserve the water purity and protect the fragile barriers, swimming is strictly prohibited, and visitors must stay on the wooden pathways."
  },
  socotra: {
    quote: "An island lost in time, where Dragon's Blood trees stand like umbrellas against the Arabian wind.",
    narrative: (
      <>
        <p>
          Located in the Indian Ocean off the Horn of Africa, Socotra is one of the most isolated landforms on Earth. Due to millions of years of isolation, the island has developed a unique ecosystem: over a third of its plant life is found nowhere else on the planet.
        </p>
        <p>
          The most famous plant is the Dragon's Blood tree, which produces a red sap and looks like a flying saucer. The island features spectacular landscapes, from sheer limestone plateaus and deep gorges to massive white sand dunes that drop into the turquoise sea.
        </p>
      </>
    ),
    itinerary: [
      {
        day: "Day 01",
        title: "Homhil Dragon Forest",
        description: "Arrive in Socotra and drive up to the Homhil Plateau. Walk through forests of Dragon's Blood and bottle trees. Swim in a natural freshwater pool overlooking the Arabian Sea."
      },
      {
        day: "Day 02",
        title: "Qalansiyah & Detwah Lagoon",
        description: "Drive to the western tip and explore the massive Detwah Lagoon. Walk on the white sand dunes, watch stingrays glide in the shallow waters, and enjoy a traditional Bedouin dinner under the stars."
      },
      {
        day: "Day 03",
        title: "Dixam Plateau Gorge",
        description: "Hike into the deep canyon of the Dixam Plateau. Meet local Bedouin shepherds and learn about their language and customs. Camp on the high plateau, surrounded by ancient Dragon's Blood trees."
      }
    ],
    ecoProtection: "Socotra is a UNESCO World Heritage site with highly sensitive endemic flora. Visitors are strictly forbidden from collecting seeds or plants, and must camp in designated eco-camps with local guides."
  },
  'spiti-valley': {
    quote: "A high-altitude desert of barren mountains, where ancient monasteries cling to crumbling cliffs.",
    narrative: (
      <>
        <p>
          High in the Himalayas of northern India, Spiti Valley is a cold desert valley surrounded by massive snow-capped mountains. The region is home to a rich Tibetan Buddhist culture, with ancient white-washed monasteries clinging to sheer cliffs.
        </p>
        <p>
          The landscape is stark and beautiful, with winding rivers, deep gorges, and small villages located at altitudes above 14,000 feet. Spiti is a place of deep silence, clear starry skies, and simple, traditional mountain life.
        </p>
      </>
    ),
    itinerary: [
      {
        day: "Day 01",
        title: "Ascent to Kaza & Key",
        description: "Arrive in Kaza via the winding Spiti River road. Rest and acclimatize. Take an afternoon tour of Key Monastery, the valley's largest temple, and listen to the monks' evening prayers."
      },
      {
        day: "Day 02",
        title: "High Village Fossils Hike",
        description: "Drive to Langza village and search for prehistoric marine fossils. Hike to Hikkim, home to the world's highest post office, and mail a postcard. Stay in a traditional homestay in Komic village."
      },
      {
        day: "Day 03",
        title: "Dhankar Monastery & Lake",
        description: "Explore the spectacular Dhankar Monastery, built on a mud-spire cliff. Hike up to the quiet Dhankar Lake. Savor traditional momos and butter tea, and return to Kaza for departure."
      }
    ],
    ecoProtection: "Spiti is a dry, high-altitude desert with limited water. Visitors must practice extreme water conservation, avoid single-use plastics, and use local homestays to support the mountain communities."
  },
  'deadvlei-sossusvlei': {
    quote: "Black skeleton trees reaching like skeletal hands out of white clay, framed by the world's tallest red dunes.",
    narrative: (
      <>
        <p>
          Located inside the Namib-Naukluft National Park in Namibia, Deadvlei is a stark, white clay pan surrounded by the highest rust-red sand dunes in the world. The pan was formed when the Tsauchab River flooded, allowing camel thorn trees to grow.
        </p>
        <p>
          When the climate changed and dunes blocked the river, the trees died. Today, their black skeletons remain dried and preserved by the hot desert air, standing as a beautiful, dramatic monument against the white clay and orange dunes.
        </p>
      </>
    ),
    itinerary: [
      {
        day: "Day 01",
        title: "Sesriem Canyon Walk",
        description: "Arrive at the desert lodge. Take an afternoon walk through the deep limestone walls of Sesriem Canyon. Drive into the park to watch the sunset paint Dune 45 a deep crimson color."
      },
      {
        day: "Day 02",
        title: "Big Daddy & Deadvlei",
        description: "Wake before dawn and hike up the ridge of Big Daddy, the tallest dune in the area. Run down the sandy face into the white claypan of Deadvlei. Walk among the 900-year-old tree skeletons."
      },
      {
        day: "Day 03",
        title: "Balloon Flight over Desert",
        description: "Take a sunrise hot air balloon flight over the Namib Sand Sea, watching the dunes roll to the Atlantic. Return to the lodge for a champagne breakfast and prepare for departure."
      }
    ],
    ecoProtection: "The Namib sand crusts are ancient and fragile. Visitors must stay on designated paths in Deadvlei, avoid climbing on the historic dry camel thorn trees, and pack out all garbage."
  },
  'south-georgia': {
    quote: "A wild sub-Antarctic cathedral of snow peaks, home to millions of king penguins and massive elephant seals.",
    narrative: (
      <>
        <p>
          South Georgia is a rugged sub-Antarctic island rising sharply from the Southern Ocean. It is a land of massive glaciers, active fjords, and snow-covered mountains, widely considered one of the greatest wildlife sanctuaries in the world.
        </p>
        <p>
          The beaches are packed with millions of king penguins, fur seals, and giant elephant seals. The island is also famous for its history of polar exploration: it is the final resting place of the legendary explorer Sir Ernest Shackleton.
        </p>
      </>
    ),
    itinerary: [
      {
        day: "Day 01",
        title: "Salisbury Plain Rookery",
        description: "Board a zodiac to land at Salisbury Plain. Walk among a massive colony of over 250,000 king penguins. Watch elephant seal bulls fight on the black sand beach."
      },
      {
        day: "Day 02",
        title: "Grytviken Whaling Station",
        description: "Land at the abandoned whaling station of Grytviken. Visit the local museum and the historic church. Walk to the cemetery and toast Sir Ernest Shackleton at his grave site."
      },
      {
        day: "Day 03",
        title: "Gold Harbour Glaciers",
        description: "Cruise into Gold Harbour, where glaciers hang over green tussock grass cliffs. Take a morning zodiac cruise around icebergs, watching gentoo penguins and elephant seals play."
      }
    ],
    ecoProtection: "South Georgia is an isolated sub-Antarctic sanctuary. Visitors must undergo strict bio-security checks to prevent importing invasive seeds, and maintain a 5-meter safety distance from all wildlife."
  },
  'scoresby-sund': {
    quote: "Greenland's silent giant fjords, where house-sized blue icebergs drift past soaring basalt cliffs.",
    narrative: (
      <>
        <p>
          Located on the eastern coast of Greenland, Scoresby Sund is the largest and longest fjord system in the world. The fjord cuts 217 miles into the ice-covered land, surrounded by towering basalt cliffs that rise thousands of feet from the water.
        </p>
        <p>
          The waters are filled with massive, deep-blue icebergs that break off from the Greenland ice sheet. This remote wilderness is home to muskoxen, seals, and narwhals, alongside the isolated Inuit village of Ittoqqortoormiit.
        </p>
      </>
    ),
    itinerary: [
      {
        day: "Day 01",
        title: "Entering the Fjord System",
        description: "Navigate your expedition ship into the mouth of Scoresby Sund. Stand on deck to watch house-sized, glowing blue icebergs drift past the towering dark basalt cliffs."
      },
      {
        day: "Day 02",
        title: "Tundra Hike & Muskoxen",
        description: "Land at Cape Hofmann Halvø. Hike through the red and gold autumn tundra. Spot wild muskoxen grazing on the hills, and enjoy a warm lunch overlooking the icebergs."
      },
      {
        day: "Day 03",
        title: "Ittoqqortoormiit Visit",
        description: "Visit the remote village of Ittoqqortoormiit, one of the most isolated settlements on Earth. Walk among the colorful wooden houses and learn about local hunting and dog-sledding traditions."
      }
    ],
    ecoProtection: "East Greenland is a highly sensitive Arctic wilderness. Ships must use clean fuels, respect local indigenous hunting lands, and maintain strict wildlife protection guidelines."
  },
  'lemaire-channel': {
    quote: "A narrow gateway of glass water, bordered by sheer walls of ice and sleeping humpback whales.",
    narrative: (
      <>
        <p>
          Located off the coast of the Antarctic Peninsula, the Lemaire Channel is a narrow, spectacular strait. Often called the 'Kodak Gap,' the channel is bordered on both sides by vertical mountains and calving glaciers that tower directly over the water.
        </p>
        <p>
          The water is often completely still, reflecting the glaciers like a mirror. Humpback whales sleep in the calm bays, leopard seals rest on drifting ice floes, and thousands of penguins nest on the rocky shores.
        </p>
      </>
    ),
    itinerary: [
      {
        day: "Day 01",
        title: "Entering the Kodak Gap",
        description: "Stand on the ship's bow as it slowly navigates the narrow channel, passing close to towering ice cliffs. Look for humpback whales feeding in the cold waters."
      },
      {
        day: "Day 02",
        title: "Pleneau Bay Zodiac Cruise",
        description: "Take a zodiac cruise through Pleneau Bay's 'iceberg graveyard.' Navigate among massive, wind-carved blue ice structures and spot leopard seals resting on the ice floes."
      },
      {
        day: "Day 03",
        title: "Petermann Island Landing",
        description: "Land on Petermann Island. Walk up to the Gentoo penguin colony nesting on the snow-free rocks. Enjoy panoramic views of the Lemaire Channel before sailing north."
      }
    ],
    ecoProtection: "Antarctica is protected by the Antarctic Treaty. All visitors must strictly adhere to IAATO rules: sanitizing boots, maintaining a 5-meter wildlife distance, and leaving absolutely no trace."
  },
  'antelope-canyon': {
    quote: "Flowing sandstone waves carved by flash floods, illuminated by shafts of golden sunlight.",
    narrative: (
      <>
        <p>
          Located on Navajo Nation land in Arizona, Antelope Canyon is the most famous slot canyon in the world. Carved out over millions of years by flash floods, the canyon is characterized by flowing, wave-like sandstone structures that mimic running water.
        </p>
        <p>
          At certain times of the day, shafts of sunlight shine down into the deep, narrow cracks, illuminating the orange, purple, and red canyon walls like a cathedral of light.
        </p>
      </>
    ),
    itinerary: [
      {
        day: "Day 01",
        title: "Upper Antelope Canyon",
        description: "Meet your licensed Navajo guide and ride to the canyon mouth. Walk through the flat sandy floor of the Upper Canyon. Watch the famous shafts of light pierce the dust rays."
      },
      {
        day: "Day 02",
        title: "Lower Antelope Ladders",
        description: "Walk to Lower Antelope Canyon. Climb down the steep metal ladders into the narrow, winding sandstone slot. Marvel at the intricate textures and wave patterns in the rock walls."
      },
      {
        day: "Day 03",
        title: "Horseshoe Bend Sunset",
        description: "Take a morning boat cruise on Lake Powell to see the water-cut sandstone cliffs. Spend the afternoon hiking to Horseshoe Bend to watch the sunset paint the Colorado River green and orange."
      }
    ],
    ecoProtection: "Antelope Canyon is a sacred Navajo tribal park. Visitors are required to take guided tours with tribal guides, stay within group boundaries, and refrain from touching or drawing on the sandstone walls."
  }


};

const getSpotlightData = (gem: any) => {
  if (spotlightsData[gem.id]) {
    return spotlightsData[gem.id];
  }
  // Fallback dynamic generator
  return {
    quote: gem.tagline || "A quiet journey to a beautiful and secret natural sanctuary.",
    narrative: (
      <>
        <p>{gem.longDescription || gem.description}</p>
        <p>
          Exploring this area offers a rare glimpse into a truly pristine environment. The local trails, viewpoints, and hidden corners provide travelers with an unforgettable experience of silence and solitude.
        </p>
      </>
    ),
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival & Orientation",
        description: `Arrive at the destination area. Meet your local eco-guide for a briefing on the region's geography and environmental guidelines. Settle into your luxury stay.`
      },
      {
        day: "Day 02",
        title: "Guided Highlights Tour",
        description: `Embark on a full-day guided exploration of the main highlights. Enjoy a gourmet picnic lunch prepared with organic local ingredients.`
      },
      {
        day: "Day 03",
        title: "Deeper Exploration & Departure",
        description: `Spend the morning seeking out the quietest spots in the area. Take photos and learn about local conservation efforts. Depart in the afternoon via eco-friendly private transit.`
      }
    ],
    ecoProtection: `This destination is a highly sensitive environment. Visitors must strictly adhere to the adventurer tip: "${gem.adventurerTip || 'Preserve the natural ecosystem.'}". Keep to marked trails and minimize noise to preserve the natural quiet.`
  };
};

export const GemOfTheWeek: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const gemId = searchParams.get('id') || 'trolltunga';
  const gem = destinations.find(d => d.id === gemId) || destinations.find(d => d.id === 'trolltunga') || destinations[0];

  const [activeDay, setActiveDay] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth * 0.75;
      sliderRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Reset active day when the spotlight destination changes
  useEffect(() => {
    setActiveDay(0);
  }, [gem.id]);

  const spotlight = getSpotlightData(gem);

  // Select must-visit destinations (rating === 4.9 and local image) to show in the slideshow
  const otherGems = destinations.filter(d => d.rating === 4.9 && d.image.startsWith('/') && d.id !== gem.id);

  return (
    <div className="min-h-screen bg-dark-bg text-white relative">
      {/* Editorial Header Banner */}
      <section className="relative h-[65vh] w-full flex items-end justify-center overflow-hidden">
        <img
          src={gem.image}
          alt={gem.name}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
        
        <div className="max-w-4xl w-full mx-auto px-6 md:px-12 pb-12 relative z-10 flex flex-col gap-4">
          <span className="px-3.5 py-1 text-[9px] uppercase tracking-widest text-accent-blue-300 font-semibold bg-accent-blue-950/40 border border-accent-blue-500/20 rounded-full w-max flex items-center gap-1.5 font-sans">
            <Calendar className="w-3.5 h-3.5" />
            Issue June 2026 // Special Spotlight
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
            {gem.name}
          </h1>
          <p className="text-gray-300 italic font-serif text-lg md:text-xl font-light">
            "{gem.tagline}"
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
        {/* Editorial Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-accent-blue-500/10 pb-8 mb-12 text-xs font-sans text-gray-500">
          <div className="flex items-center gap-2">
            <img
              src="/aarav_sharma.png"
              alt="Aarav Sharma"
              className="w-10 h-10 rounded-full object-cover border border-accent-blue-500/20"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-white font-sans">Aarav Sharma</span>
              <span className="text-[10px] font-light font-sans">Expedition Lead & Reporter</span>
            </div>
          </div>

          <div className="flex items-center gap-6 font-sans">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-accent-blue-500/40" />
              6 Min Read
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-accent-blue-500/40" />
              {gem.region}
            </span>
          </div>
        </div>

        {/* Narrative Article */}
        <div className="flex flex-col gap-6 font-sans text-gray-300 font-light text-sm md:text-base leading-relaxed mb-16">
          {spotlight.narrative}
          
          <div className="glass-panel p-6 rounded-2xl border-accent-blue-500/10 my-4 flex gap-4 items-start relative overflow-hidden">
            <Quote className="w-12 h-12 text-accent-blue-500/10 shrink-0 absolute -top-1 -left-1" />
            <p className="font-serif italic text-base md:text-lg text-accent-blue-300 relative z-10 leading-relaxed pl-4">
              "{spotlight.quote}"
            </p>
          </div>
        </div>

        {/* DAY BY DAY LOGS */}
        <div className="mb-16">
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-[10px] tracking-[0.3em] uppercase text-accent-blue-400 font-semibold font-sans">
              Travel Plan
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold">
              The Day-by-Day <span className="blue-gradient-text">Plan</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left selector */}
            <div className="lg:col-span-4 flex lg:flex-col gap-3 font-sans">
              {spotlight.itinerary.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDay(idx)}
                  className={`px-4 py-3 text-left rounded-xl text-xs font-semibold uppercase tracking-wider transition-all border cursor-pointer w-full flex items-center justify-between ${
                    activeDay === idx
                      ? 'bg-accent-blue-600/20 border-accent-blue-500 text-white shadow-md'
                      : 'bg-black/20 border-accent-blue-500/5 text-gray-500 hover:text-gray-300'
                  }`}
                >
                  <span>{item.day} // {item.title.split(' ')[0]}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDay === idx ? 'translate-x-0.5' : 'opacity-0'}`} />
                </button>
              ))}
            </div>

            {/* Right log display */}
            <div className="lg:col-span-8 glass-panel p-6 rounded-2xl border-accent-blue-500/10 font-sans min-h-[200px]">
              <span className="text-[10px] uppercase font-bold text-accent-blue-400 block mb-2 font-sans">
                {spotlight.itinerary[activeDay].day} Details
              </span>
              <h4 className="font-serif text-lg font-bold text-white mb-3">
                {spotlight.itinerary[activeDay].title}
              </h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed font-sans">
                {spotlight.itinerary[activeDay].description}
              </p>
            </div>
          </div>
        </div>

        {/* ECOLOGICAL STIPULATION */}
        <div className="glass-panel p-6 rounded-2xl border-accent-blue-500/10 flex gap-4 font-sans items-start mb-16 bg-accent-blue-950/10">
          <ShieldCheck className="w-6 h-6 text-accent-blue-400 shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] tracking-wider uppercase text-accent-blue-400 font-bold font-sans">Nature Protection</span>
            <h4 className="text-xs font-medium text-white font-sans">We protect these fragile environments</h4>
            <p className="text-[11px] text-gray-400 font-light leading-relaxed font-sans">
              {spotlight.ecoProtection}
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 pt-8 border-t border-accent-blue-500/10">
          <button
            onClick={() => navigate(`/explore?gem=${gem.id}`)}
            className="px-8 py-3.5 rounded-xl border border-accent-blue-500/20 bg-accent-blue-950/20 hover:bg-accent-blue-900/40 text-xs font-semibold uppercase tracking-widest text-accent-blue-300 flex items-center justify-center gap-2 group cursor-pointer font-sans"
          >
            View Details
            <Compass className="w-4 h-4 text-accent-blue-400 group-hover:rotate-45 transition-transform duration-500" />
          </button>
          <button
            onClick={() => navigate(`/contact?gem=${gem.id}`)}
            className="blue-shimmer-btn px-8 py-3.5 rounded-xl text-white font-semibold text-xs tracking-widest uppercase hover:scale-[1.02] transition-all cursor-pointer flex items-center gap-1.5 shadow-md shadow-accent-blue-950/40 font-sans"
          >
            Book This Journey
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* MORE SPOTLIGHTS SECTION */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto border-t border-accent-blue-500/10">
        <div className="flex flex-col gap-2 mb-8">
          <span className="text-[10px] tracking-[0.3em] uppercase text-accent-blue-400 font-semibold font-sans">
            Curated Spotlights
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-bold">
            More Featured <span className="blue-gradient-text">Gems</span>
          </h3>
        </div>

        <div className="relative group/slider">
          {/* Left Navigation Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-[75%] bg-black/60 hover:bg-black/85 text-white flex items-center justify-center rounded-r-2xl border-y border-r border-accent-blue-500/15 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 cursor-pointer backdrop-blur-sm"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-8 h-8 text-accent-blue-400 hover:text-white transition-colors" />
          </button>

          {/* Scroll Track */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-none py-4 px-2 scroll-smooth"
          >
            {otherGems.map((otherGem) => (
              <div
                key={otherGem.id}
                onClick={() => {
                  navigate(`/gem-of-the-week?id=${otherGem.id}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="shrink-0 w-72 h-80 glass-panel glass-panel-hover rounded-2xl overflow-hidden cursor-pointer flex flex-col group relative transition-all duration-500 hover:scale-[1.05] hover:z-20 hover:shadow-2xl hover:shadow-accent-blue-500/10 hover:border-accent-blue-400/40"
              >
                <img
                  src={otherGem.image}
                  alt={otherGem.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.4] group-hover:brightness-[0.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end gap-1.5 z-10">
                  <span className="text-[9px] uppercase tracking-wider text-accent-blue-400 font-sans">
                    {otherGem.region}
                  </span>
                  <h4 className="font-serif text-lg text-white group-hover:text-accent-blue-300 transition-colors font-sans font-bold">
                    {otherGem.name}
                  </h4>
                  <p className="text-[11px] text-gray-400 font-light line-clamp-2 leading-relaxed font-sans">
                    {otherGem.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-[75%] bg-black/60 hover:bg-black/85 text-white flex items-center justify-center rounded-l-2xl border-y border-l border-accent-blue-500/15 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 cursor-pointer backdrop-blur-sm"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-8 h-8 text-accent-blue-400 hover:text-white transition-colors" />
          </button>
        </div>
      </section>
    </div>
  );
};
