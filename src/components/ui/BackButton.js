import React from 'react';

const BackButton = ({ onClick }) => {
  return (
    <button 
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
};

export default BackButton;
