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
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI HR Chatbot | 24/7 Employee Self-Service Support | Space HR",
  description:
    "Automate employee support with AI chatbots. Instant answers to policy, leave, payroll, and benefits questions. Reduce HR workload by 70% with intelligent conversational AI.",
  keywords: [
    "AI HR chatbot",
    "employee self-service chatbot",
    "HR automation",
    "AI employee support",
    "payroll chatbot",
    "policy automation",
    "leave management chatbot",
    "24/7 HR support",
    "conversational AI HR",
    "automated HR concierge",
    "HR virtual assistant",
    "employee engagement chatbot",
    "intelligent HR support",
  ],
  openGraph: {
    title: "AI HR Chatbot | 24/7 Employee Self-Service | Space HR",
    description:
      "24/7 automated employee support for policies, leave, payroll, and benefits. Reduce HR workload by 70%.",
    url: "https://spacehr.net/features/ai-chatbots",
    images: [
      {
        url: "/og-chatbot.jpg",
        width: 1200,
        height: 630,
        alt: "Space HR AI Chatbot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI HR Chatbot | Space HR",
    description:
      "24/7 AI-powered employee support that handles policies, leave, payroll, and benefits queries instantly.",
    images: ["/og-chatbot.jpg"],
  },
  alternates: {
    canonical: "https://spacehr.net/features/ai-chatbots",
  },
};

export default function AIChatbotsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      {/* HERO SECTION */}
      <section className="relative pt-24 sm:pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent dark:from-purple-900/10 dark:to-[#0b1121]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6 border border-purple-200 dark:border-purple-800">
                <MessageSquare className="w-4 h-4" /> AI HR Concierge
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Instant Answers.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  Zero HR Bottlenecks.
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Relieve your HR team from repetitive queries. Our 24/7 AI
                Concierge answers employee questions about policies, leave
                balances, payroll, and benefits instantly—while learning your
                organization&apos;s unique context.
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
                  src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80"
                  alt="AI Chatbot Interface"
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
                    Beyond answering questions, the AI can execute
                    tasks—booking leave, updating profiles, generating
                    documents.
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
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
                alt="Enterprise Security"
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
