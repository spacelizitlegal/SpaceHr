import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Powered Learning Management System",
  description:
    "Boost employee growth with AI-powered learning. Assign courses and track progress with AI-generated quizzes, summaries, and gamified engagement tools.",
  keywords: [
    "learning management system",
    "employee training software",
    "AI learning platform",
    "course management",
    "employee development",
    "AI quiz generator",
    "learning analytics",
    "gamified learning",
    "corporate training platform",
    "LMS software",
    "AI-powered training",
    "employee upskilling",
  ],
  openGraph: {
    title: "AI-Powered Learning Management | Space HR",
    description:
      "Empower your workforce with intelligent course management, AI-generated quizzes, real-time progress tracking, and gamified achievements.",
    url: "https://spacehr.net/courses",
    images: [
      {
        url: "/og-courses.jpg",
        width: 1200,
        height: 630,
        alt: "Space HR Learning Management System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Learning Management | Space HR",
    description:
      "Transform employee development with AI intelligence, progress tracking, and gamification.",
    images: ["/og-courses.jpg"],
  },
  alternates: {
    canonical: "https://spacehr.net/courses",
  },
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
