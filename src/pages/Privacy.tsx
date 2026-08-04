import React from 'react';
import SEO from '../components/SEO';
import Badge from '../components/Badge';
import SectionTitle from '../components/SectionTitle';

export const Privacy: React.FC = () => {
  const sections = [
    {
      id: 'collection',
      title: '1. Information We Collect',
      content: [
        'Personal Identifiers: When you register for our services, request a consultation, or subscribe to our newsletter, we collect names, corporate email addresses, company names, telephone numbers, and job titles.',
        'Telemetry and Metadata: We automatically compile browser headers, IP addresses, screen dimensions, system logs, referrer paths, and interactions to audit performance and monitor endpoint security.',
        'Database Connector Credentials: For customers using our integrations platforms, database connector paths and access schemas are encrypted using AES-256 standard and stored in isolated keys managers.'
      ]
    },
    {
      id: 'processing',
      title: '2. Isolated Processing & LLM Rules',
      content: [
        'Isolated Embedding Pipelines: We run a secure vector middleware pipeline. Any text data or document parsed to compile search vectors for Retrieval-Augmented Generation (RAG) is held inside local private databases.',
        'Zero Training Pool Sharing: We enforce strict API parameters ensuring your corporate data, queries, and vector database indexes are never fed into external public large language model (LLM) training datasets.',
        'API Token Protection: Client database indexes are accessed dynamically in memory. No persistent storage of plain-text documents is maintained outside your self-hosted boundaries unless explicitly agreed upon.'
      ]
    },
    {
      id: 'sharing',
      title: '3. Data Sharing & Third-Parties',
      content: [
        'Service Providers: We share limited technical metadata with trusted cloud hosting providers (like Vercel and AWS), billing platforms (Stripe), and security loggers to maintain runtime operations.',
        'Legal Safeguards: We do not sell or monetize personal profiles or corporate database records. We only disclose internal records if strictly commanded by a valid government subpoena or law enforcement agency.'
      ]
    },
    {
      id: 'cookies',
      title: '4. Cookies & Authentication Tokens',
      content: [
        'Authentication Tokens: We use secure JSON Web Tokens (JWT) and secure cookies to recognize logged-in developer sessions and persist dark/light theme choices.',
        'Cookie Toggles: You can control browser cookie options in your user configuration panels. Rejecting essential sessions cookies might restrict accessibility to our deployment dashboards.'
      ]
    },
    {
      id: 'rights',
      title: '5. Regulatory Compliance & Rights',
      content: [
        'GDPR Compliance: European users have the right to claim full erasure of personal data, request copies of collected data, or request format transfers.',
        'CCPA Disclosures: California residents have the right to request comprehensive reports on categories of processed indicators. We do not sell user metadata.',
        'Contact Channels: For compliance audits, data access requests, or IP issues, email our privacy office at compliance@antview.tech.'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn how Antview Technologies manages, processes, and secures client files, system metadata, and vector database embeddings."
      />
      <div className="max-w-4xl mx-auto px-6 py-12 text-left">
        {/* Section Header */}
        <section className="relative pt-6 flex flex-col gap-4">
          <div className="absolute -top-10 left-1/4 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />
          <SectionTitle
            badge="Legal Framework"
            title="Privacy Policy"
            description="Last Updated: August 02, 2026. This policy outlines how Antview Technologies Private Limited manages, processes, and protects your information."
            align="left"
          />
        </section>

        {/* Content Body */}
        <main className="flex flex-col gap-10 mt-6 border-t border-black/5 dark:border-white/5 pt-10">
          {sections.map((sec) => (
            <div key={sec.id} id={sec.id} className="flex flex-col gap-4">
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">
                {sec.title}
              </h3>
              <div className="flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {sec.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          ))}

          {/* Corporate Seal footer card */}
          <div className="mt-6 p-6 rounded-2xl glassmorphism bg-white/20 dark:bg-white/1 border border-black/5 dark:border-white/5 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">Antview Trust & Security</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Isolated VPC configurations & encrypted channels.</div>
            </div>
            <Badge variant="blue">ISO 27001 Certified</Badge>
          </div>
        </main>
      </div>
    </>
  );
};

export default Privacy;
