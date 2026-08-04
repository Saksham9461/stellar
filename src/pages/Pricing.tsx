import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';
import { PRICING_PLANS } from '../constants';
import SectionTitle from '../components/SectionTitle';
import AnimatedCard from '../components/AnimatedCard';
import Button from '../components/Button';
import Badge from '../components/Badge';

export const Pricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('yearly');

  const isYearly = billingPeriod === 'yearly';

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16 text-left">
      {/* 1. Header */}
      <section className="relative pt-6 flex flex-col gap-8">
        <div className="absolute -top-10 left-1/4 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />
        <SectionTitle
          badge="Pricing Structure"
          title="Transparent Scale Investment Tiers"
          description="Select an engineering scope package tailored to match your business operational requirements."
          align="left"
        />

        {/* Monthly/Yearly toggle controls */}
        <div className="flex items-center gap-4 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 p-1.5 rounded-xl w-fit self-start font-display text-xs font-semibold">
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
              billingPeriod === 'monthly'
                ? 'bg-gradient-to-r from-accent-blue to-accent-cyan text-white shadow-md'
                : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingPeriod('yearly')}
            className={`px-4 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
              billingPeriod === 'yearly'
                ? 'bg-gradient-to-r from-accent-blue to-accent-cyan text-white shadow-md'
                : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <span>Yearly Billing</span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-500 text-[8px] font-bold uppercase tracking-wider">
              Save 15%
            </span>
          </button>
        </div>
      </section>

      {/* 2. Pricing Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {PRICING_PLANS.map((plan, i) => {
          const currentPrice = isYearly ? plan.priceYearly : plan.priceMonthly;
          const billingUnit = isYearly ? '/mo, billed yearly' : '/mo';

          return (
            <AnimatedCard
              key={plan.name}
              delay={i * 0.08}
              className={`flex flex-col justify-between p-8 h-full border ${
                plan.popular
                  ? 'border-accent-blue/50 dark:border-accent-blue/40 shadow-xl dark:bg-[#070b18]/50'
                  : 'border-black/5 dark:border-white/10 bg-white/20 dark:bg-[#080c1d]/30'
              }`}
            >
              <div>
                {/* Badge header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-extrabold text-xl text-gray-900 dark:text-white leading-none">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <Badge variant="cyan" className="py-0.5 px-2 text-[8px]">
                      Most Popular
                    </Badge>
                  )}
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Price tag */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
                    ${currentPrice.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                    {billingUnit}
                  </span>
                </div>

                {/* Checklist features */}
                <ul className="flex flex-col gap-3.5 mb-8 border-t border-black/5 dark:border-white/5 pt-6 text-sm">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex gap-3 text-gray-600 dark:text-gray-400 items-start leading-snug">
                      <Check className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Button
                  to="/contact"
                  variant={plan.popular ? 'primary' : 'secondary'}
                  className="w-full py-3"
                >
                  {plan.ctaText}
                </Button>
              </div>
            </AnimatedCard>
          );
        })}
      </section>

      {/* 3. Pricing Disclaimer */}
      <section className="p-4 rounded-xl border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/1 text-xs text-gray-500 dark:text-gray-400 flex gap-2.5 max-w-3xl">
        <Info className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          Prices listed above represent target retainer estimates for standard software engineering projects. Custom system architectures, detailed vector database scales, or continuous high-frequency IoT streaming setups are scoped and quoted individually on consultation.
        </p>
      </section>
    </div>
  );
};

export default Pricing;
