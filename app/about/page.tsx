import { Metadata } from "next";
import { JsonLd, generateFAQSchema,
  generateBreadcrumbSchema } from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  Globe,
  Award,
  Rocket,
  Shield,
  Zap,
  CheckCircle,
  Star,
  Cpu,
  Brain,
  Sparkles,
  ChevronRight,
  Calendar,
  Trophy,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About SpaceHR — AI-Powered HR Platform for Growing Teams",
  description:
    "SpaceHR is an AI-powered HR and payroll platform built for mid-market companies. Learn about our mission, the team behind SpaceHR, and why HR leaders trust us to automate chatbots, payroll anomaly detection, and workforce forecasting.",
  keywords: [
    "Space AI",
    "Space HR",
    "about us",
    "HR technology company",
    "AI innovation",
    "spatial apps partner",
    "human capital management",
    "workforce solutions",
    "enterprise software",
    "HR automation",
  ],
  openGraph: {
    title: "About SpaceHR — AI-Powered HR Platform for Growing Teams",
    description:
      "Meet the team behind Space HR. We build AI that automates HR chatbots, payroll anomaly detection, labor cost forecasting, and 360 appraisals — so HR teams can focus on people, not admin.",
    type: "website",
    url: "https://spacehr.net/about",
    siteName: "SpaceHR",
    images: [
      {
        url: "/desktop-design-showcase.webp",
        width: 1200,
        height: 630,
        alt: "SpaceHR Team and Platform",
      },
    ],
  },
  alternates: {
    canonical: "https://spacehr.net/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SpaceHR — AI-Powered HR Platform",
    description:
      "AI HR chatbots, payroll anomaly detection, labor cost forecasting, and 360 appraisals — meet the team behind SpaceHR.",
    images: ["/desktop-design-showcase.webp"],
  },
};

const _bc_about = [{"name":"Home","url":"https://spacehr.net"},{"name":"About","url":"https://spacehr.net/about"}];

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We push boundaries and embrace cutting-edge AI technology to solve complex HR challenges that others consider impossible.",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-500/10",
    },
    {
      icon: Heart,
      title: "Customer Obsession",
      description:
        "Every feature we build, every decision we make starts with one question: How does this help our customers succeed?",
      color: "from-pink-500 to-violet-600",
      bgColor: "bg-pink-500/10",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "We protect your data like it's our own. Enterprise-grade security and compliance are non-negotiable standards.",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-500/10",
    },
    {
      icon: Users,
      title: "People Matter",
      description:
        "Behind every data point is a person. We design with empathy, ensuring technology enhances human potential.",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Zap,
      title: "Speed & Excellence",
      description:
        "We move fast without breaking things. Rapid iteration meets rigorous quality in everything we deliver.",
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-500/10",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "We're building for the world. Our solutions work across cultures, currencies, and compliance requirements.",
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-500/10",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Space AI founded with a vision to transform enterprise software through spatial computing and AI.",
      icon: Rocket,
    },
    {
      year: "2021",
      title: "Space HR Launched",
      description: "Our flagship HR platform launched, combining AI intelligence with intuitive design.",
      icon: Sparkles,
    },
    {
      year: "2022",
      title: "100+ Customers",
      description: "Crossed 100 enterprise customers, processing payroll for 10,000+ employees.",
      icon: Users,
    },
    {
      year: "2023",
      title: "AI Revolution",
      description: "Introduced advanced AI chatbots, automation, and predictive analytics capabilities.",
      icon: Brain,
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded to 15+ countries with multi-currency and compliance support.",
      icon: Globe,
    },
    {
      year: "2025",
      title: "500+ Companies",
      description: "Now trusted by 500+ companies worldwide, processing $2.3B+ in annual payroll.",
      icon: Trophy,
    },
  ];

const aboutFAQs = [
  {
    question: "What is Space HR?",
    answer: "Space HR is an AI-powered Human Capital Management (HCM) platform that combines core HRMS features — payroll, leave, attendance, performance — with advanced AI capabilities including attrition prediction, payroll anomaly detection, and an AI HR chatbot. It is built for mid-sized and growing organizations.",
  },
  {
    question: "What makes Space HR different from other HR software?",
    answer: "Space HR natively embeds AI into every workflow rather than bolting it on as an add-on. Features like real-time payroll anomaly detection, workforce attrition prediction, and an AI HR concierge are built into the core platform — not separate modules. This gives HR teams predictive insights, not just reporting.",
  },
  {
    question: "What company sizes does Space HR serve?",
    answer: "Space HR is optimized for companies with 50 to 2,000 employees. It scales from growing startups establishing their first HR processes to established mid-market companies needing enterprise-grade compliance and analytics without the complexity of legacy systems.",
  },
  {
    question: "Which countries and regions does Space HR support?",
    answer: "Space HR supports organizations across the United States, UAE, Singapore, Canada, and Europe. The platform handles multi-country payroll, local tax compliance, regional holiday calendars, and GDPR/PDPA data residency requirements.",
  },
  {
    question: "Is Space HR GDPR compliant?",
    answer: "Yes. Space HR is built with data privacy by design. All employee data is encrypted at rest and in transit, role-based access controls limit data exposure, and the platform supports data residency requirements for GDPR (EU), PDPA (Singapore), and equivalent regional regulations.",
  },
  {
    question: "How long does Space HR implementation take?",
    answer: "Most customers go live within 2 weeks. Our implementation team handles data migration, configuration, and training. Unlike enterprise systems that take 6–18 months, Space HR is designed for rapid deployment without sacrificing depth.",
  },
  {
    question: "Does Space HR integrate with existing tools?",
    answer: "Yes. Space HR integrates with accounting platforms (QuickBooks, Xero), collaboration tools (Slack, Microsoft Teams), single sign-on (Okta, Google Workspace), and ERP systems via REST API. Our open API allows custom integrations.",
  },
  {
    question: "Is there a free trial or demo available?",
    answer: "Yes. You can book a personalized 30-minute demo with our team or request a guided trial. Visit the Request a Demo page to get started — no credit card required.",
  },
];
  const faqSchema = generateFAQSchema(aboutFAQs);
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SpaceHR",
    alternateName: "Space AI",
    url: "https://spacehr.net",
    logo: "https://spacehr.net/about_logo.png",
    description:
      "SpaceHR is an AI-powered HR and payroll platform that automates employee self-service, payroll anomaly detection, labor cost forecasting, attrition prediction, and 360-degree performance appraisals for mid-market and enterprise companies.",
    foundingDate: "2023",
    parentOrganization: {
      "@type": "Organization",
      "@id": "https://spaceaiapp.com/#organization",
      name: "Space AI",
      url: "https://spaceaiapp.com",
    },
    founders: [
      {
        "@type": "Person",
        name: "Thomas Jomon",
        jobTitle: "Co-Founder, President & Chief AI Officer",
        url: "https://pmspace.ai/space-team",
        sameAs: "https://www.linkedin.com/in/thomas-jomon-45475327/",
      },
      {
        "@type": "Person",
        name: "Bibin Prathap",
        url: "https://bibinprathap.com",
        sameAs: "https://bibinprathap.com",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@spacehr.net",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.linkedin.com/company/spacehr",
      "https://twitter.com/spacehr",
      "https://g2.com/products/spacehr",
      "https://pmspace.ai",
      "https://spaceaiapp.com",
      "https://bibinprathap.com",
      "https://space-sign.ai",
      "https://spacecapture.ai",
      "https://spacelizit.com",
      "https://spacelean.ai",
      "https://spacenexus.net",
      "https://spacecrm.net",
    ],
    knowsAbout: [
      "HR automation",
      "AI payroll software",
      "employee self-service chatbot",
      "workforce cost forecasting",
      "attrition prediction",
      "360-degree performance appraisals",
    ],
  };

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(_bc_about)} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={faqSchema} />
      <div className="flex flex-col min-h-screen font-sans bg-white dark:bg-[#0b1121]">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/team-meeting-collaboration.webp"
            alt="Team collaboration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1121]/95 via-[#0b1121]/85 to-primary/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1121] via-transparent to-transparent"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-5xl mx-auto text-center">
            {/* Logo Badge */}
            <div className="inline-flex items-center justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-violet-500 rounded-full blur-xl opacity-50"></div>
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-6">
                  <Image
                    src="/about_logo.png"
                    alt="Space AI Logo"
                    width={96}
                    height={96}
                    className="h-24 w-24 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
              We Are{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-primary to-violet-400">
                Space AI
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200 font-semibold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Your Spatial Apps Partner
            </p>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
              We're a team of visionaries, engineers, and dreamers united by a single mission: 
              to transform how organizations manage, develop, and empower their workforce through 
              the power of artificial intelligence and spatial computing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
              <Link href="/request-a-demo">
                <Button
                  size="lg"
                  className="h-14 px-8 rounded-full text-lg font-semibold bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 text-white shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all"
                >
                  Experience Space HR
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="#our-story">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 rounded-full text-lg font-semibold bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all"
                >
                  Our Story
                  <ChevronRight className="ml-1 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section id="our-story" className="py-24 bg-gray-50 dark:bg-[#0f172a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/5 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 text-primary dark:text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Our Story
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Born from a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
                  Vision
                </span>{" "}
                to Transform HR
              </h2>
              
              <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                <p>
                  Space AI was founded in 2020 with a bold vision: to create software that doesn't just manage 
                  employees—it <span className="text-gray-900 dark:text-white font-semibold">empowers them</span>. 
                  We saw how traditional HR systems were failing modern organizations, drowning them in 
                  paperwork while missing the bigger picture.
                </p>
                <p>
                  Our flagship product, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500 font-bold">Space HR</span>, 
                  emerged from countless conversations with HR leaders who were frustrated with clunky interfaces, 
                  disconnected systems, and the inability to gain actionable insights from their workforce data.
                </p>
                <p>
                  Today, we serve 500+ companies across 15 countries, processing billions in payroll and helping
                  organizations build cultures where people genuinely thrive. But we're just getting started.
                </p>
                <p>
                  Space HR is one product in the broader{" "}
                  <a
                    href="https://pmspace.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
                  >
                    Space AI ecosystem
                  </a>
                  {" "}— the same team also builds{" "}
                  <a href="https://pmspace.ai" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">PM Space AI</a>,{" "}
                  <a href="https://spacecrm.net" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">Space CRM</a>,{" "}
                  <a href="https://space-sign.ai" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">Space Sign</a>,{" "}
                  and four other enterprise tools. These products share a common platform, unified authentication, and native integrations with Space HR — so HR data flows freely across your entire operation.
                </p>
                <p>
                  Space AI was co-founded by Thomas Jomon (President &amp; Chief AI Officer) and{" "}
                  <a
                    href="https://bibinprathap.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
                  >
                    Bibin Prathap
                  </a>
                  , bringing together deep expertise in enterprise AI, product strategy, and spatial computing. Learn more about the vision behind Space AI at{" "}
                  <a
                    href="https://bibinprathap.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    bibinprathap.com
                  </a>
                  .
                </p>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <Link href="/features">
                  <Button className="bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-white rounded-full px-6">
                    Explore Space HR
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/integrations/space-ai">
                  <Button variant="outline" className="rounded-full px-6 border-primary/30 text-primary dark:text-cyan-400 hover:bg-primary/5">
                    See Integrations
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right - Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/desktop-design-showcase.webp"
                      alt="Team collaboration"
                      width={300}
                      height={400}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/professional-woman-laptop.webp"
                      alt="Innovation"
                      width={300}
                      height={200}
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/office-team-presentation.webp"
                      alt="Team working"
                      width={300}
                      height={200}
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/engineering-blueprint-review.webp"
                      alt="Meeting"
                      width={300}
                      height={400}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-2xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary to-cyan-500 flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Since 2020</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">Innovating HR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-white dark:bg-[#0b1121] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 border border-gray-200 dark:border-gray-700 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-primary/25">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  To empower every organization—from startups to enterprises—with intelligent, intuitive 
                  HR technology that automates the mundane, surfaces critical insights, and helps leaders 
                  build workplaces where people do their best work.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 text-primary dark:text-cyan-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Automate • Analyze • Accelerate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 border border-gray-200 dark:border-gray-700 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center mb-6 shadow-lg shadow-violet-500/25">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  A world where HR technology is invisible yet indispensable—where AI handles complexity 
                  so human leaders can focus on what matters most: nurturing talent, fostering growth, 
                  and creating cultures of belonging and excellence.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 text-violet-600 dark:text-violet-400">
                    <Star className="w-5 h-5" />
                    <span className="font-medium">Human-Centered • AI-Powered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 text-primary dark:text-cyan-400 text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              What Drives Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Core{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
                Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These aren't just words on a wall. They're the principles we hire by, build by, and measure ourselves against every day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE / JOURNEY */}


      {/* SPACE HR PRODUCT HIGHLIGHT */}
      <section className="py-24 bg-gradient-to-br from-[#0b1121] via-[#0f172a] to-[#1e1b4b] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-violet-500/15 to-purple-500/15 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
              <Cpu className="w-4 h-4" />
              Our Flagship Product
            </div>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="relative h-20 w-20">
                <Image
                  src="/hrlogonly.png"
                  alt="Space HR"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  loading="lazy"
                />
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Space{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500">
                  HR
                </span>
              </h2>
            </div>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              The complete AI-powered Human Capital Management platform. From payroll to performance, 
              tax compliance to talent development—Space HR handles it all with intelligent automation 
              and beautiful simplicity.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <Brain className="w-10 h-10 text-violet-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
                <p className="text-gray-400 text-sm">Intelligent automation that learns and adapts to your organization</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <Shield className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">100% Compliant</h3>
                <p className="text-gray-400 text-sm">Automatic tax calculations and regulatory compliance</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <Zap className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-400 text-sm">Run payroll in 5 minutes, not 5 hours</p>
              </div>
            </div>

            <Link href="/features">
              <Button
                size="lg"
                className="h-14 px-10 rounded-full text-lg font-semibold bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 hover:from-pink-400 hover:via-violet-400 hover:to-blue-400 text-white shadow-xl shadow-violet-500/25 hover:shadow-2xl hover:shadow-violet-500/40 hover:-translate-y-1 transition-all"
              >
                Explore All Features
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-white dark:bg-[#0b1121] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-cyan-500/5 to-violet-500/5"></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
                HR Operations?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Join 500+ forward-thinking companies that have already made the switch to intelligent HR management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-a-demo">
                <Button
                  size="lg"
                  className="h-14 px-10 rounded-full text-lg font-semibold bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 text-white shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all"
                >
                  Request a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-10 rounded-full text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Setup in 48 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Common questions about Space HR and our AI platform.</p>
          </div>
          <FAQAccordion items={aboutFAQs} />
        </div>
      </section>
    </div>
    </>
  );
}
