import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";
import {
  Zap,
  Bot,
  ShieldCheck,
  BarChart3,
  Users
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ServiceNow vs Space HR: AI HR Chatbot Without Enterprise Complexity",
  description: "ServiceNow requires months of configuration and IT teams. Space HR deploys an AI HR chatbot in days — with built-in payroll anomaly detection, leave management, and zero IT overhead.",
  keywords: ["servicenow alternative","Space HR vs servicenow","hr service delivery software","ai hr chatbot servicenow alternative","hr helpdesk without servicenow"],
  twitter: {
    card: "summary_large_image",
    title: "ServiceNow vs Space HR: AI HR Chatbot Without Enterprise Complexity",
    description: "ServiceNow requires months of configuration and IT teams. Space HR deploys an AI HR chatbot in days — with built-in payroll anomaly detection, leave management, and zero IT overhead.",
  },
  alternates: { canonical: "https://spacehr.net/compare/servicenow" },
  openGraph: {
    title: "ServiceNow vs Space HR: AI HR Chatbot Without Enterprise Complexity",
    description: "ServiceNow requires months of configuration and IT teams. Space HR deploys an AI HR chatbot in days — with built-in payroll anomaly detection, leave management, and zero IT overhead.",
    url: "https://spacehr.net/compare/servicenow",
    siteName: "Space HR",
    images: [{ url: "/desktop-design-showcase.webp", width: 1200, height: 630, alt: "Space HR vs ServiceNow Comparison" }],
  },
};

const faqs = [
  { question: "How is Space HR different from ServiceNow HR Service Delivery?", answer: "ServiceNow is a powerful enterprise ITSM platform extended to HR. It requires dedicated IT administrators, months of configuration, and per-module licensing. Space HR is purpose-built for HR teams — deploy in 72 hours, all features included, no IT team needed." },
  { question: "Can Space HR handle the same volume as ServiceNow?", answer: "For teams of 50–5,000 employees, yes. Space HR handles thousands of concurrent employee interactions via AI, with enterprise-grade uptime SLAs. For organizations with 10,000+ employees and deep ITSM integration needs, ServiceNow may be a better fit." },
  { question: "Does Space HR include an AI HR chatbot like ServiceNow Virtual Agent?", answer: "Yes — and it's included in every plan, not an add-on. Space HR's AI concierge handles leave requests, policy questions, payslip queries, and onboarding tasks conversationally, without ticket queues." },
  { question: "How much cheaper is Space HR than ServiceNow?", answer: "ServiceNow HR Service Delivery typically costs $50–$150 per employee per year, plus implementation fees of $50,000–$200,000+. Space HR is flat per-seat with no implementation costs — most companies save 60–80%." },
  { question: "Can I migrate from ServiceNow to Space HR?", answer: "Yes. Space HR provides a structured migration guide and API connectors for importing employee data, historical leave records, and HR policies. Most migrations complete within 2 weeks." },
];

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net/" },
  { name: "Compare", url: "https://spacehr.net/compare" },
  { name: "vs ServiceNow", url: "https://spacehr.net/compare/servicenow" },
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

export default function CompareServiceNowPage() {
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
          <li className="text-gray-900 dark:text-white font-medium">vs ServiceNow</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 font-semibold text-sm">
            Enterprise Speed vs Startup Agility
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight whitespace-pre-line">
            ServiceNow Takes Months.<br />
            We Take Days.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Deploy AI HR in 72 Hours.
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            ServiceNow HR Service Delivery is powerful — but it requires dedicated IT teams, months of configuration, and six-figure contracts. Space HR delivers the same employee self-service experience, built for mid-market teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://cad.spaceaiapp.com/login">
              <Button size="lg" className="rounded-full px-8 h-12 text-lg bg-blue-600 hover:bg-blue-700 text-white border-none shadow-xl">
                Start Your Free Trial
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
              The Deployment Comparison
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Why mid-market HR teams choose Space HR over enterprise platforms.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-[#0f172a]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/3">Feature</th>
                  <th className="p-6 text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase border-b dark:border-gray-700 w-1/3 bg-blue-50/50 dark:bg-blue-900/10">Space HR</th>
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/3">ServiceNow</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-500" />
                      Time to Deploy
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>72 hours.</strong> Guided setup, no IT team needed.</td>
                  <td className="p-6 text-gray-500"><strong>3–6 months.</strong> Requires ITSM architects and custom workflows.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-green-500" />
                      AI HR Chatbot
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>Included.</strong> Conversational HR on day one.</td>
                  <td className="p-6 text-gray-500"><strong>Add-on module.</strong> Virtual Agent licensed separately.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-purple-500" />
                      Payroll Anomaly Detection
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>Native AI.</strong> Pre-payroll scan catches errors automatically.</td>
                  <td className="p-6 text-gray-500"><strong>Not included.</strong> Requires 3rd-party integration.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-orange-500" />
                      Pricing Model
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>Flat per-seat.</strong> All features included.</td>
                  <td className="p-6 text-gray-500"><strong>Module-based.</strong> Each capability is a separate license.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-pink-500" />
                      Target Market
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>50–5,000 employees.</strong> Designed for growing teams.</td>
                  <td className="p-6 text-gray-500"><strong>5,000+ employees.</strong> Optimized for large enterprises.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Switch Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why HR Teams Switch From ServiceNow</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Power without the complexity or the price tag.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                 <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Deploy This Week</h3>
               <p className="text-gray-600 dark:text-gray-400">Our guided onboarding gets your AI HR concierge live in under 72 hours. No ITSM architects, no custom scripting, no consultants required.</p>
             </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
                 <Bot className="w-6 h-6 text-green-600 dark:text-green-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Conversational HR Out-of-Box</h3>
               <p className="text-gray-600 dark:text-gray-400">Employees ask questions in plain language — leave balances, policy queries, payslip requests — and get instant answers. No ticket queues.</p>
             </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                 <ShieldCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Payroll Safety Included</h3>
               <p className="text-gray-600 dark:text-gray-400">AI anomaly detection scans every payroll run before execution — catching ghost employees, salary spikes, and tax mismatches automatically.</p>
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
            A granular look at the architectural differences between Space HR and ServiceNow.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800/40 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Product Architecture Comparison</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              ServiceNow excels at general enterprise workflow ticketing, but its HR Service Delivery (HRSD) module is an expensive add-on that requires significant customization and engineering to support basic HR tasks.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">ServiceNow Limitations</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Ticketing-first architecture. Lacks native payroll processing, tax filing, and localized employment contract validation databases.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">Space HR Architectural Advantage</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Purpose-built HRMS with native payroll, time tracking, performance reviews, and out-of-the-box Slack and Teams integrations.
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
            <p className="text-gray-600 dark:text-gray-400">Space HR vs ServiceNow — detailed comparison.</p>
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
              .filter((l) => l.href !== "/compare/servicenow")
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Same Power. A Fraction of the Cost.</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Get enterprise-grade HR automation without enterprise complexity. Space HR deploys in days, not months.</p>
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
    </div>
  );
}
