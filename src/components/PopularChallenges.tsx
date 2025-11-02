import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from './Button';

const challenges = [
  {
    name: 'File System Navigation',
    difficulty: 'Beginner',
  },
  {
    name: 'User and Group Management',
    difficulty: 'Intermediate',
  },
  {
    name: 'Network Configuration',
    difficulty: 'Expert',
  },
  {
    name: 'Bash Scripting Basics',
    difficulty: 'Intermediate',
  },
];

const PopularChallenges = () => {
  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Popular Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
              <span className={`inline-block bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white text-xs px-2 rounded-full uppercase font-semibold tracking-wide`}>
                {challenge.difficulty}
              </span>
              <h3 className="text-xl font-bold my-4 text-gray-900 dark:text-white">{challenge.name}</h3>
              <Button to="/challenges" variant="primary" className="inline-flex items-center justify-center px-4 py-2 transform transition hover:scale-105">Try Now</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularChallenges;
