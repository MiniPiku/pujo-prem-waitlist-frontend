import React from 'react';

const Avatar = ({ src, alt = "User avatar", size = "w-12 h-12" }) => {
  return (
    <div className={`${size} border-4 border-brutal-black overflow-hidden flex-shrink-0 shadow-brutal-sm transform hover:scale-110 transition-transform duration-200`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-brutal-cyan flex items-center justify-center">
          <div className="w-6 h-6 bg-brutal-black"></div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
