import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X, MapPin, Star, Clock, CalendarRange, Award, Hotel, Compass, Info, Sparkles } from 'lucide-react';
import { destinations } from '../data/destinations';
import type { Destination } from '../data/destinations';
import { DestinationCard } from '../components/DestinationCard';

const insiderInfo: Record<string, {
  funFact: string;
  rarity: number;
  crowd: 'Isolated' | 'Minimal' | 'Moderate' | 'High';
  adventureIndex: 'Challenging' | 'Moderate' | 'Extreme' | 'Leisurely';
}> = {
  trolltunga: {
    funFact: "Trolltunga translates to 'Troll's Tongue' in Norwegian. The rock was formed during the ice age about 10,000 years ago when glacial water froze in mountain crevices and broke off large rock pieces.",
    rarity: 88,
    crowd: 'Moderate',
    adventureIndex: 'Extreme'
  },
  'waitomo-caves': {
    funFact: "The glowworms found in Waitomo Caves (Arachnocampa luminosa) are unique to New Zealand. Their blue-green glow is actually a chemical reaction occurring in their waste-filtering organ!",
    rarity: 92,
    crowd: 'Moderate',
    adventureIndex: 'Moderate'
  },
  'raja-ampat': {
    funFact: "Raja Ampat is home to 75% of the world's known coral species. Scientists believe the region's reefs are uniquely resilient to rising ocean temperatures, acting as a global seed bank.",
    rarity: 98,
    crowd: 'Minimal',
    adventureIndex: 'Challenging'
  },
  'svalbard-northern-camp': {
    funFact: "In Svalbard, it is legally required to carry a rifle for polar bear protection when leaving settlements. Also, dying is technically forbidden here because the permafrost prevents bodies from decomposing!",
    rarity: 96,
    crowd: 'Isolated',
    adventureIndex: 'Extreme'
  },
  'havasu-falls': {
    funFact: "The spectacular turquoise water color is caused by high levels of dissolved calcium carbonate (lime) which reflects sunlight. The pools are constantly changing shape as minerals build up new travertine dams.",
    rarity: 94,
    crowd: 'Minimal',
    adventureIndex: 'Challenging'
  },
  'faroe-islands': {
    funFact: "There are more sheep than humans on the Faroe Islands (80,000 sheep vs 54,000 humans). In fact, the islands' name itself comes from the Old Norse word 'Færeyjar,' meaning 'Sheep Islands'!",
    rarity: 89,
    crowd: 'Minimal',
    adventureIndex: 'Challenging'
  },
  'lofoten-islands': {
    funFact: "Lofoten has one of the world's largest deep-water coral reefs, the Røst Reef, located off its coast. Also, despite being located inside the Arctic Circle, it experiences one of the world's most elevated temperature anomalies due to the Gulf Stream.",
    rarity: 85,
    crowd: 'Moderate',
    adventureIndex: 'Moderate'
  },
  'plitvice-lakes': {
    funFact: "The lakes are separated by natural travertine dams created by moss, algae, and bacteria. These barriers grow by about 1 centimeter per year, meaning the waterfalls are constantly shifting and morphing over time!",
    rarity: 82,
    crowd: 'Moderate',
    adventureIndex: 'Leisurely'
  },
  socotra: {
    funFact: "Socotra is home to the ancient Dragon's Blood Tree, which bleeds red sap when cut. In ancient times, this red resin was highly valued for medicine, paint, and alchemy, and was rumored to be the actual blood of dragons.",
    rarity: 99,
    crowd: 'Isolated',
    adventureIndex: 'Extreme'
  },
  'spiti-valley': {
    funFact: "Spiti Valley's Hikkim village is home to the world's highest post office at 14,400 feet. Tourists hike up just to send letters postmarked from the top of the world!",
    rarity: 91,
    crowd: 'Isolated',
    adventureIndex: 'Challenging'
  },
  'deadvlei-sossusvlei': {
    funFact: "The skeletal camel thorn trees in Deadvlei died 900 years ago when the climate dried up and dunes blocked the river. The sun has scorched them completely black, but it is so dry that they cannot decompose.",
    rarity: 93,
    crowd: 'Minimal',
    adventureIndex: 'Challenging'
  },
  'south-georgia': {
    funFact: "South Georgia is the final resting place of explorer Sir Ernest Shackleton. The island has no permanent human residents, but hosts over 30 million breeding birds, including half of the world's king penguins.",
    rarity: 97,
    crowd: 'Isolated',
    adventureIndex: 'Extreme'
  },
  'scoresby-sund': {
    funFact: "Scoresby Sund is the largest fjord system on Earth, covering an area of 14,700 square miles. Icebergs here can be as tall as a 20-story building and take years to drift out of the fjord.",
    rarity: 95,
    crowd: 'Isolated',
    adventureIndex: 'Extreme'
  },
  'lemaire-channel': {
    funFact: "The Lemaire Channel is so narrow (only 1,600 feet at its narrowest point) that cruise ships can only navigate it when it is completely free of pack ice. It is nicknamed the 'Kodak Gap' because it is the most photographed spot in Antarctica.",
    rarity: 90,
    crowd: 'Minimal',
    adventureIndex: 'Extreme'
  },
  'antelope-canyon': {
    funFact: "Antelope Canyon was formed over thousands of years by water erosion from flash floods rushing through the Navajo sandstone. It is considered sacred by the Navajo people, who enter the canyon in a prayerful state of mind.",
    rarity: 87,
    crowd: 'Moderate',
    adventureIndex: 'Leisurely'
  },
  'salvation-mountain': {
    funFact: "Salvation Mountain is a massive folk-art installation built entirely from local adobe clay, straw, and thousands of gallons of lead-free paint. Its creator, Leonard Knight, lived in his truck at the site for over 25 years without running water or electricity.",
    rarity: 86,
    crowd: 'Minimal',
    adventureIndex: 'Leisurely'
  }
};

const getInsiderData = (id: string) => {
  if (insiderInfo[id]) {
    return insiderInfo[id];
  }
  return {
    funFact: "This hidden gem remains largely untouched by mainstream tourism. Exploring it offers travelers a rare opportunity to connect with pure, authentic natural wonders and preserve regional heritage.",
    rarity: 78,
    crowd: 'Minimal' as const,
    adventureIndex: 'Moderate' as const
  };
};

export const Explore: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Pull search params from URL
  const querySearch = searchParams.get('search') || '';
  const queryRegion = searchParams.get('region') || '';
  const queryExperience = searchParams.get('experience') || '';
  const queryGem = searchParams.get('gem') || '';

  // Local filter states
  const [searchVal, setSearchVal] = useState(querySearch);
  const [selectedRegion, setSelectedRegion] = useState(queryRegion);
  const [selectedExperience, setSelectedExperience] = useState(queryExperience);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Active Selected Gem for Dossier Modal
  const [activeGem, setActiveGem] = useState<Destination | null>(null);

  // Update input text if search query parameter changes
  useEffect(() => {
    setSearchVal(querySearch);
  }, [querySearch]);

  // Update experience filter if URL parameter changes
  useEffect(() => {
    setSelectedExperience(queryExperience);
  }, [queryExperience]);

  // Update region filter if URL parameter changes
  useEffect(() => {
    setSelectedRegion(queryRegion);
  }, [queryRegion]);

  // Handle URL change of "?gem=id" to open modal
  useEffect(() => {
    if (queryGem) {
      const found = destinations.find(d => d.id === queryGem);
      if (found) {
        setActiveGem(found);
      } else {
        setActiveGem(null);
      }
    } else {
      setActiveGem(null);
    }
  }, [queryGem]);

  // Sync state filters back to search params or filter variables
  const handleTextSearchChange = (val: string) => {
    setSearchVal(val);
    const newParams = new URLSearchParams(searchParams);
    if (val) {
      newParams.set('search', val);
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams);
  };

  const handleRegionFilter = (regionName: string) => {
    const nextVal = selectedRegion === regionName ? '' : regionName;
    setSelectedRegion(nextVal);
    const newParams = new URLSearchParams(searchParams);
    if (nextVal) {
      newParams.set('region', nextVal);
    } else {
      newParams.delete('region');
    }
    setSearchParams(newParams);
  };

  const handleExperienceFilter = (expName: string) => {
    const nextVal = selectedExperience === expName ? '' : expName;
    setSelectedExperience(nextVal);
    const newParams = new URLSearchParams(searchParams);
    if (nextVal) {
      newParams.set('experience', nextVal);
    } else {
      newParams.delete('experience');
    }
    setSearchParams(newParams);
  };

  const clearAllFilters = () => {
    setSearchVal('');
    setSelectedRegion('');
    setSelectedExperience('');
    setSelectedDifficulty('');
    setSearchParams({});
  };

  // Filter Logic
  const filteredDestinations = destinations.filter((dest) => {
    // 1. Text Search Match
    const matchesText = 
      !searchVal ||
      dest.name.toLowerCase().includes(searchVal.toLowerCase()) ||
      dest.tagline.toLowerCase().includes(searchVal.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchVal.toLowerCase()) ||
      dest.highlights.some(h => h.toLowerCase().includes(searchVal.toLowerCase())) ||
      dest.region.toLowerCase().includes(searchVal.toLowerCase());

    // 2. Region Match
    const matchesRegion = !selectedRegion || dest.region === selectedRegion;

    // 3. Experience Type Match
    const matchesExperience = !selectedExperience || dest.experienceType === selectedExperience;

    // 4. Difficulty Match
    const matchesDifficulty = !selectedDifficulty || dest.difficulty === selectedDifficulty;

    return matchesText && matchesRegion && matchesExperience && matchesDifficulty;
  });

  const openDossier = (gemId: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('gem', gemId);
    setSearchParams(newParams);
  };

  const closeDossier = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('gem');
    setSearchParams(newParams);
    setActiveGem(null);
  };

  const difficultyColors = {
    Easy: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/20',
    Moderate: 'border-accent-blue-500/30 text-accent-blue-400 bg-accent-blue-950/20',
    Challenging: 'border-amber-500/30 text-amber-400 bg-amber-950/20',
    Extreme: 'border-rose-500/30 text-rose-400 bg-rose-950/20',
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-32 pb-24 px-6 md:px-12 relative">
      {/* Background Radial Lights */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent-blue-900/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[400px] h-[400px] bg-accent-blue-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col gap-3 mb-12">
          <span className="text-[10px] tracking-[0.4em] uppercase text-accent-blue-400 font-semibold">
            All Travel Guides
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
            Explore <span className="blue-gradient-text">Destinations</span>
          </h1>
          <p className="text-gray-400 font-light text-sm max-w-xl leading-relaxed">
            Search and filter through our full list of secret destinations, hidden cities, and scenic spots.
          </p>
        </div>

        {/* Search Bar + Toggle filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
          <div className="w-full relative flex items-center glass-panel p-1 rounded-xl">
            <Search className="w-5 h-5 text-accent-blue-500/60 ml-4 shrink-0" />
            <input
              type="text"
              placeholder="Search by name, country, highlights, or description..."
              value={searchVal}
              onChange={(e) => handleTextSearchChange(e.target.value)}
              className="w-full bg-transparent border-none text-white placeholder-gray-500 focus:outline-none focus:ring-0 text-sm py-3 px-3 font-light"
            />
            {searchVal && (
              <button 
                onClick={() => handleTextSearchChange('')}
                className="p-2 text-gray-500 hover:text-white mr-2 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex md:hidden items-center gap-2 px-5 py-4 border border-accent-blue-500/20 bg-accent-blue-950/20 hover:border-accent-blue-400 rounded-xl text-xs uppercase tracking-wider font-semibold cursor-pointer w-full justify-center"
          >
            <SlidersHorizontal className="w-4 h-4 text-accent-blue-400" />
            Filters {showMobileFilters ? 'Hide' : 'Show'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* FILTER SIDEBAR PANEL (Desktop and Drawer) */}
          <aside className={`lg:col-span-3 flex-col gap-6 glass-panel p-6 rounded-2xl border-accent-blue-500/10 ${
            showMobileFilters ? 'flex' : 'hidden md:flex'
          }`}>
            <div className="flex items-center justify-between border-b border-accent-blue-500/10 pb-4">
              <span className="font-serif text-lg font-medium text-white flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-accent-blue-400" />
                Filters
              </span>
              <button
                onClick={clearAllFilters}
                className="text-[10px] uppercase font-semibold text-accent-blue-400 hover:text-accent-blue-300 tracking-wider cursor-pointer border border-accent-blue-400/20 px-2.5 py-1 rounded-md bg-accent-blue-950/40"
              >
                Clear
              </button>
            </div>

            {/* Region Select */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] tracking-widest uppercase text-gray-500 font-semibold font-sans">
                Region
              </span>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {['America', 'Europe', 'Asia-Pacific', 'Africa-ME', 'Polar'].map((region) => (
                  <button
                    key={region}
                    onClick={() => handleRegionFilter(region)}
                    className={`px-3 py-2 text-left rounded-lg text-xs font-sans transition-all cursor-pointer border ${
                      selectedRegion === region
                        ? 'bg-accent-blue-600/20 border-accent-blue-500 text-white font-medium shadow-md shadow-accent-blue-950/40'
                        : 'bg-black/20 border-accent-blue-500/5 text-gray-400 hover:bg-black/40 hover:text-gray-300'
                    }`}
                  >
                    {region === 'Africa-ME' ? 'Africa & Middle East' : region === 'Polar' ? 'Polar Regions' : region}
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Selector */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] tracking-widest uppercase text-gray-500 font-semibold font-sans">
                Experience Type
              </span>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {['Celestial', 'Antiquity', 'Marine', 'Forest', 'Volcanic'].map((exp) => (
                  <button
                    key={exp}
                    onClick={() => handleExperienceFilter(exp)}
                    className={`px-3 py-2 text-left rounded-lg text-xs font-sans transition-all cursor-pointer border ${
                      selectedExperience === exp
                        ? 'bg-accent-blue-600/20 border-accent-blue-500 text-white font-medium shadow-md shadow-accent-blue-950/40'
                        : 'bg-black/20 border-accent-blue-500/5 text-gray-400 hover:bg-black/40 hover:text-gray-300'
                    }`}
                  >
                    {exp}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Selector */}
            <div className="flex flex-col gap-3 font-sans">
              <span className="text-[10px] tracking-widest uppercase text-gray-500 font-semibold font-sans">
                Travel Difficulty
              </span>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {['Easy', 'Moderate', 'Challenging', 'Extreme'].map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(selectedDifficulty === diff ? '' : diff)}
                    className={`px-3 py-2 text-left rounded-lg text-xs font-sans transition-all cursor-pointer border ${
                      selectedDifficulty === diff
                        ? 'bg-accent-blue-600/20 border-accent-blue-500 text-white font-medium shadow-md shadow-accent-blue-950/40'
                        : 'bg-black/20 border-accent-blue-500/5 text-gray-400 hover:bg-black/40 hover:text-gray-300'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* RESULTS GRID */}
          <main className="lg:col-span-9 flex flex-col gap-6">
            {/* Filter tags & Results summary row */}
            <div className="flex items-center justify-between text-xs text-gray-500 font-sans border-b border-accent-blue-500/10 pb-4">
              <span>Showing {filteredDestinations.length} coordinates</span>
              <div className="flex items-center gap-2">
                {selectedRegion && <span className="bg-accent-blue-950/40 border border-accent-blue-500/20 text-accent-blue-300 px-2 py-0.5 rounded text-[10px] uppercase font-semibold">{selectedRegion}</span>}
                {selectedExperience && <span className="bg-accent-blue-950/40 border border-accent-blue-500/20 text-accent-blue-300 px-2 py-0.5 rounded text-[10px] uppercase font-semibold">{selectedExperience}</span>}
                {selectedDifficulty && <span className="bg-accent-blue-950/40 border border-accent-blue-500/20 text-accent-blue-300 px-2 py-0.5 rounded text-[10px] uppercase font-semibold">{selectedDifficulty}</span>}
              </div>
            </div>

            {filteredDestinations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map((dest) => (
                  <div key={dest.id} onClick={() => openDossier(dest.id)} className="cursor-pointer">
                    <DestinationCard destination={dest} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center glass-panel rounded-2xl p-8 border-accent-blue-500/10">
                <Compass className="w-12 h-12 text-accent-blue-500/40 animate-pulse mb-4" />
                <h3 className="font-serif text-lg text-white mb-2">No Sanctum Matches Found</h3>
                <p className="text-gray-400 font-light text-sm max-w-sm mb-6 leading-relaxed">
                  Your search filters did not match any documented coordinates. Try resetting tags or widening search scopes.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-2.5 rounded-xl bg-white text-dark-bg font-semibold text-xs tracking-wider uppercase hover:bg-gray-100 transition-all cursor-pointer"
                >
                  Reset Briefing Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* DOSSIER DETAIL MODAL (Framer Motion Animated) */}
      <AnimatePresence>
        {activeGem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="bg-[#040914] border border-accent-blue-500/20 max-w-5xl w-full rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col font-sans"
            >
              {/* Close Button */}
              <button
                onClick={closeDossier}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white hover:text-accent-blue-400 flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
                aria-label="Close dossier view"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Modal Content */}
              <div className="overflow-y-auto flex-grow">
                {/* Header Banner image */}
                <div className="relative h-[250px] md:h-[380px] w-full">
                  <img
                    src={activeGem.image}
                    alt={activeGem.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Backdrop shading */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-[#040914]/20 to-transparent" />
                  
                  {/* Overlay name and badges */}
                  <div className="absolute bottom-6 left-6 md:left-12 flex flex-col gap-2">
                    <span className="text-[10px] font-semibold tracking-[0.3em] text-accent-blue-400 uppercase">
                      {activeGem.experienceType} Expeditions
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-tight">
                      {activeGem.name}
                    </h2>
                  </div>
                </div>

                {/* Sub info grid and main specifications */}
                <div className="px-6 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column: Description & Gallery */}
                  <div className="lg:col-span-8 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <h4 className="font-serif text-lg italic text-accent-blue-300">
                        "{activeGem.tagline}"
                      </h4>
                      <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed mt-2">
                        {activeGem.longDescription}
                      </p>
                    </div>

                    {/* Highlights check points */}
                    <div className="flex flex-col gap-3 pt-4 border-t border-accent-blue-500/10">
                      <span className="text-xs uppercase tracking-widest text-accent-blue-400 font-bold">
                        Key Highlights
                      </span>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-1">
                        {activeGem.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300 font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue-400 mt-1.5 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* EXPEDITION INSIDER TRIVIA & GAUGES */}
                    <div className="flex flex-col gap-5 pt-5 border-t border-accent-blue-500/10 font-sans">
                      {/* Fun Fact Section */}
                      <div className="glass-panel p-4.5 rounded-2xl border-amber-500/15 bg-amber-950/5 relative overflow-hidden flex gap-3.5 items-start">
                        <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <div className="flex flex-col gap-1 z-10">
                          <span className="text-[10px] tracking-wider uppercase text-amber-400 font-bold">
                            Did You Know?
                          </span>
                          <p className="text-[11px] text-gray-300 leading-relaxed font-light font-sans">
                            {getInsiderData(activeGem.id).funFact}
                          </p>
                        </div>
                        {/* Glow effect */}
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-amber-500/5 rounded-full blur-xl" />
                      </div>

                      {/* Rarity and Crowd Gauges */}
                      <div className="grid grid-cols-2 gap-4">
                        {/* Rarity Meter */}
                        <div className="bg-black/25 border border-accent-blue-500/5 rounded-xl p-3 flex flex-col gap-2">
                          <div className="flex justify-between items-center text-[10px] text-gray-400">
                            <span className="font-semibold uppercase tracking-wider">Rarity Index</span>
                            <span className="text-accent-blue-400 font-bold">{getInsiderData(activeGem.id).rarity}%</span>
                          </div>
                          {/* Progress bar */}
                          <div className="w-full h-1.5 bg-black/45 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-accent-blue-500 to-accent-blue-400 rounded-full" 
                              style={{ width: `${getInsiderData(activeGem.id).rarity}%` }}
                            />
                          </div>
                        </div>

                        {/* Crowd Density Meter */}
                        <div className="bg-black/25 border border-accent-blue-500/5 rounded-xl p-3 flex flex-col gap-2">
                          <div className="flex justify-between items-center text-[10px] text-gray-400">
                            <span className="font-semibold uppercase tracking-wider">Crowd Density</span>
                            <span className="text-emerald-400 font-bold">{getInsiderData(activeGem.id).crowd}</span>
                          </div>
                          {/* Indicator dots */}
                          <div className="flex gap-1.5 items-center mt-1">
                            {['Isolated', 'Minimal', 'Moderate', 'High'].map((lvl) => {
                              const isActive = getInsiderData(activeGem.id).crowd === lvl;
                              const colors = {
                                Isolated: 'bg-indigo-500 border-indigo-400',
                                Minimal: 'bg-emerald-500 border-emerald-400',
                                Moderate: 'bg-amber-500 border-amber-400',
                                High: 'bg-rose-500 border-rose-400'
                              };
                              return (
                                <div 
                                  key={lvl} 
                                  className={`h-2.5 rounded-full transition-all duration-300 ${
                                    isActive 
                                      ? `w-6 ${colors[lvl]} opacity-100 shadow-md shadow-emerald-500/10` 
                                      : 'w-2.5 bg-gray-700/60 opacity-30'
                                  }`} 
                                  title={lvl}
                                />
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Parameters and Booking */}
                  <div className="lg:col-span-4 flex flex-col gap-6 lg:border-l lg:border-accent-blue-500/10 lg:pl-8">
                    {/* Parameters details cards */}
                    <div className="flex flex-col gap-4 font-sans bg-black/35 border border-accent-blue-500/10 rounded-2xl p-5">
                      <span className="text-[10px] tracking-wider uppercase text-gray-500 font-bold">Guide Details</span>
                      
                      <div className="flex items-center gap-3 border-b border-accent-blue-500/5 pb-3">
                        <MapPin className="w-4 h-4 text-accent-blue-400 shrink-0" />
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase tracking-wider text-gray-500">Region</span>
                          <span className="text-xs font-medium text-white">{activeGem.region}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 border-b border-accent-blue-500/5 pb-3">
                        <Star className="w-4 h-4 text-accent-blue-400 shrink-0" />
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase tracking-wider text-gray-500">Eco Rating</span>
                          <span className="text-xs font-medium text-white">{activeGem.rating.toFixed(1)} / 5.0</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 border-b border-accent-blue-500/5 pb-3">
                        <Clock className="w-4 h-4 text-accent-blue-400 shrink-0" />
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase tracking-wider text-gray-500">Trip Length</span>
                          <span className="text-xs font-medium text-white">{activeGem.duration}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 border-b border-accent-blue-500/5 pb-3">
                        <CalendarRange className="w-4 h-4 text-accent-blue-400 shrink-0" />
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase tracking-wider text-gray-500">Best Time to Visit</span>
                          <span className="text-xs font-medium text-white">{activeGem.bestTime}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Award className="w-4 h-4 text-accent-blue-400 shrink-0" />
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase tracking-wider text-gray-500">Difficulty</span>
                          <span className={`px-2 py-0.5 text-[10px] tracking-wide rounded-full border text-center mt-1 w-max ${difficultyColors[activeGem.difficulty]}`}>
                            {activeGem.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stays & Tips info */}
                    <div className="flex flex-col gap-4 font-sans">
                      <div className="flex items-start gap-3">
                        <Hotel className="w-5 h-5 text-accent-blue-400 shrink-0 mt-0.5" />
                        <div className="flex flex-col">
                          <span className="text-[10px] tracking-widest uppercase text-accent-blue-400 font-bold mb-1">Luxury Stay</span>
                          <p className="text-xs text-gray-300 font-light leading-relaxed">{activeGem.luxuryStay}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-accent-blue-400 shrink-0 mt-0.5" />
                        <div className="flex flex-col">
                          <span className="text-[10px] tracking-widest uppercase text-accent-blue-400 font-bold mb-1">Adventurer Tip</span>
                          <p className="text-xs text-gray-300 font-light leading-relaxed">{activeGem.adventurerTip}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Inquiry */}
                    <button
                      onClick={() => {
                        closeDossier();
                        navigate(`/contact?gem=${activeGem.id}`);
                      }}
                      className="blue-shimmer-btn w-full py-4 text-white rounded-xl font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-md shadow-accent-blue-950/40 flex items-center justify-center gap-2 cursor-pointer mt-auto"
                    >
                      Plan a Custom Trip
                      <Compass className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
