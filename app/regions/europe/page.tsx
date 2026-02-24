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
  Brain,
  Building2,
  Languages,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Europe Payroll & HR Compliance Platform | Space HR",
  description:
    "One unified Space HR page for Europe. Manage multi-country payroll operations, compliance workflows, and workforce analytics for European teams.",
  keywords: [
    "Europe payroll software",
    "European HR software",
    "multi-country payroll Europe",
    "EU payroll compliance platform",
    "Europe HRMS",
    "cross-border workforce management",
    "European payroll operations",
    "GDPR-ready HR platform",
    "Europe workforce analytics",
  ],
  openGraph: {
    title: "Europe Payroll & HR Compliance Platform | Space HR",
    description:
      "Run multi-country payroll and HR operations across Europe with one centralized platform.",
    url: "https://spacehr.net/regions/europe",
  },
  alternates: {
    canonical: "https://spacehr.net/regions/europe",
  },
};

const faqs = [
  {
    question:
      "Can Space HR support multi-country payroll operations in Europe?",
    answer:
      "Yes. Space HR is designed for distributed teams and multi-country operations, helping payroll teams standardize processes while supporting local policy differences.",
  },
  {
    question: "Is this page intended for all European regions?",
    answer:
      "Yes. This is a consolidated Europe page covering broad payroll and HR operational needs across EU and non-EU markets in one place.",
  },
  {
    question: "How does Space HR help with compliance visibility in Europe?",
    answer:
      "Space HR centralizes payroll controls, audit trails, and review workflows so HR and finance teams can maintain better compliance visibility across regions.",
  },
];

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "Regions", url: "https://spacehr.net/regions" },
  { name: "Europe", url: "https://spacehr.net/regions/europe" },
]);

export default function EuropePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={generateFAQSchema(faqs)} />
      <JsonLd data={breadcrumb} />

      <section className="pt-32 pb-20 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-900/10 dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-6">
            <Globe className="w-4 h-4" /> Europe
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            One Europe Page for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">
              Payroll & HR Operations
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Manage European payroll and HR operations in one centralized system.
            Space HR supports multi-country workflows, governance visibility,
            and AI-powered quality checks for faster, cleaner payroll cycles.
          </p>
          <Link href="/request-a-demo">
            <Button size="lg" className="rounded-full px-8 font-semibold">
              Get Started in Europe <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Built for Multi-Country European Teams
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Cross-Country Governance",
                description:
                  "Standardize payroll controls and approvals across multiple European entities.",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Centralized Operations View",
                description:
                  "Track payroll operations, cycle status, and execution quality in one place.",
              },
              {
                icon: <Languages className="w-6 h-6" />,
                title: "Regional Team Alignment",
                description:
                  "Support distributed HR and payroll teams with structured shared workflows.",
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AI Payroll Checks",
                description:
                  "Catch payroll outliers early and reduce cycle delays caused by manual errors.",
              },
              {
                icon: <Building2 className="w-6 h-6" />,
                title: "Entity-Level Flexibility",
                description:
                  "Run multiple entities with local configuration and centralized oversight.",
              },
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: "Audit Trail Readiness",
                description:
                  "Maintain structured records for reviews, audits, and internal compliance tracking.",
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

      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Europe Coverage Highlights
          </h2>
          <div className="space-y-4">
            {[
              "One page for Europe-wide discovery",
              "Multi-country payroll operations visibility",
              "Centralized payroll governance and controls",
              "AI anomaly detection for payroll cycles",
              "Scalable HR workflows for distributed teams",
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

      <section className="py-24 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Launch Europe Payroll Ops from One Platform
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Standardize operations and improve payroll quality across Europe.
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
