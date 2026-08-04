import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity } from 'lucide-react';
import type { Project } from '../types';
import AnimatedCard from './AnimatedCard';
import Badge from './Badge';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <AnimatedCard delay={index * 0.1} className="flex flex-col md:flex-row gap-8 items-stretch p-0 overflow-hidden text-left bg-transparent dark:bg-transparent">
      {/* Visual Image container */}
      <div className="w-full md:w-5/12 min-h-[250px] relative overflow-hidden bg-gray-900 group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
        <img
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <Badge variant="cyan">{project.category}</Badge>
        </div>
      </div>

      {/* Info container */}
      <div className="w-full md:w-7/12 p-8 flex flex-col justify-between">
        <div>
          <h3 className="font-display font-extrabold text-2xl text-gray-900 dark:text-white mb-1 group-hover:text-accent-blue transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-accent-purple font-semibold uppercase tracking-wider mb-4">
            {project.subtitle}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            {project.overview}
          </p>

          {/* Key Metric Highlights */}
          <div className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl p-4 mb-6">
            <div className="text-[10px] font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-2 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-accent-blue" />
              <span>Project Outcomes</span>
            </div>
            <ul className="flex flex-col gap-1.5">
              {project.results.slice(0, 2).map((res, i) => (
                <li key={i} className="text-xs text-gray-700 dark:text-gray-300 font-medium list-disc list-inside">
                  {res}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech list and link */}
        <div className="flex flex-wrap gap-2 items-center justify-between mt-auto pt-4 border-t border-black/5 dark:border-white/5">
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="text-[10px] text-gray-400 font-semibold border border-black/5 dark:border-white/10 px-2 py-0.5 rounded bg-black/5 dark:bg-white/5">
                {tech}
              </span>
            ))}
          </div>
          <Link
            to={`/portfolio/${project.id}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-accent-blue hover:text-accent-cyan transition-colors"
          >
            <span>Read Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default ProjectCard;
