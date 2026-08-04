import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Mail, Phone, Calendar, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col gap-2 mb-2 items-end"
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* Quick Email link */}
            <motion.a
              href="mailto:hello@antview.tech"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white dark:bg-[#0b0f19] text-gray-800 dark:text-white text-xs font-semibold shadow-xl border border-black/5 dark:border-white/10 hover:border-accent-blue/30 dark:hover:border-accent-blue/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>hello@antview.tech</span>
              <div className="p-1 rounded-full bg-accent-blue/10 text-accent-blue dark:text-accent-cyan">
                <Mail className="w-3.5 h-3.5" />
              </div>
            </motion.a>

            {/* Quick Phone link */}
            <motion.a
              href="tel:+911155550199"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white dark:bg-[#0b0f19] text-gray-800 dark:text-white text-xs font-semibold shadow-xl border border-black/5 dark:border-white/10 hover:border-accent-purple/30 dark:hover:border-accent-purple/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>+91 (11) 5555-0199</span>
              <div className="p-1 rounded-full bg-accent-purple/10 text-accent-purple">
                <Phone className="w-3.5 h-3.5" />
              </div>
            </motion.a>

            {/* Consultation redirect link */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan text-white text-xs font-semibold shadow-xl hover:shadow-accent-blue/20 transition-all"
              >
                <span>Book a Consultation</span>
                <div className="p-1 rounded-full bg-white/20 text-white">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Toggle Trigger */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-12 h-12 rounded-full bg-gradient-to-tr from-accent-blue via-accent-purple to-accent-cyan text-white shadow-xl hover:shadow-accent-blue/30 dark:hover:shadow-accent-blue/50 flex items-center justify-center cursor-pointer relative border border-white/10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle contact menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageSquare className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingContact;
