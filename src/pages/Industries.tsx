import React from 'react';
import * as LucideIcons from 'lucide-react';
import { INDUSTRIES } from '../constants';
import SectionTitle from '../components/SectionTitle';
import AnimatedCard from '../components/AnimatedCard';
import Button from '../components/Button';
import Badge from '../components/Badge';

export const Industries: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-24 text-left">
      {/* 1. Header */}
      <section className="relative pt-6">
        <div className="absolute -top-10 right-1/4 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />
        <SectionTitle
          badge="Market Sectors"
          title="Industries We Service & Optimize"
          description="We align our core technology stacks to solve operational bottlenecks, compliance requirements, and scale challenges for various business segments."
          align="left"
        />
      </section>

      {/* 2. Industries Card Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INDUSTRIES.map((ind, i) => {
          // Dynamic Lucide icon resolution
          const Icon = (LucideIcons as any)[ind.icon] || LucideIcons.HelpCircle;
          return (
            <AnimatedCard key={ind.name} delay={i * 0.05} className="flex flex-col gap-4 text-left p-6 h-full justify-between">
              <div>
                <div className="p-3 w-fit rounded-xl bg-accent-blue/10 text-accent-blue mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-extrabold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-accent-blue transition-colors">
                  {ind.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                  {ind.description}
                </p>
              </div>

              <div>
                <div className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest border-t border-black/5 dark:border-white/5 pt-4">
                  SLA Audits Verified
                </div>
              </div>
            </AnimatedCard>
          );
        })}
      </section>

      {/* 3. Global CTA */}
      <section className="rounded-3xl bg-gradient-to-r from-accent-blue/15 to-accent-cyan/15 border border-white/5 p-12 text-center flex flex-col items-center gap-6">
        <Badge variant="purple">Architecture Planning</Badge>
        <h3 className="font-display font-extrabold text-2xl md:text-4xl text-gray-900 dark:text-white max-w-xl">
          Need a Custom System Built for Your Sector?
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
          Contact our software architecture desk to arrange a technical scoping workshop. We will draft initial database designs and hosting topologies.
        </p>
        <Button to="/contact" variant="primary">
          Consult With an Industry Architect
        </Button>
      </section>
    </div>
  );
};

export default Industries;
