import { Metadata } from "next";
import Link from "next/link";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Calendar,
  Camera,
  CheckCircle,
  DollarSign,
  FileSignature,
  Globe,
  Network,
  Package,
  TrendingUp,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SpaceHRCard } from "@/components/SpaceHRCard";

export const metadata: Metadata = {
  title: "SpaceHR × PM Space AI Integration — Crew Scheduling & Labor Cost Sync",
  description:
    "Connect SpaceHR with PM Space AI to sync crew schedules, labor costs, and payroll data directly into project budgets. One workforce platform, zero data silos.",
  keywords: [
    "SpaceHR integration",
    "PM Space AI",
    "crew scheduling",
    "labor cost sync",
    "payroll project budget",
    "HR project management integration",
    "Space AI ecosystem",
    "workforce management",
  ],
  openGraph: {
    title: "SpaceHR × PM Space AI Integration",
    description:
      "Sync crew schedules, labor costs, and payroll data between SpaceHR and PM Space AI — eliminating double-entry and giving project managers real-time budget visibility.",
    type: "website",
    url: "https://spacehr.net/integrations/space-ai",
    siteName: "SpaceHR",
  },
  alternates: {
    canonical: "https://spacehr.net/integrations/space-ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpaceHR × PM Space AI Integration",
    description:
      "Crew scheduling, labor cost sync, and payroll → project budget — all connected across the Space AI ecosystem.",
  },
};

const breadcrumb = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Integrations", url: "https://spacehr.net/integrations" },
  { name: "PM Space AI", url: "https://spacehr.net/integrations/space-ai" },
];

const integrationPoints = [
  {
    icon: Calendar,
    title: "Crew Scheduling Sync",
    description:
      "Shift assignments created in SpaceHR automatically populate project timelines in PM Space AI. When an employee is assigned to a project task, their availability windows, approved leave, and overtime restrictions are respected in real time.",
    benefit: "Eliminate scheduling conflicts across HR and project teams",
    iconColor: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: DollarSign,
    title: "Labor Cost Sync",
    description:
      "SpaceHR's 12-month labor cost forecasts — including base salary, benefits burden, and overtime estimates — feed directly into PM Space AI project budgets. Project managers see true labor cost, not just headcount.",
    benefit: "Real-time budget-vs-actual labor cost tracking per project",
    iconColor: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: BarChart3,
    title: "Payroll → Project Budget",
    description:
      "Once payroll is processed in SpaceHR, actual gross wages are pushed to PM Space AI as committed costs against the relevant project codes. Finance and project managers share a single source of truth without manual reconciliation.",
    benefit: "Automated cost accounting — no spreadsheets, no manual exports",
    iconColor: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    icon: Users,
    title: "Headcount & Org Chart",
    description:
      "Employee roles, departments, and reporting lines maintained in SpaceHR are mirrored in PM Space AI's resource pool. Onboarding a new hire in HR makes them immediately available for project assignment.",
    benefit: "One master directory for both HR and project resource planning",
    iconColor: "text-pink-500",
    bg: "bg-pink-500/10",
  },
];

const ecosystemProducts = [
  { name: "PM Space AI",  url: "https://pmspace.ai",     description: "AI project & crew management",   icon: BarChart3,       iconColor: "text-blue-500",    iconBg: "bg-blue-500/10"    },
  { name: "Space Sign",   url: "https://space-sign.ai",  description: "E-signature & contracts",        icon: FileSignature,   iconColor: "text-violet-500",  iconBg: "bg-violet-500/10"  },
  { name: "Space Capture",url: "https://spacecapture.ai",description: "Field data capture",             icon: Camera,          iconColor: "text-cyan-500",    iconBg: "bg-cyan-500/10"    },
  { name: "Space Lizit",  url: "https://spacelizit.com", description: "Procurement & vendors",          icon: Package,         iconColor: "text-orange-500",  iconBg: "bg-orange-500/10"  },
  { name: "Space Lean",   url: "https://spacelean.ai",   description: "Lean process optimisation",      icon: TrendingUp,      iconColor: "text-emerald-500", iconBg: "bg-emerald-500/10" },
  { name: "Space Nexus",  url: "https://spacenexus.net", description: "Enterprise integration hub",     icon: Network,         iconColor: "text-indigo-500",  iconBg: "bg-indigo-500/10"  },
  { name: "Space CRM",    url: "https://spacecrm.net",   description: "Customer relationship mgmt",     icon: UserCheck,       iconColor: "text-pink-500",    iconBg: "bg-pink-500/10"    },
];

export default function SpaceAIIntegrationPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumb)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "SpaceHR × PM Space AI Integration",
          url: "https://spacehr.net/integrations/space-ai",
          description:
            "Connect SpaceHR with PM Space AI to sync crew schedules, labor costs, and payroll data into project budgets.",
          isPartOf: { "@type": "WebSite", url: "https://spacehr.net" },
          about: [
            { "@type": "SoftwareApplication", name: "Space HR", url: "https://spacehr.net" },
            { "@type": "SoftwareApplication", name: "PM Space AI", url: "https://pmspace.ai" },
          ],
        }}
      />

      <div className="flex flex-col min-h-screen font-sans bg-white dark:bg-[#0b1121]">
        {/* HERO */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-[#0b1121] via-slate-900 to-[#0b1121]">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-violet-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-indigo-500/10 rounded-full blur-3xl" />

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Space AI Ecosystem Integration</span>
              </div>

              {/* Logo lockup */}
              <div className="flex items-center justify-center gap-6 mb-10">
                <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                    Space HR
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <div className="w-8 h-px bg-blue-400/50" />
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <div className="w-8 h-px bg-blue-400/50" />
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                </div>
                <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4">
                  <a
                    href="https://pmspace.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                  >
                    PM Space AI
                  </a>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                HR and Project Management,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
                  Finally Connected
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                SpaceHR and PM Space AI are built by the same team at Space AI. Connect them to sync crew schedules,
                labor cost forecasts, and processed payroll directly into project budgets — eliminating data silos
                between HR and operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/request-a-demo">
                  <Button className="rounded-full h-14 px-10 text-base font-bold bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white border-0 shadow-xl">
                    See It in Action
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a
                  href="https://pmspace.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="rounded-full h-14 px-10 text-base font-bold border-2 border-white/20 text-white hover:bg-white/10 transition-all"
                  >
                    Visit PM Space AI
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 bg-white dark:bg-[#0b1121]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Four Ways SpaceHR Connects with PM Space AI
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Data flows both ways so HR and project teams always work from the same numbers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {integrationPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.title}
                    className="bg-white dark:bg-[#111827] border border-gray-100 dark:border-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className={`w-12 h-12 rounded-xl ${point.bg} flex items-center justify-center mb-5`}>
                      <Icon className={`w-6 h-6 ${point.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{point.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{point.description}</p>
                    <div className="flex items-start gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{point.benefit}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FLOW DIAGRAM (text-based) */}
        <section className="py-20 bg-gray-50 dark:bg-[#111827]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                The Data Flow
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                From HR action to project budget — automatically.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { step: "1", from: "SpaceHR", action: "Employee onboarded & assigned to department", to: "PM Space AI", result: "Added to resource pool with role & cost rate" },
                { step: "2", from: "PM Space AI", action: "Project manager assigns crew to task", to: "SpaceHR", result: "Shift created, leave & overtime rules applied" },
                { step: "3", from: "SpaceHR", action: "Labor cost forecast generated (12 months)", to: "PM Space AI", result: "Project budget updated with forecast labor spend" },
                { step: "4", from: "SpaceHR", action: "Payroll processed & gross wages finalized", to: "PM Space AI", result: "Actual costs committed against project codes" },
              ].map((row) => (
                <div
                  key={row.step}
                  className="flex items-start gap-4 bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                    {row.step}
                  </div>
                  <div className="flex-1 grid sm:grid-cols-3 gap-3 text-sm">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">From {row.from}</p>
                      <p className="text-gray-800 dark:text-gray-200 font-medium">{row.action}</p>
                    </div>
                    <div className="hidden sm:flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">In {row.to}</p>
                      <p className="text-gray-800 dark:text-gray-200 font-medium">{row.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ECOSYSTEM SECTION */}
        <section className="py-24 bg-white dark:bg-[#0b1121]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Part of the Space AI Ecosystem
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                SpaceHR and PM Space AI are two products in the broader Space AI suite — all built and maintained by the same team.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

              {/* Sister products — PM Space AI first */}
              {ecosystemProducts.map((product) => {
                const Icon = product.icon;
                return (
                  <a
                    key={product.name}
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-blue-500/30 hover:shadow-lg hover:scale-105 active:scale-95 active:rotate-[1.7deg] transition-all duration-200"
                  >
                    <div className={`w-10 h-10 rounded-xl ${product.iconBg} flex items-center justify-center mb-3`}>
                      <Icon className={`w-5 h-5 ${product.iconColor}`} />
                    </div>
                    <div className="flex items-start justify-between mb-1">
                      <p className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm">
                        {product.name}
                      </p>
                      <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-0.5" />
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{product.description}</p>
                  </a>
                );
              })}

              {/* Space HR — "You are here" card with hover glow + beam */}
              <SpaceHRCard />

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to connect HR with project management?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Book a demo to see the SpaceHR × PM Space AI integration live — crew scheduling, labor cost sync, and
              payroll-to-budget in one flow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-a-demo">
                <Button className="rounded-full h-14 px-10 text-base font-bold bg-gradient-to-r from-pink-500 via-violet-500 to-blue-600 hover:from-pink-600 hover:via-violet-600 hover:to-blue-700 text-white border-0 shadow-2xl">
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="https://pmspace.ai" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="rounded-full h-14 px-10 text-base font-bold border-2 border-white/20 text-white hover:bg-white/10 transition-all"
                >
                  Explore PM Space AI
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
