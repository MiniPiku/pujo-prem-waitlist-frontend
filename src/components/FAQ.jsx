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
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Frequently asked questions
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Everything you need to know about the App. Find answers to the most common questions below.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <motion.button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-750 transition-colors"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <span className="text-white font-medium text-lg">
                {faq.question}
              </span>
              <motion.div 
                className="flex-shrink-0 ml-4"
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
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
                  <div className="px-6 pb-4">
                    <motion.div 
                      className="text-gray-300 leading-relaxed"
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
