import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Gamified Quizzes',
    description: 'Test your knowledge with our fun and interactive quizzes.',
  },
  {
    name: 'XP Rewards',
    description: 'Earn experience points for every challenge you complete.',
  },
  {
    name: 'Leaderboard',
    description: 'Compete with other learners and climb the ranks.',
  },
  {
    name: 'Real-World Labs',
    description: 'Apply your skills in real-world Linux environments.',
  },
];

const Features = () => {
  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{feature.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
