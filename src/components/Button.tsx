import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-display font-medium text-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent-blue/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer overflow-hidden';

  const variants = {
    primary: 'bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan text-white shadow-lg hover:shadow-accent-blue/20 hover:shadow-xl hover:-translate-y-0.5 border border-white/10 active:translate-y-0',
    secondary: 'glassmorphism text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 border-black/10 dark:border-white/15 hover:border-accent-blue/30 active:scale-98',
    outline: 'border border-black/10 dark:border-white/10 hover:border-accent-cyan text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white active:scale-98'
  };

  const buttonContent = (
    <span className="relative z-10 flex items-center gap-2">
      {children}
    </span>
  );

  const motionProps = {
    whileTap: { scale: 0.98 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 15 }
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
          {buttonContent}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseStyles} ${variants[variant]} ${className}`}>
          {buttonContent}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;
