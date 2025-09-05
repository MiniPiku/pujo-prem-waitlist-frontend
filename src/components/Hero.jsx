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
    <div className="text-center space-y-10">
      {/* Main Heading */}
      <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-black text-brutal-black leading-tight font-brutal transform rotate-1 hover:rotate-0 transition-transform duration-300">
          SINGLE this Pujo?
        </h1>
        <p className="text-xl md:text-2xl text-brutal-black max-w-md mx-auto font-bold border-4 border-brutal-black bg-brutal-cyan px-6 py-3 shadow-brutal transform -rotate-1 hover:rotate-0 transition-transform duration-300">
          Join the waitlist to tie knots
        </p>
      </div>

      {/* Email Input and Button */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-lg mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="EMAIL"
          className="w-full sm:flex-1 px-6 py-4 bg-brutal-white border-4 border-brutal-black text-brutal-black placeholder-brutal-gray font-bold text-lg focus:outline-none focus:border-brutal-red focus:shadow-brutal-red transition-all duration-200"
          required
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-10 py-4 bg-brutal-yellow text-brutal-black font-black text-lg border-4 border-brutal-black shadow-brutal-yellow hover:shadow-brutal transition-all duration-200 transform hover:scale-105"
        >
          JOIN WAITLIST
        </button>
      </form>

      {/* Show message */}
      {message && (
        <div className={`mt-6 px-6 py-3 border-4 border-brutal-black shadow-brutal transform rotate-1 ${
          message.type === "success" ? "bg-brutal-green text-brutal-white" : "bg-brutal-red text-brutal-white"
        }`}>
          <p className="font-bold text-lg">
            {message.text}
          </p>
        </div>
      )}

      {/* Social Proof */}
      <div className="flex items-center justify-center space-x-4">
        <div className="flex -space-x-3">
          {[1, 2, 3, 4].map((i) => (
            <Avatar key={i} />
          ))}
        </div>
        <span className="text-brutal-black text-lg font-bold bg-brutal-pink border-4 border-brutal-black px-4 py-2 shadow-brutal transform -rotate-1">
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
