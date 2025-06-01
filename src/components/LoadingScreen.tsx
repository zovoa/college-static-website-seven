import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <Leaf className="w-16 h-16 text-primary-500 animate-sway" />
        <h1 className="mt-6 text-3xl font-display font-bold text-primary-800">
          Nature Academy
        </h1>
        <p className="mt-2 text-primary-600">Where Learning Meets Nature</p>
        
        <div className="w-64 h-2 mt-8 bg-primary-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-primary-600">
          Loading natural environment... {Math.round(progress)}%
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;