import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employee Turnover Rate Calculator — Estimate Turnover Cost | Space HR",
  description:
    "Calculate your employee turnover rate and estimate the annual cost of employee turnover for your organization. Free HR calculator.",
  keywords: [
    "employee turnover calculator",
    "turnover rate calculator",
    "attrition cost calculator",
    "employee turnover rate",
    "cost of turnover",
    "retention cost calculator",
  ],
  alternates: {
    canonical: "https://spacehr.net/tools/employee-turnover-calculator",
  },
  openGraph: {
    title: "Employee Turnover Rate Calculator — Estimate Turnover Cost | Space HR",
    description:
      "Calculate your employee turnover rate and estimate the annual cost of employee turnover for your organization.",
    url: "https://spacehr.net/tools/employee-turnover-calculator",
    siteName: "Space HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Employee Turnover Rate Calculator — Estimate Turnover Cost | Space HR",
    description:
      "Calculate your employee turnover rate and estimate the annual cost of employee turnover for your organization.",
  },
};

export default function EmployeeTurnoverCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
