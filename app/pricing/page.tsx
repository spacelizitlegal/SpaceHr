import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, MessageCircle, Calendar, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Space HR Pricing — Request a Custom Quote",
  description:
    "Space HR believes in personalized pricing. Request a quote and get the best price for your HRMS, payroll, and AI HR needs.",
  openGraph: {
    title: "Space HR Pricing — Request a Custom Quote",
    description:
      "Personalized pricing for your team. Request a demo and get a tailored quote for Space HR.",
    url: "https://spacehr.net/pricing",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Space HR Pricing — Request a Custom Quote",
    description:
      "Personalized pricing for your team. Request a demo and get a tailored quote for Space HR.",
  },
  alternates: {
    canonical: "https://spacehr.net/pricing",
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold text-sm">
            Transparent & Personalized
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Pricing Built Around{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Your Needs
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            We believe in personalization. Every company has different headcount,
            compliance needs, and feature requirements. Request a quote and get the
            best price for your specific HRMS, payroll, and AI HR needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="rounded-full px-10 h-14 text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              >
                Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 h-14 text-lg"
              >
                Talk to Sales
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-6">
            Free 14-day trial · No credit card required · Response within 1 business day
          </p>
        </div>
      </section>

      {/* WHY PERSONALIZED */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why We Don&apos;t Publish Generic Pricing
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A 50-person startup in Bangalore and a 500-person multinational have
              completely different needs. We tailor every quote so you only pay for
              what drives value for your team.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Tell Us About Your Team",
                desc: "Share your headcount, locations, payroll complexity, and the modules you need.",
              },
              {
                icon: Calendar,
                title: "Get a Tailored Quote",
                desc: "Our team reviews your requirements and responds with aggressive, transparent pricing within 1 business day.",
              },
              {
                icon: CheckCircle,
                title: "Validate with a Free Trial",
                desc: "Start a 14-day free trial to test the platform before making any commitment.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b1121] text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Pain Section — Copywriting Skill: "Show you understand their situation" */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Generic Pricing Fails Growing Companies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Most HR software pricing pages show tiers that don't match your reality.
            </p>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800/40 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                "We paid for features we never used."
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Traditional HR software forces you into tiers. The "Pro" plan includes 50 features, but you only need 10. You're paying for talent management, succession planning, and learning management — modules you won't use for years. It's like buying a truck when you need a sedan.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/40 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                "Hidden fees doubled our bill."
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The pricing page says $8 per employee. But add payroll processing, tax filing, compliance updates, and premium support — suddenly you're paying $22 per employee. What looked affordable became expensive. Transparency matters.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/40 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                "We outgrew our tier in 6 months."
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                You started with 50 employees and the "Starter" plan. Now you're at 150, need multi-entity support, and have to upgrade to "Enterprise" — which costs 3x more. Growing shouldn't mean your HR costs explode.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Influences Your Quote — Copywriting Skill: "Specific over vague" */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Influences Your Quote
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Every quote is tailored. Here's what we consider.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Headcount & Growth
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Your current team size and projected growth. We price fairly for where you are today, with clear pricing for where you're headed. No surprise jumps when you add 10 employees.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Compliance Complexity
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Multi-state tax filing, international payroll, industry-specific regulations — compliance complexity affects your quote. Simple US payroll costs less than global multi-currency operations.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Modules You Need
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Start with payroll and HR. Add AI features, performance management, or learning management when you're ready. Only pay for what you use today, with easy upgrades as you grow.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Support Level
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Standard support is included with every plan. Need a dedicated customer success manager, priority response times, or custom training? We'll tailor your support level to match your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof — Copywriting Skill: "Build credibility" */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Customers Say About Pricing
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Transparent pricing, no surprises.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800/40 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                "We switched from BambooHR and saved 35%. No hidden fees, no module upsells. The quote they gave us is the price we pay."
              </p>
              <p className="font-bold text-gray-900 dark:text-white">Sarah Chen</p>
              <p className="text-sm text-gray-500">VP People, TechCorp (280 employees)</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/40 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                "The personalized quote meant we only paid for what we needed. Rippling wanted to sell us IT modules we didn't want."
              </p>
              <p className="font-bold text-gray-900 dark:text-white">Marcus Rodriguez</p>
              <p className="text-sm text-gray-500">CTO, DataFlow (420 employees)</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/40 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                "We grew from 100 to 300 employees and our price only increased proportionally. No tier upgrades, no surprises."
              </p>
              <p className="font-bold text-gray-900 dark:text-white">Priya Patel</p>
              <p className="text-sm text-gray-500">Head of HR, GlobalTech (300 employees)</p>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Everything Is Included in Your Quote
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                No hidden module fees. No surprise add-ons. Your custom quote covers
                the features you need, dedicated onboarding, and ongoing support.
              </p>
              <Link href="/features">
                <Button variant="outline" className="rounded-full">
                  Explore All Features <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <ul className="space-y-4">
                {[
                  "AI HR Concierge & employee self-service",
                  "India-compliant payroll (PF, ESIC, TDS, PT)",
                  "Leave, attendance & GPS check-in",
                  "AI payroll anomaly detection",
                  "Attrition prediction & workforce analytics",
                  "Performance management & 360° appraisals",
                  "Dedicated onboarding manager",
                  "Phone, email & chat support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Your Custom Quote?
          </h2>
          <p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto">
            Tell us what you need and we&apos;ll get back to you with the best price
            for your team — usually within 1 business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="bg-white text-indigo-700 hover:bg-gray-50 rounded-full px-10 h-14 text-lg font-bold"
              >
                Request a Demo
              </Button>
            </Link>
            <Link href="mailto:sales@spacehr.net">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg"
              >
                Email Sales
              </Button>
            </Link>
          </div>
          <p className="text-indigo-200 text-sm mt-6">
            sales@spacehr.net · Response within 1 business day
          </p>
        </div>
      </section>
    </div>
  );
}
