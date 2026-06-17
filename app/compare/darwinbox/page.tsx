import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";
import {
  Bot,
  ShieldCheck,
  BarChart3,
  Zap,
  Target
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Darwinbox vs Space HR: Regional HRMS vs AI-First HR Platform",
  description: "Darwinbox is a strong HRMS for Asia-Pacific enterprises. Space HR adds AI-native payroll anomaly detection, attrition prediction, and a conversational HR concierge that Darwinbox lacks.",
  keywords: ["darwinbox alternative","space hr vs darwinbox","ai hr software asia","darwinbox competitor","hr platform with ai chatbot"],
  alternates: { canonical: "https://spacehr.net/compare/darwinbox" },
  openGraph: {
    title: "Darwinbox vs Space HR: Regional HRMS vs AI-First HR Platform",
    description: "Darwinbox is a strong HRMS for Asia-Pacific enterprises. Space HR adds AI-native payroll anomaly detection, attrition prediction, and a conversational HR concierge that Darwinbox lacks.",
    url: "https://spacehr.net/compare/darwinbox",
    siteName: "SpaceHR",
    images: [{ url: "/desktop-design-showcase.webp", width: 1200, height: 630, alt: "Space HR vs Darwinbox Comparison" }],
  },
};

const faqs = [
  { question: "How is Space HR different from Darwinbox?", answer: "Darwinbox is a strong regional HRMS with core HR modules — payroll, leave, performance, and recruitment. Space HR adds a layer Darwinbox lacks: native AI that predicts attrition months ahead, scans payroll for anomalies before execution, and powers a 24/7 conversational HR concierge." },
  { question: "Can I use Space HR alongside Darwinbox?", answer: "Yes. Space HR can operate as an AI intelligence layer on top of Darwinbox — connecting via API to pull employee data and power anomaly detection, attrition prediction, and the AI HR chatbot while Darwinbox remains the system of record." },
  { question: "Is Space HR available in Asia-Pacific markets?", answer: "Yes. Space HR supports compliance frameworks for Singapore, UAE, India, Malaysia, Australia, and other APAC markets — with jurisdiction-specific leave entitlements, statutory deduction rules, and local holiday calendars." },
  { question: "Does Space HR have better attrition prediction than Darwinbox?", answer: "Yes. Darwinbox offers historical workforce analytics and basic dashboards. Space HR's attrition prediction model analyzes 50+ real-time signals — engagement scores, manager relationship quality, compensation ratios, promotion history — to identify flight risks 3–6 months before resignation." },
  { question: "How long does it take to switch from Darwinbox to Space HR?", answer: "Full migration typically takes 2–4 weeks, including data migration, policy configuration, and team training. Our customer success team manages the entire process with a structured playbook." },
];

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net/" },
  { name: "Compare", url: "https://spacehr.net/compare" },
  { name: "vs Darwinbox", url: "https://spacehr.net/compare/darwinbox" },
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

export default function CompareDarwinboxPage() {
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
          <li className="text-gray-900 dark:text-white font-medium">vs Darwinbox</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 font-semibold text-sm">
            Traditional HRMS vs AI-Native Platform
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight whitespace-pre-line">
            Darwinbox Manages HR Records.<br />
            Space HR Predicts HR Problems.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              AI-First HR for Growing Organizations.
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Darwinbox is a capable HRMS trusted by Asian enterprises. Space HR goes further — with AI that predicts attrition before it happens, catches payroll errors before payday, and answers employee questions 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://cad.spaceaiapp.com/login">
              <Button size="lg" className="rounded-full px-8 h-12 text-lg bg-rose-600 hover:bg-rose-700 text-white border-none shadow-xl">
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
              AI Capability Comparison
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">What AI-first HR looks like beyond standard HRMS features.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-[#0f172a]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/3">Feature</th>
                  <th className="p-6 text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase border-b dark:border-gray-700 w-1/3 bg-blue-50/50 dark:bg-blue-900/10">Space HR</th>
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/3">Darwinbox</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-rose-500" />
                      AI HR Concierge
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>Conversational AI.</strong> 24/7 employee self-service with natural language.</td>
                  <td className="p-6 text-gray-500"><strong>Chatbot module.</strong> Rule-based, limited to configured flows.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-blue-500" />
                      Payroll Anomaly Detection
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>AI pre-payroll scanner.</strong> Catches ghost employees, spikes, tax issues.</td>
                  <td className="p-6 text-gray-500"><strong>Not native.</strong> Payroll validation requires manual review.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-purple-500" />
                      Attrition Prediction
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>50+ signal model.</strong> 3–6 month early warning on flight risk.</td>
                  <td className="p-6 text-gray-500"><strong>Basic analytics.</strong> Historical reports, no predictive AI.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-orange-500" />
                      Setup Speed
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>72 hours.</strong> Guided deployment, no implementation partner needed.</td>
                  <td className="p-6 text-gray-500"><strong>4–8 weeks.</strong> Requires implementation partner for full setup.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-green-500" />
                      AI Maturity
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>AI-native platform.</strong> Built on LLMs and ML models from day one.</td>
                  <td className="p-6 text-gray-500"><strong>AI features added.</strong> AI bolted onto existing HRMS architecture.</td>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Teams Upgrade From Darwinbox to Space HR</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">When you're ready to go beyond storing HR data to predicting HR outcomes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-xl flex items-center justify-center mb-6">
                 <Bot className="w-6 h-6 text-rose-600 dark:text-rose-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">True Conversational AI</h3>
               <p className="text-gray-600 dark:text-gray-400">Space HR's AI HR concierge understands natural language — employees ask questions the way they speak, and get instant accurate answers, not scripted chatbot flows.</p>
             </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                 <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Payroll Intelligence</h3>
               <p className="text-gray-600 dark:text-gray-400">AI audits every payroll cycle before it runs — spotting anomalies Darwinbox's manual validation would miss, including salary spikes, ghost employees, and statutory non-compliance.</p>
             </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                 <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Predictive Retention</h3>
               <p className="text-gray-600 dark:text-gray-400">Know who's likely to leave 3–6 months ahead. Space HR's attrition model analyzes 50+ signals and gives managers a prioritized list of at-risk employees with retention playbooks.</p>
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
            A granular look at the architectural differences between Space HR and Darwinbox.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800/40 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Product Architecture Comparison</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Darwinbox is highly customizable for large Asian enterprises, but its high complexity results in long implementation timelines and a heavy administrative burden just to keep workflows running.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">Darwinbox Limitations</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Implementation times of 3–6 months. High consultant dependency for editing simple approval chains, and a complex mobile interface that frustrates end-users.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">Space HR Architectural Advantage</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Deployable in 48 hours to 2 weeks. Pre-trained AI HR assistants handle policy queries automatically, and simple drag-and-drop workflow builders require zero IT support.
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
            <p className="text-gray-600 dark:text-gray-400">Space HR vs Darwinbox — detailed comparison.</p>
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
              .filter((l) => l.href !== "/compare/darwinbox")
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Move From Reactive to Predictive HR.</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Stop finding out about HR problems after they happen. Space HR's AI gives you 3–6 months of early warning. Start free.</p>
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
