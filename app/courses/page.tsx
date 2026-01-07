"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { BookOpen, Users, Award, PlayCircle, ArrowRight, CheckCircle } from "lucide-react";
import { courses } from "@/lib/courseData";

export default function CoursesPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0f172a] font-sans">

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-900/10 -z-10"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
                        SpaceHR Academy
                    </span>
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
                        Unlock your team's <span className="text-primary">full potential</span>.
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                        World-class training for the modern workforce. From leadership fundamentals to AI mastery, empower your people to grow.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="#catalog">
                            <Button size="lg" className="rounded-full px-8 text-lg h-12 shadow-lg hover:shadow-xl transition-all">
                                Explore The Academy
                            </Button>
                        </Link>
                        <Link href="#catalog">
                            <Button variant="outline" size="lg" className="rounded-full px-8 h-12">
                                Browse Catalog
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 border-y border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-white/5 backdrop-blur-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">50+</div>
                            <div className="text-sm text-gray-500 font-medium">Expert Courses</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">10k+</div>
                            <div className="text-sm text-gray-500 font-medium">Learners</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">98%</div>
                            <div className="text-sm text-gray-500 font-medium">Satisfaction Rate</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">24/7</div>
                            <div className="text-sm text-gray-500 font-medium">Access</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Catalog */}
            <section id="catalog" className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            World-Class Content Library
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Curated learning paths designed to drive immediate business impact.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course) => (
                            <div key={course.slug} className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute bottom-4 left-4 right-4 z-20">
                                        <div className="flex items-center gap-2 text-white/90 text-xs font-medium mb-1">
                                            <span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-md">{course.modules} Modules</span>
                                            <span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-md">{course.duration}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                                        {course.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-1">
                                        {course.description}
                                    </p>

                                    <div className="space-y-2 mb-6">
                                        {course.highlights.slice(0, 2).map((highlight, i) => (
                                            <div key={i} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link href={`/courses/${course.slug}`}>
                                        <Button className="w-full rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                                            Explore Course
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pb-24 pt-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 filter contrast-150 brightness-100 mix-blend-overlay"></div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start your learning journey today.</h2>
                            <p className="text-lg text-white/90 mb-10">
                                Get unlimited access to our full catalog of premium courses with a 14-day free trial.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link href="https://cad.spaceaiapp.com/login">
                                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 rounded-full h-12 shadow-xl">
                                        Start Free Trial
                                    </Button>
                                </Link>
                                <Link href="/#demo">
                                    <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 rounded-full h-12">
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
