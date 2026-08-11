/**
 * Pre-defined HowTo schemas for blog posts and guides that contain step-by-step instructions.
 * Key = blog post slug (or resource page path)
 */

interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

interface HowToSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  totalTime?: string;
  supply?: { "@type": string; name: string }[];
  tool?: { "@type": string; name: string }[];
  step: ({ "@type": string; position: number; name: string; text: string; url?: string })[];
}

function buildHowTo(
  name: string,
  description: string,
  steps: HowToStep[],
  opts?: { totalTime?: string; supply?: string[]; tool?: string[] }
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    ...(opts?.totalTime && { totalTime: opts.totalTime }),
    ...(opts?.supply && { supply: opts.supply.map((s) => ({ "@type": "HowToSupply", name: s })) }),
    ...(opts?.tool && { tool: opts.tool.map((t) => ({ "@type": "HowToTool", name: t })) }),
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.url && { url: s.url }),
    })),
  };
}

export const howToSchemas: Record<string, Record<string, unknown>> = {

  "how-to-automate-employee-onboarding-without-losing-human-touch": buildHowTo(
    "How to Automate HR Onboarding and Reduce Time-to-Productivity by 3 Weeks",
    "Step-by-step guide to implementing automated HR onboarding workflows that cut manual admin, accelerate new hire productivity, and create a consistent first-day experience.",
    [
      { name: "Map your current onboarding journey end-to-end", text: "Document every task from offer acceptance to day 90: IT provisioning, document collection, induction scheduling, payroll setup, policy acknowledgements. Identify handoffs between HR, IT, finance, and the hiring manager.", url: "https://spacehr.net/blogs/how-to-automate-employee-onboarding-without-losing-human-touch" },
      { name: "Automate pre-boarding document collection", text: "Trigger a digital onboarding pack immediately on offer acceptance. Collect signed contracts, tax forms, bank details, and ID via a secure employee self-service portal — before day one.", url: "https://spacehr.net/features/employee-self-service" },
      { name: "Set up role-based onboarding checklists", text: "Create templated onboarding workflows by department and seniority. Automatically assign tasks to HR, IT, the line manager, and the new hire — with due dates and reminder escalations.", url: "https://spacehr.net/features/ai-automation" },
      { name: "Deploy a Day-1 AI buddy for new hire questions", text: "Give new hires access to an AI chatbot trained on your company handbook, policies, and FAQs. Reduce the flood of 'who do I ask about X' questions that land on HR in the first week.", url: "https://spacehr.net/solutions/internal-employee-chatbot" },
      { name: "Automate 30-60-90 day check-ins and milestones", text: "Schedule automated pulse surveys, manager nudges, and milestone notifications at day 30, 60, and 90. Flag at-risk new hires whose engagement scores drop early — before they resign.", url: "https://spacehr.net/features/attrition-prediction" },
      { name: "Measure time-to-productivity and iterate", text: "Track time from start date to first independent task completion, 90-day retention rate, and new hire satisfaction score. Use these metrics to identify bottlenecks and continuously refine your workflows." },
    ],
    { totalTime: "PT2W", tool: ["HRMS onboarding module", "Digital document signing", "AI HR chatbot"] }
  ),

  "chatbot-for-hr-services-complete-guide": buildHowTo(
    "How to Implement a Chatbot for HR Services: Complete 2026 Guide",
    "End-to-end implementation guide for deploying an AI chatbot across HR services — from vendor selection through go-live and ROI measurement.",
    [
      { name: "Assess your HR service delivery maturity", text: "Audit current HR ticket volume, average resolution time, HR-to-employee ratio, and employee satisfaction with HR services. Establish your baseline metrics before implementation.", url: "https://spacehr.net/blogs/chatbot-for-hr-services-complete-guide" },
      { name: "Select the right HR chatbot vendor", text: "Evaluate vendors on HRMS integration depth, NLP accuracy on HR queries, multi-channel support, compliance features (GDPR, SOC 2), and total cost of ownership over 3 years.", url: "https://spacehr.net/solutions/hr-helpdesk-chatbot" },
      { name: "Configure your knowledge base and integrations", text: "Load your HR policies, handbooks, and FAQs. Connect to your HRMS for live data (leave, payroll, org chart). Set up escalation paths to human HR agents for complex queries.", url: "https://spacehr.net/features/ai-chatbots" },
      { name: "Design conversation flows for top use cases", text: "Map conversational flows for the 15 highest-volume HR requests. Test each flow with real employees in a staging environment before go-live.", url: "https://spacehr.net/solutions/chatbot-for-hr-services" },
      { name: "Train HR team and communicate to employees", text: "Brief HR on the chatbot's scope, limitations, and escalation protocol. Launch an internal communications campaign to drive employee awareness and first use.", url: "https://spacehr.net/features/hr-ai-concierge" },
      { name: "Go live and monitor KPIs weekly", text: "Track deflection rate, resolution time, CSAT, and escalation rate weekly for the first 90 days. Run a 30-day retro and refine the top 5 failure points.", url: "https://spacehr.net/solutions/hr-helpdesk-chatbot" },
    ],
    { totalTime: "PT8W", tool: ["HR chatbot platform", "HRMS", "Help desk software"] }
  ),

  "360-degree-performance-appraisal-guide": buildHowTo(
    "How to Implement 360-Degree Performance Appraisals for HR Teams in 2026",
    "Step-by-step guide to designing, launching, and managing a 360-degree performance appraisal process that drives genuine employee development rather than checkbox compliance.",
    [
      { name: "Define the purpose and competency framework", text: "Decide whether the 360 is developmental (coaching-focused) or evaluative (tied to pay/promotion). Define the 5–8 competencies you will measure — leadership, collaboration, communication, delivery, and role-specific skills.", url: "https://spacehr.net/blogs/360-degree-performance-appraisal-guide" },
      { name: "Select reviewers (rater pool) thoughtfully", text: "For each employee, assign 1 manager, 3–5 peers, 1–2 direct reports (if applicable), and an optional self-review. Keep the pool to people with direct working experience — 6 months minimum.", url: "https://spacehr.net/features/360-performance-appraisals" },
      { name: "Design concise, behaviour-anchored survey questions", text: "Use a mix of Likert-scale ratings and open text per competency. Keep the survey under 20 minutes. Behaviour-anchored scales (e.g. '1 = rarely demonstrates… 5 = consistently models…') reduce rater bias.", url: "https://spacehr.net/features/appraisals" },
      { name: "Automate distribution, reminders, and anonymity", text: "Use your performance management platform to auto-send surveys, send reminder nudges on days 5 and 10, and aggregate anonymous ratings so individual rater scores are never exposed.", url: "https://spacehr.net/features/360-performance-appraisals" },
      { name: "Generate AI-summarised feedback reports", text: "Compile ratings and verbatim comments into structured development reports per employee. Use AI to synthesise themes, highlight strengths, and generate specific coaching suggestions — removing the hours of manual report writing.", url: "https://spacehr.net/features/ai-intelligence" },
      { name: "Run debrief conversations and set development actions", text: "Train managers to deliver feedback conversations within 2 weeks of report release. Each employee leaves with 2–3 concrete development actions tied to agreed goals. Track completion at the 90-day check-in." },
    ],
    { totalTime: "PT6W", tool: ["Performance management software", "360-degree appraisal module", "AI feedback analysis"] }
  ),

  "designing-self-service-hr-journeys-with-ai-concierge": buildHowTo(
    "How to Implement an Employee Self-Service Portal in 2026",
    "Complete implementation guide for HR teams deploying an employee self-service portal — from requirements to rollout and adoption.",
    [
      { name: "Audit which HR transactions can be self-served", text: "Review your HR ticket log and identify all queries and requests that employees could resolve themselves with access to the right data: leave balances, payslips, tax forms, policy documents, address changes, and benefits enrolment.", url: "https://spacehr.net/blogs/designing-self-service-hr-journeys-with-ai-concierge" },
      { name: "Select a platform with role-based access controls", text: "Choose an ESS platform that allows granular access by role — employees see their own data, managers see their team, HR admins see everything. Data security is non-negotiable in a self-service model.", url: "https://spacehr.net/features/employee-self-service" },
      { name: "Configure core self-service modules", text: "Enable payslip view and download, leave request and approval, personal data update, tax document access, and company document library as the minimum viable portal. Add expense submission and benefits enrolment in phase two.", url: "https://spacehr.net/features/employee-self-service" },
      { name: "Integrate with payroll and attendance systems", text: "Connect the ESS portal to your payroll engine for real-time payslip data and to your attendance system for live leave balances. Static portals with stale data erode trust and generate more tickets, not fewer.", url: "https://spacehr.net/features/payroll" },
      { name: "Launch with a structured change management campaign", text: "Announce the portal via email and team briefings. Run a 2-week guided adoption period where employees are encouraged to complete their first 3 self-service actions. Offer drop-in clinics for low-digital-literacy staff.", url: "https://spacehr.net/features/employee-self-service" },
      { name: "Measure adoption and ticket reduction monthly", text: "Track monthly active users, self-service completion rate, and HR ticket volume in the same categories. Target 70%+ adoption within 90 days. Use low-adoption segments to identify where better UX or training is needed." },
    ],
    { totalTime: "PT4W", tool: ["HRMS with ESS module", "Payroll system integration", "Identity management / SSO"] }
  ),

  "ai-hr-software-buying-guide-2026": buildHowTo(
    "How to Choose the Right AI HR Software for Your Team in 2026",
    "A practical buyer's framework for HR and IT leaders evaluating AI-powered HR platforms — covering requirements gathering, vendor shortlisting, demos, security review, and final selection.",
    [
      { name: "Define your requirements and non-negotiables", text: "List the HR processes you need to automate in year one (payroll, performance, leave, onboarding). Identify compliance requirements by region. Set your maximum budget and preferred deployment model (cloud vs on-premise).", url: "https://spacehr.net/blogs/ai-hr-software-buying-guide-2026" },
      { name: "Build a longlist from analyst reports and peer reviews", text: "Use G2, Gartner Peer Insights, and Capterra to find vendors with strong HR AI capabilities in your company size and industry. Start with 8–12 vendors before narrowing.", url: "https://spacehr.net/compare" },
      { name: "Score vendors on an objective evaluation matrix", text: "Weight criteria by importance: core HR functionality (30%), AI/automation depth (25%), integration ecosystem (20%), security/compliance (15%), total cost of ownership (10%). Score each vendor 1–5 per criterion.", url: "https://spacehr.net/compare" },
      { name: "Request demos with your real use cases", text: "Give each shortlisted vendor (max 4) a scripted demo scenario based on your actual workflows. Avoid generic product tours — ask vendors to show specifically how they handle your top 3 pain points.", url: "https://spacehr.net/request-a-demo" },
      { name: "Complete a security and compliance review", text: "Request SOC 2 Type II report, data processing agreements, and penetration test summaries. Confirm data residency location aligns with your regulatory obligations (GDPR, CCPA, PDPA).", url: "https://spacehr.net/features/ai-payroll-auditor" },
      { name: "Negotiate contract terms and go-live plan", text: "Negotiate on implementation support, data migration, training credits, and SLA penalties for downtime. Agree a phased go-live plan with clear milestones and a defined rollback procedure." },
    ],
    { totalTime: "PT12W", tool: ["RFP template", "Vendor evaluation matrix", "Security questionnaire"] }
  ),

  "space-hr-ai-hrms-guide": buildHowTo(
    "How to Build a Data-Driven HR Engine with Space HR AI HRMS",
    "Step-by-step guide to configuring Space HR's AI HRMS platform to automate payroll, predict attrition, run performance cycles, and deliver workforce insights in 2026.",
    [
      { name: "Set up your organisation structure and employee master", text: "Configure departments, locations, cost centres, and job grades. Import or onboard your employee master data. Clean, accurate foundational data is the prerequisite for all AI features.", url: "https://spacehr.net/hrms" },
      { name: "Configure payroll rules and compliance settings", text: "Set up salary components, statutory deduction rules (tax, PF, ESI, or state-equivalent), pay periods, and bank integration. Run a parallel payroll for the first 2 cycles before going live.", url: "https://spacehr.net/features/payroll" },
      { name: "Enable the AI Payroll Auditor", text: "Activate anomaly detection to flag payroll outliers — unusual hours, duplicate payments, classification mismatches — before each payroll run. Review the flagged items and set confidence thresholds appropriate for your payroll complexity.", url: "https://spacehr.net/features/ai-payroll-auditor" },
      { name: "Launch performance appraisal and goal cycles", text: "Configure your appraisal template (KPI ratings, competency scores, OKR attainment), set review cadence (quarterly or annual), and assign reviewer chains. Enable AI-generated performance summaries for managers.", url: "https://spacehr.net/features/360-performance-appraisals" },
      { name: "Activate attrition prediction and workforce analytics", text: "Feed 6+ months of tenure, performance, attendance, and engagement data into the AI engine. Review the attrition risk dashboard weekly. Assign retention actions to at-risk employees via the recommendations panel.", url: "https://spacehr.net/features/attrition-prediction" },
      { name: "Deploy the AI HR Concierge for employee self-service", text: "Launch the AI chatbot connected to live HR data. Train it on your company-specific policies and handbooks. Roll out via your preferred channel (web, mobile, Slack, Teams). Measure weekly deflection rate.", url: "https://spacehr.net/features/hr-ai-concierge" },
    ],
    { totalTime: "PT8W", tool: ["Space HR HRMS", "Payroll integration", "SSO / Identity provider"] }
  ),

  // Buyer's Guide resource page
  "hr-chatbot-buyers-guide": buildHowTo(
    "How to Choose and Implement an HR Chatbot: Complete Buyer's Guide",
    "Step-by-step framework for HR leaders evaluating, selecting, and deploying an AI HR chatbot — from business case through vendor selection, implementation, and ROI measurement.",
    [
      { name: "Build the business case and define success metrics", text: "Calculate current HR ticket volume, average resolution time, and HR team hours spent on Tier-0 queries. Set target metrics: deflection rate, cost per ticket, employee satisfaction score. This baseline justifies budget and measures ROI.", url: "https://spacehr.net/resources/hr-chatbot-buyers-guide" },
      { name: "Identify your top 15 automation use cases", text: "Analyse your HR helpdesk log for the most frequent request categories. Prioritise by volume × time-per-resolution. Typical top candidates: leave balance, payslip, policy FAQs, IT onboarding, benefits queries.", url: "https://spacehr.net/resources/hr-chatbot-buyers-guide" },
      { name: "Evaluate vendors against a structured scorecard", text: "Score vendors on NLP accuracy, HRMS integration depth, multi-channel deployment, security certifications (SOC 2, ISO 27001), implementation timeline, and total 3-year cost. Shortlist 3–4 vendors for demos.", url: "https://spacehr.net/compare" },
      { name: "Run scripted demos with your real use cases", text: "Give each vendor 2–3 real-world scenarios from your top use cases. Evaluate response accuracy, escalation handling, and how gracefully the bot handles queries outside its training data.", url: "https://spacehr.net/request-a-demo" },
      { name: "Complete security, privacy, and compliance due diligence", text: "Verify data residency, encryption standards, SOC 2 Type II certification, GDPR/CCPA data processing agreements, and role-based access controls. HR data is sensitive — security is not negotiable.", url: "https://spacehr.net/features/ai-chatbots" },
      { name: "Implement, launch, and measure ROI at 90 days", text: "Configure the knowledge base, integrate with your HRMS, pilot with 50–100 employees, then roll out company-wide. At day 90, compare deflection rate, ticket volume, and CSAT against your pre-launch baseline to quantify ROI.", url: "https://spacehr.net/resources/hr-chatbot-buyers-guide" },
    ],
    { totalTime: "PT10W", tool: ["HR chatbot platform", "HRMS integration", "Analytics dashboard"] }
  ),
};
