import React, { useState, useEffect } from 'react';
import useCountdown from '../hooks/useCountdown';

const Countdown = () => {
  const [count, setCount] = useState(500);
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    if (!isCounting) return;

    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount >= 1000) {
          setIsCounting(false);
          return 1000;
        }
        return prevCount + 1;
      });
    }, 2000); // Increment every 2 seconds

    return () => clearInterval(interval);
  }, [isCounting]);

  // Set target date to September 21, 2025
  const targetDate = '2025-09-21T00:00:00';
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brutal-black mb-1 sm:mb-2 bg-brutal-yellow border-3 sm:border-4 border-brutal-black px-2 sm:px-4 py-1 sm:py-2 shadow-brutal-yellow transform rotate-1 hover:rotate-0 transition-transform duration-300">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-xs sm:text-sm text-brutal-black uppercase tracking-wider font-bold bg-brutal-white border-2 border-brutal-black px-1 sm:px-2 py-0.5 sm:py-1 shadow-brutal-sm">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center space-y-4 sm:space-y-6 px-4">
      <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
        <TimeUnit value={days} label="Days" />
        <div className="text-brutal-black text-2xl sm:text-3xl md:text-4xl font-black bg-brutal-red border-3 sm:border-4 border-brutal-black px-1 sm:px-2 py-0.5 sm:py-1 shadow-brutal-red">:</div>
        <TimeUnit value={hours} label="Hours" />
        <div className="text-brutal-black text-2xl sm:text-3xl md:text-4xl font-black bg-brutal-red border-3 sm:border-4 border-brutal-black px-1 sm:px-2 py-0.5 sm:py-1 shadow-brutal-red">:</div>
        <TimeUnit value={minutes} label="Minutes" />
        <div className="text-brutal-black text-2xl sm:text-3xl md:text-4xl font-black bg-brutal-red border-3 sm:border-4 border-brutal-black px-1 sm:px-2 py-0.5 sm:py-1 shadow-brutal-red">:</div>
        <TimeUnit value={seconds} label="Seconds" />
      </div>
      
      <div className="flex items-center space-x-2 sm:space-x-3 bg-brutal-blue border-3 sm:border-4 border-brutal-black px-4 sm:px-6 py-2 sm:py-3 shadow-brutal-blue transform -rotate-1 hover:rotate-0 transition-transform duration-300">
        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-brutal-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
        <span className="text-brutal-white text-sm sm:text-lg uppercase tracking-wide font-bold text-center">
          LEFT UNTIL FULL RELEASE
        </span>
      </div>
    </div>
  );
};

export default Countdown;
