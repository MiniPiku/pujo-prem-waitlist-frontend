import React from 'react';
import HeaderBadge from './components/HeaderBadge';
import Hero from './components/Hero';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-brutal-white relative overflow-hidden">
      {/* Neo-Brutalism Background Pattern */}
      <div className="absolute inset-0 opacity-100">
        {/* Bold geometric shapes */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-brutal-yellow border-8 border-brutal-black transform -rotate-12"></div>
        <div className="absolute top-0 right-0 w-1/4 h-1/2 bg-brutal-red border-8 border-brutal-black transform rotate-12"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-brutal-blue border-8 border-brutal-black transform rotate-6"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/4 bg-brutal-pink border-8 border-brutal-black transform -rotate-6"></div>
        
        {/* Bold diagonal stripes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-8 bg-brutal-black transform rotate-45"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-8 bg-brutal-black transform -rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-8 bg-brutal-black transform rotate-12"></div>
        
        {/* Bold circles */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-brutal-cyan border-8 border-brutal-black"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-brutal-orange border-6 border-brutal-black"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-brutal-purple border-4 border-brutal-black"></div>
      </div>

      {/* Bold grid pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-brutal-black border-2"></div>
          ))}
        </div>
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
