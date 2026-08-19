import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HR ROI Calculator — Estimate HR Automation Savings | Space HR",
  description:
    "Estimate potential savings from HR automation by comparing manual HR process costs with estimated automation savings. Free HR calculator.",
  keywords: [
    "HR ROI calculator",
    "HR automation ROI",
    "HR cost savings calculator",
    "HR automation savings",
    "HR process cost calculator",
    "workforce automation ROI",
  ],
  alternates: {
    canonical: "https://spacehr.net/tools/hr-roi-calculator",
  },
  openGraph: {
    title: "HR ROI Calculator — Estimate HR Automation Savings | Space HR",
    description:
      "Estimate potential savings from HR automation by comparing manual HR process costs with estimated automation savings.",
    url: "https://spacehr.net/tools/hr-roi-calculator",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HR ROI Calculator — Estimate HR Automation Savings | Space HR",
    description:
      "Estimate potential savings from HR automation by comparing manual HR process costs with estimated automation savings.",
  },
};

export default function HRRoICalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
