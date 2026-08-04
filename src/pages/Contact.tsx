import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Phone, MapPin, Clock, Send, Check, AlertCircle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import AnimatedCard from '../components/AnimatedCard';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must contain at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service category.'),
  message: z.string().min(10, 'Message must contain at least 10 characters.')
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    }
  });

  const onSubmit = (_data: ContactFormValues) => {
    setFormStatus('loading');
    // Simulate API form submission delay
    setTimeout(() => {
      setFormStatus('success');
      reset();
    }, 1500);
  };

  const servicesList = [
    'Artificial Intelligence',
    'Workflow Automation',
    'Website Development',
    'Mobile Application Development',
    'UI/UX Design Systems',
    'SaaS Development',
    'Custom Software Solutions'
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16 text-left">
      {/* 1. Header */}
      <section className="relative pt-6">
        <div className="absolute -top-10 left-1/3 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />
        <SectionTitle
          badge="Contact Scoping Desk"
          title="Let's Outline Your Technical Blueprint"
          description="Have a complex system requirement or operational bottleneck? Get in touch with our architecture teams."
          align="left"
        />
      </section>

      {/* 2. Form & Info grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Form validation card */}
        <div className="lg:col-span-7">
          <AnimatedCard className="p-8 bg-white/20 dark:bg-[#080c1d]/30 border border-black/5 dark:border-white/10">
            <h3 className="font-display font-extrabold text-2xl text-gray-900 dark:text-white mb-6 pb-3 border-b border-black/5 dark:border-white/5">
              Project Brief Form
            </h3>

            {formStatus === 'success' ? (
              <div className="py-12 text-center flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/25">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display font-extrabold text-lg text-gray-900 dark:text-white">
                  Brief Submitted Successfully
                </h4>
                <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
                  Thank you for submitting your technical scope parameters. A Senior Architect will review your specifications and contact you within 24 hours.
                </p>
                <Button onClick={() => setFormStatus('idle')} variant="secondary" className="mt-2">
                  Submit Another Project Brief
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-semibold text-gray-700 dark:text-gray-300">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Jane Doe"
                      disabled={formStatus === 'loading'}
                      {...register('name')}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue transition-colors disabled:opacity-50 ${errors.name ? 'border-rose-500/50 focus:border-rose-500' : 'border-black/10 dark:border-white/10'}`}
                    />
                    {errors.name && (
                      <span className="text-[10px] text-rose-500 font-medium flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" /> {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-semibold text-gray-700 dark:text-gray-300">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="jane@company.com"
                      disabled={formStatus === 'loading'}
                      {...register('email')}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue transition-colors disabled:opacity-50 ${errors.email ? 'border-rose-500/50 focus:border-rose-500' : 'border-black/10 dark:border-white/10'}`}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-rose-500 font-medium flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" /> {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Company field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="font-semibold text-gray-700 dark:text-gray-300">Company Name</label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Acme Corp"
                      disabled={formStatus === 'loading'}
                      {...register('company')}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue transition-colors disabled:opacity-50"
                    />
                  </div>

                  {/* Required Service selection dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="font-semibold text-gray-700 dark:text-gray-300">Required Capability *</label>
                    <select
                      id="service"
                      disabled={formStatus === 'loading'}
                      {...register('service')}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border text-gray-900 dark:text-white focus:outline-none focus:border-accent-blue transition-colors disabled:opacity-50 appearance-none dark:[&>option]:bg-[#080c1d] ${errors.service ? 'border-rose-500/50 focus:border-rose-500' : 'border-black/10 dark:border-white/10'}`}
                    >
                      <option value="">Select category...</option>
                      {servicesList.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && (
                      <span className="text-[10px] text-rose-500 font-medium flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" /> {errors.service.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-semibold text-gray-700 dark:text-gray-300">Technical Brief parameters *</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Provide a short outline of system bottlenecks, hosting, scaling parameters, or database demands..."
                    disabled={formStatus === 'loading'}
                    {...register('message')}
                    className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue transition-colors disabled:opacity-50 resize-y ${errors.message ? 'border-rose-500/50 focus:border-rose-500' : 'border-black/10 dark:border-white/10'}`}
                  />
                  {errors.message && (
                    <span className="text-[10px] text-rose-500 font-medium flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3" /> {errors.message.message}
                    </span>
                  )}
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    variant="primary"
                    className="w-full py-3 flex items-center justify-center gap-2"
                  >
                    <span>{formStatus === 'loading' ? 'Submitting Parameters...' : 'Submit Project Brief'}</span>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            )}
          </AnimatedCard>
        </div>

        {/* Right Column: Office info coordinates & Map */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <AnimatedCard className="p-6 flex flex-col gap-5 text-left">
            <h4 className="font-display font-bold text-sm text-gray-900 dark:text-white uppercase tracking-widest mb-2 pb-2 border-b border-black/5 dark:border-white/5">
              Contact Details
            </h4>
            
            <div className="flex flex-col gap-4 text-xs md:text-sm text-gray-500 dark:text-gray-400">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Delhi Corporate Office</div>
                  <div className="text-xs mt-0.5">Connaught Place, New Delhi, Delhi 110001, India</div>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Mail className="w-5 h-5 text-accent-purple shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Email Communications</div>
                  <a href="mailto:hello@antview.tech" className="text-xs text-accent-blue hover:text-accent-cyan mt-0.5">
                    hello@antview.tech
                  </a>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Phone className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Support Lines</div>
                  <a href="tel:+911155550199" className="text-xs text-accent-blue hover:text-accent-cyan mt-0.5">
                    +91 (11) 555-0199
                  </a>
                </div>
              </div>

              <div className="flex gap-3 items-start border-t border-black/5 dark:border-white/5 pt-4 mt-2">
                <Clock className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Business Scoping Hours</div>
                  <div className="text-xs mt-0.5 leading-relaxed">
                    Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM IST <br />
                    Saturday &ndash; Sunday: Closed (Support active for SLA plans)
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Premium Vector Map Placeholder */}
          <div className="w-full aspect-[4/3] rounded-2xl border border-black/5 dark:border-white/10 glassmorphism relative overflow-hidden bg-gray-50 dark:bg-[#070b15] shadow-lg flex items-center justify-center text-center">
            {/* Custom abstract background grid lines */}
            <div className="absolute inset-0 bg-grid-pattern opacity-60" />
            <div className="absolute w-28 h-28 bg-accent-blue/15 rounded-full blur-2xl top-1/3 left-1/3 animate-pulse-slow" />
            
            {/* Pulsing address coordinate marker */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-8 h-8 rounded-full bg-accent-blue/20 border border-accent-blue/40 animate-ping" />
                <div className="w-4.5 h-4.5 rounded-full bg-accent-blue border-2 border-white flex items-center justify-center shadow-lg relative z-10" />
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-black/50 dark:bg-black/75 px-3 py-1 rounded-full border border-white/10">
                Delhi Coordinates System
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
