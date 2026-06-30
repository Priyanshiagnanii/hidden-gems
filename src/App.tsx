import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { Regions } from './pages/Regions';
import { Experiences } from './pages/Experiences';
import { InteractiveMap } from './pages/InteractiveMap';
import { GemOfTheWeek } from './pages/GemOfTheWeek';
import { Gallery } from './pages/Gallery';
import { Blog } from './pages/Blog';
import { About } from './pages/About';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { EcoPledge } from './pages/EcoPledge';

// Scroll to top helper on page change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-dark-bg text-white">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/regions" element={<Regions />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/map" element={<InteractiveMap />} />
            <Route path="/gem-of-the-week" element={<GemOfTheWeek />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/eco-pledge" element={<EcoPledge />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
