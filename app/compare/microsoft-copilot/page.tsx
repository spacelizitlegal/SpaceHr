import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";
import {
  Bot,
  ShieldCheck,
  BarChart3,
  Users,
  Target
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microsoft Copilot vs Space HR: Generic AI vs HR AI",
  description: "Copilot is general AI. Space HR is purpose-built for HR: payroll detection, attrition prediction, leave automation, and a trained HR concierge.",
  keywords: ["microsoft copilot alternative for hr","Space HR vs microsoft copilot","hr ai software","copilot for hr teams","dedicated hr ai platform"],
  twitter: {
    card: "summary_large_image",
    title: "Microsoft Copilot vs Space HR: Generic AI vs Purpose-Built HR AI",
    description: "Microsoft Copilot is a general productivity AI. Space HR is purpose-built for HR — with payroll anomaly detection, attrition prediction, leave automation, and a trained HR AI concierge.",
  },
  alternates: { canonical: "https://spacehr.net/compare/microsoft-copilot" },
  openGraph: {
    title: "Microsoft Copilot vs Space HR: Generic AI vs Purpose-Built HR AI",
    description: "Microsoft Copilot is a general productivity AI. Space HR is purpose-built for HR — with payroll anomaly detection, attrition prediction, leave automation, and a trained HR AI concierge.",
    url: "https://spacehr.net/compare/microsoft-copilot",
    siteName: "Space HR",
    images: [{ url: "/desktop-design-showcase.webp", width: 1200, height: 630, alt: "Space HR vs Microsoft Copilot Comparison" }],
  },
};

const faqs = [
  { question: "How is Space HR different from Microsoft Copilot for HR?", answer: "Microsoft Copilot is a general-purpose productivity AI that helps with writing, summarizing, and searching across M365 applications. Space HR is a dedicated HR platform with AI built in — including payroll anomaly detection, leave automation, attrition prediction, and an AI HR concierge with direct system access." },
  { question: "Can Microsoft Copilot detect payroll anomalies?", answer: "No. Microsoft Copilot does not have access to payroll engines or the ability to scan payroll data for anomalies. Space HR's AI runs a pre-payroll scan before every cycle to catch ghost employees, salary irregularities, duplicate payments, and tax compliance issues." },
  { question: "Do I need Dynamics 365 HR if I use Space HR?", answer: "No. Space HR is a standalone HR platform — you don't need Dynamics 365 HR, SharePoint for HR policies, or Power BI for analytics. Everything is included in one subscription." },
  { question: "Can Space HR integrate with Microsoft 365?", answer: "Yes. Space HR integrates with Microsoft 365 for SSO via Azure Active Directory, Teams notifications for leave approvals and alerts, and Outlook calendar sync for time-off visibility." },
  { question: "Is Space HR more expensive than adding Copilot to M365?", answer: "Microsoft Copilot costs ~$30/user/month on top of existing M365 licenses. Space HR is competitively priced per seat and includes a full HRMS, payroll anomaly detection, leave management, and attrition analytics — features Copilot cannot replicate." },
];

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net/" },
  { name: "Compare", url: "https://spacehr.net/compare" },
  { name: "vs Microsoft Copilot", url: "https://spacehr.net/compare/microsoft-copilot" },
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

export default function CompareMicrosoftCopilotPage() {
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
          <li className="text-gray-900 dark:text-white font-medium">vs Microsoft Copilot</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-sky-950/20 dark:to-indigo-950/20 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-300 font-semibold text-sm">
            General AI vs HR Specialist AI
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight whitespace-pre-line">
            Copilot Writes Emails.<br />
            Space HR Runs Payroll.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              AI That Knows HR Inside Out.
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Microsoft Copilot helps with productivity across Office 365. Space HR is specialized AI for people operations — payroll safety, retention intelligence, and employee self-service that Copilot simply doesn't offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://cad.spaceaiapp.com/login">
              <Button size="lg" className="rounded-full px-8 h-12 text-lg bg-sky-600 hover:bg-sky-700 text-white border-none shadow-xl">
                Try Space HR Free
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
              HR Depth Comparison
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Productivity AI vs purpose-built people operations software.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-[#0f172a]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/3">Feature</th>
                  <th className="p-6 text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase border-b dark:border-gray-700 w-1/3 bg-blue-50/50 dark:bg-blue-900/10">Space HR</th>
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/3">Microsoft Copilot</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-sky-500" />
                      AI HR Concierge
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>Dedicated HR AI.</strong> Trained on HR policies, leave rules, payroll.</td>
                  <td className="p-6 text-gray-500"><strong>General AI.</strong> Answers HR questions but has no system access.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      Payroll Anomaly Detection
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>Native pre-payroll scan.</strong> Catches errors before execution.</td>
                  <td className="p-6 text-gray-500"><strong>Not available.</strong> Copilot has no payroll engine.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-purple-500" />
                      Attrition Prediction
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>50+ signal AI model.</strong> Predicts who's leaving and why.</td>
                  <td className="p-6 text-gray-500"><strong>Not available.</strong> Would require manual Power BI setup.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-orange-500" />
                      Leave Management
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>Full module.</strong> Self-service requests, approvals, payroll sync.</td>
                  <td className="p-6 text-gray-500"><strong>Not included.</strong> Requires Dynamics 365 HR add-on.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-pink-500" />
                      HR System of Record
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>Complete HRMS.</strong> Single source of truth for all people data.</td>
                  <td className="p-6 text-gray-500"><strong>Overlay only.</strong> Sits on top of your existing M365 data.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sticky CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Switch?
          </h2>
          <p className="text-xl text-white/80 mb-6 max-w-2xl mx-auto">
            Free trial · No credit card · Free migration from Microsoft Copilot
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold bg-white text-sky-600 hover:bg-gray-100">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why HR Teams Need More Than Copilot</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">When HR needs specialized AI, not general productivity assistance.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-xl flex items-center justify-center mb-6">
                 <Bot className="w-6 h-6 text-sky-600 dark:text-sky-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">HR AI That Acts, Not Just Answers</h3>
               <p className="text-gray-600 dark:text-gray-400">Space HR's AI processes leave requests, triggers compliance alerts, flags payroll anomalies, and generates reports — not just writes responses in Teams.</p>
             </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
                 <ShieldCheck className="w-6 h-6 text-green-600 dark:text-green-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Payroll Safety Copilot Can't Provide</h3>
               <p className="text-gray-600 dark:text-gray-400">Copilot cannot scan your payroll for ghost employees, duplicate payments, or tax mismatches. Space HR's AI does this automatically before every payroll run.</p>
             </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                 <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Predictive People Analytics</h3>
               <p className="text-gray-600 dark:text-gray-400">Space HR predicts attrition 3–6 months ahead and surfaces the factors driving it — so you can retain your best people, not just manage administrative tasks faster.</p>
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
            A granular look at the architectural differences between Space HR and Microsoft Copilot.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800/40 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Product Architecture Comparison</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Microsoft Copilot is a general-purpose AI assistant. While it excels at document drafting, it lacks native HRIS database schemas, direct payroll system triggers, and payroll compliance guardrails.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">Microsoft Copilot Limitations</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  No native HR database or schema. Cannot process leave requests, generate .SIF files, or calculate tax withholdings natively in Microsoft 365.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">Space HR Architectural Advantage</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Domain-specific AI pre-trained on HR compliance guidelines and directly connected to Space HR's databases to execute actions securely in real-time.
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
            <p className="text-gray-600 dark:text-gray-400">Space HR vs Microsoft Copilot — detailed comparison.</p>
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
              .filter((l) => l.href !== "/compare/microsoft-copilot")
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Give HR Its Own AI Brain.</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Microsoft Copilot makes HR admins more productive. Space HR makes your entire HR operation more intelligent. Get started free.</p>
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
            { href: "/features/ai-chatbots", label: "AI HR Chatbot" },
            { href: "/features/ai-payroll-auditor", label: "AI Payroll Auditor" },
            { href: "/features/attrition-prediction", label: "Attrition Prediction" },
            { href: "/features/attendance", label: "Attendance Tracking" },
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
