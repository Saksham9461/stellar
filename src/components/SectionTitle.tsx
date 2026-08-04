import React from 'react';
import { motion } from 'framer-motion';
import Badge from './Badge';

interface SectionTitleProps {
  title: string;
  badge?: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  badge,
  description,
  align = 'center'
}) => {
  const isLeft = align === 'left';

  return (
    <div className={`flex flex-col gap-3.5 mb-16 max-w-3xl ${isLeft ? 'text-left' : 'text-center mx-auto'}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Badge variant="blue">{badge}</Badge>
        </motion.div>
      )}
      <motion.h2
        className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white tracking-tight leading-tight"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
          style={isLeft ? { marginLeft: '0px' } : undefined}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
