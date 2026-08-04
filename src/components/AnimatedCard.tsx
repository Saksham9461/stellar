import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group rounded-2xl overflow-hidden glassmorphism p-6 glow-border transition-all duration-500 hover:shadow-2xl hover:shadow-accent-blue/5 dark:hover:shadow-accent-blue/10 hover:-translate-y-1 ${className}`}
    >
      {/* Subtle hover background highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/0 via-accent-purple/0 to-accent-cyan/0 group-hover:from-accent-blue/5 group-hover:via-accent-purple/5 group-hover:to-accent-cyan/5 transition-all duration-500 pointer-events-none" />
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
