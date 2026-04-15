export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Space HR",
  url: "https://spacehr.net",
  logo: "https://spacehr.net/hrlogonly.png",
  description:
    "AI-powered HRMS and ERP platform for modern enterprises — payroll automation, predictive workforce analytics, and compliance management.",
  foundingDate: "2023",
  sameAs: [
    "https://twitter.com/SpaceHR",
    "https://www.linkedin.com/company/space-hr",
    "https://www.facebook.com/SpaceHR",
    "https://www.g2.com/products/spacehr",
    "https://www.capterra.com/p/spacehr",
    "https://www.trustradius.com/products/spacehr",
    "https://www.producthunt.com/products/spacehr",
    "https://www.crunchbase.com/organization/spacehr",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "sales@spacehr.net",
      areaServed: ["US", "SG", "AE"],
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "support@spacehr.net",
      availableLanguage: "English",
    },
  ],
  address: [
    {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressLocality: "United States",
    },
    {
      "@type": "PostalAddress",
      addressCountry: "SG",
      addressLocality: "Singapore",
    },
    {
      "@type": "PostalAddress",
      addressCountry: "AE",
      addressLocality: "Dubai",
    },
  ],
};

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Space HR — AI-Powered HRMS & ERP Platform",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: [
    "Human Resource Management System",
    "Enterprise Resource Planning",
    "Payroll Software",
    "Performance Management Software",
  ],
  operatingSystem: "Cloud, Web",
  availableOnDevice: ["Desktop", "Mobile", "Tablet"],
  url: "https://spacehr.net",
  description:
    "Enterprise-grade AI-powered HRMS and ERP platform featuring automated payroll auditing, predictive workforce analytics, 360-degree performance appraisals, NACHA-compliant ACH processing, tax compliance automation, and an AI HR Concierge chatbot for 24/7 employee self-service.",
  featureList: [
    "AI Payroll Auditor with anomaly detection",
    "Predictive workforce analytics and cost forecasting",
    "360-degree performance appraisals with AI coaching",
    "NACHA-compliant ACH file generation",
    "Multi-state and global tax compliance",
    "AI HR Concierge chatbot (24/7 self-service)",
    "GPS and geofenced attendance tracking",
    "Leave management with policy automation",
    "Goal and OKR management",
    "Employee self-service portal",
    "Financial analytics and budget tracking",
    "Attrition prediction and retention insights",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free trial available. Custom enterprise pricing.",
    url: "https://spacehr.net/request-a-demo",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
  author: {
    "@type": "Organization",
    name: "Space HR",
    url: "https://spacehr.net",
  },
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "HR Professionals, CEOs, CFOs, HR Administrators, Mid-Market Enterprises",
  },
  screenshot: "https://spacehr.net/desktop-design-showcase.webp",
  softwareVersion: "2.0",
  releaseNotes: "AI-powered payroll auditing and predictive analytics",
  permissions:
    "SOC 2 Type II certified. Enterprise-grade security and compliance.",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Space HR",
  url: "https://spacehr.net",
  description:
    "AI-powered HRMS and ERP platform for payroll, performance management, and workforce analytics.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://spacehr.net/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

// FAQ Schema generator for feature pages
export function generateFAQSchema(
  faqs: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Breadcrumb Schema generator
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// HowTo Schema generator
export function generateHowToSchema(howTo: {
  name: string;
  description: string;
  totalTime?: string;
  supply?: string[];
  tool?: string[];
  steps: { name: string; text: string; url?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howTo.name,
    description: howTo.description,
    ...(howTo.totalTime && { totalTime: howTo.totalTime }),
    ...(howTo.supply && { supply: howTo.supply.map((s) => ({ "@type": "HowToSupply", name: s })) }),
    ...(howTo.tool && { tool: howTo.tool.map((t) => ({ "@type": "HowToTool", name: t })) }),
    step: howTo.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
    })),
  };
}


export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Organization",
      name: article.author || "Space HR",
      url: "https://spacehr.net",
    },
    publisher: {
      "@type": "Organization",
      name: "Space HR",
      logo: {
        "@type": "ImageObject",
        url: "https://spacehr.net/hrlogonly.png",
      },
    },
  };
}
