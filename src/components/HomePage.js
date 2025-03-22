import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import movieData from '../data/movieData';

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookingSuccess, bookingDetails } = location.state || {};
  
  return (
    <div className="w-full max-w-md mx-auto min-h-screen bg-gradient-to-b from-purple-900 to-blue-900 overflow-hidden text-white pb-8">
      {/* Header */}
      <header className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">MovieTime</h1>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </header>
      
      {/* Booking Success Message */}
      {bookingSuccess && (
        <div className="mx-4 mb-6 bg-green-500/20 border border-green-500/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="p-1 bg-green-500 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-green-300">Booking Successful!</h3>
              <p className="text-sm mt-1">Your tickets have been booked for {bookingDetails?.seats?.length} seat(s) ({bookingDetails?.seats?.join(', ')}) on Thu, 20 April at {bookingDetails?.time}.</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Categories */}
      <div className="px-4 py-3">
        <div className="flex space-x-2 overflow-x-auto pb-2 hide-scrollbar">
          <button className="px-4 py-2 bg-purple-500 rounded-full text-sm font-medium whitespace-nowrap">Now Showing</button>
          <button className="px-4 py-2 bg-blue-900/40 rounded-full text-sm font-medium whitespace-nowrap">Coming Soon</button>
          <button className="px-4 py-2 bg-blue-900/40 rounded-full text-sm font-medium whitespace-nowrap">Top Rated</button>
          <button className="px-4 py-2 bg-blue-900/40 rounded-full text-sm font-medium whitespace-nowrap">Popular</button>
        </div>
      </div>
      
      {/* Movie Cards */}
      <div className="px-4 py-3">
        <h2 className="text-xl font-semibold mb-4">Popular Movies</h2>
        
        <div className="space-y-4">
          {movieData.map((movie) => (
            <motion.div 
              key={movie.id}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-900/40 backdrop-blur-sm rounded-xl overflow-hidden"
              onClick={() => navigate(`/movie/${movie.id}`)}
            >
              <div className="flex">
                <div className="w-1/3 h-40">
                  <img 
                    src={movie.posterUrl || '/api/placeholder/120/160'} 
                    alt={movie.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-3 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{movie.title}</h3>
                    <p className="text-sm text-blue-200">{movie.subtitle}</p>
                    <div className="flex items-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm ml-1">{movie.rating}</span>
                      <span className="mx-2 text-blue-300">•</span>
                      <span className="text-sm text-blue-300">{movie.runtime}</span>
                    </div>
                    <p className="text-xs mt-2 line-clamp-2">{movie.shortDescription}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {movie.genre.slice(0, 2).map((genre, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-blue-800/60 rounded-full">{genre}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Navigation Tabs */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-blue-900/80 backdrop-blur-sm py-3 px-6 max-w-md mx-auto">
        <div className="flex justify-between">
          <button className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs mt-1 text-purple-400">Home</span>
          </button>
          
          <button className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
            </svg>
            <span className="text-xs mt-1">Movies</span>
          </button>
          
          <button className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
            <span className="text-xs mt-1">Tickets</span>
          </button>
          
          <button className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;