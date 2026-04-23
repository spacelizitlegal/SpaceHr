import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";
import {
  Zap,
  Bot,
  ShieldCheck,
  BarChart3,
  Target
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAP SuccessFactors vs Space HR: Enterprise Complexity vs Agile AI",
  description: "SAP SuccessFactors takes 6–18 months to implement and costs millions. Space HR delivers AI-powered HR in 72 hours with payroll anomaly detection, attrition prediction, and an AI concierge included.",
  keywords: ["sap successfactors alternative","space hr vs sap successfactors","successfactors competitor","mid-market hr software","hr platform without sap"],
  alternates: { canonical: "https://spacehr.net/compare/sap-successfactors" },
  openGraph: {
    title: "SAP SuccessFactors vs Space HR: Enterprise Complexity vs Agile AI",
    description: "SAP SuccessFactors takes 6–18 months to implement and costs millions. Space HR delivers AI-powered HR in 72 hours with payroll anomaly detection, attrition prediction, and an AI concierge included.",
    url: "https://spacehr.net/compare/sap-successfactors",
    siteName: "SpaceHR",
    images: [{ url: "/desktop-design-showcase.webp", width: 1200, height: 630, alt: "Space HR vs SAP SuccessFactors Comparison" }],
  },
};

const faqs = [
  { question: "How is Space HR different from SAP SuccessFactors?", answer: "SAP SuccessFactors is designed for large global enterprises — powerful, comprehensive, and complex. Implementation typically takes 6–18 months and costs hundreds of thousands to millions of dollars. Space HR targets growing companies (50–5,000 employees) with equivalent AI capabilities, deployable in 72 hours at a fraction of the cost." },
  { question: "Can Space HR replace SAP SuccessFactors?", answer: "For companies under 5,000 employees, yes — Space HR covers core HR, payroll anomaly detection, leave management, attrition prediction, performance management, and AI HR concierge. For Fortune 500 global enterprises with complex SAP ERP integrations, SAP SuccessFactors may still be appropriate." },
  { question: "How much does Space HR cost compared to SAP SuccessFactors?", answer: "SAP SuccessFactors licensing starts at $6–$12 per employee per month, plus $300K–$2M+ in implementation costs. Space HR is all-inclusive per-seat SaaS pricing with no implementation fees. Most 200–500 person companies save over $300,000 in year one." },
  { question: "Does Space HR include the AI features SAP charges extra for?", answer: "Yes. SAP's Joule AI assistant and advanced analytics require additional licensing on top of SuccessFactors. Space HR includes AI HR concierge, payroll anomaly detection, and attrition prediction in every plan at no extra charge." },
  { question: "How long does it take to migrate from SAP SuccessFactors to Space HR?", answer: "Full migrations typically take 4–8 weeks — significantly faster than SAP implementations. Our team handles data migration, integration setup, and change management. Most clients are fully live within 6 weeks." },
];

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net/" },
  { name: "Compare", url: "https://spacehr.net/compare" },
  { name: "vs SAP SuccessFactors", url: "https://spacehr.net/compare/sap-successfactors" },
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

export default function CompareSAPSuccessFactorsPage() {
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
          <li className="text-gray-900 dark:text-white font-medium">vs SAP SuccessFactors</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 font-semibold text-sm">
            Enterprise vs Agile HR
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight whitespace-pre-line">
            SuccessFactors Takes 18 Months.<br />
            Space HR Takes 72 Hours.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Enterprise HR Without the Enterprise Pain.
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            SAP SuccessFactors is the gold standard for Fortune 500 HR. But for growing companies, the 6–18 month implementation timeline, $1M+ budgets, and complexity are deal-breakers. Space HR delivers the same outcomes, faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://cad.spaceaiapp.com/login">
              <Button size="lg" className="rounded-full px-8 h-12 text-lg bg-amber-600 hover:bg-amber-700 text-white border-none shadow-xl">
                Get Started Today
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
              Speed and Value Comparison
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Why agile companies choose Space HR over legacy enterprise platforms.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-[#0f172a]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/3">Feature</th>
                  <th className="p-6 text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase border-b dark:border-gray-700 w-1/3 bg-blue-50/50 dark:bg-blue-900/10">Space HR</th>
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/3">SAP SuccessFactors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-500" />
                      Implementation Time
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>72 hours.</strong> Guided setup, no SI partner required.</td>
                  <td className="p-6 text-gray-500"><strong>6–18 months.</strong> Requires certified SAP implementation partner.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-blue-500" />
                      AI HR Concierge
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>Included day one.</strong> Conversational HR available immediately.</td>
                  <td className="p-6 text-gray-500"><strong>SAP Joule add-on.</strong> Requires additional licensing and setup.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      Payroll Anomaly Detection
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>Native AI scan.</strong> Automatic pre-payroll error detection.</td>
                  <td className="p-6 text-gray-500"><strong>Add-on audit tools.</strong> Requires additional SAP modules.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-purple-500" />
                      Total Cost
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>Per-seat SaaS.</strong> Predictable monthly pricing, all-inclusive.</td>
                  <td className="p-6 text-gray-500"><strong>$500K–$5M+.</strong> Licensing + implementation + annual maintenance.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-pink-500" />
                      Target Size
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300"><strong>50–5,000 employees.</strong> Right-sized for growth.</td>
                  <td className="p-6 text-gray-500"><strong>2,000+ employees.</strong> Designed for large global enterprises.</td>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Growing Companies Choose Space HR Over SAP</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Enterprise outcomes without enterprise complexity or cost.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-6">
                 <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Live in Days, Not Months</h3>
               <p className="text-gray-600 dark:text-gray-400">Space HR's guided setup gets your entire HR operation live in 72 hours. No SAP consultants, no ABAP development, no 18-month project plans.</p>
             </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                 <Bot className="w-6 h-6 text-blue-600 dark:text-blue-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AI Included, Not Sold Separately</h3>
               <p className="text-gray-600 dark:text-gray-400">SAP charges extra for Joule AI. Space HR includes AI HR concierge, anomaly detection, and attrition prediction in every plan — no add-on licensing needed.</p>
             </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                 <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">90% Lower Total Cost</h3>
               <p className="text-gray-600 dark:text-gray-400">For a 500-person company, SAP SuccessFactors typically costs $800K–$2M in year one. Space HR's all-inclusive per-seat pricing saves most companies 85–95% in year one.</p>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400">Space HR vs SAP SuccessFactors — detailed comparison.</p>
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
              .filter((l) => l.href !== "/compare/sap-successfactors")
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Skip the 18-Month Implementation.</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Get enterprise-grade HR automation running this week. Space HR deploys in 72 hours — no SAP consultants required.</p>
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
