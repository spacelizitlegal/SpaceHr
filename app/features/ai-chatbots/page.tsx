import { Button } from "@/components/ui/Button";
import {
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Bot,
  Zap,
  Shield,
  Clock,
  Users,
  Brain,
  Globe,
  Sparkles,
  FileText,
  Calendar,
  DollarSign,
  HelpCircle,
  TrendingUp,
  Lock,
  ChevronDown,
  PlayCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  JsonLd,
  generateFAQSchema,
  generateBreadcrumbSchema,
  softwareSchema,
} from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "AI HR Chatbot for Employee Self-Service | Space HR",
  description:
    "Deploy a chatbot for HR services that answers employee questions about leave, payroll, and policies 24/7. Reduce HR ticket volume by 70%. Setup in 48 hours, no coding required.",
  keywords: [
    "AI HR chatbot",
    "chatbot for HR services",
    "employee self-service chatbot",
    "HR chatbot platform",
    "chatbot for employees",
    "chatbot for internal employees",
    "ai chatbot hr",
    "hr chatbot solutions",
    "intelligent hr chatbot",
    "hr virtual assistant",
    "HR automation",
    "AI employee support",
    "payroll chatbot",
    "24/7 HR support",
    "conversational AI HR",
    "automated HR concierge",
    "employee engagement chatbot",
  ],
  openGraph: {
    title: "AI HR Chatbot for Employee Self-Service | Space HR",
    description:
      "24/7 AI chatbot for HR services — instant answers on leave, payroll, policy, and benefits. Reduce HR workload by 70%. Setup in 48 hours.",
    url: "https://spacehr.net/features/ai-chatbots",
    siteName: "Space HR",
    type: "website",
    images: [
      {
        url: "/desktop-design-showcase.webp",
        width: 1200,
        height: 630,
        alt: "Space HR AI HR Chatbot for Employee Self-Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI HR Chatbot for Employee Self-Service | Space HR",
    description:
      "24/7 AI chatbot for HR services — handles leave, payroll, policies, and benefits instantly. 70% fewer HR tickets. Setup in 48 hours.",
    images: ["/desktop-design-showcase.webp"],
  },
  alternates: {
    canonical: "https://spacehr.net/features/ai-chatbots",
  },
};

export default function AIChatbotsPage() {
  const faqItems = [
    {
      question: "What is an AI HR chatbot?",
      answer:
        "An AI HR chatbot is a conversational software tool that uses artificial intelligence and natural language processing to automatically answer employee questions about HR topics such as leave balances, payroll, company policies, benefits, and onboarding. Unlike traditional FAQ pages or ticketing systems, an AI HR chatbot responds instantly 24/7 and can take action — like booking leave or retrieving payslips — without human involvement.",
    },
    {
      question: "How does a chatbot for HR services work?",
      answer:
        "A chatbot for HR services connects to your HRMS database and company policy documents. When an employee sends a message, the AI parses the intent, searches the relevant data source, and returns an accurate, personalized answer within seconds. For transactional requests (e.g., 'book Friday off'), it executes the action directly and notifies the relevant manager or system. Complex queries requiring human judgment are automatically escalated to the HR team with full conversation context.",
    },
    {
      question: "What HR questions can the chatbot answer?",
      answer:
        "Space HR's AI chatbot handles the most common employee queries: leave balance checks, PTO requests, payslip retrieval, pay date questions, W-2 and tax document access, benefits enrollment details, health insurance plan comparisons, work-from-home policy lookups, onboarding checklists, expense policy questions, 401(k) contribution guidance, and open enrollment reminders. The chatbot is trained on your specific company handbook so answers reflect your actual policies.",
    },
    {
      question: "How much does an HR chatbot cost?",
      answer:
        "Space HR offers a free trial so you can test the AI HR chatbot with your team before committing. Enterprise pricing is based on company size and modules selected. Most customers see ROI within 60 days through reduced HR ticket volume (typically 70% fewer tickets), faster query resolution, and HR team time savings. Contact us for a custom quote.",
    },
    {
      question: "Is the HR chatbot secure and compliant?",
      answer:
        "Yes. Space HR's chatbot uses end-to-end encryption for all conversations. Role-based access controls ensure employees only see information they are authorized to view. All conversations are audit-logged for compliance review. Data residency options are available for organizations in the US, UAE, Singapore, and Europe. The platform meets SOC 2 compliance standards.",
    },
    {
      question: "How long does it take to set up the HR chatbot?",
      answer:
        "Most teams deploy the Space HR chatbot within 48 hours. Setup involves connecting your HRMS data, uploading your company policy documents, and configuring escalation rules. No coding is required. Our onboarding team guides you through the process and the chatbot begins learning from your policies immediately.",
    },
    {
      question: "Can the chatbot handle employee self-service for global teams?",
      answer:
        "Yes. Space HR's employee self-service chatbot supports multi-language conversations and is deployed by companies across the US, UAE, Singapore, Canada, and Europe. It handles region-specific compliance requirements such as WPS (UAE), CPF (Singapore), and multi-state tax rules (US). The chatbot adapts responses based on the employee's location and applicable HR policies.",
    },
  ];

  const breadcrumbItems = [
    { name: "Home", url: "https://spacehr.net" },
    { name: "Features", url: "https://spacehr.net/features" },
    { name: "AI HR Chatbot", url: "https://spacehr.net/features/ai-chatbots" },
  ];

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Space HR AI HR Chatbot Demo — Employee Self-Service in Action",
    description:
      "Watch how Space HR's AI chatbot for HR services handles leave requests, payroll queries, policy lookups, and benefits questions for employees 24/7.",
    thumbnailUrl: "https://spacehr.net/desktop-design-showcase.webp",
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
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      <JsonLd data={generateFAQSchema(faqItems)} />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={videoSchema} />
      <JsonLd data={softwareSchema} />
      {/* HERO SECTION */}
      <section className="relative pt-24 sm:pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent dark:from-purple-900/10 dark:to-[#0b1121]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/" className="hover:text-purple-600 dark:hover:text-purple-400">Home</Link></li>
              <li className="select-none">/</li>
              <li><Link href="/features" className="hover:text-purple-600 dark:hover:text-purple-400">Features</Link></li>
              <li className="select-none">/</li>
              <li className="text-gray-800 dark:text-gray-200 font-medium">AI HR Chatbot</li>
            </ol>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6 border border-purple-200 dark:border-purple-800">
                <MessageSquare className="w-4 h-4" /> AI HR Chatbot &amp; Concierge
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                AI HR Chatbot for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  Employee Self-Service
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Deploy a 24/7 <strong>chatbot for HR services</strong> that answers employee questions about policies, leave balances, payroll, and benefits instantly — without a single HR ticket.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Space HR&apos;s AI chatbot learns your company handbook and HR data, resolves 95% of queries automatically, and escalates complex issues to your team with full context.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/request-a-demo">
                  <Button size="lg" className="w-full sm:w-auto cursor-pointer">
                    See the Chatbot in Action
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="https://cad.spaceaiapp.com/login" target="_blank">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto cursor-pointer"
                  >
                    Try for Free
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right - Chat Interface Preview */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-900 to-purple-900">
                <Image
                  src="/desktop-design-showcase.webp"
                  alt="Space HR AI HR chatbot interface showing conversational employee self-service for payslip queries, policy questions, and leave requests"
                  width={800}
                  height={600}
                  className="w-full h-auto opacity-30"
                />
                {/* Overlay Chat Interface */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="w-full max-w-sm bg-white dark:bg-[#1e293b] rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white font-bold flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <Bot className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span>HR Concierge</span>
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        </div>
                        <p className="text-xs text-white/70 font-normal">
                          Always online
                        </p>
                      </div>
                    </div>
                    <div className="p-4 space-y-4 h-[280px] overflow-y-auto bg-gray-50 dark:bg-[#0f172a]">
                      <div className="flex justify-end">
                        <div className="bg-purple-600 text-white rounded-l-xl rounded-tr-xl p-3 text-sm max-w-[80%]">
                          How many sick days do I have left?
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-r-xl rounded-tl-xl p-3 text-sm border border-gray-100 dark:border-gray-700 max-w-[80%]">
                          <p>
                            You have <strong>5 sick days</strong> remaining for
                            2026.
                          </p>
                          <p className="mt-2 text-gray-500 dark:text-gray-400">
                            Would you like to request time off?
                          </p>
                          <div className="mt-3 flex gap-2">
                            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">
                              Request Leave
                            </span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
                              View Policy
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-purple-600 text-white rounded-l-xl rounded-tr-xl p-3 text-sm max-w-[80%]">
                          Yes, book Friday off as sick leave
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-r-xl rounded-tl-xl p-3 text-sm border border-gray-100 dark:border-gray-700 max-w-[80%]">
                          <p className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>
                              Done! Friday, Jan 10 marked as sick leave.
                            </span>
                          </p>
                          <p className="mt-2 text-gray-500 dark:text-gray-400">
                            Your manager has been notified.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border-t border-gray-100 dark:border-gray-700 flex items-center gap-2">
                      <div className="flex-1 h-10 bg-gray-100 dark:bg-gray-800 rounded-full px-4 text-sm flex items-center text-gray-400">
                        Ask me anything about HR...
                      </div>
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="py-12 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">70%</div>
              <div className="text-white/80 text-sm">HR Workload Reduction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">&lt;3s</div>
              <div className="text-white/80 text-sm">Average Response Time</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-white/80 text-sm">Always Available</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-white/80 text-sm">Query Resolution Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO DEMO SECTION */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6">
              <PlayCircle className="w-4 h-4" /> Product Demo
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              See the AI HR Chatbot in Action
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Watch how employees get instant answers on leave, payroll, and policies — no HR ticket required.
            </p>
          </div>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-black">
            <video
              controls
              preload="metadata"
              className="w-full h-auto"
              poster="/desktop-design-showcase.webp"
              aria-label="Space HR AI HR chatbot demo video showing employee self-service for HR queries"
            >
              <source src="/videos/space-hr-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag. <Link href="/request-a-demo" className="text-purple-400 underline">Book a live demo instead.</Link>
            </video>
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
            2-minute overview — see leave requests, payslip retrieval, and policy lookups handled end-to-end.
          </p>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" /> Intelligent Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What Your AI Concierge Can Do
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              More than just Q&A—our AI takes action, executes tasks, and learns
              your organization&apos;s unique policies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Policy Expert */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 border border-purple-200 dark:border-purple-800">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Policy Expert
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Trained on your employee handbook and company policies
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Answers dress code, PTO, benefits questions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Cites specific policy sections in responses
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Updates automatically when policies change
                  </span>
                </li>
              </ul>
            </div>

            {/* Leave Management */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Leave Assistant
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Check balances and book time off through conversation
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Real-time PTO, sick, vacation balance checks
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    &quot;Book next Friday off&quot; natural language requests
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Automatic manager notifications
                  </span>
                </li>
              </ul>
            </div>

            {/* Payroll Queries */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-8 border border-green-200 dark:border-green-800">
              <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                <DollarSign className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Payroll Support
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Instant access to pay information and tax documents
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    &quot;When is my next payday?&quot; instant answers
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    YTD earnings and tax withholding summaries
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Direct links to paystubs and W-2 documents
                  </span>
                </li>
              </ul>
            </div>

            {/* Benefits Navigator */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-2xl p-8 border border-orange-200 dark:border-orange-800">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Benefits Navigator
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Help employees understand and utilize their benefits
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Health insurance plan comparisons
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    401(k) contribution guidance
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Open enrollment deadline reminders
                  </span>
                </li>
              </ul>
            </div>

            {/* IT & Onboarding */}
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 rounded-2xl p-8 border border-indigo-200 dark:border-indigo-800">
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Onboarding Guide
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Personalized onboarding support for new hires
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    First-day checklist walkthrough
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Required document collection reminders
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Team introductions and org chart navigation
                  </span>
                </li>
              </ul>
            </div>

            {/* General HR Support */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 rounded-2xl p-8 border border-rose-200 dark:border-rose-800">
              <div className="w-14 h-14 rounded-2xl bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center text-rose-600 dark:text-rose-400 mb-6">
                <HelpCircle className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                General HR Support
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Handle any HR query with intelligent routing
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-rose-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Escalates complex issues to HR team
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-rose-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Tracks conversation history for context
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-rose-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Learns from HR responses to improve
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              How the AI Concierge Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Intelligent conversation flow that understands intent and takes
              action
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6 bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center shrink-0">
                  <Brain className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl font-bold text-gray-200 dark:text-gray-700">
                      01
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Natural Language Understanding
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Employee asks a question in plain English—no keywords or
                    forms needed. The AI understands context, intent, and even
                    handles typos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center shrink-0">
                  <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl font-bold text-gray-200 dark:text-gray-700">
                      02
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Knowledge Base Search
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    AI searches your company policies, FAQs, and HR database to
                    find the most accurate, up-to-date answer.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center shrink-0">
                  <Zap className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl font-bold text-gray-200 dark:text-gray-700">
                      03
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Action Execution
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Beyond answering questions, the AI can execute tasks—booking
                    leave, updating profiles, generating documents.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center shrink-0">
                  <Users className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl font-bold text-gray-200 dark:text-gray-700">
                      04
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Smart Escalation
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    When queries require human judgment, the AI seamlessly
                    escalates to HR with full conversation context.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY & SECURITY */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold mb-6">
                <Lock className="w-4 h-4" /> Privacy & Security
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Enterprise-Grade Security
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Your employee conversations are protected with the same security
                standards used by Fortune 500 companies.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900 dark:text-white">
                      End-to-End Encryption
                    </span>
                    <p className="text-gray-600 dark:text-gray-400">
                      All conversations encrypted in transit and at rest
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900 dark:text-white">
                      Role-Based Access
                    </span>
                    <p className="text-gray-600 dark:text-gray-400">
                      AI only reveals information employees are authorized to
                      see
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900 dark:text-white">
                      Audit Logging
                    </span>
                    <p className="text-gray-600 dark:text-gray-400">
                      Complete conversation history for compliance and review
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900 dark:text-white">
                      Data Residency Options
                    </span>
                    <p className="text-gray-600 dark:text-gray-400">
                      Choose where your data is stored to meet regulations
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/professional-woman-laptop.webp"
                alt="Space HR AI chatbot enterprise security features showing SOC 2 compliance and data encryption for HR data protection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="text-3xl font-bold mb-2">SOC 2 Compliant</div>
                <p className="text-white/80">
                  Security practices audited annually
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAMPLE CONVERSATIONS */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Real Conversations, Real Results
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how employees interact with the AI Concierge
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-lg overflow-hidden">
              <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold">
                Policy
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-end">
                  <div className="bg-purple-600 text-white rounded-l-xl rounded-tr-xl p-3 text-sm max-w-[90%]">
                    What&apos;s our work from home policy?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-r-xl rounded-tl-xl p-3 text-sm max-w-[90%]">
                    Employees can work remotely up to 2 days per week with
                    manager approval. You&apos;ll need to submit a WFH request
                    24 hours in advance.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1e293b] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-lg overflow-hidden">
              <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold">
                Payroll
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-end">
                  <div className="bg-purple-600 text-white rounded-l-xl rounded-tr-xl p-3 text-sm max-w-[90%]">
                    I need to update my direct deposit info
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-r-xl rounded-tl-xl p-3 text-sm max-w-[90%]">
                    I can help with that! I&apos;ve opened your banking details
                    form. Your changes will be effective for the next pay
                    period.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1e293b] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-lg overflow-hidden">
              <div className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm font-semibold">
                Escalation
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-end">
                  <div className="bg-purple-600 text-white rounded-l-xl rounded-tr-xl p-3 text-sm max-w-[90%]">
                    Who should I talk to about harassment?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-r-xl rounded-tl-xl p-3 text-sm max-w-[90%]">
                    This is an important matter. I&apos;ve connected you
                    directly with our HR Director in a private channel. You can
                    also call the anonymous hotline.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AI CHATBOT VS TICKETING */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            AI HR Chatbot vs. Traditional HR Support
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Why forward-thinking HR teams are replacing ticketing systems with conversational AI
          </p>
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-6">
            <p>
              A traditional HR ticketing system routes an employee&apos;s question into a queue. Someone on the HR team reads it, looks up the answer, and replies — typically hours or days later. During that window, the employee is waiting, the HR team is processing, and both sides are spending time on a transaction that should take seconds. For high-volume, repetitive queries like leave balances, payslip downloads, and policy lookups, a ticketing system is the most expensive way to deliver the least satisfying experience.
            </p>
            <p>
              An <strong>AI HR chatbot</strong> handles these queries at the point of need, in the channel the employee is already using, in under three seconds. The chatbot connects directly to your HRMS and policy documents, so answers reflect the employee&apos;s actual entitlements — not a generic FAQ page. When an employee asks &ldquo;how many sick days do I have left?&rdquo; the chatbot queries their real leave balance and responds with their specific number. When they say &ldquo;book Friday off,&rdquo; it executes the request, checks against the leave policy, notifies the manager, and confirms — all without a human in the loop.
            </p>
            <p>
              The economic case is direct. HR teams report that 60–70% of their weekly inbound requests are the same ten to fifteen question types asked repeatedly by different employees. Automating those ten to fifteen query types eliminates the majority of HR ticket volume. Space HR customers typically see a <strong>70% reduction in HR tickets within the first 30 days</strong> of chatbot deployment — with the HR team&apos;s time redistributed toward strategic work: performance programmes, talent planning, and employee relations issues that genuinely require human judgment.
            </p>
            <p>
              The secondary benefit is consistency. When a human answers HR questions, the answer quality varies by person, by day, and by how busy the team is. When the chatbot answers, the answer is always based on the current policy document, always complete, and always available — at 2am for a night-shift employee as readily as at 10am for a head-office worker. For global and multi-location teams, this consistency across time zones is one of the most valued outcomes of chatbot deployment.
            </p>
            <p>
              Space HR&apos;s <strong>chatbot for HR services</strong> is purpose-built for the HR function — pre-trained on HR domain knowledge, integrated with 20+ HRMS platforms, and configurable without code. It handles leave, payroll, policy, onboarding, and benefits self-service out of the box, with enterprise-grade security and full audit logging for compliance. Most teams deploy in 48 hours and see measurable ROI within the first pay cycle.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-[#1e293b] rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4">Traditional HR Ticketing</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5 shrink-0">✗</span> Hours or days to resolve routine queries</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5 shrink-0">✗</span> HR team capacity consumed by repetitive tasks</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5 shrink-0">✗</span> Offline after business hours</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5 shrink-0">✗</span> Answer quality varies by person and workload</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5 shrink-0">✗</span> No self-service action (leave booking, payslip retrieval)</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950/30 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4">Space HR AI HR Chatbot</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5 shrink-0">✓</span> Under 3-second response for 95% of queries</li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5 shrink-0">✓</span> 70% HR ticket reduction from day one</li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5 shrink-0">✓</span> Available 24/7 across all time zones</li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5 shrink-0">✓</span> Always answers from your current policy version</li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5 shrink-0">✓</span> Books leave, retrieves payslips, executes actions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6">
              <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Everything You Need to Know About AI HR Chatbots
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Common questions from HR leaders and IT teams evaluating a chatbot for HR services.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "What is an AI HR chatbot?",
                a: "An AI HR chatbot is a conversational AI tool that automatically answers employee questions about HR topics — leave balances, payroll, company policies, benefits, and onboarding — 24/7 without human involvement. Unlike a ticketing system, it responds in seconds and can take action like booking leave or retrieving payslips directly.",
              },
              {
                q: "How does a chatbot for HR services work?",
                a: "The chatbot connects to your HRMS database and company policy documents. When an employee sends a message, the AI understands the intent, searches your data, and returns a personalized answer. For transactional requests — 'book Friday off', 'show my last payslip' — it executes the action and notifies the relevant party. Complex queries are escalated to HR with full context.",
              },
              {
                q: "What HR questions can the chatbot answer?",
                a: "Space HR's AI chatbot handles leave balance checks, PTO requests, payslip retrieval, pay date queries, W-2 access, benefits enrollment, health insurance comparisons, WFH policy lookups, onboarding checklists, 401(k) guidance, expense policies, and open enrollment reminders — all trained on your company's specific handbook.",
              },
              {
                q: "How long does it take to deploy the HR chatbot?",
                a: "Most teams go live within 48 hours. You connect your HRMS, upload your policy documents, configure escalation rules, and you're ready. No coding required. Our team guides the full setup.",
              },
              {
                q: "How much does an HR chatbot cost?",
                a: "Space HR offers a free trial. Paid plans are sized by company headcount. Most customers recoup their investment within 60 days through ticket volume reduction (typically 70%) and HR team time savings. Request a demo for custom enterprise pricing.",
              },
              {
                q: "Is the HR chatbot secure and GDPR/SOC 2 compliant?",
                a: "Yes. All conversations are end-to-end encrypted. Role-based access ensures employees only see their own data. Full audit logging is maintained for compliance. Data residency options available for US, UAE, Singapore, and Europe. The platform is SOC 2 compliant.",
              },
              {
                q: "Can the chatbot support global and multi-language teams?",
                a: "Yes. The chatbot handles multi-language conversations and supports region-specific compliance — WPS for UAE, CPF for Singapore, FUTA/SUTA for the US. Responses adapt to each employee's location and applicable policy.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group bg-white dark:bg-[#1e293b] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-semibold text-gray-900 dark:text-white text-lg hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  {item.q}
                  <ChevronDown className="w-5 h-5 shrink-0 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED FEATURES — INTERNAL LINKING */}
      <section className="py-16 bg-white dark:bg-[#0b1121] border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Explore Related HR AI Features
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link
              href="/features/employee-self-service"
              className="flex flex-col items-center gap-3 p-6 bg-gray-50 dark:bg-[#1e293b] rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-md transition-all text-center group"
            >
              <Users className="w-8 h-8 text-purple-500" />
              <span className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">Employee Self-Service</span>
            </Link>
            <Link
              href="/features/hr-ai-concierge"
              className="flex flex-col items-center gap-3 p-6 bg-gray-50 dark:bg-[#1e293b] rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-md transition-all text-center group"
            >
              <MessageSquare className="w-8 h-8 text-purple-500" />
              <span className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">HR AI Concierge</span>
            </Link>
            <Link
              href="/features/ai-automation"
              className="flex flex-col items-center gap-3 p-6 bg-gray-50 dark:bg-[#1e293b] rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-md transition-all text-center group"
            >
              <Zap className="w-8 h-8 text-purple-500" />
              <span className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">AI Workflow Automation</span>
            </Link>
            <Link
              href="/features/leave-management"
              className="flex flex-col items-center gap-3 p-6 bg-gray-50 dark:bg-[#1e293b] rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-md transition-all text-center group"
            >
              <Calendar className="w-8 h-8 text-purple-500" />
              <span className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">Leave Management</span>
            </Link>
            <Link
              href="/solutions/chatbot-for-hr-services"
              className="flex flex-col items-center gap-3 p-6 bg-gray-50 dark:bg-[#1e293b] rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-md transition-all text-center group"
            >
              <Bot className="w-8 h-8 text-purple-500" />
              <span className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">Chatbot for HR Services</span>
            </Link>
            <Link
              href="/solutions/hr-ai-chatbot"
              className="flex flex-col items-center gap-3 p-6 bg-gray-50 dark:bg-[#1e293b] rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-md transition-all text-center group"
            >
              <Brain className="w-8 h-8 text-purple-500" />
              <span className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">HR AI Chatbot Solution</span>
            </Link>
          </div>
          <p className="text-center mt-8">
            <Link href="/features" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline inline-flex items-center gap-1">
              View all Space HR features <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Deploy Your AI HR Concierge?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Reduce HR workload by 70% and give employees instant access to
            support, 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="rounded-full h-16 px-12 text-lg bg-white text-purple-700 hover:bg-gray-100 cursor-pointer"
              >
                Request a Demo
              </Button>
            </Link>
            <Link
              href="https://cad.spaceaiapp.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-16 px-12 text-lg border-2 border-white text-white hover:bg-white/10 cursor-pointer"
              >
                Try for Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
