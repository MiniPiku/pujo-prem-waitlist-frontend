import React from 'react';
import HeaderBadge from './components/HeaderBadge';
import Hero from './components/Hero';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-gray-900/10"></div>
      
      {/* Background SVG Patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute top-0 right-0 w-96 h-96 transform translate-x-32 -translate-y-32"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 50 Q100 20 150 50 T250 50"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-gray-500"
          />
          <path
            d="M30 80 Q80 50 130 80 T230 80"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            className="text-gray-600"
          />
          <path
            d="M70 110 Q120 80 170 110 T270 110"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-gray-700"
          />
        </svg>
        
        <svg
          className="absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-20"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M150 150 Q100 180 50 150 T-50 150"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-gray-500"
          />
          <path
            d="M170 120 Q120 150 70 120 T-30 120"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            className="text-gray-600"
          />
          <path
            d="M130 90 Q80 120 30 90 T-70 90"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-gray-700"
          />
        </svg>
      </div>

      {/* Additional Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-yellow/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gray-400/10 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-neon-yellow/5 rounded-full blur-md"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Badge */}
          <HeaderBadge />
          
          {/* Hero Section */}
          <div className="mb-20">
            <Hero />
          </div>
          
          {/* FAQ Section */}
          <div className="mb-16">
            <FAQ />
          </div>
          
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
