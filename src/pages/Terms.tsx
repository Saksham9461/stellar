import React from 'react';
import SEO from '../components/SEO';
import Badge from '../components/Badge';
import SectionTitle from '../components/SectionTitle';

export const Terms: React.FC = () => {
  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Agreement',
      content: [
        'Contractual Bounds: By registering for an account, subscribing to developer retainers, or utilizing our software templates, you enter into a legally binding agreement with Antview Technologies Private Limited.',
        'Corporate Authority: If you sign up on behalf of an enterprise entity, you warrant that you carry active corporate authority to commit that organization to these terms.'
      ]
    },
    {
      id: 'ip-transfer',
      title: '2. Intellectual Property & Transfer',
      content: [
        'Deliverable Ownership: Upon complete clearance of all due retainer invoices, all copyrights, code patents, and custom asset layouts designed specifically for your projects are transferred fully to your organization.',
        'Antview Core Libraries: We retain ownership of our pre-built internal components, helper scripts, and boilerplate templates. We grant you a perpetual, royalty-free, worldwide license to use these files inside your client builds.',
        'Open-Source Packages: Third-party open-source components integrated into our systems are governed strictly by their respective licenses (MIT, Apache, etc.).'
      ]
    },
    {
      id: 'sla',
      title: '3. Service SLA & Target Runtimes',
      content: [
        'Uptime Commitments: For Enterprise tier retainers, we aim for a 99.9% application uptime rate for APIs and cloud services under our active maintenance agreements.',
        'Response Windows: Service requests submitted through our support portal are responded to within 12 hours for Pro plans, and within 4 hours for Enterprise plans.',
        'Maintenance Windows: Scheduled server modifications and updates are coordinated with client tech teams and executed during off-peak hours (10:00 PM to 2:00 AM EST).'
      ]
    },
    {
      id: 'billing',
      title: '4. Billing, Retainers, & Cancellation',
      content: [
        'Subscription Terms: Custom development retainers are invoiced on a monthly or annual cycle. Renewal invoices are generated 5 days before the cycle ends.',
        'Refund Policy: Due to the high allocations of technical staff and computing servers, all payments made for engineering retainers are strictly non-refundable.',
        'Cancellation Notice: To terminate a recurring developer team subscription, a written notice of cancellation must be submitted at least 30 days before the subsequent billing date.'
      ]
    },
    {
      id: 'liability',
      title: '5. Limitation of Liability',
      content: [
        'Disclaimer of Warranties: Antview Technologies provides all codebases "as is" without representations of absolute security, uninterrupted execution, or absence of software bugs.',
        'Liability Cap: Under no circumstances will our aggregate liability exceed the total financial amount paid by your company for the specific service in the 3 months preceding the claim.'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Terms of Service"
        description="Review the corporate terms, retainer billing cycles, service level SLA, and intellectual property transfers of Antview Technologies."
      />
      <div className="max-w-4xl mx-auto px-6 py-12 text-left">
        {/* Section Header */}
        <section className="relative pt-6 flex flex-col gap-4">
          <div className="absolute -top-10 left-1/4 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />
          <SectionTitle
            badge="Legal Agreements"
            title="Terms of Service"
            description="Last Updated: August 02, 2026. Please read these terms carefully before subscribing to our developer retainers or deploying custom platforms."
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
              <div className="text-sm font-semibold text-gray-900 dark:text-white">Questions about our Terms?</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Contact our legal operations team for help.</div>
            </div>
            <a href="mailto:legal@antview.tech" className="text-xs font-semibold text-accent-blue hover:underline">
              legal@antview.tech
            </a>
          </div>
        </main>
      </div>
    </>
  );
};

export default Terms;
