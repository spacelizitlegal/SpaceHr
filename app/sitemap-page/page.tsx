import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap — All Pages & Resources | Space HR",
  description: "View the comprehensive sitemap of Space HR to easily navigate through our features, resources, and services.",
  alternates: {
    canonical: "https://spacehr.net/sitemap-page",
  },
};

export default function SitemapPage() {
  const routes = [
    {
      name: "Explore Space HR",
      path: "/",
      subRoutes: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Pricing", path: "/pricing" },
        { name: "Contact", path: "/contact" },
        { name: "Press Kit", path: "/press" },
      ],
    },
    {
      name: "Features",
      path: "/features",
      subRoutes: [
        { name: "All Features", path: "/features" },
        { name: "AI HR Chatbot", path: "/features/ai-chatbots" },
        { name: "AI Automation", path: "/features/ai-automation" },
        { name: "Cost Prediction", path: "/features/cost-prediction" },
        { name: "Attrition Prediction", path: "/features/attrition-prediction" },
        { name: "AI Payroll Auditor", path: "/features/ai-payroll-auditor" },
        { name: "HR AI Concierge", path: "/features/hr-ai-concierge" },
        { name: "AI Intelligence", path: "/features/ai-intelligence" },
        { name: "AI Templates", path: "/features/ai-templates" },
        { name: "Leave Management", path: "/features/leave-management" },
        { name: "Payroll", path: "/features/payroll" },
        { name: "Appraisals", path: "/features/appraisals" },
        { name: "360° Appraisals", path: "/features/360-performance-appraisals" },
        { name: "Employee Self-Service", path: "/features/employee-self-service" },
        { name: "Attendance", path: "/features/attendance" },
        { name: "Goals & OKRs", path: "/features/goals" },
        { name: "Finance", path: "/features/finance" },
        { name: "Tax", path: "/features/tax" },
      ],
    },
    {
      name: "Solutions",
      path: "/solutions",
      subRoutes: [
        { name: "Chatbot for HR Services", path: "/solutions/chatbot-for-hr-services" },
        { name: "Employee Self-Service", path: "/solutions/employee-self-service" },
        { name: "HR AI Chatbot", path: "/solutions/hr-ai-chatbot" },
        { name: "Small Business", path: "/best-hr-software-small-business" },
        { name: "Enterprise AI Chatbot", path: "/solutions/enterprise-hr-chatbot" },
        { name: "HR Helpdesk Chatbot", path: "/solutions/hr-helpdesk-chatbot" },
        { name: "Internal Employee Chatbot", path: "/solutions/internal-employee-chatbot" },
        { name: "For CEOs", path: "/solutions/ceo" },
        { name: "For HR Admins", path: "/solutions/hr-admin" },
        { name: "For Employees", path: "/solutions/employees" },
      ],
    },
    {
      name: "Industries",
      path: "/industries",
      subRoutes: [
        { name: "Healthcare", path: "/industries/healthcare" },
        { name: "Retail", path: "/industries/retail" },
        { name: "Banking", path: "/industries/banking" },
        { name: "Manufacturing", path: "/industries/manufacturing" },
        { name: "Government", path: "/industries/government" },
        { name: "Construction", path: "/industries/construction" },
      ],
    },
    {
      name: "Compare",
      path: "/compare",
      subRoutes: [
        { name: "vs BambooHR", path: "/compare/bamboohr" },
        { name: "vs Workday", path: "/compare/workday" },
        { name: "vs Rippling", path: "/compare/rippling" },
        { name: "vs ADP", path: "/compare/adp" },
        { name: "vs Gusto", path: "/compare/gusto" },
        { name: "vs OrangeHRM", path: "/compare/orangehrm" },
        { name: "vs Darwinbox", path: "/compare/darwinbox" },
        { name: "vs Freshteam", path: "/compare/freshteam" },
        { name: "vs Leena AI", path: "/compare/leena-ai" },
        { name: "vs Moveworks", path: "/compare/moveworks" },
        { name: "vs Copilot", path: "/compare/microsoft-copilot" },
        { name: "vs SAP", path: "/compare/sap-successfactors" },
        { name: "vs ServiceNow", path: "/compare/servicenow" },
      ],
    },
    {
      name: "Regions",
      path: "/regions",
      subRoutes: [
        { name: "United States", path: "/regions/united-states" },
        { name: "UAE & Dubai", path: "/regions/dubai" },
        { name: "Singapore", path: "/regions/singapore" },
        { name: "Canada", path: "/regions/canada" },
        { name: "Europe", path: "/regions/europe" },
        { name: "United Kingdom", path: "/regions/uk" },
        { name: "India", path: "/regions/india" },
      ],
    },
    {
      name: "Resources",
      path: "/resources",
      subRoutes: [
        { name: "Blog", path: "/blogs" },
        { name: "HR Courses", path: "/courses" },
        { name: "HR Templates", path: "/templates" },
        { name: "Free HR Tools & Calculators", path: "/tools" },
        { name: "Employee Cost Calculator", path: "/tools/employee-cost-calculator" },
        { name: "Employee Turnover Calculator", path: "/tools/employee-turnover-calculator" },
        { name: "Cost Per Hire Calculator", path: "/tools/cost-per-hire-calculator" },
        { name: "HR ROI Calculator", path: "/tools/hr-roi-calculator" },
        { name: "Payroll Error Cost Calculator", path: "/tools/payroll-error-cost-calculator" },
        { name: "True Cost Calculator", path: "/tools/true-cost-calculator" },
        { name: "W-4 Generator", path: "/tools/w4-generator" },
        { name: "FW-4 Form Download", path: "/tools/fw4-form-download" },
        { name: "Payroll Anomaly Detection", path: "/payroll-anomaly-detection" },
        { name: "HR Glossary", path: "/glossary" },
        { name: "Request a Demo", path: "/request-a-demo" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1121] pt-32 pb-16 font-sans">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
          Sitemap
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          Explore all the pages and features available on Space HR.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {routes.map((section) => (
            <div key={section.path} className="space-y-4">
              <Link
                href={section.path}
                className="text-2xl font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block"
              >
                {section.name}
              </Link>
              {section.subRoutes && (
                <ul className="space-y-2 ml-4 border-l-2 border-gray-100 dark:border-gray-800 pl-4">
                  {section.subRoutes.map((sub) => (
                    <li key={sub.path}>
                      <Link
                        href={sub.path}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors block py-1"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
