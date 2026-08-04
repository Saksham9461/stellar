import React from 'react';
import { Star } from 'lucide-react';
import type { Testimonial } from '../types';
import AnimatedCard from './AnimatedCard';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  index
}) => {
  return (
    <AnimatedCard delay={index * 0.08} className="flex flex-col justify-between h-full text-left">
      <div>
        {/* Ratings and demo badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-0.5 text-amber-500">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-[8px] font-bold text-accent-purple/70 border border-accent-purple/20 bg-accent-purple/5 px-2 py-0.5 rounded-full uppercase tracking-widest">
            Demo Placeholder
          </span>
        </div>

        {/* Quotation text */}
        <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed mb-6">
          "{testimonial.content}"
        </p>
      </div>

      {/* Profile summary */}
      <div className="flex items-center gap-3 pt-4 border-t border-black/5 dark:border-white/5">
        <img
          src={testimonial.avatarUrl}
          alt={testimonial.name}
          loading="lazy"
          className="w-10 h-10 rounded-full object-cover border border-black/10 dark:border-white/10"
        />
        <div>
          <h4 className="font-display font-semibold text-sm text-gray-900 dark:text-white leading-none mb-1">
            {testimonial.name}
          </h4>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {testimonial.role} &middot; <span className="text-accent-blue font-medium">{testimonial.company}</span>
          </p>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default TestimonialCard;
