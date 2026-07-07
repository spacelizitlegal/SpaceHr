import Link from "next/link";
import { Metadata } from "next";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Space HR vs Competitors — 13 Detailed Comparisons | Space HR",
  description:
    "See how Space HR stacks up against BambooHR, Workday, ServiceNow, Leena AI, Moveworks, SAP, ADP, and more. AI-powered HR built for modern, growing teams.",
  twitter: {
    card: "summary_large_image",
    title: "Space HR vs Competitors — 13 Detailed Comparisons | Space HR",
    description: "See how Space HR stacks up against BambooHR, Workday, ServiceNow, Leena AI, Moveworks, SAP, ADP, and more. AI-powered HR built for modern, growing teams.",
  },
  alternates: { canonical: "https://spacehr.net/compare" },
  openGraph: {
    title: "Space HR vs Competitors — 13 Detailed Comparisons | Space HR",
    description:
      "See how Space HR stacks up against BambooHR, Workday, ServiceNow, Leena AI, Moveworks, SAP, ADP, and more. AI-powered HR built for modern, growing teams.",
    url: "https://spacehr.net/compare",
    siteName: "Space HR",
    type: "website",
    images: [{ url: "/desktop-design-showcase.webp", width: 1200, height: 630, alt: "Space HR vs Competitors — HR Software Comparisons" }],
  },
};

const comparisons = [
  {
    href: "/compare/bamboohr",
    label: "Space HR vs BambooHR",
    desc: "BambooHR is built for small business simplicity. Space HR adds global compliance, advanced compensation modeling, and robust APIs for mid-sized tech teams.",
    badge: "Most Popular",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    border: "border-blue-300 dark:border-blue-700",
  },
  {
    href: "/compare/workday",
    label: "Space HR vs Workday",
    desc: "Workday is enterprise-only and takes 18 months to implement. Space HR delivers enterprise-grade AI features with a 2-week deployment and transparent pricing.",
    badge: "Enterprise",
    badgeColor: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
    border: "border-indigo-300 dark:border-indigo-700",
  },
  {
    href: "/compare/gusto",
    label: "Space HR vs Gusto",
    desc: "Gusto excels at US payroll for startups. Space HR adds multi-country compliance, performance management, and AI-driven workforce analytics for global teams.",
    badge: "Payroll Focus",
    badgeColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    border: "border-green-300 dark:border-green-700",
  },
  {
    href: "/compare/rippling",
    label: "Space HR vs Rippling",
    desc: "Rippling bundles HR + IT. Space HR focuses on deep HR intelligence — predictive analytics, AI chatbots, and payroll anomaly detection that Rippling cannot match.",
    badge: "AI-First",
    badgeColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
    border: "border-violet-300 dark:border-violet-700",
  },
  {
    href: "/compare/orangehrm",
    label: "Space HR vs OrangeHRM",
    desc: "OrangeHRM is open-source with high IT overhead. Space HR is a fully managed SaaS platform with built-in AI, reducing total cost of ownership by up to 60%.",
    badge: "Open Source Alt",
    badgeColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    border: "border-orange-300 dark:border-orange-700",
  },
];

const aiComparisons = [
  {
    href: "/compare/servicenow",
    label: "Space HR vs ServiceNow",
    desc: "ServiceNow HR Service Delivery requires months of IT configuration. Space HR deploys an AI HR concierge in 72 hours with payroll anomaly detection included.",
    badge: "Enterprise Alt",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    border: "border-blue-300 dark:border-blue-700",
  },
  {
    href: "/compare/leena-ai",
    label: "Space HR vs Leena AI",
    desc: "Leena AI is a standalone HR chatbot. Space HR adds payroll anomaly detection, attrition prediction, leave management, and a full HRMS behind the same conversational interface.",
    badge: "Full Platform",
    badgeColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
    border: "border-violet-300 dark:border-violet-700",
  },
  {
    href: "/compare/moveworks",
    label: "Space HR vs Moveworks",
    desc: "Moveworks automates IT helpdesk. Space HR is purpose-built for HR — payroll safety, attrition prediction, and a specialist HR AI that Moveworks wasn't designed to provide.",
    badge: "HR-Specialist",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    border: "border-emerald-300 dark:border-emerald-700",
  },
  {
    href: "/compare/microsoft-copilot",
    label: "Space HR vs Microsoft Copilot",
    desc: "Copilot is general productivity AI. Space HR is specialist HR AI — with payroll anomaly detection, attrition prediction, and an HR concierge that acts on your HR systems.",
    badge: "AI Specialist",
    badgeColor: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",
    border: "border-sky-300 dark:border-sky-700",
  },
  {
    href: "/compare/darwinbox",
    label: "Space HR vs Darwinbox",
    desc: "Darwinbox is a capable APAC HRMS. Space HR adds AI-native attrition prediction, pre-payroll anomaly scanning, and a true conversational HR concierge Darwinbox lacks.",
    badge: "APAC Market",
    badgeColor: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
    border: "border-rose-300 dark:border-rose-700",
  },
  {
    href: "/compare/sap-successfactors",
    label: "Space HR vs SAP SuccessFactors",
    desc: "SAP SuccessFactors takes 18 months to implement and costs millions. Space HR delivers the same AI HR outcomes in 72 hours at a fraction of the cost.",
    badge: "SMB Alt",
    badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    border: "border-amber-300 dark:border-amber-700",
  },
  {
    href: "/compare/adp",
    label: "Space HR vs ADP Workforce Now",
    desc: "ADP runs payroll as submitted. Space HR's AI anomaly detection catches ghost employees, salary spikes, and tax errors before ADP processes them.",
    badge: "Payroll Safety",
    badgeColor: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    border: "border-red-300 dark:border-red-700",
  },
  {
    href: "/compare/freshteam",
    label: "Space HR vs Freshteam",
    desc: "Freshteam excels at recruitment and onboarding. Space HR takes over post-hire — with AI payroll safety, attrition prediction, and 24/7 employee self-service.",
    badge: "Post-Hire",
    badgeColor: "bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-400",
    border: "border-lime-300 dark:border-lime-700",
  },
];

const wins = [
  "Native AI payroll anomaly detection",
  "2-week deployment (not 18 months)",
  "Built-in attrition prediction model",
  "Multi-country compliance in one platform",
  "Transparent, mid-market pricing",
  "AI HR chatbot included — no add-on fee",
];

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net/" },
  { name: "Compare", url: "https://spacehr.net/compare" },
];

export default function ComparePage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="pt-24 pb-0 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <li><Link href="/" className="hover:text-gray-700 dark:hover:text-gray-200">Home</Link></li>
          <li><span className="mx-1">/</span></li>
          <li className="text-gray-900 dark:text-white font-medium">Compare</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="pt-10 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-bold mb-8 uppercase tracking-wide border border-blue-200 dark:border-blue-800">
            Head-to-Head Comparisons
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            How Space HR Compares<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              to Every Alternative
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Switching from BambooHR, Workday, Gusto, Rippling, or OrangeHRM? See exactly why 500+ HR leaders chose Space HR for their AI-powered HRMS.
          </p>
        </div>
      </section>

      {/* Why Space HR Wins */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why HR Teams Choose Space HR</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {wins.map((w) => (
              <div key={w} className="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-4">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-white text-sm font-medium">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons Grid — Traditional HRMS */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">Traditional HRMS Platforms</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-10">Classic HR systems vs AI-native people operations.</p>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {comparisons.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className={`group bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 ${c.border} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {c.label}
                  </h3>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ml-3 ${c.badgeColor}`}>
                    {c.badge}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">{c.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Full comparison <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons Grid — AI & Enterprise */}
      <section className="py-16 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">AI &amp; Enterprise HR Platforms</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-10">ServiceNow, SAP, Microsoft Copilot, and specialist AI tools vs Space HR.</p>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {aiComparisons.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className={`group bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 ${c.border} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {c.label}
                  </h3>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ml-3 ${c.badgeColor}`}>
                    {c.badge}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">{c.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Full comparison <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to See the Difference?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Get a personalized demo tailored to your current HR stack and team size.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/request-a-demo" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl transition-all hover:scale-105">
              Book a Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/solutions" className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-bold py-4 px-8 rounded-full text-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all">
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}