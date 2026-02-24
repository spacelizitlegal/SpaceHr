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
    "Looking for a Workday alternative? Space HR delivers enterprise-grade AI-powered HRMS at mid-market pricing. Get predictive workforce analytics, AI payroll auditing, and 360° appraisals without the Workday complexity and cost.",
  keywords: [
    "workday alternative",
    "workday alternative for mid-market",
    "workday competitor",
    "space hr vs workday",
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
  { feature: "AI Payroll Anomaly Detection", workday: "Add-on", spaceHR: true },
  { feature: "Predictive Workforce Analytics", workday: true, spaceHR: true },
  { feature: "360° Performance Appraisals", workday: true, spaceHR: true },
  {
    feature: "AI-Generated Performance Summaries",
    workday: false,
    spaceHR: true,
  },
  { feature: "AI HR Concierge Chatbot", workday: "Basic", spaceHR: true },
  { feature: "Automated Cost Forecasting", workday: true, spaceHR: true },
  { feature: "NACHA-Compliant ACH Generation", workday: true, spaceHR: true },
  { feature: "Multi-State Tax Compliance", workday: true, spaceHR: true },
  {
    feature: "Implementation Time",
    workday: "6-18 months",
    spaceHR: "2-6 weeks",
  },
  { feature: "Mid-Market Pricing", workday: false, spaceHR: true },
  { feature: "No Consulting Fees Required", workday: false, spaceHR: true },
  { feature: "Self-Service Configuration", workday: "Limited", spaceHR: true },
  { feature: "Goal & OKR Management", workday: true, spaceHR: true },
  { feature: "Attrition Prediction AI", workday: "Add-on", spaceHR: true },
  { feature: "GPS Geofenced Attendance", workday: false, spaceHR: true },
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
                      {row.spaceHR === true ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      ) : typeof row.spaceHR === "string" ? (
                        <span className="text-green-600 text-sm font-bold">
                          {row.spaceHR}
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

      {/* FAQ */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
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
    </div>
  );
}
