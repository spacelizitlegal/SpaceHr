import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/tools/w4-generator/lead"],
    },
    sitemap: "https://spacehr.net/sitemap.xml",
  };
}
