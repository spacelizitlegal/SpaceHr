import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  JsonLd,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/components/JsonLd";
import {
  CheckCircle,
  XCircle,
  ShieldCheck,
  BarChart3,
  Brain,
  ArrowRight,
  Zap,
  DollarSign,
  Clock,
  Users,
  Target,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workday Alternative for Mid-Market Enterprises | Space HR",
  description:
    "Workday alternative: enterprise AI HRMS at mid-market pricing. Predictive analytics, AI payroll auditing, and 360° appraisals without the complexity.",
  keywords: [
    "workday alternative",
    "workday alternative for mid-market",
    "workday competitor",
    "Space HR vs workday",
    "enterprise HRMS alternative",
    "mid-market HR software",
    "AI HR platform",
    "workday replacement",
    "affordable enterprise HR software",
    "workday alternative with AI",
  ],
  openGraph: {
    title: "Workday Alternative for Mid-Market Enterprises | Space HR",
    description:
      "Enterprise-grade AI HRMS without the Workday complexity. Predictive analytics, AI payroll auditing, and 360° appraisals at mid-market pricing.",
    url: "https://spacehr.net/compare/workday",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workday Alternative for Mid-Market Enterprises | Space HR",
    description: "Enterprise-grade AI HRMS without the Workday complexity. Predictive analytics, AI payroll auditing, and 360° appraisals at mid-market pricing.",
  },
  alternates: {
    canonical: "https://spacehr.net/compare/workday",
  },
};

const faqs = [
  {
    question:
      "Why is Space HR a good Workday alternative for mid-market enterprises?",
    answer:
      "Workday is designed for large enterprises with 5,000+ employees and requires significant implementation investment ($500K+). Space HR delivers comparable AI-powered capabilities — predictive analytics, automated payroll auditing, 360° appraisals — at a fraction of the cost, with implementation in weeks instead of months. It's the enterprise-grade intelligence without the enterprise-grade complexity.",
  },
  {
    question: "How does Space HR's AI compare to Workday's analytics?",
    answer:
      "Workday offers strong reporting and analytics, but Space HR's AI goes further with real-time payroll anomaly detection, predictive attrition modeling, automated cost forecasting, and AI-generated performance summaries. Our AI is proactive — it identifies issues and opportunities before you ask, rather than just reporting on historical data.",
  },
  {
    question: "What's the implementation timeline compared to Workday?",
    answer:
      "Workday implementations typically take 6-18 months and require dedicated consulting teams. Space HR can be fully deployed in 2-6 weeks, including data migration, configuration, and training. Our guided setup wizard and AI-powered onboarding make the transition seamless.",
  },
  {
    question: "Does Space HR scale for growing mid-market companies?",
    answer:
      "Absolutely. Space HR is built on cloud-native architecture that scales from 50 to 10,000+ employees. As your company grows, you get access to more advanced AI features, multi-entity management, and global compliance capabilities — without needing to re-platform.",
  },
  {
    question: "Can Space HR handle global payroll like Workday?",
    answer:
      "Yes. Space HR supports global teams with multi-currency payroll, country-specific tax compliance, and localized HR policies. With offices in the US, Singapore, and Dubai, we understand the complexities of global HR operations firsthand.",
  },
];

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "Compare", url: "https://spacehr.net/compare" },
  { name: "Workday Alternative", url: "https://spacehr.net/compare/workday" },
]);

const comparisonData = [
  { feature: "AI Payroll Anomaly Detection", workday: "Add-on", "Space HR": true },
  { feature: "Predictive Workforce Analytics", workday: true, "Space HR": true },
  { feature: "360° Performance Appraisals", workday: true, "Space HR": true },
  {
    feature: "AI-Generated Performance Summaries",
    workday: false,
    "Space HR": true,
  },
  { feature: "AI HR Concierge Chatbot", workday: "Basic", "Space HR": true },
  { feature: "Automated Cost Forecasting", workday: true, "Space HR": true },
  { feature: "NACHA-Compliant ACH Generation", workday: true, "Space HR": true },
  { feature: "Multi-State Tax Compliance", workday: true, "Space HR": true },
  {
    feature: "Implementation Time",
    workday: "6-18 months",
    "Space HR": "2-6 weeks",
  },
  { feature: "Mid-Market Pricing", workday: false, "Space HR": true },
  { feature: "No Consulting Fees Required", workday: false, "Space HR": true },
  { feature: "Self-Service Configuration", workday: "Limited", "Space HR": true },
  { feature: "Goal & OKR Management", workday: true, "Space HR": true },
  { feature: "Attrition Prediction AI", workday: "Add-on", "Space HR": true },
  { feature: "GPS Geofenced Attendance", workday: false, "Space HR": true },
];

export default function WorkdayComparisonPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={generateFAQSchema(faqs)} />
      <JsonLd data={breadcrumb} />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-900/10 dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-6">
            <Target className="w-4 h-4" /> Mid-Market Alternative
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Workday Alternative for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              Mid-Market Enterprises
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Get enterprise-grade <strong>AI-powered HRMS</strong> without the
            Workday price tag and 18-month implementation. Space HR delivers{" "}
            <strong>predictive workforce analytics</strong>,{" "}
            <strong>AI payroll auditing</strong>, and{" "}
            <strong>360° appraisals</strong> — deployed in weeks, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button size="lg" className="rounded-full px-8 font-semibold">
                See the Difference <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Workday vs Space HR: Feature Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                  <th className="text-left py-4 px-4 text-gray-900 dark:text-white font-bold">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 text-gray-500 font-bold">
                    Workday
                  </th>
                  <th className="text-center py-4 px-4 text-primary font-bold">
                    Space HR
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 dark:border-gray-800"
                  >
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.workday === true ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      ) : row.workday === false ? (
                        <XCircle className="w-5 h-5 text-red-400 mx-auto" />
                      ) : (
                        <span className="text-yellow-500 text-sm font-medium">
                          {row.workday}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row["Space HR"] === true ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      ) : typeof row["Space HR"] === "string" ? (
                        <span className="text-green-600 text-sm font-bold">
                          {row["Space HR"]}
                        </span>
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sticky CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Switch?
          </h2>
          <p className="text-xl text-white/80 mb-6 max-w-2xl mx-auto">
            Free trial · No credit card · Free migration from Workday
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold bg-white text-indigo-600 hover:bg-gray-100">
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

      {/* KEY ADVANTAGES */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Why Mid-Market Companies Choose Space HR Over Workday
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Deploy in Weeks, Not Months",
                description:
                  "Workday requires 6-18 months of implementation with expensive consulting. Space HR deploys in 2-6 weeks with guided self-service setup and AI-powered onboarding.",
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Mid-Market Pricing, Enterprise Features",
                description:
                  "Get AI payroll auditing, predictive analytics, and 360° appraisals without the $500K+ implementation cost and six-figure annual licensing fees.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "AI-First Architecture",
                description:
                  "While Workday bolts AI onto legacy systems, Space HR is built AI-first. Every feature — from payroll to performance — is powered by intelligent automation.",
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-14 h-14 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 mb-6">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Pain Section — Copywriting Skill: "Show you understand their situation" */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Mid-Market Companies Outgrow Workday
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Workday is the enterprise standard. But for mid-market companies, it's often too much.
            </p>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800/40 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                "The implementation budget was bigger than our annual HR spend."
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Workday implementations start at $500K and often exceed $1M for mid-market companies. You need certified Workday consultants for configuration, custom workflows require specialized developers, and annual licensing fees rival your entire HR department's budget. For a 500-person company, this doesn't make financial sense.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/40 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                "We waited 14 months to go live."
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Workday implementations take 6-18 months. During that time, you're paying for two systems, maintaining parallel processes, and dealing with employee frustration. By the time Workday goes live, your team has already spent a year adapting to workarounds.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/40 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                "Every change requires a consultant."
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Want to add a new workflow? Hire a Workday consultant. Need to modify a report? Hire a Workday consultant. Your HR team can't make changes without IT involvement. The system that was supposed to give you flexibility becomes a bottleneck.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison — Copywriting Skill: "Specific over vague" */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Feature-by-Feature Analysis
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A deeper look at what matters most for mid-market enterprises.
            </p>
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                AI-Powered Intelligence
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Workday offers strong reporting and analytics, but their AI capabilities are limited to add-on modules that require additional licensing. Their predictive analytics focus on enterprise-scale workforce planning, not the day-to-day operational intelligence mid-market companies need.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Space HR is built AI-first. Every feature — from payroll to performance — includes intelligent automation. Our AI Payroll Auditor scans every run for errors before they happen. Attrition Prediction identifies at-risk employees months in advance. Cost Forecasting predicts 12 months of workforce spend with 95% accuracy. No add-ons, no extra fees, no consultants needed.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Implementation & Time-to-Value
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Workday implementations are projects unto themselves. You'll need a dedicated project manager, executive sponsor, and change management team. The typical mid-market implementation takes 12-18 months and requires significant internal resources.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Space HR deploys in 2-6 weeks. Our guided setup wizard walks you through configuration. AI-powered onboarding trains your team automatically. Most customers go live in under a month with minimal disruption to daily operations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Total Cost of Ownership
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Workday's pricing model includes implementation fees ($500K-$2M), annual licensing (varies by modules), consulting fees for changes, and internal IT costs for maintenance. For a 500-person company, total annual cost often exceeds $500K.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Space HR offers transparent per-employee pricing with no implementation fees, no consulting fees, and no hidden costs. Everything is included: AI features, integrations, support, and updates. Most mid-market companies pay 70-80% less than Workday for comparable functionality.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Self-Service & Flexibility
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Workday's configuration model requires certified developers for most changes. Your HR team can't modify workflows, add fields, or create reports without IT involvement. This creates bottlenecks and slows down operations.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Space HR puts control in your HR team's hands. Drag-and-drop workflow builder, customizable dashboards, self-service reporting, and configurable approval chains. No IT required. When your needs change, you adapt in minutes, not months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — Copywriting Skill: "Reduce perceived complexity" */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How to Migrate from Workday
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our migration team handles the heavy lifting. You focus on your people.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">1</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Discovery Call</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We map your Workday configuration, identify custom workflows, and plan the migration strategy. No consultants needed.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">2</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Data Migration</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Our automated tools extract data from Workday and map it to Space HR. Employee records, workflows, and historical data transfer seamlessly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">3</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Configure & Test</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We configure your workflows, integrations, and compliance settings. You test everything with a sandbox environment before going live.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">4</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Go Live</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Most migrations complete in 4-6 weeks. Your team gets training, dedicated support, and an AI concierge to answer questions during transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof — Copywriting Skill: "Build credibility" */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Mid-Market Enterprises
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Companies that switched from Workday to Space HR.
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
                "We were 8 months into a Workday implementation when we found Space HR. We switched, completed migration in 5 weeks, and saved $800K. The AI features alone are worth it."
              </p>
              <p className="font-bold text-gray-900 dark:text-white">James Morrison</p>
              <p className="text-sm text-gray-500">CFO, ScaleUp Inc (750 employees)</p>
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
                "Our HR team was frustrated with Workday's complexity. Space HR's self-service tools let them make changes without calling IT. Productivity doubled."
              </p>
              <p className="font-bold text-gray-900 dark:text-white">Linda Chen</p>
              <p className="text-sm text-gray-500">VP HR, TechGrowth (420 employees)</p>
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
                "The AI payroll auditor caught an error that would have cost us $45K. Workday's analytics would have reported it after the fact. Space HR prevented it."
              </p>
              <p className="font-bold text-gray-900 dark:text-white">Robert Kim</p>
              <p className="text-sm text-gray-500">Controller, FinTech Pro (280 employees)</p>
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
            A granular look at the architectural differences between Space HR and Workday.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800/40 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Product Architecture Comparison</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Workday is the enterprise standard for Fortune 500 companies, but its high cost, complex customization requirements, and slow implementation cycles make it poorly suited for agile mid-market teams.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">Workday Limitations</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Extremely high licensing and implementation costs. Requires certified Workday developers for workflow edits, and lacks proactive pre-payroll anomaly detection.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">Space HR Architectural Advantage</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Mid-market pricing with enterprise-grade security. Deploys in weeks, offers self-service configuration, and features built-in pre-payroll AI auditing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 bg-gray-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">More Comparisons</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/compare/sap-successfactors", label: "vs SAP SuccessFactors" },
              { href: "/compare/adp", label: "vs ADP" },
              { href: "/compare/bamboohr", label: "vs BambooHR" },
              { href: "/compare/rippling", label: "vs Rippling" },
              { href: "/compare/servicenow", label: "vs ServiceNow" },
              { href: "/compare", label: "All Comparisons" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 transition-all">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Enterprise Intelligence, Mid-Market Simplicity
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            See why growing companies choose Space HR over Workday for
            AI-powered HR operations.
          </p>
          <Link href="/request-a-demo">
            <Button
              size="lg"
              className="rounded-full px-8 font-semibold bg-white text-indigo-600 hover:bg-gray-100"
            >
              Request a Demo <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Related Features */}
      <div className="mt-12 border-t border-white/5 pt-8">
        <h2 className="text-2xl font-bold text-white mb-4">Related Features</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { href: "/features/ai-payroll-auditor", label: "AI Payroll Auditor" },
            { href: "/features/360-performance-appraisals", label: "360° Performance Appraisals" },
            { href: "/features/attrition-prediction", label: "Attrition Prediction" },
            { href: "/features/cost-prediction", label: "Cost Prediction" },
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
