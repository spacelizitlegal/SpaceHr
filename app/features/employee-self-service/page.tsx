import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  User,
  CheckCircle,
  FileText,
  DollarSign,
  Target,
  Calendar,
  Bell,
  ArrowRight,
  Smartphone,
  Shield,
  Clock,
  Download,
  CreditCard,
  GraduationCap,
  MessageSquare,
  Settings,
  BarChart3,
  Wallet,
  Palmtree,
  Receipt,
  Award,
  BookOpen,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Employee Self-Service Portal Features | Space HR",
  description:
    "Employee self-service portal: payslip access, leave requests, attendance, and document downloads. Mobile-first with AI chatbot and role-based security.",
  keywords: [
    "employee self service portal features",
    "ESS portal features",
    "employee portal features",
    "self service hr portal features",
    "employee self service dashboard",
    "mobile employee self service",
    "payslip self service portal",
    "leave request self service",
    "employee document portal",
    "ESS mobile app",
    "employee self service ui",
    "employee portal capabilities",
  ],
  openGraph: {
    title: "Employee Self-Service Portal Features | Space HR",
    description:
      "Explore ESS portal capabilities: payslips, leave, attendance, documents, mobile UX, AI chatbot, and security.",
    url: "https://spacehr.net/features/employee-self-service",
    images: [
      {
        url: "/og-ess.png",
        width: 1200,
        height: 630,
        alt: "Space HR Employee Self-Service Portal Features",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Employee Self-Service Portal Features | Space HR",
    description:
      "ESS portal capabilities: payslips, leave, attendance, documents, mobile UX, and AI chatbot.",
    images: ["/og-ess.png"],
  },
  alternates: {
    canonical: "https://spacehr.net/features/employee-self-service",
  },
};

const _bc_ess = [{"name":"Home","url":"https://spacehr.net"},{"name":"Features","url":"https://spacehr.net/features"},{"name":"Employee Self-Service","url":"https://spacehr.net/features/employee-self-service"}];

export default function EmployeeSelfServicePage() {
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
              <User className="w-4 h-4" /> Portal Features
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Everything Employees Can Do
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">
                In One Portal.
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Explore the Space HR employee self-service interface: payslips,
              leave requests, attendance, documents, goals, AI chatbot, and
              role-based security — all designed for fast, intuitive use on
              desktop and mobile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request-a-demo">
                <Button
                  size="lg"
                  className="rounded-full h-14 px-8 text-lg cursor-pointer bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700"
                >
                  See ESS in Action
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-8 text-lg"
                >
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
              <Image
                src="/engineering-blueprint-review.webp"
                alt="Space HR employee self-service portal showing payslip access, leave requests, and HR document management for workforce autonomy"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent"></div>
            </div>
            {/* Floating Quick Actions Card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold mb-3">
                QUICK ACTIONS
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
                    Payslip
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-green-50 dark:bg-green-900/30">
                  <Palmtree className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-medium text-green-700 dark:text-green-300">
                    Leave
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-purple-50 dark:bg-purple-900/30">
                  <Target className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-medium text-purple-700 dark:text-purple-300">
                    Goals
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-orange-50 dark:bg-orange-900/30">
                  <Award className="w-4 h-4 text-orange-600" />
                  <span className="text-xs font-medium text-orange-700 dark:text-orange-300">
                    Review
                  </span>
                </div>
              </div>
            </div>
            {/* Floating Notification Card */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    Payslip Ready!
                  </p>
                  <p className="text-xs text-gray-500">December 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="py-16 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">70%</div>
              <div className="text-orange-100">Fewer HR Tickets</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-orange-100">Access Availability</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5min</div>
              <div className="text-orange-100">Avg. Task Completion</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-orange-100">Employee Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN FEATURES GRID */}
      <section id="features" className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything Employees Need, One Portal
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A unified experience for all employee self-service needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wallet,
                title: "Payslip Access",
                color: "blue",
                points: [
                  "View current & historical payslips",
                  "Download PDF copies",
                  "YTD earnings summary",
                  "Tax document access (W-2, etc.)",
                ],
              },
              {
                icon: Palmtree,
                title: "Leave Management",
                color: "green",
                points: [
                  "Check leave balances instantly",
                  "Submit time-off requests",
                  "Track approval status",
                  "View team calendar",
                ],
              },
              {
                icon: Target,
                title: "Goals & Performance",
                color: "purple",
                points: [
                  "Set personal goals",
                  "Track progress in real-time",
                  "View manager feedback",
                  "Access past appraisals",
                ],
              },
              {
                icon: GraduationCap,
                title: "Learning Center",
                color: "pink",
                points: [
                  "Browse assigned courses",
                  "Track learning progress",
                  "View certifications earned",
                  "Discover new training",
                ],
              },
              {
                icon: Receipt,
                title: "Expense Claims",
                color: "orange",
                points: [
                  "Submit reimbursement requests",
                  "Upload receipts instantly",
                  "Track claim status",
                  "View payment history",
                ],
              },
              {
                icon: User,
                title: "Profile Management",
                color: "teal",
                points: [
                  "Update personal information",
                  "Manage emergency contacts",
                  "Update bank details",
                  "Notification preferences",
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

      {/* MOBILE EXPERIENCE */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-semibold mb-6">
                <Smartphone className="w-4 h-4" /> Mobile-First Design
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                HR in Your Pocket
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Whether at home, commuting, or on vacation, employees can manage
                everything from their phone. Our responsive design ensures a
                seamless experience on any device.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Instant Notifications",
                    desc: "Real-time alerts for approvals, payslips, and deadlines",
                    icon: Bell,
                  },
                  {
                    title: "Quick Actions",
                    desc: "One-tap access to most common tasks",
                    icon: Zap,
                  },
                  {
                    title: "Secure Access",
                    desc: "Biometric login and encrypted connections",
                    icon: Shield,
                  },
                  {
                    title: "Works Anywhere",
                    desc: "Full functionality even on slow connections",
                    icon: Clock,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
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
            <div className="relative flex justify-center">
              <div className="relative">
                <Image
                  src="/team-meeting-collaboration.webp"
                  alt="Space HR mobile employee self-service app showing payslip viewing, leave balance, and HR AI concierge chatbot on smartphone interface"
                  width={400}
                  height={600}
                  className="rounded-3xl shadow-2xl"
                />
                {/* Floating App Features */}
                <div className="absolute -left-12 top-1/4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Leave Approved
                    </span>
                  </div>
                </div>
                <div className="absolute -right-8 top-1/2 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Payslip Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Personalized Employee Dashboard
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Every employee gets a customized home screen with relevant
              information
            </p>
          </div>

          <div className="bg-white dark:bg-[#1e293b] rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Welcome Card */}
                <div className="md:col-span-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    Welcome back, Sarah! 👋
                  </h3>
                  <p className="text-orange-100 mb-4">
                    Here&apos;s your overview for today
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/20 rounded-xl p-3 text-center">
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-xs text-orange-100">Leave Days</p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-3 text-center">
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-xs text-orange-100">Goals Active</p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-3 text-center">
                      <p className="text-2xl font-bold">2</p>
                      <p className="text-xs text-orange-100">Courses</p>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                    This Month
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        Attendance
                      </span>
                      <span className="font-bold text-green-600">98%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        Goals Progress
                      </span>
                      <span className="font-bold text-blue-600">75%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        Learning
                      </span>
                      <span className="font-bold text-purple-600">2/5</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Items */}
              <div className="mt-6 grid md:grid-cols-4 gap-4">
                {[
                  {
                    title: "View Latest Payslip",
                    icon: FileText,
                    color: "blue",
                  },
                  {
                    title: "Request Time Off",
                    icon: Calendar,
                    color: "green",
                  },
                  { title: "Update Goals", icon: Target, color: "purple" },
                  {
                    title: "Complete Training",
                    icon: BookOpen,
                    color: "pink",
                  },
                ].map((action, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg bg-${action.color}-100 dark:bg-${action.color}-900/30 flex items-center justify-center`}
                    >
                      <action.icon
                        className={`w-5 h-5 text-${action.color}-600 dark:text-${action.color}-400`}
                      />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white text-sm">
                      {action.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS FOR HR */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Benefits for HR Teams Too
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Self-service doesn&apos;t just help employees—it transforms HR
              operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Reduce Administrative Burden",
                desc: "Employees handle routine tasks themselves, freeing HR for strategic work",
                stat: "70%",
                statLabel: "Less HR tickets",
                icon: BarChart3,
              },
              {
                title: "Ensure Data Accuracy",
                desc: "Employees update their own information, reducing errors and outdated records",
                stat: "99%",
                statLabel: "Data accuracy",
                icon: Shield,
              },
              {
                title: "Improve Compliance",
                desc: "Audit trails for all self-service actions with automated policy enforcement",
                stat: "100%",
                statLabel: "Compliant",
                icon: CheckCircle,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800"
              >
                <div className="w-14 h-14 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {item.desc}
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-orange-600">
                    {item.stat}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 pb-1">
                    {item.statLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS & COMPARISONS */}
      <section className="py-12 bg-white dark:bg-[#0b1121] border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Explore Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Employee Self-Service", href: "/solutions/employee-self-service" },
              { label: "For Employees", href: "/solutions/employees" },
              { label: "HR Admin", href: "/solutions/hr-admin" },
              { label: "For CEOs", href: "/solutions/ceo" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-[#1e293b] rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-orange-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
                {label}
              </Link>
            ))}
          </div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Compare with Competitors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "vs BambooHR", href: "/compare/bamboohr" },
              { label: "vs Workday", href: "/compare/workday" },
              { label: "vs Rippling", href: "/compare/rippling" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-[#1e293b] rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-orange-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Empower Your Employees?
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Give your workforce the self-service experience they expect. Reduce
            HR burden while increasing employee satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="rounded-full h-14 px-10 text-lg bg-white text-orange-700 hover:bg-gray-100 font-semibold"
              >
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/features">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-10 text-lg border-white/30 text-white hover:bg-white/10"
              >
                See All Features
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
