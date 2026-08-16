import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timeout = setTimeout(() => {
      finishLoading();
    }, 2500); // 2.5 seconds duration
    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]"
      initial={{ y: 0 }}
      exit={{ y: '-100%', opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Top Left Icon/Logo */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-8 left-8 text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 512 512">
          <rect width="512" height="512" rx="128" fill="#ffffff" />
          <text x="50%" y="53%" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="320" fill="#0a0a0a" textAnchor="middle" dominantBaseline="middle" letterSpacing="-10">B</text>
        </svg>
      </motion.div>

      {/* Centered Text */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-zinc-400 text-xs md:text-sm tracking-[0.3em] uppercase font-medium flex items-center gap-4"
      >
        <span className="text-white">BHABANI.DEV</span>
        <span className="text-zinc-600 text-sm">©</span>
        <span>EST. {new Date().getFullYear()}</span>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
