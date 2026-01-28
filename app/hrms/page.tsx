import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import {
  CheckCircle,
  BarChart3,
  Users,
  Database,
  Globe,
  Lock,
  ArrowRight,
  Monitor,
  Briefcase,
  Layers,
  Search,
  UserPlus,
  TrendingUp,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HRMS Explained | HRMS vs HRIS vs HCM Guide (2025)",
  description:
    "What is an HRMS? A complete guide to Human Resource Management Systems. key features, benefits, and how it differs from HRIS and HCM software.",
  keywords: [
    "hrms",
    "human resource management system",
    "hrms software",
    "hr system",
    "hris vs hrms",
    "cloud hrms",
    "hcm software",
    "hr database",
  ],
};

const faqs = [
  {
    question: "What does HRMS stand for?",
    answer:
      "HRMS stands for Human Resource Management System. It is a software application that combines many human resources functions, including benefits administration, payroll, recruiting and training, and performance analysis.",
  },
  {
    question: "What is the difference between HRIS and HRMS?",
    answer:
      "While often used interchangeably, HRIS (Human Resource Information System) typically focuses on data management and core HR needs. HRMS (Human Resource Management System) is broader, adding talent management and strategic depth. HCM (Human Capital Management) is the most comprehensive, often used by large enterprises.",
  },
  {
    question: "Can an HRMS help with compliance?",
    answer:
      "Yes. An HRMS like Space HR automatically updates with changing labor laws and tax regulations, reducing the risk of non-compliance penalties.",
  },
  {
    question: "Is HRMS software expensive?",
    answer:
      "Costs vary. Traditional on-premise systems can cost thousands in licenses. Modern cloud HRMS like Space HR uses a subscription model (SaaS) based on the number of employees, making it affordable for businesses of all sizes.",
  },
  {
    question: "What features should I look for in an HRMS?",
    answer:
      "Key features include a centralized employee database, automated payroll, performance management (reviews and goals), leave and attendance tracking, and self-service portals for employees.",
  },
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

export default function HRMSPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={organizationSchema} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-semibold text-sm">
            HR Tech Explained
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            What is an{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              HRMS?
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-gray-500 dark:text-gray-400 font-medium">
              A Complete Guide for 2025
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Demystifying Human Resource Management Systems: Features, Benefits,
            and the HRIS vs. HCM debate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button size="lg" className="rounded-full px-8 h-12 text-lg">
                See Space HRMS in Action
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Definition Block */}
      <section className="py-12 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-2">
              HRMS Definition
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              A Human Resource Management System (HRMS) is a suite of software
              tools giving HR professionals an integrated way to manage employee
              data, payroll, recruitment, benefits, training, and talent
              management. It combines the disciplines of HR with the innovation
              of IT.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Navigation */}
      <section className="py-12 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
            Read Our Related Guides
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/hr-software"
              className="px-6 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors text-gray-700 dark:text-gray-300 font-medium text-sm flex items-center gap-2"
            >
              <Monitor className="w-4 h-4 text-blue-500" />
              HR Software Guide
            </Link>
            <Link
              href="/best-hr-software-small-business"
              className="px-6 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors text-gray-700 dark:text-gray-300 font-medium text-sm flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4 text-green-500" />
              SMB HR Solutions
            </Link>
            <Link
              href="/hr-payroll-software"
              className="px-6 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors text-gray-700 dark:text-gray-300 font-medium text-sm flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-pink-500" />
              Payroll Integration
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            The Central Nervous System of HR
          </h2>
          <div className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-300 space-y-6">
            <p>
              Unlike simple payroll tools or standalone tracking sheets, an HRMS
              aims to be the "single source of truth" for all employee data,
              connecting core administrative functions with strategic talent
              management.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works: Employee Lifecycle */}
      <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              HRMS Across the Employee Lifecycle
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              How the system supports employees from day one to day last.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
             <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <UserPlus className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Recruit & Onboard</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Post jobs, track candidates, and automate paperwork for new hires.</p>
             </div>
             <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <Layers className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Manage & Pay</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track time, manage benefits, and run accurate payroll cycles.</p>
             </div>
             <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <TrendingUp className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Develop & Retain</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Set goals, run performance reviews, and identify top talent.</p>
             </div>
             <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <Search className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Analyze</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Use data to predict turnover, optimize costs, and improve culture.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Comparison Table (Re-inserted) */}
      <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              HRIS vs. HRMS vs. HCM
            </h2>
             <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-[#0b1121] text-left">
             <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/4">
                    Capabilities
                  </th>
                  <th className="p-6 text-sm font-bold tracking-wider text-green-600 dark:text-green-400 uppercase border-b dark:border-gray-700 w-1/4">
                    HRIS <br />
                    <span className="text-xs text-gray-400 font-normal normal-case">
                      (Info System)
                    </span>
                  </th>
                  <th className="p-6 text-sm font-bold tracking-wider text-purple-600 dark:text-purple-400 uppercase border-b dark:border-gray-700 w-1/4 bg-purple-50/50 dark:bg-purple-900/10">
                    HRMS <br />
                    <span className="text-xs text-gray-400 font-normal normal-case">
                      (Mgmt System)
                    </span>
                  </th>
                  <th className="p-6 text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase border-b dark:border-gray-700 w-1/4">
                    HCM <br />
                    <span className="text-xs text-gray-400 font-normal normal-case">
                      (Human Capital)
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    Core HR (Database, Org Chart)
                  </td>
                  <td className="p-6 text-green-600"><CheckCircle className="w-5 h-5" /></td>
                  <td className="p-6 text-purple-600 bg-purple-50/50 dark:bg-purple-900/10"><CheckCircle className="w-5 h-5" /></td>
                  <td className="p-6 text-blue-600"><CheckCircle className="w-5 h-5" /></td>
                </tr>
                {/* ... other rows ... */}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section (Re-inserted) */}
      <section className="py-20">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-16">
              Three Pillars of a Modern HRMS
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Database className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Core HR
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                The single source of truth. Employee records, documents, and compliance data securely stored.
              </p>
            </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Users className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Talent Mgmt
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Tools to recruit, onboard, review, and retain your best people.
              </p>
            </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <BarChart3 className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Workforce Intel
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Analytics and reporting to make data-driven decisions about your organization.
              </p>
            </div>
          </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
               HRMS FAQs
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Upgrade to a Smarter HRMS
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Experience the power of an all-in-one Human Resource Management
            System tailored for modern businesses.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 h-14 text-lg font-bold"
              >
                Request HRMS Demo
              </Button>
            </Link>
             <Link href="/hr-software">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-gray-600 text-white hover:bg-gray-800 rounded-full px-8 h-14 text-lg"
              >
                Back to HR Software
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
