import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Send, Check, AlertCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1200);
  };

  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Our Workflow', path: '/process' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  const solutionsLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Tech Stack', path: '/tech-stack' },
    { name: 'Industries', path: '/industries' },
    { name: 'Pricing Plans', path: '/pricing' },
  ];

  const resourceLinks = [
    { name: 'Insights Blog', path: '/blog' },
    { name: 'Help & FAQ', path: '/faq' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  return (
    <footer className="border-t border-black/5 dark:border-white/5 bg-gray-50 dark:bg-[#030611] relative z-10 transition-colors duration-300">
      {/* Background soft lighting blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Logo & Description Column */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2.5">
              <svg
                className="w-7 h-7 text-gray-900 dark:text-white"
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
                  fill="url(#footerLogoGrad)"
                />
                <defs>
                  <linearGradient id="footerLogoGrad" x1="33" y1="32" x2="67" y2="68" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3b82f6" />
                    <stop offset="0.5" stopColor="#a855f7" />
                    <stop offset="1" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-display font-bold text-base tracking-wider text-gray-900 dark:text-white">
                ANTVIEW
              </span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">
              Engineering premium, enterprise-grade software architectures, customized cognitive pipelines, and visually stunning interactive experiences for global innovators.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:border-accent-blue/30 dark:hover:border-accent-blue/30 transition-colors"
                aria-label="GitHub profile link"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:border-accent-purple/30 dark:hover:border-accent-purple/30 transition-colors"
                aria-label="LinkedIn profile link"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:border-accent-cyan/30 dark:hover:border-accent-cyan/30 transition-colors"
                aria-label="Twitter profile link"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Column - Company */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-display font-semibold text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-accent-blue dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column - Solutions */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-display font-semibold text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest">
              Solutions
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {solutionsLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-accent-blue dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column - Resources */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-display font-semibold text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest">
              Resources
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-accent-blue dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter subscription form */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-display font-semibold text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest">
              Newsletter
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              Subscribe to stay updated with our latest releases.
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                disabled={status === 'loading' || status === 'success'}
                className="w-full pl-3 pr-10 py-2.5 text-xs rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="absolute right-1 top-1 bottom-1 px-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-cyan text-white hover:opacity-90 transition-opacity flex items-center justify-center cursor-pointer"
                aria-label="Subscribe email"
              >
                {status === 'success' ? (
                  <Check className="w-3.5 h-3.5 text-white" />
                ) : (
                  <Send className="w-3.5 h-3.5 text-white" />
                )}
              </button>
            </form>
            {/* Status alerts */}
            {status === 'success' && (
              <p className="text-[10px] text-emerald-500 font-medium mt-1 flex items-center gap-1">
                <Check className="w-3 h-3" /> Successfully subscribed!
              </p>
            )}
            {status === 'error' && (
              <p className="text-[10px] text-rose-500 font-medium mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> Invalid email address.
              </p>
            )}
          </div>
        </div>

        {/* Bottom Credits section */}
        <div className="mt-16 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Antview Technologies Private Limited. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400">
            <Link to="/privacy" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</Link>
            <span>&middot;</span>
            <Link to="/terms" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
