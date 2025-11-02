import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <div className="bg-gray-900 dark:bg-black text-white text-center py-20">
      <h1 className="text-5xl font-bold mb-4">Learn Linux the Fun Way</h1>
      <p className="text-xl mb-8">Through Games, Challenges, and Quests.</p>
      <div className="flex justify-center gap-4">
        <Button to="/login" variant="login" className="px-6 py-3">Start Learning</Button>
        <Button to="/signup" variant="signup" className="px-6 py-3">Join Now</Button>
      </div>
    </div>
  );
};

export default Hero;
