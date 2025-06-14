import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import Earrings from './pages/Earrings';
import Bracelets from './pages/Bracelets';
import Necklaces from './pages/Necklaces';
import TrackOrder from './pages/TrackOrder';
import OurStory from './pages/OurStory';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/bracelets" element={<Bracelets />} />
          <Route path="/necklaces" element={<Necklaces />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/our-story" element={<OurStory />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;