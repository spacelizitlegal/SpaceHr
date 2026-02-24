import { Button } from "@/components/ui/Button";
import {
  Brain,
  CheckCircle,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Bot,
  ArrowRight,
  Zap,
  Target,
  Award,
  Calculator,
  FileText,
  Users,
  MessageSquare,
  PenTool,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Intelligence Layer: Hybrid Local/Cloud AI | Space HR",
  description:
    "Leverage predictive analytics and anomaly detection across HR and Finance. Optimize costs and enhance productivity with Space HR’s deep AI integration layer",
  keywords: [
    "AI HR automation",
    "payroll AI anomaly detection",
    "AI appraisal comments",
    "AI template generation",
    "predictive workforce analytics",
    "AI cost optimization",
    "hybrid AI architecture",
    "local AI processing",
    "AI coaching recommendations",
    "intelligent HR automation",
  ],
  openGraph: {
    title: "AI Intelligence Layer | Space HR",
    description:
      "Hybrid local/cloud AI that powers intelligent automation across Payroll, Appraisals, Tax, and Finance.",
    url: "https://spacehr.net/features/ai-intelligence",
    images: [
      {
        url: "/og-ai-intelligence.jpg",
        width: 1200,
        height: 630,
        alt: "Space HR AI Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Intelligence Layer | Space HR",
    description:
      "Comprehensive AI automation for HR, Payroll, Appraisals, and Finance.",
    images: ["/og-ai-intelligence.jpg"],
  },
  alternates: {
    canonical: "https://spacehr.net/features/ai-intelligence",
  },
};

export default function AIIntelligencePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] font-sans">
      {/* HERO SECTION */}
      <section className="relative pt-24 sm:pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent dark:from-indigo-900/10 dark:to-[#0b1121]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-6 border border-indigo-200 dark:border-indigo-800">
                <Brain className="w-4 h-4" /> AI Intelligence Layer
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Hybrid Local/Cloud AI Architecture
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Our AI engine acts as an automated auditor, strategic advisor,
                and performance coach—analyzing your data continuously to detect
                anomalies, optimize costs, and predict future trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/request-a-demo">
                  <Button size="lg" className="w-full sm:w-auto cursor-pointer">
                    Request a Demo
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

            {/* Right Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/engineering-blueprint-review.webp"
                alt="AI Intelligence Dashboard"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI CAPABILITIES OVERVIEW */}
      <section className="py-16 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                AI Across Every Module
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-3xl">
                Our hybrid AI architecture combines local processing for speed
                with cloud intelligence for advanced analytics—delivering
                real-time insights without compromising data security.
              </p>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-white/80">
                    Automated Anomaly Detection
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">Real-time</div>
                  <div className="text-white/80">Predictive Insights</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-white/80">Intelligent Monitoring</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">Hybrid</div>
                  <div className="text-white/80">Local + Cloud Processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAYROLL AI FEATURES */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
              <Calculator className="w-4 h-4" /> Payroll AI Intelligence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              AI-Powered Payroll Auditing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our AI acts as an automated payroll auditor, detecting
              irregularities before you process payments and suggesting
              strategic cost-saving opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-red-100 dark:bg-red-900/50 flex items-center justify-center text-red-600 dark:text-red-400 mb-6">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Anomaly Detection
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Automatically flags suspicious payroll entries before processing
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Detects pay rates &gt;50% above department average
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Flags unusually low tax withholding
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Identifies duplicate employee entries
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Validates hourly rate changes
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Cost Optimization
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Strategic recommendations to reduce labor costs
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Suggests hiring if overtime exceeds 8%
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Identifies shift optimization opportunities
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Analyzes department cost efficiency
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Recommends budget allocation changes
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Predictive Forecasting
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Projects future costs based on current trends
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Year-end labor cost projections
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Seasonal hiring pattern analysis
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Budget variance early warnings
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Tax liability forecasting
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Zap className="w-8 h-8" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Real-Time Payroll Intelligence
                </h3>
                <p className="text-white/90">
                  AI analyzes every payroll run in Step 4 of the wizard,
                  flagging anomalies before you generate ACH files—preventing
                  costly errors and compliance issues.
                </p>
              </div>
              <Link href="/features/payroll">
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Explore Payroll AI
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* APPRAISAL AI FEATURES */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6">
              <Award className="w-4 h-4" /> Appraisal AI Intelligence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              AI-Powered Performance Management
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From template creation to comment enhancement, our AI assists
              managers and HR teams in delivering more meaningful, data-driven
              performance reviews.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Template Generation */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  AI Template Builder
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Generate role-specific appraisal templates automatically based
                on job descriptions and competency frameworks.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Context-Aware Creation
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      AI analyzes job descriptions to suggest relevant
                      competencies
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Role-Specific Questions
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Auto-generates questions for Engineering, Sales, Customer
                      Success, etc.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Competency Mapping
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Maps industry-standard competencies to your organization's
                      framework
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Weighted Scoring
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Suggests appropriate weights based on role criticality
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Comment Enhancement */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 rounded-2xl p-8 border border-indigo-200 dark:border-indigo-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <PenTool className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  AI Comment Enhancement
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Help managers write better feedback with AI-powered writing
                assistance and bias detection.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Writing Coach
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Suggests improvements to vague or unclear feedback
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Bias Elimination
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Flags potentially biased language (gender, age, cultural)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Tone Analysis
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Ensures feedback is constructive and professional
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Example Suggestions
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Recommends specific examples to support ratings
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Natural Language Summaries */}
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Natural Language Summaries
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                AI generates readable summaries from all 360° review responses,
                making it easy for HR to understand key themes and patterns.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    Aggregates feedback from self, manager, peers, and
                    subordinates
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    Highlights strengths and improvement areas
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    Identifies common themes across reviewers
                  </span>
                </li>
              </ul>
            </div>

            {/* Training Recommendations */}
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-600 dark:text-orange-400">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  AI Training Recommendations
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Based on competency scores, AI suggests specific training
                courses to help employees develop skills in their weaker areas.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    Auto-recommends courses for scores below 3/5
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    Prioritizes development based on role requirements
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    Tracks skill gap closure over time
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Bot className="w-8 h-8" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  AI Performance Coaching
                </h3>
                <p className="text-white/90">
                  Transform appraisals from administrative burden to strategic
                  development tool with AI-powered insights, template
                  generation, and bias-free feedback enhancement.
                </p>
              </div>
              <Link href="/features/appraisals">
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer border-white text-white hover:bg-white hover:text-purple-600"
                >
                  Explore Appraisal AI
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL AI FEATURES */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              AI Intelligence Across All Modules
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our AI layer seamlessly integrates with Tax, Finance, and Learning
              Management systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tax AI */}
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                <Calculator className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Tax Compliance AI
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Automated tax code updates
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Multi-state compliance validation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Liability ledger forecasting
                  </span>
                </li>
              </ul>
              <Link
                href="/features/tax"
                className="mt-6 inline-flex items-center text-green-600 dark:text-green-400 font-bold hover:translate-x-2 transition-transform"
              >
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Finance AI */}
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Finance Analytics AI
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Budget variance predictions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Year-end cost projections
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Department spending alerts
                  </span>
                </li>
              </ul>
              <Link
                href="/features/finance"
                className="mt-6 inline-flex items-center text-orange-600 dark:text-orange-400 font-bold hover:translate-x-2 transition-transform"
              >
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Learning AI */}
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center text-pink-600 dark:text-pink-400 mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Learning AI
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Personalized course recommendations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Skill gap analysis
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Learning path creation
                  </span>
                </li>
              </ul>
              <Link
                href="/courses"
                className="mt-6 inline-flex items-center text-pink-600 dark:text-pink-400 font-bold hover:translate-x-2 transition-transform"
              >
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HYBRID ARCHITECTURE */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6 border border-blue-200 dark:border-blue-800">
                <Zap className="w-4 h-4" /> Hybrid Architecture
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Local Speed + Cloud Intelligence
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Our unique hybrid approach combines the speed of local
                processing with the power of cloud-based machine learning—giving
                you instant insights without compromising data security.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      Local Processing
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Real-time anomaly detection runs locally for instant
                      validation
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      Cloud Intelligence
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Advanced analytics and predictive models run in the cloud
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      Data Privacy
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Sensitive data stays local while anonymized insights sync
                      to cloud
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-indigo-200 dark:border-indigo-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                AI Processing Flow
              </h3>
              <div className="space-y-6">
                <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400 font-bold">
                      1
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Data Input
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    User enters payroll, appraisal, or other data
                  </p>
                </div>

                <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                      2
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Local Validation
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    AI instantly validates data for anomalies (local processing)
                  </p>
                </div>

                <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold">
                      3
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Cloud Analytics
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Anonymized data syncs to cloud for predictive insights
                  </p>
                </div>

                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center font-bold">
                      4
                    </div>
                    <h4 className="font-bold">Actionable Insights</h4>
                  </div>
                  <p className="text-sm text-white/90">
                    AI delivers recommendations and alerts in real-time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experience AI-Powered HR Automation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            From payroll auditing to appraisal coaching, our AI intelligence
            layer transforms every aspect of your HR operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-demo">
              <Button size="lg" className="w-full sm:w-auto cursor-pointer">
                Request a Demo
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
      </section>
    </div>
  );
}
