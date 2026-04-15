import { Metadata } from "next";
import { courses } from "@/lib/courseData";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return {
      title: "Course Not Found | SpaceHR",
      robots: { index: false, follow: false },
    };
  }

  const title = `${course.title} | SpaceHR HR Courses`;
  const description = (course.description || course.marketingDescription || "").slice(0, 160);

  return {
    title,
    description,
    keywords: [
      course.title,
      "HR training",
      "HR courses",
      "employee development",
      "SpaceHR",
      "online HR courses",
      "learning management system",
    ],
    alternates: {
      canonical: `https://spacehr.net/courses/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://spacehr.net/courses/${slug}`,
      siteName: "SpaceHR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function CourseSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
