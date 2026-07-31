import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";
import {
  CheckCircle,
  XCircle,
  Zap,
  ShieldCheck,
  BarChart3,
  Bot,
  Laptop,
  Users,
  Target,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rippling vs Space HR: Why You Need AI Audits | Space HR",
  description:
    "Rippling automates speed, but Space HR ensures safety. Prevent payroll errors and compliance risks with our built-in AI Audit layer.",
  keywords: [
    "rippling alternative",
    "Space HR vs rippling",
    "payroll audit software",
    "compliance focused hr software",
    "safer payroll alternative",
  ],
  openGraph: {
    title: "Rippling vs Space HR: Why You Need AI Payroll Audits | Space HR",
    description: "Rippling automates speed, but Space HR ensures safety. Prevent payroll errors and compliance risks with Space HR's built-in AI Audit layer.",
    url: "https://spacehr.net/compare/rippling",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rippling vs Space HR: Why You Need AI Payroll Audits | Space HR",
    description: "Rippling automates speed, but Space HR ensures safety. Prevent payroll errors and compliance risks with Space HR's built-in AI Audit layer.",
  },
  alternates: { canonical: "https://spacehr.net/compare/rippling" },
};

const faqs = [
  {
    question: "Why should I choose Space HR over Rippling?",
    answer:
      "Rippling is optimized for speed and IT provisioning. Space HR is optimized for **Safety and Compliance**. We include a pre-processing AI Audit layer that catches payroll errors and tax anomalies before they happen.",
  },
  {
    question: "Is Space HR slower than Rippling?",
    answer:
      "No. We offer the same automated workflows, but with an added 'Safety Check' step. It takes milliseconds for our AI to scan your data, ensuring you don't trade accuracy for speed.",
  },
  {
    question: "Does Space HR handle global payroll?",
    answer:
      "Yes. Like Rippling, we support global teams. However, our Global Tax Engine validates local statutory requirements in real-time to prevent costly compliance fines.",
  },
  {
    question: "What is the 'Safety Gap'?",
    answer:
      "The Safety Gap is the risk exposure created by automating bad data. If you automate a payroll run with an error, you just make the mistake faster. Space HR closes this gap by validating data *before* automation runs.",
  },
  {
    question: "How does the pricing compare?",
    answer:
      "Space HR offers all-in-one pricing. Rippling charges separately for 'Clouds' (HR, IT, Finance) and individual apps. For a safety-conscious finance team, Space HR is often 30-40% more cost-effective.",
  },
];

const ripplingBreadcrumbs = [
  { name: "Home", url: "https://spacehr.net/" },
  { name: "Compare", url: "https://spacehr.net/compare" },
  { name: "vs Rippling", url: "https://spacehr.net/compare/rippling" },
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

export default function CompareRipplingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={organizationSchema} />

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 font-semibold text-sm">
            Speed vs Safety
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Rippling Automates Workflows. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
               We Automate Compliance.
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Don't just make mistakes faster. Choose Space HR for safer, audit-ready payroll that catches errors before you click send.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="https://cad.spaceaiapp.com/login">
              <Button size="lg" className="rounded-full px-8 h-12 text-lg bg-orange-600 hover:bg-orange-700 text-white border-none shadow-xl">
                Run a Risk Audit
              </Button>
            </Link>
            <Link href="/request-a-demo">
               <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-lg font-medium">
                See the Difference
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
              The Safety Comparison
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Why CFOs prefer Space HR over generic automation tools.
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
                    Rippling
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      Payroll Audits
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300">
                    <strong>Pre-Processing AI Layer.</strong> Scans for errors <em>before</em> execution.
                  </td>
                  <td className="p-6 text-gray-500">
                    <strong>Post-Mortem.</strong> You find errors after they happen.
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                       <Zap className="w-4 h-4 text-orange-500" />
                      Automation Logic
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300">
                    <strong>Safe-Mode.</strong> Automations pause if anomaly is detected.
                  </td>
                  <td className="p-6 text-gray-500">
                    <strong>Unchecked.</strong> If trigger is met, action happens blindly.
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                       <BarChart3 className="w-4 h-4 text-blue-500" />
                       Data Integrity
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300">
                    <strong>Continuous Validation.</strong> Constant partial-audit of database.
                  </td>
                  <td className="p-6 text-gray-500">
                    <strong>Input-Dependent.</strong> Garbage in, garbage out.
                  </td>
                </tr>
                 <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                       <Target className="w-4 h-4 text-purple-500" />
                       Focus
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300">
                    <strong>Financial Safety & Accuracy.</strong>
                  </td>
                  <td className="p-6 text-gray-500">
                    <strong>Device Management & Speed.</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sticky CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Switch?
          </h2>
          <p className="text-xl text-white/80 mb-6 max-w-2xl mx-auto">
            Free trial · No credit card · Free migration from Rippling
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold bg-white text-orange-600 hover:bg-gray-100">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why HR Leaders Prefer Space HR
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              When culture matters more than computer inventory.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Employee-Centric Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our interface is designed to engage employees, not just admins. Beautiful profiles, easy goal tracking, and mobile-first access.
              </p>
            </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Strategic Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Go beyond "doing reviews." Use our tools to actively develop skills, track career progression, and build succession plans.
              </p>
            </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-6">
                 <Bot className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                AI Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                 Ask questions in plain English: "Who is at risk of leaving?" or "Show me the top performers in Sales." Get instant answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Pain Section — Copywriting Skill: "Show you understand their situation" */}
      <section className="py-20 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Safety Matters More Than Speed
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Rippling is fast. But speed without safety is dangerous.
            </p>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800/40 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                "We automated a payroll error to 500 employees."
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Rippling's automation is powerful. But when you automate bad data, you just make mistakes faster. A CFO told us: "We set up an automated payroll run, and it pushed incorrect withholding to 500 employees. Rippling did exactly what we told it to do — the problem was we didn't catch the error before automation ran."
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/40 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                "The pricing model keeps changing."
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Rippling charges separately for HR, IT, and Finance "Clouds." Add device management, identity management, and app management — suddenly your bill doubles. What started as an HR solution becomes an expensive IT platform you didn't need.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/40 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                "Global compliance is an afterthought."
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Rippling's global capabilities are limited. Their tax engine doesn't validate local statutory requirements in real-time. For companies with teams in the UK, India, or UAE, this creates compliance risks that could result in costly fines.
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
              A deeper look at what matters most for finance and HR leaders.
            </p>
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Payroll Safety & Accuracy
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Rippling automates payroll processing efficiently, but their system doesn't validate data before execution. If there's an error in your inputs — wrong tax rate, incorrect bonus calculation, missing deduction — Rippling processes it automatically. You discover the mistake after employees receive incorrect payments.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Space HR's AI Payroll Auditor scans every payroll run before execution. It catches tax calculation errors, NACHA compliance issues, and data inconsistencies automatically. Our "Safe-Mode" automation pauses processing when anomalies are detected, giving you a chance to review before anything goes wrong.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Automation Philosophy
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Rippling's automation is "if trigger, then action." No validation, no safety checks. This works for IT provisioning — if someone joins, give them a laptop. But for payroll and compliance, blind automation is risky.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Space HR's automation includes a "Safety Check" step. Before any automated action runs, our AI validates the data. If something looks wrong — an unusual payment amount, a compliance risk, a data inconsistency — the automation pauses and alerts you. You get speed with safety.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Global Compliance
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Rippling supports global teams, but their tax engine doesn't validate local requirements in real-time. You're responsible for ensuring compliance in each country. For companies with teams in multiple jurisdictions, this creates significant risk.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Space HR's Global Tax Engine validates statutory requirements in real-time across 40+ countries. When tax laws change, our system updates automatically. You don't need to track regulatory changes in every jurisdiction — we do it for you.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Pricing Transparency
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Rippling's pricing model is complex. HR Cloud, IT Cloud, Finance Cloud — each with separate pricing. Add device management, identity management, and app management, and your costs escalate quickly. What starts as an HR solution becomes an expensive IT platform.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Space HR offers simple, transparent per-employee pricing. Everything is included: HR, payroll, AI features, integrations, and support. No hidden fees, no surprise charges, no "Cloud" upsells. What you see is what you pay.
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
              How to Migrate from Rippling
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our migration team handles the transition. You focus on your people.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 dark:text-orange-400 font-bold text-lg">1</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Audit Current Setup</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We review your Rippling configuration, identify custom workflows, and map your automation rules to Space HR's safer alternatives.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 dark:text-orange-400 font-bold text-lg">2</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Data Migration</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Our automated tools extract employee data, payroll history, and automation rules from Rippling. Everything maps cleanly to Space HR.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 dark:text-orange-400 font-bold text-lg">3</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Add Safety Checks</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We configure AI Payroll Auditor, Safe-Mode automation, and compliance validation. Your automations now include safety checks.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 dark:text-orange-400 font-bold text-lg">4</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Go Live</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Most migrations complete in 2-4 weeks. Your team gets training, dedicated support, and an AI concierge to answer questions.
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
              Trusted by Finance-Led Organizations
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Companies that switched from Rippling to Space HR.
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
                "Rippling's speed cost us $30K in one payroll cycle. Space HR's AI auditor caught the same type of error before it happened. Safety is worth more than speed."
              </p>
              <p className="font-bold text-gray-900 dark:text-white">David Park</p>
              <p className="text-sm text-gray-500">CFO, GrowthTech (380 employees)</p>
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
                "The predictable pricing was a game-changer. Rippling's 'Clouds' kept adding costs. Space HR's flat-rate pricing saved us 40% annually."
              </p>
              <p className="font-bold text-gray-900 dark:text-white">Jennifer Liu</p>
              <p className="text-sm text-gray-500">VP Finance, ScaleUp (520 employees)</p>
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
                "Global compliance was our biggest concern. Space HR's real-time tax validation across 40+ countries gave us confidence Rippling couldn't match."
              </p>
              <p className="font-bold text-gray-900 dark:text-white">Ahmed Hassan</p>
              <p className="text-sm text-gray-500">Head of HR, GlobalTech (650 employees)</p>
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
            A granular look at the architectural differences between Space HR and Rippling.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800/40 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Product Architecture Comparison</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Rippling is a powerful middleware platform for IT and HR, but its complex billing, variable pricing structures, and configuration overhead make it expensive and slow to adapt for non-US teams.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">Rippling Limitations</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  High configuration overhead and complex pricing models that penalize mid-market companies expanding outside the US.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">Space HR Architectural Advantage</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Predictable, flat-rate pricing with deep localized compliance support in GCC (Dubai), India, Canada, and Europe out of the box.
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
               Frequently Asked Questions
            </h2>
             <p className="text-gray-600 dark:text-gray-400">
               Comparing the finer details.
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
              { href: "/compare/adp", label: "vs ADP" },
              { href: "/compare/bamboohr", label: "vs BambooHR" },
              { href: "/compare/gusto", label: "vs Gusto" },
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
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prioritize Your People
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            See why companies focused on growth choose Space HR over IT-focused platforms.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 h-14 text-lg font-bold"
              >
                Request Custom Demo
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
            { href: "/features/ai-chatbots", label: "AI HR Chatbot" },
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
