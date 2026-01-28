import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HR Insights & Leadership Blog",
  description:
    "Explore expert perspectives on leadership, AI technology, and organizational culture. Stay ahead with deep dives into the future of work and performance.",
  keywords: [
    "HR blog",
    "leadership insights",
    "workplace culture",
    "employee engagement",
    "performance management tips",
    "HR trends",
    "future of work",
    "organizational development",
    "HR best practices",
  ],
  openGraph: {
    title: "HR Insights & Leadership Blog | Space HR",
    description:
      "Expert perspectives on leadership, AI technology, and organizational culture.",
    url: "https://spacehr.net/blogs",
    images: [
      {
        url: "/og-blogs.jpg",
        width: 1200,
        height: 630,
        alt: "Space HR Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HR Insights & Leadership Blog | Space HR",
    description:
      "Deep dives into leadership, AI technology, and organizational culture.",
    images: ["/og-blogs.jpg"],
  },
  alternates: {
    canonical: "https://spacehr.net/blogs",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
