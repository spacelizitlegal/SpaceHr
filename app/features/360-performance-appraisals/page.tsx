import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Users,
  Target,
  Brain,
  CheckCircle,
  TrendingUp,
  FileText,
  Sparkles,
  BarChart3,
  MessageSquare,
  Star,
  BookOpen,
  Lightbulb,
  UserCheck,
  ClipboardList,
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
  title:
    "360-Degree Performance Appraisals with AI-Generated Summaries | Space HR",
  description:
    "Transform performance reviews with AI-generated summaries, competency-based review forms, and continuous feedback loops. Space HR's 360° appraisal system eliminates bias and delivers actionable coaching insights for every employee.",
  keywords: [
    "360 degree performance appraisals",
    "AI-generated performance summaries",
    "competency-based review forms",
    "continuous feedback loops",
    "performance appraisal software",
    "AI coaching recommendations",
    "360 feedback system",
    "employee performance management",
    "appraisal calibration software",
    "weighted scoring reviews",
    "automated review cycles",
    "performance review automation",
    "multi-rater feedback",
    "talent development platform",
  ],
  openGraph: {
    title: "360° Performance Appraisals with AI Coaching | Space HR",
    description:
      "AI-generated performance summaries, competency-based reviews, and continuous feedback loops. Transform how you evaluate and develop talent.",
    url: "https://spacehr.net/features/360-performance-appraisals",
    images: [
      {
        url: "/og-360-appraisals.jpg",
        width: 1200,
        height: 630,
        alt: "Space HR 360-degree performance appraisal dashboard with AI-generated coaching summaries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "360° Performance Appraisals | Space HR",
    description:
      "AI-powered 360-degree reviews with automated summaries, competency mapping, and personalized coaching recommendations.",
  },
  alternates: {
    canonical: "https://spacehr.net/features/360-performance-appraisals",
  },
};

const faqs = [
  {
    question: "What is a 360-degree performance appraisal?",
    answer:
      "A 360-degree performance appraisal collects feedback from multiple sources — managers, peers, direct reports, and self-assessments — to create a comprehensive view of an employee's performance. Unlike traditional top-down reviews, 360° feedback reduces individual bias and provides a more balanced, holistic evaluation. Space HR automates the entire process with AI-generated summaries and coaching recommendations.",
  },
  {
    question: "How does AI generate performance summaries?",
    answer:
      "Space HR's AI analyzes all collected feedback data — ratings, written comments, competency scores, and goal completion metrics — to generate natural language performance summaries. The AI identifies key themes, strengths, development areas, and patterns across multiple review cycles. It produces executive-ready summaries that save managers hours of writing time while ensuring consistency and objectivity.",
  },
  {
    question: "What are competency-based review forms?",
    answer:
      "Competency-based review forms evaluate employees against specific skills and behaviors required for their role. Space HR allows you to define custom competency frameworks with weighted scoring — for example, 'Technical Expertise' (30%), 'Leadership' (25%), 'Communication' (20%), 'Innovation' (15%), and 'Teamwork' (10%). Each competency is rated on a defined scale with behavioral anchors to ensure consistent evaluation.",
  },
  {
    question: "How do continuous feedback loops work in Space HR?",
    answer:
      "Continuous feedback loops replace the outdated annual review model with ongoing, real-time performance conversations. Space HR enables managers and peers to give instant feedback tied to specific projects, goals, or competencies. The AI aggregates this continuous feedback into performance trends, alerting managers when an employee needs coaching or recognition — ensuring no one waits months for actionable insights.",
  },
  {
    question: "Can I customize the appraisal cycle and review forms?",
    answer:
      "Yes. Space HR supports fully customizable appraisal cycles — quarterly, semi-annual, annual, or project-based. You can create custom review forms with different question types (rating scales, open-ended, competency matrices), define reviewer groups, set weighted scoring criteria, and configure approval workflows. Templates can be role-specific, department-specific, or organization-wide.",
  },
  {
    question: "How does the AI coaching recommendation engine work?",
    answer:
      "Based on 360° feedback data, goal completion rates, and competency scores, the AI identifies specific skill gaps and development opportunities for each employee. It then recommends personalized learning paths, training courses, mentorship pairings, and stretch assignments. The recommendations are data-driven and continuously refined as new feedback is collected.",
  },
];

const breadcrumb = generateBreadcrumbSchema([
  { name: "Home", url: "https://spacehr.net" },
  { name: "Features", url: "https://spacehr.net/features" },
  {
    name: "360° Performance Appraisals",
    url: "https://spacehr.net/features/360-performance-appraisals",
  },
]);

export default function PerformanceAppraisalsPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6">
              <Award className="w-4 h-4" /> AI-Powered Performance Management
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              360° Performance Appraisals with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                AI-Generated Summaries
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Replace biased annual reviews with data-driven{" "}
              <strong>continuous feedback loops</strong>. Space HR&apos;s 360°
              appraisal system collects multi-rater feedback, generates{" "}
              <strong>AI performance summaries</strong>, and delivers
              personalized coaching recommendations using{" "}
              <strong>competency-based review forms</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request-a-demo">
                <Button
                  size="lg"
                  className="rounded-full px-8 font-semibold bg-purple-600 hover:bg-purple-700"
                >
                  See 360° Reviews in Action{" "}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/features/appraisals">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 font-semibold"
                >
                  All Appraisal Features
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-purple-200 dark:border-purple-800">
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Brain className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      AI Performance Summary
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                    &quot;Sarah demonstrates exceptional leadership in
                    cross-functional projects. Her technical expertise scores
                    consistently above 4.5/5 across all reviewers. Key
                    development area: delegation skills in high-pressure
                    scenarios...&quot;
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      4.7/5
                    </div>
                    <div className="text-xs text-gray-500">Overall Rating</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                    <div className="text-2xl font-bold text-green-600">12</div>
                    <div className="text-xs text-gray-500">Reviewers</div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="text-xs font-semibold text-gray-500 mb-2">
                    COMPETENCY SCORES
                  </div>
                  {[
                    { name: "Technical Expertise", score: 92 },
                    { name: "Leadership", score: 88 },
                    { name: "Communication", score: 95 },
                    { name: "Innovation", score: 85 },
                  ].map((comp, i) => (
                    <div key={i} className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-gray-600 dark:text-gray-300 w-32">
                        {comp.name}
                      </span>
                      <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full"
                          style={{ width: `${comp.score}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-gray-900 dark:text-white">
                        {comp.score}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY 360 REVIEWS */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Annual Reviews Are Dead — And What Replaces Them
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Traditional annual reviews are biased, stressful, and ineffective.
              Continuous feedback loops with AI-powered 360° appraisals deliver
              better outcomes for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-red-50 dark:bg-red-900/10 rounded-2xl p-8 border border-red-200 dark:border-red-800">
              <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-6">
                ❌ Traditional Annual Reviews
              </h3>
              <ul className="space-y-3">
                {[
                  "Single reviewer creates bias",
                  "Recency bias dominates evaluations",
                  "Feedback arrives too late to act on",
                  "Managers spend 40+ hours writing reviews",
                  "No connection to development plans",
                  "Employees dread the process",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-red-500 mt-1">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-900/10 rounded-2xl p-8 border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-6">
                ✓ Space HR 360° AI Appraisals
              </h3>
              <ul className="space-y-3">
                {[
                  "Multi-rater feedback eliminates individual bias",
                  "Continuous data collection captures full picture",
                  "Real-time feedback enables immediate action",
                  "AI generates summaries in seconds",
                  "Personalized coaching and development paths",
                  "Employees feel heard and supported",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete 360° Appraisal Capabilities
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From competency-based review forms to AI coaching, every aspect of
              performance management is covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: "Multi-Rater 360° Feedback Collection",
                description:
                  "Collect feedback from managers, peers, direct reports, and self-assessments. Configure reviewer groups by role, department, or project team.",
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AI-Generated Performance Summaries",
                description:
                  "Natural language AI analyzes all feedback data to produce executive-ready performance summaries, identifying key themes, strengths, and development areas.",
              },
              {
                icon: <ClipboardList className="w-6 h-6" />,
                title: "Competency-Based Review Forms",
                description:
                  "Define custom competency frameworks with weighted scoring. Create role-specific evaluation criteria with behavioral anchors for consistent assessment.",
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Continuous Feedback Loops",
                description:
                  "Enable real-time feedback tied to projects, goals, and competencies. AI aggregates continuous feedback into performance trends and coaching alerts.",
              },
              {
                icon: <Lightbulb className="w-6 h-6" />,
                title: "AI Coaching Recommendations",
                description:
                  "Personalized learning paths, training suggestions, and mentorship pairings based on 360° data, goal completion, and competency gap analysis.",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Calibration & Analytics",
                description:
                  "Cross-team calibration tools ensure fair ratings. Analytics dashboards reveal performance distributions, rating trends, and team health metrics.",
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Goal & OKR Integration",
                description:
                  "Link appraisals directly to individual and team goals. Track OKR progress and factor goal completion into performance scores automatically.",
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Recognition & Rewards",
                description:
                  "Built-in recognition system lets peers and managers celebrate achievements. Recognition data feeds into performance scores for a complete picture.",
              },
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Development Planning",
                description:
                  "Create personalized Individual Development Plans (IDPs) based on appraisal outcomes. Track progress on skill development and career growth milestones.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 mb-4">
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

      {/* RESULTS */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Impact on Performance Culture
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "85%", label: "Reduction in Review Writing Time" },
              { metric: "3x", label: "More Feedback Touchpoints" },
              { metric: "40%", label: "Improvement in Employee Engagement" },
              { metric: "92%", label: "Manager Satisfaction Rate" },
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
              href="/features/goals"
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                Goal & OKR Management →
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Set, track, and align individual and team goals with
                organizational objectives.
              </p>
            </Link>
            <Link
              href="/features/ai-chatbots"
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                AI HR Concierge →
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                24/7 employee self-service chatbot for HR queries, leave
                requests, and policy information.
              </p>
            </Link>
            <Link
              href="/features/attrition-prediction"
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                Attrition Prediction →
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                AI-powered retention insights that predict flight risk and
                recommend intervention strategies.
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
              Frequently Asked Questions About 360° Appraisals
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white dark:bg-[#0b1121]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Transform Your Performance Review Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join forward-thinking companies using AI-powered 360° appraisals to
            build a culture of continuous growth and development.
          </p>
          <Link href="/request-a-demo">
            <Button
              size="lg"
              className="rounded-full px-8 font-semibold bg-purple-600 hover:bg-purple-700"
            >
              Request a Demo <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
