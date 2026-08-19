import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cost Per Hire Calculator — Recruiting Cost Analysis | Space HR",
  description:
    "Calculate your true cost per hire including advertising, agency fees, interview costs, onboarding, and more. Free HR calculator.",
  keywords: [
    "cost per hire calculator",
    "recruiting cost calculator",
    "hiring cost analysis",
    "cost per recruitment",
    "recruitment cost calculator",
    "hiring cost per employee",
  ],
  alternates: {
    canonical: "https://spacehr.net/tools/cost-per-hire-calculator",
  },
  openGraph: {
    title: "Cost Per Hire Calculator — Recruiting Cost Analysis | Space HR",
    description:
      "Calculate your true cost per hire including advertising, agency fees, interview costs, onboarding, and more.",
    url: "https://spacehr.net/tools/cost-per-hire-calculator",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cost Per Hire Calculator — Recruiting Cost Analysis | Space HR",
    description:
      "Calculate your true cost per hire including advertising, agency fees, interview costs, onboarding, and more.",
  },
};

export default function CostPerHireCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
