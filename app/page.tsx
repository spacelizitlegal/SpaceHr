import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { ArrowRight, BarChart3, Bot, Zap, Users, Play, Star, CheckCircle2, TrendingUp, Search, Bell, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0a0a1f]">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop"
            alt="Abstract Purple Blue Flux"
            fill
            className="object-cover opacity-80"
            priority
          />
          {/* Gradient Overlays for that 'Neon' look */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/60 to-pink-900/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a1f]/20 to-[#0a0a1f]"></div>
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px] animate-pulse delay-700"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: Text Content */}
            <div className="text-left text-white max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight drop-shadow-lg">
                AI-Powered <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Performance Management</span> <br />
                for Modern Teams
              </h1>
              <p className="text-lg md:text-xl text-blue-100/90 mb-8 leading-relaxed font-light">
                Track employee performance, enable continuous feedback, and upskill teams with AI-driven insights and learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-md px-8 h-14 text-base font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-all hover:scale-105 border-0">
                  Request a Demo
                </Button>
                <Button size="lg" variant="outline" className="rounded-md px-8 h-14 text-base font-semibold border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 transition-all">
                  Explore Courses
                </Button>
              </div>
            </div>

            {/* Right: Mock Dashboard Visual */}
            <div className="relative hidden lg:block perspective-1000">
              {/* Floating Elements (Brain/Network) */}
              <div className="absolute -top-20 -right-10 w-48 h-48 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>

              {/* Main Dashboard Card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl transform rotate-y-6 hover:rotate-y-0 transition-transform duration-500 z-10">
                {/* Window Controls */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>

                {/* Dashboard Header */}
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-white text-lg font-semibold">Team Overview</h3>
                    <p className="text-blue-200 text-xs">Updated 2 mins ago</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost" className="text-white/70 h-8 w-8"><Search className="h-4 w-4" /></Button>
                    <Button size="icon" variant="ghost" className="text-white/70 h-8 w-8"><Bell className="h-4 w-4" /></Button>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                  </div>
                </div>

                {/* Dashboard Content Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {/* Chart Area */}
                  <div className="col-span-2 bg-black/20 rounded-xl p-4 border border-white/5">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-blue-100 text-sm font-medium">Performance Trend</span>
                      <TrendingUp className="h-4 w-4 text-green-400" />
                    </div>
                    {/* Mock Chart Visual */}
                    <div className="flex items-end justify-between h-24 gap-2">
                      {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                        <div key={i} className="w-full bg-gradient-to-t from-blue-600/50 to-purple-600/50 rounded-t-sm relative group" style={{ height: `${h}%` }}>
                          <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-400/50 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats Area */}
                  <div className="col-span-1 space-y-4">
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-white/5 flex flex-col items-center justify-center text-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2">
                        <Bot className="h-5 w-5 text-purple-300" />
                      </div>
                      <span className="text-2xl font-bold text-white">98%</span>
                      <span className="text-[10px] text-blue-200">AI Accuracy</span>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-white/5 flex flex-col items-center justify-center text-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2">
                        <Zap className="h-5 w-5 text-cyan-300" />
                      </div>
                      <span className="text-2xl font-bold text-white">12x</span>
                      <span className="text-[10px] text-blue-200">Faster Reviews</span>
                    </div>
                  </div>
                </div>

                {/* Employee List */}
                <div className="space-y-3">
                  {[1, 2].map((_, i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-3 flex items-center justify-between border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${i === 0 ? 'from-orange-400 to-red-400' : 'from-green-400 to-emerald-400'}`}></div>
                        <div>
                          <div className="h-2 w-24 bg-white/20 rounded mb-1"></div>
                          <div className="h-1.5 w-16 bg-white/10 rounded"></div>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="h-3 w-3 text-yellow-500/50 fill-yellow-500/50" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Avatar Card */}
              <div className="absolute -bottom-10 -right-5 bg-white backdrop-blur-md rounded-xl p-4 shadow-2xl border border-white/40 max-w-[200px] z-20 animate-bounce-slow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">AI</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">Growth Plan</p>
                    <p className="text-[10px] text-gray-500">Suggested by AI</p>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Curved Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg className="relative block w-full h-24 md:h-48" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#0a0a1f] opacity-50"></path>
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-gray-50 dark:fill-gray-900"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground">
              Everything you need to scale excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Replace fragmented tools with one cohesive platform designed for the modern enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="col-span-1 md:col-span-2 bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                  <Bot className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">AI-Driven Reviews</CardTitle>
                <CardDescription className="text-base text-muted-foreground mt-2">
                  Eliminate bias and save hours with AI that drafts performance reviews based on real-time data, slack messages, and committed code.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-52 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center border border-dashed border-gray-300 dark:border-gray-700 relative overflow-hidden group-hover:border-indigo-500/30 transition-colors">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
                  <span className="text-muted-foreground text-sm font-medium">Interactive Demo Component</span>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1 bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Real-time Analytics</CardTitle>
                <CardDescription className="text-base">
                  Visualize skill gaps and flight risks before they become problems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mt-4">
                  {[
                    { text: "Headcount Planning", color: "text-purple-500" },
                    { text: "Skill Matrix", color: "text-pink-500" },
                    { text: "Retention Forecasting", color: "text-indigo-500" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-foreground/80">
                      <CheckCircle2 className={`h-4 w-4 mr-3 ${item.color}`} />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="col-span-1 bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center mb-4 text-orange-600 dark:text-orange-400">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Continuous Feedback</CardTitle>
                <CardDescription className="text-base">
                  Foster a culture of growth with seamless, instant feedback loops.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex -space-x-3 overflow-hidden pt-2 pl-1">
                  {[1, 2, 3, 4].map((_, i) => (
                    <div key={i} className={`inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-950 bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 shadow-md`}>
                      {["JD", "AS", "MK", "PL"][i]}
                    </div>
                  ))}
                  <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-semibold text-muted-foreground ring-2 ring-white dark:ring-gray-950">
                    +12
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1 md:col-span-2 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10 border-blue-100/50 dark:border-blue-800/20 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Organizational Alignment</CardTitle>
                <CardDescription className="text-base text-muted-foreground mt-2 relative z-10">
                  Cascade goals from the C-suite to individual contributors with OKRs that actually work. Visualized alignment ensures everyone is moving in the same direction.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="px-0 text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Learn more about OKRs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Preview */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-3">Featured Learning Paths</h2>
              <p className="text-muted-foreground text-lg">Upskill your team with world-class content.</p>
            </div>
            <Link href="/courses">
              <Button variant="ghost" className="hidden sm:flex group text-primary font-medium">
                View All Courses <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "AI Leadership", students: 1200, rating: 4.9, color: "from-purple-500 to-indigo-500", shadow: "shadow-purple-500/20" },
              { title: "Strategic OKRs", students: 850, rating: 4.8, color: "from-blue-500 to-cyan-400", shadow: "shadow-blue-500/20" },
              { title: "Feedback Loops", students: 2100, rating: 4.7, color: "from-orange-500 to-amber-500", shadow: "shadow-orange-500/20" }
            ].map((course, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border hover:shadow-2xl ${course.shadow} transition-all duration-300 cursor-pointer hover:-translate-y-1`}>
                <div className={`h-36 bg-gradient-to-r ${course.color} opacity-90 group-hover:opacity-100 transition-opacity`}>
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.4)_1px,transparent_0)] bg-[size:10px_10px]"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{course.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground gap-4">
                    <span className="flex items-center"><Users className="h-4 w-4 mr-1.5" /> {course.students.toLocaleString()}</span>
                    <span className="flex items-center"><Star className="h-4 w-4 mr-1.5 text-yellow-500 fill-yellow-500" /> {course.rating}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="text-white h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/courses">
              <Button variant="outline" className="w-full">View All Courses</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2029&auto=format&fit=crop"
            alt="Colorful Gradient Background"
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="inline-block rounded-lg bg-white/10 backdrop-blur-sm px-3 py-1 text-sm text-white/80 mb-6 border border-white/20">
            Limited Time Offer
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white drop-shadow-md">
            Ready to shape the future of work?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 font-medium">
            Join the performance revolution. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="font-bold text-primary rounded-full px-8 h-12 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 bg-white hover:bg-white/90">
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white/40 hover:bg-white/10 hover:text-white rounded-full px-8 h-12 backdrop-blur-md">
              Contact Sales
            </Button>
          </div>
          <p className="mt-8 text-xs text-white/60 uppercase tracking-widest font-semibold">
            Used by 10,000+ teams worldwide
          </p>
        </div>
      </section>
    </div>
  );
}
