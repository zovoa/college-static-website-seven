import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { title: 'Home', path: '#home' },
  { title: 'About', path: '#about' },
  { title: 'Courses', path: '#courses' },
  { title: 'Nature & Sustainability', path: '#sustainability' },
  { title: 'News', path: '#news' },
  { title: 'Contact', path: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="flex items-center gap-2 text-primary-800 font-display font-bold text-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Leaf className="h-6 w-6 text-primary-500" />
            <span>Nature Academy</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.title}
                href={item.path}
                className={`relative px-3 py-2 rounded-full text-sm font-medium ${
                  scrolled ? 'text-neutral-800' : 'text-white'
                } hover:text-primary-500 transition-colors`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 8 }}
              >
                {item.title}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="btn btn-primary ml-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-primary-800 p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white leaf-bg shadow-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <motion.a
                    key={item.title}
                    href={item.path}
                    className="px-4 py-3 text-neutral-800 hover:text-primary-500 hover:bg-primary-50 rounded-lg font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 5 }}
                  >
                    {item.title}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  className="btn btn-primary mt-4 w-full justify-center"
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.95 }}
                >
                  Enroll Now
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;