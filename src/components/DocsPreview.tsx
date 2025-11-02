import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const topics = [
  'Basic Commands',
  'File System',
  'Networking',
  'Permissions',
  'Shell Scripting',
];

const DocsPreview = () => {
  return (
    <div className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white">Explore Our Docs</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">{topic}</h3>
            </div>
          ))}
        </div>
        <RouterLink to="/docs" className="mt-8 inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg shadow-lg text-white bg-indigo-600 hover:bg-indigo-500 hover:scale-105 transform transition-all duration-200 ease-in-out border-2 border-indigo-600 hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Explore More
        </RouterLink>
      </div>
    </div>
  );
};

export default DocsPreview;
