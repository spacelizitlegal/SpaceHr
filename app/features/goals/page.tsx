import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  Target,
  CheckCircle,
  TrendingUp,
  Users,
  BarChart3,
  ArrowRight,
  Flag,
  Calendar,
  Award,
  Zap,
  Brain,
  Rocket,
  LineChart,
  Timer,
  Sparkles,
  ChevronRight,
  Trophy,
  Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Goal Management & OKR Software: Align Teams | Space HR",
  description:
    "Align your team with AI-powered OKR management. Cascade company objectives to individuals and track real-time progress toward your most strategic goals.",
  keywords: [
    "goal management software",
    "OKR software",
    "objectives key results",
    "performance goals tracking",
    "employee goal setting",
    "strategic alignment software",
    "goal tracking system",
    "team objectives management",
    "KPI tracking software",
    "goal cascading",
    "performance management goals",
    "smart goals software",
    "goal progress tracking",
    "organizational goal alignment",
  ],
  openGraph: {
    title: "Goal Management & OKRs | Space HR",
    description:
      "AI-powered goal tracking with OKR frameworks and strategic alignment.",
    url: "https://spacehr.net/features/goals",
    images: [
      {
        url: "/og-goals.png",
        width: 1200,
        height: 630,
        alt: "Space HR Goal Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goal Management & OKRs | Space HR",
    description:
      "Set and track goals with AI-powered progress insights and team alignment.",
    images: ["/og-goals.png"],
  },
  alternates: {
    canonical: "https://spacehr.net/features/goals",
  },
};

export default function GoalsPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-semibold mb-6">
              <Target className="w-4 h-4" /> Goal & OKR Management
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Set Goals.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">
                Achieve Greatness.
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Transform aspirations into achievements. Our goal management
              system cascades objectives from company vision to individual
              action—with AI-powered tracking that keeps everyone aligned and
              accountable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request-a-demo">
                <Button
                  size="lg"
                  className="rounded-full h-14 px-8 text-lg cursor-pointer bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700"
                >
                  Start Setting Goals
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-8 text-lg"
                >
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
              <Image
                src="/desktop-design-showcase.webp"
                alt="Space HR OKR and goal management platform showing team objectives, key results tracking, and asynchronous team alignment for distributed workforces"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 to-transparent"></div>
            </div>
            {/* Floating Progress Card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold mb-3">
                Q4 GOAL PROGRESS
              </p>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 dark:text-gray-300">
                      Revenue Target
                    </span>
                    <span className="font-bold text-violet-600">87%</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
                      style={{ width: "87%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 dark:text-gray-300">
                      Customer NPS
                    </span>
                    <span className="font-bold text-green-600">92%</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Achievement Card */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">
                    Goal Achieved!
                  </p>
                  <p className="text-xs text-gray-500">+15 XP earned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OKR FRAMEWORK SHOWCASE */}
      <section className="py-20 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              OKR Framework Built-In
            </h2>
            <p className="text-violet-100 max-w-2xl mx-auto">
              Cascade objectives from company-wide initiatives to individual key
              results
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Company Objectives
              </h3>
              <p className="text-violet-100">
                Define top-level strategic objectives that guide the entire
                organization
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Team Goals</h3>
              <p className="text-violet-100">
                Departments align their goals with company objectives
                automatically
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Individual Key Results
              </h3>
              <p className="text-violet-100">
                Every employee has clear, measurable targets tied to team goals
              </p>
            </div>
          </div>
          {/* Alignment Visualization */}
          <div className="mt-12 flex justify-center items-center gap-4 text-white/60">
            <span className="text-sm">Company</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-sm">Department</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-sm">Team</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-sm">Individual</span>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section id="features" className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Goal Management Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to drive performance through goals
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "SMART Goal Builder",
                color: "violet",
                points: [
                  "Guided goal creation wizard",
                  "Specific, Measurable, Achievable prompts",
                  "Due date and milestone setting",
                  "Priority level assignment",
                ],
              },
              {
                icon: LineChart,
                title: "Progress Tracking",
                color: "blue",
                points: [
                  "Visual progress indicators",
                  "Check-in reminders",
                  "Milestone celebrations",
                  "Historical trend analysis",
                ],
              },
              {
                icon: Users,
                title: "Team Alignment",
                color: "green",
                points: [
                  "Goal cascading from top-down",
                  "Cross-team dependencies",
                  "Alignment score metrics",
                  "Collaboration on shared goals",
                ],
              },
              {
                icon: Brain,
                title: "AI-Powered Insights",
                color: "purple",
                points: [
                  "At-risk goal predictions",
                  "Coaching suggestions",
                  "Resource allocation hints",
                  "Performance trend analysis",
                ],
              },
              {
                icon: Award,
                title: "Appraisal Integration",
                color: "orange",
                points: [
                  "Goals feed into reviews",
                  "Achievement history tracking",
                  "Rollover incomplete goals",
                  "Performance correlation",
                ],
              },
              {
                icon: Sparkles,
                title: "Recognition & Rewards",
                color: "pink",
                points: [
                  "Goal completion badges",
                  "Team leaderboards",
                  "Achievement notifications",
                  "Manager kudos integration",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#1e293b] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-${item.color}-100 dark:bg-${item.color}-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <item.icon
                    className={`w-7 h-7 text-${item.color}-600 dark:text-${item.color}-400`}
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOAL TYPES SECTION */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Support for All Goal Types
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Whether it&apos;s short-term projects or long-term career
                aspirations, our system handles it all with flexible goal
                categorization.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    title: "Current Goals",
                    desc: "Active objectives for this review cycle",
                    icon: Flag,
                    color: "violet",
                  },
                  {
                    title: "Future Goals",
                    desc: "Planned objectives for upcoming periods",
                    icon: Rocket,
                    color: "blue",
                  },
                  {
                    title: "Development Goals",
                    desc: "Skill-building and learning objectives",
                    icon: TrendingUp,
                    color: "green",
                  },
                  {
                    title: "Stretch Goals",
                    desc: "Ambitious targets that push boundaries",
                    icon: Star,
                    color: "orange",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 dark:bg-[#1e293b] p-5 rounded-xl border border-gray-100 dark:border-gray-800"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg bg-${item.color}-100 dark:bg-${item.color}-900/30 flex items-center justify-center mb-3`}
                    >
                      <item.icon
                        className={`w-5 h-5 text-${item.color}-600 dark:text-${item.color}-400`}
                      />
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/professional-woman-laptop.webp"
                  alt="Distributed team collaborating on OKR goal tracking in Space HR with asynchronous team alignment features for remote and hybrid workforces"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              {/* Goal Status Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-violet-600">12</p>
                    <p className="text-xs text-gray-500">In Progress</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">8</p>
                    <p className="text-xs text-gray-500">Completed</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-600">3</p>
                    <p className="text-xs text-gray-500">At Risk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE/CYCLE MANAGEMENT */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Flexible Goal Cycles
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Align goal periods with your business rhythm
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                period: "Annual",
                desc: "Long-term strategic objectives aligned with fiscal year",
                icon: Calendar,
              },
              {
                period: "Quarterly",
                desc: "OKR-style cycles for agile goal management",
                icon: BarChart3,
              },
              {
                period: "Monthly",
                desc: "Short-term sprints for fast-moving teams",
                icon: Timer,
              },
              {
                period: "Custom",
                desc: "Project-based or event-driven goal periods",
                icon: Zap,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 text-center hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.period}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-semibold">
              Companies using Space HR achieve 40% more goals
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Turn Strategy Into Action
          </h2>
          <p className="text-xl text-violet-100 mb-10 max-w-2xl mx-auto">
            Stop letting goals gather dust in spreadsheets. Give your team a
            system that drives accountability and celebrates achievement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="rounded-full h-14 px-10 text-lg bg-white text-violet-700 hover:bg-gray-100 font-semibold"
              >
                Start Goal Tracking <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/features/appraisals">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-10 text-lg border-white/30 text-white hover:bg-white/10"
              >
                See Appraisal Integration
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
