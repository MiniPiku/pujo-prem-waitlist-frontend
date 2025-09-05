import React from 'react';

const Avatar = ({ src, alt = "User avatar", size = "w-8 h-8" }) => {
  return (
    <div className={`${size} rounded-full border-2 border-gray-700 overflow-hidden flex-shrink-0`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
          <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
