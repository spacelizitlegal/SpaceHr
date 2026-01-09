import { Button } from "@/components/ui/Button";
import { Check, ArrowLeft, BarChart3, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Workflow Automation | Automated HR Processes & Approvals",
  description:
    "Automate HR workflows with AI: onboarding sequences, approval chains, reminder systems, and engagement campaigns. Eliminate manual tasks.",
  keywords: [
    "AI workflow automation",
    "HR process automation",
    "automated approvals",
    "onboarding automation",
    "AI workflow engine",
    "HR task automation",
    "automated reminders",
    "engagement automation",
    "HR efficiency tools",
    "intelligent automation",
  ],
  openGraph: {
    title: "AI Workflow Automation | Space HR",
    description:
      "Automate HR workflows: onboarding, approvals, reminders, and engagement campaigns.",
    images: ["/og-automation.png"],
  },
};

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      {/* HEADER */}
      <div className="pt-24 px-6 container mx-auto">
        <Link
          href="/features"
          className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Features
        </Link>
      </div>

      {/* HERO SECTION */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-semibold mb-6">
              <BarChart3 className="w-4 h-4" /> Workflow Automation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Automate Engagement.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Scale Your Culture.
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Treat your employees like customers. Use AI to deliver
              personalized internal communication campaigns, automated
              onboarding journeys, and culture-building workflows.
            </p>
            <Button
              size="lg"
              className="rounded-full h-14 px-8 text-lg cursor-pointer"
            >
              Automate Your Workflows
            </Button>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-gray-900">
              <Image
                src="/images/features/ai-marketing.png"
                alt="AI Marketing Automation"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              {/* Overlay Stats */}
              <div className="absolute top-6 left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border-l-4 border-orange-500 animate-in fade-in slide-in-from-left duration-700">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">
                      Employee Engagement
                    </p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">
                      +24% vs Last Month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">
            Internal Marketing on Autopilot
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Nudges",
                desc: "Automatically reminds managers to schedule 1:1s or celebrate work anniversaries.",
              },
              {
                title: "Onboarding Autopilot",
                desc: "Drip-feed training content and welcome messages to new hires based on their engagement pace.",
              },
              {
                title: "Sentiment Analysis",
                desc: "Analyze organizational mood through survey responses and proactively suggest engagement campaigns.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#1e293b] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
