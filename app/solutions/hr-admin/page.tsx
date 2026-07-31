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
  ShieldCheck,
  CheckCircle,
  Zap,
  Calculator,
  FileText,
  Users,
  Clock,
  Calendar,
  Shield,
  ClipboardList,
  RefreshCw,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Space HR for HR Admins — Payroll Wizard & Compliance",
  description:
    "HR admin software with 5-step payroll wizard, automated tax compliance, and AI auditing. Reduce manual work by 80%. Setup in 48 hours.",
  keywords: [
    "HR admin software",
    "5-step payroll wizard",
    "payroll compliance software",
    "HR administrator tools",
    "automated payroll processing",
    "leave management system",
    "HR compliance automation",
    "employee data management",
    "payroll tax automation",
    "HR workflow automation",
  ],
  openGraph: {
    title: "Space HR for HR Admins | Payroll Wizard & Compliance",
    description:
      "5-step payroll wizard, automated compliance, and AI auditing for HR administrators.",
    url: "https://spacehr.net/solutions/hr-admin",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Space HR for HR Admins | Payroll Wizard & Compliance",
    description: "5-step payroll wizard, automated compliance, and AI auditing for HR administrators.",
  },
  alternates: {
    canonical: "https://spacehr.net/solutions/hr-admin",
  },
};

const faqs = [
  {
    question: "How does the 5-step payroll wizard simplify payroll processing?",
    answer:
      "The 5-step wizard guides HR admins through: (1) Employee data verification, (2) Hours and earnings review, (3) Deductions and benefits confirmation, (4) AI audit and anomaly review, (5) Approval and ACH file generation. Each step includes automated validation and AI-powered error detection, reducing a complex process to a guided workflow.",
  },
  {
    question: "How much time does Space HR save HR administrators?",
    answer:
      "On average, HR admins save 80% of their time on routine tasks. Payroll processing time drops from days to hours, leave management is fully automated, and compliance monitoring runs continuously in the background. The AI Concierge handles 70% of employee queries, freeing HR to focus on strategic initiatives.",
  },
];

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "Solutions", url: "https://spacehr.net/solutions" },
  { name: "For HR Admins", url: "https://spacehr.net/solutions/hr-admin" },
]);

export default function HRAdminSolutionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={generateFAQSchema(faqs)} />
      <JsonLd data={breadcrumb} />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-teal-50 to-white dark:from-teal-900/10 dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-semibold mb-6">
            <ClipboardList className="w-4 h-4" /> Built for HR Professionals
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Space HR for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
              HR Administrators
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Streamline your daily operations with the{" "}
            <strong>5-step payroll wizard</strong>, automated{" "}
            <strong>tax compliance</strong>, intelligent{" "}
            <strong>leave management</strong>, and{" "}
            <strong>AI-powered payroll auditing</strong>. Reduce manual work by
            80% and eliminate compliance risk.
          </p>
          <Link href="/request-a-demo">
            <Button size="lg" className="rounded-full px-8 font-semibold">
              See HR Admin Tools <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* 5-STEP PAYROLL WIZARD */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            The 5-Step Payroll Wizard
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Process payroll with confidence. Each step includes AI validation to
            catch errors before they become costly mistakes.
          </p>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Verify Data",
                description:
                  "Employee records, rates, and tax elections validated automatically",
                icon: <Users className="w-6 h-6" />,
              },
              {
                step: "2",
                title: "Review Earnings",
                description:
                  "Hours, overtime, bonuses, and commissions confirmed with AI checks",
                icon: <Calculator className="w-6 h-6" />,
              },
              {
                step: "3",
                title: "Confirm Deductions",
                description:
                  "Benefits, 401k, HSA, garnishments, and tax withholdings verified",
                icon: <FileText className="w-6 h-6" />,
              },
              {
                step: "4",
                title: "AI Audit",
                description:
                  "Full anomaly scan — duplicates, errors, compliance issues flagged",
                icon: <ShieldCheck className="w-6 h-6" />,
              },
              {
                step: "5",
                title: "Approve & Pay",
                description:
                  "One-click approval generates NACHA ACH files for direct deposit",
                icon: <CheckCircle className="w-6 h-6" />,
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-center relative"
              >
                <div className="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center mx-auto mb-4 text-lg">
                  {step.step}
                </div>
                <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 mx-auto mb-3">
                  {step.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Everything HR Admins Need in One Platform
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Calculator className="w-6 h-6" />,
                title: "Automated Payroll Processing",
                description:
                  "5-step wizard with AI auditing, gross-to-net automation, multi-state tax compliance, and NACHA ACH generation.",
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Leave & PTO Management",
                description:
                  "Automated leave accruals, policy enforcement, approval workflows, and balance tracking. Employees self-serve via AI Concierge.",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Time & Attendance",
                description:
                  "GPS geofenced clock-in/out, overtime tracking, shift scheduling, and automatic timesheet integration with payroll.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Compliance Automation",
                description:
                  "Continuous monitoring of federal, state, and local compliance. Automated alerts for regulatory changes and filing deadlines.",
              },
              {
                icon: <RefreshCw className="w-6 h-6" />,
                title: "Workflow Automation",
                description:
                  "Automate onboarding, offboarding, role changes, and approval chains. Reduce manual data entry and eliminate process gaps.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "AI-Powered Assistance",
                description:
                  "The AI Concierge handles 70% of employee queries. AI auditor catches payroll errors. AI generates performance summaries.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 mb-4">
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

      {/* RELATED FEATURES */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Explore Related Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/features/payroll"
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary">
                Payroll Automation →
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Full payroll processing with AI auditing and ACH generation.
              </p>
            </Link>
            <Link
              href="/features/ai-payroll-auditor"
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary">
                AI Payroll Auditor →
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Automated anomaly detection for every payroll run.
              </p>
            </Link>
            <Link
              href="/features/leave-management"
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary">
                Leave Management →
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Automated PTO tracking and policy enforcement.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Simplify Your HR Operations
          </h2>
          <p className="text-xl text-white/80 mb-8">
            See how the 5-step payroll wizard and AI automation can transform
            your daily workflow.
          </p>
          <Link href="/request-a-demo">
            <Button
              size="lg"
              className="rounded-full px-8 font-semibold bg-white text-teal-600 hover:bg-gray-100"
            >
              Request a Demo <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
