import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-background text-primary py-8 border-t border-accent/20">
      <div className="container mx-auto text-center">
        <div className="flex justify-center gap-8 mb-4">
          <a href="https://github.com/Aayush12-ai/web-ai.git" className="text-2xl text-primary hover:text-accent transition-colors duration-300"><FaGithub /></a>
          <a href="#" className="text-2xl text-primary hover:text-accent transition-colors duration-300"><FaLinkedin /></a>
          <a href="#" className="text-2xl text-primary hover:text-accent transition-colors duration-300"><FaTwitter /></a>
          <a href="#" className="text-2xl text-primary hover:text-accent transition-colors duration-300"><FaYoutube /></a>
        </div>
        <p className="mb-4 text-primary">support@elitelabs.com</p>
        <p className="text-primary">&copy; 2025 EliteLabs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
