import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../types';

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, className = 'max-w-4xl mx-auto' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={`flex flex-col gap-4 w-full text-left ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="rounded-2xl border border-black/5 dark:border-white/10 overflow-hidden bg-white/40 dark:bg-[#080c1d]/30 transition-all duration-300"
          >
            {/* Accessible toggle button */}
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex items-center justify-between p-5 text-left font-display font-semibold text-gray-900 dark:text-white hover:text-accent-blue dark:hover:text-accent-cyan transition-colors cursor-pointer gap-4"
              aria-expanded={isOpen}
            >
              <span className="text-sm md:text-base leading-snug">{item.question}</span>
              <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent-blue' : ''}`} />
            </button>
            
            {/* Animated content expansion */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="p-5 pt-0 text-xs md:text-sm text-gray-500 dark:text-gray-400 border-t border-black/5 dark:border-white/5 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
