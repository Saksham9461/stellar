import React from 'react';
import { motion } from 'framer-motion';
import { Compass, CheckCircle } from 'lucide-react';
import { PROCESS_STEPS } from '../constants';
import SectionTitle from '../components/SectionTitle';
import AnimatedCard from '../components/AnimatedCard';
import Button from '../components/Button';
import Badge from '../components/Badge';

export const OurProcess: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-24 text-left">
      {/* 1. Header */}
      <section className="relative pt-6">
        <div className="absolute -top-10 left-1/4 w-85 h-85 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />
        <SectionTitle
          badge="Development Workflow"
          title="From Discovery to Scale: Our 8-Phase Engineering Timeline"
          description="How we guarantee code quality and layout design compliance through systematic development stages."
          align="left"
        />
      </section>

      {/* 2. Timeline Grid */}
      <section className="relative flex flex-col gap-12 max-w-5xl mx-auto w-full">
        {/* Left vertical center line */}
        <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[1px] bg-black/10 dark:bg-white/10 -translate-x-1/2" />

        {PROCESS_STEPS.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={step.phase}
              className={`relative flex flex-col md:flex-row items-stretch w-full min-h-[160px] gap-8 md:gap-0 ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 top-8 w-8 h-8 rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-[#050816] flex items-center justify-center -translate-x-1/2 z-20 shadow-xl">
                <div className="w-2.5 h-2.5 rounded-full bg-accent-blue group-hover:bg-accent-cyan transition-colors" />
              </div>

              {/* Timeline Card Column */}
              <div className="w-full md:w-[46%] pl-12 md:pl-0 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <AnimatedCard className="p-6 text-left">
                    <div className="text-xs text-accent-cyan font-bold mb-1 flex items-center gap-1.5">
                      <Compass className="w-4 h-4" />
                      <span>Phase {step.phase}</span>
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    
                    {/* Step details bullets list */}
                    <div className="border-t border-black/5 dark:border-white/5 pt-3 mt-3 flex flex-col gap-2">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex gap-2 text-xs text-gray-500 dark:text-gray-400 items-start leading-snug">
                          <CheckCircle className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </AnimatedCard>
                </motion.div>
              </div>

              {/* Spacing spacer block */}
              <div className="hidden md:block w-[8%]" />
              <div className="hidden md:block w-[46%]" />
            </div>
          );
        })}
      </section>

      {/* 3. Global CTA */}
      <section className="rounded-3xl bg-gradient-to-r from-accent-blue/15 to-accent-cyan/15 border border-white/5 p-12 text-center flex flex-col items-center gap-6">
        <Badge variant="blue">Initiate Project</Badge>
        <h3 className="font-display font-extrabold text-2xl md:text-4xl text-gray-900 dark:text-white max-w-xl">
          Ready to kickstart the Discovery Phase?
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
          Contact our software architecture desk to arrange a technical scoping workshop. We will draft initial database designs and hosting topologies.
        </p>
        <Button to="/contact" variant="primary">
          Schedule Phase 01 Call
        </Button>
      </section>
    </div>
  );
};

export default OurProcess;
