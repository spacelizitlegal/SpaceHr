import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";
import {
  CheckCircle,
  XCircle,
  Zap,
  ShieldCheck,
  BarChart3,
  Bot,
  ArrowRight,
  Code,
  Globe,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OrangeHRM Alternative | Best AI-Powered HR Software (2025)",
  description:
    "Looking for an OrangeHRM alternative? Space HR offers integrated AI automation, simpler setup, and better support than open-source HR tools. Compare features now.",
  keywords: [
    "orangehrm alternative",
    "better than orangehrm",
    "open source hr alternative",
    "Space HR vs orangehrm",
    "ai hr software",
    "automated hr system",
  ],
  openGraph: {
    title: "OrangeHRM Alternative | Best AI-Powered HR Software | Space HR",
    description: "Looking for an OrangeHRM alternative? Space HR offers integrated AI automation, simpler setup, and better support than open-source HR tools.",
    url: "https://spacehr.net/compare/orangehrm",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrangeHRM Alternative | Best AI-Powered HR Software | Space HR",
    description: "Looking for an OrangeHRM alternative? Space HR offers integrated AI automation, simpler setup, and better support than open-source HR tools.",
  },
  alternates: { canonical: "https://spacehr.net/compare/orangehrm" },
};

const faqs = [
  {
    question: "Why choose Space HR over OrangeHRM?",
    answer:
      "Space HR is built for the AI era. While OrangeHRM provides basic modules, Space HR uses AI to automate workflows, predict turnover, and write performance coaching tips. We also offer a more modern, user-friendly interface that requires no technical maintenance.",
  },
  {
    question: "Is Space HR harder to set up than OrangeHRM?",
    answer:
      "No, it's significantly easier. OrangeHRM (especially the open-source version) often requires your own server hosting and technical configuration. Space HR is a cloud-based SaaS solution—you just log in and start working.",
  },
  {
    question: "Do you offer a free version like OrangeHRM?",
    answer:
      "We offer a free trial and a very improved starter package for small businesses. Unlike 'free' open-source software, which has hidden costs in hosting and security management, our pricing is transparent and includes hosting, security, and support.",
  },
  {
    question: "Can I migrate my data from OrangeHRM?",
    answer:
      "Yes. We provide CSV import tools that make it easy to migrate employee records, leave balances, and attendance history from legacy systems like OrangeHRM.",
  },
  {
    question: "Does Space HR support custom modules?",
    answer:
      "Space HR is highly configurable. While we don't allow modifying the core code (like open source), our Custom Workstreams feature allows you to build your own approval flows and forms without writing a single line of code.",
  },
];

const orangehrmBreadcrumbs = [
  { name: "Home", url: "https://spacehr.net/" },
  { name: "Compare", url: "https://spacehr.net/compare" },
  { name: "vs OrangeHRM", url: "https://spacehr.net/compare/orangehrm" },
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

export default function CompareOrangeHRMPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={organizationSchema} />

      {/* Hero Section */}
      <section className="relative pt-10 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 font-semibold text-sm">
            The Modern Alternative
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Stop Managing Servers. <br />
            Start Managing <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              People.
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Move beyond the complexity of open-source. Space HR gives you powerful AI tools, zero maintenance, and a cleaner interface than OrangeHRM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button size="lg" className="rounded-full px-8 h-12 text-lg bg-orange-600 hover:bg-orange-700 text-white border-none">
                See the Difference
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
              Space HR vs. OrangeHRM
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Why modern teams are making the switch.
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
                    OrangeHRM
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-purple-500" />
                      AI Automation
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300">
                    <strong>Integrated.</strong> AI Chatbots for FAQs, auto-drafted performance reviews, and predictive analytics.
                  </td>
                  <td className="p-6 text-gray-500">
                    <strong>None.</strong> Traditional manual data entry and reporting.
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-blue-500" />
                      Hosting & Updates
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300">
                    <strong>Fully Managed Cloud.</strong> Updates are automatic and invisible.
                  </td>
                  <td className="p-6 text-gray-500">
                    <strong>Self-Hosted (Open Source).</strong> Requires IT team to manage servers and install patches.
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                       <ShieldCheck className="w-4 h-4 text-green-500" />
                       Security
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300">
                    <strong>Enterprise Grade.</strong> SOC2 compliant, encrypted, and monitored 24/7.
                  </td>
                  <td className="p-6 text-gray-500">
                    <strong>Your Responsibility.</strong> You are responsible for securing your own server.
                  </td>
                </tr>
                 <tr>
                  <td className="p-6 font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                       <Code className="w-4 h-4 text-orange-500" />
                       Ease of Use
                    </div>
                  </td>
                  <td className="p-6 text-gray-700 dark:text-gray-300">
                    <strong>Consumer-Grade UI.</strong> Designed for non-technical users.
                  </td>
                  <td className="p-6 text-gray-500">
                    <strong>Developer-Centric.</strong> UI can feel dated and complex for general staff.
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
              More Than Just a Database
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Transform from "HR Administration" to "People Strategy".
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                AI Co-Pilot
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Don't just store data; use it. Our AI suggests coaching plans for struggling employees and flags flight risks before they quit.
              </p>
            </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Instant Implementation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                No LAMP stacks, no FTP, no upgrades. You can launch Space HR for your entire company in a single afternoon.
              </p>
            </div>
             <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Strategic Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Visualize gender pay gaps, department turnover, and overtime costs instantly with pre-built, beautiful dashboards.
              </p>
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
            A granular look at the architectural differences between Space HR and OrangeHRM.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800/40 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Product Architecture Comparison</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              OrangeHRM is a traditional open-source HRMS. While customizable, it lacks modern AI automation, built-in global payroll calculations, and forward-looking workforce analytics out of the box.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">OrangeHRM Limitations</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Lacks native predictive analytics (e.g. attrition forecasting). Requires manual database administration and lacks native conversational AI support.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">Space HR Architectural Advantage</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Modern SaaS platform with hybrid local/cloud AI, predictive attrition forecasting, live payroll anomaly detection, and a built-in AI HR Concierge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
               Ready to Switch?
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
               Common questions about moving from OrangeHRM.
            </p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 bg-gray-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">More Comparisons</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/compare/bamboohr", label: "vs BambooHR" },
              { href: "/compare/gusto", label: "vs Gusto" },
              { href: "/compare/adp", label: "vs ADP" },
              { href: "/compare/rippling", label: "vs Rippling" },
              { href: "/compare/workday", label: "vs Workday" },
              { href: "/compare", label: "All Comparisons" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 transition-all">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See Space HR in Action
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Get a personalized demo and see how AI can modernize your HR operations.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 h-14 text-lg font-bold"
              >
                Request Custom Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
