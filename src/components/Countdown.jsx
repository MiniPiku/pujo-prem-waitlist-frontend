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
    }, 100); // Increment every 2 seconds

    return () => clearInterval(interval);
  }, [isCounting]);

  // Set target date to September 21, 2025
  const targetDate = '2025-09-21T00:00:00';
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-1">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-sm text-gray-400 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-4 md:space-x-8">
        <TimeUnit value={days} label="Days" />
        <div className="text-gray-400 text-2xl md:text-3xl font-bold">:</div>
        <TimeUnit value={hours} label="Hours" />
        <div className="text-gray-400 text-2xl md:text-3xl font-bold">:</div>
        <TimeUnit value={minutes} label="Minutes" />
        <div className="text-gray-400 text-2xl md:text-3xl font-bold">:</div>
        <TimeUnit value={seconds} label="Seconds" />
      </div>
      
      <div className="flex items-center space-x-2 text-gray-400">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
        <span className="text-sm uppercase tracking-wide">
          LEFT UNTIL FULL RELEASE
        </span>
      </div>
    </div>
  );
};

export default Countdown;
