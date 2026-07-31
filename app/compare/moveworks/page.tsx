import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";
import {
  Users,
  ShieldCheck,
  BarChart3,
  Bot,
  Target
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moveworks vs Space HR: IT Helpdesk vs AI HR Platform",
  description: "Moveworks automates IT helpdesk tickets. Space HR automates HR — payroll anomaly detection, leave management, attrition prediction, and AI HR concierge in one platform.",
  keywords: ["moveworks alternative","Space HR vs moveworks","ai hr automation","hr helpdesk software","moveworks hr competitor"],
  twitter: {
    card: "summary_large_image",
    title: "Moveworks vs Space HR: IT Helpdesk vs AI HR Platform",
    description: "Moveworks automates IT helpdesk tickets. Space HR automates HR — payroll anomaly detection, leave management, attrition prediction, and AI HR concierge in one platform.",
  },
  alternates: { canonical: "https://spacehr.net/compare/moveworks" },
  openGraph: {
    title: "Moveworks vs Space HR: IT Helpdesk vs AI HR Platform",
    description: "Moveworks automates IT helpdesk tickets. Space HR automates HR — payroll anomaly detection, leave management, attrition prediction, and AI HR concierge in one platform.",
    url: "https://spacehr.net/compare/moveworks",
    siteName: "Space HR",
    images: [{ url: "/desktop-design-showcase.webp", width: 1200, height: 630, alt: "Space HR vs Moveworks Comparison" }],
  },
};

const faqs = [
  { question: "How is Space HR different from Moveworks?", answer: "Moveworks is an enterprise AI platform primarily focused on IT helpdesk automation — resolving software access requests, password resets, and IT tickets. Space HR is purpose-built for HR: AI HR concierge, payroll anomaly detection, leave management, attrition prediction, and compliance automation." },
  { question: "Can Moveworks handle payroll anomaly detection?", answer: "No. Moveworks is not a payroll platform and does not include payroll anomaly detection. Space HR's AI scans payroll data before every run to catch ghost employees, duplicate payments, salary spikes, and tax mismatches." },
  { question: "Is Space HR more affordable than Moveworks?", answer: "Significantly. Moveworks typically requires enterprise contracts starting at $200,000+ annually. Space HR is available per-seat for teams of 50+ employees, with all modules included — typically 70–85% less expensive for mid-market companies." },
  { question: "Does Space HR have the same AI conversational quality as Moveworks?", answer: "For HR use cases, yes. Space HR's AI concierge is trained specifically on HR domain knowledge — leave policies, payroll rules, compliance requirements, and HR workflows. For IT use cases, Moveworks has broader capability." },
  { question: "Can Space HR and Moveworks be used together?", answer: "Yes. If you use Moveworks for IT ticket resolution, you can run Space HR alongside it for HR-specific automation. Many companies use best-in-class tools for IT and HR separately." },
];

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net/" },
  { name: "Compare", url: "https://spacehr.net/compare" },
  { name: "vs Moveworks", url: "https://spacehr.net/compare/moveworks" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function CompareMoveworksPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="pt-24 pb-0 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <li><Link href="/" className="hover:text-gray-700 dark:hover:text-gray-200">Home</Link></li>
          <li><span className="mx-1">/</span></li>
          <li><Link href="/compare" className="hover:text-gray-700 dark:hover:text-gray-200">Compare</Link></li>
          <li><span className="mx-1">/</span></li>
          <li className="text-gray-900 dark:text-white font-medium">vs Moveworks</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 font-semibold text-sm">
            IT Focus vs HR Focus
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight whitespace-pre-line">
            Moveworks Fixes IT Tickets.<br />
            Space HR Fixes HR.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Purpose-Built AI for People Operations.
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Moveworks is exceptional at IT service automation. But HR teams need more than ticket resolution — they need payroll safety, leave automation, attrition intelligence, and compliance. That's Space HR.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://cad.spaceaiapp.com/login">
              <Button size="lg" className="rounded-full px-8 h-12 text-lg bg-emerald-600 hover:bg-emerald-700 text-white border-none shadow-xl">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/request-a-demo">
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-lg font-medium">
                See a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              HR Capability Comparison
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Built for people operations, not service desk tickets.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-[#0f172a]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/3">Feature</th>
                  <th className="p-6 text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase border-b dark:border-gray-700 w-1/3 bg-blue-50/50 dark:bg-blue-900/10">Space HR</th>
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/3">Moveworks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-500" />
                      HR Focus
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>100% HR-native.</strong> Every feature built for people operations.</td>
                  <td className="p-6 text-gray-500"><strong>IT-first.</strong> HR capabilities added to an IT automation platform.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-blue-500" />
                      Payroll Anomaly Detection
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>AI-powered pre-payroll scan.</strong> Catches errors before payday.</td>
                  <td className="p-6 text-gray-500"><strong>Not available.</strong> Core use case is IT provisioning.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-purple-500" />
                      Attrition Prediction
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>50+ signal model.</strong> Flags flight risk 3–6 months early.</td>
                  <td className="p-6 text-gray-500"><strong>Not included.</strong> Not a Moveworks capability.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-orange-500" />
                      AI Concierge
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>HR-trained AI.</strong> Leave, payslips, policies, compliance.</td>
                  <td className="p-6 text-gray-500"><strong>General enterprise AI.</strong> Spans IT, HR, Finance broadly.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-pink-500" />
                      Pricing
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>Per-seat HR platform.</strong> Predictable and inclusive.</td>
                  <td className="p-6 text-gray-500"><strong>Enterprise contract.</strong> Minimum spend typically $200K+.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sticky CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Switch?
          </h2>
          <p className="text-xl text-white/80 mb-6 max-w-2xl mx-auto">
            Free trial · No credit card · Free migration from Moveworks
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold bg-white text-emerald-600 hover:bg-gray-100">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg font-medium border-white/30 text-white hover:bg-white/10">
                Get a Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Switch Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why HR Leaders Choose Space HR Over Moveworks</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">When you need AI built for HR, not repurposed from IT.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6">
                 <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Built Only for HR</h3>
               <p className="text-gray-600 dark:text-gray-400">Space HR isn't a general enterprise AI stretched to cover HR. Every feature — from anomaly detection to attrition modeling — was designed specifically for people operations.</p>
             </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                 <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Payroll Risk Prevention</h3>
               <p className="text-gray-600 dark:text-gray-400">AI scans every payroll cycle for ghost employees, salary irregularities, and compliance gaps before the run executes. Moveworks doesn't touch payroll.</p>
             </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                 <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Retention Intelligence</h3>
               <p className="text-gray-600 dark:text-gray-400">Know who's at risk of leaving before they resign. Space HR's attrition model analyzes 50+ signals and gives managers actionable retention playbooks.</p>
             </div>
          </div>
        </div>
      </section>

      
      {/* Head-to-Head Technical Trade-offs */}
      <section className="py-24 bg-white dark:bg-[#0b1121] border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Head-to-Head Technical Trade-offs
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-xl mx-auto">
            A granular look at the architectural differences between Space HR and Moveworks.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800/40 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Product Architecture Comparison</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Moveworks is an AI service desk platform that resolves IT and HR tickets by connecting to external systems. However, it lacks native database models for payroll, performance review calibration, and leave tracking.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">Moveworks Limitations</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Dual-vendor overhead. Requires configuring external databases (like Workday or ServiceNow) and mapping APIs to support basic HR conversations.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">Space HR Architectural Advantage</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  A unified, single-vendor solution providing both the conversational AI concierge and the core HR database, ensuring maximum data integrity and lower cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400">Space HR vs Moveworks — detailed comparison.</p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 bg-gray-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">More Comparisons</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/compare/bamboohr", label: "vs BambooHR" },
              { href: "/compare/workday", label: "vs Workday" },
              { href: "/compare/rippling", label: "vs Rippling" },
              { href: "/compare/gusto", label: "vs Gusto" },
              { href: "/compare/orangehrm", label: "vs OrangeHRM" },
              { href: "/compare", label: "All Comparisons" },
            ]
              .filter((l) => l.href !== "/compare/moveworks")
              .map((l) => (
                <Link key={l.href} href={l.href} className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 transition-all">
                  {l.label}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">HR Deserves Its Own AI.</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Stop adapting IT tools for HR work. Space HR was built from day one for people operations — get the full platform free for 14 days.</p>
          <div className="flex justify-center gap-4">
            <Link href="/request-a-demo">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 text-lg font-bold">
                Request a Demo
              </Button>
            </Link>
            <Link href="https://cad.spaceaiapp.com/login">
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg font-medium border-white/30 text-white hover:bg-white/10">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Features */}
      <div className="mt-12 border-t border-white/5 pt-8">
        <h2 className="text-2xl font-bold text-white mb-4">Related Features</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { href: "/features/hr-ai-concierge", label: "HR AI Concierge" },
            { href: "/features/ai-payroll-auditor", label: "AI Payroll Auditor" },
            { href: "/features/attrition-prediction", label: "Attrition Prediction" },
            { href: "/features/ai-automation", label: "AI Workflow Automation" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:text-white hover:border-gray-400 transition-all text-center"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
