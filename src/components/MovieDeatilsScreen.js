import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import BackButton from './ui/BackButton';
import MenuButton from './ui/MenuButton';
import DateTimeSelector from '../DateTimeSelector';
import movieData from '../data/movieData';



const MovieDetailsScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  
  // In a real app, you would fetch this data
  const movie = movieData.find(movie => movie.id === id) || movieData[0];
  
  const handleReservation = () => {
    if (selectedDate && selectedTime) {
      navigate(`/movie/${id}/seats`, { 
        state: { 
          date: selectedDate, 
          time: selectedTime 
        }
      });
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto h-screen bg-gradient-to-b from-purple-900 to-blue-900 overflow-hidden rounded-lg text-white">
      {/* Movie Poster Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src={movie.posterUrl} 
          alt={movie.title} 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/80 to-blue-900"></div>
      </div>
      
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-4">
        <BackButton onClick={() => navigate('/')} />
        <MenuButton />
      </header>
      
      {/* Movie Title */}
      <div className="relative z-10 px-6 pt-8 pb-4 text-center">
        <h1 className="text-4xl font-bold tracking-wide text-white">{movie.title.toUpperCase()}</h1>
        <h2 className="text-xl mt-1 text-white">{movie.subtitle}</h2>
      </div>
      
      {/* Movie Description */}
      <div className="relative z-10 px-6 text-center text-sm mb-6">
        <p className="text-white/90">
          {movie.shortDescription}
          <span className="text-purple-300 font-semibold ml-1 cursor-pointer">Read More</span>
        </p>
      </div>
      
      {/* Date and Time Selection */}
      <DateTimeSelector 
        onDateSelect={setSelectedDate}
        onTimeSelect={setSelectedTime}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
      />
      
      {/* Reservation Button */}
      <div className="relative z-10 px-6 mt-auto">
        <motion.button
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white text-xl font-semibold mb-2 ${(!selectedDate || !selectedTime) ? 'opacity-70' : ''}`}
          onClick={handleReservation}
          disabled={!selectedDate || !selectedTime}
        >
          Reservation
        </motion.button>
        
        {/* Bottom Indicator */}
        <div className="w-full flex justify-center mb-6 mt-2">
          <div className="w-16 h-1 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsScreen;