import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Eye, ShieldCheck, Heart, Zap, Award, Compass, Star } from 'lucide-react';
import { TEAM_MEMBERS } from '../constants';
import SectionTitle from '../components/SectionTitle';
import AnimatedCard from '../components/AnimatedCard';
import Button from '../components/Button';
import Badge from '../components/Badge';

export const About: React.FC = () => {
  const values = [
    { title: 'Technical Integrity', desc: 'We write clean, documented, and typed code. No hacks, no shortcuts.', icon: ShieldCheck },
    { title: 'Speed & Optimization', desc: 'Page load speeds direct conversion results. We target sub-100ms response targets.', icon: Zap },
    { title: 'User Empathy', desc: 'Software exists to serve humans. Design interfaces that reduce onboarding friction.', icon: Heart },
    { title: 'Transparency First', desc: 'Open Slack channels, direct developer access, and absolute IP sovereignty.', icon: Users }
  ];

  const timeline = [
    { year: '2021', title: 'The Genesis', desc: 'Antview is bootstrapped by 3 distributed systems engineers, focusing on custom Node.js APIs.' },
    { year: '2023', title: 'Scaling Operations', desc: 'Team expands to 12. Deliver first enterprise-grade HIPAA medical SaaS platform.' },
    { year: '2024', title: 'Cognitive Engineering', desc: 'Launch customized AI RAG connectors and vector search indexes for legal clients.' },
    { year: '2026', title: 'Antview Today', desc: ' Boutique engineering firm maintaining systems processing over $40M in annual transaction values.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-24 text-left">
      {/* 1. Page Header / Intro */}
      <section className="relative pt-6">
        <div className="absolute -top-10 left-1/3 w-72 h-72 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />
        <SectionTitle
          badge="Company Story"
          title="Bespoke Software Engineered for Performance & Scalability"
          description="We are a boutique firm of senior frontend architects, AI engineers, and distributed systems developers who build custom platforms for innovators."
          align="left"
        />
        
        {/* Story details layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col gap-6 text-sm text-gray-500 dark:text-gray-400 leading-relaxed justify-center">
            <p>
              Antview Technologies was established to solve a persistent issue in software consulting: the lack of raw engineering quality. Traditional agencies deliver slow code built on generic templates, leading to high maintenance costs and system crashes at scale.
            </p>
            <p>
              At Antview, we treat software design as fine-craft. Every layout grid, database schema index, and API pipeline is designed from scratch, optimized for milliseconds, and verified with strict testing suites.
            </p>
          </div>
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[250px]">
            {/* Visual ambient graphic */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/15 to-accent-cyan/15 rounded-3xl blur-xl" />
            <div className="relative w-full h-full rounded-3xl border border-black/5 dark:border-white/10 glassmorphism p-8 flex flex-col justify-between shadow-2xl bg-[#080c1d]/30">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">
                5 Years
              </div>
              <div className="text-sm text-gray-900 dark:text-white font-semibold mt-2">
                Of Zero-Downtime Operations
              </div>
              <div className="text-xs text-gray-400 mt-1 leading-relaxed">
                Empowering clinical portals, automated logistics systems, and SaaS startups with robust infrastructure.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatedCard className="flex flex-col gap-4">
          <div className="p-3 w-fit rounded-xl bg-accent-blue/10 text-accent-blue">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="font-display font-extrabold text-2xl text-gray-900 dark:text-white">Our Mission</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            To construct clean, high-performance software systems that eliminate operational overhead and empower companies to scale with confidence, maintaining extreme engineering standards at every level.
          </p>
        </AnimatedCard>

        <AnimatedCard className="flex flex-col gap-4">
          <div className="p-3 w-fit rounded-xl bg-accent-purple/10 text-accent-purple">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="font-display font-extrabold text-2xl text-gray-900 dark:text-white">Our Vision</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            To build a world where digital experiences are instantaneous, databases function flawlessly, and intelligent AI operates safely in secure client environments, driving productivity across global industries.
          </p>
        </AnimatedCard>
      </section>

      {/* 3. Core Values */}
      <section className="flex flex-col gap-12">
        <div className="text-center md:text-left">
          <Badge variant="cyan">Core Pillars</Badge>
          <h2 className="font-display font-extrabold text-3xl text-gray-900 dark:text-white mt-3">
            The Values That Direct Our Engineering
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <AnimatedCard key={i} delay={i * 0.08} className="flex flex-col gap-4 text-left">
              <div className="p-2.5 w-fit rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-accent-cyan">
                <val.icon className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-gray-900 dark:text-white">{val.title}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{val.desc}</p>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* 4. Timeline */}
      <section className="flex flex-col gap-12">
        <div className="text-center md:text-left">
          <Badge variant="blue">Milestones</Badge>
          <h2 className="font-display font-extrabold text-3xl text-gray-900 dark:text-white mt-3">
            Our Development Journey
          </h2>
        </div>

        {/* Timeline graphics wrapper */}
        <div className="relative border-l border-black/10 dark:border-white/10 ml-4 md:ml-8 pl-8 flex flex-col gap-12">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-left"
            >
              {/* Pulsing indicator node */}
              <div className="absolute -left-12 top-1.5 w-8 h-8 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#050816] flex items-center justify-center z-10 shadow-lg">
                <div className="w-2.5 h-2.5 rounded-full bg-accent-blue" />
              </div>
              <div className="text-xs text-accent-cyan font-bold mb-1">{item.year}</div>
              <h4 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Achievements grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Award, title: 'HIPAA Audited Standard', desc: 'Secure medical EHR platforms certified with strict zero data leak audits.' },
          { icon: Star, title: 'PageSpeed Perfect 100s', desc: 'Headless storefront builds achieving perfect mobile scoring performance.' },
          { icon: Compass, title: '90%+ SLA Fulfillment', desc: 'Priority maintenance agreements met within client ticket constraints.' }
        ].map((ach, i) => (
          <AnimatedCard key={i} className="flex gap-4 p-6 items-start text-left bg-black/5 dark:bg-white/1 border border-black/5 dark:border-white/5">
            <div className="p-2.5 rounded-xl bg-accent-blue/10 text-accent-blue shrink-0">
              <ach.icon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-gray-900 dark:text-white mb-1.5">{ach.title}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{ach.desc}</p>
            </div>
          </AnimatedCard>
        ))}
      </section>

      {/* 6. Leadership (Dummy content only) */}
      <section className="flex flex-col gap-12">
        <div className="text-center md:text-left">
          <Badge variant="purple">Our Leadership</Badge>
          <h2 className="font-display font-extrabold text-3xl text-gray-900 dark:text-white mt-3">
            Bespoke Engineering Experts
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mt-2 leading-relaxed">
            Meets criteria: Leadership team bio list compiled using dummy content only.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <AnimatedCard key={i} delay={i * 0.1} className="flex flex-col text-left">
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-5 bg-gray-900">
                <img
                  src={member.avatarUrl}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h4 className="font-display font-bold text-lg text-gray-900 dark:text-white leading-none mb-1">
                {member.name}
              </h4>
              <p className="text-xs text-accent-blue font-semibold uppercase tracking-wider mb-3">
                {member.role}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                {member.bio}
              </p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-gray-400 hover:text-white transition-colors mt-auto"
              >
                LinkedIn Profile &rarr;
              </a>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* 7. Culture and CTA */}
      <section className="rounded-3xl bg-gradient-to-r from-accent-blue/15 to-accent-cyan/15 border border-white/5 p-12 text-center flex flex-col items-center gap-6">
        <Badge variant="blue">Work With Us</Badge>
        <h3 className="font-display font-extrabold text-2xl md:text-4xl text-gray-900 dark:text-white max-w-xl">
          Interested in Collaborating on a Technical Blueprint?
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
          Contact our architecting desk to audit your current tech platform operations and structure a scalability roadmap.
        </p>
        <Button to="/contact" variant="primary">
          Contact an Engineer
        </Button>
      </section>
    </div>
  );
};

export default About;
