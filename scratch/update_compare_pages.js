const fs = require('fs');
const path = require('path');

const competitors = {
  adp: {
    competitorName: "ADP",
    paragraph: "ADP is a massive player in enterprise payroll and HR, but its architecture is built on a series of legacy systems acquired over decades. This results in disconnected databases, batch-based payroll calculations, and long turnaround times for compliance adjustments.",
    limitations: "Multiple logins for different modules (Run, Workforce Now, Vantage). Batch processing means payroll errors are only caught post-calculation, leading to manual checks and expensive retro-runs.",
    spaceAdvantages: "Single unified database for core HR, time tracking, and payroll. AI-powered pre-payroll auditor automatically scans every entry and flags compliance anomalies in real-time before calculations run."
  },
  bamboohr: {
    competitorName: "BambooHR",
    paragraph: "BambooHR is designed as a simple system of record for small businesses. However, its database architecture is not optimized for complex multi-entity structures, global payroll compliance, or advanced talent analytics, which mid-sized tech companies require.",
    limitations: "US-centric compliance model, basic REST API rate limits, and lack of advanced talent modeling (like weighted competency review summaries) for larger teams.",
    spaceAdvantages: "Multi-entity organizational charts, localized compliance models for UK, India, Dubai, Canada, and Europe, and AI-driven 360-degree review summaries."
  },
  darwinbox: {
    competitorName: "Darwinbox",
    paragraph: "Darwinbox is highly customizable for large Asian enterprises, but its high complexity results in long implementation timelines and a heavy administrative burden just to keep workflows running.",
    limitations: "Implementation times of 3–6 months. High consultant dependency for editing simple approval chains, and a complex mobile interface that frustrates end-users.",
    spaceAdvantages: "Deployable in 48 hours to 2 weeks. Pre-trained AI HR assistants handle policy queries automatically, and simple drag-and-drop workflow builders require zero IT support."
  },
  freshteam: {
    competitorName: "Freshteam",
    paragraph: "Freshteam is excellent for candidate tracking and basic employee directories but lacks native payroll engines, tax compliance processing, and advanced labor cost analytics.",
    limitations: "No built-in payroll or statutory tax calculations. Relies entirely on third-party integrations for financial records and core workforce expense budgeting.",
    spaceAdvantages: "All-in-one HRMS with native payroll, expense management, compliance tracking, and predictive workforce analytics built directly onto the employee profile database."
  },
  gusto: {
    competitorName: "Gusto",
    paragraph: "Gusto provides highly intuitive payroll for US startups and small teams, but lacks global compliance support, enterprise access management (SCIM provisioning), and custom multi-rater performance feedback structures.",
    limitations: "US-only payroll filing (requires external partners for global workers), basic performance feedback reviews, and lack of granular permission layers for large organizations.",
    spaceAdvantages: "Global capabilities with native regional compliance databases, enterprise security controls (SOC 2, SSO, SCIM), and advanced 360 review workflows."
  },
  leena_ai: {
    competitorName: "Leena AI",
    paragraph: "Leena AI operates as a conversational chatbot layer on top of legacy HR systems. This requires maintaining expensive integrations and doesn't solve the underlying problem of fragmented, slow legacy databases.",
    limitations: "Not a system of record. Requires separate licensing for core HRMS database, payroll engines, time logs, and performance tracking modules.",
    spaceAdvantages: "Unified HRMS that contains both the core database (system of record) and the conversational AI layer natively, removing integration lag and dual-licensing costs."
  },
  microsoft_copilot: {
    competitorName: "Microsoft Copilot",
    paragraph: "Microsoft Copilot is a general-purpose AI assistant. While it excels at document drafting, it lacks native HRIS database schemas, direct payroll system triggers, and payroll compliance guardrails.",
    limitations: "No native HR database or schema. Cannot process leave requests, generate .SIF files, or calculate tax withholdings natively in Microsoft 365.",
    spaceAdvantages: "Domain-specific AI pre-trained on HR compliance guidelines and directly connected to Space HR's databases to execute actions securely in real-time."
  },
  moveworks: {
    competitorName: "Moveworks",
    paragraph: "Moveworks is an AI service desk platform that resolves IT and HR tickets by connecting to external systems. However, it lacks native database models for payroll, performance review calibration, and leave tracking.",
    limitations: "Dual-vendor overhead. Requires configuring external databases (like Workday or ServiceNow) and mapping APIs to support basic HR conversations.",
    spaceAdvantages: "A unified, single-vendor solution providing both the conversational AI concierge and the core HR database, ensuring maximum data integrity and lower cost."
  },
  orangehrm: {
    competitorName: "OrangeHRM",
    paragraph: "OrangeHRM is a traditional open-source HRMS. While customizable, it lacks modern AI automation, built-in global payroll calculations, and forward-looking workforce analytics out of the box.",
    limitations: "Lacks native predictive analytics (e.g. attrition forecasting). Requires manual database administration and lacks native conversational AI support.",
    spaceAdvantages: "Modern SaaS platform with hybrid local/cloud AI, predictive attrition forecasting, live payroll anomaly detection, and a built-in AI HR Concierge."
  },
  rippling: {
    competitorName: "Rippling",
    paragraph: "Rippling is a powerful middleware platform for IT and HR, but its complex billing, variable pricing structures, and configuration overhead make it expensive and slow to adapt for non-US teams.",
    limitations: "High configuration overhead and complex pricing models that penalize mid-market companies expanding outside the US.",
    spaceAdvantages: "Predictable, flat-rate pricing with deep localized compliance support in GCC (Dubai), India, Canada, and Europe out of the box."
  },
  sap_successfactors: {
    competitorName: "SAP SuccessFactors",
    paragraph: "SAP SuccessFactors is a massive legacy suite that requires months of configuration, specialized developer consultants, and has a slow, complex user experience that hampers employee adoption.",
    limitations: "Average implementation time of 9-12 months. Requires dedicated consultant teams for minor process changes, and has a heavy, legacy database schema.",
    spaceAdvantages: "Instant activation with guided onboarding. Simple, modern web-speed interface and automated AI summaries that eliminate manual processing backlog."
  },
  servicenow: {
    competitorName: "ServiceNow",
    paragraph: "ServiceNow excels at general enterprise workflow ticketing, but its HR Service Delivery (HRSD) module is an expensive add-on that requires significant customization and engineering to support basic HR tasks.",
    limitations: "Ticketing-first architecture. Lacks native payroll processing, tax filing, and localized employment contract validation databases.",
    spaceAdvantages: "Purpose-built HRMS with native payroll, time tracking, performance reviews, and out-of-the-box Slack and Teams integrations."
  },
  workday: {
    competitorName: "Workday",
    paragraph: "Workday is the enterprise standard for Fortune 500 companies, but its high cost, complex customization requirements, and slow implementation cycles make it poorly suited for agile mid-market teams.",
    limitations: "Extremely high licensing and implementation costs. Requires certified Workday developers for workflow edits, and lacks proactive pre-payroll anomaly detection.",
    spaceAdvantages: "Mid-market pricing with enterprise-grade security. Deploys in weeks, offers self-service configuration, and features built-in pre-payroll AI auditing."
  }
};

const compareDir = path.join(__dirname, '..', 'app', 'compare');

for (const [key, data] of Object.entries(competitors)) {
  const folderName = key.replace('_', '-');
  const filePath = path.join(compareDir, folderName, 'page.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${filePath} - File not found`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // If the section is already added, skip to avoid double addition
  if (content.includes('Head-to-Head Technical Trade-offs')) {
    console.log(`Skipping ${folderName} - Already updated`);
    continue;
  }
  
  const tradeOffsHtml = `
      {/* Head-to-Head Technical Trade-offs */}
      <section className="py-24 bg-white dark:bg-[#0b1121] border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Head-to-Head Technical Trade-offs
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-xl mx-auto">
            A granular look at the architectural differences between Space HR and ${data.competitorName}.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800/40 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Product Architecture Comparison</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              ${data.paragraph}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-red-600 dark:text-red-400 mb-2">${data.competitorName} Limitations</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  ${data.limitations}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">Space HR Architectural Advantage</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  ${data.spaceAdvantages}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
`;

  // Insert before FAQ Section or FAQ
  if (content.includes('{/* FAQ Section */}')) {
    content = content.replace('{/* FAQ Section */}', `${tradeOffsHtml}\n      {/* FAQ Section */}`);
    console.log(`Updated ${folderName} via FAQ Section comment`);
  } else if (content.includes('{/* FAQ */}')) {
    content = content.replace('{/* FAQ */}', `${tradeOffsHtml}\n      {/* FAQ */}`);
    console.log(`Updated ${folderName} via FAQ comment`);
  } else {
    // Fallback if comments are missing, search for Frequently Asked Questions or similar
    console.log(`Failed to find target insertion comment in ${folderName}`);
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
}

console.log("Completed comparison page updates.");
