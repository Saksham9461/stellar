import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Layers, Star } from 'lucide-react';
import { SERVICES, PROJECTS, TESTIMONIALS, FAQS, INDUSTRIES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQAccordion from '../components/FAQAccordion';
import Counter from '../components/Counter';
import Button from '../components/Button';
import Badge from '../components/Badge';
import AnimatedCard from '../components/AnimatedCard';
import SEO from '../components/SEO';

export const Home: React.FC = () => {

  const partners = [
    { name: 'Stripe', url: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg' },
    { name: 'Vercel', url: 'https://cdn.worldvectorlogo.com/logos/vercel.svg' },
    { name: 'Linear', url: 'https://cdn.worldvectorlogo.com/logos/linear-1.svg' },
    { name: 'Framer', url: 'https://cdn.worldvectorlogo.com/logos/framer-icon.svg' },
    { name: 'Raycast', url: 'https://cdn.worldvectorlogo.com/logos/raycast.svg' },
  ];

  return (
    <div className="flex flex-col gap-24 overflow-hidden pt-12">
      <SEO title="Custom AI & Web Software Engineering" description="Bespoke generative AI, cognitive architectures, high-performance React web systems, and custom SaaS platforms built by Antview Technologies." />
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center max-w-7xl mx-auto px-6 w-full">
        {/* Animated Background Blobs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10">
          <div className="lg:col-span-7 text-left flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Badge variant="cyan">Next-Gen Software Engineering</Badge>
            </motion.div>

            <motion.h1
              className="font-display font-black text-4xl sm:text-5xl lg:text-7xl text-black dark:text-white leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Architecting the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan">
                Future of Technology
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We design and engineer bespoke AI models, high-performance web systems, and custom SaaS platforms. Premium products built to scale infinitely.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button to="/contact" variant="primary">
                Book Discovery Call
              </Button>
              <Button to="/services" variant="secondary">
                View Solutions
              </Button>
            </motion.div>
          </div>

          {/* Premium Illustration */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              className="relative w-full max-w-md aspect-square flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 border-2 border-dashed border-accent-cyan/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              {/* Inner rotating ring */}
              <motion.div
                className="absolute inset-8 border border-dashed border-accent-purple/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              {/* Central glowing orb */}
              <motion.div
                className="absolute w-48 h-48 bg-gradient-to-tr from-accent-blue via-accent-purple to-accent-cyan rounded-full opacity-20 blur-2xl"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Float floating cards */}
              <motion.div
                className="absolute bg-white/80 dark:bg-[#080c1d]/80 backdrop-blur border border-black/5 dark:border-white/10 rounded-2xl p-4 shadow-xl z-20 flex items-center gap-3 top-4 left-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="p-2 rounded-lg bg-accent-blue/10 text-accent-blue">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-gray-900 dark:text-white">Active Agents</div>
                  <div className="text-[10px] text-emerald-500 font-semibold">99.9% Efficiency</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bg-white/80 dark:bg-[#080c1d]/80 backdrop-blur border border-black/5 dark:border-white/10 rounded-2xl p-4 shadow-xl z-20 flex items-center gap-3 bottom-6 right-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="p-2 rounded-lg bg-accent-purple/10 text-accent-purple">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-gray-900 dark:text-white">API Core</div>
                  <div className="text-[10px] text-gray-400">Response 85ms</div>
                </div>
              </motion.div>

              {/* Core SVG graphic in center */}
              <svg className="w-40 h-40 relative z-10 text-gray-800 dark:text-white" viewBox="0 0 100 100">
                <polygon points="50,12 88,34 88,78 50,100 12,78 12,34" fill="none" stroke="currentColor" strokeWidth="2" />
                <polygon points="50,22 80,39 80,73 50,90 20,73 20,39" fill="none" stroke="url(#heroGrad)" strokeWidth="3" />
                <circle cx="50" cy="56" r="14" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Trusted Partners ticker */}
      <section className="py-6 border-y border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-white/1 flex flex-col gap-4 text-center">
        <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase">
          Empowering Next-Gen Teams Globally
        </span>
        <div className="max-w-6xl mx-auto px-6 w-full flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-40 dark:opacity-30">
          {partners.map((partner, i) => (
            <span key={i} className="font-display font-extrabold text-base tracking-wider text-black-900 dark:text-gray-300">
              {partner.name}
            </span>
          ))}
        </div>
      </section>

      {/* 3. Numerical Statistics */}
      <section className="max-w-7xl mx-auto px-6 w-full py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Completed Ecosystems', count: 180, suffix: '+', desc: 'Bespoke solutions delivered' },
            { label: 'Platform Uptime Rate', count: 99.9, suffix: '%', desc: 'High-availability metrics' },
            { label: 'Active End Users', count: 45, suffix: 'M+', desc: 'Through client apps' },
            { label: 'Partnership NPS Score', count: 98, suffix: '%', desc: 'Customer retention rating' },
          ].map((stat, i) => (
            <div key={i} className="text-left p-6 rounded-2xl glassmorphism bg-white/20 dark:bg-white/1">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan mb-2">
                <Counter end={stat.count} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">{stat.label}</div>
              <div className="text-xs text-gray-400 mt-1">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Services Preview */}
      <section className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-12 text-center">
        <div>
          <Badge variant="blue">Our Expertise</Badge>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-black dark:text-white mt-3">
            Premium Engineering Capabilities
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto mt-2">
            We operate across major technological layers, crafting systems engineered for performance and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 3).map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <div className="text-center">
          <Button to="/services" variant="secondary">
            View All Services <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </section>

      {/* 5. About Preview */}
      <section className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
        <div className="lg:col-span-6 flex flex-col gap-5">
          <Badge variant="purple">The Antview Standard</Badge>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-gray-900 dark:text-white">
            We Bridge the Gap Between Complexity and Elegant Design
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            Antview Technologies was established with a singular mission: to construct software architectures that stand the test of time. We operate at the intersection of robust backend performance (Go/Rust/Node) and beautiful interactive frontends.
          </p>
          <ul className="flex flex-col gap-3">
            {[
              'Bespoke implementations from scratch—no templates',
              'Rigorous automated speed and security audits',
              'Full IP transfers and data sovereignty assurance'
            ].map((pt, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <Button to="/about" variant="secondary">
              Read Our Story
            </Button>
          </div>
        </div>

        {/* Visual elements */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl glassmorphism p-6 border border-white/5 relative">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-[10px] text-gray-400 font-mono ml-4">core_architecture.ts</span>
            </div>
            <pre className="text-xs font-mono text-left text-accent-cyan overflow-x-auto select-none leading-relaxed opacity-80">
              <code>{`import { orchestrate } from '@antview/core';

export async function bootstrapSystem(tenantId: string) {
  const configs = await orchestrate.getClusterConfigs(tenantId);
  const RAGEngine = new CognitiveModel({
    model: "gpt-4o",
    temperature: 0.1,
    vectorStorage: "pinecone"
  });
  
  await configs.scaleContainers({ min: 3, max: 20 });
  return RAGEngine.initialize();
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* 6. Industries Preview */}
      <section className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-12 text-center">
        <div>
          <Badge variant="cyan">Industries Served</Badge>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-gray-900 dark:text-white mt-3">
            Custom Ecosystems Across Diverse Sectors
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto mt-2">
            We adapt our core capabilities to build custom operational systems matching industry specific regulations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {INDUSTRIES.slice(0, 5).map((ind, i) => (
            <AnimatedCard key={i} delay={i * 0.05} className="p-5 flex flex-col gap-3 text-left">
              <div className="text-accent-blue font-bold text-sm">{ind.name}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{ind.description}</p>
            </AnimatedCard>
          ))}
        </div>

        <div className="text-center">
          <Button to="/industries" variant="secondary">
            View All 10 Industries
          </Button>
        </div>
      </section>

      {/* 7. Portfolio Showcase */}
      <section className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-12 text-center">
        <div>
          <Badge variant="blue">Recent Work</Badge>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-gray-900 dark:text-white mt-3">
            Client Success & Case Studies
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto mt-2">
            Explore our engineering blueprints, custom solutions, and numerical project results.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {PROJECTS.slice(0, 2).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="text-center">
          <Button to="/portfolio" variant="secondary">
            Explore Full Portfolio
          </Button>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-12 text-center">
        <div>
          <Badge variant="purple">Customer Reviews</Badge>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-gray-900 dark:text-white mt-3">
            Endorsed by Technical Leadership
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto mt-2">
            Read placeholder testimonials from engineering and product leadership teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((item, i) => (
            <TestimonialCard key={item.id} testimonial={item} index={i} />
          ))}
        </div>

        <div className="text-center">
          <Button to="/testimonials" variant="secondary">
            Read All Testimonials
          </Button>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-12 text-center">
        <div>
          <Badge variant="cyan">FAQ</Badge>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-gray-900 dark:text-white mt-3">
            General Inquiries
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto mt-2">
            Frequently asked questions about our process, IP transfers, and SLA terms.
          </p>
        </div>

        <FAQAccordion items={FAQS.slice(0, 4)} />

        <div className="text-center">
          <Button to="/faq" variant="secondary">
            View All FAQs
          </Button>
        </div>
      </section>

      {/* 10. High-converting CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-accent-blue/20 via-accent-purple/20 to-accent-cyan/20 border border-black/5 dark:border-white/10 p-12 md:p-16 flex flex-col items-center text-center gap-6"
        >
          {/* Background glowing gradients */}
          <div className="absolute inset-0 bg-white/50 dark:bg-[#050816]/70 z-0 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl z-0 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-4">
            <Badge variant="blue">Ready to begin?</Badge>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-gray-900 dark:text-white tracking-tight">
              Let's Engineer Your Competitive Advantage
            </h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-xl">
              Partner with an engineering-focused team that prioritizes code quality, performance metrics, and clean UI design systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button to="/contact" variant="primary">
                Schedule Architecture Call
              </Button>
              <Button to="/why-choose-us" variant="secondary">
                Why Antview Technologies?
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
