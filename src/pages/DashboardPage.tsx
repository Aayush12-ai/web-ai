import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { motion } from 'framer-motion';

const DashboardPage: React.FC = () => {
  const { user } = useContext(AuthContext);

  // Mock data for enrolled courses
  const enrolledCourses = [
    { id: 1, title: 'Linux Fundamentals', progress: 60 },
    { id: 2, title: 'Bash Scripting', progress: 80 },
    { id: 3, title: 'Network Security', progress: 30 },
  ];

  return (
    <div className="bg-primary min-h-screen p-8 text-white">
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-accent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome, {user?.username || 'User'}!
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div 
            className="bg-secondary p-6 rounded-lg border border-accent/20 shadow-lg shadow-accent/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Points</h2>
            <p className="text-4xl font-bold text-accent">{user?.points || 0} XP</p>
          </motion.div>
          <motion.div 
            className="bg-secondary p-6 rounded-lg border border-accent/20 shadow-lg shadow-accent/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Courses Completed</h2>
            <p className="text-4xl font-bold text-accent">{user?.completedCourses || 0}</p>
          </motion.div>
          <motion.div 
            className="bg-secondary p-6 rounded-lg border border-accent/20 shadow-lg shadow-accent/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4">Rank</h2>
            <p className="text-4xl font-bold text-accent">#{user?.rank || 'N/A'}</p>
          </motion.div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Enrolled Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enrolledCourses.map((course, index) => (
              <motion.div 
                key={course.id} 
                className="bg-secondary p-6 rounded-lg border border-accent/20 shadow-lg shadow-accent/10 hover:shadow-glow-accent transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4">{course.title}</h3>
                <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
                  <div 
                    className="bg-accent h-4 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-right text-sm text-gray-400">{course.progress}% Complete</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
