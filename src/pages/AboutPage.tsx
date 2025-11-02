import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8">About EliteLabs</h1>
        <div className="prose dark:prose-invert max-w-4xl mx-auto">
          <p className="text-lg">EliteLabs is a platform dedicated to making the process of learning Linux and other technical skills fun and engaging. We believe that the best way to learn is by doing, and our platform is built around the concept of gamified learning.</p>

          <h2>The Power of Gamified Learning</h2>
          <p>Gamified learning offers numerous benefits for developing technical skills by transforming traditional training into engaging and interactive experiences. This approach leverages game-like elements such as points, badges, leaderboards, and challenges to motivate learners and improve outcomes.</p>

          <h3>Key Benefits:</h3>
          <ul>
            <li><strong>Increased Engagement and Motivation:</strong> Gamification makes learning more enjoyable and interactive, keeping learners interested and committed.</li>
            <li><strong>Improved Knowledge Retention:</strong> Interactive elements, quizzes, and immediate feedback help learners remember lessons more effectively.</li>
            <li><strong>Enhanced Practical Skill Development:</strong> Gamified simulations and real-world scenarios allow individuals to practice problem-solving in a safe environment.</li>
            <li><strong>Immediate Feedback and Faster Learning:</strong> Gamified systems provide instant feedback on performance, enabling learners to quickly identify strengths and areas for improvement.</li>
            <li><strong>Fosters Collaboration and Teamwork:</strong> Team-based challenges and collaborative elements encourage learners to work together and share knowledge.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
