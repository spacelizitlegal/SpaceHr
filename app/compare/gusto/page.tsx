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
  Zap,
  ShieldCheck,
  BarChart3,
  Bot,
  Brain,
  Users,
  Target,
  TrendingUp,
  ArrowRight,
  DollarSign,
  Globe,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gusto vs Space HR: AI Predictive Forecasting Comparison | Space HR",
  description:
    "Compare Gusto vs Space HR for AI predictive workforce analytics. While Gusto handles basic payroll, Space HR delivers AI-powered cost forecasting, anomaly detection, and predictive workforce analytics for growing enterprises.",
  keywords: [
    "gusto alternative",
    "gusto vs space hr",
    "AI predictive forecasting HR",
    "gusto competitor",
    "better than gusto",
    "payroll software comparison",
    "AI payroll software",
    "predictive workforce analytics",
    "gusto alternative for enterprises",
  ],
  openGraph: {
    title: "Gusto vs Space HR: Why AI Predictive Forecasting Wins",
    description:
      "Gusto handles payroll basics. Space HR adds AI predictive forecasting, anomaly detection, and enterprise-grade workforce analytics.",
    url: "https://spacehr.net/compare/gusto",
  },
  alternates: {
    canonical: "https://spacehr.net/compare/gusto",
  },
};

const faqs = [
  {
    question: "Why should I choose Space HR over Gusto?",
    answer:
      "Gusto is excellent for small business payroll basics. Space HR is built for growing companies that need AI-powered predictive workforce analytics, automated payroll anomaly detection, cost forecasting, and enterprise-grade compliance. If you've outgrown basic payroll and need strategic HR intelligence, Space HR is the upgrade.",
  },
  {
    question: "Does Space HR offer the same payroll features as Gusto?",
    answer:
      "Yes, and more. Space HR includes everything Gusto offers — automated payroll processing, tax filing, direct deposit, and benefits administration. But we add an AI Audit layer that catches errors before they happen, predictive cost forecasting, multi-state compliance automation, and NACHA-compliant ACH generation with built-in anomaly detection.",
  },
  {
    question:
      "How does Space HR's AI predictive forecasting compare to Gusto's reporting?",
    answer:
      "Gusto provides basic payroll reports and analytics. Space HR's AI goes further with predictive workforce analytics — forecasting future labor costs, predicting attrition risk, identifying budget trends, and providing year-end financial projections. Our AI doesn't just report what happened; it predicts what will happen.",
  },
  {
    question: "Is Space HR more expensive than Gusto?",
    answer:
      "Space HR offers competitive pricing with significantly more value. While Gusto charges per-employee fees for basic payroll, Space HR includes AI auditing, predictive analytics, 360° appraisals, and an AI Concierge chatbot in every plan. The ROI from prevented payroll errors and strategic insights typically exceeds the cost difference within the first quarter.",
  },
  {
    question: "Can I migrate from Gusto to Space HR easily?",
    answer:
      "Yes. Our dedicated migration team handles the entire transition. We import your employee data, payroll history, tax configurations, and benefits setup. Most migrations are completed within 2-4 weeks with zero disruption to your payroll schedule.",
  },
];

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "Compare", url: "https://spacehr.net/compare" },
  { name: "Gusto vs Space HR", url: "https://spacehr.net/compare/gusto" },
]);

const comparisonData = [
  { feature: "Automated Payroll Processing", gusto: true, spaceHR: true },
  { feature: "Tax Filing & Compliance", gusto: true, spaceHR: true },
  { feature: "Direct Deposit (ACH)", gusto: true, spaceHR: true },
  { feature: "Benefits Administration", gusto: true, spaceHR: true },
  { feature: "AI Payroll Anomaly Detection", gusto: false, spaceHR: true },
  { feature: "Predictive Workforce Analytics", gusto: false, spaceHR: true },
  { feature: "AI Cost Forecasting", gusto: false, spaceHR: true },
  { feature: "360° Performance Appraisals", gusto: false, spaceHR: true },
  { feature: "AI HR Concierge Chatbot", gusto: false, spaceHR: true },
  { feature: "Attrition Prediction", gusto: false, spaceHR: true },
  { feature: "NACHA-Compliant ACH with AI Audit", gusto: false, spaceHR: true },
  {
    feature: "Multi-State Tax Compliance Engine",
    gusto: "Basic",
    spaceHR: true,
  },
  { feature: "Goal & OKR Management", gusto: false, spaceHR: true },
  { feature: "GPS Attendance Tracking", gusto: false, spaceHR: true },
  { feature: "Financial Analytics Dashboard", gusto: "Basic", spaceHR: true },
];

export default function GustoComparisonPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={generateFAQSchema(faqs)} />
      <JsonLd data={breadcrumb} />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/10 dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
            <BarChart3 className="w-4 h-4" /> Honest Comparison
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Gusto vs Space HR:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              AI Predictive Forecasting
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Gusto is great for small business payroll basics. But when you need{" "}
            <strong>AI predictive workforce analytics</strong>,{" "}
            <strong>automated payroll anomaly detection</strong>, and{" "}
            <strong>enterprise-grade cost forecasting</strong>, Space HR is the
            intelligent upgrade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button size="lg" className="rounded-full px-8 font-semibold">
                See Space HR in Action <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Feature-by-Feature Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                  <th className="text-left py-4 px-4 text-gray-900 dark:text-white font-bold">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 text-gray-500 font-bold">
                    Gusto
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
                      {row.gusto === true ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      ) : row.gusto === false ? (
                        <XCircle className="w-5 h-5 text-red-400 mx-auto" />
                      ) : (
                        <span className="text-yellow-500 text-sm font-medium">
                          {row.gusto}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.spaceHR === true ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
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

      {/* KEY DIFFERENTIATORS */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Why Growing Companies Switch from Gusto to Space HR
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI Predictive Forecasting",
                description:
                  "Gusto shows you what happened. Space HR predicts what will happen — forecasting labor costs, attrition risk, and budget trends with AI-driven accuracy.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Automated Payroll Auditing",
                description:
                  "Every payroll run is scanned by AI for anomalies — duplicate payments, tax miscalculations, overtime errors — before processing. Gusto doesn't offer this.",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Enterprise-Grade Analytics",
                description:
                  "From 360° performance appraisals to financial analytics dashboards, Space HR provides the strategic intelligence that Gusto's basic reporting can't match.",
              },
            ].map((diff, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {diff.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {diff.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {diff.description}
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
      <section className="py-24 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Upgrade from Gusto?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            See how Space HR&apos;s AI predictive forecasting and automated
            payroll auditing can transform your HR operations.
          </p>
          <Link href="/request-a-demo">
            <Button
              size="lg"
              className="rounded-full px-8 font-semibold bg-white text-primary hover:bg-gray-100"
            >
              Request a Demo <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
