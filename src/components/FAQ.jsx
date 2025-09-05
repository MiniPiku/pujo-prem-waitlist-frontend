import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why should I join this app?",
      answer: "Because let's be real, Pujo is not just about pandal-hopping. It's about having someone to share it with. Tired of seeing couples in matching outfits while you third-wheel? This app gives you a shot at changing that."
    },
    {
      question: "Why only for Pujo?",
      answer: "Because loneliness hits hardest during Pujo nights. Everyone's out, vibing, clicking couple selfies, and you're standing there holding your kurta pocket. This app flips that story for you."
    },
    {
      question: "What's the risk if I don't join the waitlist?",
      answer: "Nothing. Except another year of \"Ebaro single?\" jokes from your friends and aunties asking \"biye kobe?\" while you smile awkwardly."
    },
    {
      question: "How do matches work?",
      answer: "Swipe → Match → Chat. Same familiar flow, but with Pujo-themed vibes, filters, and location-based discovery so you can connect with people nearby while pandal-hopping."
    },
    {
      question: "Is it free to use?",
      answer: "Yes :)"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* FAQ Header */}
      <div className="text-center mb-12 sm:mb-16 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-brutal-black mb-4 sm:mb-6 font-brutal bg-brutal-pink border-4 sm:border-6 border-brutal-black px-4 sm:px-8 py-3 sm:py-4 shadow-brutal transform rotate-2 hover:rotate-0 transition-transform duration-300">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p className="text-brutal-black text-base sm:text-lg md:text-xl max-w-2xl sm:max-w-3xl mx-auto font-bold bg-brutal-white border-3 sm:border-4 border-brutal-black px-4 sm:px-6 py-3 sm:py-4 shadow-brutal transform -rotate-1 hover:rotate-0 transition-transform duration-300">
          EVERYTHING YOU NEED TO KNOW ABOUT THE APP. FIND ANSWERS TO THE MOST COMMON QUESTIONS BELOW.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4 sm:space-y-6 px-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-brutal-white border-4 sm:border-6 border-brutal-black shadow-brutal overflow-hidden transform hover:scale-105 transition-transform duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <motion.button
              onClick={() => toggleFAQ(index)}
              className="w-full px-4 sm:px-8 py-4 sm:py-6 text-left flex items-center justify-between bg-brutal-cyan hover:bg-brutal-yellow transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-brutal-black font-black text-base sm:text-lg md:text-xl font-brutal pr-2">
                {faq.question.toUpperCase()}
              </span>
              <motion.div 
                className="flex-shrink-0 ml-2 sm:ml-6 bg-brutal-black border-3 sm:border-4 border-brutal-black p-1.5 sm:p-2"
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-brutal-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </motion.div>
            </motion.button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-8 pb-4 sm:pb-6 bg-brutal-white">
                    <motion.div 
                      className="text-brutal-black leading-relaxed font-bold text-sm sm:text-base md:text-lg"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
