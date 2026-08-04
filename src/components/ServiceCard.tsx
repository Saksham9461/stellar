import React from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import type { Service } from '../types';
import AnimatedCard from './AnimatedCard';
import Badge from './Badge';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  // Retrieve the matching Lucide icon dynamically
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.HelpCircle;

  return (
    <AnimatedCard delay={index * 0.08} className="flex flex-col h-full text-left justify-between">
      <div>
        {/* Dynamic Icon */}
        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-accent-blue/10 to-accent-cyan/10 dark:from-accent-blue/20 dark:to-accent-cyan/20 border border-accent-blue/20 dark:border-accent-blue/30 flex items-center justify-center text-accent-blue dark:text-accent-cyan mb-5 group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-5 h-5" />
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-2 tracking-tight group-hover:text-accent-blue transition-colors">
          {service.title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs text-accent-purple font-semibold tracking-wider uppercase mb-3">
          {service.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
          {service.overview}
        </p>
      </div>

      <div>
        {/* Tech Stack Sub-Grid */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {service.techUsed.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="gray" className="py-0.5 px-2 text-[8px]">
              {tech}
            </Badge>
          ))}
          {service.techUsed.length > 3 && (
            <span className="text-[10px] text-gray-400 font-medium self-center ml-1">
              +{service.techUsed.length - 3} more
            </span>
          )}
        </div>

        {/* Anchor link */}
        <Link
          to={`/services#${service.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-blue hover:text-accent-cyan group-hover:translate-x-1 transition-all"
        >
          <span>Explore Service</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </AnimatedCard>
  );
};

export default ServiceCard;
