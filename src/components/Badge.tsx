import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'purple' | 'cyan' | 'gray';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  className = ''
}) => {
  const variants = {
    blue: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20 dark:text-blue-400 dark:border-blue-500/30',
    purple: 'bg-accent-purple/10 text-accent-purple border-accent-purple/20 dark:text-purple-400 dark:border-purple-500/30',
    cyan: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20 dark:text-cyan-400 dark:border-cyan-500/30',
    gray: 'bg-black/5 dark:bg-white/5 text-gray-500 dark:text-gray-400 border-black/10 dark:border-white/10'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest border font-display uppercase ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
