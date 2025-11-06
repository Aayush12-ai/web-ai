import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
// import Particles from 'react-particles';

const Hero = () => {
  return (
    <div className="relative text-primary text-center py-40 overflow-hidden bg-background">
      {/* <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#1a1a1a",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#9f7aea",
            },
            links: {
              color: "#9f7aea",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      /> */}
      <div className="relative z-10">
        <motion.h1 
          className="text-6xl font-bold mb-4 text-accent uppercase tracking-wider"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Unlock the Command Line
        </motion.h1>
        <motion.p 
          className="text-2xl mb-8 text-primary"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Your Cyber Learning Journey Begins Here.
        </motion.p>
        <motion.div 
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <RouterLink to="/signup" className='glow-button glow-button-green'>Start Hacking</RouterLink>
          <RouterLink to="/challenges" className='glow-button glow-button-red'>View Challenges</RouterLink>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;