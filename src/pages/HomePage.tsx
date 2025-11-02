import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import LiveLeaderboard from '../components/LiveLeaderboard';
import PopularChallenges from '../components/PopularChallenges';
import DocsPreview from '../components/DocsPreview';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="challenges">
        <PopularChallenges />
      </div>
      <LiveLeaderboard />
      <DocsPreview />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;
