import { ImageResponse } from "next/og";
import { blogPosts } from "@/lib/blogData";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  const title = post?.title ?? "Space HR Blog";
  const category = post?.category ?? "HR Insights";

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0b1121 0%, #0f1f3d 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "64px 90px 56px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Left teal bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "8px",
            height: "100%",
            background: "linear-gradient(180deg, #14b8a6 0%, #06b6d4 100%)",
          }}
        />

        {/* Logo row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              background: "linear-gradient(135deg, #14b8a6, #06b6d4)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              fontWeight: "900",
              color: "white",
            }}
          >
            S
          </div>
          <span
            style={{
              fontSize: "22px",
              fontWeight: "700",
              color: "#64748b",
              letterSpacing: "0.2px",
            }}
          >
            Space HR Blog
          </span>
        </div>

        {/* Category badge */}
        <div
          style={{
            background: "rgba(20, 184, 166, 0.12)",
            border: "1px solid rgba(20, 184, 166, 0.35)",
            borderRadius: "20px",
            padding: "6px 18px",
            fontSize: "13px",
            fontWeight: "700",
            color: "#14b8a6",
            textTransform: "uppercase",
            letterSpacing: "1.2px",
            marginBottom: "24px",
          }}
        >
          {category}
        </div>

        {/* Post title */}
        <div
          style={{
            fontSize: title.length > 65 ? "38px" : title.length > 45 ? "44px" : "50px",
            fontWeight: "800",
            color: "white",
            lineHeight: 1.1,
            maxWidth: "1000px",
            letterSpacing: "-0.5px",
            flex: 1,
          }}
        >
          {title}
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "32px",
          }}
        >
          <div style={{ fontSize: "16px", color: "#475569" }}>
            Insights for HR professionals
          </div>
          <div
            style={{
              fontSize: "17px",
              color: "#14b8a6",
              fontWeight: "600",
              letterSpacing: "0.3px",
            }}
          >
            spacehr.net/blogs
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
