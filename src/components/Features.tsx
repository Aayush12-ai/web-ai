import React from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaTrophy, FaBookOpen, FaTerminal } from 'react-icons/fa';

const features = [
  {
    name: 'Gamified Quizzes',
    description: 'Test your knowledge with our fun and interactive quizzes.',
    icon: <FaGamepad className="w-12 h-12 text-accent" />
  },
  {
    name: 'XP Rewards',
    description: 'Earn experience points for every challenge you complete.',
    icon: <FaTrophy className="w-12 h-12 text-accent" />
  },
  {
    name: 'Leaderboard',
    description: 'Compete with other learners and climb the ranks.',
    icon: <FaTrophy className="w-12 h-12 text-accent" />
  },
  {
    name: 'Real-World Labs',
    description: 'Apply your skills in real-world Linux environments.',
    icon: <FaTerminal className="w-12 h-12 text-accent" />
  },
];

const Features = () => {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-primary uppercase">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-light-gray p-8 rounded-lg border border-primary/10 shadow-lg shadow-primary/5 hover:shadow-lg hover:shadow-accent/20 transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-primary">{feature.name}</h3>
              <p className="text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
