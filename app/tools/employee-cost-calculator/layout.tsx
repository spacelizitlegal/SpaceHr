import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employee Cost Calculator — Total Annual & Monthly Cost | Space HR",
  description:
    "Calculate the total annual and monthly cost of employing one employee — including salary, taxes, benefits, bonuses, and overhead. Free HR calculator.",
  keywords: [
    "employee cost calculator",
    "total cost of employment",
    "annual employee cost",
    "HR cost calculator",
    "cost per employee",
    "employment cost calculator",
    "payroll cost calculator",
  ],
  alternates: {
    canonical: "https://spacehr.net/tools/employee-cost-calculator",
  },
  openGraph: {
    title: "Employee Cost Calculator — Total Annual & Monthly Cost | Space HR",
    description:
      "Calculate the total annual and monthly cost of employing one employee — including salary, taxes, benefits, bonuses, and overhead.",
    url: "https://spacehr.net/tools/employee-cost-calculator",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Employee Cost Calculator — Total Annual & Monthly Cost | Space HR",
    description:
      "Calculate the total annual and monthly cost of employing one employee — including salary, taxes, benefits, bonuses, and overhead.",
  },
};

export default function EmployeeCostCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
