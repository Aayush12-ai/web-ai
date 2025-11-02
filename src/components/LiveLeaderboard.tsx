import React from 'react';

const topLearners = [
  {
    avatar: 'https://i.pravatar.cc/150?img=1',
    username: 'Alice',
    xp: 12500,
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=2',
    username: 'Bob',
    xp: 11000,
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=3',
    username: 'Charlie',
    xp: 10500,
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=4',
    username: 'David',
    xp: 9800,
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=5',
    username: 'Eve',
    xp: 9500,
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=6',
    username: 'Frank',
    xp: 9200,
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=7',
    username: 'Grace',
    xp: 8800,
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=8',
    username: 'Heidi',
    xp: 8500,
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=9',
    username: 'Ivan',
    xp: 8200,
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=10',
    username: 'Judy',
    xp: 8000,
  },
];

import { Link as RouterLink } from 'react-router-dom';
import Button from './Button';

const LiveLeaderboard = () => {
  return (
    <div className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Live Leaderboard</h2>

        {/* Horizontal scroller on small screens, grid on md+ */}
        <div className="w-full">
          <div className="hidden md:grid md:grid-cols-5 gap-6">
            {topLearners.map((learner, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
                <img src={learner.avatar} alt={learner.username} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{learner.username}</h3>
                <p className="text-gray-600 dark:text-gray-300">{learner.xp} XP</p>
              </div>
            ))}
          </div>

          <div className="md:hidden flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory">
            {topLearners.map((learner, index) => (
              <div key={index} className="flex-shrink-0 w-64 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center snap-center">
                <img src={learner.avatar} alt={learner.username} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{learner.username}</h3>
                <p className="text-gray-600 dark:text-gray-300">{learner.xp} XP</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Button to="/leaderboard" variant="signup" className="px-5 py-3">View Full Leaderboard</Button>
          <Button to="/challenges" variant="secondary" className="px-5 py-3">Explore Challenges</Button>
        </div>
      </div>
    </div>
  );
};

export default LiveLeaderboard;
