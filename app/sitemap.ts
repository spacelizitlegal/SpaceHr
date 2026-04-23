import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogData";
import { courses } from "@/lib/courseData";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://spacehr.net";
  const now = new Date();

  // ─── Core Pages ─────────────────────────────────────────────────────────
  const corePages: MetadataRoute.Sitemap = [
    { url: base,                         lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/about`,              lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/demo`,               lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/request-a-demo`,     lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`,            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/press`,              lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  // ─── High-Priority SEO Landing Pages ────────────────────────────────────
  const seoPages: MetadataRoute.Sitemap = [
    { url: `${base}/hr-software`,                      lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/hrms`,                             lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/hr-payroll-software`,              lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/payroll-anomaly-detection`,        lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/best-hr-software-small-business`,  lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  // ─── Compliance / Regulatory Pages ──────────────────────────────────────
  const compliancePages: MetadataRoute.Sitemap = [
    { url: `${base}/california-pay-transparency`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/nyc-144-compliance`,          lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  // ─── Features Hub + All Feature Pages ───────────────────────────────────
  const featurePages: MetadataRoute.Sitemap = [
    { url: `${base}/features`,                           lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    // AI / Intelligence features (highest commercial intent)
    { url: `${base}/features/ai-chatbots`,               lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/features/ai-automation`,             lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/features/ai-payroll-auditor`,        lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/features/attrition-prediction`,      lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/features/cost-prediction`,           lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/features/hr-ai-concierge`,           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/features/ai-intelligence`,           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/features/ai-templates`,              lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Core HRMS features
    { url: `${base}/features/payroll`,                   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/features/appraisals`,                lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/features/360-performance-appraisals`,lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/features/employee-self-service`,     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/features/attendance`,                lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/features/leave-management`,          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/features/goals`,                     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/features/finance`,                   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/features/tax`,                       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  // ─── Solutions Hub + All Solution Pages ─────────────────────────────────
  const solutionPages: MetadataRoute.Sitemap = [
    { url: `${base}/solutions`,                          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/solutions/hr-ai-chatbot`,            lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/solutions/internal-employee-chatbot`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/solutions/hr-helpdesk-chatbot`,      lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/solutions/enterprise-hr-chatbot`,    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/solutions/employee-self-service`,    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/solutions/chatbot-for-hr-services`,  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/solutions/ceo`,                      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/solutions/hr-admin`,                 lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/solutions/employees`,                lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  // ─── Competitor Comparison Hub + Pages ──────────────────────────────────
  const comparePages: MetadataRoute.Sitemap = [
    { url: `${base}/compare`,                        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Traditional HRMS
    { url: `${base}/compare/bamboohr`,               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/workday`,                lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/gusto`,                  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/rippling`,               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/orangehrm`,              lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // AI & Enterprise platforms
    { url: `${base}/compare/servicenow`,             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/leena-ai`,               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/moveworks`,              lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/microsoft-copilot`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/darwinbox`,              lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/sap-successfactors`,     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/adp`,                    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/freshteam`,              lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  // ─── Industry Landing Pages ──────────────────────────────────────────────────
  const industryPages: MetadataRoute.Sitemap = [
    { url: `${base}/industries/healthcare`,    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/industries/retail`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/industries/banking`,       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/industries/manufacturing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/industries/government`,    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  // ─── Regional Pages ──────────────────────────────────────────────────────
  const regionPages: MetadataRoute.Sitemap = [
    { url: `${base}/regions/united-states`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/regions/dubai`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/regions/india`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/regions/uk`,            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/regions/singapore`,     lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/regions/canada`,        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/regions/europe`,        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  // ─── Tools & Resources ───────────────────────────────────────────────────
  const resourcePages: MetadataRoute.Sitemap = [
    { url: `${base}/blogs`,                       lastModified: now, changeFrequency: "daily",   priority: 0.8 },
    { url: `${base}/courses`,                     lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/templates`,                   lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/glossary`,                    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/true-cost-calculator`,  lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/w4-generator`,          lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/w2-form-download`,      lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/tools/fw4-form-download`,     lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/resources/hr-chatbot-buyers-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/sitemap-page`,                lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  ];

  // ─── Blog Post Pages (dynamic) ───────────────────────────────────────────
  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blogs/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ─── Course Pages (dynamic) ──────────────────────────────────────────────
  const coursePostPages: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${base}/courses/${course.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...corePages,
    ...seoPages,
    ...compliancePages,
    ...featurePages,
    ...solutionPages,
    ...comparePages,
    ...industryPages,
    ...regionPages,
    ...resourcePages,
    ...blogPostPages,
    ...coursePostPages,
  ];
}