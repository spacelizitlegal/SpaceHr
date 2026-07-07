import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HR Blog | Automation, Performance, Payroll & Recruiting Guides",
  description:
    "Practical HR guides from Space HR covering AI automation, payroll compliance, employee engagement, 360 appraisals, attrition prediction, and recruiting — written for HR teams and CHROs.",
  keywords: [
    "HR blog",
    "HR automation guides",
    "payroll compliance",
    "performance management",
    "employee engagement",
    "AI HR software",
    "attrition prediction",
    "360 appraisals",
    "recruiting strategy",
    "HR best practices",
    "CHRO resources",
    "workforce analytics",
  ],
  openGraph: {
    title: "HR Blog | Automation, Performance, Payroll & Recruiting Guides",
    description:
      "Practical HR guides from Space HR covering AI automation, payroll compliance, employee engagement, 360 appraisals, attrition prediction, and recruiting.",
    url: "https://spacehr.net/blogs",
    siteName: "Space HR",
    type: "website",
    images: [
      {
        url: "/og-blogs.jpg",
        width: 1200,
        height: 630,
        alt: "Space HR Blog — HR Automation, Performance & Payroll Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HR Blog | Automation, Performance, Payroll & Recruiting Guides",
    description:
      "Practical HR guides covering AI automation, payroll compliance, performance management, and recruiting — from the Space HR team.",
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
