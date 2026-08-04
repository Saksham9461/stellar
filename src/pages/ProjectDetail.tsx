import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Database, Cpu } from 'lucide-react';
import { PROJECTS } from '../constants';
import Badge from '../components/Badge';
import Button from '../components/Button';
import AnimatedCard from '../components/AnimatedCard';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const project = PROJECTS.find((p) => p.id === id);

  // Scroll to top upon entry
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="font-display font-extrabold text-3xl text-gray-900 dark:text-white mb-4">
          Case Study Not Found
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          The requested technical documentation details do not exist or have been moved.
        </p>
        <Button to="/portfolio" variant="secondary">
          Return to Portfolio Grid
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16 text-left">
      {/* 1. Header Back link */}
      <div>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-accent-blue transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Scoping Cases</span>
        </Link>
      </div>

      {/* 2. Hero Header Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8 flex flex-col gap-4">
          <Badge variant="cyan">{project.category}</Badge>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-6xl text-gray-900 dark:text-white leading-tight">
            {project.title}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
            {project.overview}
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end pb-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="gray" className="py-1 px-3">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* 3. Hero Image Banner (Visual Placeholder) */}
      <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden bg-gray-900 relative shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-wrap gap-4 items-center justify-between text-white">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
            Case Study Spec ID: {project.id}-spec
          </span>
          <span className="text-xs font-bold px-3 py-1 rounded bg-black/40 border border-white/20">
            Internal Audit Verified
          </span>
        </div>
      </div>

      {/* 4. Detailed Analysis Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Core content: Problem & Solution */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          {/* Problem */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-extrabold text-2xl text-gray-900 dark:text-white pb-3 border-b border-black/5 dark:border-white/5">
              The Operational Challenge
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-extrabold text-2xl text-gray-900 dark:text-white pb-3 border-b border-black/5 dark:border-white/5">
              Technical Architecture & Solution
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Sidebar: Out-comes metrics & details */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <AnimatedCard className="p-6 text-left">
            <h4 className="font-display font-bold text-sm text-gray-900 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-accent-blue" />
              <span>Project Metrics</span>
            </h4>
            <div className="flex flex-col gap-4">
              {project.results.map((res, i) => (
                <div key={i} className="flex gap-3 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-accent-cyan shrink-0" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </AnimatedCard>

          <AnimatedCard className="p-6 text-left">
            <h4 className="font-display font-bold text-sm text-gray-900 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-2">
              <Database className="w-4 h-4 text-accent-purple" />
              <span>System Stack</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-[10px] text-gray-500 dark:text-gray-400 font-semibold border border-black/5 dark:border-white/10 px-2.5 py-1 rounded bg-black/5 dark:bg-white/5">
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* 5. Custom CTA */}
      <section className="rounded-3xl bg-gradient-to-r from-accent-blue/15 to-accent-cyan/15 border border-white/5 p-12 text-center flex flex-col items-center gap-6">
        <Badge variant="purple">Architecture Planning</Badge>
        <h3 className="font-display font-extrabold text-2xl md:text-4xl text-gray-900 dark:text-white max-w-xl">
          Request a Case Blueprint Session
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
          Want to know how a similar architecture details can solve your organization's scaling bottlenecks? Let's arrange a call.
        </p>
        <Button to="/contact" variant="primary">
          Connect With Our Architect
        </Button>
      </section>
    </div>
  );
};

export default ProjectDetail;
