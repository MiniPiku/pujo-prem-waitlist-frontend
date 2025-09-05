import React from 'react';

const HeaderBadge = () => {
  return (
    <div className="flex flex-col items-center space-y-4 mb-12">
      {/* Logo */}
      <div className="w-16 h-16 bg-neon-yellow rounded-2xl flex items-center justify-center shadow-lg shadow-neon-yellow/20">
        <div className="w-8 h-8 relative">
          <div className="absolute inset-0 bg-neon-yellow rounded-lg opacity-80"></div>
          <div className="absolute top-1 left-1 right-1 h-0.5 bg-black rounded-full opacity-60"></div>
          <div className="absolute top-2.5 left-1 right-1 h-0.5 bg-black rounded-full opacity-60"></div>
          <div className="absolute top-4 left-1 right-1 h-0.5 bg-black rounded-full opacity-60"></div>
        </div>
      </div>

      {/* Badge */}
      <div className="bg-gray-800 border border-neon-yellow rounded-full px-6 py-2 flex items-center space-x-3">
        <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
        <span className="text-white text-sm font-medium uppercase tracking-wide">
          AVAILABLE FROM MAHALAYA 21-SEPT-2025
        </span>
      </div>
    </div>
  );
};

export default HeaderBadge;
