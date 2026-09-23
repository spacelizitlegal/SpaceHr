import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";
import { careers } from "@/lib/careersData";
import {
  Briefcase,
  Clock,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Globe,
  Sparkles,
  Users,
  Zap,
  Brain,
  Heart,
  Shield,
  Rocket,
  GraduationCap,
  Coffee,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at Space HR — Join the Team Shaping the Future of HR with AI",
  description:
    "Explore remote careers at Space HR. We're hiring MERN Stack Developers, Senior MERN Developers, and Python AI/ML Engineers to build the AI-powered HR platform serving 500+ companies across the US, UAE, UK & India.",
  keywords: [
    "Space HR careers",
    "Space AI careers",
    "HR software jobs",
    "AI startup jobs",
    "remote developer jobs",
    "MERN stack developer job",
    "Python AI developer job",
    "remote jobs",
    "jobs at Space HR",
    "work at Space AI",
  ],
  openGraph: {
    title: "Careers at Space HR — Join the Team Shaping the Future of HR with AI",
    description:
      "We're building AI that automates payroll, appraisals, and employee self-service. Join our remote-first team of engineers shaping the future of HR.",
    type: "website",
    url: "https://spacehr.net/careers",
    siteName: "Space HR",
    images: [
      {
        url: "/team-meeting-collaboration.webp",
        width: 1200,
        height: 630,
        alt: "Careers at Space HR",
      },
    ],
  },
  alternates: {
    canonical: "https://spacehr.net/careers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Space HR — Join the Team Shaping the Future of HR with AI",
    description:
      "Remote careers at Space HR. MERN Stack, Senior MERN, and Python AI/ML roles — build the AI HR platform trusted by teams worldwide.",
    images: ["/team-meeting-collaboration.webp"],
  },
};

const _bc_careers = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Careers", url: "https://spacehr.net/careers" },
];

export default function CareersPage() {
  const perks = [
    {
      icon: Globe,
      title: "Remote-First",
      description:
        "Work from anywhere. Our team spans the US, UAE, UK, Singapore, and India — we hire for talent, not zip codes.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: Brain,
      title: "Cutting-Edge AI",
      description:
        "Ship real AI — payroll anomaly detection, RAG chatbots, and workforce forecasting — not just CRUD screens.",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Users,
      title: "Small, Senior Team",
      description:
        "Avoid red tape. Work directly with founders and product leads in a team that moves fast and values ownership.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Zap,
      title: "Visible Impact",
      description:
        "Your work reaches 500+ companies and tens of thousands of employees within weeks — not years.",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: GraduationCap,
      title: "Growth & Mentorship",
      description:
        "Freshers are welcome. Learn from senior engineers, take on ownership early, and grow into leadership.",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: Shield,
      title: "Stability & Equity",
      description:
        "A profitable, bootstrapped product ecosystem. Competitive compensation with a strong focus on long-term growth.",
      color: "from-blue-500 to-indigo-600",
    },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(_bc_careers)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: careers.map((career, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: career.title,
            url: `https://spacehr.net/careers/${career.slug}`,
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://spacehr.net/#organization",
          name: "Space HR",
          url: "https://spacehr.net",
          logo: "https://spacehr.net/hrlogonly.png",
          employeeType: ["Engineer", "AI/ML Developer", "Product"],
          numberOfEmployees: "10-50",
        }}
      />

      <div className="flex flex-col min-h-screen bg-white dark:bg-[#0b1121] font-sans">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1121] via-[#0f172a] to-[#1e1b4b]">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-violet-500/15 to-purple-500/15 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-20 sm:pb-28">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex items-center gap-2 text-sm text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white">
                  Careers
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                We&apos;re Hiring — Remote-First
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
                Careers at{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500">
                  Space HR
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                Join our team and be a part of shaping the future of HR with AI.
                We build software that automates payroll, appraisals, and employee
                self-service — so HR teams can focus on people, not admin.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                <a href="#open-positions" className="inline-flex sm:inline-flex">
                  <Button
                    size="lg"
                    className="h-14 px-8 rounded-full text-lg font-semibold bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 text-white shadow-xl shadow-primary/25 hover:-translate-y-1 transition-all"
                  >
                    View Open Positions
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <a href="mailto:careers@spacehr.net">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 rounded-full text-lg font-semibold bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all"
                  >
                    Send Your Resume
                    <Mail className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
                <span className="text-sm text-gray-400">Also find us on:</span>
                <a
                  href="https://www.linkedin.com/company/space-hr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
                >
                  LinkedIn Jobs
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="mailto:careers@spacehr.net"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
                >
                  careers@spacehr.net
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* OPEN POSITIONS */}
        <section id="open-positions" className="py-24 bg-gray-50 dark:bg-[#0f172a] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 text-primary dark:text-cyan-400 text-sm font-medium mb-6">
                <Briefcase className="w-4 h-4" />
                Open Positions
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Find Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
                  Next Role
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                All roles are remote and open to candidates across the US, UAE,
                UK, Singapore, and India.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {careers.map((career) => (
                <div
                  key={career.slug}
                  className="group relative bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 text-primary dark:text-cyan-400 text-xs font-semibold">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {career.experience}
                    </span>
                    <Rocket className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {career.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-grow">
                    {career.tagline}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {career.employmentType.map((type) => (
                      <span
                        key={type}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 text-xs font-medium"
                      >
                        <Clock className="w-3 h-3" />
                        {type}
                      </span>
                    ))}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 text-xs font-medium">
                      <MapPin className="w-3 h-3" />
                      {career.location}
                    </span>
                  </div>

                  <Link
                    href={`/careers/${career.slug}`}
                    className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-white text-sm font-semibold transition-all group-hover:shadow-lg group-hover:shadow-primary/20"
                  >
                    View Job Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Resume CTA */}
            <div className="mt-16 bg-white dark:bg-gray-800/50 rounded-2xl border border-dashed border-gray-300 dark:border-gray-600 p-8 sm:p-12 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-violet-500/25">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Don&apos;t See a Position That Fits Your Skills?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                We&apos;re always looking for exceptional people. Send us your resume
                and we&apos;ll keep you in mind as new roles open up.
              </p>
              <a href="mailto:careers@spacehr.net">
                <Button
                  size="lg"
                  className="h-14 px-10 rounded-full text-lg font-semibold bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white shadow-xl shadow-violet-500/25 hover:-translate-y-1 transition-all"
                >
                  Send Us Your Resume
                  <Mail className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* WHY WORK WITH US */}
        <section className="py-24 bg-white dark:bg-[#0b1121] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 text-primary dark:text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Why Work With Us
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Built by People Who Care About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
                  People
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Space HR is part of the Space AI ecosystem — a profitable,
                bootstrapped product company trusted by 500+ companies worldwide.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${perk.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <perk.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {perk.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 grid sm:grid-cols-3 gap-6">
              {[
                { label: "500+", sub: "Companies trust Space HR" },
                { label: "7+", sub: "Countries served" },
                { label: "48 hrs", sub: "Average setup time" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/60 dark:to-gray-900/60 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
                >
                  <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500 mb-2">
                    {stat.label}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24 bg-gray-50 dark:bg-[#0f172a] relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 text-primary dark:text-cyan-400 text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                Our Hiring Process
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Simple, Transparent,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
                  Quick
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  icon: Mail,
                  title: "Apply",
                  text: "Send your resume via the job page or careers@spacehr.net.",
                },
                {
                  step: "02",
                  icon: Coffee,
                  title: "Intro Call",
                  text: "A 30-minute chat to learn about you and your goals.",
                },
                {
                  step: "03",
                  icon: Brain,
                  title: "Take-Home Task",
                  text: "A short, practical task that mirrors the real work you'll own.",
                },
                {
                  step: "04",
                  icon: Rocket,
                  title: "Offer & Onboarding",
                  text: "We move fast — most candidates get an answer within two weeks.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="relative bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-cyan-500 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-gray-100 dark:text-gray-700">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
                {[
                  "Equal opportunity employer",
                  "Visa sponsorship available",
                  "Remote-first culture",
                ].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 bg-gradient-to-br from-[#0b1121] via-[#0f172a] to-[#1e1b4b] relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-violet-500/15 to-purple-500/15 rounded-full blur-3xl"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build the Future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500">
                HR with AI?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Your work will power payroll for tens of thousands of employees.
              Let&apos;s build something meaningful, together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#open-positions">
                <Button
                  size="lg"
                  className="h-14 px-10 rounded-full text-lg font-semibold bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 text-white shadow-xl shadow-primary/25 hover:-translate-y-1 transition-all"
                >
                  Browse Open Roles
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="mailto:careers@spacehr.net">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-10 rounded-full text-lg font-semibold bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  careers@spacehr.net
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}