import { Button } from "@/components/ui/Button";
import {
  Check,
  ArrowLeft,
  Clock,
  Calendar,
  MapPin,
  Users,
  BarChart3,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Smartphone,
  Shield,
  Zap,
  ArrowRight,
  Timer,
  CalendarDays,
  FileText,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  JsonLd,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "GPS Time Tracking & Geofenced Attendance Software | Space HR",
  description:
    "Streamline workforce tracking with GPS time tracking, geofenced attendance verification, and real-time check-ins. Prevent overtime issues with AI alerts and seamless payroll integration.",
  keywords: [
    "GPS time tracking",
    "geofenced attendance",
    "employee attendance tracking",
    "time tracking software",
    "workforce attendance management",
    "real-time attendance monitoring",
    "GPS attendance tracking",
    "biometric attendance system",
    "attendance payroll integration",
    "overtime tracking software",
    "employee time management",
    "attendance analytics",
    "clock in clock out software",
    "remote attendance tracking",
    "attendance compliance",
    "labor time tracking",
  ],
  openGraph: {
    title: "Attendance & Time Tracking | Space HR",
    description:
      "Real-time attendance tracking with GPS verification and payroll integration.",
    url: "https://spacehr.net/features/attendance",
    images: [
      {
        url: "/og-attendance.png",
        width: 1200,
        height: 630,
        alt: "Space HR Attendance Tracking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Attendance & Time Tracking | Space HR",
    description:
      "AI-powered attendance management with real-time monitoring and analytics.",
    images: ["/og-attendance.png"],
  },
  alternates: {
    canonical: "https://spacehr.net/features/attendance",
  },
};

const faqs = [
  {
    question: "What is geofenced attendance and how does it work?",
    answer:
      "Geofenced attendance uses GPS technology to draw virtual geographic boundaries around your office, job sites, or client locations. When an employee enters or exits the defined geofence, the system automatically records their clock-in or clock-out. Space HR supports multiple geofences for different locations, real-time alerts when employees are outside the expected zone, and historical location logs for payroll verification.",
  },
  {
    question: "How does GPS time tracking differ from traditional time clocks?",
    answer:
      "Traditional time clocks require employees to be at a fixed physical location to punch in. GPS time tracking works from any device — mobile, tablet, or desktop — and records not just the timestamp but the precise geographic coordinates. This is essential for field workers, construction crews, and distributed teams. Space HR's GPS time tracking also prevents buddy-punching and provides location-verified timesheets for payroll and compliance purposes.",
  },
  {
    question: "Can I track attendance for remote and hybrid workers?",
    answer:
      "Yes. Space HR supports multiple attendance modes: GPS-verified mobile check-in for field staff, IP-based verification for remote workers (ensuring they're on a trusted home or VPN network), and geofenced automatic check-in for office workers. Hybrid teams can mix and match these modes based on their work arrangements. All data flows seamlessly into payroll for accurate gross-to-net calculations.",
  },
  {
    question: "How does attendance data integrate with payroll?",
    answer:
      "Space HR creates a direct integration between attendance and payroll. Every approved timesheet — including regular hours, overtime, and leave — automatically feeds into the payroll engine. The AI payroll auditor then verifies all hours against contracted terms before processing, flagging discrepancies. This eliminates manual data re-entry and ensures the liability ledger accurately reflects all accrued wages.",
  },
  {
    question: "Does Space HR support overtime monitoring and alerts?",
    answer:
      "Yes. Space HR monitors overtime in real-time and sends alerts to managers when employees approach overtime thresholds. You can configure custom rules by jurisdiction (FLSA daily/weekly OT, state-specific rules) and cost center. The system also projects the financial impact of overtime on your labor budget before payroll is run.",
  },
  {
    question: "What compliance reports does the attendance system generate?",
    answer:
      "Space HR generates FLSA-compliant time records, state labor law reports, and audit-ready attendance logs with GPS coordinates. You can export department-level reports, individual timesheets, and exception reports (late arrivals, early departures, missed check-ins) for payroll audits and labor disputes.",
  },
];

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "Features", url: "https://spacehr.net/features" },
  {
    name: "Attendance & Time Tracking",
    url: "https://spacehr.net/features/attendance",
  },
]);

export default function AttendancePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={generateFAQSchema(faqs)} />
      <JsonLd data={breadcrumb} />
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-semibold mb-6">
              <Clock className="w-4 h-4" /> GPS Time Tracking & Geofenced
              Attendance
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              GPS Time Tracking.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Geofenced Attendance.
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Say goodbye to manual timesheets. Space HR&apos;s intelligent
              <strong> GPS time tracking</strong> captures every clock-in with
              location verification, enforces{" "}
              <strong>geofenced attendance</strong> for office and field teams,
              and syncs seamlessly with payroll—giving you complete, audit-ready
              workforce visibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request-a-demo">
                <Button
                  size="lg"
                  className="rounded-full h-14 px-8 text-lg cursor-pointer"
                >
                  Start Tracking Smarter
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
                alt="Space HR GPS time tracking dashboard showing geofenced attendance verification with real-time employee location data for office and field teams"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 to-transparent"></div>
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    99.9%
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Accuracy Rate
                  </p>
                </div>
              </div>
            </div>
            {/* Floating Time Card */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5 text-cyan-600" />
                <span className="font-mono font-bold text-gray-900 dark:text-white">
                  09:00 AM
                </span>
              </div>
              <p className="text-xs text-green-600 font-semibold mt-1">
                ✓ Checked In
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="py-12 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">85%</div>
              <div className="text-cyan-100">Reduction in Time Theft</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">3hrs</div>
              <div className="text-cyan-100">Saved Weekly per Manager</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-cyan-100">Payroll Accuracy</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                Real-time
              </div>
              <div className="text-cyan-100">Attendance Visibility</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section id="features" className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Attendance Intelligence
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Every feature you need to manage workforce time effectively
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "One-Click Check-In/Out",
                color: "cyan",
                points: [
                  "Instant clock-in from any device",
                  "Automatic timestamp capture",
                  "Break time tracking",
                  "Shift-based recording",
                ],
              },
              {
                icon: MapPin,
                title: "Location Verification",
                color: "blue",
                points: [
                  "GPS-based attendance capture",
                  "Geofencing for office locations",
                  "Remote work verification",
                  "Multi-location support",
                ],
              },
              {
                icon: BarChart3,
                title: "Attendance Analytics",
                color: "indigo",
                points: [
                  "Daily/weekly/monthly reports",
                  "Tardiness pattern detection",
                  "Department-wise breakdowns",
                  "Exportable insights",
                ],
              },
              {
                icon: AlertTriangle,
                title: "Overtime Monitoring",
                color: "orange",
                points: [
                  "Automatic OT calculation",
                  "Threshold alerts for managers",
                  "Cost impact projections",
                  "Compliance tracking",
                ],
              },
              {
                icon: Zap,
                title: "Payroll Integration",
                color: "green",
                points: [
                  "Direct sync with payroll runs",
                  "Automatic LOP deductions",
                  "Overtime pay calculations",
                  "Zero manual entry",
                ],
              },
              {
                icon: Users,
                title: "Team Dashboard",
                color: "purple",
                points: [
                  "Real-time team status view",
                  "Who's in/out at a glance",
                  "Supervisor approval workflows",
                  "Absence notifications",
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

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple Yet Powerful Workflow
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From check-in to payroll in a seamless flow
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Employee Clocks In",
                desc: "One-click check-in from web or mobile with automatic location capture",
                icon: Smartphone,
              },
              {
                step: "02",
                title: "System Records",
                desc: "Timestamp, location, and status captured in real-time database",
                icon: FileText,
              },
              {
                step: "03",
                title: "Manager Reviews",
                desc: "Supervisors see team attendance dashboard with alerts for anomalies",
                icon: Users,
              },
              {
                step: "04",
                title: "Payroll Syncs",
                desc: "Attendance data flows directly into payroll for accurate compensation",
                icon: TrendingUp,
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/25">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-sm font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                    STEP {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-cyan-300 to-transparent dark:from-cyan-700"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Built for Every Work Environment
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Whether your team is in-office, remote, or hybrid—our attendance
                system adapts to how you work.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Office Teams",
                    desc: "Geofenced attendance with automatic check-in when entering office premises",
                    icon: Globe,
                  },
                  {
                    title: "Remote Workers",
                    desc: "Flexible clock-in from anywhere with IP and location verification",
                    icon: Smartphone,
                  },
                  {
                    title: "Field Staff",
                    desc: "GPS tracking for field visits with route mapping and client check-ins",
                    icon: MapPin,
                  },
                  {
                    title: "Shift Workers",
                    desc: "Multiple shift support with automatic overtime calculations",
                    icon: CalendarDays,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-gray-800"
                  >
                    <div className="w-12 h-12 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
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
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/professional-woman-laptop.webp"
                  alt="Diverse team using attendance system"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions About GPS Time Tracking &amp;
              Attendance
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Everything you need to know about geofenced attendance, GPS
              verification, and workforce time management.
            </p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Modernize Attendance?
          </h2>
          <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto">
            Join thousands of companies who&apos;ve eliminated manual timesheets
            and gained complete workforce visibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="rounded-full h-14 px-10 text-lg bg-white text-cyan-700 hover:bg-gray-100 font-semibold"
              >
                Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/features">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-10 text-lg border-white/30 text-white hover:bg-white/10"
              >
                Explore All Features
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
