import { Button } from "@/components/ui/Button";
import {
  Check,
  ArrowLeft,
  MessageSquarePlus,
  Award,
  Users,
  Target,
  Brain,
  CheckCircle,
  TrendingUp,
  FileText,
  Sparkles,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Powered Performance Appraisals | 360° Reviews with Smart Coaching",
  description:
    "Transform performance reviews with AI coaching. Get natural language summaries, training recommendations, and calibration insights for 360-degree appraisals.",
  keywords: [
    "AI performance appraisals",
    "360 degree reviews",
    "AI coaching feedback",
    "performance review software",
    "competency-based appraisals",
    "AI training recommendations",
    "employee performance management",
    "appraisal calibration",
    "weighted scoring reviews",
    "automated review cycles",
  ],
  openGraph: {
    title: "AI Performance Appraisals | Space HR",
    description:
      "360° reviews with AI-generated summaries and personalized training recommendations.",
    images: ["/og-appraisals.png"],
  },
};

export default function AIAppraisalsPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
              <MessageSquarePlus className="w-4 h-4" /> AI Appraisal Enhancement
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Turn Vague Feedback into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                Actionable Growth.
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Empower every manager to write world-class performance reviews.
              Our AI coach works in real-time to refine feedback, ensuring it is
              constructive, specific, and actionable.
            </p>
            <Link href="/request-a-demo">
              <Button
                size="lg"
                className="rounded-full h-14 px-8 text-lg cursor-pointer"
              >
                Request a Demo
              </Button>
            </Link>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
              <Image
                src="/office-team-presentation.webp"
                alt="AI Appraisal Interface"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              AI-Powered Performance Management
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Transform manager feedback into development opportunities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Writing Coach",
                points: [
                  "Real-time feedback refinement",
                  "Tone calibration suggestions",
                  "Specificity enhancement prompts",
                ],
              },
              {
                icon: Target,
                title: "360° Review Builder",
                points: [
                  "Custom competency frameworks",
                  "Multi-rater response collection",
                  "Weighted scoring automation",
                ],
              },
              {
                icon: Award,
                title: "Development Planning",
                points: [
                  "AI-generated training recommendations",
                  "Career path mapping",
                  "Goal alignment tracking",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#1e293b] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                    >
                      <CheckCircle className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEMPLATE BUILDER */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Custom Performance Templates
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Build role-specific review frameworks that align with your
              organization's values
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800/50">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg shrink-0">
                  <FileText className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Competency Framework Builder
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Create custom evaluation criteria tailored to each role,
                    department, or seniority level. Define competencies, add
                    behavioral indicators, and set weighting for balanced
                    assessments.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                      <span>Role-specific competency libraries</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                      <span>Behavioral indicator suggestions</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                      <span>Weighted scoring configuration</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                      <span>Rating scale customization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800/50">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white shadow-lg shrink-0">
                  <Users className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    360-Degree Multi-Rater Reviews
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Collect comprehensive feedback from peers, direct reports,
                    and stakeholders. AI consolidates responses into actionable
                    insights while maintaining confidentiality.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>Automated reviewer selection</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>Anonymous feedback collection</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>Response aggregation & analysis</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>Calibration meeting support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI INTELLIGENCE */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f172a] dark:to-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-6">
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-bold text-purple-600 dark:text-purple-300">
                AI INTELLIGENCE
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Turn Feedback Into Growth Plans
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              AI analyzes review responses to generate personalized development
              recommendations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Training Recommendations
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Automated learning path suggestions based on review gaps
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Skill gap identification
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Course assignment automation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Progress tracking integration
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Performance Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Executive insights into organizational performance trends
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Department performance heatmaps
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Competency strength analysis
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Succession planning identification
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Performance Reviews?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            See how AI-powered appraisals drive employee development and
            engagement
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
