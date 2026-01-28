import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import {
  CheckCircle,
  XCircle,
  Zap,
  ShieldCheck,
  BarChart3,
  Bot,
  Sprout,
  Users,
  Layers,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BambooHR Alternatives for Mid-Sized Tech Companies | Space HR",
  description:
    "BambooHR is great for small business, but mid-sized tech companies need more. Space HR provides the scalability, global compliance, and API integrations growing tech teams demand.",
  keywords: [
    "bamboohr alternative mid-sized business",
    "hr software for tech companies",
    "space hr vs bamboohr",
    "scalable hr platform",
    "global payroll for tech teams",
  ],
};

const faqs = [
  {
    question: "Is Space HR better for tech companies than BambooHR?",
    answer:
      "Yes. We are built for the tech stack you already use. Deep API integrations, developer-friendly documentation, and global contractor management make us the preferred choice for engineering-led organizations.",
  },
  {
    question: "Do you support global remote teams?",
    answer:
      "Unlike BambooHR which is US-centric, Space HR works natively across borders. We handle multi-currency payroll, different holiday calendars, and local tax compliance in one unified system.",
  },
  {
    question: "Can we migrate data from BambooHR?",
    answer:
      "Seamlessly. Our 'Bamboo-to-Space' migration tool maps your existing employee data, documents, and time-off balances automatically. You can switch over in a weekend.",
  },
  {
    question: "How does compensation planning work?",
    answer:
      "Tech talent is expensive. Our Compensation Planning module uses real-time market data to help you model salary bands and equity grants, ensuring you stay competitive without overspending.",
  },
  {
    question: "Is it scalable?",
    answer:
      "BambooHR starts to creak at 300 employees. Space HR is stress-tested for organizations up to 2,000+. Our database architecture handles complex hierarchies and high transaction volumes without lag.",
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

export default function CompareBambooHRPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={organizationSchema} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 font-semibold text-sm">
            Built for Scale
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            The BambooHR Alternative for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Mid-Sized Tech
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            You've outgrown "friendly" HR software. You need global compliance, advanced compensation modeling, and robust APIs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="https://cad.spaceaiapp.com/login">
              <Button size="lg" className="rounded-full px-8 h-12 text-lg bg-blue-600 hover:bg-blue-700 text-white border-none shadow-xl">
                See the Tech Spec
              </Button>
            </Link>
            <Link href="/request-a-demo">
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-lg font-medium">
                Book Agile Demo
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
              Scale vs. Simplicity
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Why tech companies graduate to Space HR.
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
                    BambooHR
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-purple-500" />
                      Global Teams
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300">
                    <strong>Native.</strong> Multi-currency, multi-compliance for distributed tech teams.
                  </td>
                  <td className="p-6 text-gray-500">
                    <strong>Limited.</strong> Very US/Canada centric.
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                       <Bot className="w-4 h-4 text-blue-500" />
                      Compensation
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300">
                    <strong>Advanced Modeling.</strong> Equity, bonus simulations, and market bands.
                  </td>
                  <td className="p-6 text-gray-500">
                    <strong>Basic.</strong> Simple salary tracking only.
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                       <Zap className="w-4 h-4 text-green-500" />
                       Integrations
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300">
                    <strong>Developer-First.</strong> Robust GraphQL API and webhooks.
                  </td>
                  <td className="p-6 text-gray-500">
                    <strong>Standard.</strong> Basic REST API with rate limits.
                  </td>
                </tr>
                 <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                       <ShieldCheck className="w-4 h-4 text-orange-500" />
                       Scalability
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300">
                    <strong>High.</strong> Tested for 2,000+ employees and complex org charts.
                  </td>
                  <td className="p-6 text-gray-500">
                    <strong>Low.</strong> Struggles with complexity &gt;300 employees.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Switch Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Unlock Your Workforce Potential
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Move beyond basic tracking to true talent intelligence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
                <Sprout className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Grow with Confidence
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our database structure is designed for complexity. Multiple entities, currencies, and complex reporting lines are handled with ease.
              </p>
            </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Smart Suggestions
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Managers shouldn't guess. Our AI suggests raise amounts based on performance, budget, and market data.
              </p>
            </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Deep Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Everything talks to everything. Recruitment data flows to onboarding, which sets up payroll and performance goals automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
               Comparison FAQs
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
               Why modern companies are choosing Space HR.
            </p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Upgrade?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Join the companies switching to Space HR for better insights and automation.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50 rounded-full px-8 h-14 text-lg font-bold"
              >
                Request Migration Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
