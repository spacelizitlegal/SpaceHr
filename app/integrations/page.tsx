import { Metadata } from "next";
import Link from "next/link";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Camera,
  FileSignature,
  Globe,
  Network,
  Package,
  TrendingUp,
  UserCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SpaceHR Integrations — Connect HR with Your Entire Ecosystem",
  description:
    "SpaceHR integrates with PM Space AI, Space Sign, Space Capture, and more tools in the Space AI ecosystem. Eliminate data silos across HR, project management, and operations.",
  keywords: [
    "SpaceHR integrations",
    "HR integrations",
    "Space AI ecosystem",
    "PM Space AI",
    "HR software integrations",
    "workforce management integrations",
  ],
  openGraph: {
    title: "SpaceHR Integrations",
    description:
      "Connect SpaceHR with the full Space AI ecosystem — sync crew schedules, labor costs, and payroll across every tool your team uses.",
    type: "website",
    url: "https://spacehr.net/integrations",
    siteName: "SpaceHR",
  },
  alternates: {
    canonical: "https://spacehr.net/integrations",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpaceHR Integrations",
    description:
      "Connect SpaceHR with PM Space AI and the full Space AI ecosystem. No data silos.",
  },
};

const breadcrumb = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Integrations", url: "https://spacehr.net/integrations" },
];

const integrations = [
  {
    name: "PM Space AI",
    slug: "space-ai",
    description:
      "Sync crew schedules, labor cost forecasts, and processed payroll directly into project budgets. One workforce platform, zero data silos.",
    icon: BarChart3,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/10",
    badge: "Available",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    url: "/integrations/space-ai",
    isInternal: true,
  },
  {
    name: "Space Sign",
    slug: null,
    description:
      "Send offer letters, NDAs, and employment contracts for e-signature without leaving SpaceHR.",
    icon: FileSignature,
    iconColor: "text-violet-500",
    iconBg: "bg-violet-500/10",
    badge: "Coming Soon",
    badgeColor: "bg-slate-500/10 text-slate-400 border-slate-500/20",
    url: "https://space-sign.ai",
    isInternal: false,
  },
  {
    name: "Space Capture",
    slug: null,
    description:
      "Capture field data, timesheets, and site reports and sync them directly into HR records.",
    icon: Camera,
    iconColor: "text-cyan-500",
    iconBg: "bg-cyan-500/10",
    badge: "Coming Soon",
    badgeColor: "bg-slate-500/10 text-slate-400 border-slate-500/20",
    url: "https://spacecapture.ai",
    isInternal: false,
  },
  {
    name: "Space Lizit",
    slug: null,
    description:
      "Link vendor and procurement workflows with HR approvals and budget controls.",
    icon: Package,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-500/10",
    badge: "Coming Soon",
    badgeColor: "bg-slate-500/10 text-slate-400 border-slate-500/20",
    url: "https://spacelizit.com",
    isInternal: false,
  },
  {
    name: "Space Lean",
    slug: null,
    description:
      "Push lean process improvements and workforce efficiency metrics into HR dashboards.",
    icon: TrendingUp,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-500/10",
    badge: "Coming Soon",
    badgeColor: "bg-slate-500/10 text-slate-400 border-slate-500/20",
    url: "https://spacelean.ai",
    isInternal: false,
  },
  {
    name: "Space Nexus",
    slug: null,
    description:
      "Enterprise integration hub — connect SpaceHR with any tool in your stack via Space Nexus.",
    icon: Network,
    iconColor: "text-indigo-500",
    iconBg: "bg-indigo-500/10",
    badge: "Coming Soon",
    badgeColor: "bg-slate-500/10 text-slate-400 border-slate-500/20",
    url: "https://spacenexus.net",
    isInternal: false,
  },
  {
    name: "Space CRM",
    slug: null,
    description:
      "Align HR headcount and hiring plans with CRM pipeline data and revenue forecasts.",
    icon: UserCheck,
    iconColor: "text-pink-500",
    iconBg: "bg-pink-500/10",
    badge: "Coming Soon",
    badgeColor: "bg-slate-500/10 text-slate-400 border-slate-500/20",
    url: "https://spacecrm.net",
    isInternal: false,
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumb)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "SpaceHR Integrations",
          url: "https://spacehr.net/integrations",
          description:
            "Connect SpaceHR with the full Space AI ecosystem — PM Space AI, Space Sign, Space Capture, and more.",
          isPartOf: { "@type": "WebSite", url: "https://spacehr.net" },
        }}
      />

      <div className="flex flex-col min-h-screen font-sans bg-white dark:bg-[#0b1121]">
        {/* HERO */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-[#0b1121] via-slate-900 to-[#0b1121]">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-violet-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-indigo-500/10 rounded-full blur-3xl" />

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Space AI Ecosystem</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                SpaceHR{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
                  Integrations
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                SpaceHR connects with every tool in the Space AI ecosystem — keeping HR data, project budgets,
                and operations in sync automatically.
              </p>
            </div>
          </div>
        </section>

        {/* INTEGRATIONS GRID */}
        <section className="py-24 bg-white dark:bg-[#0b1121]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {integrations.map((integration) => {
                const Icon = integration.icon;
                const isAvailable = integration.badge === "Available";

                const card = (
                  <div className="group relative bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-blue-500/40 hover:shadow-xl transition-all duration-200 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl ${integration.iconBg} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${integration.iconColor}`} />
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${integration.badgeColor}`}>
                        {integration.badge}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {integration.name}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                      {integration.description}
                    </p>
                    {isAvailable && (
                      <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-blue-500 dark:text-blue-400">
                        <Zap className="w-4 h-4" />
                        <span>View Integration</span>
                        <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                    {!isAvailable && (
                      <div className="mt-6 flex items-center gap-1.5 text-sm text-gray-400">
                        <ArrowUpRight className="w-4 h-4" />
                        <span>Visit {integration.name}</span>
                      </div>
                    )}
                  </div>
                );

                if (isAvailable && integration.isInternal) {
                  return (
                    <Link key={integration.name} href={integration.url} className="flex">
                      {card}
                    </Link>
                  );
                }

                return (
                  <a
                    key={integration.name}
                    href={integration.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                  >
                    {card}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to connect your HR stack?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Book a demo to see SpaceHR integrations live — from crew scheduling to payroll-to-budget in one flow.
            </p>
            <Link href="/request-a-demo">
              <button className="inline-flex items-center gap-2 rounded-full h-14 px-10 text-base font-bold bg-gradient-to-r from-pink-500 via-violet-500 to-blue-600 hover:from-pink-600 hover:via-violet-600 hover:to-blue-700 text-white shadow-2xl transition-all">
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
