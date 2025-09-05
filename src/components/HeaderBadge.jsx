import React from 'react';

const HeaderBadge = () => {
  return (
    <div className="flex flex-col items-center space-y-4 sm:space-y-6 mb-8 sm:mb-12">
      {/* Logo */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brutal-yellow border-4 sm:border-6 border-brutal-black flex items-center justify-center shadow-brutal-yellow transform rotate-3 hover:rotate-0 transition-transform duration-300">
        <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
          <div className="absolute inset-0 bg-brutal-black"></div>
          <div className="absolute top-1 left-1 right-1 h-0.5 sm:h-1 bg-brutal-yellow"></div>
          <div className="absolute top-2.5 sm:top-3 left-1 right-1 h-0.5 sm:h-1 bg-brutal-yellow"></div>
          <div className="absolute top-4 sm:top-5 left-1 right-1 h-0.5 sm:h-1 bg-brutal-yellow"></div>
        </div>
      </div>

      {/* Badge */}
      <div className="bg-brutal-red border-3 sm:border-4 border-brutal-black px-4 sm:px-8 py-2 sm:py-3 flex items-center space-x-2 sm:space-x-4 shadow-brutal transform -rotate-1 hover:rotate-0 transition-transform duration-300">
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-brutal-green border-2 border-brutal-black animate-pulse"></div>
        <span className="text-brutal-white text-xs sm:text-sm font-black uppercase tracking-wider font-brutal text-center">
          AVAILABLE FROM MAHALAYA 21-SEPT-2025
        </span>
      </div>
    </div>
  );
};

export default HeaderBadge;
