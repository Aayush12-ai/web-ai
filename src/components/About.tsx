import React from 'react';
import { FaBook, FaGamepad, FaTrophy } from 'react-icons/fa';

const About = () => {
  return (
    <div className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Master Linux Through Gamified Learning</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          EliteLabs helps beginners master Linux in a fun and interactive way. 
          Our platform is built on the principles of gamified learning, making the process of learning Linux engaging and rewarding.
        </p>
        <div className="flex justify-center gap-16">
          <div className="flex flex-col items-center">
            <FaBook className="text-5xl text-blue-500 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Learn</h3>
          </div>
          <div className="flex flex-col items-center">
            <FaGamepad className="text-5xl text-green-500 dark:text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Play</h3>
          </div>
          <div className="flex flex-col items-center">
            <FaTrophy className="text-5xl text-yellow-500 dark:text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Compete</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
