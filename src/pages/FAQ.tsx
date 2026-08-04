import React, { useState } from 'react';
import { FAQS } from '../constants';
import FAQAccordion from '../components/FAQAccordion';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Badge from '../components/Badge';

export const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16 text-left">
      {/* 1. Header */}
      <section className="relative pt-6 flex flex-col gap-8">
        <div className="absolute -top-10 right-1/3 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />
        <SectionTitle
          badge="Information Hub"
          title="Frequently Asked Inquiries"
          description="Read answers regarding our software engineering standards, pricing plans, security audits, and project delivery workflows."
          align="left"
        />

        {/* Dynamic FAQ Search input */}
        <div className="w-full max-w-md self-start relative">
          <input
            type="text"
            placeholder="Search FAQs (e.g. security, IP, tech)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-10 py-3 text-sm rounded-xl bg-white/40 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue transition-colors shadow-sm"
          />
          <span className="absolute right-3 top-3.5 text-gray-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>
      </section>

      {/* 2. FAQ Accordion Grid */}
      <section className="w-full">
        {filteredFAQs.length > 0 ? (
          <FAQAccordion items={filteredFAQs} className="max-w-none" />
        ) : (
          <div className="text-center py-20 border border-dashed border-black/10 dark:border-white/10 rounded-2xl p-6">
            <p className="text-gray-400 text-sm">No FAQs found matching your search term.</p>
            <Button onClick={() => setSearchQuery('')} variant="secondary" className="mt-4">
              Clear Search Query
            </Button>
          </div>
        )}
      </section>

      {/* 3. Global CTA */}
      <section className="rounded-3xl bg-gradient-to-r from-accent-blue/15 to-accent-cyan/15 border border-white/5 p-12 text-center flex flex-col items-center gap-6">
        <Badge variant="purple">Inquiry Portal</Badge>
        <h3 className="font-display font-extrabold text-2xl md:text-4xl text-gray-900 dark:text-white max-w-xl">
          Still Have Questions About Our Architecture Standards?
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
          Our senior engineering directors are available to discuss system integrations and security compliance constraints. Connect with us.
        </p>
        <Button to="/contact" variant="primary">
          Connect With an Engineer
        </Button>
      </section>
    </div>
  );
};

export default FAQ;
