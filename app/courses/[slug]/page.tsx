"use client";

import { useParams, notFound } from "next/navigation";
import { courses } from "@/lib/courseData";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, CheckCircle, PlayCircle, Clock, Award } from "lucide-react";

export default function CourseDetailPage() {
    const params = useParams();
    const slug = params.slug as string;

    const course = courses.find((c) => c.slug === slug);

    if (!course) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white dark:bg-[#0f172a] font-sans">

            {/* Hero */}
            <section className="bg-gray-50 dark:bg-gray-900 pt-32 pb-20 border-b border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/courses" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Courses
                    </Link>

                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="lg:w-2/3">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                                {course.title}
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                {course.marketingDescription}
                            </p>

                            <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-500 dark:text-gray-400 mb-8">
                                <div className="flex items-center gap-2">
                                    <PlayCircle className="w-5 h-5 text-primary" />
                                    <span>{course.modules} Modules</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-primary" />
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Award className="w-5 h-5 text-primary" />
                                    <span>Certificate of Completion</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/3 w-full">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 sticky top-24">
                                <div className="relative aspect-video rounded-lg overflow-hidden mb-6 bg-gray-100">
                                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                                </div>
                                <Link href="https://cad.spaceaiapp.com/login" className="block w-full">
                                    <Button size="lg" className="w-full rounded-xl font-bold h-12 mb-4 text-base">
                                        Start Learning Now
                                    </Button>
                                </Link>
                                <p className="text-center text-xs text-gray-500">
                                    Free with your SpaceHR subscription
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Details */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mx-0">
                    <div className="lg:w-2/3">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What you'll learn</h2>
                        <div className="grid sm:grid-cols-2 gap-4 mb-16">
                            {course.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">{highlight}</span>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Course Description</h2>
                        <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300">
                            <p>{course.description}</p>
                            <p>
                                This comprehensive course {course.title} is designed to equip you with the skills needed to excel in today's fast-paced work environment.
                                Through {course.modules} in-depth modules, you will explore real-world scenarios, engage in interactive exercises, and gain practical insights that you can apply immediately.
                            </p>
                            <p>
                                Whether you are looking to upskill for a new role or enhance your current performance, this course offers a structured learning path tailored to your professional growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
