import { Button } from "@/components/ui/Button";
import Link from "next/link";
import {
  JsonLd,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import {
  ArrowRight,
  Smartphone,
  Bot,
  Calendar,
  FileText,
  MessageSquare,
  Bell,
  User,
  Clock,
  Shield,
  CheckCircle,
  Star,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Space HR for Employees — Mobile Self-Service App & AI Concierge",
  description:
    "Space HR gives employees a mobile-first self-service app with an AI Concierge chatbot for instant HR support. Check payslips, request leave, access policies, and manage your profile — all from your phone.",
  keywords: [
    "employee self-service app",
    "mobile HR app",
    "AI HR concierge",
    "employee self-service portal",
    "mobile payslip access",
    "leave request app",
    "employee HR chatbot",
    "mobile-first HR",
    "employee experience platform",
    "digital employee experience",
  ],
  openGraph: {
    title: "Space HR for Employees | Mobile Self-Service & AI Concierge",
    description:
      "Mobile-first self-service with AI Concierge chatbot. Payslips, leave requests, and HR support — all from your phone.",
    url: "https://spacehr.net/solutions/employees",
  },
  alternates: {
    canonical: "https://spacehr.net/solutions/employees",
  },
};

const faqs = [
  {
    question: "What can employees do with the Space HR mobile app?",
    answer:
      "The Space HR mobile app lets employees: check payslips and tax documents, request and track leave/PTO, clock in/out with GPS verification, chat with the AI Concierge for instant HR answers, view and update personal information, access company policies and handbooks, submit expense reports, view team calendars and schedules, and receive real-time notifications for approvals and updates.",
  },
  {
    question: "How does the AI Concierge help employees?",
    answer:
      "The AI Concierge is a 24/7 chatbot that instantly answers employee questions about: leave balances and PTO requests, company policies (remote work, benefits, dress code), payslip and tax document retrieval, benefits enrollment and coverage details, onboarding tasks and training schedules, and general HR procedures. It handles 70% of queries instantly, escalating complex issues to human HR when needed.",
  },
];

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "Solutions", url: "https://spacehr.net/solutions" },
  { name: "For Employees", url: "https://spacehr.net/solutions/employees" },
]);

export default function EmployeeSolutionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={generateFAQSchema(faqs)} />
      <JsonLd data={breadcrumb} />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-green-50 to-white dark:from-green-900/10 dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold mb-6">
            <Smartphone className="w-4 h-4" /> Mobile-First Experience
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Space HR for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
              Employees
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            A <strong>mobile-first self-service app</strong> with an{" "}
            <strong>AI Concierge chatbot</strong> that puts HR at your
            fingertips. Check payslips, request leave, access policies, and get
            instant answers — all from your phone, 24/7.
          </p>
          <Link href="/request-a-demo">
            <Button size="lg" className="rounded-full px-8 font-semibold">
              Try the Employee App <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* MOBILE APP FEATURES */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Everything Employees Need, Right on Their Phone
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Bot className="w-6 h-6" />,
                title: "AI Concierge Chatbot",
                description:
                  "24/7 AI assistant that instantly answers HR questions, processes leave requests, retrieves payslips, and explains company policies in natural conversation.",
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Payslip & Document Access",
                description:
                  "View and download payslips, W-2s, tax documents, and employment verification letters instantly from your mobile device.",
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Leave & PTO Requests",
                description:
                  "Check your leave balance, submit PTO requests, and track approval status — all through the app or AI Concierge chat.",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "GPS Clock-In/Out",
                description:
                  "Clock in and out from your phone with GPS verification. View your timesheet, track overtime, and see your work schedule.",
              },
              {
                icon: <User className="w-6 h-6" />,
                title: "Profile Management",
                description:
                  "Update personal information, emergency contacts, bank details, and tax elections directly from the app without HR intervention.",
              },
              {
                icon: <Bell className="w-6 h-6" />,
                title: "Real-Time Notifications",
                description:
                  "Instant push notifications for leave approvals, payroll processing, policy updates, performance review reminders, and team announcements.",
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Performance & Goals",
                description:
                  "View your performance reviews, track goal progress, give and receive peer feedback, and access your development plan on the go.",
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Team Communication",
                description:
                  "View team calendars, see who's in/out, and stay connected with your team through integrated messaging and announcements.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Secure & Private",
                description:
                  "Biometric authentication (Face ID/fingerprint), end-to-end encryption, and role-based access ensure your personal data stays private.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED FEATURES */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Explore Related Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/features/hr-ai-concierge"
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary">
                AI HR Concierge →
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                24/7 AI chatbot for instant employee self-service.
              </p>
            </Link>
            <Link
              href="/features/employee-self-service"
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary">
                Self-Service Portal →
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Full self-service for profile, documents, and workflows.
              </p>
            </Link>
            <Link
              href="/features/360-performance-appraisals"
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary">
                360° Appraisals →
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Participate in 360° reviews and track your development.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Give Your Employees the Experience They Deserve
          </h2>
          <p className="text-xl text-white/80 mb-8">
            See how the mobile-first app and AI Concierge transform the employee
            experience.
          </p>
          <Link href="/request-a-demo">
            <Button
              size="lg"
              className="rounded-full px-8 font-semibold bg-white text-green-600 hover:bg-gray-100"
            >
              Request a Demo <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
