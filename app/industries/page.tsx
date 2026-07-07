import Link from "next/link";
import { Metadata } from "next";
import { JsonLd, generateBreadcrumbSchema, generateFAQSchema } from "@/components/JsonLd";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "HR Software by Industry | Healthcare, Banking, Retail & More | Space HR",
  description:
    "Space HR delivers AI-powered HR software tailored for healthcare, banking & financial services, retail, manufacturing, and government. Industry-specific compliance, workforce management, and automation built in.",
  keywords: [
    "HR software by industry",
    "industry-specific HR software",
    "healthcare HR software",
    "banking HR software",
    "retail HR software",
    "manufacturing HR software",
    "government HR software",
    "HR software financial services",
    "sector-specific HRMS",
    "compliance HR software",
  ],
  twitter: {
    card: "summary_large_image",
    title: "HR Software by Industry | Space HR",
    description: "Industry-tailored HR software for healthcare, banking, retail, manufacturing, and government — with built-in compliance and sector-specific workflows.",
  },
  alternates: { canonical: "https://spacehr.net/industries" },
  openGraph: {
    title: "HR Software by Industry | Space HR",
    description:
      "Industry-tailored HR software for healthcare, banking, retail, manufacturing, and government — with built-in compliance and sector-specific workflows.",
    url: "https://spacehr.net/industries",
    siteName: "Space HR",
    type: "website",
    images: [{ url: "/desktop-design-showcase.webp", width: 1200, height: 630, alt: "Space HR — Industry-Specific HR Software" }],
  },
};

const industries = [
  {
    href: "/industries/healthcare",
    emoji: "🏥",
    label: "Healthcare",
    badge: "NHS & Private",
    badgeColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
    border: "border-teal-300 dark:border-teal-700",
    accent: "text-teal-600 dark:text-teal-400",
    desc: "Nurse shift scheduling, mandatory training compliance (BLS, ACLS, HIPAA), DBS/background check tracking, and AI-powered attrition prediction for clinical staff.",
    bullets: ["24/7 rota management", "Mandatory training expiry alerts", "Bank & agency staff management"],
  },
  {
    href: "/industries/banking",
    emoji: "🏦",
    label: "Banking & Financial Services",
    badge: "FCA / PRA",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    border: "border-emerald-300 dark:border-emerald-700",
    accent: "text-emerald-600 dark:text-emerald-400",
    desc: "FCA Senior Managers and Certification Regime (SMCR) tracking, conduct risk analytics, complex bonus scheme administration, and regulatory reference generation.",
    bullets: ["SMCR certification register", "Deferred compensation & clawback", "SOC 2 Type II certified"],
  },
  {
    href: "/industries/retail",
    emoji: "🛍️",
    label: "Retail & Hospitality",
    badge: "High Volume",
    badgeColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    border: "border-orange-300 dark:border-orange-700",
    accent: "text-orange-600 dark:text-orange-400",
    desc: "Shift pattern scheduling across multiple sites, high-volume seasonal onboarding, zero-hours contract management, and real-time attendance tracking.",
    bullets: ["Multi-site shift scheduling", "Zero-hours & seasonal contracts", "Real-time attendance tracking"],
  },
  {
    href: "/industries/manufacturing",
    emoji: "🏭",
    label: "Manufacturing",
    badge: "Multi-Shift",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    border: "border-blue-300 dark:border-blue-700",
    accent: "text-blue-600 dark:text-blue-400",
    desc: "Multi-shift workforce planning, ISO compliance documentation, safety training certification tracking, and time-and-attendance integration with shop floor systems.",
    bullets: ["Multi-shift workforce planning", "Safety & ISO compliance tracking", "Time-attendance integration"],
  },
  {
    href: "/industries/government",
    emoji: "🏛️",
    label: "Government & Public Sector",
    badge: "Public Sector",
    badgeColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
    border: "border-violet-300 dark:border-violet-700",
    accent: "text-violet-600 dark:text-violet-400",
    desc: "Civil service pay scale management, GDPR and FOI compliance, workforce capacity planning, pension scheme integration, and unionized workforce administration.",
    bullets: ["Civil service pay scales", "GDPR/FOI compliance built-in", "Pension scheme integration"],
  },
];

const faqs = [
  {
    question: "Does Space HR have industry-specific compliance built in?",
    answer:
      "Yes. Each industry deployment includes pre-configured compliance workflows: SMCR registers for financial services, mandatory training trackers for healthcare, ISO safety certification logs for manufacturing, and GDPR/FOI tooling for government. You don't need to configure compliance from scratch.",
  },
  {
    question: "Can Space HR handle multi-site or multi-entity organisations?",
    answer:
      "Yes. Space HR supports multi-entity org structures with separate payroll entities, site-level workforce reporting, and consolidated executive dashboards. This is particularly valuable for retail chains, NHS Trusts, and banking groups with multiple legal entities.",
  },
  {
    question: "Does Space HR support unionised workforces?",
    answer:
      "Yes. Space HR supports collective bargaining agreement (CBA) pay structures, union recognition workflows, and mandatory consultation tracking — commonly required in government, manufacturing, and healthcare environments.",
  },
  {
    question: "How quickly can Space HR be deployed for a regulated industry?",
    answer:
      "Most regulated sector deployments go live in 2–6 weeks. For industries with specific data residency requirements (financial services, government), Space HR offers UK, EU, and US-hosted options to meet regulatory data location obligations.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Industries", url: "https://spacehr.net/industries" },
];

const wins = [
  "Pre-built compliance for every sector",
  "Multi-site & multi-entity support",
  "UK, EU & US data residency options",
  "SOC 2 Type II certified",
  "Deploys in 2–6 weeks",
  "No IT team required",
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={generateFAQSchema(faqs)} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="pt-24 pb-0 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <li><Link href="/" className="hover:text-gray-700 dark:hover:text-gray-200">Home</Link></li>
          <li><span className="mx-1">/</span></li>
          <li className="text-gray-900 dark:text-white font-medium">Industries</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="pt-10 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-sm font-bold mb-8 uppercase tracking-wide border border-indigo-200 dark:border-indigo-800">
            Industry Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            HR Software Built for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Your Industry
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Generic HR platforms force you to configure compliance from scratch. Space HR ships with the regulatory workflows, compliance frameworks, and workforce patterns your sector actually uses.
          </p>
        </div>
      </section>

      {/* Why Space HR Wins */}
      <section className="py-12 bg-gradient-to-r from-indigo-600 to-violet-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Built for Regulated Sectors</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {wins.map((w) => (
              <div key={w} className="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-4">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-white text-sm font-medium">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">Choose Your Sector</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-10">Select your industry to see the specific compliance coverage, workflows, and HR features built for your sector.</p>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {industries.map((ind) => (
              <Link
                key={ind.href}
                href={ind.href}
                className={`group bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 ${ind.border} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{ind.emoji}</span>
                    <h3 className={`text-xl font-bold text-gray-900 dark:text-white group-hover:${ind.accent} transition-colors`}>
                      {ind.label}
                    </h3>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ml-3 flex-shrink-0 ${ind.badgeColor}`}>
                    {ind.badge}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{ind.desc}</p>
                <ul className="space-y-1 mb-5">
                  {ind.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${ind.accent}`} />
                      {b}
                    </li>
                  ))}
                </ul>
                <span className={`inline-flex items-center gap-1 text-sm font-semibold ${ind.accent}`}>
                  See {ind.label} HR features <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">See Space HR in Your Sector</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Book a demo tailored to your industry&apos;s specific compliance requirements and workforce challenges.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/request-a-demo" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl transition-all hover:scale-105">
              Book Industry Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/solutions" className="inline-flex items-center gap-2 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 font-bold py-4 px-8 rounded-full text-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all">
              View All Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
