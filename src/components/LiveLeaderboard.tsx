import React, { useState, useEffect } from 'react';
import { Trophy, TrendingUp, TrendingDown, Minus, Crown, Medal, Award, Zap, Star } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import Button from './Button';

interface Learner {
  avatar: string;
  username: string;
  xp: number;
  rank: number;
  trend: 'up' | 'down' | 'same';
  xpGain?: number;
}

const initialTopLearners: Learner[] = [
  { avatar: 'https://randomuser.me/api/portraits/men/1.jpg', username: 'Alice', xp: 12500, rank: 1, trend: 'up', xpGain: 250 },
  { avatar: 'https://randomuser.me/api/portraits/women/2.jpg', username: 'Bob', xp: 11000, rank: 2, trend: 'same', xpGain: 150 },
  { avatar: 'https://randomuser.me/api/portraits/men/3.jpg', username: 'Charlie', xp: 10500, rank: 3, trend: 'up', xpGain: 320 },
  { avatar: 'https://randomuser.me/api/portraits/women/4.jpg', username: 'David', xp: 9800, rank: 4, trend: 'down', xpGain: 80 },
  { avatar: 'https://randomuser.me/api/portraits/men/5.jpg', username: 'Eve', xp: 9500, rank: 5, trend: 'up', xpGain: 180 },
  { avatar: 'https://randomuser.me/api/portraits/women/6.jpg', username: 'Frank', xp: 9200, rank: 6, trend: 'same', xpGain: 120 },
  { avatar: 'https://randomuser.me/api/portraits/men/7.jpg', username: 'Grace', xp: 8800, rank: 7, trend: 'up', xpGain: 200 },
  { avatar: 'https://randomuser.me/api/portraits/women/8.jpg', username: 'Heidi', xp: 8500, rank: 8, trend: 'down', xpGain: 60 },
  { avatar: 'https://randomuser.me/api/portraits/men/9.jpg', username: 'Ivan', xp: 8200, rank: 9, trend: 'up', xpGain: 140 },
  { avatar: 'https://randomuser.me/api/portraits/women/10.jpg', username: 'Judy', xp: 8000, rank: 10, trend: 'same', xpGain: 100 },
];

const LiveLeaderboard: React.FC = () => {
  const [topLearners, setTopLearners] = useState<Learner[]>(initialTopLearners);
  const [isLive, setIsLive] = useState<boolean>(true);
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);

  // Simulate live XP updates
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setTopLearners(prev => {
        const updated = [...prev];
        const randomIndex = Math.floor(Math.random() * updated.length);
        const xpIncrease = Math.floor(Math.random() * 50) + 10;
        
        updated[randomIndex] = {
          ...updated[randomIndex],
          xp: updated[randomIndex].xp + xpIncrease,
          xpGain: xpIncrease,
        };

        setAnimatingIndex(randomIndex);
        setTimeout(() => setAnimatingIndex(null), 1000);

        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isLive]);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-accent fill-accent" />;
      case 2:
        return <Medal className="w-6 h-6 text-primary fill-primary" />;
      case 3:
        return <Award className="w-6 h-6 text-secondary fill-secondary" />;
      default:
        return <span className="text-primary dark:text-light-gray font-bold">#{rank}</span>;
    }
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'same') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-emerald-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <Minus className="w-4 h-4 text-secondary" />;
    }
  };

  const getCardStyle = (rank: number): string => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-br from-accent/20 via-accent/10 to-transparent border-accent/50';
      case 2:
        return 'bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-primary/50';
      case 3:
        return 'bg-gradient-to-br from-secondary/20 via-secondary/10 to-transparent border-secondary/50';
      default:
        return 'bg-secondary border-primary/10';
    }
  };

  return (
    <div className="relative py-20 bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </div>
            <span className="text-sm text-accent font-medium">Live Updates</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Live Leaderboard
            </span>
          </h2>
          <p className="text-xl text-primary dark:text-light-gray max-w-2xl mx-auto">
            Compete with the best Linux learners worldwide
          </p>

          {/* Live Toggle */}
          <button
            onClick={() => setIsLive(!isLive)}
            className={`mt-4 px-4 py-2 rounded-lg font-medium transition-all ${
              isLive
                ? 'bg-accent/20 text-accent border border-accent/50'
                : 'bg-background text-primary dark:text-light-gray border border-primary/20'
            }`}
          >
            {isLive ? '🟢 Live Updates On' : '⚪ Live Updates Off'}
          </button>
        </div>

        {/* Top 3 Podium - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12 items-end">
          {/* 2nd Place */}
          <div className="order-1 transform hover:scale-105 transition-transform duration-300">
            <div className={`relative ${getCardStyle(2)} backdrop-blur-xl rounded-2xl p-6 border-2 shadow-2xl`}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-background rounded-full p-2 border-2 border-primary">
                  {getRankIcon(2)}
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 rounded-full blur-lg opacity-50" />
                  <img
                    src={topLearners[1].avatar}
                    alt={topLearners[1].username}
                    className="relative w-24 h-24 rounded-full border-4 border-primary mx-auto mb-3"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary dark:text-light-gray mb-1">{topLearners[1].username}</h3>
                <div className="flex items-center justify-center gap-2 text-primary dark:text-light-gray">
                  <Zap className="w-4 h-4 text-accent fill-accent" />
                  <span className="text-xl font-bold">{topLearners[1].xp.toLocaleString()} XP</span>
                </div>
                <div className="flex items-center justify-center gap-1 mt-2">
                  {getTrendIcon(topLearners[1].trend)}
                  <span className="text-sm text-primary dark:text-light-gray">+{topLearners[1].xpGain} today</span>
                </div>
              </div>
            </div>
          </div>

          {/* 1st Place */}
          <div className="order-2 transform hover:scale-105 transition-transform duration-300">
            <div className={`relative ${getCardStyle(1)} backdrop-blur-xl rounded-2xl p-8 border-2 shadow-2xl`}>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-background rounded-full p-3 border-2 border-accent animate-pulse">
                  {getRankIcon(1)}
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/50 rounded-full blur-xl opacity-60 animate-pulse" />
                  <img
                    src={topLearners[0].avatar}
                    alt={topLearners[0].username}
                    className="relative w-32 h-32 rounded-full border-4 border-accent mx-auto mb-4"
                  />
                  <div className="absolute -top-2 -right-2">
                    <Star className="w-8 h-8 text-accent fill-accent animate-spin-slow" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-primary dark:text-light-gray mb-2">{topLearners[0].username}</h3>
                <div className="flex items-center justify-center gap-2 text-primary dark:text-light-gray">
                  <Zap className="w-5 h-5 text-accent fill-accent" />
                  <span className="text-2xl font-bold">{topLearners[0].xp.toLocaleString()} XP</span>
                </div>
                <div className="flex items-center justify-center gap-1 mt-2">
                  {getTrendIcon(topLearners[0].trend)}
                  <span className="text-sm text-primary dark:text-light-gray">+{topLearners[0].xpGain} today</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="order-3 transform hover:scale-105 transition-transform duration-300">
            <div className={`relative ${getCardStyle(3)} backdrop-blur-xl rounded-2xl p-6 border-2 shadow-2xl`}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-background rounded-full p-2 border-2 border-secondary">
                  {getRankIcon(3)}
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/50 rounded-full blur-lg opacity-50" />
                  <img
                    src={topLearners[2].avatar}
                    alt={topLearners[2].username}
                    className="relative w-24 h-24 rounded-full border-4 border-secondary mx-auto mb-3"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary dark:text-light-gray mb-1">{topLearners[2].username}</h3>
                <div className="flex items-center justify-center gap-2 text-primary dark:text-light-gray">
                  <Zap className="w-4 h-4 text-accent fill-accent" />
                  <span className="text-xl font-bold">{topLearners[2].xp.toLocaleString()} XP</span>
                </div>
                <div className="flex items-center justify-center gap-1 mt-2">
                  {getTrendIcon(topLearners[2].trend)}
                  <span className="text-sm text-primary dark:text-light-gray">+{topLearners[2].xpGain} today</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Learners - Grid for Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {topLearners.map((learner, index) => (
            <div
              key={index}
              className={`relative ${getCardStyle(learner.rank)} backdrop-blur-md rounded-xl p-4 border transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                animatingIndex === index ? 'ring-2 ring-accent scale-110' : ''
              }`}
            >
              {animatingIndex === index && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                  +{learner.xpGain} XP
                </div>
              )}
              
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-shrink-0">
                  {getRankIcon(learner.rank)}
                </div>
                <div className="flex-shrink-0">
                  {getTrendIcon(learner.trend)}
                </div>
              </div>

              <div className="text-center">
                <img
                  src={learner.avatar}
                  alt={learner.username}
                  className="w-16 h-16 rounded-full mx-auto mb-2"
                />
                <h3 className="text-lg font-bold text-primary dark:text-light-gray truncate">{learner.username}</h3>
                <div className="flex items-center justify-center gap-1 text-primary dark:text-light-gray text-sm">
                  <Zap className="w-3 h-3 text-accent fill-accent" />
                  <span className="font-semibold">{learner.xp.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden flex overflow-x-auto space-x-4 pb-6 mb-8 snap-x snap-mandatory scrollbar-hide">
          {topLearners.map((learner, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-64 ${getCardStyle(learner.rank)} backdrop-blur-md rounded-xl p-6 border-2 snap-center ${
                animatingIndex === index ? 'ring-2 ring-accent scale-105' : ''
              }`}
            >
              {animatingIndex === index && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                  +{learner.xpGain} XP
                </div>
              )}

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {getRankIcon(learner.rank)}
                </div>
                {getTrendIcon(learner.trend)}
              </div>

              <div className="text-center">
                <img
                  src={learner.avatar}
                  alt={learner.username}
                  className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-accent"
                />
                <h3 className="text-xl font-bold text-primary dark:text-light-gray mb-1">{learner.username}</h3>
                <div className="flex items-center justify-center gap-2 text-primary dark:text-light-gray">
                  <Zap className="w-4 h-4 text-accent fill-accent" />
                  <span className="text-lg font-bold">{learner.xp.toLocaleString()} XP</span>
                </div>
                <p className="text-sm text-primary dark:text-light-gray mt-2">+{learner.xpGain} today</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to="/leaderboard" variant="signup" className="px-8 py-3 text-lg">
            <Trophy className="w-5 h-5 inline mr-2" />
            View Full Leaderboard
          </Button>
          <Button to="/challenges" variant="secondary" className="px-8 py-3 text-lg">
            <Zap className="w-5 h-5 inline mr-2" />
            Explore Challenges
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { label: 'Active Players', value: '10,247' },
            { label: 'XP Earned Today', value: '2.4M' },
            { label: 'Challenges Completed', value: '15.3K' },
            { label: 'Countries', value: '142' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-secondary/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:bg-secondary transition-all duration-300"
            >
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                {stat.value}
              </div>
              <div className="text-sm text-primary dark:text-light-gray mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default LiveLeaderboard;