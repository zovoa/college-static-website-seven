import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import CampusModel from './3d/CampusModel';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 to-primary-800/50 z-0" />

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center">
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
            Where <span className="text-accent-400">Learning</span> Meets{' '}
            <span className="text-primary-300">Nature</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
            Experience education in harmony with nature at our innovative campus. Discover a
            learning environment that nurtures both mind and environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              href="#about"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover Our Campus
            </motion.a>
            <motion.a
              href="#courses"
              className="btn btn-outline text-white border-white hover:bg-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Programs
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 h-[400px] md:h-[500px] relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <CampusModel />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1, 
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <div className="flex flex-col items-center">
          <p className="text-white text-sm mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
              animate={{ 
                y: [0, 15, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;