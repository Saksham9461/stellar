import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Badge from '../components/Badge';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Hardcoded unique categories present in PROJECTS to maintain neat filter buttons
  const categories = [
    'All',
    'Healthcare SaaS',
    'ERP System',
    'Restaurant App',
    'AI Chatbot',
    'Ecommerce Platform',
    'Fleet Management'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16 text-left">
      {/* 1. Header */}
      <section className="relative pt-6">
        <div className="absolute -top-10 right-1/3 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />
        <SectionTitle
          badge="Product Showcase"
          title="Case Studies & Technical Deployments"
          description="Detailed execution logs, system specifications, and numerical outcomes of projects built by Antview Technologies."
          align="left"
        />
      </section>

      {/* 2. Filter Category Buttons */}
      <section className="flex flex-wrap gap-2 pb-4 border-b border-black/5 dark:border-white/5">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold font-display transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-gradient-to-r from-accent-blue to-accent-cyan text-white border-transparent shadow-lg shadow-accent-blue/10 dark:shadow-accent-blue/20'
                  : 'bg-white/40 dark:bg-white/1 border-black/5 dark:border-white/10 text-gray-500 hover:text-gray-900 dark:hover:text-white dark:hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </section>

      {/* 3. Filtered Case Study Grid */}
      <section className="flex flex-col gap-10">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))
        ) : (
          <div className="text-center py-20 border border-dashed border-black/10 dark:border-white/10 rounded-2xl p-6">
            <p className="text-gray-400 text-sm">No case studies found in this category.</p>
            <Button onClick={() => setSelectedCategory('All')} variant="secondary" className="mt-4">
              Reset Category Filter
            </Button>
          </div>
        )}
      </section>

      {/* 4. Global CTA */}
      <section className="rounded-3xl bg-gradient-to-r from-accent-blue/15 to-accent-cyan/15 border border-white/5 p-12 text-center flex flex-col items-center gap-6">
        <Badge variant="purple">Collaboration</Badge>
        <h3 className="font-display font-extrabold text-2xl md:text-4xl text-gray-900 dark:text-white max-w-xl">
          Have a Project Requirement matching our capabilities?
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
          Contact our software architecture desk to arrange a technical scoping workshop. We will draft initial database designs and hosting topologies.
        </p>
        <Button to="/contact" variant="primary">
          Initiate Scoping Call
        </Button>
      </section>
    </div>
  );
};

export default Portfolio;
