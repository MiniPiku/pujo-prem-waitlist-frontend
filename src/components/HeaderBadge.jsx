import React from 'react';

const HeaderBadge = () => {
  return (
    <div className="flex flex-col items-center space-y-6 mb-12">
      {/* Logo */}
      <div className="w-20 h-20 bg-brutal-yellow border-6 border-brutal-black flex items-center justify-center shadow-brutal-yellow transform rotate-3 hover:rotate-0 transition-transform duration-300">
        <div className="w-10 h-10 relative">
          <div className="absolute inset-0 bg-brutal-black"></div>
          <div className="absolute top-1 left-1 right-1 h-1 bg-brutal-yellow"></div>
          <div className="absolute top-3 left-1 right-1 h-1 bg-brutal-yellow"></div>
          <div className="absolute top-5 left-1 right-1 h-1 bg-brutal-yellow"></div>
        </div>
      </div>

      {/* Badge */}
      <div className="bg-brutal-red border-4 border-brutal-black px-8 py-3 flex items-center space-x-4 shadow-brutal transform -rotate-1 hover:rotate-0 transition-transform duration-300">
        <div className="w-4 h-4 bg-brutal-green border-2 border-brutal-black animate-pulse"></div>
        <span className="text-brutal-white text-sm font-black uppercase tracking-wider font-brutal">
          AVAILABLE FROM MAHALAYA 21-SEPT-2025
        </span>
      </div>
    </div>
  );
};

export default HeaderBadge;
