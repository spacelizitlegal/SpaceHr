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
      title: "Course Not Found | Space HR",
      robots: { index: false, follow: false },
    };
  }

  const title = `${course.title} | Space HR HR Courses`;
  const description = (course.description || course.marketingDescription || "").slice(0, 160);

  return {
    title,
    description,
    keywords: [
      course.title,
      "HR training",
      "HR courses",
      "employee development",
      "Space HR",
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
      siteName: "Space HR",
      type: "article",
      ...(course.image && { images: [{ url: course.image, width: 1200, height: 630, alt: course.title }] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(course.image && { images: [course.image] }),
    },
  };
}

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export default async function CourseSlugLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  const courseSchema = course
    ? {
        "@context": "https://schema.org",
        "@type": "Course",
        name: course.title,
        description: course.description || course.marketingDescription,
        provider: {
          "@type": "Organization",
          name: "Space HR",
          url: "https://spacehr.net",
        },
        url: `https://spacehr.net/courses/${slug}`,
        hasCourseInstance: [
          {
            "@type": "CourseInstance",
            courseMode: "online",
            duration: course.duration,
          },
        ],
        teaches: course.highlights,
        ...(course.image && {
          image: `https://spacehr.net${course.image}`,
        }),
      }
    : null;

  return (
    <>
      {courseSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
      )}
      {children}
    </>
  );
}
