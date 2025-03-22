import React from 'react';
import { motion } from 'framer-motion';

const DateTimeSelector = ({ onDateSelect, onTimeSelect, selectedDate, selectedTime }) => {
  // Sample dates - in a real app, you'd generate these dynamically
  const dates = [
    { day: 'Thu', date: '20' },
    { day: 'Fri', date: '21' },
    { day: 'Sat', date: '22' },
    { day: 'Sun', date: '23' },
    { day: 'Mon', date: '24' },
  ];

  // Sample times - in a real app, you'd get these from an API
  const times = ['15:00', '16:00', '18:00', '19:00', '20:00'];

  return (
    <div className="relative z-10 px-6 mb-6">
      <h3 className="text-xl font-bold mb-4 text-center">Select Date and Time</h3>
      
      <div className="mb-4">
        <div className="flex flex-wrap justify-center gap-3">
          {dates.map((item, index) => (
            <motion.button 
              key={`date-${index}`}
              whileTap={{ scale: 0.95 }}
              className={`py-2 px-4 rounded-2xl backdrop-blur-sm border text-white
                ${selectedDate === index 
                  ? 'bg-gradient-to-br from-purple-500/80 to-purple-700/80 border-purple-400/30' 
                  : 'bg-gradient-to-br from-teal-500/80 to-blue-600/80 border-teal-400/30'}`}
              onClick={() => onDateSelect(index)}
            >
              <div>{item.day}</div>
              <div>{item.date}</div>
            </motion.button>
          ))}
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex flex-wrap justify-center gap-3">
          {times.map((time, index) => (
            <motion.button
              key={`time-${index}`}
              whileTap={{ scale: 0.95 }}
              className={`py-2 px-4 rounded-2xl backdrop-blur-sm border text-white
                ${selectedTime === index 
                  ? 'bg-gradient-to-br from-green-500/80 to-teal-600/80 border-green-400/30' 
                  : 'bg-gradient-to-br from-teal-500/80 to-blue-600/80 border-teal-400/30'}`}
              onClick={() => onTimeSelect(index)}
            >
              <div>{time}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DateTimeSelector;
