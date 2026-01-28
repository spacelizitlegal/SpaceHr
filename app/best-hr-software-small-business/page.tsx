import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import {
  CheckCircle,
  BarChart3,
  Users,
  Briefcase,
  Monitor,
  Rocket,
  ShieldCheck,
  DollarSign,
  Clock,
  Layers,
  MousePointer2,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best HR Software for Small Business (2025) | Affordable & Scalable",
  description:
    "Find the best HR software for small businesses. Compare affordable, easy-to-use human resource tools designed for growing teams (10-200 employees).",
  keywords: [
    "best hr software for small business",
    "small business hr software",
    "hr tools for startups",
    "affordable hrms",
    "free hr software",
    "smb hr solutions",
  ],
};

const faqs = [
  {
    question: "Why does a small business need HR software?",
    answer:
      "Spreadsheets work for 5 employees, but become chaotic at 10 or 20. HR software automates critical tasks like tax calculations, attendance tracking, and leave management, saving you hours of admin time and preventing costly compliance errors.",
  },
  {
    question: "How much does HR software cost for small businesses?",
    answer:
      "Most small business tools use a 'per employee per month' (PEPM) model. Costs typically range from $4 to $12 per user. Space HR offers a competitive starter package designed specifically for growing teams with no hidden implementation fees.",
  },
  {
    question: "Is it hard to set up?",
    answer:
      "Not anymore. Modern SMB tools are designed for self-service setup. You can import your employee list from Excel, configure your leave policies, and invite your team in less than a day.",
  },
  {
    question: "Does it handle state taxes?",
    answer:
      "Yes. A key benefit of using software like Space HR is automated tax compliance. The system automatically calculates and withholds the correct federal, state, and local taxes based on employee location.",
  },
  {
    question: "Can I upgrade as I grow?",
    answer:
      "Absolutely. Scalability is a core feature of Space HR. You can start with basic Core HR and Payroll, and turn on Performance Management or Advanced Analytics modules as your team expands.",
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

export default function SmallBusinessHRPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={organizationSchema} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 font-semibold text-sm">
            For Growing Teams
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Best HR Software for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
              Small Business
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Stop drowning in spreadsheets. Discover affordable, scalable HR tools
            that grow with your startup from 10 to 200+ employees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button size="lg" className="rounded-full px-8 h-12 text-lg">
                Start Your Free Trial
              </Button>
            </Link>
            <Link href="#smb-comparison">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-12 text-lg"
              >
                Compare SMB Tools
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Definition Block */}
      <section className="py-12 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-green-50 dark:bg-green-900/10 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-2">
              What is SMB HR Software?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Small Business HR Software is a specialized category of HR technology designed for portability, affordability, and ease of use. Unlike complex enterprise systems, it focuses on core needs like payroll, time tracking, and onboarding, often with "self-service" setup to eliminate expensive implementation fees.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Navigation */}
      <section className="py-12 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
            More Resources for You
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/hr-software"
              className="px-6 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors text-gray-700 dark:text-gray-300 font-medium text-sm flex items-center gap-2"
            >
              <Monitor className="w-4 h-4 text-blue-500" />
              Complete HR Guide
            </Link>
            <Link
              href="/hrms"
              className="px-6 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors text-gray-700 dark:text-gray-300 font-medium text-sm flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-purple-500" />
              HRMS Explained
            </Link>
            <Link
              href="/hr-payroll-software"
              className="px-6 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors text-gray-700 dark:text-gray-300 font-medium text-sm flex items-center gap-2"
            >
              <DollarSign className="w-4 h-4 text-green-500" />
              Payroll & Rules
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why Small Businesses Can't Ignore HR Tech
          </h2>
          <div className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-300 space-y-6">
            <p>
              When you have 5 employees, a spreadsheet works fine. But as you
              cross 10, 20, or 50 employees, manual processes become a liability.
            </p>
            <p>
              For small businesses, the risks of <strong>compliance errors</strong>
              (like incorrect tax withholdings) and the hidden costs of
              <strong>administrative time</strong> are significant. Modern HR
              software for small business isn't just about filing away data—it's
              about automating the busy work so you can focus on growth.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works: Startup Setup */}
      <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Get Started in 3 Steps
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No IT team needed. Designed for founders and office managers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="text-center p-6">
                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-green-600">
                  <Monitor className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">1. Import Data</h3>
                <p className="text-gray-600 dark:text-gray-400">Download our simple Excel template, fill in your employee details, and upload. Done.</p>
             </div>
             <div className="text-center p-6">
                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-green-600">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">2. Set Rules</h3>
                <p className="text-gray-600 dark:text-gray-400">Configure your leave policies (e.g., "14 days PTO"), tax details, and approval workflow.</p>
             </div>
             <div className="text-center p-6">
                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-green-600">
                  <Rocket className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">3. Go Live</h3>
                <p className="text-gray-600 dark:text-gray-400">Invite your team via email. They get a self-service portal to update their own profiles.</p>
             </div>
          </div>
        </div>
      </section>

       {/* Comparison Table (Re-inserted) */}
      <section id="smb-comparison" className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              SMB Tools vs. Enterprise Suites
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-[#0b1121] text-left">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/4">
                    Feature
                  </th>
                  <th className="p-6 text-sm font-bold tracking-wider text-green-600 dark:text-green-400 uppercase border-b dark:border-gray-700 w-1/4 bg-green-50/50 dark:bg-green-900/10">
                    Space HR (SMB Optimized)
                  </th>
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/4">
                    Free/Basic Tools
                  </th>
                  <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase border-b dark:border-gray-700 w-1/4">
                    Enterprise ERPs
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    Cost Efficiency
                  </td>
                  <td className="p-6 text-green-700 dark:text-green-300 bg-green-50/50 dark:bg-green-900/10 font-medium">
                    High (Pay per active user)
                  </td>
                  <td className="p-6 text-gray-600 dark:text-gray-400">
                    High initially, limited later
                  </td>
                  <td className="p-6 text-gray-600 dark:text-gray-400">
                    Low (Expensive implementations)
                  </td>
                </tr>
                 <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    Setup Time
                  </td>
                  <td className="p-6 text-green-700 dark:text-green-300 bg-green-50/50 dark:bg-green-900/10 font-medium">
                    Instant / Self-Service
                  </td>
                  <td className="p-6 text-gray-600 dark:text-gray-400">
                    Instant
                  </td>
                  <td className="p-6 text-gray-600 dark:text-gray-400">
                    3-6 Months
                  </td>
                </tr>
                 <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    Scalability
                  </td>
                  <td className="p-6 text-green-700 dark:text-green-300 bg-green-50/50 dark:bg-green-900/10 font-medium">
                    Excellent (10 to 1000+)
                  </td>
                  <td className="p-6 text-gray-600 dark:text-gray-400">
                    Poor (Data migration needed)
                  </td>
                  <td className="p-6 text-gray-600 dark:text-gray-400">
                    Excellent but complex
                  </td>
                </tr>
                 <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    Integrated Payroll
                  </td>
                  <td className="p-6 text-green-700 dark:text-green-300 bg-green-50/50 dark:bg-green-900/10 font-medium">
                    Yes, Native US Payroll
                  </td>
                  <td className="p-6 text-gray-600 dark:text-gray-400">
                    No (Requires manual export)
                  </td>
                  <td className="p-6 text-gray-600 dark:text-gray-400">
                    Yes, Global Payroll
                  </td>
                </tr>
                 <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    Support
                  </td>
                  <td className="p-6 text-green-700 dark:text-green-300 bg-green-50/50 dark:bg-green-900/10 font-medium">
                    Priority Chat & Email
                  </td>
                  <td className="p-6 text-gray-600 dark:text-gray-400">
                    Community / None
                  </td>
                  <td className="p-6 text-gray-600 dark:text-gray-400">
                    Dedicated Account Manager
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>

      {/* Top 3 Features for SMBs (Re-inserted) */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Top 3 Features SMBs Need
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                1. Automated Onboarding
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Create a professional first impression. Digital offer letters,
                I-9 verification, and self-onboarding portals save hours per new
                hire.
              </p>
            </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                2. Easy Compliance
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Don't guess on taxes. Automated federal and state tax
                calculations allow you to run payroll with confidence, even
                without a dedicated HR manager.
              </p>
            </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                3. Scalable Performance
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Start simple with goals and check-ins. As you grow, add 360°
                reviews and competency models without switching platforms.
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
               Small Business HR FAQs
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Grow Your Business, Not Your Admin Work
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Get the HR power of a Fortune 500 company at a price startups love.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50 rounded-full px-8 h-14 text-lg font-bold"
              >
                Request Small Business Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
