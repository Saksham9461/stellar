import React from 'react';
import { Zap, Server, ShieldCheck, HeartHandshake, Check, X } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import AnimatedCard from '../components/AnimatedCard';
import Counter from '../components/Counter';
import Button from '../components/Button';
import Badge from '../components/Badge';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Senior-Only Engineering Teams',
      desc: 'We do not hire junior developers or outsource core coding blocks. Your project is built entirely by senior React developers and experienced backend architects.',
      icon: ShieldCheck
    },
    {
      title: 'Zero Templating Policy',
      desc: 'We design custom layouts from clean, blank Figma canvas files and build custom stylesheets. No bloated UI kits, element builders, or themes.',
      icon: Zap
    },
    {
      title: 'Strict Quality Assurance',
      desc: 'We enforce automated Cypress testing runs, TypeScript compilation constraints, and accessibility audits. Your code compiles cleanly with zero warnings.',
      icon: Server
    },
    {
      title: 'Absolute Intellectual Property Rights',
      desc: 'You maintain full ownership of all repositories and database deployments from day one. We establish clear transfers with zero recurring license constraints.',
      icon: HeartHandshake
    }
  ];

  const comparison = [
    { metric: 'Development Codebase', agency: 'Generic templates / pre-built frameworks', antview: 'Bespoke from-scratch code bases' },
    { metric: 'Frontend Performance', agency: 'Average 3-4s loads (heavy scripts)', antview: 'Sub-100ms page speeds (Lighthouse 95+)' },
    { metric: 'TypeScript Constraints', agency: 'Loose JavaScript or any-type overrides', antview: 'Strict typing rules and build compliance' },
    { metric: 'Developer Communications', agency: 'Layered through account managers', antview: 'Direct Slack channels to lead architects' },
    { metric: 'IP Transfer terms', agency: 'Hidden licensing dependencies', antview: 'Immediate, absolute repository transfers' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-24 text-left">
      {/* 1. Header */}
      <section className="relative pt-6">
        <div className="absolute -top-10 left-1/4 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />
        <SectionTitle
          badge="Antview Advantages"
          title="Designed for Clients Who Require Technological Excellence"
          description="We build software with a CTO's mindset—prioritizing robust security configurations, lightweight stylesheets, and clean developer handoffs."
          align="left"
        />
      </section>

      {/* 2. Statistical Meters */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Lighthouse Performance Score', value: 98, suffix: '%', desc: 'Average rating across our web apps' },
          { label: 'SLA Support Resolution', value: 96, suffix: '%', desc: 'Bugs solved within 4-hour windows' },
          { label: 'Client Retention Rate', value: 92, suffix: '%', desc: 'Partners scaling long-term with us' }
        ].map((stat, i) => (
          <div key={i} className="p-6 rounded-2xl glassmorphism bg-white/20 dark:bg-white/1 text-left flex flex-col gap-2">
            <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">
              <Counter end={stat.value} suffix={stat.suffix} />
            </span>
            <div className="text-sm font-semibold text-gray-900 dark:text-white mt-1">{stat.label}</div>
            <div className="text-xs text-gray-400 mt-0.5">{stat.desc}</div>
          </div>
        ))}
      </section>

      {/* 3. Reason Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reasons.map((r, i) => (
          <AnimatedCard key={i} className="flex gap-4 p-6 items-start text-left bg-black/5 dark:bg-white/1 border border-black/5 dark:border-white/5">
            <div className="p-2.5 rounded-xl bg-accent-blue/10 text-accent-blue shrink-0">
              <r.icon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-2">{r.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{r.desc}</p>
            </div>
          </AnimatedCard>
        ))}
      </section>

      {/* 4. Comparison Table (Fully Responsive) */}
      <section className="flex flex-col gap-8">
        <div>
          <Badge variant="cyan">Direct Comparison</Badge>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-gray-900 dark:text-white mt-3">
            How We Compare to Standard Agencies
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-black/5 dark:border-white/10 glassmorphism shadow-xl bg-white/20 dark:bg-[#080c1d]/30">
          <table className="w-full text-left border-collapse min-w-[600px] text-sm">
            <thead>
              <tr className="border-b border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 font-display text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                <th className="p-5">Metric / Feature</th>
                <th className="p-5">Standard Agency</th>
                <th className="p-5 text-accent-cyan">Antview Technologies</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((item, i) => (
                <tr key={i} className="border-b border-black/5 dark:border-white/5 last:border-b-0 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <td className="p-5 font-semibold text-gray-900 dark:text-white">{item.metric}</td>
                  <td className="p-5 text-gray-400 flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>{item.agency}</span>
                  </td>
                  <td className="p-5 text-gray-800 dark:text-gray-200 font-medium">
                    <div className="flex items-center gap-2 text-accent-blue dark:text-accent-cyan">
                      <Check className="w-4 h-4 shrink-0 text-accent-cyan" />
                      <span>{item.antview}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. CTA Footer */}
      <section className="rounded-3xl bg-gradient-to-r from-accent-blue/15 to-accent-cyan/15 border border-white/5 p-12 text-center flex flex-col items-center gap-6">
        <Badge variant="purple">Engineering Call</Badge>
        <h3 className="font-display font-extrabold text-2xl md:text-4xl text-gray-900 dark:text-white max-w-xl">
          Let's Discuss Your Product Technical Roadmap
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
          Schedule an engineering review directly with a Lead Architect. We will review your current technical specifications and audit scaling options.
        </p>
        <Button to="/contact" variant="primary">
          Connect With Our Team
        </Button>
      </section>
    </div>
  );
};

export default WhyChooseUs;
