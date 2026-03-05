"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { blogPosts } from "@/lib/blogData";
import { useState } from "react";

// Note: Since this is a client component, metadata should be in layout.tsx or a separate metadata file
// For now, adding via Head component would be an alternative

export default function BlogsPage() {
  const postsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalBlogs = blogPosts.length;
  const totalPages = Math.max(1, Math.ceil(totalBlogs / postsPerPage));
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const visiblePosts = blogPosts.slice(startIndex, endIndex);
  const showingFrom = totalBlogs === 0 ? 0 : startIndex + 1;
  const showingTo = Math.min(endIndex, totalBlogs);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] font-sans">
      {/* Header */}
      <section className="pt-32 pb-16 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Insights
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Perspectives on the future of work.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Deep dives into leadership, AI technology, and organizational
            culture.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
        {/* All Blogs Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            All Articles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {visiblePosts.map((post) => (
              <Link
                href={`/blogs/${post.slug}`}
                key={post.slug}
                className="group cursor-pointer block"
              >
                <article className="h-full rounded-2xl border border-gray-200/70 dark:border-gray-700 bg-white/80 dark:bg-slate-900/80 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-3 flex items-center gap-3 text-xs font-semibold text-primary uppercase tracking-wide">
                    {post.category}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors leading-tight line-clamp-3 min-h-[88px]">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.summary}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {totalPages > 1 && (
          <div className="mt-16 space-y-6">
            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              Showing {showingFrom}-{showingTo} of {totalBlogs} blogs
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full px-4"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                Prev
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    size="sm"
                    variant={page === currentPage ? "default" : "outline"}
                    className="rounded-full min-w-10 px-3"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                )
              )}
              <Button
                variant="outline"
                size="sm"
                className="rounded-full px-4"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
