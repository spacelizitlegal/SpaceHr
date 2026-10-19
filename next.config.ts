import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    // Only deprecated/removed blog posts that no longer exist as live pages.
    // Live cluster articles and standalone articles must NOT be here — they
    // should return 200 with self-referencing canonicals and sitemap entries.
    const redirectMappings = [
      {
        destination: "/blogs/chatbot-for-hr-services-complete-guide",
        sources: [
          "/blogs/hr-chatbot-roi-calculator-2026",
          "/blogs/internal-hr-chatbot-deployment-guide",
          "/blogs/hr-helpdesk-chatbot-guide-2026",
          "/blogs/employee-self-service-portal-guide",
          "/blogs/enterprise-ai-hr-chatbot-guide",
          "/blogs/how-to-reduce-hr-ticket-volume",
          "/blogs/hr-automation-guide-2026",
          "/blogs/hr-ai-concierge-vs-traditional-helpdesk",
          "/blogs/remote-team-alignment-space-hr",
        ]
      },
      {
        destination: "/blogs/payroll-anomaly-detection-guide-2026",
        sources: [
          "/blogs/ai-payroll-software-guide-2026",
          "/blogs/hr-compliance-software-guide-2026",
          "/blogs/ai-payroll-compliance-checklist-india",
        ]
      },
      {
        destination: "/blogs/360-degree-performance-appraisal-guide",
        sources: [
          "/blogs/future-of-performance-management",
        ]
      },
      {
        destination: "/blogs/ai-hr-software-buying-guide-2026",
        sources: [
          "/blogs/space-hr-ai-hrms-guide",
          "/blogs/hr-leave-management-software-guide",
          "/blogs/hr-software-for-small-business-guide",
          "/blogs/onboarding-automation-guide-2026",
        ]
      },
      {
        destination: "/blogs/hr-data-analytics-guide-2026",
        sources: [
          "/blogs/labor-cost-forecasting-guide",
          "/blogs/workforce-planning-guide-2026",
          "/blogs/hr-analytics-roadmap-for-growing-companies",
        ]
      },
    ];

    const redirectsList = [];
    for (const mapping of redirectMappings) {
      for (const src of mapping.sources) {
        redirectsList.push({
          source: src,
          destination: mapping.destination,
          permanent: true,
        });
      }
    }
    return redirectsList;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' https://flagcdn.com https://images.unsplash.com https://grainy-gradients.vercel.app data:; font-src 'self'; frame-src https://www.googletagmanager.com https://www.google.com; connect-src 'self' https://www.googletagmanager.com https://app.pmspace.ai; base-uri 'self'; form-action 'self'" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
      {
        source: "/(.*)\\.(webp|png|jpg|jpeg|svg|gif|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)\\.js",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)\\.css",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;