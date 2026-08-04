import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { TECHNOLOGIES } from '../constants';
import SectionTitle from '../components/SectionTitle';
import AnimatedCard from '../components/AnimatedCard';
import Button from '../components/Button';
import Badge from '../components/Badge';

export const TechStack: React.FC = () => {
  const categories = [
    { key: 'frontend', title: 'Frontend Technologies' },
    { key: 'backend', title: 'Backend Frameworks' },
    { key: 'databases', title: 'Database Architectures' },
    { key: 'cloud', title: 'Cloud Infrastructures' },
    { key: 'ai', title: 'Cognitive & AI Engineering' },
    { key: 'devops', title: 'DevOps & Pipeline Automation' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-24 text-left">
      {/* 1. Header */}
      <section className="relative pt-6">
        <div className="absolute -top-10 left-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />
        <SectionTitle
          badge="Technological Blueprint"
          title="Engineered With Modern High-Performance Tech Stacks"
          description="We do not compromise on technology choices. We write modern TypeScript, optimize database index queries, and containerize systems using Docker and Kubernetes."
          align="left"
        />
      </section>

      {/* 2. Stack Grid by Category */}
      <section className="flex flex-col gap-16">
        {categories.map((cat) => {
          const list = (TECHNOLOGIES as any)[cat.key] || [];

          return (
            <div key={cat.key} className="flex flex-col gap-6">
              <h3 className="font-display font-extrabold text-2xl text-gray-900 dark:text-white pb-2 border-b border-black/5 dark:border-white/5">
                {cat.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {list.map((tech: any, i: number) => {
                  const Icon = (LucideIcons as any)[tech.icon] || LucideIcons.Code2;
                  return (
                    <AnimatedCard key={tech.name} delay={i * 0.05} className="p-5 flex flex-col gap-4 text-left justify-between h-full">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-accent-blue/10 text-accent-blue">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-900 dark:text-white leading-none mb-1">
                            {tech.name}
                          </div>
                          <div className="text-[10px] text-gray-400">Expertise Level: {tech.level}%</div>
                        </div>
                      </div>

                      {/* Slider meter */}
                      <div className="w-full bg-black/5 dark:bg-white/5 h-1.5 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: i * 0.05 + 0.2 }}
                          className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full"
                        />
                      </div>
                    </AnimatedCard>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Global CTA */}
      <section className="rounded-3xl bg-gradient-to-r from-accent-blue/15 to-accent-cyan/15 border border-white/5 p-12 text-center flex flex-col items-center gap-6">
        <Badge variant="blue">scoping calls</Badge>
        <h3 className="font-display font-extrabold text-2xl md:text-4xl text-gray-900 dark:text-white max-w-xl">
          Need a Custom Architecture Configured for Your Product?
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
          Contact our software architecture desk to arrange a technical scoping workshop. We will draft initial database designs and hosting topologies.
        </p>
        <Button to="/contact" variant="primary">
          Connect with an Architect
        </Button>
      </section>
    </div>
  );
};

export default TechStack;
