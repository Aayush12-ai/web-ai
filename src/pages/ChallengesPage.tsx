import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { questions } from '../data/questions';
import Lab from '../components/Lab';

const ChallengesPage = () => {
  const [level, setLevel] = useState('beginner');

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Challenges</h1>
        <div className="flex justify-center mb-8">
          <button onClick={() => setLevel('beginner')} className={`px-4 py-2 rounded-l-lg ${level === 'beginner' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>Beginner</button>
          <button onClick={() => setLevel('intermediate')} className={`px-4 py-2 ${level === 'intermediate' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>Intermediate</button>
          <button onClick={() => setLevel('expert')} className={`px-4 py-2 ${level === 'expert' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>Expert</button>
          <button onClick={() => setLevel('lab')} className={`px-4 py-2 rounded-r-lg ${level === 'lab' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>Lab</button>
        </div>
        {level !== 'lab' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {questions[level].map((q, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <p className="text-lg">{q.question}</p>
              </div>
            ))}
          </div>
        ) : (
          <Lab />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ChallengesPage;
