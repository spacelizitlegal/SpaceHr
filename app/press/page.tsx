import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  Download,
  ExternalLink,
  Mail,
  FileText,
  Globe,
  Users,
  Zap,
  Award,
  ArrowRight,
} from "lucide-react";
import { JsonLd,
  generateBreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Press & Media Kit | SpaceHR — AI-Powered HR Platform",
  description:
    "SpaceHR press resources: company overview, product facts, logo downloads, screenshots, and media contact. For journalists, analysts, and directory editors.",
  keywords: [
    "SpaceHR press kit",
    "SpaceHR media kit",
    "HR software press",
    "AI HR platform media",
    "SpaceHR company info",
    "SpaceHR logos",
    "SpaceHR reviews",
    "SpaceHR G2",
    "SpaceHR Capterra",
    "SpaceHR rating",
  ],
  alternates: {
    canonical: "https://spacehr.net/press",
  },
  openGraph: {
    title: "Press & Media Kit | SpaceHR",
    description:
      "Brand assets, company facts, screenshots, and press contact for SpaceHR.",
    url: "https://spacehr.net/press",
    siteName: "SpaceHR",
    type: "website",
  },
};

const pressSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "SpaceHR Press & Media Kit",
  url: "https://spacehr.net/press",
  description:
    "Official press and media resources for SpaceHR — AI-powered HR platform.",
  publisher: {
    "@type": "Organization",
    name: "SpaceHR",
    url: "https://spacehr.net",
    logo: {
      "@type": "ImageObject",
      url: "https://spacehr.net/about_logo.png",
    },
    sameAs: [
      "https://www.linkedin.com/company/spacehr",
      "https://twitter.com/spacehr",
      "https://www.g2.com/products/spacehr",
      "https://www.capterra.com/p/spacehr",
      "https://www.trustradius.com/products/spacehr",
      "https://www.producthunt.com/products/spacehr",
      "https://www.crunchbase.com/organization/spacehr",
    ],
  },
};

const companyFacts = [
  { label: "Founded", value: "2023" },
  { label: "Headquarters", value: "Remote-first, global team" },
  { label: "Product", value: "AI-powered HR & payroll platform" },
  { label: "Supported Regions", value: "USA, UAE, Singapore, Canada, Europe" },
  { label: "Key Differentiator", value: "AI HR chatbot + payroll anomaly detection" },
  { label: "Avg. Setup Time", value: "48 hours" },
  { label: "HR Ticket Reduction", value: "70% via AI chatbot automation" },
  { label: "Payroll Error Reduction", value: "99% via AI Payroll Auditor" },
  { label: "Labor Cost Forecast Accuracy", value: "95% over 12 months" },
  { label: "Website", value: "spacehr.net" },
];

const keyFeatures = [
  {
    name: "AI HR Chatbot",
    description:
      "24/7 employee self-service chatbot that resolves leave, payroll, policy, and benefits queries instantly — reducing HR ticket volume by 70%.",
    link: "/features/ai-chatbots",
  },
  {
    name: "AI Payroll Auditor",
    description:
      "Scans every payroll run before processing to flag anomalies in gross-to-net, FUTA/FICA withholding, and NACHA file generation.",
    link: "/features/ai-payroll-auditor",
  },
  {
    name: "Labor Cost Prediction",
    description:
      "12-month AI-powered headcount and labor cost forecasting with 95% accuracy — built for HR leaders and CFOs.",
    link: "/features/cost-prediction",
  },
  {
    name: "Attrition Prediction",
    description:
      "Identifies employees at risk of leaving up to 6 months in advance, with 87% accuracy.",
    link: "/features/attrition-prediction",
  },
  {
    name: "360 Performance Appraisals",
    description:
      "Automated appraisal cycles with AI-generated summaries, multi-rater feedback, and goal tracking.",
    link: "/features/360-performance-appraisals",
  },
  {
    name: "HR AI Concierge",
    description:
      "AI assistant for HR teams — drafts policies, answers compliance questions, and generates reports.",
    link: "/features/hr-ai-concierge",
  },
];

const boilerplate = `SpaceHR is an AI-powered HR and payroll platform built for mid-market and enterprise companies. SpaceHR combines a 24/7 AI HR chatbot for employee self-service, an AI Payroll Auditor that eliminates payroll errors before processing, 12-month labor cost forecasting with 95% accuracy, attrition prediction, and 360-degree performance appraisals — all in one platform. SpaceHR supports payroll compliance across the United States, UAE, Singapore, Canada, and Europe. Teams go live in 48 hours. Learn more at spacehr.net.`;

const _bc_press = [{"name":"Home","url":"https://spacehr.net"},{"name":"Press","url":"https://spacehr.net/press"}];

export default function PressPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(_bc_press)} />
      <JsonLd data={pressSchema} />
      <div className="flex flex-col min-h-screen font-sans bg-white dark:bg-[#0b1121]">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-blue-950 to-[#0b1121]">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
              <FileText className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Press &amp; Media Kit</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              SpaceHR Media Resources
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Everything journalists, analysts, and directory editors need to write about SpaceHR —
              brand assets, product facts, screenshots, and press contact.
            </p>
            <a
              href="mailto:press@spacehr.net"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact Press Team
            </a>
          </div>
        </section>

        {/* Company Boilerplate */}
        <section className="py-16 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Company Boilerplate
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              For use in press releases, directory listings, and articles:
            </p>
            <div className="bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                &ldquo;{boilerplate}&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Company Facts */}
        <section className="py-16 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Key Company Facts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {companyFacts.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      {label}
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Core Product Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyFeatures.map(({ name, description, link }) => (
                <div
                  key={name}
                  className="p-6 bg-gray-50 dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{description}</p>
                  <Link
                    href={link}
                    className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Learn more <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews & Directory Listings */}
        <section className="py-16 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-5 h-5 text-blue-500" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Reviews &amp; Directory Listings
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              SpaceHR is listed on the major SaaS review platforms below. If you&apos;re a customer,
              we&apos;d be grateful for an honest review — it helps other HR teams find us.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                {
                  name: "G2",
                  category: "HR Software",
                  description: "The world's largest B2B software review platform. Verified user reviews from HR professionals.",
                  url: "https://www.g2.com/products/spacehr",
                  cta: "Review on G2",
                  badge: "4.8★",
                },
                {
                  name: "Capterra",
                  category: "HRMS & HR Software",
                  description: "Gartner-owned directory trusted by millions of business software buyers.",
                  url: "https://www.capterra.com/p/spacehr",
                  cta: "Review on Capterra",
                  badge: "4.8★",
                },
                {
                  name: "TrustRadius",
                  category: "HR Management Software",
                  description: "In-depth B2B software reviews with detailed criteria scoring.",
                  url: "https://www.trustradius.com/products/spacehr",
                  cta: "Review on TrustRadius",
                  badge: "4.8★",
                },
                {
                  name: "Product Hunt",
                  category: "AI HR Tools",
                  description: "Where tech teams discover new products. Upvote SpaceHR and leave a comment.",
                  url: "https://www.producthunt.com/products/spacehr",
                  cta: "View on Product Hunt",
                  badge: null,
                },
                {
                  name: "Crunchbase",
                  category: "Company Profile",
                  description: "SpaceHR company profile including funding, team, and product information.",
                  url: "https://www.crunchbase.com/organization/spacehr",
                  cta: "View on Crunchbase",
                  badge: null,
                },
                {
                  name: "GetApp",
                  category: "HR & Payroll Software",
                  description: "Gartner Digital Markets platform for small and mid-size business software buyers.",
                  url: "https://www.getapp.com/hr-employee-management-software/a/spacehr/",
                  cta: "Review on GetApp",
                  badge: "4.8★",
                },
              ].map(({ name, category, description, url, cta, badge }) => (
                <div
                  key={name}
                  className="p-5 bg-gray-50 dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">{name}</p>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{category}</p>
                    </div>
                    {badge && (
                      <span className="text-sm font-bold text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded-lg">
                        {badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1">{description}</p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {cta} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>

            {/* For directory editors */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" />
                For Directory Editors &amp; Analysts
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Updating or creating a SpaceHR listing? Use the company boilerplate above, our brand
                assets below, and contact{" "}
                <a
                  href="mailto:partnerships@spacehr.net"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  partnerships@spacehr.net
                </a>{" "}
                for any additional information.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-gray-600 dark:text-gray-400">
                {[
                  { label: "Category", value: "HR Software / HRMS / AI HR" },
                  { label: "Pricing Model", value: "Per employee/month, SaaS" },
                  { label: "Deployment", value: "Cloud / SaaS" },
                  { label: "Company Size", value: "Startup → Enterprise" },
                  { label: "Founded", value: "2023" },
                  { label: "HQ", value: "Remote-first, global" },
                  { label: "Website", value: "spacehr.net" },
                  { label: "Trial Available", value: "Yes — free trial" },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white dark:bg-[#0b1121] rounded-lg p-2.5 border border-blue-100 dark:border-blue-900">
                    <p className="font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide text-[10px] mb-0.5">{label}</p>
                    <p className="font-medium text-gray-900 dark:text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Brand Assets */}
        <section className="py-16 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Brand Assets
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Please use these assets as-is. Do not alter colors, proportions, or add effects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Logo on light */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-white p-8 flex items-center justify-center h-40">
                  <Image
                    src="/about_logo.png"
                    alt="SpaceHR logo on white background"
                    width={160}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="p-4 bg-gray-50 dark:bg-[#111827]">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Logo — Light</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">For use on white/light backgrounds</p>
                </div>
              </div>
              {/* Logo on dark */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-[#0b1121] p-8 flex items-center justify-center h-40">
                  <Image
                    src="/about_logo.png"
                    alt="SpaceHR logo on dark background"
                    width={160}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="p-4 bg-gray-50 dark:bg-[#111827]">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Logo — Dark</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">For use on dark backgrounds</p>
                </div>
              </div>
              {/* Icon only */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-gray-100 dark:bg-gray-800 p-8 flex items-center justify-center h-40">
                  <Image
                    src="/hrlogonly.png"
                    alt="SpaceHR icon mark"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="p-4 bg-gray-50 dark:bg-[#111827]">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Icon Mark</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Favicon and icon use</p>
                </div>
              </div>
            </div>

            {/* Brand colors */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Brand Colors</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: "Primary Blue", hex: "#2563EB", bg: "bg-blue-600" },
                  { name: "Dark Navy", hex: "#0b1121", bg: "bg-[#0b1121] border border-gray-600" },
                  { name: "Light Blue", hex: "#3B82F6", bg: "bg-blue-500" },
                  { name: "Accent Teal", hex: "#06B6D4", bg: "bg-cyan-500" },
                  { name: "White", hex: "#FFFFFF", bg: "bg-white border border-gray-300" },
                ].map(({ name, hex, bg }) => (
                  <div key={name} className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${bg}`} />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">{hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Media Contact */}
        <section className="py-16 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Media Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-50 dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Press Inquiries</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">For journalists &amp; analysts</p>
                  </div>
                </div>
                <a
                  href="mailto:press@spacehr.net"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  press@spacehr.net
                </a>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  We aim to respond within 1 business day.
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-[#111827] rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Partnership &amp; Directories</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">For listings &amp; integrations</p>
                  </div>
                </div>
                <a
                  href="mailto:partnerships@spacehr.net"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  partnerships@spacehr.net
                </a>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  G2, Capterra, GetApp profiles available on request.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Guidelines */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Coverage Guidelines
            </h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              {[
                'Refer to the product as "SpaceHR" (one word, capital S and HR).',
                'The parent company is "Space AI" — use SpaceHR when referring to the HR product.',
                "Do not alter the logo in any way — no recoloring, stretching, or added effects.",
                'The preferred product description is: "AI-powered HR platform" or "AI HR and payroll software".',
                "For screenshots or product images beyond what is shown here, please email press@spacehr.net.",
                "Link to https://spacehr.net when citing SpaceHR in online articles.",
              ].map((guideline, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{guideline}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Also see</h3>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">
                  About SpaceHR
                </Link>
                <Link href="/features" className="text-blue-600 dark:text-blue-400 hover:underline">
                  All Features
                </Link>
                <Link href="/demo" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Watch Demo
                </Link>
                <Link href="/request-a-demo" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Request a Live Demo
                </Link>
                <Link href="/pricing" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
