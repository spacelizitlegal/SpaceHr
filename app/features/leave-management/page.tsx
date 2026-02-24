import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  Calendar,
  Palmtree,
  CheckCircle,
  Clock,
  Users,
  BarChart3,
  Bell,
  ArrowRight,
  CalendarDays,
  FileText,
  Shield,
  TrendingUp,
  Zap,
  AlertCircle,
  CalendarCheck,
  Timer,
  UserCheck,
  Building2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leave Management System: Automated PTO Tracking | Space HR",
  description:
    "Simplify PTO and absence tracking with automated approval workflows. Get real-time visibility into vacation balances with direct payroll synchronization",
  keywords: [
    "leave management system",
    "PTO tracking software",
    "absence management",
    "vacation tracking system",
    "sick leave management",
    "employee leave balance",
    "leave approval workflow",
    "time off request software",
    "HR leave management",
    "automated leave tracking",
    "leave policy management",
    "absence analytics",
    "leave calendar software",
    "employee time off management",
  ],
  openGraph: {
    title: "Leave Management System | Space HR",
    description:
      "Automated PTO tracking with approval workflows and payroll integration.",
    url: "https://spacehr.net/features/leave-management",
    images: [
      {
        url: "/og-leave.png",
        width: 1200,
        height: 630,
        alt: "Space HR Leave Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leave Management System | Space HR",
    description:
      "Streamline leave requests with automated approvals and real-time balance tracking.",
    images: ["/og-leave.png"],
  },
  alternates: {
    canonical: "https://spacehr.net/features/leave-management",
  },
};

export default function LeaveManagementPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-semibold mb-6">
              <Palmtree className="w-4 h-4" /> Smart Leave Management
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Leave Requests.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                Simplified & Automated.
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Eliminate email chains and spreadsheet chaos. Employees request
              time off in seconds, managers approve with one click, and balances
              update automatically—all synced with your payroll.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request-a-demo">
                <Button
                  size="lg"
                  className="rounded-full h-14 px-8 text-lg cursor-pointer bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                >
                  Automate Leave Today
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-8 text-lg"
                >
                  See Features
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
              <Image
                src="/team-meeting-collaboration.webp"
                alt="Beach vacation representing time off"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
            </div>
            {/* Floating Leave Balance Card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold mb-2">
                LEAVE BALANCE
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-emerald-600">12</p>
                  <p className="text-xs text-gray-500">Vacation</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">5</p>
                  <p className="text-xs text-gray-500">Sick</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">3</p>
                  <p className="text-xs text-gray-500">Personal</p>
                </div>
              </div>
            </div>
            {/* Floating Approval Card */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold text-sm">Approved!</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Dec 23-27, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* LEAVE TYPES SHOWCASE */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Support for Every Leave Type
            </h2>
            <p className="text-emerald-100">
              Configure unlimited leave categories to match your company policy
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Vacation", icon: Palmtree, color: "bg-yellow-400" },
              { name: "Sick Leave", icon: AlertCircle, color: "bg-red-400" },
              { name: "Personal", icon: UserCheck, color: "bg-purple-400" },
              { name: "Parental", icon: Users, color: "bg-pink-400" },
              { name: "Bereavement", icon: Calendar, color: "bg-gray-400" },
              { name: "Jury Duty", icon: Building2, color: "bg-blue-400" },
            ].map((type, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div
                  className={`w-10 h-10 ${type.color} rounded-lg flex items-center justify-center mx-auto mb-3`}
                >
                  <type.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-white font-semibold text-sm">{type.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section id="features" className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Leave Management Suite
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to manage time off efficiently
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CalendarCheck,
                title: "Easy Request Submission",
                color: "emerald",
                points: [
                  "Submit requests in under 30 seconds",
                  "Select leave type and dates",
                  "Add notes for context",
                  "View real-time balance before submitting",
                ],
              },
              {
                icon: UserCheck,
                title: "Multi-Level Approvals",
                color: "blue",
                points: [
                  "Supervisor → Manager → HR workflow",
                  "One-click approve/reject",
                  "Bulk approval for efficiency",
                  "Automatic escalation rules",
                ],
              },
              {
                icon: BarChart3,
                title: "Balance Tracking",
                color: "purple",
                points: [
                  "Real-time balance updates",
                  "Accrual tracking by policy",
                  "Carryover management",
                  "Year-end balance reports",
                ],
              },
              {
                icon: Calendar,
                title: "Team Calendar View",
                color: "orange",
                points: [
                  "Visual team availability",
                  "Conflict detection",
                  "Department-wise views",
                  "Holiday calendar integration",
                ],
              },
              {
                icon: Bell,
                title: "Smart Notifications",
                color: "pink",
                points: [
                  "Request status updates",
                  "Approval reminders",
                  "Balance low alerts",
                  "Upcoming leave notifications",
                ],
              },
              {
                icon: Zap,
                title: "Payroll Integration",
                color: "teal",
                points: [
                  "Auto LOP calculation",
                  "Leave encashment processing",
                  "Accurate pay adjustments",
                  "Zero manual reconciliation",
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

      {/* WORKFLOW SECTION */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
                <Image
                  src="/desktop-design-showcase.webp"
                  alt="Manager approving leave request"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              {/* Workflow Steps Floating */}
              <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 max-w-xs">
                <p className="text-sm font-bold text-gray-900 dark:text-white mb-4">
                  Approval Flow
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Supervisor Approved
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      HR Approved
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                      <Palmtree className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-emerald-600">
                      Leave Confirmed!
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Streamlined Approval Workflows
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Configure multi-level approval chains that match your
                organization structure. Requests flow automatically through the
                right approvers.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Configurable Approval Chains",
                    desc: "Set up supervisor → manager → HR flows or any custom hierarchy",
                  },
                  {
                    title: "Auto-Escalation Rules",
                    desc: "Pending requests automatically escalate after defined time periods",
                  },
                  {
                    title: "Delegation Support",
                    desc: "Managers can delegate approval authority when they're away",
                  },
                  {
                    title: "Mobile Approvals",
                    desc: "Approve or reject requests from anywhere via mobile app",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POLICY MANAGEMENT */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Flexible Leave Policies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Configure policies that match your company&apos;s unique
              requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Accrual Rules",
                desc: "Monthly, quarterly, or annual accrual with custom rates per tenure",
                icon: TrendingUp,
              },
              {
                title: "Carryover Limits",
                desc: "Set maximum days that roll over to next year with use-it-or-lose-it options",
                icon: Calendar,
              },
              {
                title: "Blackout Periods",
                desc: "Block leave requests during critical business periods",
                icon: Shield,
              },
              {
                title: "Minimum Notice",
                desc: "Require advance notice for planned absences by leave type",
                icon: Clock,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
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
      <section className="py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Take the Hassle Out of Leave
          </h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Your team deserves a modern leave experience. Give them self-service
            requests, instant balance visibility, and mobile approvals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="rounded-full h-14 px-10 text-lg bg-white text-emerald-700 hover:bg-gray-100 font-semibold"
              >
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/features">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-10 text-lg border-white/30 text-white hover:bg-white/10"
              >
                Explore Platform
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
