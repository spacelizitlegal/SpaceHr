import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogData";
import { courses } from "@/lib/courseData";

const templateSlugs = [
  "360-degree-appraisal-template",
  "annual-performance-review-template",
  "employee-self-assessment-form",
  "pto-leave-policy-template",
  "sick-leave-policy-template",
  "time-attendance-policy-template",
  "remote-work-employee-handbook-template",
  "hybrid-work-policy-template",
  "new-employee-onboarding-checklist",
  "employee-offboarding-checklist",
  "payroll-processing-checklist",
  "employee-classification-guide",
  "okr-planning-template",
  "individual-development-plan-template",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://spacehr.net";
  const now = new Date();

  // Static dates for pages whose content doesn't change on every deploy.
  // Only blog/course pages use `now` because their content actually changes.
  const d = (y: number, m: number, day: number) => new Date(y, m - 1, day);

  // ─── Core Pages ─────────────────────────────────────────────────────────
  const corePages: MetadataRoute.Sitemap = [
    { url: base,                         lastModified: d(2026, 6, 20), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/about`,              lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/careers`,            lastModified: d(2026, 9, 23), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/careers/mern-developer`,            lastModified: d(2026, 9, 23), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/careers/senior-mern-developer`,     lastModified: d(2026, 9, 23), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/careers/python-developer-ai`,       lastModified: d(2026, 9, 23), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/technology`,         lastModified: d(2026, 9, 25), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/knowledge-graph`,    lastModified: d(2026, 9, 26), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/demo`,               lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/request-a-demo`,     lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/pricing`,            lastModified: d(2026, 6, 24), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`,            lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/press`,                     lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/social-media-platforms`,    lastModified: d(2026, 6, 24), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy`,                   lastModified: d(2026, 7, 31), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms`,                     lastModified: d(2026, 7, 31), changeFrequency: "yearly",  priority: 0.3 },
  ];

  // ─── High-Priority SEO Landing Pages ────────────────────────────────────
  const seoPages: MetadataRoute.Sitemap = [
    { url: `${base}/hr-software`,                      lastModified: d(2026, 6, 15), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/hrms`,                             lastModified: d(2026, 6, 24), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/hr-payroll-software`,              lastModified: d(2026, 6, 15), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/payroll-anomaly-detection`,        lastModified: d(2026, 6, 15), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/best-hr-software-small-business`,  lastModified: d(2026, 6, 24), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/employee-self-service-hrms`,       lastModified: d(2026, 6, 24), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/best-hcm-software`,                lastModified: d(2026, 6, 24), changeFrequency: "weekly", priority: 0.9 },
  ];

  // ─── Compliance / Regulatory Pages ──────────────────────────────────────
  const compliancePages: MetadataRoute.Sitemap = [
    { url: `${base}/california-pay-transparency`, lastModified: d(2026, 4, 1), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/nyc-144-compliance`,          lastModified: d(2026, 4, 1), changeFrequency: "monthly", priority: 0.7 },
  ];

  // ─── Features Hub + All Feature Pages ───────────────────────────────────
  const featurePages: MetadataRoute.Sitemap = [
    { url: `${base}/features`,                           lastModified: d(2026, 6, 15), changeFrequency: "weekly",  priority: 0.9 },
    // AI / Intelligence features (highest commercial intent)
    { url: `${base}/features/ai-chatbots`,               lastModified: d(2026, 6, 20), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/features/ai-automation`,             lastModified: d(2026, 6, 15), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/features/ai-payroll-auditor`,        lastModified: d(2026, 6, 15), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/features/attrition-prediction`,      lastModified: d(2026, 6, 15), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/features/cost-prediction`,           lastModified: d(2026, 6, 15), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/features/hr-ai-concierge`,           lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/features/ai-intelligence`,           lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/features/ai-templates`,              lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.8 },
    // Core HRMS features
    { url: `${base}/features/payroll`,                   lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/features/appraisals`,                lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/features/360-performance-appraisals`,lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/features/employee-self-service`,     lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/features/attendance`,                lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/features/leave-management`,          lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/features/goals`,                     lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/features/finance`,                   lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/features/tax`,                       lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.7 },
  ];

  // ─── Solutions Hub + All Solution Pages ─────────────────────────────────
  const solutionPages: MetadataRoute.Sitemap = [
    { url: `${base}/solutions`,                          lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/solutions/hr-ai-chatbot`,            lastModified: d(2026, 6, 15), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/solutions/internal-employee-chatbot`, lastModified: d(2026, 6, 15), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/solutions/hr-helpdesk-chatbot`,      lastModified: d(2026, 6, 15), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/solutions/enterprise-hr-chatbot`,    lastModified: d(2026, 6, 15), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/solutions/employee-self-service`,    lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/solutions/chatbot-for-hr-services`,  lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/solutions/ceo`,                      lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/solutions/hr-admin`,                 lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/solutions/employees`,                lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.7 },
  ];

  // ─── Integration Pages ──────────────────────────────────────────────────
  const integrationPages: MetadataRoute.Sitemap = [
    { url: `${base}/integrations`,           lastModified: d(2026, 6, 24), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/integrations/space-ai`,  lastModified: d(2026, 6, 24), changeFrequency: "monthly", priority: 0.7 },
  ];

  // ─── Competitor Comparison Hub + Pages ──────────────────────────────────
  const comparePages: MetadataRoute.Sitemap = [
    { url: `${base}/compare`,                        lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    // Traditional HRMS
    { url: `${base}/compare/bamboohr`,               lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/workday`,                lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/gusto`,                  lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/rippling`,               lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/orangehrm`,              lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    // AI & Enterprise platforms
    { url: `${base}/compare/servicenow`,             lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/leena-ai`,               lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/moveworks`,              lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/microsoft-copilot`,      lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/darwinbox`,              lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/sap-successfactors`,     lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/adp`,                    lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/freshteam`,              lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
  ];

  // ─── Industry Landing Pages ──────────────────────────────────────────────────
  const industryPages: MetadataRoute.Sitemap = [
    { url: `${base}/industries`,             lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/industries/healthcare`,    lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/industries/retail`,        lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/industries/banking`,       lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/industries/manufacturing`, lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/industries/government`,    lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/industries/construction`,  lastModified: d(2026, 6, 24), changeFrequency: "monthly", priority: 0.9 },
  ];

  // ─── Regional Pages ──────────────────────────────────────────────────────
  const regionPages: MetadataRoute.Sitemap = [
    { url: `${base}/regions`,              lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/regions/united-states`, lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/regions/dubai`,         lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/regions/uk`,            lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/regions/singapore`,     lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/regions/canada`,        lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/regions/europe`,        lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/regions/india`,         lastModified: d(2026, 5, 1), changeFrequency: "monthly", priority: 0.7 },
  ];

  // ─── Tools & Resources ───────────────────────────────────────────────────
  const resourcePages: MetadataRoute.Sitemap = [
    { url: `${base}/blogs`,                                          lastModified: now,            changeFrequency: "daily",   priority: 0.8 },
    { url: `${base}/courses`,                                        lastModified: now,            changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/templates`,                                      lastModified: d(2026, 6, 23), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/glossary`,                                       lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools`,                                          lastModified: d(2026, 8, 17), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tools/employee-cost-calculator`,                 lastModified: d(2026, 8, 17), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/employee-turnover-calculator`,             lastModified: d(2026, 8, 17), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/cost-per-hire-calculator`,                 lastModified: d(2026, 8, 17), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/hr-roi-calculator`,                        lastModified: d(2026, 8, 17), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/payroll-error-cost-calculator`,            lastModified: d(2026, 8, 17), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/true-cost-calculator`,                     lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/w4-generator`,                             lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tools/fw4-form-download`,                        lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/resources/hr-chatbot-buyers-guide`,              lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/sitemap-page`,                                   lastModified: d(2026, 5, 1),  changeFrequency: "monthly", priority: 0.4 },
  ];

  // ─── Blog Post Pages (indexable only) ───────────────────────────────────
  const blogPostPages: MetadataRoute.Sitemap = blogPosts
    .filter((post) => !post.noindex)
    .map((post) => ({
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

  // ─── Template Landing Pages (dynamic) ────────────────────────────────────
  const templateDetailPages: MetadataRoute.Sitemap = templateSlugs.map((slug) => ({
    url: `${base}/templates/${slug}`,
    lastModified: d(2026, 6, 23),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...corePages,
    ...seoPages,
    ...compliancePages,
    ...featurePages,
    ...solutionPages,
    ...integrationPages,
    ...comparePages,
    ...industryPages,
    ...regionPages,
    ...resourcePages,
    ...blogPostPages,
    ...coursePostPages,
    ...templateDetailPages,
  ];
}