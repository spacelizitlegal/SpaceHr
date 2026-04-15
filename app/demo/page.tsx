import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, PlayCircle, Clock, Users, Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Space HR Product Demo — Watch the AI HR Platform in Action",
  description:
    "Watch a 2-minute demo of Space HR's AI-powered HRMS. See the AI HR chatbot, payroll anomaly detection, workforce cost forecasting, and employee self-service live. No signup required.",
  keywords: [
    "space hr demo",
    "ai hr software demo",
    "hr chatbot demo",
    "hr platform demo video",
    "employee self-service demo",
    "ai payroll demo",
    "hr automation demo video",
  ],
  alternates: {
    canonical: "https://spacehr.net/demo",
  },
  openGraph: {
    title: "Watch the Space HR Demo — AI HR Platform in Action",
    description:
      "2-minute product walkthrough: AI HR chatbot, payroll auditing, workforce forecasting, and employee self-service.",
    url: "https://spacehr.net/demo",
    type: "video.other",
    images: [
      {
        url: "https://spacehr.net/desktop-design-showcase.webp",
        width: 1200,
        height: 630,
        alt: "Space HR AI HRMS platform demo video thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space HR Demo Video — AI HR Platform",
    description:
      "Watch how Space HR's AI chatbot, payroll auditor, and workforce analytics work. 2-minute overview.",
    images: ["https://spacehr.net/desktop-design-showcase.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Space HR AI HRMS Platform Demo — AI HR Chatbot, Payroll Auditor & Workforce Analytics",
  description:
    "A 2-minute product walkthrough of Space HR's AI-powered HRMS platform. Watch the AI HR chatbot handle employee self-service queries, the AI Payroll Auditor detect anomalies in real time, workforce cost forecasting in action, and the 360° performance appraisal module.",
  thumbnailUrl: [
    "https://spacehr.net/desktop-design-showcase.webp",
  ],
  uploadDate: "2026-01-15T08:00:00+00:00",
  duration: "PT2M30S",
  contentUrl: "https://spacehr.net/videos/space-hr-demo.mp4",
  embedUrl: "https://spacehr.net/demo",
  publisher: {
    "@type": "Organization",
    name: "Space HR",
    logo: {
      "@type": "ImageObject",
      url: "https://spacehr.net/hrlogonly.png",
    },
  },
  author: {
    "@type": "Organization",
    name: "Space HR",
    url: "https://spacehr.net",
  },
  keywords:
    "AI HR chatbot, employee self-service chatbot, HR payroll auditor, workforce analytics, HR automation",
  isFamilyFriendly: true,
  regionsAllowed: "US,AE,SG,CA,GB,IN",
};

const breadcrumbItems = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Demo", url: "https://spacehr.net/demo" },
];

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={videoSchema} />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbItems)} />

      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative pt-28 pb-12 bg-gradient-to-b from-indigo-50/60 to-white dark:from-indigo-900/10 dark:to-[#0b1121]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <li>
                  <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                    Home
                  </Link>
                </li>
                <li className="select-none">/</li>
                <li className="text-gray-800 dark:text-gray-200 font-medium">Demo</li>
              </ol>
            </nav>

            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-6 border border-indigo-200 dark:border-indigo-800">
                <PlayCircle className="w-4 h-4" /> Product Walkthrough
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                See Space HR in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                  Action
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A 2-minute walkthrough of the AI HR chatbot, payroll anomaly detection, workforce cost forecasting, and employee self-service — all in one platform.
              </p>
            </div>

            {/* What's covered badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                "AI HR Chatbot",
                "Payroll Auditor",
                "Cost Forecasting",
                "360° Appraisals",
                "Employee Self-Service",
                "Attrition Prediction",
              ].map((feature) => (
                <span
                  key={feature}
                  className="px-4 py-1.5 rounded-full bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 shadow-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* VIDEO — PRIMARY CONTENT */}
        <section className="pb-16 bg-white dark:bg-[#0b1121]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-black">
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                controls
                autoPlay={false}
                preload="metadata"
                className="w-full h-auto aspect-video"
                poster="/desktop-design-showcase.webp"
                aria-label="Space HR AI HRMS platform demo — AI HR chatbot, payroll auditor, workforce analytics in action"
              >
                <source src="/videos/space-hr-demo.mp4" type="video/mp4" />
                <p className="text-white p-4">
                  Your browser does not support the video tag.{" "}
                  <Link href="/request-a-demo" className="underline text-indigo-400">
                    Book a live demo instead.
                  </Link>
                </p>
              </video>
            </div>
            <div className="flex items-center justify-between mt-4 px-1">
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <Clock className="w-4 h-4" /> 2 min 30 sec
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No signup required to watch
              </p>
            </div>
          </div>
        </section>

        {/* WHAT YOU'LL SEE */}
        <section className="py-16 bg-gray-50 dark:bg-[#0f172a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
              What the Demo Covers
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "AI HR Chatbot in Action",
                  desc: "Watch an employee ask about their leave balance, request time off, and retrieve a payslip — all handled by the AI chatbot in under 10 seconds with no HR involvement.",
                  href: "/features/ai-chatbots",
                },
                {
                  title: "AI Payroll Auditor",
                  desc: "See how the payroll auditor scans a full payroll run, flags a FICA withholding anomaly in real time, and generates a corrective action report before payroll is processed.",
                  href: "/features/ai-payroll-auditor",
                },
                {
                  title: "Workforce Cost Forecasting",
                  desc: "A walkthrough of the 12-month labor cost prediction dashboard — headcount scenario modeling, budget vs. actual variance tracking, and overtime anomaly alerts.",
                  href: "/features/cost-prediction",
                },
                {
                  title: "360° Performance Appraisals",
                  desc: "See how managers, peers, and direct reports submit structured feedback, how AI generates a performance summary, and how goal alignment is tracked across teams.",
                  href: "/features/360-performance-appraisals",
                },
                {
                  title: "Employee Self-Service Portal",
                  desc: "Employees access payslips, update personal details, view benefits, and submit expense requests without contacting HR — from any device.",
                  href: "/features/employee-self-service",
                },
                {
                  title: "Attrition Risk Dashboard",
                  desc: "HR leaders see a live attrition risk score for every employee, with AI-recommended retention actions for flight-risk team members.",
                  href: "/features/attrition-prediction",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all"
                >
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* READY TO SEE MORE */}
        <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Users className="w-5 h-5 text-yellow-300" />
              <span className="font-semibold">Join 500+ companies using Space HR</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for a Live Walkthrough?
            </h2>
            <p className="text-xl text-indigo-100 mb-10">
              Book a personalized 30-minute demo with our team. We&apos;ll show you exactly how Space HR fits your HR workflow and answer every question.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-a-demo">
                <Button
                  size="lg"
                  className="rounded-full h-14 px-10 text-lg bg-white text-indigo-700 hover:bg-gray-100 font-bold"
                >
                  Book a Live Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/features">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-10 text-lg border-2 border-white text-white hover:bg-white/10 font-bold"
                >
                  Explore All Features
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* RELATED PAGES */}
        <section className="py-12 bg-white dark:bg-[#0b1121] border-t border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-6 text-center">
              Learn More About Space HR
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "AI HR Chatbot", href: "/features/ai-chatbots" },
                { label: "AI Payroll Auditor", href: "/features/ai-payroll-auditor" },
                { label: "Labor Cost Forecasting", href: "/features/cost-prediction" },
                { label: "Employee Self-Service", href: "/features/employee-self-service" },
                { label: "HR AI Concierge", href: "/features/hr-ai-concierge" },
                { label: "All Features", href: "/features" },
                { label: "Compare Alternatives", href: "/compare/bamboohr" },
                { label: "HR Software", href: "/hr-software" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
