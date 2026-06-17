import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    const redirectMappings = [
      {
        destination: "/blogs/chatbot-for-hr-services-complete-guide",
        sources: [
          "/blogs/hr-chatbot-roi-calculator-2026",
          "/blogs/internal-hr-chatbot-deployment-guide",
          "/blogs/hr-helpdesk-chatbot-guide-2026",
          "/blogs/employee-self-service-portal-guide",
          "/blogs/enterprise-ai-hr-chatbot-guide",
          "/blogs/how-to-reduce-hr-ticket-volume",
          "/blogs/hr-automation-guide-2026",
          "/blogs/hr-ai-concierge-vs-traditional-helpdesk",
          "/blogs/remote-team-alignment-space-hr",
          "/blogs/ai-workflow-automation-for-hr-end-to-end-execution-blueprint",
          "/blogs/how-to-automate-employee-onboarding-without-losing-human-touch",
          "/blogs/approval-workflow-automation-for-hr-teams-at-scale",
          "/blogs/building-ai-driven-reminder-systems-for-hr-operations",
          "/blogs/automating-policy-acknowledgement-and-compliance-tracking",
          "/blogs/how-space-hr-reduces-manual-hr-admin-by-70-percent",
          "/blogs/hr-task-orchestration-connecting-payroll-attendance-and-leave",
          "/blogs/designing-self-service-hr-journeys-with-ai-concierge",
          "/blogs/automation-governance-for-hr-controls-ownership-and-audits",
          "/blogs/hr-automation-kpis-measuring-speed-accuracy-and-adoption"
        ]
      },
      {
        destination: "/blogs/payroll-anomaly-detection-guide-2026",
        sources: [
          "/blogs/ai-payroll-software-guide-2026",
          "/blogs/hr-compliance-software-guide-2026",
          "/blogs/ai-payroll-compliance-checklist-india",
          "/blogs/payroll-error-prevention-framework-for-fast-growing-companies",
          "/blogs/ai-payroll-auditor-detecting-anomalies-before-payroll-lock",
          "/blogs/hr-compliance-calendar-monthly-and-quarterly-control-checklist",
          "/blogs/attendance-to-payroll-mapping-common-data-integrity-gaps",
          "/blogs/cost-prediction-in-hr-forecasting-workforce-spend-with-ai",
          "/blogs/leave-policy-automation-and-its-impact-on-payroll-accuracy",
          "/blogs/how-to-build-audit-ready-payroll-operations-with-space-hr",
          "/blogs/compensation-change-workflows-approval-audit-and-traceability",
          "/blogs/workforce-cost-dashboards-for-chro-and-cfo-decision-making",
          "/blogs/reducing-payroll-rework-through-standardized-hr-data-models"
        ]
      },
      {
        destination: "/blogs/360-degree-performance-appraisal-guide",
        sources: [
          "/blogs/future-of-performance-management",
          "/blogs/continuous-performance-management-framework-for-modern-teams",
          "/blogs/how-to-run-360-degree-appraisals-that-employees-trust",
          "/blogs/competency-based-reviews-building-fair-evaluation-systems",
          "/blogs/manager-coaching-playbooks-for-better-performance-conversations",
          "/blogs/reducing-bias-in-employee-reviews-with-multi-rater-feedback",
          "/blogs/goal-alignment-in-hr-linking-okrs-to-appraisal-outcomes",
          "/blogs/ai-generated-performance-summaries-best-practices-for-hr",
          "/blogs/mid-year-and-quarterly-review-cycles-that-actually-work",
          "/blogs/performance-improvement-plans-structure-signals-and-support",
          "/blogs/using-performance-data-for-succession-and-leadership-planning"
        ]
      },
      {
        destination: "/blogs/ai-hr-software-buying-guide-2026",
        sources: [
          "/blogs/space-hr-ai-hrms-guide",
          "/blogs/hr-leave-management-software-guide",
          "/blogs/hr-software-for-small-business-guide",
          "/blogs/onboarding-automation-guide-2026"
        ]
      },
      {
        destination: "/blogs/hr-data-analytics-guide-2026",
        sources: [
          "/blogs/employee-attrition-prediction-guide",
          "/blogs/labor-cost-forecasting-guide",
          "/blogs/workforce-planning-guide-2026",
          "/blogs/hr-analytics-roadmap-for-growing-companies",
          "/blogs/employee-engagement-strategy-in-2026-from-survey-to-action",
          "/blogs/how-to-build-psychological-safety-in-high-performance-teams",
          "/blogs/using-ai-to-predict-attrition-and-retain-critical-talent",
          "/blogs/designing-internal-communication-campaigns-that-drive-participation",
          "/blogs/wellbeing-analytics-measuring-burnout-risk-and-intervention-impact",
          "/blogs/the-first-90-days-employee-journey-a-retention-first-playbook",
          "/blogs/recognition-systems-that-improve-motivation-and-team-trust",
          "/blogs/culture-operations-turning-values-into-repeatable-behaviors",
          "/blogs/manager-enablement-programs-that-reduce-voluntary-attrition",
          "/blogs/employee-experience-metrics-every-hr-leader-should-track"
        ]
      },
      {
        destination: "/blogs/ai-recruitment-workflows-guide",
        sources: [
          "/blogs/ai-recruitment-workflows-faster-hiring-with-better-quality",
          "/blogs/structured-interview-systems-for-fair-and-consistent-hiring",
          "/blogs/from-requisition-to-offer-hiring-pipeline-optimization-framework",
          "/blogs/how-to-reduce-offer-drop-off-with-candidate-experience-design",
          "/blogs/talent-intelligence-dashboards-for-recruiters-and-hiring-managers",
          "/blogs/hiring-bias-controls-practical-safeguards-for-ai-assisted-recruiting",
          "/blogs/campus-hiring-at-scale-automation-strategies-for-hr-teams",
          "/blogs/data-driven-job-descriptions-that-improve-applicant-match",
          "/blogs/recruiter-productivity-metrics-that-connect-to-business-outcomes",
          "/blogs/post-hire-quality-analysis-closing-the-loop-between-hiring-and-performance"
        ]
      }
    ];

    const redirectsList = [];
    for (const mapping of redirectMappings) {
      for (const src of mapping.sources) {
        redirectsList.push({
          source: src,
          destination: mapping.destination,
          permanent: true,
        });
      }
    }
    return redirectsList;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/(.*)\\.(webp|png|jpg|jpeg|svg|gif|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)\\.js",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)\\.css",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;