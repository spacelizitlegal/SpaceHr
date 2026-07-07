import { Metadata } from "next";

export const metadata: Metadata = {
  title: "True Cost of an Employee Calculator | Space HR Free HR Tool",
  description:
    "Calculate the true cost of hiring an employee — including salary, benefits, payroll taxes, overhead, and turnover risk. Free HR calculator by Space HR.",
  keywords: [
    "employee cost calculator",
    "true cost of an employee",
    "total cost of employment",
    "HR cost calculator",
    "payroll cost calculator",
    "cost per employee",
    "Space HR tools",
  ],
  alternates: {
    canonical: "https://spacehr.net/tools/true-cost-calculator",
  },
  openGraph: {
    title: "True Cost of an Employee Calculator | Space HR",
    description:
      "See the full loaded cost of every hire — salary, benefits, taxes, overhead. Free calculator.",
    url: "https://spacehr.net/tools/true-cost-calculator",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "True Cost of an Employee Calculator | Space HR Free HR Tool",
    description: "Calculate the true cost of hiring an employee — including salary, benefits, payroll taxes, overhead, and turnover risk. Free HR calculator by Space HR.",
  },
};

export default function TrueCostCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
