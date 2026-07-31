import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd,
  generateBreadcrumbSchema } from "@/components/JsonLd";
import {
  CheckCircle,
  XCircle,
  Zap,
  ShieldCheck,
  BarChart3,
  Bot,
  Sprout,
  Users,
  Layers,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BambooHR Alternatives for Mid-Sized Companies | Space HR",
  description:
    "BambooHR is great for small business. Space HR provides scalability, global compliance, and API integrations for growing tech teams. See the comparison.",
  keywords: [
    "bamboohr alternative mid-sized business",
    "hr software for tech companies",
    "Space HR vs bamboohr",
    "scalable hr platform",
    "global payroll for tech teams",
  ],
  openGraph: {
    title: "BambooHR Alternatives for Mid-Sized Tech Companies | Space HR",
    description: "BambooHR is great for small business, but mid-sized tech companies need more. Space HR provides the scalability, global compliance, and API integrations growing tech teams demand.",
    url: "https://spacehr.net/compare/bamboohr",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BambooHR Alternatives for Mid-Sized Tech Companies | Space HR",
    description: "BambooHR is great for small business, but mid-sized tech companies need more. Space HR provides the scalability, global compliance, and API integrations growing tech teams demand.",
  },
  alternates: { canonical: "https://spacehr.net/compare/bamboohr" },
};

const faqs = [
  {
    question: "Is Space HR better for tech companies than BambooHR?",
    answer:
      "Yes. We are built for the tech stack you already use. Deep API integrations, developer-friendly documentation, and global contractor management make us the preferred choice for engineering-led organizations.",
  },
  {
    question: "Do you support global remote teams?",
    answer:
      "Unlike BambooHR which is US-centric, Space HR works natively across borders. We handle multi-currency payroll, different holiday calendars, and local tax compliance in one unified system.",
  },
  {
    question: "Can we migrate data from BambooHR?",
    answer:
      "Seamlessly. Our 'Bamboo-to-Space' migration tool maps your existing employee data, documents, and time-off balances automatically. You can switch over in a weekend.",
  },
  {
    question: "How does compensation planning work?",
    answer:
      "Tech talent is expensive. Our Compensation Planning module uses real-time market data to help you model salary bands and equity grants, ensuring you stay competitive without overspending.",
  },
  {
    question: "Is it scalable?",
    answer:
      "BambooHR starts to creak at 300 employees. Space HR is stress-tested for organizations up to 2,000+. Our database architecture handles complex hierarchies and high transaction volumes without lag.",
  },
];

const bamboohrBreadcrumbs = [
  { name: "Home", url: "https://spacehr.net/" },
  { name: "Compare", url: "https://spacehr.net/compare" },
  { name: "vs BambooHR", url: "https://spacehr.net/compare/bamboohr" },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const _bc_bamboohr = [{"name":"Home","url":"https://spacehr.net"},{"name":"Compare","url":"https://spacehr.net/compare"},{"name":"Space HR vs BambooHR","url":"https://spacehr.net/compare/bamboohr"}];

export default function CompareBambooHRPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={generateBreadcrumbSchema(_bc_bamboohr)} />
      <JsonLd data={organizationSchema} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 font-semibold text-sm">
            Built for Scale
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            The BambooHR Alternative for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Mid-Sized Tech
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            You've outgrown "friendly" HR software. You need global compliance, advanced compensation modeling, and robust APIs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="https://cad.spaceaiapp.com/login">
              <Button size="lg" className="rounded-full px-8 h-12 text-lg bg-blue-600 hover:bg-blue-700 text-white border-none shadow-xl">
                See the Tech Spec
              </Button>
            </Link>
            <Link href="/request-a-demo">
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-lg font-medium">
                Book Agile Demo
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
              Scale vs. Simplicity
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Why tech companies graduate to Space HR.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-[#0f172a]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/3">
                    Feature
                  </th>
                  <th className="p-6 text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase border-b dark:border-gray-700 w-1/3 bg-blue-50/50 dark:bg-blue-900/10">
                    Space HR
                  </th>
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/3">
                    BambooHR
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-purple-500" />
                      Global Teams
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300">
                    <strong>Native.</strong> Multi-currency, multi-compliance for distributed tech teams.
                  </td>
                  <td className="p-6 text-gray-500">
                    <strong>Limited.</strong> Very US/Canada centric.
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                       <Bot className="w-4 h-4 text-blue-500" />
                      Compensation
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300">
                    <strong>Advanced Modeling.</strong> Equity, bonus simulations, and market bands.
                  </td>
                  <td className="p-6 text-gray-500">
                    <strong>Basic.</strong> Simple salary tracking only.
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                       <Zap className="w-4 h-4 text-green-500" />
                       Integrations
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300">
                    <strong>Developer-First.</strong> Robust GraphQL API and webhooks.
                  </td>
                  <td className="p-6 text-gray-500">
                    <strong>Standard.</strong> Basic REST API with rate limits.
                  </td>
                </tr>
                 <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                       <ShieldCheck className="w-4 h-4 text-orange-500" />
                       Scalability
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300">
                    <strong>High.</strong> Tested for 2,000+ employees and complex org charts.
                  </td>
                  <td className="p-6 text-gray-500">
                    <strong>Low.</strong> Struggles with complexity &gt;300 employees.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sticky CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Switch?
          </h2>
          <p className="text-xl text-white/80 mb-6 max-w-2xl mx-auto">
            Free trial · No credit card · Free migration from BambooHR
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold bg-white text-blue-600 hover:bg-gray-100">
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

      {/* Problem/Pain Section — Copywriting Skill: "Show you understand their situation" */}
      <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Tech Companies Outgrow BambooHR
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              BambooHR is excellent for small businesses. But as you scale, the limitations become painful.
            </p>
          </div>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                "We hit a wall at 250 employees."
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                BambooHR was perfect when you were 50 people in one office. But now you have teams in London, Bangalore, and Toronto. Suddenly, you're juggling multiple BambooHR instances, manual currency conversions, and spreadsheets for compliance tracking. The system that once simplified your HR now creates more work.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                "Our API integrations keep breaking."
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Your engineering team built custom integrations with BambooHR's REST API. But the rate limits are restrictive, the documentation is sparse, and every time BambooHR updates their API, your integrations break. You're spending more time maintaining HR integrations than building product.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                "Compensation planning is a nightmare."
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                You're competing for talent with companies offering equity, bonuses, and complex compensation packages. BambooHR's basic salary tracking can't model multi-year vesting schedules, performance bonuses, or market-adjusted salary bands. Your finance team is running compensation planning in Excel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Switch Section — Copywriting Skill: "Connect feature → benefit → outcome" */}
      <section className="py-20 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Unlock Your Workforce Potential
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Move beyond basic tracking to true talent intelligence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
                <Sprout className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Grow with Confidence
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our database structure is designed for complexity. Multiple entities, currencies, and complex reporting lines are handled with ease.
              </p>
            </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Smart Suggestions
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Managers shouldn't guess. Our AI suggests raise amounts based on performance, budget, and market data.
              </p>
            </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Deep Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Everything talks to everything. Recruitment data flows to onboarding, which sets up payroll and performance goals automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison — Copywriting Skill: "Specific over vague" */}
      <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Feature-by-Feature Analysis
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A deeper look at what matters most for growing tech companies.
            </p>
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Global Payroll & Compliance
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                BambooHR supports payroll in the US and Canada, with limited partner integrations for other countries. If you have employees in the UK, India, or UAE, you need separate systems or third-party payroll providers. This creates data silos, compliance risks, and administrative overhead.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Space HR handles multi-currency payroll natively. Our compliance engine covers tax regulations in 40+ countries, automatically updating when laws change. One system, one source of truth, zero compliance gaps.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                API & Integrations
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                BambooHR offers a basic REST API with rate limits that frustrate engineering teams. Building custom integrations requires constant workarounds, and webhook support is limited. For tech companies that live in their tools, this is a dealbreaker.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Space HR provides a GraphQL API with generous rate limits, real-time webhooks, and pre-built integrations with Slack, Teams, GitHub, Jira, and 50+ other tools your team already uses. Our API documentation is developer-friendly, with SDKs in Python, Node.js, and Go.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Compensation Planning
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                BambooHR's compensation module tracks salaries and raises. That's it. For companies competing for tech talent, this is insufficient. You need to model equity grants, performance bonuses, sign-on incentives, and market-adjusted salary bands.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Space HR's Compensation Planning module lets you model complex packages across multiple currencies. Run scenarios for raises, promotions, and equity grants. Compare your bands against market data. Get AI-powered suggestions based on performance, budget, and retention risk.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Scalability & Performance
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                BambooHR works well for companies under 200 employees. Beyond that, users report slow load times, complex permission structures, and difficulty managing multi-entity organizations. The system wasn't built for complexity.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Space HR is stress-tested for organizations up to 2,000+ employees. Our database architecture handles complex hierarchies, multiple entities, and high transaction volumes without performance degradation. Whether you're 100 or 2,000 people, the experience is the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — Copywriting Skill: "Reduce perceived complexity" */}
      <section className="py-20 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How to Migrate from BambooHR
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our "Bamboo-to-Space" migration tool makes switching seamless. Here's how it works.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">1</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Export Your Data</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                One-click export from BambooHR. Our tool maps employee records, time-off balances, documents, and organizational structure automatically.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">2</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Review & Customize</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Our migration wizard shows you exactly what's being transferred. Fix any data issues, map custom fields, and configure compliance settings.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">3</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Go Live</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Most migrations complete over a weekend. Your employees log in Monday to a new system with all their data intact. Zero downtime.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">4</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Get Support</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Dedicated migration specialist for 30 days. Plus, our AI HR concierge answers employee questions during the transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof — Copywriting Skill: "Build credibility" */}
      <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Growing Tech Companies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Companies that switched from BambooHR to Space HR.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                "We outgrew BambooHR at 180 employees. Space HR gave us global payroll, better APIs, and the compensation tools we needed. Migration took one weekend."
              </p>
              <p className="font-bold text-gray-900 dark:text-white">Sarah Chen</p>
              <p className="text-sm text-gray-500">VP People, TechCorp (320 employees)</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                "The API alone was worth the switch. Our engineering team integrated Space HR with our existing tools in a week. BambooHR's API was a constant headache."
              </p>
              <p className="font-bold text-gray-900 dark:text-white">Marcus Rodriguez</p>
              <p className="text-sm text-gray-500">CTO, DataFlow (450 employees)</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                "BambooHR couldn't handle our UK and India offices. Space HR's global compliance engine meant we could unify HR in one system. Game changer."
              </p>
              <p className="font-bold text-gray-900 dark:text-white">Priya Patel</p>
              <p className="text-sm text-gray-500">Head of HR, GlobalTech (600 employees)</p>
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
            A granular look at the architectural differences between Space HR and BambooHR.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800/40 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Product Architecture Comparison</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              BambooHR is designed as a simple system of record for small businesses. However, its database architecture is not optimized for complex multi-entity structures, global payroll compliance, or advanced talent analytics, which mid-sized tech companies require.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">BambooHR Limitations</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  US-centric compliance model, basic REST API rate limits, and lack of advanced talent modeling (like weighted competency review summaries) for larger teams.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">Space HR Architectural Advantage</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Multi-entity organizational charts, localized compliance models for UK, India, Dubai, Canada, and Europe, and AI-driven 360-degree review summaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
               Comparison FAQs
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
               Why modern companies are choosing Space HR.
            </p>
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
              { href: "/compare/workday", label: "vs Workday" },
              { href: "/compare/gusto", label: "vs Gusto" },
              { href: "/compare/rippling", label: "vs Rippling" },
              { href: "/compare/adp", label: "vs ADP" },
              { href: "/compare/orangehrm", label: "vs OrangeHRM" },
              { href: "/compare", label: "All Comparisons" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 transition-all">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Upgrade?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Join the companies switching to Space HR for better insights and automation.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50 rounded-full px-8 h-14 text-lg font-bold"
              >
                Request Migration Demo
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
            { href: "/features/ai-payroll-auditor", label: "AI Payroll Auditor" },
            { href: "/features/ai-automation", label: "AI Workflow Automation" },
            { href: "/features/cost-prediction", label: "Cost Prediction" },
            { href: "/features/hr-templates", label: "HR Templates" },
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
