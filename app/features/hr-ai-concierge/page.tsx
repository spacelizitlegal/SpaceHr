import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  MessageSquare,
  CheckCircle,
  Clock,
  Shield,
  Zap,
  Globe,
  Users,
  FileText,
  Sparkles,
  Brain,
  Headphones,
  Smartphone,
  Lock,
  Calendar,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import {
  JsonLd,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "HR AI Concierge — 24/7 Employee Self-Service Chatbot | Space HR",
  description:
    "Deploy a 24/7 AI-powered HR chatbot that handles employee queries, leave requests, policy lookups, and payslip retrieval instantly. Space HR's AI Concierge reduces HR ticket volume by 70% while improving employee satisfaction.",
  keywords: [
    "HR AI concierge",
    "24/7 employee self-service chatbot",
    "HR chatbot software",
    "AI employee assistant",
    "automated HR helpdesk",
    "employee self-service portal",
    "HR query automation",
    "leave request chatbot",
    "payslip retrieval bot",
    "HR policy chatbot",
    "conversational AI for HR",
    "employee experience platform",
    "HR ticket automation",
    "intelligent HR assistant",
  ],
  openGraph: {
    title: "HR AI Concierge — 24/7 Employee Self-Service | Space HR",
    description:
      "AI-powered HR chatbot for instant employee self-service. Handle leave requests, policy queries, and payslip retrieval 24/7.",
    url: "https://spacehr.net/features/hr-ai-concierge",
    images: [
      {
        url: "/og-ai-concierge.jpg",
        width: 1200,
        height: 630,
        alt: "Space HR AI Concierge chatbot interface showing employee self-service interactions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HR AI Concierge | Space HR",
    description:
      "24/7 AI chatbot for employee self-service. Reduce HR ticket volume by 70% with instant query resolution.",
  },
  alternates: {
    canonical: "https://spacehr.net/features/hr-ai-concierge",
  },
};

const faqs = [
  {
    question: "What can the HR AI Concierge handle?",
    answer:
      "The AI Concierge handles a wide range of employee queries including: leave balance checks and PTO requests, payslip and tax document retrieval, company policy lookups (remote work, benefits, dress code), benefits enrollment questions, onboarding task guidance, expense report status, time-off approval workflows, and general HR policy questions. It can also escalate complex issues to human HR representatives when needed.",
  },
  {
    question: "How does the AI Concierge learn company-specific policies?",
    answer:
      "Space HR's AI Concierge is trained on your organization's specific HR policies, employee handbook, benefits documentation, and internal procedures. During setup, you upload your policy documents and the AI indexes them for instant retrieval. The system continuously learns from interactions and can be updated as policies change.",
  },
  {
    question: "Is the AI Concierge available on mobile devices?",
    answer:
      "Yes. The AI Concierge is fully accessible via Space HR's mobile app (iOS and Android), web browser, and can be integrated with workplace messaging platforms like Slack and Microsoft Teams. Employees can interact with the chatbot from any device, anywhere, at any time.",
  },
  {
    question: "How does the chatbot handle sensitive employee data?",
    answer:
      "The AI Concierge operates within Space HR's SOC 2 Type II certified infrastructure. All conversations are encrypted end-to-end. The chatbot authenticates employees before sharing personal data (payslips, tax documents, benefits info). Role-based access controls ensure employees only see their own information. Conversation logs are retained per your data retention policy.",
  },
  {
    question: "Can the AI Concierge process leave requests and approvals?",
    answer:
      "Yes. Employees can submit leave requests directly through the chatbot by specifying dates and leave type. The AI checks leave balances, validates against company policies (blackout dates, minimum notice periods), and routes the request to the appropriate manager for approval. Managers can also approve or deny requests through the chatbot interface.",
  },
  {
    question: "What languages does the AI Concierge support?",
    answer:
      "The AI Concierge supports multiple languages including English, Spanish, French, German, Mandarin, Hindi, Arabic, and more. It automatically detects the employee's preferred language and responds accordingly, making it ideal for global organizations with diverse workforces.",
  },
];

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "Features", url: "https://spacehr.net/features" },
  {
    name: "HR AI Concierge",
    url: "https://spacehr.net/features/hr-ai-concierge",
  },
]);

export default function HRAIConcierge() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-semibold mb-6">
              <Bot className="w-4 h-4" /> 24/7 AI-Powered Employee Support
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              HR AI Concierge:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
                24/7 Employee Self-Service
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Deploy an intelligent{" "}
              <strong>24/7 employee self-service chatbot</strong> that instantly
              handles leave requests, payslip retrieval, policy lookups, and HR
              queries. Reduce HR ticket volume by 70% while delivering a
              consumer-grade employee experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request-a-demo">
                <Button
                  size="lg"
                  className="rounded-full px-8 font-semibold bg-teal-600 hover:bg-teal-700"
                >
                  Try AI Concierge <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/features/ai-chatbots">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 font-semibold"
                >
                  All Chatbot Features
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-3xl p-6 border border-teal-200 dark:border-teal-800">
              {/* Chat Interface Mockup */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-teal-600 px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      Space HR Concierge
                    </div>
                    <div className="text-teal-200 text-xs">
                      Online • Typically replies instantly
                    </div>
                  </div>
                </div>
                <div className="p-4 space-y-3 max-h-80">
                  {/* Bot message */}
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0 mt-1">
                      <Bot className="w-3 h-3 text-teal-600" />
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                      <p className="text-sm text-gray-700 dark:text-gray-200">
                        Hi Sarah! 👋 How can I help you today?
                      </p>
                    </div>
                  </div>
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="bg-teal-600 rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                      <p className="text-sm text-white">
                        What&apos;s my remaining PTO balance?
                      </p>
                    </div>
                  </div>
                  {/* Bot response */}
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0 mt-1">
                      <Bot className="w-3 h-3 text-teal-600" />
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                      <p className="text-sm text-gray-700 dark:text-gray-200">
                        You have <strong>12 days</strong> of PTO remaining this
                        year. Would you like to submit a leave request?
                      </p>
                    </div>
                  </div>
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="bg-teal-600 rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                      <p className="text-sm text-white">
                        Yes, I need March 15-19 off
                      </p>
                    </div>
                  </div>
                  {/* Bot response */}
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0 mt-1">
                      <Bot className="w-3 h-3 text-teal-600" />
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                      <p className="text-sm text-gray-700 dark:text-gray-200">
                        ✅ Leave request submitted for March 15-19 (5 days PTO).
                        Sent to your manager John for approval. You&apos;ll be
                        notified once approved!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What the AI Concierge Can Do for Your Employees
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From instant policy lookups to automated leave workflows, the AI
              Concierge handles the repetitive HR tasks that consume your
              team&apos;s time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Leave & PTO Management",
                description:
                  "Employees check balances, submit requests, and track approvals through natural conversation. The AI validates against policies and routes to managers automatically.",
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Payslip & Document Retrieval",
                description:
                  "Instant access to payslips, tax documents (W-2, 1099), benefits statements, and employment verification letters — all through a simple chat request.",
              },
              {
                icon: <HelpCircle className="w-6 h-6" />,
                title: "Policy & Handbook Queries",
                description:
                  "Trained on your company's specific policies, the AI answers questions about remote work, dress code, benefits, expense policies, and more with source citations.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Benefits Enrollment Support",
                description:
                  "Guide employees through open enrollment, explain plan options, compare coverage levels, and answer benefits-related questions year-round.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Onboarding Assistant",
                description:
                  "New hires get a personalized onboarding companion that guides them through paperwork, introductions, training schedules, and first-week tasks.",
              },
              {
                icon: <Headphones className="w-6 h-6" />,
                title: "Smart Escalation to HR",
                description:
                  "Complex or sensitive issues are automatically escalated to human HR representatives with full conversation context, ensuring seamless handoffs.",
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Mobile-First Experience",
                description:
                  "Full chatbot functionality on iOS and Android. Employees can interact from anywhere — commuting, traveling, or working remotely.",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Multi-Language Support",
                description:
                  "Automatic language detection and response in 20+ languages. Perfect for global organizations with diverse, multilingual workforces.",
              },
              {
                icon: <Lock className="w-6 h-6" />,
                title: "Enterprise Security",
                description:
                  "SOC 2 Type II certified. End-to-end encryption, employee authentication, role-based access controls, and configurable data retention policies.",
              },
            ].map((capability, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Impact on HR Operations & Employee Experience
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "70%", label: "Reduction in HR Tickets" },
              { metric: "<3s", label: "Average Response Time" },
              { metric: "24/7", label: "Always Available" },
              { metric: "95%", label: "Employee Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-white mb-2">
                  {stat.metric}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Explore Related Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/features/employee-self-service"
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                Employee Self-Service Portal →
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Full self-service portal for profile management, document
                access, and HR workflows.
              </p>
            </Link>
            <Link
              href="/features/leave-management"
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                Leave Management →
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Automated PTO tracking, leave policy enforcement, and approval
                workflows.
              </p>
            </Link>
            <Link
              href="/features/360-performance-appraisals"
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                360° Performance Appraisals →
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                AI-generated performance summaries with continuous feedback
                loops and coaching.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions About the AI Concierge
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Give Your Employees a 24/7 HR Assistant
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Deploy the AI Concierge and watch HR ticket volume drop while
            employee satisfaction soars. Schedule a demo today.
          </p>
          <Link href="/request-a-demo">
            <Button
              size="lg"
              className="rounded-full px-8 font-semibold bg-teal-600 hover:bg-teal-700"
            >
              Request a Demo <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
