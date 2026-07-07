type FAQItem = { question: string; answer: string };

export const blogFaqSchemas: Record<string, FAQItem[]> = {
  "chatbot-for-hr-services-complete-guide": [
    {
      question: "What is a chatbot for HR services?",
      answer:
        "An HR services chatbot is a conversational AI that handles employee requests across the HR function — leave requests, payslip retrieval, policy lookups, onboarding guidance, and benefits queries. Unlike a traditional FAQ page or ticketing system, it responds in natural language, takes action (not just answers), and works 24/7 without human involvement. The key difference from generic AI chatbots is that it is trained on your specific company policies and connected to live HRMS and payroll data.",
    },
    {
      question: "What HR services should I automate first with a chatbot?",
      answer:
        "The 6 HR services that deliver the fastest ROI from chatbot automation are: leave and PTO requests (the #1 HR query type in most organizations), payslip and payroll queries (account for 20–30% of all HR tickets), policy questions, onboarding documentation, benefits enrollment, and compliance attestations. These typically account for 60–70% of all HR tickets and are the highest-volume, lowest-complexity service types — making them ideal for automation.",
    },
    {
      question: "What ROI can I expect from an HR services chatbot in 90 days?",
      answer:
        "Based on Space HR deployment data across 200+ companies: HR ticket volume drops 65–80% within 30 days for automated service types, average query resolution time drops from 4–24 hours to under 3 seconds, HR admin time reduces from 18–22 hours to 3–5 hours per week, and cost per HR service request drops from ~$4.51 to ~$0.60. For a 200-person company, this typically represents $3,500–$5,000 per month in recovered HR staff time — achieving ROI in 30–60 days.",
    },
    {
      question: "How long does it take to deploy an HR chatbot?",
      answer:
        "A structured HR chatbot deployment follows a 4-week plan: Week 1 — audit your current HR ticket types and update policy documents; Week 2 — configure the chatbot, connect your HRMS, define escalation rules; Week 3 — pilot with 20–50 employees across departments; Week 4 — full company-wide rollout. Space HR can be fully deployed in 48 hours with guided onboarding for teams that have current policy documentation ready.",
    },
  ],

  "payroll-anomaly-detection-guide-2026": [
    {
      question: "What is payroll anomaly detection?",
      answer:
        "Payroll anomaly detection is the process of applying machine learning models and deterministic compliance rules to payroll runs to flag variances against historical norms. By analyzing gross-to-net calculations, tax withholdings, bank account details, and employee timesheets, the AI provides a comprehensive audit trail of every variance — acting as a pre-calculation firewall before funds are disbursed or ACH bank files are finalized.",
    },
    {
      question: "What are the most common payroll errors that AI anomaly detection catches?",
      answer:
        "The 8 most costly payroll errors caught by AI audits are: ghost employees (active payroll profiles for terminated staff or duplicate identities), withholding drift (inconsistencies in FUTA, FICA, or state tax withholdings), bank account swaps (sudden routing number changes across multiple profiles), double payments (duplicate entries for the same pay period), out-of-bounds hours (timesheet hours exceeding normal variance without supervisor override), off-cycle discrepancies (bonuses paid without approved authorization), incorrect local taxes (wrong municipal tax codes for remote workers), and gross-to-net variance (statistical spikes in net pay not explained by salary changes).",
    },
    {
      question: "How does AI payroll auditing compare to manual spot-checking?",
      answer:
        "Manual spot-checking typically covers only 10–15% of payroll records and takes 4–8 hours per cycle using only static rules. AI anomaly detection covers 100% of all registers and transactions in under 10 seconds, using historical variance analysis and pattern detection with real-time sync against current federal and state tax tables. Manual reviews miss subtle cross-employee patterns and leave companies vulnerable to errors that only appear when comparing against historical baselines.",
    },
    {
      question: "How do I implement AI payroll auditing in my current workflow?",
      answer:
        "Implementation requires 4 steps: (1) Historical ingestion — connect the AI to 3–6 cycles of historical payroll registers to establish baseline earnings, deductions, and tax patterns for every employee; (2) Connect inputs — link leave balances, time tracking, and expense systems so the AI can verify overtime and unpaid leave hours; (3) Define thresholds — set alert limits such as flagging net pay variance greater than 15% or timesheet modifications without digital approval; (4) Pre-payroll lock audit — run the register through the detector and resolve all high-priority flags before processing.",
    },
  ],

  "360-degree-performance-appraisal-guide": [
    {
      question: "What are the core benefits of 360-degree performance reviews?",
      answer:
        "Unlike traditional top-down reviews, multi-rater 360-degree feedback reveals blind spots that managers cannot see from their vantage point alone. It highlights unrecognized leaders, identifies cross-functional collaboration bottlenecks, and provides employees with balanced perspectives from peers, direct reports, and cross-functional collaborators. Crucially, it moves performance reviews from subjective impressions to observable competencies measured consistently across multiple raters.",
    },
    {
      question: "How do I write effective 360 review questions?",
      answer:
        "Effective 360 review questions target observable behaviors rather than personality traits. Instead of asking 'Is Jane a good communicator?' ask 'Does Jane clearly explain technical issues to non-technical stakeholders?' Use competency-based behavioral questions that combine scale-based ratings (1–5) for core competencies with open-ended 'Start, Stop, Continue' questions. Limit reviewers to 3–5 peers who work closely with the employee, selected collaboratively by the employee and manager to reduce bias.",
    },
    {
      question: "How does AI solve the 360 review data processing bottleneck?",
      answer:
        "The biggest challenge with 360 reviews is the volume of text data. A manager with 8 direct reports each receiving 5 reviews must parse, organize, and summarize 40 open-ended forms — leading to review fatigue and generic feedback. AI platforms like Space HR securely analyze all rater feedback, categorize strengths and development areas, and generate structured summaries with specific training suggestions. Managers review, edit, and finalize the summary — reducing administrative preparation time by 80% while retaining full human governance.",
    },
  ],

  "ai-hr-software-buying-guide-2026": [
    {
      question: "How do I distinguish real AI HR software from marketing buzzwords?",
      answer:
        "Ask vendors three specific questions when evaluating AI claims: (1) Is the system running hardcoded rules or actual machine learning? Real AI detects statistical anomalies specific to each employee's role, location, and history — not just static threshold checks. (2) Does the AI connect to live database records or only static documents? A real HR assistant reads live leave balances, org charts, and salary scales. (3) Does the AI provide transparent audit trails showing the exact source data used for each decision — so you can verify and override?",
    },
    {
      question: "What security requirements should HR software meet in 2026?",
      answer:
        "HR software stores your most sensitive corporate data — Social Security numbers, banking details, salary history, and personal addresses. Minimum security requirements are: SOC 2 Type II certification (verifies sustained operational security controls over time, not just a point-in-time assessment), GDPR compliance with EU data residency option (for global teams), and SAML SSO with SCIM provisioning (so IT can instantly revoke access when employees leave, across all integrated systems).",
    },
    {
      question: "How do I run a successful HR software proof-of-concept (POC)?",
      answer:
        "Run a 14-day proof of concept with a pilot group — typically your HR team and one business unit. Test the highest-frequency workflows: submit a leave request, retrieve a simulated payslip, update bank details, and run a test payroll register audit through the anomaly detection engine. Measure adoption rates and request resolution speeds directly during the POC. Do not sign an enterprise contract based solely on a vendor's sales demo — real-world performance on your data often differs significantly from a curated demonstration.",
    },
  ],

  "hr-data-analytics-guide-2026": [
    {
      question: "What are the stages of HR analytics maturity?",
      answer:
        "HR analytics maturity progresses through four phases: (1) Descriptive reporting — what happened (e.g., 'Our voluntary turnover was 14% last year'); (2) Diagnostic analysis — why it happened (e.g., 'Turnover was highest in Sales teams with tenure under 12 months'); (3) Predictive analytics — what will happen (e.g., 'This specific department is at 30% attrition risk over the next 90 days due to compensation drift'); (4) Prescriptive guidance — how to optimize (e.g., 'Adjusting base pay for this specific cohort by 6% will reduce retention risk by 80%'). Most HR departments are stuck at stage one.",
    },
    {
      question: "What workforce metrics should HR teams track in 2026?",
      answer:
        "The key workforce metrics for modern HR teams are: Labor Cost Variance (actual department spending vs. budgeted labor costs in real time), Time-to-Productivity (days for new hires to reach full standard output — a key metric for onboarding ROI), Compensation Ratio (employee salary vs. market midpoint — comp-ratios below 0.85 are a primary predictor of voluntary attrition), attrition risk scores by department and tenure cohort, and Nudge Response Rate (percentage of review forms completed within 48 hours of automated triggers, reflecting engagement with HR systems).",
    },
  ],

  "importance-of-soft-skills": [
    {
      question: "Why are soft skills more valuable in an AI-driven workplace?",
      answer:
        "Three dynamics are driving this shift: First, as AI automates routine cognitive work, the remaining human work skews toward complex interpersonal and judgment-heavy situations that no algorithm handles well — de-escalating conflict, motivating a demoralized team, deciding whether to trust someone's word. Second, AI tools amplify output but require human direction — teams that collaborate and communicate effectively use AI to achieve far more than technically skilled but interpersonally dysfunctional teams using the same tools. Third, as technical skills are increasingly commoditized through AI assistance, the ability to work with people becomes the rarer and therefore more valuable differentiator.",
    },
    {
      question: "What soft skills matter most in an AI-driven organization?",
      answer:
        "The five most critical soft skills in an AI-driven organization are: (1) Collaborative problem-solving — structured intellectual disagreement that produces better decisions than any individual; (2) Adaptability — updating mental models quickly when conditions change, and helping others do the same; (3) Influencing without authority — building credibility and bringing people along without relying on hierarchy; (4) Emotional regulation under pressure — maintaining decision quality and relationship quality during crises; (5) Active listening — understanding what someone is actually saying, including what they are not saying, in an environment of constant partial attention.",
    },
    {
      question: "How should organizations assess soft skills accurately?",
      answer:
        "The most reliable soft skill assessment approaches are: structured behavioral interviews with multiple independent raters using calibrated rubrics (reduces individual interviewer bias); work sample exercises that put candidates in realistic situations requiring the skill — negotiation simulations, presentations to skeptical audiences, conflict resolution role-plays; and 360-degree feedback collected from diverse relationships — peers, direct reports, and cross-functional collaborators — where the pattern across raters is more trustworthy than any single observation. Annual performance reviews alone are insufficient for accurate soft skill assessment.",
    },
  ],

  "employee-attrition-prediction-guide": [
    {
      question: "What are the earliest warning signs of employee attrition?",
      answer:
        "The seven leading indicators of voluntary attrition that appear weeks or months before resignation are: compensation drift (an employee's salary falling more than 10% below market rate for their role and location), stalled career progression (no title change or significant responsibility increase in 24+ months), declining performance review scores over consecutive cycles, reduced engagement in company communications and all-hands meetings, decreased cross-functional collaboration frequency, increased use of sick and personal days in a pattern, and resignation of close colleagues or managers the employee is aligned with.",
    },
    {
      question: "How does AI predict which employees are at risk of leaving?",
      answer:
        "AI attrition prediction models analyze multiple data streams simultaneously — performance scores, compensation vs. market benchmarks, tenure patterns, engagement survey results, leave frequency, and manager relationship history — to generate a flight risk score for each employee. The model compares current patterns against historical data from employees who resigned, identifying combinations of signals that consistently precede voluntary departure. The key advantage over intuition is that the model processes all employees continuously, not just those a manager notices.",
    },
    {
      question: "What interventions are most effective at retaining high-risk employees?",
      answer:
        "The interventions with the strongest retention impact, ordered by effectiveness, are: compensation adjustment to market rate (addresses the #1 attrition driver — compensation drift), a direct conversation with the employee's manager to understand and address specific concerns, a clear promotion timeline or expanded responsibilities if progression stagnation is the driver, team or role transfer if the primary issue is a manager relationship, and targeted recognition and development opportunities for employees whose engagement scores indicate disconnection from the organization's mission.",
    },
  ],

  "ai-recruitment-workflows-guide": [
    {
      question: "What parts of the recruitment workflow can AI automate?",
      answer:
        "AI can automate the highest-volume, most time-consuming recruitment tasks: job description generation and optimization for specific role requirements and target candidate profiles, resume screening and ranking against role competencies, initial candidate outreach and scheduling coordination, interview question generation tailored to the role and candidate background, reference check automation, and offer letter generation with variable compensation fields. The goal is to eliminate the administrative work that consumes 60–70% of recruiter time, freeing them for the relationship and judgment-intensive parts of hiring.",
    },
    {
      question: "How does AI resume screening work without introducing bias?",
      answer:
        "Effective AI resume screening requires training the model on job-relevant competencies rather than demographic patterns. Best practices include: defining clear, objective competency criteria before screening begins rather than letting the model infer criteria from historical hires (which encodes past biases), regularly auditing screening output for demographic disparities, using structured scoring rubrics that explain why each candidate was ranked where they were, and maintaining human review at the screening stage rather than using AI as a pure pass/fail filter.",
    },
    {
      question: "What metrics should I track to measure recruitment AI effectiveness?",
      answer:
        "The key metrics for measuring recruitment AI effectiveness are: time-to-screen (hours from application to first screening decision), screen-to-interview conversion rate (the percentage of screened candidates who warrant an interview — too high suggests insufficient filtering, too low suggests over-filtering), interview-to-offer rate (whether the AI is identifying candidates who make it through the full process), offer acceptance rate (a proxy for candidate experience quality), and 90-day retention of AI-screened hires vs. historically screened hires.",
    },
  ],
};
