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
    ecoProtection: "Raja Ampat is a Marine Protected Area (MPA). All visitors are required to pay a conservation fee, stay at eco-resorts or certified liveaboards, use reef-safe sunscreen, and strictly avoid touching or damaging the fragile coral reefs."
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
