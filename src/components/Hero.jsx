import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';
import Avatar from './Avatar';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null); // for success/error feedback
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage({ type: "success", text: "🎉 You’ve joined the waitlist!" });
        setEmail(""); // clear input
      } else {
        setMessage({ type: "error", text: "❌ Failed to join waitlist. Try again." });
      }
    } catch (error) {
      setMessage({ type: "error", text: "⚠️ Something went wrong. Please try later." });
      console.error("Error submitting email:", error);
    }
  };

  return (
    <div className="text-center space-y-8">
      {/* Main Heading */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
          SINGLE this Pujo?
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-md mx-auto">
          Join the waitlist to tie knots
        </p>
      </div>

      {/* Email Input and Button */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full sm:flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-yellow focus:ring-1 focus:ring-neon-yellow transition-colors"
          required
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-3 bg-neon-yellow text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors duration-200 shadow-lg shadow-neon-yellow/20"
        >
          Join waitlist
        </button>
      </form>

      {/* Show message */}
      {message && (
        <p
          className={`mt-4 text-sm ${
            message.type === "success" ? "text-green-400" : "text-red-400"
          }`}
        >
          {message.text}
        </p>
      )}

             {/* Social Proof */}
       <div className="flex items-center justify-center space-x-3">
         <div className="flex -space-x-2">
           {[1, 2, 3, 4].map((i) => (
             <Avatar key={i} />
           ))}
         </div>
         <span className="text-gray-400 text-sm">
           Join {count}+ others on the waitlist
         </span>
       </div>

      {/* Countdown Timer */}
      <div className="pt-8">
        <Countdown />
      </div>
    </div>
  );
};

export default Hero;
