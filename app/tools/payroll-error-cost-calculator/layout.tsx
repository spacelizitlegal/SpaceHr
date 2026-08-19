import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payroll Error Cost Calculator — Annual Error Impact | Space HR",
  description:
    "Calculate the annual cost of payroll errors including direct error costs and time spent on corrections. Free HR calculator.",
  keywords: [
    "payroll error cost calculator",
    "payroll mistake cost",
    "payroll accuracy calculator",
    "cost of payroll errors",
    "payroll error impact",
    "payroll processing cost",
  ],
  alternates: {
    canonical: "https://spacehr.net/tools/payroll-error-cost-calculator",
  },
  openGraph: {
    title: "Payroll Error Cost Calculator — Annual Error Impact | Space HR",
    description:
      "Calculate the annual cost of payroll errors including direct error costs and time spent on corrections.",
    url: "https://spacehr.net/tools/payroll-error-cost-calculator",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Error Cost Calculator — Annual Error Impact | Space HR",
    description:
      "Calculate the annual cost of payroll errors including direct error costs and time spent on corrections.",
  },
};

export default function PayrollErrorCostCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
