import { NextRequest } from "next/server";

const templateBodies: Record<string, { fileName: string; content: string }> = {
  "360-degree-appraisal-template": {
    fileName: "360-degree-appraisal-template.txt",
    content: `360-DEGREE PERFORMANCE APPRAISAL TEMPLATE
Space HR | spacehr.net/features/360-performance-appraisals
==========================================================

EMPLOYEE INFORMATION
--------------------
Employee Name:
Job Title:
Department:
Manager:
Review Period: From _______ To _______
Date Completed:

SECTION 1: SELF-ASSESSMENT
---------------------------
Instructions: Rate yourself on each competency (1 = Needs Improvement, 3 = Meets Expectations, 5 = Exceeds Expectations). Provide a brief example for each rating.

1.1 Communication & Collaboration
Rating (1–5): ___
Example:

1.2 Technical / Role-Specific Skills
Rating (1–5): ___
Example:

1.3 Problem-Solving & Decision-Making
Rating (1–5): ___
Example:

1.4 Leadership & Initiative
Rating (1–5): ___
Example:

1.5 Adaptability & Learning
Rating (1–5): ___
Example:

Top 3 achievements this period:
1.
2.
3.

Areas I want to develop:
1.
2.

SECTION 2: MANAGER ASSESSMENT
-------------------------------
Instructions: Rate the employee independently before reviewing the self-assessment.

2.1 Communication & Collaboration   Rating (1–5): ___
Comments:

2.2 Technical / Role-Specific Skills   Rating (1–5): ___
Comments:

2.3 Problem-Solving & Decision-Making   Rating (1–5): ___
Comments:

2.4 Leadership & Initiative   Rating (1–5): ___
Comments:

2.5 Adaptability & Learning   Rating (1–5): ___
Comments:

Overall Manager Rating: ___
Recommended for promotion / stretch assignment? Yes / No
Notes:

SECTION 3: PEER FEEDBACK (complete one per peer rater)
---------------------------------------------------------
Reviewer Name (optional — can be anonymous):
Relationship to employee:

Strength I consistently observe:

Area where this person could have more impact:

Rating: Highly Effective / Effective / Needs Development

SECTION 4: DEVELOPMENT PLAN (completed jointly by employee and manager)
------------------------------------------------------------------------
Development Goal 1:
Action steps:
Resources required:
Target date:
Success measure:

Development Goal 2:
Action steps:
Resources required:
Target date:
Success measure:

SECTION 5: FINAL RATINGS SUMMARY
----------------------------------
(Complete after all rater inputs are collected)

Competency                     Self  Manager  Peer Avg
Communication & Collaboration  ___   ___      ___
Technical Skills               ___   ___      ___
Problem-Solving                ___   ___      ___
Leadership & Initiative        ___   ___      ___
Adaptability                   ___   ___      ___
OVERALL AVERAGE                ___   ___      ___

Manager signature: ___________________  Date: _________
Employee signature: __________________  Date: _________
HR sign-off: ________________________  Date: _________

---
Automate this entire process with Space HR's AI-powered 360° appraisal module.
Get AI-generated summaries, multi-rater collection, and calibration tools in one platform.
spacehr.net/features/360-performance-appraisals
`,
  },

  "annual-performance-review-template": {
    fileName: "annual-performance-review-template.txt",
    content: `ANNUAL PERFORMANCE REVIEW TEMPLATE
Space HR | spacehr.net/features/appraisals
==========================================

EMPLOYEE INFORMATION
--------------------
Employee Name:
Job Title:
Department:
Direct Manager:
Review Period: Jan 1 – Dec 31, ______
Date of Review Meeting:

SECTION 1: GOAL ACHIEVEMENT REVIEW
------------------------------------
(List the goals set at the beginning of the year and assess each)

Goal 1:
Status: Achieved / Partially Achieved / Not Achieved
Evidence / Result:
Rating (1–5): ___

Goal 2:
Status: Achieved / Partially Achieved / Not Achieved
Evidence / Result:
Rating (1–5): ___

Goal 3:
Status: Achieved / Partially Achieved / Not Achieved
Evidence / Result:
Rating (1–5): ___

Overall Goal Achievement Score: ___

SECTION 2: COMPETENCY RATINGS
-------------------------------
Rate each on a 1–5 scale: 1=Unsatisfactory, 2=Below Expectations, 3=Meets Expectations, 4=Exceeds Expectations, 5=Outstanding

Job Knowledge & Technical Skills     Rating: ___
Comments:

Quality of Work & Attention to Detail   Rating: ___
Comments:

Communication (Written & Verbal)     Rating: ___
Comments:

Teamwork & Collaboration             Rating: ___
Comments:

Time Management & Productivity       Rating: ___
Comments:

Problem-Solving & Initiative         Rating: ___
Comments:

Customer / Stakeholder Focus         Rating: ___
Comments:

Average Competency Score: ___

SECTION 3: KEY ACCOMPLISHMENTS
--------------------------------
Describe 3–5 notable contributions this employee made this year:

1.
2.
3.
4.
5.

SECTION 4: AREAS FOR DEVELOPMENT
-----------------------------------
2–3 specific behaviors or skills to develop in the coming year:

1.
2.
3.

SECTION 5: OVERALL PERFORMANCE RATING
----------------------------------------
Calculate: (Goal Score × 50%) + (Competency Score × 50%) = Overall Score

Overall Score: ___

Rating Band:
1.0–1.9  =  Unsatisfactory
2.0–2.9  =  Below Expectations
3.0–3.4  =  Meets Expectations
3.5–4.4  =  Exceeds Expectations
4.5–5.0  =  Outstanding

Final Rating: [ ] Unsatisfactory  [ ] Below  [ ] Meets  [ ] Exceeds  [ ] Outstanding

SECTION 6: NEXT YEAR GOALS
----------------------------
Set 3–5 measurable goals for the coming year (SMART format):

Goal 1:
Target:
Measure:
Deadline:

Goal 2:
Target:
Measure:
Deadline:

Goal 3:
Target:
Measure:
Deadline:

SECTION 7: COMPENSATION RECOMMENDATION
-----------------------------------------
[ ] No change     [ ] Merit increase: ____%     [ ] Promotion recommended
Justification:

Manager Signature: ___________________  Date: _________
Employee Signature: __________________  Date: _________
HR Approval: ________________________  Date: _________

---
Replace annual review paperwork with Space HR's automated appraisal module.
AI-generated summaries, goal tracking, and calibration — all in one platform.
spacehr.net/features/appraisals
`,
  },

  "employee-self-assessment-form": {
    fileName: "employee-self-assessment-form.txt",
    content: `EMPLOYEE SELF-ASSESSMENT FORM
Space HR | spacehr.net/features/appraisals
==========================================

Employee Name:
Role / Title:
Department:
Review Period:
Date Submitted:

PART 1: ACHIEVEMENT REFLECTION
--------------------------------
1. What were your 3 most significant achievements this review period?

Achievement 1:
Impact / Result:

Achievement 2:
Impact / Result:

Achievement 3:
Impact / Result:

2. Which goals from the beginning of the period did you fully achieve?

3. Were there any goals you didn't complete? If so, what were the obstacles?

PART 2: SKILL & COMPETENCY SELF-RATING
-----------------------------------------
Rate yourself honestly. This is for growth conversations, not final scoring.
Scale: 1=Needs work, 2=Developing, 3=Competent, 4=Strong, 5=Expert

Technical / Role Skills:                Rating: ___
What I do well:
What I want to improve:

Communication (written & spoken):       Rating: ___
What I do well:
What I want to improve:

Collaboration & Teamwork:               Rating: ___
What I do well:
What I want to improve:

Problem-solving & Decision-making:      Rating: ___
What I do well:
What I want to improve:

Time Management & Prioritization:       Rating: ___
What I do well:
What I want to improve:

Leadership & Taking Initiative:         Rating: ___
What I do well:
What I want to improve:

PART 3: CHALLENGES & LEARNING
--------------------------------
4. What was the biggest challenge you faced this period? How did you handle it?

5. What did you learn this year that you didn't know at the start?

6. Is there anything that made it harder to do your best work this period?

PART 4: CAREER DEVELOPMENT
----------------------------
7. What skills or capabilities do you most want to build in the next 12 months?

8. Are there roles, projects, or experiences you'd like to pursue?

9. How can your manager or the company better support your development?

PART 5: FEEDBACK TO YOUR MANAGER (OPTIONAL)
----------------------------------------------
10. What is one thing your manager does well that helps your performance?

11. Is there anything your manager could do differently to help you succeed?

PART 6: LOOKING AHEAD
----------------------
12. What are the 3 most important things you want to accomplish next period?

Goal 1:
Goal 2:
Goal 3:

Employee Signature: __________________  Date: _________

---
Enable continuous self-assessment and goal tracking with Space HR.
spacehr.net/features/appraisals
`,
  },

  "pto-leave-policy-template": {
    fileName: "pto-leave-policy-template.txt",
    content: `PTO & LEAVE POLICY TEMPLATE
Space HR | spacehr.net/features/leave-management
================================================

[COMPANY NAME] PAID TIME OFF POLICY
Effective Date: ____________
Last Updated: ____________
Approved by: ____________

1. PURPOSE
-----------
This policy describes the paid time off (PTO) benefits available to eligible employees of [Company Name], including accrual rules, usage guidelines, and request procedures.

2. ELIGIBILITY
---------------
- Full-time employees are eligible from their first day of employment.
- Part-time employees working __ or more hours per week are eligible on a pro-rata basis.
- Contract and temporary employees are not eligible unless stated otherwise in their agreement.

3. PTO ACCRUAL RATES
---------------------
PTO accrues from the first day of employment at the following rates:

Years of Service         Annual PTO Accrual    Monthly Accrual
0 – 1 year              10 days                0.83 days
1 – 3 years             15 days                1.25 days
3 – 5 years             18 days                1.50 days
5+ years                20 days                1.67 days

PTO is accrued per pay period. Employees may not use accrued PTO before it is earned.

4. CARRYOVER RULES
-------------------
- Employees may carry over up to [__] days of unused PTO from one calendar year to the next.
- Any PTO balance exceeding the carryover cap will be forfeited on January 1 each year.
- Alternatively: [Company] operates an unlimited PTO policy — see addendum.

5. PTO REQUEST PROCEDURE
-------------------------
Step 1: Log in to [HRMS / Space HR] and submit a leave request.
Step 2: Select leave type (Vacation, Personal Day, etc.) and date range.
Step 3: Manager receives an automatic notification and must approve or decline within 2 business days.
Step 4: Employee receives confirmation email. Leave is reflected in their balance immediately upon approval.

Advance Notice Required:
- 1–2 days leave: 3 business days advance notice (where possible)
- 3–5 days leave: 1 week advance notice
- More than 5 days: 3 weeks advance notice recommended

6. BLACKOUT PERIODS
--------------------
PTO requests may be restricted during the following periods:
- [ List peak business periods, year-end close, etc. ]
Management reserves the right to deny PTO requests during critical business periods.

7. PUBLIC HOLIDAYS
-------------------
[Company Name] observes the following paid public holidays in addition to PTO:
[ List company holidays — e.g., New Year's Day, Memorial Day, Independence Day, Labor Day, Thanksgiving, Christmas ]

8. SICK LEAVE
--------------
Sick leave is separate from PTO. See the Sick Leave Policy for details. Employees should not use PTO for illness.

9. PTO ON TERMINATION
----------------------
[ ] Accrued, unused PTO will be paid out upon termination per applicable state law.
[ ] Unused PTO is forfeited upon termination.

10. POLICY QUESTIONS
---------------------
Direct questions about this policy to: [HR email or name]

---
Automate PTO requests, approvals, and balance tracking with Space HR.
spacehr.net/features/leave-management
`,
  },

  "sick-leave-policy-template": {
    fileName: "sick-leave-policy-template.txt",
    content: `SICK LEAVE POLICY TEMPLATE
Space HR | spacehr.net/features/leave-management
================================================

[COMPANY NAME] SICK LEAVE POLICY
Effective Date: ____________
Last Updated: ____________
Approved by: ____________

1. PURPOSE
-----------
This policy establishes guidelines for sick leave entitlements, usage, documentation requirements, and return-to-work procedures for all eligible [Company Name] employees.

2. ELIGIBILITY
---------------
All full-time and part-time employees are entitled to sick leave from their date of hire. Contract employees are not eligible unless specified in their contract.

3. SICK LEAVE ENTITLEMENT
--------------------------
- Full-time employees: [__] days per calendar year (or [__] hours).
- Part-time employees: Pro-rated based on scheduled hours.
- Sick leave does not roll over to the next calendar year unless required by applicable state or local law.
- Accrual method: [ ] Lump sum at start of year  [ ] Accrued per pay period at [__] hours per pay period

4. PERMITTED USES
------------------
Sick leave may be used for:
- Employee's own physical or mental illness, injury, or medical appointment
- Care of a family member who is ill (spouse, child, parent — see FMLA for extended care)
- Preventive medical care (check-ups, screenings, vaccinations)
- Mental health days (where permitted by applicable law)

Sick leave may NOT be used for:
- Personal errands or non-medical appointments
- Extending a holiday or vacation
- Absence due to suspension or other disciplinary action

5. NOTIFICATION PROCEDURE
--------------------------
- Employees must notify their manager as early as possible before their shift starts (by [TIME], or within [__] hour of normal start time).
- Notification method: [ ] Direct call to manager  [ ] Email  [ ] HRMS system entry
- Texting alone is not sufficient unless prior arrangement has been made with the manager.

6. DOCUMENTATION REQUIREMENTS
-------------------------------
- Absences of 1–2 days: No documentation required.
- Absences of 3 or more consecutive days: A medical certificate from a licensed healthcare provider is required upon return.
- Recurring absences: HR may request supporting documentation after [__] sick leave instances in a rolling 12-month period.

7. RETURN-TO-WORK PROTOCOL
----------------------------
- Employees absent for 5 or more days must complete a Return-to-Work form before resuming duties.
- Medical clearance may be required for absence due to contagious illness or injury affecting job performance.
- Return-to-work meetings: HR or manager will conduct a brief return-to-work check-in after extended absences.

8. FMLA & EXTENDED LEAVE
--------------------------
Sick leave runs concurrently with FMLA-protected leave where applicable. Employees who exhaust sick leave and need extended time off should contact HR to discuss FMLA or disability leave options.

9. ABUSE OF SICK LEAVE
------------------------
Employees found misusing sick leave may face disciplinary action up to and including termination. Patterns of absence around holidays or weekends will be reviewed.

10. POLICY CONTACT
-------------------
Questions about this policy: [HR email / HR team name]

---
Track sick leave balances and automate return-to-work workflows with Space HR.
spacehr.net/features/leave-management
`,
  },

  "time-attendance-policy-template": {
    fileName: "time-attendance-policy-template.txt",
    content: `TIME & ATTENDANCE POLICY TEMPLATE
Space HR | spacehr.net/features/attendance
==========================================

[COMPANY NAME] TIME & ATTENDANCE POLICY
Effective Date: ____________
Last Updated: ____________
Approved by: ____________

1. PURPOSE
-----------
This policy defines the standards for employee attendance, work hours, timekeeping, and the procedures for reporting and managing absences at [Company Name].

2. STANDARD WORK HOURS
------------------------
- Core hours: [START TIME] – [END TIME], Monday through Friday
- Flexible start/end time (if applicable): Employees may start between [__] and [__], provided core hours are covered
- Lunch/break: [__] minutes unpaid meal break. Two [__]-minute paid rest breaks per full shift.
- Remote / hybrid schedules: As agreed in writing with the employee's manager

3. ATTENDANCE EXPECTATIONS
---------------------------
- Employees are expected to be ready to work at their scheduled start time.
- Excessive tardiness (more than [__] instances per month, or [__] minutes late) will be addressed through the performance management process.
- Unexcused absences (absent without approved leave or notification) may result in disciplinary action.

4. ABSENCE REPORTING
---------------------
When you are unable to attend work:
1. Notify your direct manager via [phone / email / HRMS system] before [TIME] on the day of absence.
2. Provide an estimated return date if known.
3. Log the absence in [Space HR / HRMS] as soon as possible.
4. For planned medical appointments: request leave in advance through the leave management system.

5. TIMEKEEPING REQUIREMENTS
-----------------------------
- All hours worked must be recorded in the [timekeeping system / Space HR].
- Employees must clock in and out at the start and end of each shift and for all breaks.
- Falsifying time records is grounds for immediate termination.
- Managers are responsible for reviewing and approving their team's timesheets by [DAY] each week.

6. OVERTIME
-----------
- Non-exempt employees must receive manager pre-approval before working overtime.
- Overtime is compensated at 1.5× the regular hourly rate for hours exceeding 40 in a workweek, per FLSA.
- Unauthorized overtime may not be compensated but will still be addressed through the performance management process.

7. FLEXIBLE WORK ARRANGEMENTS
-------------------------------
Employees may request flexible schedules or remote work under the company's Flexible Work Policy. Flexible arrangements are subject to manager and HR approval and may be revoked if attendance or productivity standards are not met.

8. ATTENDANCE TRACKING TECHNOLOGY
-----------------------------------
[Company Name] uses [Space HR / GPS attendance system / badge system] to record attendance. Employees must:
- Use only their own credentials or badge to clock in/out.
- Not clock in/out on behalf of another employee (buddy punching is grounds for termination).

9. ATTENDANCE STANDARDS
------------------------
The following is considered excessive absenteeism and will trigger an HR review:
- More than [__] unexcused absences in a rolling 90-day period
- More than [__] instances of tardiness (arriving more than [__] minutes late) per month

10. POLICY CONTACT
-------------------
HR contact for attendance questions: [HR email]

---
Automate attendance tracking, timesheet approvals, and absence management with Space HR.
spacehr.net/features/attendance
`,
  },

  "remote-work-employee-handbook-template": {
    fileName: "remote-work-employee-handbook-template.txt",
    content: `REMOTE WORK EMPLOYEE HANDBOOK TEMPLATE
Space HR | spacehr.net/features/employee-self-service
=====================================================

[COMPANY NAME] REMOTE WORK HANDBOOK
Version: 1.0
Effective Date: ____________
Approved by: ____________

SECTION 1: INTRODUCTION
------------------------
[Company Name] supports flexible, remote-friendly work arrangements that enable employees to perform their best work regardless of location. This handbook sets out the expectations, responsibilities, and procedures for employees working remotely, whether full-time or on a hybrid schedule.

SECTION 2: ELIGIBILITY
------------------------
Remote work is available to employees whose roles can be performed effectively outside of the office, as determined by their manager and HR. Remote work eligibility is reviewed annually or when role responsibilities change.

Employees on performance improvement plans or with active attendance concerns are not eligible for remote work arrangements until those issues are resolved.

SECTION 3: WORK SCHEDULE & AVAILABILITY
-----------------------------------------
- Remote employees must maintain their contracted hours and be available during core hours: [START TIME – END TIME].
- You must be reachable via [Slack / Teams / email] within [__] minutes during core hours.
- Schedule changes must be communicated to your manager in advance.
- All time must be logged in [Space HR / timekeeping system] with the same standards as in-office employees.

SECTION 4: WORKSPACE REQUIREMENTS
-----------------------------------
Employees are responsible for maintaining a safe, productive workspace that:
- Has a reliable internet connection (minimum [__] Mbps upload/download recommended)
- Is free from distractions during video calls and focused work
- Has adequate lighting and ergonomic setup to prevent injury
- Is a private space when handling confidential company or client information

[Company Name] does not accept liability for injuries occurring outside a properly set up home workspace.

SECTION 5: EQUIPMENT & TECHNOLOGY
-----------------------------------
Company-provided equipment:
- [Company Name] will provide: [list — e.g., laptop, monitor, headset, keyboard]
- Employees are responsible for reasonable care of company equipment.
- Lost or damaged equipment may be replaced at the employee's expense.

Personal equipment use:
- Personal devices may be used for work only if enrolled in [MDM system name] and compliant with our IT security policy.

Software & access:
- All company software must be installed and used per the IT Acceptable Use Policy.
- VPN must be used when accessing company systems from non-secured networks.

SECTION 6: DATA SECURITY & CONFIDENTIALITY
--------------------------------------------
Remote employees must:
- Lock their device screen whenever stepping away
- Never print sensitive company documents at home unless using a shredder
- Use only company-approved cloud storage (not personal Dropbox, Google Drive, etc.)
- Report any suspected security incident or data breach to IT immediately at [IT email / hotline]
- Never conduct work calls or video meetings from public places where conversations can be overheard

Violation of security policies may result in immediate revocation of remote work privileges and disciplinary action.

SECTION 7: EXPENSE REIMBURSEMENT
----------------------------------
[Company Name] will reimburse the following remote work expenses upon submission of receipts:
- Internet allowance: Up to $[__] per month
- Home office setup (one-time, within [__] days of start): Up to $[__]
- Mobile phone (if used for work): Up to $[__] per month

Expenses must be submitted within [__] days of the expense date via [expense system]. Expenses not on the approved list require pre-approval from your manager.

SECTION 8: COMMUNICATION STANDARDS
-------------------------------------
- Respond to messages via [Slack / Teams] within [__] hours during core hours
- Use video on team calls unless you have a technical issue
- Set status in [Slack / Teams] when unavailable (lunch, focus time, etc.)
- Attend all required meetings — remote work does not excuse absence from scheduled meetings

SECTION 9: PERFORMANCE STANDARDS
-----------------------------------
Remote employees are held to the same performance standards as in-office employees. Performance is evaluated on output and outcomes, not hours visible online. Regular 1:1 check-ins with your manager are expected at least [weekly / bi-weekly].

SECTION 10: IN-OFFICE REQUIREMENTS
-------------------------------------
[If hybrid applies]: Employees are required to be on-site a minimum of [__] days per [week / month]. Specific in-office days may be required for team meetings, project kickoffs, or client visits.

SECTION 11: REVOCATION OF REMOTE WORK PRIVILEGES
--------------------------------------------------
Remote work privileges may be revoked at any time if:
- Performance standards are not being met
- Security policies have been violated
- The role requirements change to require physical presence
- The employee is on a performance improvement plan

SECTION 12: POLICY CONTACT
----------------------------
For remote work questions: [HR email] | IT support: [IT email]

I have read and agree to comply with this Remote Work Handbook:
Employee Signature: __________________  Date: _________
Manager Signature: ___________________  Date: _________

---
Manage remote and hybrid teams with Space HR's employee self-service and attendance tools.
spacehr.net/features/employee-self-service
`,
  },

  "hybrid-work-policy-template": {
    fileName: "hybrid-work-policy-template.txt",
    content: `HYBRID WORK POLICY TEMPLATE
Space HR | spacehr.net/features/attendance
==========================================

[COMPANY NAME] HYBRID WORK POLICY
Effective Date: ____________
Last Updated: ____________
Approved by: ____________

1. PURPOSE
-----------
This policy defines the hybrid work model at [Company Name], including in-office requirements, remote day expectations, scheduling coordination, and performance standards for employees on hybrid schedules.

2. HYBRID WORK MODEL
---------------------
[Company Name] operates a [__]-day in-office / [__]-day remote hybrid schedule.

Standard model: Employees are expected to be in the office a minimum of [__] days per week.

Anchor days (mandatory in-office for all teams):
- [Day 1, e.g., Tuesday]
- [Day 2, e.g., Thursday]

Remote days: Employees may work remotely on non-anchor days at their discretion, subject to manager approval and role requirements.

3. ELIGIBILITY
---------------
Hybrid work is available to employees in roles that can be performed effectively in both settings. Eligibility is determined by the employee's manager and HR based on role type, team needs, and performance history.

Employees who are:
- On a performance improvement plan
- In their first [90 days / 6 months] of employment (onboarding period — in-office preferred)
- In roles requiring consistent physical presence (e.g., reception, lab, production)
may not be eligible for hybrid arrangements.

4. SCHEDULING COORDINATION
---------------------------
- Employees must update their in-office / remote schedule in [Space HR / calendar system] at least [__] days in advance.
- Teams should coordinate to ensure adequate in-person coverage on critical project days.
- Managers have final say on schedule conflicts or business-critical in-person requirements.

5. IN-OFFICE EXPECTATIONS
--------------------------
On in-office days, employees are expected to:
- Arrive on time for their scheduled start
- Be available for in-person meetings, collaboration, and team discussions
- Adhere to the dress code / office norms policy
- Not conduct remote work from the office cafeteria or common areas during core hours

6. REMOTE DAY EXPECTATIONS
---------------------------
On remote days, employees are expected to:
- Maintain the same hours and availability as in-office
- Be reachable on [Slack / Teams] within [__] minutes during core hours
- Use VPN when accessing company systems
- Attend all scheduled video calls with camera on (unless technical issues)
- Have a dedicated workspace meeting minimum standards (see Remote Work Handbook)

7. TEAM COORDINATION
---------------------
Managers are responsible for ensuring:
- Team in-office schedules are balanced and overlapping for collaboration
- Remote days are not clustered such that the team has zero in-office coverage
- Any mandatory all-hands or client meetings are communicated at least [__] days in advance

8. TRAVEL & EXPENSE
--------------------
Commuting costs to and from the office are not reimbursed.
Business travel required by the role is governed by the separate Travel & Expense Policy.

9. TECHNOLOGY REQUIREMENTS
---------------------------
Remote days require:
- Reliable broadband internet ([__] Mbps minimum)
- Company-issued or IT-approved device
- VPN connected when accessing internal systems
- Video-capable device for meetings

10. PERFORMANCE & REVIEW
-------------------------
Hybrid work performance is evaluated on outcomes, not physical presence. Employees who do not maintain performance standards on remote days may have their hybrid arrangement reviewed or revoked.

Annual review: Hybrid arrangements are reviewed annually and may be adjusted based on business needs or changes in role responsibilities.

11. POLICY CONTACT
-------------------
HR questions: [HR email]

Employee Acknowledgement:
I have read and agree to the Hybrid Work Policy.
Employee Signature: __________________  Date: _________

---
Track hybrid attendance, desk booking, and team schedules with Space HR.
spacehr.net/features/attendance
`,
  },

  "new-employee-onboarding-checklist": {
    fileName: "new-employee-onboarding-checklist.txt",
    content: `NEW EMPLOYEE ONBOARDING CHECKLIST
Space HR | spacehr.net/features/hr-ai-concierge
================================================

Employee Name:
Start Date:
Role / Department:
Manager:
HR Contact:
IT Contact:

=== PRE-ARRIVAL (HR & Manager — complete before Day 1) ===

[ ] Offer letter sent and signed
[ ] Employment contract and NDA executed
[ ] Background check completed
[ ] Equipment ordered and configured (laptop, badge, phone if applicable)
[ ] System accounts created: email, Slack/Teams, HRIS, payroll
[ ] Desk/workspace assigned and prepared
[ ] Day 1 schedule prepared and sent to new hire
[ ] Onboarding buddy assigned
[ ] Welcome email sent with first-day logistics (where to go, who to meet, what to bring)
[ ] New hire added to all relevant team channels and distribution lists
[ ] First week's meetings scheduled (1:1 with manager, team intro, HR orientation)

=== DAY 1 — WELCOME & ORIENTATION ===

[ ] Welcome from HR / office tour
[ ] ID verification and I-9 completion (within 3 days of hire)
[ ] Badge / access card issued
[ ] Equipment received and set up (laptop, peripherals, monitors)
[ ] Email, Slack/Teams, and HRMS logins confirmed
[ ] Introduction to onboarding buddy
[ ] Team lunch or virtual meet-and-greet scheduled
[ ] Direct deposit / payroll form completed
[ ] Benefits enrollment initiated (deadline: typically 30 days from hire)
[ ] Company values, culture, and org structure overview
[ ] Health & safety briefing completed

=== WEEK 1 — ROLE FOUNDATIONS ===

[ ] 1:1 meeting with direct manager: goals, expectations, 30-60-90 plan reviewed
[ ] Role-specific tool access confirmed (CRM, project management, data systems, etc.)
[ ] Key stakeholder introductions completed
[ ] Mandatory compliance training assigned (e.g., harassment, data privacy, security)
[ ] Employee handbook reviewed and signed
[ ] IT security training completed
[ ] First assignment / project introduced
[ ] Emergency contact form completed
[ ] Performance review cycle explained

=== 30-DAY CHECK-IN ===

[ ] 30-day 1:1 with manager: early feedback, questions, blockers
[ ] All system access issues resolved
[ ] Initial projects / tasks on track
[ ] Benefits enrollment confirmed
[ ] Employee satisfaction check-in (HR)
[ ] 30-day goals reviewed

=== 60-DAY CHECK-IN ===

[ ] 60-day 1:1 with manager: performance conversation
[ ] Development goals discussed
[ ] Any training gaps identified and addressed
[ ] Peer feedback requested (optional at this stage)
[ ] 90-day goals confirmed

=== 90-DAY MILESTONE ===

[ ] 90-day performance review completed
[ ] Probationary period assessment (if applicable)
[ ] Career development conversation with manager
[ ] Employee confirms they have everything needed to succeed
[ ] HR check-in: any remaining onboarding items closed
[ ] Onboarding officially complete — confirmed in HRMS

---
Automate onboarding checklists, reminders, and document collection with Space HR.
spacehr.net/features/hr-ai-concierge
`,
  },

  "employee-offboarding-checklist": {
    fileName: "employee-offboarding-checklist.txt",
    content: `EMPLOYEE OFFBOARDING CHECKLIST
Space HR | spacehr.net/features/ai-automation
=============================================

Employee Name:
Role / Department:
Manager:
Last Day of Work:
HR Contact:

=== IMMEDIATELY UPON RESIGNATION / TERMINATION ===

[ ] Resignation acknowledged / termination decision documented
[ ] Separation type confirmed: Resignation / Termination / Retirement / Layoff
[ ] Last day confirmed and communicated to relevant teams
[ ] IT notified of offboarding date for access revocation planning
[ ] Payroll notified for final paycheck calculation
[ ] Legal notified if required (e.g., WARN Act, severance agreement)
[ ] Non-disclosure / non-compete review completed

=== KNOWLEDGE TRANSFER (complete by final week) ===

[ ] Knowledge transfer plan created with departing employee
[ ] Active project status documented and handed over to successor
[ ] Key contacts and relationships transferred
[ ] Passwords / shared credentials updated (do not retain personal passwords)
[ ] Documentation, SOPs, and files saved to shared storage
[ ] Email auto-reply and forwarding configured for continuity
[ ] Outstanding commitments to clients/stakeholders communicated

=== EQUIPMENT & ASSET RETURN (by final day) ===

[ ] Laptop / computer returned and wiped
[ ] Mobile phone returned (if company-issued)
[ ] Access badge / key card returned
[ ] Parking permit returned
[ ] Company credit card cancelled and returned
[ ] Any other company property returned (headset, monitors, etc.)
[ ] Asset receipt signed by both parties

=== SYSTEM ACCESS REVOCATION (on or before final day) ===

[ ] Email account deactivated / forwarded
[ ] Slack / Teams account deactivated
[ ] HRMS access removed
[ ] Payroll system access removed
[ ] CRM access removed
[ ] Code repositories (GitHub/GitLab) access removed
[ ] VPN credentials revoked
[ ] SSO (Okta / Azure AD) account deactivated
[ ] Cloud storage (Google Drive, Dropbox, etc.) access removed
[ ] Any industry-specific software access removed
[ ] All MFA / authenticator apps deactivated

=== FINAL PAY & BENEFITS ===

[ ] Final paycheck calculated (including outstanding PTO if applicable per state law)
[ ] Final paycheck issued by required deadline (check state law)
[ ] Accrued vacation payout confirmed (if applicable)
[ ] COBRA notice sent within 14 days of qualifying event
[ ] 401(k) / pension options explained (rollover, leave in plan, etc.)
[ ] Last expense report reviewed and processed
[ ] Any outstanding salary adjustments, bonuses, or commissions calculated

=== EXIT INTERVIEW ===

[ ] Exit interview scheduled (in-person, video, or written survey)
[ ] Key themes documented by HR
[ ] Actionable feedback escalated to relevant manager / leadership
[ ] Exit interview data entered into HR system for trend analysis

=== COMMUNICATION ===

[ ] Team announcement drafted and sent by manager
[ ] Client / partner communication sent if needed
[ ] Internal contacts updated on coverage / successor contact
[ ] LinkedIn connection / recommendation offered (optional, goodwill gesture)

=== FINAL STEPS ===

[ ] Employment record updated in HRMS (termination date, reason, eligible for rehire Y/N)
[ ] Reference policy confirmed with employee
[ ] Offboarding complete — confirmed in HRMS

Employee Signature (asset return): __________________  Date: _________
Manager Signature: ___________________  Date: _________
HR Sign-off: ________________________  Date: _________

---
Automate offboarding workflows, access revocation reminders, and exit interview scheduling with Space HR.
spacehr.net/features/ai-automation
`,
  },

  "payroll-processing-checklist": {
    fileName: "payroll-processing-checklist.txt",
    content: `PAYROLL PROCESSING CHECKLIST
Space HR | spacehr.net/features/ai-payroll-auditor
==================================================

Company: ___________________
Payroll Period: From _________ To _________
Pay Date: __________________
Processed by: ______________
Approved by: _______________

=== STEP 1: PRE-PAYROLL DATA COLLECTION (7 days before pay date) ===

[ ] All timesheets for the period reviewed and manager-approved
[ ] Overtime hours verified against approved requests
[ ] New hire data entered: start date, compensation, tax forms (W-4 / local equivalents)
[ ] Terminations processed: final day, payout entitlements confirmed
[ ] Salary changes effective this period applied (with effective date and approval)
[ ] Commission / bonus data received from Sales / Finance
[ ] Expense reimbursements approved and ready for inclusion
[ ] Leave balances updated and leave taken this period recorded

=== STEP 2: PAYROLL INPUT VERIFICATION (5 days before pay date) ===

[ ] Total headcount this period matches HR headcount report
[ ] No ghost employees (check for active payroll entries for terminated employees)
[ ] Bank account details: any changes in the last 30 days reviewed and verified
[ ] Pay rates match signed compensation letters / contract records
[ ] Tax withholding elections match W-4 / equivalent forms on file
[ ] Pre-tax deductions verified: 401(k), health insurance, FSA, HSA
[ ] Post-tax deductions verified: garnishments, child support orders
[ ] Bonus and commission amounts match approved records

=== STEP 3: AI / SYSTEM AUDIT (3 days before pay date) ===

[ ] Run anomaly detection report — flag and resolve all HIGH priority items
[ ] Gross-to-net variance: any employee's net pay changing >15% vs last period investigated
[ ] Hours outliers: any employee with hours >20% above their normal pattern reviewed
[ ] Duplicate payment check: no employee appears twice with same pay period dates
[ ] Off-cycle payments: any payments outside normal cycle have documented approval

=== STEP 4: COMPLIANCE CHECKS (2 days before pay date) ===

[ ] Federal tax tables confirmed as current (FICA, FUTA rates)
[ ] State income tax (SIT) and unemployment (SUI) rates confirmed for all employee states
[ ] Local / municipal taxes applied for applicable employees
[ ] Minimum wage compliance confirmed for all hourly employees
[ ] Overtime threshold compliance confirmed (state-specific rules checked)
[ ] Required garnishment payments calculated per court orders

=== STEP 5: APPROVAL & LOCK (1 day before pay date) ===

[ ] Payroll register reviewed by HR manager
[ ] Finance / CFO approval received (if required by company policy)
[ ] All flagged anomalies resolved or documented with justification
[ ] Payroll locked — no further changes permitted after this point
[ ] Payroll approval log saved with timestamp and approver names

=== STEP 6: PAYMENT PROCESSING (pay date) ===

[ ] ACH / direct deposit file transmitted to bank / payroll processor
[ ] Physical checks printed and distributed (if applicable)
[ ] Payslips generated and made available in employee self-service
[ ] Wire transfers initiated (for international payments if applicable)

=== STEP 7: POST-PAYROLL REVIEW (1–3 days after pay date) ===

[ ] Confirm all bank transactions settled successfully
[ ] Any returned / failed ACH transactions investigated and resolved
[ ] Payroll journal entry posted to General Ledger
[ ] Employer tax liabilities identified and scheduled for payment
[ ] Payroll register archived securely per record retention policy
[ ] Next payroll period preparation begun

Errors found and resolved this cycle:

Payroll Total This Period: $_______________
Employees Paid: _______________

---
Automate payroll anomaly detection and pre-payroll auditing with Space HR.
spacehr.net/features/ai-payroll-auditor
`,
  },

  "employee-classification-guide": {
    fileName: "employee-classification-guide.txt",
    content: `EMPLOYEE CLASSIFICATION GUIDE
Space HR | spacehr.net/features/payroll
=======================================

WORKER CLASSIFICATION REFERENCE — U.S. EMPLOYERS
Prepared for HR and Payroll Teams

OVERVIEW
---------
Misclassifying workers is one of the most costly HR compliance errors. The IRS, DOL, and individual state agencies actively audit classification, and penalties include back taxes, benefits liability, and fines. Use this guide as a starting reference — always consult legal counsel for specific situations.

SECTION 1: EMPLOYEE VS. INDEPENDENT CONTRACTOR

IRS Common Law Test — Three categories of control:

1. BEHAVIORAL CONTROL
Is the company controlling how the worker does their job?
- Does the company set the worker's schedule?                                Y / N
- Does the company provide tools and equipment?                              Y / N
- Does the company require the work be done in a specific location?          Y / N
- Does the company train the worker on specific methods?                     Y / N
--> More "Yes" answers = more likely EMPLOYEE

2. FINANCIAL CONTROL
Does the company control the business aspects of the worker's job?
- Is the worker paid a set salary / hourly rate (not per project)?           Y / N
- Are the worker's business expenses reimbursed?                             Y / N
- Does the worker work exclusively for this company?                         Y / N
- Is the worker not able to realize a profit or loss from the work?          Y / N
--> More "Yes" answers = more likely EMPLOYEE

3. TYPE OF RELATIONSHIP
- Is there a written employment contract (not independent contractor)?       Y / N
- Does the company provide employee benefits (health, PTO, 401k)?            Y / N
- Is the relationship ongoing rather than project-based?                     Y / N
- Is the work a core function of the company's business?                     Y / N
--> More "Yes" answers = more likely EMPLOYEE

Rule of thumb: When in doubt, classify as an employee. Reclassifying an employee as a contractor is much riskier than the reverse.

SECTION 2: EXEMPT vs. NON-EXEMPT (FLSA)

Non-exempt employees MUST receive overtime pay (1.5× rate for hours >40/week).
Exempt employees are not entitled to overtime.

TO QUALIFY AS EXEMPT, the employee must meet ALL THREE tests:

TEST 1: SALARY BASIS
Is the employee paid a predetermined, fixed salary?                          Y / N
Is that salary not reduced based on quantity or quality of work?             Y / N

TEST 2: SALARY LEVEL
As of 2024, the minimum salary threshold for exemption is $684/week ($35,568/year).
Does the employee's salary meet or exceed this threshold?                    Y / N
[Note: Check for current DOL threshold — this has been updated. State minimums may be higher.]

TEST 3: DUTIES TEST (must meet one of the following)
Executive exemption:
- Primary duty is managing the enterprise or a department                    Y / N
- Regularly directs 2+ other employees                                       Y / N
- Has authority to hire, fire, or promote                                    Y / N

Administrative exemption:
- Primary duty is office/non-manual work related to business operations      Y / N
- Exercises discretion and independent judgment on significant matters       Y / N

Professional exemption:
- Primary duty requires advanced knowledge in science or learning            Y / N
- Requires a prolonged course of specialized education (degree/certification) Y / N

If the employee does NOT meet all three tests → classify as NON-EXEMPT.

SECTION 3: FULL-TIME vs. PART-TIME

This classification is set by company policy (the FLSA does not define it).
- Full-time: Typically 30–40 hours/week. Eligible for all benefits.
- Part-time: Typically under 30 hours/week. Benefit eligibility per company policy.
Note: The ACA defines full-time as 30+ hours/week for health coverage purposes.

SECTION 4: COMMON MISCLASSIFICATION RED FLAGS

[ ] Worker has worked for the company for years under a contractor agreement
[ ] Worker does the same job as employees but with a different title
[ ] Worker uses company equipment and systems but is classified as a contractor
[ ] Worker is paid hourly with no contract end date
[ ] Worker's "contract" automatically renews indefinitely
[ ] Worker is not allowed to work for competitors while "contracting"

If any of these apply, review the worker's classification immediately.

SECTION 5: STATE-SPECIFIC CONSIDERATIONS

Many states apply stricter tests than the federal IRS standard. Key examples:
- California: ABC Test — workers are presumed employees unless all 3 parts of the ABC test are met.
- Massachusetts: Similar ABC Test with strict enforcement.
- New Jersey: ABC Test.

Always review the classification standard for the state where the work is performed.

---
Ensure payroll compliance and worker classification accuracy with Space HR.
spacehr.net/features/payroll
`,
  },

  "okr-planning-template": {
    fileName: "okr-planning-template.txt",
    content: `OKR PLANNING TEMPLATE
Space HR | spacehr.net/features/goals
======================================

OBJECTIVES AND KEY RESULTS (OKR) PLANNING GUIDE
Planning Period: Q[__] / [YEAR]
Organization / Team / Individual:

OVERVIEW
---------
OKRs connect ambitious goals (Objectives) to specific, measurable results (Key Results).
- Objectives: Inspirational, qualitative direction. Answer "What do we want to achieve?"
- Key Results: Measurable, time-bound. Answer "How will we know if we achieved it?"
- Typical: 3–5 objectives per level. 2–4 key results per objective.
- Scoring: 0.0–1.0 at end of period. 0.7 is often considered success (stretch goal model).

=== COMPANY / TEAM LEVEL OKRs ===

OBJECTIVE 1:
(Describe the goal in inspiring, qualitative terms)

Key Result 1.1:
Starting value:          Target value:          Current value:
Owner:                   Due Date:

Key Result 1.2:
Starting value:          Target value:          Current value:
Owner:                   Due Date:

Key Result 1.3:
Starting value:          Target value:          Current value:
Owner:                   Due Date:

Mid-quarter score: ___    End-of-quarter score: ___
Lessons / notes:

---

OBJECTIVE 2:

Key Result 2.1:
Starting value:          Target value:          Current value:
Owner:                   Due Date:

Key Result 2.2:
Starting value:          Target value:          Current value:
Owner:                   Due Date:

Key Result 2.3:
Starting value:          Target value:          Current value:
Owner:                   Due Date:

Mid-quarter score: ___    End-of-quarter score: ___
Lessons / notes:

---

OBJECTIVE 3:

Key Result 3.1:
Starting value:          Target value:          Current value:
Owner:                   Due Date:

Key Result 3.2:
Starting value:          Target value:          Current value:
Owner:                   Due Date:

Key Result 3.3:
Starting value:          Target value:          Current value:
Owner:                   Due Date:

Mid-quarter score: ___    End-of-quarter score: ___
Lessons / notes:

=== INDIVIDUAL LEVEL OKRs ===
(Each team member completes their own, aligned to team objectives above)

Employee Name:            Manager:            Team:

INDIVIDUAL OBJECTIVE 1:
(How does this align to a team objective? Note it here)
Alignment to team OKR:

Key Result 1.1:
Starting value:          Target:              Current:
Due Date:

Key Result 1.2:
Starting value:          Target:              Current:
Due Date:

INDIVIDUAL OBJECTIVE 2:

Key Result 2.1:
Starting value:          Target:              Current:
Due Date:

Key Result 2.2:
Starting value:          Target:              Current:
Due Date:

=== QUARTERLY REVIEW NOTES ===

Weekly check-in highlights:
Week 4:
Week 8:
Week 12:

End-of-quarter reflection:
What went well:
What we'd do differently:
What we're carrying forward:

Employee signature: __________________  Date: _________
Manager sign-off: ____________________  Date: _________

---
Set, track, and review OKRs in real time with Space HR's Goals module.
spacehr.net/features/goals
`,
  },

  "individual-development-plan-template": {
    fileName: "individual-development-plan-template.txt",
    content: `INDIVIDUAL DEVELOPMENT PLAN (IDP) TEMPLATE
Space HR | spacehr.net/features/360-performance-appraisals
===========================================================

Employee Name:
Job Title:
Department:
Manager:
Plan Period: From _________ To _________
Date Created:
Date of Last Review:

SECTION 1: CAREER GOALS & ASPIRATIONS
---------------------------------------
Where do you want to be in your career in 1–3 years?

Short-term goal (within 12 months):

Long-term goal (2–3 years):

Roles or areas you're interested in:

SECTION 2: CURRENT STRENGTHS
------------------------------
List 3–5 skills, behaviors, or qualities you consistently demonstrate well:

1.
2.
3.
4.
5.

SECTION 3: DEVELOPMENT AREAS
------------------------------
Based on your latest performance review or 360 feedback, identify 2–3 specific areas to develop:

Development Area 1:
Specific gap or behavior:
Why this matters for your goals:

Development Area 2:
Specific gap or behavior:
Why this matters for your goals:

Development Area 3 (optional):
Specific gap or behavior:
Why this matters for your goals:

SECTION 4: DEVELOPMENT ACTIONS
--------------------------------
For each development area, list specific actions with owners and deadlines.

DEVELOPMENT AREA 1: ___________________

Action 1.1:
Resource / Method: [ ] Coaching  [ ] Course  [ ] Book  [ ] Mentoring  [ ] Stretch assignment  [ ] Other: ___
Owner: Self / Manager / Other: ___
Start date:               Target completion:
Success measure (how will you know you've improved?):

Action 1.2:
Resource / Method:
Owner:
Start date:               Target completion:
Success measure:

DEVELOPMENT AREA 2: ___________________

Action 2.1:
Resource / Method:
Owner:
Start date:               Target completion:
Success measure:

Action 2.2:
Resource / Method:
Owner:
Start date:               Target completion:
Success measure:

SECTION 5: SUPPORT NEEDED FROM MANAGER
----------------------------------------
What do you need from your manager to succeed in this plan?

Resource requests (training budget, tools, access):
Time commitments (coaching sessions, protected development time):
Networking / introductions needed:

Agreed budget for development activities this period: $___________

SECTION 6: PROGRESS REVIEWS
-----------------------------
Review 1 (30 days):
Date:
Progress summary:
Adjustments made:

Review 2 (60 days):
Date:
Progress summary:
Adjustments made:

Review 3 (90 days / End of period):
Date:
Progress summary:
Goal achieved? [ ] Yes  [ ] Partially  [ ] No — Continued in next period
New development areas identified:

SECTION 7: SIGN-OFF
--------------------
Employee: ________________________  Date: _________
Manager: _________________________  Date: _________
HR (if required): ________________  Date: _________

---
Track development goals and connect them to performance data with Space HR.
spacehr.net/features/360-performance-appraisals
`,
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
