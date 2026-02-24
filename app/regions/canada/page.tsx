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
  ArrowRight,
  Globe,
  ShieldCheck,
  BarChart3,
  DollarSign,
  Brain,
  Building2,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canada Payroll & HR Compliance Software | Space HR",
  description:
    "Space HR helps Canadian teams automate payroll, provincial tax withholding, CRA-ready workflows, and AI-powered workforce analytics.",
  keywords: [
    "Canada payroll software",
    "Canadian HR software",
    "CRA payroll compliance",
    "provincial payroll tax automation",
    "Canada HRMS",
    "Canadian workforce analytics",
    "payroll compliance Canada",
    "ROE payroll software",
    "CPP EI payroll calculation",
  ],
  openGraph: {
    title: "Canada Payroll & HR Compliance Software | Space HR",
    description:
      "Automate Canadian payroll, provincial tax compliance, and workforce operations with Space HR.",
    url: "https://spacehr.net/regions/canada",
  },
  alternates: {
    canonical: "https://spacehr.net/regions/canada",
  },
};

const faqs = [
  {
    question: "Does Space HR support Canadian payroll compliance?",
    answer:
      "Yes. Space HR supports Canadian payroll workflows including federal and provincial calculations, payroll controls, and compliance-ready records for internal and external audits.",
  },
  {
    question: "Can Space HR manage province-level payroll differences?",
    answer:
      "Yes. Space HR supports province-level configurations so payroll teams can manage regional rule differences and reporting workflows from one platform.",
  },
  {
    question: "Can Space HR help with year-end payroll documents in Canada?",
    answer:
      "Yes. Space HR provides structured payroll data and document workflows to simplify year-end processing and employee tax document distribution.",
  },
];

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "Regions", url: "https://spacehr.net/regions" },
  { name: "Canada", url: "https://spacehr.net/regions/canada" },
]);

export default function CanadaPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={generateFAQSchema(faqs)} />
      <JsonLd data={breadcrumb} />

      <section className="pt-32 pb-20 bg-gradient-to-b from-rose-50 to-white dark:from-rose-900/10 dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-sm font-semibold mb-6">
            <Globe className="w-4 h-4" /> Canada
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Canada Payroll &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-500">
              HR Compliance Software
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Run Canadian payroll and HR operations with confidence. Space HR
            helps teams standardize provincial payroll workflows, reduce manual
            errors, and improve compliance readiness with AI-powered checks.
          </p>
          <Link href="/request-a-demo">
            <Button size="lg" className="rounded-full px-8 font-semibold">
              Get Started in Canada <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Built for Canadian Payroll Teams
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: "Provincial Payroll Controls",
                description:
                  "Configure payroll by province to keep operations consistent across distributed Canadian teams.",
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Compliance-Ready Workflows",
                description:
                  "Maintain clean payroll records and review trails that support CRA-oriented internal governance.",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Year-End Payroll Support",
                description:
                  "Simplify year-end processing and employee document delivery with centralized payroll data.",
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AI Payroll Auditing",
                description:
                  "Detect payroll outliers before processing to reduce risk and manual rework.",
              },
              {
                icon: <Building2 className="w-6 h-6" />,
                title: "Multi-Entity Operations",
                description:
                  "Run payroll for multiple entities and teams in one platform with consistent controls.",
              },
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: "Employee Self-Service",
                description:
                  "Give employees access to payroll documents and updates with less administrative overhead.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 mb-4">
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

      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Canada Coverage Highlights
          </h2>
          <div className="space-y-4">
            {[
              "Province-aware payroll workflows",
              "Compliance-focused payroll records",
              "Centralized year-end payroll operations",
              "AI checks for payroll anomalies",
              "Scalable setup for growing Canadian teams",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700"
              >
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-rose-600 to-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Scale Canadian Payroll with Confidence
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Standardize payroll and HR operations across Canadian teams.
          </p>
          <Link href="/request-a-demo">
            <Button
              size="lg"
              className="rounded-full px-8 font-semibold bg-white text-rose-600 hover:bg-gray-100"
            >
              Request a Demo <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
