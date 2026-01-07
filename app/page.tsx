import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, BarChart3, Users, Zap, Award, CheckCircle, PlayCircle, Globe, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white dark:bg-[#0b1121] overflow-x-hidden">

      {/* 1. HERO SECTION - Full width with gradient overlay */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80"
            alt="Team collaboration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1121]/95 via-[#0b1121]/80 to-primary/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1121] via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-5xl translate-y-[-5%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            The Future of Work is Here
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight drop-shadow-sm animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Performance Management <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">Reimagined for Growth</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Align goals, develop talent, and drive results with the only AI-powered platform built for the modern enterprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Link href="#demo">
              <Button size="lg" className="h-14 px-8 rounded-full text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25 hover:shadow-2xl hover:-translate-y-1 transition-all">
                Request Demo
              </Button>
            </Link>
            <Link href="/features">
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-lg font-semibold bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all">
                Explore Platform
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. EMBEDDED VIDEO SECTION */}
      <section className="py-24 bg-[#0b1121] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">See AIPerform in Action</h2>
            <p className="text-gray-400 text-lg">Watch how top companies use our platform to transform their culture regardless of team size.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Decorative Elements */}
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>

            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/50 group">
              {/* Play Button Overlay (simulated for placeholder) */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-primary/80 transition-all duration-500 scale-100 group-hover:scale-110">
                  <PlayCircle className="w-10 h-10 text-white fill-white/20" />
                </div>
              </div>

              {/* Fallback Image / Video Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-[#1a2035]">
                {/* In production this would be an iframe */}
                <div className="w-full h-full flex items-center justify-center text-gray-500 font-medium">
                  <Image
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1740&q=80"
                    alt="Video Thumbnail"
                    fill
                    className="object-cover opacity-60"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURE HIGHLIGHT - Dynamic Bento Grid */}
      <section className="py-24 bg-gray-50 dark:bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Features</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-6">Built for the future of work.</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">Everything you need to build high-performing teams, from AI coaching to succession planning.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

            {/* Large Card 1 */}
            <div className="md:col-span-2 rounded-3xl p-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden group shadow-xl">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">AI Performance Tracking</h3>
                  <p className="text-blue-100 text-lg max-w-md">Real-time analytics that identify coaching opportunities and potential burnout before it happens.</p>
                </div>
                <Link href="/features">
                  <Button variant="ghost" className="w-fit text-white hover:bg-white/10 group-hover:translate-x-2 transition-all p-0 h-auto font-semibold mt-8">
                    View Analytics <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
              {/* Abstract Visual */}
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-30 translate-x-1/4 translate-y-1/4">
                <div className="w-full h-full bg-white rounded-tl-full"></div>
              </div>
            </div>

            {/* Tall Card 2 */}
            <div className="md:row-span-2 rounded-3xl p-8 bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-gray-800 shadow-xl relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-6 text-teal-600 dark:text-teal-400">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Manager Insights</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">Empower managers with conversation guides and bias checks.</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-teal-50/50 to-transparent dark:from-teal-900/10">
                {/* Mock Chat UI */}
                <div className="mx-6 mt-10 space-y-3">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg rounded-tl-none shadow-sm text-xs text-gray-600 dark:text-gray-300 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-500">
                    How can I help Sarah improve her presentation skills?
                  </div>
                  <div className="bg-teal-100 dark:bg-teal-900/50 p-3 rounded-lg rounded-tr-none shadow-sm text-xs text-teal-900 dark:text-teal-100 ml-auto w-fit transform -translate-x-0 group-hover:-translate-x-2 transition-transform duration-500 delay-100">
                    Suggest joining the advanced public speaking workshop next week.
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl p-8 bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-gray-800 shadow-xl group hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Goal Alignment</h3>
              <p className="text-gray-600 dark:text-gray-400">Connect individual OKRs to company-wide strategic objectives instantly.</p>
            </div>

            {/* Card 4 - Image Background */}
            <div className="md:col-span-2 rounded-3xl relative overflow-hidden shadow-xl min-h-[300px] group">
              <Image
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=1740&q=80"
                alt="Meeting"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 z-10">
                <h3 className="text-2xl font-bold text-white mb-2">Smart Learning Paths</h3>
                <p className="text-gray-300 max-w-lg">Automatically assign training courses based on performance reviews and career aspirations.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. VISUAL STORY SECTION - Alternating Layout */}
      <section className="py-32 bg-white dark:bg-[#0b1121] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

          {/* Story 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-100 dark:bg-pink-900/20 rounded-full blur-3xl"></div>
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1740&q=80"
                  alt="Happy employee"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl relative z-10"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl flex items-center gap-3 z-20 animate-bounce-slow border border-gray-100 dark:border-gray-700">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Promotion Ready</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Yes, 98% Match</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Create a culture where people <span className="text-primary">want to stay</span>.</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Retention starts with engagement. Give your employees a clear vision of their future at your company with transparent career paths and continuous development opportunities.
              </p>
              <ul className="space-y-4">
                {['Reduce turnover by 30%', 'Increase internal mobility', 'Boost employee satisfaction scores'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-gray-800 dark:text-gray-200">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Story 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2">
              {/* Abstract Globe Visual */}
              <div className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-square flex items-center justify-center shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-900 opacity-50"></div>
                <Globe className="w-64 h-64 text-white/5 absolute animate-spin-slow" />
                <div className="relative z-10 text-center p-8">
                  <ShieldCheck className="w-16 h-16 text-teal-400 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-2">Enterprise Ready</h3>
                  <p className="text-lg text-gray-300">SOC2 Type II Certified<br />GDPR Compliant</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Security and scale built for the <span className="text-indigo-600 dark:text-indigo-400">Fortune 500</span>.</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Deploy with confidence. Our platform scales to support 100,000+ employees with bank-grade security and 99.99% uptime guarantees.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-indigo-600 pl-4">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">2.5x</p>
                  <p className="text-sm text-gray-500">Faster Onboarding</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">100%</p>
                  <p className="text-sm text-gray-500">Data Encryption</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CTA SECTION - Final Impact */}
      <section className="py-32 relative overflow-hidden bg-black">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px]"></div>

        <div className="container relative z-10 px-4 text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">Ready to transform your workforce?</h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12">Join the forward-thinking companies building the future of work with AIPerform.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="https://cad.spaceaiapp.com/login">
              <Button size="lg" className="h-16 px-10 rounded-full text-xl font-bold bg-white text-black hover:bg-gray-100 transition-all transform hover:scale-105">
                Get Started Now
              </Button>
            </Link>
            <Link href="#demo">
              <Button size="lg" variant="outline" className="h-16 px-10 rounded-full text-xl font-bold border-white/20 text-white hover:bg-white/10">
                Talk to Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
