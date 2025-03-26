import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


// ✅ Lazy-loaded components for better performance
const HomePage = lazy(() => import('./components/HomePage'));
const Movies = lazy(() => import('./data/Movies')); // ✅ Added Movies Page
const MovieDetailsScreen = lazy(() => import('./components/MovieDetailsScreen'));
const SeatSelection = lazy(() => import('./components/SeatSelection'));
const Checkout = lazy(() => import('./components/Checkout'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const AboutUs = lazy(() => import('./components/AboutUs'))

function App() {
  return (
    <Router>
      <div className="app">
        {/* ✅ Suspense for smooth loading experience */}
        <Suspense fallback={<div className="loading">🎬 Loading Movie Magic...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<Movies />} /> {/* ✅ Browse Movies Page */}
            <Route path="/movie/:id" element={<MovieDetailsScreen />} />
            <Route path="/movie/:id/seats" element={<SeatSelection />} />
            <Route path="/checkout" element={<Checkout />} /> {/* ✅ Checkout Page */}
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
