"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Users,
  Award,
  PlayCircle,
  ArrowRight,
  CheckCircle,
  Brain,
  TrendingUp,
  Sparkles,
  Target,
  Zap,
  Trophy,
  BarChart3,
  MessageSquare,
  LineChart,
} from "lucide-react";
import { courses } from "@/lib/courseData";

// Note: Since this is a client component, metadata should be in layout.tsx or a separate metadata file

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] font-sans">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://spacehr.net"},{"@type":"ListItem","position":2,"name":"Courses","item":"https://spacehr.net/courses"}]}` }} />
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10 -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold mb-6 border border-blue-200 dark:border-blue-800">
            <Brain className="w-4 h-4" /> AI-Powered Learning Management
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            Transform Employee Development with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              AI Intelligence
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Empower your workforce with intelligent course management. Assign
            third-party or custom courses, track progress in real-time, and
            boost engagement with AI-generated summaries, quizzes, and gamified
            achievements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://chat.spaceaiapp.com">
              <Button
                size="lg"
                className="rounded-full px-8 text-lg h-12 shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer"
              >
                Try for Free
              </Button>
            </Link>
            <Link href="/#demo">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-12 cursor-pointer"
              >
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Features Grid */}
      <section className="py-20 bg-white dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              AI-Enhanced Learning Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Leverage cutting-edge AI to supercharge your team's learning
              experience and drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Notes */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                AI Smart Notes
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Automatically generate intelligent course notes and key
                takeaways using advanced AI, helping learners retain information
                faster.
              </p>
            </div>

            {/* AI Summary */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800 hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-xl bg-purple-600 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                AI Course Summaries
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Get instant AI-generated summaries of completed modules, perfect
                for quick reviews and knowledge refreshers.
              </p>
            </div>

            {/* AI Quizzes */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-2xl p-8 border border-pink-200 dark:border-pink-800 hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-xl bg-pink-600 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                AI-Generated Quizzes
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Smart quizzes automatically created from course content to
                validate learning and identify knowledge gaps.
              </p>
            </div>

            {/* Progress Tracking */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-8 border border-green-200 dark:border-green-800 hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-xl bg-green-600 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Real-Time Progress Tracking
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Monitor employee learning progress with detailed analytics,
                completion rates, and performance insights.
              </p>
            </div>

            {/* Gamification */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-900/20 dark:to-orange-800/20 rounded-2xl p-8 border border-orange-200 dark:border-orange-800 hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-xl bg-orange-600 flex items-center justify-center mb-6">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Badges & Trophies
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Motivate teams with achievement badges, trophies, and
                leaderboards that celebrate learning milestones.
              </p>
            </div>

            {/* Role-Based Access */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-2xl p-8 border border-indigo-200 dark:border-indigo-800 hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-xl bg-indigo-600 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Role-Based Assignment
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Admins, CEOs, and supervisors can assign targeted courses based
                on roles, departments, or individual development plans.
              </p>
            </div>

            {/* Analytics Dashboard */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 rounded-2xl p-8 border border-teal-200 dark:border-teal-800 hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-xl bg-teal-600 flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Analytics Dashboard
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Comprehensive learning analytics with visual dashboards showing
                completion rates, engagement metrics, and skill development
                trends.
              </p>
            </div>

            {/* AI Chat Support */}
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 rounded-2xl p-8 border border-cyan-200 dark:border-cyan-800 hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-xl bg-cyan-600 flex items-center justify-center mb-6">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                AI Chat Assistant
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                24/7 AI-powered chat support to answer course questions, provide
                learning guidance, and help employees overcome challenges
                instantly.
              </p>
            </div>

            {/* Performance Insights */}
            <div className="bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-800/20 rounded-2xl p-8 border border-violet-200 dark:border-violet-800 hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-xl bg-violet-600 flex items-center justify-center mb-6">
                <LineChart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Performance Insights
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Connect learning outcomes to performance metrics and see how
                training directly impacts employee productivity and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Integration Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold text-sm tracking-wide uppercase mb-3 block">
                Flexible Integration
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Integrate Any Course Platform Seamlessly
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Connect third-party course providers like Udemy, Coursera,
                LinkedIn Learning, or upload your own custom training materials.
                Space HR's intelligent system manages everything in one unified
                dashboard.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Third-Party Course Integration
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Connect popular learning platforms instantly
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Custom Course Upload
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Upload proprietary training content and SOPs
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Unified Analytics Dashboard
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Track all learning activities in one place
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
                <Image
                  src="/office-team-presentation.webp"
                  alt="Team learning together"
                  className="rounded-2xl shadow-2xl"
                  width={600}
                  height={400}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Management Features */}
      <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Learning Management Platform
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to build, deliver, and track employee learning
              and development programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Pre-Built Course Library Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Pre-Built Course Library
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Access 50+ professionally designed courses covering leadership,
                communication, technical skills, compliance, and industry best
                practices.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>
                    Expert-authored content with real-world applications
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Interactive quizzes and assessments included</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>
                    Automatic progress tracking and completion certificates
                  </span>
                </li>
              </ul>
            </div>

            {/* Custom Content Integration Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PlayCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Custom Content Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Upload proprietary training materials, company policies, and
                specialized content. Blend custom courses with our library
                seamlessly.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>
                    Support for video, PDF, SCORM, and interactive modules
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Custom branding and course design tools</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Version control and content update management</span>
                </li>
              </ul>
            </div>

            {/* Advanced Learning Management Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Advanced Learning Management
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Assign courses based on roles, departments, or performance
                goals. Track completion rates and skill development with
                powerful analytics.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>
                    Automated course assignments and deadline reminders
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>Learning paths and skill progression tracking</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>
                    Integration with performance appraisal recommendations
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Courses Catalog */}
      {/* Learning Platform Features - Detailed */}
      <section className="py-24 bg-white dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Manage Employee Learning
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A complete learning management solution with pre-built courses,
              custom content capabilities, and powerful analytics.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Pre-Built Course Library */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-8 border border-blue-100 dark:border-blue-800 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Pre-Built Course Library
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Launch your learning program instantly with our comprehensive
                library of professionally designed courses.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      50+ Professional Courses
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Covering leadership, communication, technical skills,
                      compliance, and more
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Expert Content with Quizzes
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Interactive assessments and real-world applications in
                      every course
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Automatic Tracking & Certificates
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Progress monitoring and completion certificates generated
                      automatically
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Custom Content Integration */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-purple-100 dark:border-purple-800 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg">
                <PlayCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Custom Content Integration
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Seamlessly integrate your proprietary training materials and
                company-specific content.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Upload Proprietary Materials
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Add your own training content, policies, and specialized
                      courses
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Support for Video, PDF, SCORM
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Multiple content formats including interactive modules and
                      multimedia
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Custom Branding & Version Control
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Brand courses with your identity and manage content
                      updates easily
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Advanced Learning Management */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-3xl p-8 border border-green-100 dark:border-green-800 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mb-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Advanced Learning Management
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Powerful tools to assign, track, and measure learning outcomes
                across your organization.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Role-Based Assignments
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Automatically assign courses based on job roles,
                      departments, or goals
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Learning Paths & Analytics
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Create structured learning journeys and track skill
                      development
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Integration with Performance Appraisals
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Link training to performance goals and recommend courses
                      automatically
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 pt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 filter contrast-150 brightness-100 mix-blend-overlay"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Team's Learning?
              </h2>
              <p className="text-lg text-white/90 mb-10">
                Join leading companies using Space HR's AI-powered learning
                management to upskill teams faster and smarter.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="https://cad.spaceaiapp.com/login">
                  <Button
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 rounded-full h-12 shadow-xl"
                  >
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/#demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-8 rounded-full h-12"
                  >
                    Schedule Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
