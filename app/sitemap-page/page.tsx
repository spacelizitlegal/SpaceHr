import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap | Space HR",
  description: "View the comprehensive sitemap of Space HR to easily navigate through our features, resources, and services.",
};

export default function SitemapPage() {
  const routes = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Request a Demo", path: "/request-a-demo" },
    { name: "Blogs", path: "/blogs" },
    { name: "Courses", path: "/courses" },
    { name: "HR Software", path: "/hr-software" },
    { name: "HRMS", path: "/hrms" },
    { name: "Small Business HR", path: "/best-hr-software-small-business" },
    { name: "Payroll & Appraisals", path: "/hr-payroll-software" },
    { name: "Compare: OrangeHRM", path: "/compare/orangehrm" },
    { name: "Compare: Rippling", path: "/compare/rippling" },
    { name: "Compare: BambooHR", path: "/compare/bamboohr" },
    {
      name: "Features",
      path: "/features",
      subRoutes: [
        { name: "AI Automation", path: "/features/ai-automation" },
        { name: "AI Chatbots", path: "/features/ai-chatbots" },
        { name: "AI Intelligence", path: "/features/ai-intelligence" },
        { name: "AI Templates", path: "/features/ai-templates" },
        { name: "Appraisals", path: "/features/appraisals" },
        { name: "Attendance", path: "/features/attendance" },
        { name: "Employee Self Service", path: "/features/employee-self-service" },
        { name: "Finance", path: "/features/finance" },
        { name: "Goals", path: "/features/goals" },
        { name: "Leave Management", path: "/features/leave-management" },
        { name: "Payroll", path: "/features/payroll" },
        { name: "Tax", path: "/features/tax" },
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
