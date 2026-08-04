import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronDown, Cpu, Layers, Building2, BrainCircuit, Users, Compass, HelpCircle, FileText, BadgeCheck, MessageSquare } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'solutions' | 'company' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu or dropdowns on path change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    const lenis = (window as any).lenis;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    }
    return () => {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    };
  }, [isOpen]);

  const toggleDropdown = (dropdown: 'solutions' | 'company') => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const isActive = (path: string) => location.pathname === path;

  const solutionsLinks = [
    { name: 'Our Services', path: '/services', desc: 'Custom AI, Web and Mobile apps.', icon: Cpu },
    { name: 'Technology Stack', path: '/tech-stack', desc: 'Optimized developer frameworks.', icon: Layers },
    { name: 'Industries We Serve', path: '/industries', desc: 'Bespoke sector-specific builds.', icon: Building2 },
  ];

  const companyLinks = [
    { name: 'About Antview', path: '/about', desc: 'Our mission, story and values.', icon: Users },
    { name: 'Why Choose Us', path: '/why-choose-us', desc: 'What separates us from agencies.', icon: BadgeCheck },
    { name: 'Our Workflow', path: '/process', desc: 'Discover our 8-phase timeline.', icon: Compass },
    { name: 'Testimonials', path: '/testimonials', desc: 'Client reviews and metrics.', icon: MessageSquare },
    { name: 'FAQs Accordion', path: '/faq', desc: 'Common inquiries answered.', icon: HelpCircle },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/70 dark:bg-[#050816]/75 backdrop-blur-md border-b border-black/5 dark:border-white/5 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Crisp Geometric Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue via-accent-purple to-accent-cyan rounded-lg opacity-40 blur group-hover:opacity-85 transition-opacity" />
            <svg
              className="w-6 h-6 text-gray-900 dark:text-white relative z-10 transition-transform duration-500 group-hover:rotate-12"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 15 L85 35 L85 65 L50 85 L15 65 L15 35 Z"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinejoin="round"
              />
              <path
                d="M50 32 L67 42 L67 58 L50 68 L33 58 L33 42 Z"
                fill="url(#navLogoGrad)"
              />
              <defs>
                <linearGradient id="navLogoGrad" x1="33" y1="32" x2="67" y2="68" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3b82f6" />
                  <stop offset="0.5" stopColor="#a855f7" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="font-display font-bold text-lg tracking-wider text-gray-900 dark:text-white">
            ANTVIEW
          </span>
        </Link>

        {/* Desktop Navigation Link Nodes */}
        <nav className="hidden lg:flex items-center gap-1 font-display">
          {/* Solutions Dropdown Menu */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('solutions')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown('solutions')}
              className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors cursor-pointer rounded-lg hover:bg-black/5 dark:hover:bg-white/5 ${
                activeDropdown === 'solutions' || solutionsLinks.some(l => isActive(l.path))
                  ? 'text-accent-blue'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Solutions <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === 'solutions' && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-80 bg-white dark:bg-[#0b0f19] border border-black/5 dark:border-white/10 rounded-2xl p-4 shadow-2xl z-40"
                >
                  <div className="flex flex-col gap-1">
                    {solutionsLinks.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setActiveDropdown(null)}
                        className={`flex gap-3 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors group ${
                          isActive(item.path) ? 'bg-accent-blue/5' : ''
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${isActive(item.path) ? 'bg-accent-blue/10 text-accent-blue' : 'bg-gray-100 dark:bg-white/5 text-gray-500 group-hover:text-accent-blue group-hover:bg-accent-blue/10 transition-colors'}`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">{item.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/portfolio"
            onMouseEnter={() => setActiveDropdown(null)}
            className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-black/5 dark:hover:bg-white/5 ${
              isActive('/portfolio') ? 'text-accent-blue' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Portfolio
          </Link>

          {/* Company Dropdown Menu */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('company')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown('company')}
              className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors cursor-pointer rounded-lg hover:bg-black/5 dark:hover:bg-white/5 ${
                activeDropdown === 'company' || companyLinks.some(l => isActive(l.path))
                  ? 'text-accent-blue'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Company <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === 'company' && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-80 bg-white dark:bg-[#0b0f19] border border-black/5 dark:border-white/10 rounded-2xl p-4 shadow-2xl z-40"
                >
                  <div className="flex flex-col gap-1">
                    {companyLinks.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setActiveDropdown(null)}
                        className={`flex gap-3 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors group ${
                          isActive(item.path) ? 'bg-accent-blue/5' : ''
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${isActive(item.path) ? 'bg-accent-blue/10 text-accent-blue' : 'bg-gray-100 dark:bg-white/5 text-gray-500 group-hover:text-accent-blue group-hover:bg-accent-blue/10 transition-colors'}`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">{item.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/pricing"
            onMouseEnter={() => setActiveDropdown(null)}
            className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-black/5 dark:hover:bg-white/5 ${
              isActive('/pricing') ? 'text-accent-blue' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Pricing
          </Link>

          <Link
            to="/blog"
            onMouseEnter={() => setActiveDropdown(null)}
            className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-black/5 dark:hover:bg-white/5 ${
              isActive('/blog') ? 'text-accent-blue' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Blog
          </Link>
        </nav>

        {/* Global Controls: Theme Toggle & Contact Portal */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-black/5 dark:border-white/10 hover:border-accent-cyan/30 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle dark/light mode"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Button to="/contact" variant="primary" className="py-2.5 px-5">
            Contact Us
          </Button>
        </div>

        {/* Mobile controls & toggle button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-black/5 dark:border-white/10 text-gray-600 dark:text-gray-300 transition-colors"
            aria-label="Toggle dark/light mode"
          >
            {theme === 'dark' ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
          </button>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-2.5 rounded-xl border border-black/5 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Full Screen Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-[#050816]/95 border-b border-black/5 dark:border-white/10 backdrop-blur-lg overflow-y-auto max-h-[85vh] shadow-2xl"
          >
            <div className="p-6 flex flex-col gap-6 font-display">
              {/* Category Solutions */}
              <div>
                <div className="text-[10px] font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-3">Solutions</div>
                <div className="flex flex-col gap-3">
                  {solutionsLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center gap-3 p-2.5 rounded-xl ${
                        isActive(link.path) ? 'bg-accent-blue/10 text-accent-blue font-semibold' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <link.icon className="w-4.5 h-4.5 opacity-70" />
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Category Showcase */}
              <div>
                <div className="text-[10px] font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-3">Showcase</div>
                <Link
                  to="/portfolio"
                  className={`flex items-center gap-3 p-2.5 rounded-xl ${
                    isActive('/portfolio') ? 'bg-accent-blue/10 text-accent-blue font-semibold' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <BrainCircuit className="w-4.5 h-4.5 opacity-70" />
                  <span>Case Studies</span>
                </Link>
              </div>

              {/* Category Company */}
              <div>
                <div className="text-[10px] font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-3">Company</div>
                <div className="flex flex-col gap-3">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center gap-3 p-2.5 rounded-xl ${
                        isActive(link.path) ? 'bg-accent-blue/10 text-accent-blue font-semibold' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <link.icon className="w-4.5 h-4.5 opacity-70" />
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Secondary Main Links */}
              <div className="flex flex-col gap-3 pt-3 border-t border-black/5 dark:border-white/5">
                <Link
                  to="/pricing"
                  className={`flex items-center gap-3 p-2.5 rounded-xl ${
                    isActive('/pricing') ? 'bg-accent-blue/10 text-accent-blue font-semibold' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <FileText className="w-4.5 h-4.5 opacity-70" />
                  <span>Pricing Models</span>
                </Link>
                <Link
                  to="/blog"
                  className={`flex items-center gap-3 p-2.5 rounded-xl ${
                    isActive('/blog') ? 'bg-accent-blue/10 text-accent-blue font-semibold' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <FileText className="w-4.5 h-4.5 opacity-70" />
                  <span>Publications</span>
                </Link>
              </div>

              {/* Mobile CTA */}
              <div className="pt-2">
                <Button to="/contact" variant="primary" className="w-full py-3">
                  Get In Touch
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
