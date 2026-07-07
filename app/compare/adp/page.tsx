import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";
import {
  ShieldCheck,
  Bot,
  BarChart3,
  Zap,
  Target
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADP Workforce Now vs Space HR: Payroll Legacy vs AI-Native HR",
  description: "ADP Workforce Now is the payroll gold standard — but lacks AI anomaly detection, attrition prediction, and a modern employee self-service chatbot. Space HR adds the AI layer your ADP doesn't have.",
  keywords: ["adp workforce now alternative","Space HR vs adp","adp competitor","ai payroll software","adp replacement for mid-market"],
  twitter: {
    card: "summary_large_image",
    title: "ADP Workforce Now vs Space HR: Payroll Legacy vs AI-Native HR",
    description: "ADP Workforce Now is the payroll gold standard — but lacks AI anomaly detection, attrition prediction, and a modern employee self-service chatbot. Space HR adds the AI layer your ADP doesn't have.",
  },
  alternates: { canonical: "https://spacehr.net/compare/adp" },
  openGraph: {
    title: "ADP Workforce Now vs Space HR: Payroll Legacy vs AI-Native HR",
    description: "ADP Workforce Now is the payroll gold standard — but lacks AI anomaly detection, attrition prediction, and a modern employee self-service chatbot. Space HR adds the AI layer your ADP doesn't have.",
    url: "https://spacehr.net/compare/adp",
    siteName: "Space HR",
    images: [{ url: "/desktop-design-showcase.webp", width: 1200, height: 630, alt: "Space HR vs ADP Workforce Now Comparison" }],
  },
};

const faqs = [
  { question: "Should I replace ADP with Space HR or use both?", answer: "Both options work. Space HR can replace ADP Workforce Now entirely for companies of 50–2,000 employees, offering its own payroll engine with native AI anomaly detection. Alternatively, you can keep ADP as your payroll processor and add Space HR as an AI intelligence layer that scans data before it's submitted to ADP." },
  { question: "Does Space HR catch payroll errors that ADP misses?", answer: "Yes. ADP processes payroll based on the data submitted to it — if your HR data has a ghost employee, a salary error, or an incorrect tax code, ADP runs it as submitted. Space HR's AI anomaly detection scans your payroll data before every run and flags issues for HR review before they become problems." },
  { question: "How does Space HR's employee experience compare to MyADP?", answer: "Significantly better for modern expectations. Space HR's employee portal is mobile-first with a consumer-grade design. The AI HR concierge answers questions in natural language — no FAQ searching, no help tickets. MyADP is functional but relies on a traditional portal and form-based navigation." },
  { question: "Is Space HR cheaper than ADP Workforce Now?", answer: "For companies under 500 employees, yes — ADP Workforce Now pricing typically starts at $22–$36 per employee per month with add-ons. Space HR's all-inclusive per-seat pricing is competitive, with AI anomaly detection, attrition prediction, and the AI concierge included at no extra charge." },
  { question: "Can Space HR integrate with ADP for payroll data?", answer: "Yes. Space HR connects to ADP Workforce Now via API for employee data sync, payroll data validation, and leave balance imports — enabling the anomaly detection layer without a full platform migration." },
];

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net/" },
  { name: "Compare", url: "https://spacehr.net/compare" },
  { name: "vs ADP Workforce Now", url: "https://spacehr.net/compare/adp" },
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

export default function CompareADPWorkforceNowPage() {
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
          <li className="text-gray-900 dark:text-white font-medium">vs ADP Workforce Now</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 font-semibold text-sm">
            Payroll Processor vs AI HR Platform
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight whitespace-pre-line">
            ADP Runs Payroll.<br />
            Space HR Makes Payroll Safer.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              AI That Catches What ADP Misses.
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            ADP Workforce Now is trusted payroll infrastructure — but it runs your payroll as-is. Space HR's AI anomaly detection layer catches ghost employees, salary spikes, and tax mismatches before ADP processes them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://cad.spaceaiapp.com/login">
              <Button size="lg" className="rounded-full px-8 h-12 text-lg bg-red-600 hover:bg-red-700 text-white border-none shadow-xl">
                See How It Works
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
              AI Layer Comparison
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">What ADP runs vs what Space HR detects and predicts.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-[#0f172a]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/3">Feature</th>
                  <th className="p-6 text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase border-b dark:border-gray-700 w-1/3 bg-blue-50/50 dark:bg-blue-900/10">Space HR</th>
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/3">ADP Workforce Now</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-red-500" />
                      Payroll Anomaly Detection
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>Pre-payroll AI scan.</strong> Catches errors before ADP processes them.</td>
                  <td className="p-6 text-gray-500"><strong>Post-processing only.</strong> Reports errors after payday.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-blue-500" />
                      AI HR Concierge
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>24/7 conversational AI.</strong> Employees self-serve instantly.</td>
                  <td className="p-6 text-gray-500"><strong>MyADP portal.</strong> FAQ-based, not conversational AI.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-purple-500" />
                      Attrition Prediction
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>50+ signal AI model.</strong> Know who's leaving before they resign.</td>
                  <td className="p-6 text-gray-500"><strong>Not available.</strong> ADP focuses on payroll processing.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-orange-500" />
                      Modern UX
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>Consumer-grade design.</strong> Mobile-first, intuitive for all employees.</td>
                  <td className="p-6 text-gray-500"><strong>Legacy interface.</strong> Complex navigation, steep learning curve.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-green-500" />
                      Mid-Market Fit
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>50–5,000 employees.</strong> Right-sized pricing and features.</td>
                  <td className="p-6 text-gray-500"><strong>Better for 500+.</strong> Minimum complexity and cost for smaller teams.</td>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why HR Teams Add Space HR Alongside ADP</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Keep ADP for payroll processing — add Space HR for AI and intelligence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-6">
                 <ShieldCheck className="w-6 h-6 text-red-600 dark:text-red-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Catch What ADP Runs As-Is</h3>
               <p className="text-gray-600 dark:text-gray-400">ADP Workforce Now processes payroll based on the data you submit. Space HR's AI pre-scan catches anomalies in that data before ADP runs it — preventing overpayments, ghost employees, and compliance failures.</p>
             </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                 <Bot className="w-6 h-6 text-blue-600 dark:text-blue-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Modern Employee Self-Service</h3>
               <p className="text-gray-600 dark:text-gray-400">Replace the MyADP support queue with Space HR's conversational AI concierge. Employees ask leave balance, payslip, and policy questions and get instant answers — without calling HR.</p>
             </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                 <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Retention Analytics ADP Doesn't Offer</h3>
               <p className="text-gray-600 dark:text-gray-400">ADP tells you who left. Space HR tells you who's about to leave and why — with 3–6 months of advance warning and manager-level retention playbooks.</p>
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
            A granular look at the architectural differences between Space HR and ADP.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800/40 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Product Architecture Comparison</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              ADP is a massive player in enterprise payroll and HR, but its architecture is built on a series of legacy systems acquired over decades. This results in disconnected databases, batch-based payroll calculations, and long turnaround times for compliance adjustments.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">ADP Limitations</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Multiple logins for different modules (Run, Workforce Now, Vantage). Batch processing means payroll errors are only caught post-calculation, leading to manual checks and expensive retro-runs.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">Space HR Architectural Advantage</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Single unified database for core HR, time tracking, and payroll. AI-powered pre-payroll auditor automatically scans every entry and flags compliance anomalies in real-time before calculations run.
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
            <p className="text-gray-600 dark:text-gray-400">Space HR vs ADP Workforce Now — detailed comparison.</p>
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
              .filter((l) => l.href !== "/compare/adp")
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Make Your Payroll Smarter.</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Keep ADP or replace it — either way, Space HR adds the AI anomaly detection, attrition intelligence, and modern employee experience ADP doesn't provide.</p>
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
