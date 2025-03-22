import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetailsScreen from './components/MovieDeatilsScreen';
import HomePage from './components/HomePage';
import SeatSelection from './components/SeatSelection';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailsScreen />} />
          <Route path="/movie/:id/seats" element={<SeatSelection />} />
          <Route path="/movie/:id/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
