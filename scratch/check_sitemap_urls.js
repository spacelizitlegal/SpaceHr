// We need to resolve TS paths or run via ts-node / tsx
// Since Next.js has tsconfig and aliases, let's write a simple JS script that mimics sitemap.ts
// or runs tsx to execute the typescript file.

const fs = require('fs');
const path = require('path');

// Let's run a child process using ts-node or tsx if available,
// or we can write a JS script that imports the blogData and courseData directly to get the count.
const { blogPosts } = require('../lib/blogData');
const { courses } = require('../lib/courseData');

const base = "https://spacehr.net";

const corePagesCount = 6;
const seoPagesCount = 5;
const compliancePagesCount = 2;

// Let's count features
const featurePaths = [
  "",
  "/ai-chatbots",
  "/ai-automation",
  "/ai-payroll-auditor",
  "/attrition-prediction",
  "/cost-prediction",
  "/hr-ai-concierge",
  "/ai-intelligence",
  "/ai-templates",
  "/payroll",
  "/appraisals",
  "/360-performance-appraisals",
  "/employee-self-service",
  "/attendance",
  "/leave-management",
  "/goals",
  "/finance",
  "/tax"
];

const solutionPaths = [
  "",
  "/hr-ai-chatbot",
  "/internal-employee-chatbot",
  "/hr-helpdesk-chatbot",
  "/enterprise-hr-chatbot",
  "/employee-self-service",
  "/chatbot-for-hr-services",
  "/ceo",
  "/hr-admin",
  "/employees"
];

const comparePaths = [
  "",
  "/bamboohr",
  "/workday",
  "/gusto",
  "/rippling",
  "/orangehrm",
  "/servicenow",
  "/leena-ai",
  "/moveworks",
  "/microsoft-copilot",
  "/darwinbox",
  "/sap-successfactors",
  "/adp",
  "/freshteam"
];

const industryPaths = [
  "/healthcare",
  "/retail",
  "/banking",
  "/manufacturing",
  "/government"
];

const regionPaths = [
  "/united-states",
  "/dubai",
  "/india",
  "/uk",
  "/singapore",
  "/canada",
  "/europe"
];

const resourcePaths = [
  "/blogs",
  "/courses",
  "/templates",
  "/glossary",
  "/tools/true-cost-calculator",
  "/tools/w4-generator",
  "/tools/w2-form-download",
  "/tools/fw4-form-download",
  "/resources/hr-chatbot-buyers-guide",
  "/sitemap-page"
];

console.log("Core pages:", corePagesCount);
console.log("SEO pages:", seoPagesCount);
console.log("Compliance pages:", compliancePagesCount);
console.log("Feature pages:", featurePaths.length);
console.log("Solution pages:", solutionPaths.length);
console.log("Compare pages:", comparePaths.length);
console.log("Industry pages:", industryPaths.length);
console.log("Region pages:", regionPaths.length);
console.log("Resource pages:", resourcePaths.length);
console.log("Blog posts:", blogPosts.length);
console.log("Courses:", courses.length);

const total = corePagesCount + seoPagesCount + compliancePagesCount + 
              featurePaths.length + solutionPaths.length + comparePaths.length +
              industryPaths.length + regionPaths.length + resourcePaths.length +
              blogPosts.length + courses.length;
              
console.log("Total sitemap URLs:", total);
