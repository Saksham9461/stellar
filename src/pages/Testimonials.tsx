import React from 'react';
import { AlertCircle } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import TestimonialCard from '../components/TestimonialCard';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Badge from '../components/Badge';

export const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16 text-left">
      {/* 1. Header */}
      <section className="relative pt-6">
        <div className="absolute -top-10 right-1/3 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />
        <SectionTitle
          badge="Client Endorsements"
          title="Placeholder Testimonials"
          description="Read dummy reviews compiled strictly to demonstrate grid layouts, typography hierarchies, and aesthetic consistency."
          align="left"
        />
      </section>

      {/* 2. Explicit Placeholder Notice */}
      <section className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 text-amber-800 dark:text-amber-400 text-xs flex gap-3 items-start max-w-3xl">
        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <span className="font-bold">Demonstration Notice:</span> All content, names, logos, and testimonials listed below represent dummy text configured for demonstration layout validation only. No active business contracts are implied.
        </div>
      </section>

      {/* 3. Testimonial Card Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((item, i) => (
          <TestimonialCard key={item.id} testimonial={item} index={i} />
        ))}
      </section>

      {/* 4. Global CTA */}
      <section className="rounded-3xl bg-gradient-to-r from-accent-blue/15 to-accent-cyan/15 border border-white/5 p-12 text-center flex flex-col items-center gap-6">
        <Badge variant="purple">Collaboration</Badge>
        <h3 className="font-display font-extrabold text-2xl md:text-4xl text-gray-900 dark:text-white max-w-xl">
          Interested in Scheduling a Consultation?
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
          Our software architecture desk regularly audits server performance and system schemas. Connect with our engineering directors to coordinate a call.
        </p>
        <Button to="/contact" variant="primary">
          Connect with an Engineer
        </Button>
      </section>
    </div>
  );
};

export default Testimonials;
