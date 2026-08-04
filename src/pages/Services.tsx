import React from 'react';
import * as LucideIcons from 'lucide-react';
import { BadgeCheck } from 'lucide-react';
import { SERVICES } from '../constants';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Badge from '../components/Badge';
import AnimatedCard from '../components/AnimatedCard';

export const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-24 text-left">
      {/* 1. Page Header */}
      <section className="relative pt-6">
        <div className="absolute -top-10 right-1/4 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />
        <SectionTitle
          badge="Our Capability Directory"
          title="High-Performance Software Engineering Services"
          description="We construct robust backend databases, sleek custom interfaces, and secure AI modules to optimize your core operations."
          align="left"
        />

        {/* Anchor shortcuts grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mt-12">
          {SERVICES.map((s) => {
            const Icon = (LucideIcons as any)[s.icon] || LucideIcons.HelpCircle;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="p-4 rounded-xl border border-black/5 dark:border-white/10 hover:border-accent-blue bg-white/40 dark:bg-white/1 flex flex-col gap-2 items-start transition-all hover:-translate-y-0.5"
              >
                <Icon className="w-5 h-5 text-accent-blue" />
                <span className="text-[11px] font-bold tracking-tight text-gray-900 dark:text-gray-200 leading-tight">
                  {s.title}
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* 2. Deep Dive Sections */}
      <section className="flex flex-col gap-20">
        {SERVICES.map((service, index) => {
          const Icon = (LucideIcons as any)[service.icon] || LucideIcons.HelpCircle;
          const isEven = index % 2 === 0;

          return (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-28 py-12 border-t border-black/5 dark:border-white/5 first:border-t-0 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              {/* Left Column: Summary and stack */}
              <div className={`lg:col-span-5 flex flex-col gap-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                {/* Visual Label */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-accent-blue/10 text-accent-blue">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-accent-purple font-semibold uppercase tracking-wider">
                    {service.subtitle}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-3xl text-gray-900 dark:text-white tracking-tight">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {service.overview}
                </p>

                {/* Tech Badge Grid */}
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-2">
                    Technologies Utilized
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.techUsed.map((tech) => (
                      <Badge key={tech} variant="gray" className="py-0.5 px-2.5 text-[9px]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button to="/contact" variant="primary">
                    Book Service Consultation
                  </Button>
                </div>
              </div>

              {/* Right Column: Benefits, Features and Process flow */}
              <div className={`lg:col-span-7 flex flex-col gap-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                {/* Benefits Block */}
                <AnimatedCard className="p-6">
                  <h4 className="font-display font-bold text-sm text-gray-900 dark:text-white uppercase tracking-widest mb-4">
                    Key Project Outcomes
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <BadgeCheck className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedCard>

                {/* Features and Process Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Features */}
                  <AnimatedCard className="p-6">
                    <h4 className="font-display font-bold text-sm text-gray-900 dark:text-white uppercase tracking-widest mb-4">
                      Core Scope Items
                    </h4>
                    <ul className="flex flex-col gap-2.5 text-xs text-gray-500 dark:text-gray-400">
                      {service.features.map((feature, i) => (
                        <li key={i} className="list-disc list-inside">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </AnimatedCard>

                  {/* Process workflow */}
                  <AnimatedCard className="p-6">
                    <h4 className="font-display font-bold text-sm text-gray-900 dark:text-white uppercase tracking-widest mb-4">
                      Execution Blueprint
                    </h4>
                    <div className="flex flex-col gap-3">
                      {service.process.map((step, i) => (
                        <div key={i} className="flex items-start gap-3 text-xs text-gray-500 dark:text-gray-400">
                          <span className="font-mono font-bold text-accent-purple shrink-0">{step.step}</span>
                          <span>{step.description}</span>
                        </div>
                      ))}
                    </div>
                  </AnimatedCard>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Global CTA */}
      <section className="rounded-3xl bg-gradient-to-r from-accent-blue/15 to-accent-cyan/15 border border-white/5 p-12 text-center flex flex-col items-center gap-6">
        <Badge variant="purple">Architecture Planning</Badge>
        <h3 className="font-display font-extrabold text-2xl md:text-4xl text-gray-900 dark:text-white max-w-xl">
          Need a Custom Multi-System Integration Plan?
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
          Our engineering staff regularly reviews infrastructure setups. We can draft a modular blueprint mapping how our services solve your scaling issues.
        </p>
        <Button to="/contact" variant="primary">
          Schedule Tech Deep-Dive
        </Button>
      </section>
    </div>
  );
};

export default Services;
