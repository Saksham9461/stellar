import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial duration to display the premium loading sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-[#050816] z-[99999] flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
        >
          {/* Glowing Aura backdrop */}
          <div className="relative w-28 h-28 mb-4 flex items-center justify-center">
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-accent-blue via-accent-purple to-accent-cyan rounded-xl opacity-20 blur-xl"
              animate={{ scale: [0.95, 1.15, 0.95], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* SVG Logo drawing */}
            <svg
              className="w-16 h-16 text-white"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M50 15 L80 32 L80 68 L50 85 L20 68 L20 32 Z"
                stroke="url(#preloaderGrad)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
              <motion.path
                d="M50 30 L67 40 L67 60 L50 70 L33 60 L33 40 Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
              />
              <defs>
                <linearGradient id="preloaderGrad" x1="20" y1="15" x2="80" y2="85" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3b82f6" />
                  <stop offset="0.5" stopColor="#a855f7" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Label & Progress Line */}
          <motion.div
            className="text-center font-display tracking-widest text-xs text-gray-400 font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            ANTVIEW TECHNOLOGIES
          </motion.div>
          
          <motion.div
            className="w-24 h-[1px] bg-white/10 mt-3 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="absolute h-full w-10 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan"
              animate={{ x: [-40, 100] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
