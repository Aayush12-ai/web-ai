import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center gap-8 mb-4">
          <a href="https://github.com/Aayush12-ai/web-ai.git" className="text-2xl hover:text-gray-400"><FaGithub /></a>
          <a href="#" className="text-2xl hover:text-gray-400"><FaLinkedin /></a>
          <a href="#" className="text-2xl hover:text-gray-400"><FaTwitter /></a>
          <a href="#" className="text-2xl hover:text-gray-400"><FaYoutube /></a>
        </div>
        <p className="mb-4">support@elitelabs.com</p>
        <p>&copy; 2025 EliteLabs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
