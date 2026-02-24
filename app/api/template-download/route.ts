import { NextRequest } from "next/server";

const templateBodies: Record<string, { fileName: string; content: string }> = {
  "360-degree-appraisal-template": {
    fileName: "360-degree-appraisal-template.txt",
    content:
      "360-Degree Appraisal Template\n\nSections:\n1. Employee Information\n2. Self Review\n3. Manager Feedback\n4. Peer Feedback\n5. Development Plan\n",
  },
  "annual-performance-review-template": {
    fileName: "annual-performance-review-template.txt",
    content:
      "Annual Performance Review Template\n\nSections:\n1. Goals Achieved\n2. Competency Ratings\n3. Manager Comments\n4. Development Actions\n",
  },
  "employee-self-assessment-form": {
    fileName: "employee-self-assessment-form.txt",
    content:
      "Employee Self-Assessment Form\n\nPrompts:\n1. Key achievements\n2. Challenges faced\n3. Skill improvements\n4. Next-period goals\n",
  },
  "pto-leave-policy-template": {
    fileName: "pto-leave-policy-template.txt",
    content:
      "PTO & Leave Policy Template\n\nInclude:\n1. Eligibility\n2. Accrual and carryover\n3. Request process\n4. Approvals and blackout periods\n",
  },
  "sick-leave-policy-template": {
    fileName: "sick-leave-policy-template.txt",
    content:
      "Sick Leave Policy Template\n\nInclude:\n1. Eligibility\n2. Notice requirements\n3. Documentation\n4. Return-to-work protocol\n",
  },
  "time-attendance-policy-template": {
    fileName: "time-attendance-policy-template.txt",
    content:
      "Time & Attendance Policy Template\n\nInclude:\n1. Work hours\n2. Punctuality policy\n3. Overtime and approvals\n4. Attendance tracking process\n",
  },
  "remote-work-employee-handbook-template": {
    fileName: "remote-work-employee-handbook-template.txt",
    content:
      "Remote Work Employee Handbook Template\n\nInclude:\n1. Eligibility\n2. Communication rules\n3. Security requirements\n4. Equipment and reimbursements\n",
  },
  "hybrid-work-policy-template": {
    fileName: "hybrid-work-policy-template.txt",
    content:
      "Hybrid Work Policy Template\n\nInclude:\n1. In-office schedule\n2. Remote day rules\n3. Team coordination\n4. Performance expectations\n",
  },
  "new-employee-onboarding-checklist": {
    fileName: "new-employee-onboarding-checklist.txt",
    content:
      "New Employee Onboarding Checklist\n\nDay 1:\n- Required paperwork\n- Account setup\n- Team introductions\n\nWeek 1:\n- Training plan\n- 30-60-90 goals\n",
  },
  "employee-offboarding-checklist": {
    fileName: "employee-offboarding-checklist.txt",
    content:
      "Employee Offboarding Checklist\n\nInclude:\n1. Handover tasks\n2. Access removal\n3. Asset return\n4. Exit interview\n5. Final payroll steps\n",
  },
  "payroll-processing-checklist": {
    fileName: "payroll-processing-checklist.txt",
    content:
      "Payroll Processing Checklist\n\nInclude:\n1. Input validation\n2. Tax/deduction checks\n3. Approval flow\n4. Payment file review\n5. Post-run audit\n",
  },
  "employee-classification-guide": {
    fileName: "employee-classification-guide.txt",
    content:
      "Employee Classification Guide\n\nGuide:\n1. Employment type criteria\n2. Exempt/non-exempt rules\n3. Contractor classification checks\n",
  },
  "okr-planning-template": {
    fileName: "okr-planning-template.txt",
    content:
      "OKR Planning Template\n\nObjective:\nKey Result 1:\nKey Result 2:\nKey Result 3:\nOwner:\nTarget Date:\n",
  },
  "individual-development-plan-template": {
    fileName: "individual-development-plan-template.txt",
    content:
      "Individual Development Plan (IDP) Template\n\nInclude:\n1. Skill gap analysis\n2. Development goals\n3. Actions and timelines\n4. Success metrics\n",
  },
};

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");

  if (!slug || !templateBodies[slug]) {
    return new Response("Template not found", { status: 404 });
  }

  const template = templateBodies[slug];

  return new Response(template.content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": `attachment; filename="${template.fileName}"`,
      "Cache-Control": "no-store",
    },
  });
}
