import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaGamepad, FaTrophy, FaVial, FaBook } from 'react-icons/fa';

const features = [
  {
    name: 'Gamified Quizzes',
    description: 'Test your knowledge with our fun and interactive quizzes. Each quiz is designed to challenge you and reinforce your learning. With instant feedback, you\'ll know exactly where you stand.',
    icon: <FaGamepad className="text-5xl text-blue-500 mb-4" />,
  },
  {
    name: 'XP Rewards',
    description: 'Earn experience points (XP) for every challenge you complete and every question you answer correctly. Level up your skills and watch your XP grow as you become a Linux master.',
    icon: <FaTrophy className="text-5xl text-yellow-500 mb-4" />,
  },
  {
    name: 'Leaderboard',
    description: 'Compete with other learners from around the world. Our live leaderboard shows you where you rank. Climb the ranks and become a top EliteLabs learner.',
    icon: <FaTrophy className="text-5xl text-green-500 mb-4" />,
  },
  {
    name: 'Real-World Labs',
    description: 'Apply your skills in real-world Linux environments. Our simulated labs provide a safe and interactive space to practice your command-line skills without any risk.',
    icon: <FaVial className="text-5xl text-red-500 mb-4" />,
  },
];

const FeaturesPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{feature.name}</h3>
                <p className="text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage;