import { Button } from "@/components/ui/Button";
import Link from "next/link";
import {
  JsonLd,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  DollarSign,
  Brain,
  Target,
  PieChart,
  Users,
  ShieldCheck,
  CheckCircle,
  Zap,
  Globe,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Space HR for CEOs — Labor Cost Analysis & Forecasting",
  description:
    "Real-time labor cost visibility for CEOs: YTD budget tracking, predictive workforce forecasting, and attrition risk analysis. AI-powered executive dashboards.",
  keywords: [
    "HR software for CEOs",
    "labor cost analysis software",
    "YTD budget tracking HR",
    "predictive workforce forecasting",
    "CEO HR dashboard",
    "executive workforce analytics",
    "labor cost optimization",
    "attrition prediction CEO",
    "HR ROI analytics",
    "workforce planning software",
  ],
  openGraph: {
    title: "Space HR for CEOs | Labor Cost Analysis & Forecasting",
    description:
      "Real-time labor cost visibility, predictive forecasting, and AI-powered executive dashboards for strategic decision-making.",
    url: "https://spacehr.net/solutions/ceo",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Space HR for CEOs | Labor Cost Analysis & Forecasting",
    description: "Real-time labor cost visibility, predictive forecasting, and AI-powered executive dashboards for strategic decision-making.",
  },
  alternates: {
    canonical: "https://spacehr.net/solutions/ceo",
  },
};

const faqs = [
  {
    question: "What executive dashboards does Space HR provide for CEOs?",
    answer:
      "Space HR provides real-time executive dashboards showing: total labor cost as % of revenue, YTD budget vs. actual spending, headcount trends and forecasts, attrition risk heat maps, department-level cost breakdowns, predictive year-end financial projections, and ROI metrics for HR initiatives. All data is available in real-time with drill-down capabilities.",
  },
  {
    question: "How does predictive workforce forecasting help CEOs?",
    answer:
      "AI-powered forecasting analyzes historical data, market trends, and internal patterns to predict: future labor costs (3-12 month projections), attrition risk by department and role, hiring needs based on growth plans, budget impact of compensation changes, and seasonal workforce fluctuations. This enables proactive decision-making rather than reactive management.",
  },
];

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "Solutions", url: "https://spacehr.net/solutions" },
  { name: "For CEOs", url: "https://spacehr.net/solutions/ceo" },
]);

export default function CEOSolutionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={generateFAQSchema(faqs)} />
      <JsonLd data={breadcrumb} />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-900/10 dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-6">
            <Target className="w-4 h-4" /> Built for Executive Leadership
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Space HR for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              CEOs & Executives
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Get real-time visibility into <strong>labor cost analysis</strong>,{" "}
            <strong>YTD budget tracking</strong>, and{" "}
            <strong>predictive workforce forecasting</strong>. Make data-driven
            decisions with AI-powered executive dashboards that turn HR data
            into strategic intelligence.
          </p>
          <Link href="/request-a-demo">
            <Button size="lg" className="rounded-full px-8 font-semibold">
              See Executive Dashboard <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* KEY CAPABILITIES */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Executive Intelligence at Your Fingertips
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: "Labor Cost Analysis",
                description:
                  "Real-time breakdown of total labor costs by department, role, and location. Track labor cost as a percentage of revenue with trend analysis and benchmarking.",
              },
              {
                icon: <PieChart className="w-6 h-6" />,
                title: "YTD Budget Tracking",
                description:
                  "Live year-to-date budget vs. actual spending dashboards. Drill down into department-level variances and identify cost overruns before they impact the bottom line.",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Predictive Forecasting",
                description:
                  "AI-powered 3-12 month labor cost projections. Forecast the financial impact of hiring plans, compensation changes, and market conditions on your workforce budget.",
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Attrition Risk Intelligence",
                description:
                  "AI identifies employees at risk of leaving before they resign. See attrition risk heat maps by department, tenure, and role to enable proactive retention strategies.",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Workforce Planning",
                description:
                  "Model different growth scenarios and see their impact on headcount, costs, and organizational structure. Plan for expansion with data-driven confidence.",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Global Workforce Overview",
                description:
                  "Unified view of your entire global workforce across regions. Compare costs, performance, and compliance status across US, Singapore, and Dubai operations.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE FEATURES */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Explore Related Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/features/cost-prediction"
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary">
                Predictive Cost Analytics →
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                AI-driven labor cost forecasting and budget trend analysis.
              </p>
            </Link>
            <Link
              href="/features/attrition-prediction"
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary">
                Attrition Prediction →
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                AI-powered retention insights and flight risk analysis.
              </p>
            </Link>
            <Link
              href="/features/finance"
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary">
                Financial Analytics →
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Comprehensive financial dashboards and reporting.
              </p>
            </Link>
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
            See Your Workforce Data Like Never Before
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Schedule a personalized demo of the CEO executive dashboard.
          </p>
          <Link href="/request-a-demo">
            <Button
              size="lg"
              className="rounded-full px-8 font-semibold bg-white text-indigo-600 hover:bg-gray-100"
            >
              Request Executive Demo <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
