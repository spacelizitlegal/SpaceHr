import { Metadata } from "next";

export const metadata: Metadata = {
  title: "True Cost of an Employee Calculator | SpaceHR Free HR Tool",
  description:
    "Calculate the true cost of hiring an employee — including salary, benefits, payroll taxes, overhead, and turnover risk. Free HR calculator by SpaceHR.",
  keywords: [
    "employee cost calculator",
    "true cost of an employee",
    "total cost of employment",
    "HR cost calculator",
    "payroll cost calculator",
    "cost per employee",
    "SpaceHR tools",
  ],
  alternates: {
    canonical: "https://spacehr.net/tools/true-cost-calculator",
  },
  openGraph: {
    title: "True Cost of an Employee Calculator | SpaceHR",
    description:
      "See the full loaded cost of every hire — salary, benefits, taxes, overhead. Free calculator.",
    url: "https://spacehr.net/tools/true-cost-calculator",
    siteName: "SpaceHR",
    type: "website",
  },
};

export default function TrueCostCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
