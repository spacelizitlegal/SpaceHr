import { Metadata } from "next";
import { blogPosts } from "@/lib/blogData";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Space HR",
      robots: { index: false, follow: false },
    };
  }

  const title = `${post.title} | Space HR Blog`;
  const description = post.summary.slice(0, 160);

  if (post.noindex) {
    return {
      title,
      description,
      robots: { index: false, follow: false },
    };
  }

  return {
    title,
    description,
    keywords: [
      post.category,
      "HR blog",
      "HR insights",
      "Space HR",
      "human resources",
      "AI HR software",
    ],
    alternates: {
      canonical: `https://spacehr.net/blogs/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://spacehr.net/blogs/${slug}`,
      siteName: "Space HR",
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function BlogSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
