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
          <Link
            href="/courses"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary mb-8 transition-colors"
          >
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
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Link
                  href="https://cad.spaceaiapp.com/login"
                  className="block w-full"
                >
                  <Button
                    size="lg"
                    className="w-full rounded-xl font-bold h-12 mb-4 text-base"
                  >
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              What you'll learn
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-16">
              {course.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Course Overview
            </h2>
            <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 mb-12">
              <p>{course.description}</p>
              <p>
                This comprehensive course is designed to equip you with the
                skills needed to excel in today's fast-paced work environment.
                Through {course.modules} in-depth modules, you will explore
                real-world scenarios, engage in interactive exercises, and gain
                practical insights that you can apply immediately.
              </p>
              <p>
                Whether you are looking to upskill for a new role or enhance
                your current performance, this course offers a structured
                learning path tailored to your professional growth.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Integrated Course Management
            </h2>
            <div className="grid gap-6 mb-12">
              {/* Pre-Built Library */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Pre-Built Course Library
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      Access 50+ professionally designed courses covering
                      leadership, communication, technical skills, compliance,
                      and industry best practices. Launch your learning program
                      immediately without content creation overhead.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>
                          Expert-authored content with real-world applications
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>
                          Interactive quizzes and assessments included
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>
                          Automatic progress tracking and completion
                          certificates
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Custom Content Integration */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-100 dark:border-purple-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center shrink-0">
                    <PlayCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Custom Content Integration
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      Upload your proprietary training materials, company
                      policies, and specialized content. Seamlessly blend custom
                      courses with our library to create a unified learning
                      experience tailored to your organization.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>
                          Support for video, PDF, SCORM, and interactive modules
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Custom branding and course design tools</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>
                          Version control and content update management
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Learning Management Features */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl p-6 border border-green-100 dark:border-green-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Advanced Learning Management
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      Assign courses based on roles, departments, or performance
                      goals. Track completion rates, quiz scores, and skill
                      development with powerful analytics dashboards for
                      managers and admins.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>
                          Automated course assignments and deadline reminders
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>
                          Learning paths and skill progression tracking
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>
                          Integration with performance appraisal recommendations
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
