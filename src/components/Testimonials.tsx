import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: 'EliteLabs made learning Linux so much fun! The gamified approach is genius.',
    author: 'Alice',
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
  {
    quote: 'I finally understand the Linux command line. The challenges are a great way to practice.',
    author: 'Bob',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    quote: 'The community is so helpful and the leaderboard keeps me motivated.',
    author: 'Charlie',
    avatar: 'https://i.pravatar.cc/150?img=13',
  },
  {
    quote: 'The real-world labs are a game-changer. I feel so much more confident in my skills.',
    author: 'David',
    avatar: 'https://i.pravatar.cc/150?img=14',
  },
  {
    quote: 'I never thought I could learn Linux, but EliteLabs made it possible. Highly recommended!',
    author: 'Eve',
    avatar: 'https://i.pravatar.cc/150?img=15',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white">What Our Learners Say</h2>
        <div className="relative h-64">
          <AnimatePresence mode='wait'>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md text-center max-w-2xl mx-auto">
                <img src={testimonials[index].avatar} alt={testimonials[index].author} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500" />
                <p className="text-lg italic text-gray-600 dark:text-gray-300 mb-4">"{testimonials[index].quote}"</p>
                <p className="font-bold text-gray-800 dark:text-white">{testimonials[index].author}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
