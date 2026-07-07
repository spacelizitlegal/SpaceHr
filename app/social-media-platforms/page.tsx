import { Metadata } from "next";
import Link from "next/link";
import { JsonLd, generateBreadcrumbSchema } from "@/components/JsonLd";
import {
  ArrowUpRight,
  CheckCircle,
  Globe,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Space HR Social Media & Community Platforms",
  description:
    "Follow Space HR across official social channels and community platforms. Stay updated on AI HR insights, product launches, and workforce management news.",
  alternates: {
    canonical: "https://spacehr.net/social-media-platforms",
  },
  openGraph: {
    title: "Space HR Social Media & Community Platforms",
    description:
      "Find Space HR across X, LinkedIn, Instagram, YouTube, SaaSHub, F6S and more.",
    type: "website",
    url: "https://spacehr.net/social-media-platforms",
    siteName: "Space HR",
  },
};

const breadcrumb = [
  { name: "Home", url: "https://spacehr.net" },
  { name: "Social Media Platforms", url: "https://spacehr.net/social-media-platforms" },
];

const officialChannels = [
  {
    name: "X (Twitter)",
    handle: "@SpaceHR197173",
    description:
      "Quick updates on AI HR automation, product launches, payroll compliance tips, and workforce management insights.",
    url: "https://x.com/Space HR197173",
    icon: Twitter,
    iconColor: "text-sky-400",
    iconBg: "bg-sky-400/10",
    borderHover: "hover:border-sky-400/40",
  },
  {
    name: "Instagram",
    handle: "@space_hr7",
    description:
      "Visual stories, product moments, HR technology highlights, and Space HR brand updates.",
    url: "https://www.instagram.com/space_hr7",
    icon: Instagram,
    iconColor: "text-pink-400",
    iconBg: "bg-pink-400/10",
    borderHover: "hover:border-pink-400/40",
  },
  {
    name: "YouTube",
    handle: "@SpaceHR7",
    description:
      "Product demos, feature walkthroughs, HR automation tutorials, and workforce management webinars.",
    url: "https://youtube.com/@SpaceHR7",
    icon: Youtube,
    iconColor: "text-red-400",
    iconBg: "bg-red-400/10",
    borderHover: "hover:border-red-400/40",
  },
  {
    name: "LinkedIn",
    handle: "Space HR",
    description:
      "Company news, AI HR thought leadership, hiring updates, and enterprise workforce announcements.",
    url: "https://www.linkedin.com/company/space-hr",
    icon: Linkedin,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/10",
    borderHover: "hover:border-blue-400/40",
  },
];

const discoveryPlatforms = [
  {
    name: "SaaSHub",
    description:
      "Space HR software listing on SaaSHub — ratings, alternatives, and product discovery.",
    url: "https://www.saashub.com/Space HR",
    status: "REGISTERED",
    statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    borderHover: "hover:border-violet-400/30",
  },
  {
    name: "F6S",
    description:
      "Space HR startup profile on F6S for funding visibility, deals, and growth programs.",
    url: "https://www.f6s.com/Space HR",
    status: "REGISTERED",
    statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    borderHover: "hover:border-orange-400/30",
  },
];

export default function SocialMediaPlatformsPage() {
  const totalPlatforms = officialChannels.length + discoveryPlatforms.length;

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumb)} />

      <div className="flex flex-col min-h-screen font-sans bg-[#0b1121]">
        {/* HERO */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#0b1121] via-slate-900 to-[#0b1121]">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-violet-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Official Space HR profiles</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Space HR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-400 to-blue-400">
                Social Media Platforms
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Follow Space HR across our official channels for AI HR insights, product updates,
              platform demos, and company announcements.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                {officialChannels.length} official channels
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
                <Globe className="w-4 h-4 text-blue-400" />
                {totalPlatforms} platforms listed
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                {discoveryPlatforms.length} registered links
              </div>
            </div>
          </div>
        </section>

        {/* OFFICIAL CHANNELS */}
        <section className="py-16 bg-[#0b1121]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-1">Verified Links</p>
              <h2 className="text-2xl font-bold text-white">Official Space HR profiles</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {officialChannels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.name}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 ${channel.borderHover} hover:bg-white/8 transition-all duration-200`}
                  >
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-xl ${channel.iconBg} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${channel.iconColor}`} />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg mb-0.5">{channel.name}</p>
                      <p className={`text-sm font-medium mb-3 ${channel.iconColor}`}>{channel.handle}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{channel.description}</p>
                    </div>
                    <p className={`text-sm font-semibold ${channel.iconColor} group-hover:underline`}>
                      Open profile
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* COMMUNITY & DISCOVERY */}
        <section className="py-16 bg-[#0b1121] border-t border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-2">More Platforms</p>
              <h2 className="text-2xl font-bold text-white mb-3">Social, community, and discovery links</h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Registered Space HR platforms and confirmed public listings. More platforms will be added as new profiles are published.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {discoveryPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex flex-col gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 ${platform.borderHover} hover:bg-white/8 transition-all duration-200`}
                >
                  <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${platform.statusColor}`}>
                    {platform.status}
                  </span>
                  <div className={`w-10 h-10 rounded-xl ${platform.iconBg} flex items-center justify-center`}>
                    <Globe className={`w-5 h-5 ${platform.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-white font-bold mb-1">{platform.name}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{platform.description}</p>
                  </div>
                  <p className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors flex items-center gap-1">
                    Open registered link
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </p>
                </a>
              ))}

              {/* Coming soon placeholder */}
              <div className="flex flex-col gap-3 p-6 rounded-2xl bg-white/3 border border-dashed border-white/10 opacity-50">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <p className="text-slate-500 font-bold mb-1">More coming soon</p>
                  <p className="text-slate-600 text-sm">New platform registrations are added as Space HR expands its presence.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-slate-900 via-gray-900 to-black border-t border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
            <h2 className="text-2xl font-bold text-white mb-3">Stay connected with Space HR</h2>
            <p className="text-slate-300 mb-8 text-sm">
              Follow us on your preferred platform for AI HR news, feature launches, and workforce management insights.
            </p>
            <Link
              href="/request-a-demo"
              className="inline-flex items-center gap-2 rounded-full h-12 px-8 text-sm font-bold bg-gradient-to-r from-pink-500 via-violet-500 to-blue-600 hover:from-pink-600 hover:via-violet-600 hover:to-blue-700 text-white shadow-xl transition-all"
            >
              Book a Demo
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
