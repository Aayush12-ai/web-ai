import React from 'react';
import Button from './Button';

const CallToAction = () => {
  return (
    <div className="py-20 bg-gray-800 dark:bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Linux Journey?</h2>
        <p className="text-lg mb-8">Join EliteLabs today and start learning Linux the fun way.</p>
        <Button to="/signup" variant="signup" className="inline-block px-8 py-4 text-xl font-medium rounded-lg shadow-lg">Get Started</Button>
      </div>
    </div>
  );
};

export default CallToAction;
