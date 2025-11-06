import React from 'react';
import { FaBook, FaGamepad, FaTrophy } from 'react-icons/fa';

const About = () => {
  return (
    <div className="py-20 bg-secondary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-white">Master Linux Through Gamified Learning</h2>
            <p className="text-lg mb-12 max-w-3xl mx-auto md:mx-0 text-gray-300">
              EliteLabs helps beginners master Linux in a fun and interactive way. 
              Our platform is built on the principles of gamified learning, making the process of learning Linux engaging and rewarding.
            </p>
            <div className="flex justify-center md:justify-start gap-16">
              <div className="flex flex-col items-center">
                <FaBook className="text-5xl text-accent mb-4" />
                <h3 className="text-xl font-bold text-white">Learn</h3>
              </div>
              <div className="flex flex-col items-center">
                <FaGamepad className="text-5xl text-accent mb-4" />
                <h3 className="text-xl font-bold text-white">Play</h3>
              </div>
              <div className="flex flex-col items-center">
                <FaTrophy className="text-5xl text-accent mb-4" />
                <h3 className="text-xl font-bold text-white">Compete</h3>
              </div>
            </div>
          </div>
          <div>
            <img src="https://via.placeholder.com/500x300" alt="Gamified Learning" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
