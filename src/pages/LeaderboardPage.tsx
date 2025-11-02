import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const topLearners = [
  { rank: 1, avatar: 'https://i.pravatar.cc/150?img=1', username: 'Alice', xp: 12500 },
  { rank: 2, avatar: 'https://i.pravatar.cc/150?img=2', username: 'Bob', xp: 11000 },
  { rank: 3, avatar: 'https://i.pravatar.cc/150?img=3', username: 'Charlie', xp: 10500 },
  { rank: 4, avatar: 'https://i.pravatar.cc/150?img=4', username: 'David', xp: 9800 },
  { rank: 5, avatar: 'https://i.pravatar.cc/150?img=5', username: 'Eve', xp: 9500 },
  { rank: 6, avatar: 'https://i.pravatar.cc/150?img=6', username: 'Frank', xp: 9200 },
  { rank: 7, avatar: 'https://i.pravatar.cc/150?img=7', username: 'Grace', xp: 8800 },
  { rank: 8, avatar: 'https://i.pravatar.cc/150?img=8', username: 'Heidi', xp: 8500 },
  { rank: 9, avatar: 'https://i.pravatar.cc/150?img=9', username: 'Ivan', xp: 8200 },
  { rank: 10, avatar: 'https://i.pravatar.cc/150?img=10', username: 'Judy', xp: 8000 },
  { rank: 11, avatar: 'https://i.pravatar.cc/150?img=11', username: 'Mallory', xp: 7800 },
  { rank: 12, avatar: 'https://i.pravatar.cc/150?img=12', username: 'Oscar', xp: 7500 },
  { rank: 13, avatar: 'https://i.pravatar.cc/150?img=13', username: 'Peggy', xp: 7200 },
  { rank: 14, avatar: 'https://i.pravatar.cc/150?img=14', username: 'Trent', xp: 7000 },
  { rank: 15, avatar: 'https://i.pravatar.cc/150?img=15', username: 'Walter', xp: 6800 },
];

const LeaderboardPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Leaderboard</h1>
        <div className="max-w-4xl mx-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-800">
                <th className="px-4 py-2">Rank</th>
                <th className="px-4 py-2">User</th>
                <th className="px-4 py-2">XP</th>
              </tr>
            </thead>
            <tbody>
              {topLearners.map((learner) => (
                <tr key={learner.rank} className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-4 py-2 text-center">{learner.rank}</td>
                  <td className="px-4 py-2 flex items-center">
                    <img src={learner.avatar} alt={learner.username} className="w-10 h-10 rounded-full mr-4" />
                    <span>{learner.username}</span>
                  </td>
                  <td className="px-4 py-2 text-center">{learner.xp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LeaderboardPage;
