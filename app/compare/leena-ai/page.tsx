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
  title: "Leena AI vs Space HR: Full HR Suite vs Standalone Chatbot",
  description: "Leena AI is a standalone chatbot. Space HR combines AI concierge with payroll detection, leave management, and attrition prediction — one platform.",
  keywords: ["leena ai alternative","Space HR vs leena ai","hr chatbot with payroll","ai hr platform","leena ai competitor"],
  twitter: {
    card: "summary_large_image",
    title: "Leena AI vs Space HR: Full HR Suite vs Standalone Chatbot",
    description: "Leena AI is a standalone HR chatbot. Space HR combines AI HR concierge with payroll anomaly detection, leave management, attrition prediction, and a complete HRMS — one platform, one price.",
  },
  alternates: { canonical: "https://spacehr.net/compare/leena-ai" },
  openGraph: {
    title: "Leena AI vs Space HR: Full HR Suite vs Standalone Chatbot",
    description: "Leena AI is a standalone HR chatbot. Space HR combines AI HR concierge with payroll anomaly detection, leave management, attrition prediction, and a complete HRMS — one platform, one price.",
    url: "https://spacehr.net/compare/leena-ai",
    siteName: "Space HR",
    images: [{ url: "/desktop-design-showcase.webp", width: 1200, height: 630, alt: "Space HR vs Leena AI Comparison" }],
  },
};

const faqs = [
  { question: "How is Space HR different from Leena AI?", answer: "Leena AI is a specialized AI conversational layer for HR — it excels at answering employee questions and routing requests. Space HR includes this capability plus a full HRMS, payroll anomaly detection, leave management, attrition prediction, and compliance automation — one platform, one price." },
  { question: "Does Space HR's chatbot match Leena AI's conversation quality?", answer: "Space HR's AI HR concierge handles the same use cases: policy queries, leave requests, payslip retrieval, onboarding guidance, and benefits questions. It uses the same LLM foundation but is pre-trained specifically on HR domain knowledge and your company's policies." },
  { question: "I already have Leena AI — why would I switch?", answer: "If you're paying for Leena AI + a separate HRMS + a separate analytics tool, you're likely paying 40–60% more than a single Space HR subscription. You also eliminate integration complexity and data silos between systems." },
  { question: "Can Space HR integrate with my existing payroll system if I switch from Leena AI?", answer: "Yes. Space HR connects to major payroll providers via API. You can keep your existing payroll engine and add Space HR's anomaly detection layer, or migrate fully to Space HR's native payroll module." },
  { question: "Does Space HR support enterprise-scale deployments like Leena AI?", answer: "Yes. Space HR scales to 5,000+ employees with enterprise SSO, role-based access, audit logs, and SOC 2 compliance. For 50,000+ employee deployments, contact our enterprise team for a custom plan." },
];

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net/" },
  { name: "Compare", url: "https://spacehr.net/compare" },
  { name: "vs Leena AI", url: "https://spacehr.net/compare/leena-ai" },
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

export default function CompareLeenaAIPage() {
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
          <li className="text-gray-900 dark:text-white font-medium">vs Leena AI</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 font-semibold text-sm">
            Chatbot vs Full Platform
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight whitespace-pre-line">
            Leena AI Answers Questions.<br />
            Space HR Runs HR.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              The Complete AI HR Platform.
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Leena AI is a great conversational layer — but it still needs a payroll engine, an HRMS, and an anomaly detection system underneath. Space HR is the entire stack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://cad.spaceaiapp.com/login">
              <Button size="lg" className="rounded-full px-8 h-12 text-lg bg-violet-600 hover:bg-violet-700 text-white border-none shadow-xl">
                See the Full Platform
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
              Platform Depth Comparison
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">What you get when you go beyond the chatbot layer.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-[#0f172a]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/3">Feature</th>
                  <th className="p-6 text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase border-b dark:border-gray-700 w-1/3 bg-blue-50/50 dark:bg-blue-900/10">Space HR</th>
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/3">Leena AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-violet-500" />
                      AI HR Chatbot
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>Included.</strong> Conversational HR concierge built-in.</td>
                  <td className="p-6 text-gray-500"><strong>Core product.</strong> Excellent chatbot capabilities.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      Payroll Anomaly Detection
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>Native AI scanner.</strong> Pre-payroll audit layer.</td>
                  <td className="p-6 text-gray-500"><strong>Not included.</strong> Requires separate payroll system.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-blue-500" />
                      Attrition Prediction
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>50+ signal AI model.</strong> Predicts flight risk months ahead.</td>
                  <td className="p-6 text-gray-500"><strong>Not included.</strong> Analytics add-on required.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-orange-500" />
                      Leave Management
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>Full module.</strong> Accruals, approvals, payroll integration.</td>
                  <td className="p-6 text-gray-500"><strong>Triggers only.</strong> Chatbot initiates, HR system processes.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-pink-500" />
                      Platform Type
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>Complete HRMS + AI.</strong> One platform, one contract.</td>
                  <td className="p-6 text-gray-500"><strong>AI layer.</strong> Sits on top of your existing HR stack.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sticky CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Switch?
          </h2>
          <p className="text-xl text-white/80 mb-6 max-w-2xl mx-auto">
            Free trial · No credit card · Free migration from Leena AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold bg-white text-violet-600 hover:bg-gray-100">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Teams Choose Space HR Over Leena AI</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">One platform instead of a patchwork of tools.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-xl flex items-center justify-center mb-6">
                 <Bot className="w-6 h-6 text-violet-600 dark:text-violet-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AI That Goes Beyond Chat</h3>
               <p className="text-gray-600 dark:text-gray-400">Space HR's AI doesn't just answer questions — it processes leave requests, flags payroll anomalies, predicts attrition, and auto-generates compliance reports.</p>
             </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
                 <ShieldCheck className="w-6 h-6 text-green-600 dark:text-green-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Payroll Safety Built In</h3>
               <p className="text-gray-600 dark:text-gray-400">Every payroll run is scanned by AI before execution. Ghost employees, duplicate payments, and tax anomalies are caught automatically — not discovered after a complaint.</p>
             </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                 <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Fewer Vendors, Lower Cost</h3>
               <p className="text-gray-600 dark:text-gray-400">Replace Leena AI + your HRMS + your analytics tool with a single Space HR subscription. Most companies consolidate 3–4 tools into one.</p>
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
            A granular look at the architectural differences between Space HR and Leena AI.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800/40 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Product Architecture Comparison</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Leena AI operates as a conversational chatbot layer on top of legacy HR systems. This requires maintaining expensive integrations and doesn't solve the underlying problem of fragmented, slow legacy databases.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">Leena AI Limitations</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Not a system of record. Requires separate licensing for core HRMS database, payroll engines, time logs, and performance tracking modules.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">Space HR Architectural Advantage</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Unified HRMS that contains both the core database (system of record) and the conversational AI layer natively, removing integration lag and dual-licensing costs.
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
            <p className="text-gray-600 dark:text-gray-400">Space HR vs Leena AI — detailed comparison.</p>
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
              .filter((l) => l.href !== "/compare/leena-ai")
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stop Stitching Tools Together.</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Get the chatbot, the HRMS, the anomaly detection, and the analytics — all in one Space HR subscription.</p>
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
