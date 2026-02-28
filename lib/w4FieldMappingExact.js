// ============================================================================
// W-4 PDF Field Mapping Utility
// Maps form data to PDF template field labels for document generation
// ============================================================================

// 2026 Tax Year Constants
export const TAX_YEAR = 2026;

export const CHILD_TAX_CREDIT = 2200;
export const OTHER_DEPENDENT_CREDIT = 500;

export const STANDARD_DEDUCTIONS = {
  married_jointly: 32200,
  qualifying_surviving_spouse: 32200,
  head_of_household: 24150,
  single: 16100,
  married_separately: 16100,
};

export const PHASE_OUT_THRESHOLDS = {
  married_jointly: 768700,
  qualifying_surviving_spouse: 768700,
  single: 640600,
  head_of_household: 640600,
  married_separately: 384350,
};

export const DEDUCTION_LIMITS = {
  qualifiedTips: 25000,
  qualifiedOvertime: { single: 12500, married_jointly: 25000 },
  vehicleLoanInterest: 10000,
  seniorDeduction: 6000,
  saltLimit: { default: 40400, married_separately: 20200 },
  charitableCash: { single: 1000, married_jointly: 2000 },
};

// PDF Template Field IDs (from template JSON)
export const PDF_FIELD_IDS = {
  // Page 1 - Step 1
  firstNameMiddleInitial: 2922,
  lastName: 2923,
  ssn: 2926,
  address: 2924,
  cityStateZip: 2925,
  filingStatusCheckbox: 2927,

  // Page 1 - Step 3
  step3a: 2928,
  step3b: 2929,
  step3Total: 2930,

  // Page 1 - Step 4
  step4a: 2932,
  step4b: 2931,
  step4c: 2933,

  // Page 1 - Signature
  signature: 2934,
  signatureDate: 2935,

  // Page 3 - Multiple Jobs Worksheet
  mjwLine1: 4983,
  mjwLine2a: 4984,
  mjwLine2b: 4985,
  mjwLine2c: 4988,
  mjwLine3: 4986,
  mjwLine4: 4987,

  // Page 4 - Deductions Worksheet
  dwLine1a: 4989,
  dwLine1b: 4990,
  dwLine1c: 4991,
  dwLine2: 4992,
  dwLine3a: 4994,
  dwLine3b: 4993,
  dwLine4: 4995,
  dwLine5: 4996,
  dwLine6a: 4997,
  dwLine6b: 4998,
  dwLine6c: 4999,
  dwLine6d: 5000,
  dwLine6e: 5001,
  dwLine7: 5002,
  dwLine8a: 5003,
  dwLine8b: 5004,
  dwLine9: 5006,
  dwLine10: 5005,
  dwLine11: 5007,
  dwLine12: 5008,
  dwLine13: 5009,
  dwLine14: 5010,
  dwLine15: 5011,

  // Employer Section (Page 1)
  employerName: 5137,
  employerAddress: 5138,
  firstDateOfEmployment: 5139,
  ein: 5140,
};

/**
 * Maps form data to PDF template fields
 * Returns object with field labels as keys
 */
// Alias for backward compatibility
export const mapFormDataToPdfFields = mapFormDataToTemplateFields;

// Calculation helpers
function calculateStep3Total(step3) {
  const childCredit = parseInt(step3.childrenUnder17 || 0) * CHILD_TAX_CREDIT;
  const otherCredit =
    parseInt(step3.otherDependents || 0) * OTHER_DEPENDENT_CREDIT;
  const otherCredits = parseFloat(step3.otherCredits || 0);
  return childCredit + otherCredit + otherCredits;
}

function calculateDWLine2(dw) {
  return (
    parseFloat(dw.qualifiedTips || 0) +
    parseFloat(dw.qualifiedOvertime || 0) +
    parseFloat(dw.vehicleLoanInterest || 0)
  );
}

function calculateDWLine4(dw) {
  return (
    parseFloat(dw.seniorDeduction || 0) +
    parseFloat(dw.spouseSeniorDeduction || 0)
  );
}

function calculateDWLine7(dw) {
  return (
    parseFloat(dw.medicalExpenses || 0) +
    parseFloat(dw.stateLocalTaxes || 0) +
    parseFloat(dw.mortgageInterest || 0) +
    parseFloat(dw.charitableGifts || 0) +
    parseFloat(dw.otherItemized || 0)
  );
}

/**
 * Calculate complete deductions worksheet
 */
export function calculateDeductionsWorksheet(dw, filingStatus) {
  const isMarriedJointly = filingStatus === "married_jointly";

  // Line 2
  const line2 = calculateDWLine2(dw);

  // Line 4
  const line4 = calculateDWLine4(dw);

  // Line 5
  const line5 = parseFloat(dw.otherAdjustments || 0);

  // Line 7
  const line7 = calculateDWLine7(dw);

  // Line 8a
  const line8a = parseFloat(dw.totalIncome || 0);

  // Line 8b
  const line8b = Math.max(0, line8a - line4);

  // Line 9
  const line9 =
    PHASE_OUT_THRESHOLDS[filingStatus] || PHASE_OUT_THRESHOLDS.single;

  // Line 10
  const line10 = line9 > line8b ? line7 : Math.round(line7 * 0.94);

  // Line 11
  const line11 =
    STANDARD_DEDUCTIONS[filingStatus] || STANDARD_DEDUCTIONS.single;

  // Line 12
  const charitableLimit = isMarriedJointly
    ? DEDUCTION_LIMITS.charitableCash.married_jointly
    : DEDUCTION_LIMITS.charitableCash.single;
  const line12 = Math.min(
    parseFloat(dw.charitableCashStandard || 0),
    charitableLimit,
  );

  // Line 13
  const line13 = line11 + line12;

  // Line 14
  const line14 = line10 > line13 ? line10 - line11 : line12;

  // Line 15
  const line15 = line2 + line4 + line5 + line14;

  return {
    line2Total: line2,
    line4Total: line4,
    line7Total: line7,
    line8b,
    line9Threshold: line9,
    line10Result: line10,
    standardDeduction: line11,
    line13Total: line13,
    line14Result: line14,
    line15Total: line15,
  };
}

/**
 * Get initial form data structure
 */
export function getInitialFormData(employee, existingSubmission) {
  const profile = employee?.profile || {};
  const address = profile.address?.mailing || {};

  if (existingSubmission) {
    return existingSubmission;
  }

  return {
    // Step 1: Personal Info
    firstName: profile.firstName || employee?.firstName || "",
    lastName: profile.lastName || employee?.lastName || "",
    middleInitial: profile.middleInitial || "",
    ssn: "",
    address: address.address1 || "",
    addressLine2: address.address2 || "",
    city: address.city || "",
    state: address.state || "",
    zipCode: address.zip || "",
    filingStatus: "",
    claimExempt: false,

    // Step 2: Multiple Jobs
    step2: {
      usedEstimator: false,
      twoJobsOnly: false,
      hasThreeOrMoreJobs: false,
      higherJobWages: 0,
      lowerJobWages: 0,
      job1Wages: 0,
      job2Wages: 0,
      job3Wages: 0,
      payPeriodsPerYear: 26,
    },

    // Step 3: Dependents
    step3: {
      childrenUnder17: 0,
      otherDependents: 0,
      otherCredits: 0,
    },

    // Step 4: Other Adjustments
    step4: {
      otherIncome: 0,
      deductions: 0,
      extraWithholding: 0,
      deductionsWorksheet: {
        qualifiedTips: 0,
        qualifiedOvertime: 0,
        vehicleLoanInterest: 0,
        isSenior: false,
        seniorDeduction: 0,
        isSpouseSenior: false,
        spouseSeniorDeduction: 0,
        otherAdjustments: 0,
        medicalExpenses: 0,
        stateLocalTaxes: 0,
        mortgageInterest: 0,
        charitableGifts: 0,
        otherItemized: 0,
        totalIncome: 0,
        charitableCashStandard: 0,
      },
    },

    // Employer section
    employer: {},

    // Signature
    signature: null,

    // Status
    status: "draft",
    submittedAt: null,
    updatedAt: null,
  };
}

/**
 * Maps form data to the exact template field structure for PDF generation
 * Uses field IDs and labels from the provided template JSON
 * @param {Object} formData - The W-4 form data
 * @param {Object} signatureData - Optional signature data with typedName and signedAt
 * @returns {Array} Array of field objects ready for PDF template filling
 */
export function mapFormDataToTemplateFields(formData, signatureData = null) {
  // Flatten data if nested in .data property
  const data = formData.data || formData;

  const step3 = data.step3 || {};
  const step4 = data.step4 || {};
  const step2 = data.step2 || {};
  const dw = step4.deductionsWorksheet || {};
  const signature = signatureData || data.signature || {};
  const employer = data.employer || {};

  // Calculate values
  const childrenAmount =
    parseInt(step3.childrenUnder17 || 0) * CHILD_TAX_CREDIT;
  const otherDepsAmount =
    parseInt(step3.otherDependents || 0) * OTHER_DEPENDENT_CREDIT;
  const totalCredits =
    childrenAmount + otherDepsAmount + parseFloat(step3.otherCredits || 0);

  // Calculate worksheet values
  const wsCalc = calculateDeductionsWorksheet(dw, data.filingStatus);

  const isExempt = data.claimExempt === true;

  // Helper to format currency for TEXT fields
  const formatCurrency = (val) => {
    const num = parseFloat(val);
    if (isNaN(num) || num === 0) return "";
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // Combine city, state, zip
  const cityStateZip = `${data.city || ""}, ${data.state || ""} ${
    data.zipCode || ""
  }`.trim();

  // Format date for signature
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return "";
    return `${String(d.getMonth() + 1).padStart(2, "0")}/${String(
      d.getDate(),
    ).padStart(2, "0")}/${d.getFullYear()}`;
  };

  const signatureDate = formatDate(
    signature.timestamp || signature.signedAt || formData.submittedAt,
  );

  // Determine signature value (image or text)
  // ESignature component returns: { signatureData: "data:image..." or "Name", signatureType: "drawn"|"typed" }
  // Fallback/Legacy format: { signatureImage: "data:image...", typedName: "Name" }
  let signatureValue = "";
  if (signature.signatureData) {
    signatureValue = signature.signatureData;
  } else if (signature.signatureImage) {
    signatureValue = signature.signatureImage;
  } else {
    signatureValue =
      signature.typedName ||
      `${data.firstName || ""} ${data.lastName || ""}`.trim();
  }

  // Helper: Format EIN
  function formatEIN(ein) {
    if (!ein) return "";
    const digits = ein.replace(/\D/g, "");
    // If it's pure digits, we can just return it. The template type is NUMBER for EIN (ID 5140),
    // but typically EINs are formatted XX-XXXXXXX.
    // If the PDF field is strictly numeric, we might just return digits.
    // However, the JSON says "type": "NUMBER" but "name": "Employee Identification Number".
    // Let's assume standard EIN formatting might be safer as string, or just digits if enforced.
    // Given the field type is NUMBER in JSON, let's strip non-digits to be safe.
    return digits;
  }

  // Return array of field updates matching template structure
  return [
    // Page 1 - Step 1
    {
      id: 2922,
      label: "first name and middle initial",
      value: `${data.firstName || ""} ${data.middleInitial || ""}`.trim(),
      page: 1,
    },
    { id: 2923, label: "lastname", value: data.lastName || "", page: 1 },
    {
      id: 2926,
      label: "social security number",
      value: (data.ssn || "").replace(/-/g, ""),
      page: 1,
    },
    { id: 2924, label: "address", value: data.address || "", page: 1 },
    {
      id: 2925,
      label: "city or town,state and zip code",
      value: cityStateZip,
      page: 1,
    },

    // Filing Status - Separate checkboxes for each option
    {
      id: 2927,
      label: "filing_status_single",
      type: "CHECKBOX_SINGLE",
      value: data.filingStatus === "single",
      page: 1,
    },
    {
      id: 2937,
      label: "filing_status_married",
      type: "CHECKBOX_SINGLE",
      value: data.filingStatus === "married_jointly",
      page: 1,
    },
    {
      id: 2938,
      label: "filing_status_hoh",
      type: "CHECKBOX_SINGLE",
      value: data.filingStatus === "head_of_household",
      page: 1,
    },

    // Step 2(c) Checkbox
    {
      id: 2936,
      label: "2c",
      type: "CHECKBOX_SINGLE",
      value: !!step2.twoJobsOnly,
      page: 1,
    },

    // Page 1 - Step 3
    { id: 2928, label: "3a", value: childrenAmount, page: 1 },
    { id: 2929, label: "3b", value: otherDepsAmount, page: 1 },
    { id: 2930, label: "step3_total", value: totalCredits, page: 1 },

    // Page 1 - Step 4
    {
      id: 2932,
      label: "4a",
      value: isExempt ? "" : formatCurrency(step4.otherIncome),
      page: 1,
    },
    {
      id: 2931,
      label: "4b",
      value: isExempt
        ? ""
        : formatCurrency(step4.deductions || wsCalc.line15Total),
      page: 1,
    },
    {
      id: 2933,
      label: "4c",
      value: isExempt ? "Exempt" : formatCurrency(step4.extraWithholding),
      page: 1,
    },

    // Employer Section (Page 1)
    {
      id: 5137,
      label: "Employer Name",
      value: employer.companyName || "",
      page: 1,
    },
    {
      id: 5138,
      label: "employer address",
      value: `${employer.address || ""} ${employer.city || ""} ${
        employer.state || ""
      } ${employer.zipCode || ""}`.trim(),
      page: 1,
    },
    {
      id: 5139,
      label: "First date of employment",
      value: employer.firstDateOfEmployment
        ? formatDate(employer.firstDateOfEmployment)
        : "",
      page: 1,
    },
    {
      id: 5140,
      label: "Employee Identification Number",
      value: formatEIN(employer.ein),
      page: 1,
    },

    // Page 3 - Multiple Jobs Worksheet
    { id: 4983, label: "1 two jobs", value: step2.twoJobsAmount || 0, page: 3 },
    { id: 4984, label: "2a three jobs", value: step2.line2a || 0, page: 3 },
    { id: 4985, label: "2b three jobs", value: step2.line2b || 0, page: 3 },
    { id: 4988, label: "2c three jobs", value: step2.line2c || 0, page: 3 },
    {
      id: 4986,
      label: "mjw_line3",
      value: step2.payPeriodsPerYear || 26,
      page: 3,
    },
    { id: 4987, label: "mjw_line4", value: step2.line4Result || 0, page: 3 },

    // Page 4 - Deductions Worksheet
    // Use calculated values stored in UI state (calculatedLineX) OR raw dw values as fallback
    {
      id: 4989,
      label: "1a",
      value: parseFloat(dw.qualifiedTips) || 0,
      page: 4,
    },
    {
      id: 4990,
      label: "1b",
      value: parseFloat(dw.qualifiedOvertime) || 0,
      page: 4,
    },
    {
      id: 4991,
      label: "1c",
      value: parseFloat(dw.vehicleLoanInterest) || 0,
      page: 4,
    },
    {
      id: 4992,
      label: "dw_line2",
      value: dw.calculatedLine2 || wsCalc.line2Total || 0,
      page: 4,
    },
    {
      id: 4994,
      label: "dw_3a",
      value: dw.isSenior ? parseFloat(dw.seniorDeduction) || 6000 : 0,
      page: 4,
    },
    {
      id: 4993,
      label: "dw_3b",
      value: dw.isSpouseSenior
        ? parseFloat(dw.spouseSeniorDeduction) || 6000
        : 0,
      page: 4,
    },
    {
      id: 4995,
      label: "dw_line4",
      value: dw.calculatedLine4 || wsCalc.line4Total || 0,
      page: 4,
    },
    {
      id: 4996,
      label: "dw_line5",
      value: parseFloat(dw.otherAdjustments) || 0,
      page: 4,
    },
    {
      id: 4997,
      label: "6a",
      value: parseFloat(dw.medicalExpenses) || 0,
      page: 4,
    },
    {
      id: 4998,
      label: "6b",
      value: parseFloat(dw.stateLocalTaxes) || 0,
      page: 4,
    },
    {
      id: 4999,
      label: "6c",
      value: parseFloat(dw.mortgageInterest) || 0,
      page: 4,
    },
    {
      id: 5000,
      label: "6d",
      value: parseFloat(dw.charitableGifts) || 0,
      page: 4,
    },
    {
      id: 5001,
      label: "6e",
      value: parseFloat(dw.otherItemized) || 0,
      page: 4,
    },
    {
      id: 5002,
      label: "dw_line7",
      value: dw.calculatedLine7 || wsCalc.line7Total || 0,
      page: 4,
    },
    { id: 5003, label: "8a", value: parseFloat(dw.totalIncome) || 0, page: 4 },
    {
      id: 5004,
      label: "8b",
      value: dw.calculatedLine8b || wsCalc.line8b || 0,
      page: 4,
    },
    {
      id: 5006,
      label: "dw_line9",
      value: dw.calculatedLine9 || wsCalc.line9Threshold || 0,
      page: 4,
    },
    {
      id: 5005,
      label: "dw_line10",
      value: dw.calculatedLine10 || wsCalc.line10Result || 0,
      page: 4,
    },
    {
      id: 5007,
      label: "dw_line11",
      value: dw.calculatedLine11 || wsCalc.standardDeduction || 0,
      page: 4,
    },
    {
      id: 5008,
      label: "dw_line12",
      value: parseFloat(dw.charitableCashStandard) || 0,
      page: 4,
    },
    {
      id: 5009,
      label: "dw_line13",
      value: dw.calculatedLine13 || wsCalc.line13Total || 0,
      page: 4,
    },
    {
      id: 5010,
      label: "dw_line14",
      value: dw.calculatedLine14 || wsCalc.line14Result || 0,
      page: 4,
    },
    {
      id: 5011,
      label: "dw_line15",
      value: dw.calculatedLine15 || wsCalc.line15Total || 0,
      page: 4,
    },

    // Page 1 - Step 5: Signature
    {
      id: 2934,
      label: "SIGNATURE",
      type: "SIGNATURE",
      value: signatureValue,
      page: 1,
    },
    { id: 2935, label: "DATE", type: "DATE", value: signatureDate, page: 1 },
  ];
}

/**
 * TEST UTILITY: Generate sample form data with ALL fields populated
 * Use this to test PDF export with every field filled
 */
export function generateTestFormData() {
  return {
    // Step 1: Personal Info - ALL FILLED
    firstName: "John",
    middleInitial: "M",
    lastName: "TestEmployee",
    ssn: "123-45-6789",
    address: "123 Test Street, Apt 4B",
    addressLine2: "",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90210",
    filingStatus: "married_jointly", // Tests married checkbox
    claimExempt: false,

    // Step 2: Multiple Jobs - FILLED
    step2: {
      usedEstimator: false,
      twoJobsOnly: true, // Tests 2c checkbox
      hasThreeOrMoreJobs: false,
      higherJobWages: 75000,
      lowerJobWages: 45000,
      job1Wages: 75000,
      job2Wages: 45000,
      job3Wages: 25000,
      payPeriodsPerYear: 26,
      twoJobsAmount: 1200, // Line 1 result
      line2a: 500,
      line2b: 300,
      line2c: 800,
      line4Result: 46,
    },

    // Step 3: Dependents - FILLED
    step3: {
      childrenUnder17: 2, // = $4,400 (2 × $2,200)
      otherDependents: 1, // = $500 (1 × $500)
      otherCredits: 250, // Additional credits
    },

    // Step 4: Other Adjustments - ALL FILLED
    step4: {
      otherIncome: 5000, // 4a
      deductions: 0, // 4b (will use worksheet)
      extraWithholding: 100, // 4c
      deductionsWorksheet: {
        qualifiedTips: 2500, // 1a
        qualifiedOvertime: 3000, // 1b
        vehicleLoanInterest: 1500, // 1c
        isSenior: true,
        seniorDeduction: 3000, // 3a
        isSpouseSenior: true,
        spouseSeniorDeduction: 3000, // 3b
        otherAdjustments: 500, // 5
        medicalExpenses: 4000, // 6a
        stateLocalTaxes: 10000, // 6b
        mortgageInterest: 15000, // 6c
        charitableGifts: 2000, // 6d
        otherItemized: 1000, // 6e
        totalIncome: 150000, // 8a
        charitableCashStandard: 1500, // 12
      },
    },

    // Employer section - FILLED
    employer: {
      companyName: "Test Company Inc.",
      address: "456 Business Blvd",
      city: "San Francisco",
      state: "CA",
      zipCode: "94102",
      firstDateOfEmployment: "2026-01-15",
      ein: "12-3456789",
    },

    // Signature - FILLED
    signature: {
      signatureData: "John M TestEmployee", // Typed signature
      signatureType: "typed",
      timestamp: new Date().toISOString(),
    },

    // Status
    status: "complete",
    submittedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

/**
 * DEBUG UTILITY: Validate all field mappings and log results
 * Call this function to see which fields have values and which are empty
 */
export function debugFieldMappings(formData = null) {
  const testData = formData || generateTestFormData();
  const mappedFields = mapFormDataToTemplateFields(testData);

  console.group("🔍 W-4 PDF Field Mapping Debug Report");
  console.log("━".repeat(60));

  // Group by page
  const byPage = { 1: [], 3: [], 4: [] };
  mappedFields.forEach((field) => {
    if (byPage[field.page]) {
      byPage[field.page].push(field);
    }
  });

  // Page 1 fields
  console.group("📄 PAGE 1 - Main Form");
  byPage[1].forEach((field) => {
    const hasValue =
      field.value !== "" &&
      field.value !== 0 &&
      field.value !== false &&
      field.value !== null;
    const icon = hasValue ? "✅" : "⚠️";
    const valueDisplay =
      typeof field.value === "boolean"
        ? field.value
          ? "☑ CHECKED"
          : "☐ unchecked"
        : field.value || "(empty)";
    console.log(`${icon} [${field.id}] ${field.label}: ${valueDisplay}`);
  });
  console.groupEnd();

  // Page 3 fields
  console.group("📄 PAGE 3 - Multiple Jobs Worksheet");
  byPage[3].forEach((field) => {
    const hasValue = field.value !== 0 && field.value !== "";
    const icon = hasValue ? "✅" : "⚪";
    console.log(`${icon} [${field.id}] ${field.label}: ${field.value}`);
  });
  console.groupEnd();

  // Page 4 fields
  console.group("📄 PAGE 4 - Deductions Worksheet");
  byPage[4].forEach((field) => {
    const hasValue = field.value !== 0 && field.value !== "";
    const icon = hasValue ? "✅" : "⚪";
    console.log(`${icon} [${field.id}] ${field.label}: ${field.value}`);
  });
  console.groupEnd();

  // Summary
  const totalFields = mappedFields.length;
  const filledFields = mappedFields.filter(
    (f) =>
      f.value !== "" && f.value !== 0 && f.value !== false && f.value !== null,
  ).length;

  console.log("━".repeat(60));
  console.log(`📊 SUMMARY: ${filledFields}/${totalFields} fields have values`);
  console.groupEnd();

  return mappedFields;
}

/**
 * FIELD POSITION TESTER: Returns field info for coordinate adjustment
 * Use this to get position info for a specific field
 */
export function getFieldInfo(fieldId) {
  const fieldMap = {
    // Page 1 - Personal Info
    2922: { name: "First Name + Middle Initial", page: 1, section: "Step 1" },
    2923: { name: "Last Name", page: 1, section: "Step 1" },
    2924: { name: "Address", page: 1, section: "Step 1" },
    2925: { name: "City, State, Zip", page: 1, section: "Step 1" },
    2926: { name: "SSN", page: 1, section: "Step 1" },

    // Filing Status Checkboxes
    2927: { name: "Single Checkbox", page: 1, section: "Step 1(c)" },
    2937: {
      name: "Married Filing Jointly Checkbox",
      page: 1,
      section: "Step 1(c)",
    },
    2938: { name: "Head of Household Checkbox", page: 1, section: "Step 1(c)" },

    // Step 2
    2936: { name: "Two Jobs Checkbox (2c)", page: 1, section: "Step 2" },

    // Step 3
    2928: { name: "Line 3a - Children Credit", page: 1, section: "Step 3" },
    2929: { name: "Line 3b - Other Dependents", page: 1, section: "Step 3" },
    2930: { name: "Line 3 - Total Credits", page: 1, section: "Step 3" },

    // Step 4
    2932: { name: "Line 4a - Other Income", page: 1, section: "Step 4" },
    2931: { name: "Line 4b - Deductions", page: 1, section: "Step 4" },
    2933: { name: "Line 4c - Extra Withholding", page: 1, section: "Step 4" },

    // Signature
    2934: { name: "Signature", page: 1, section: "Step 5" },
    2935: { name: "Date", page: 1, section: "Step 5" },

    // Employer
    5137: { name: "Employer Name", page: 1, section: "Employer" },
    5138: { name: "Employer Address", page: 1, section: "Employer" },
    5139: { name: "First Date of Employment", page: 1, section: "Employer" },
    5140: { name: "EIN", page: 1, section: "Employer" },

    // Page 3 - Multiple Jobs
    4983: { name: "Line 1 (Two Jobs)", page: 3, section: "Multiple Jobs WS" },
    4984: {
      name: "Line 2a (Three Jobs)",
      page: 3,
      section: "Multiple Jobs WS",
    },
    4985: {
      name: "Line 2b (Three Jobs)",
      page: 3,
      section: "Multiple Jobs WS",
    },
    4988: {
      name: "Line 2c (Three Jobs)",
      page: 3,
      section: "Multiple Jobs WS",
    },
    4986: {
      name: "Line 3 (Pay Periods)",
      page: 3,
      section: "Multiple Jobs WS",
    },
    4987: { name: "Line 4 (Result)", page: 3, section: "Multiple Jobs WS" },

    // Page 4 - Deductions
    4989: { name: "Line 1a - Tips", page: 4, section: "Deductions WS" },
    4990: { name: "Line 1b - Overtime", page: 4, section: "Deductions WS" },
    4991: { name: "Line 1c - Vehicle Loan", page: 4, section: "Deductions WS" },
    4992: { name: "Line 2 - Total", page: 4, section: "Deductions WS" },
    4994: {
      name: "Line 3a - Senior Deduction",
      page: 4,
      section: "Deductions WS",
    },
    4993: {
      name: "Line 3b - Spouse Senior",
      page: 4,
      section: "Deductions WS",
    },
    4995: { name: "Line 4 - Senior Total", page: 4, section: "Deductions WS" },
    4996: {
      name: "Line 5 - Other Adjustments",
      page: 4,
      section: "Deductions WS",
    },
    4997: { name: "Line 6a - Medical", page: 4, section: "Deductions WS" },
    4998: {
      name: "Line 6b - State/Local Tax",
      page: 4,
      section: "Deductions WS",
    },
    4999: { name: "Line 6c - Mortgage", page: 4, section: "Deductions WS" },
    5000: { name: "Line 6d - Charitable", page: 4, section: "Deductions WS" },
    5001: {
      name: "Line 6e - Other Itemized",
      page: 4,
      section: "Deductions WS",
    },
    5002: {
      name: "Line 7 - Itemized Total",
      page: 4,
      section: "Deductions WS",
    },
    5003: { name: "Line 8a - Total Income", page: 4, section: "Deductions WS" },
    5004: { name: "Line 8b - Adjusted", page: 4, section: "Deductions WS" },
    5006: { name: "Line 9 - Threshold", page: 4, section: "Deductions WS" },
    5005: { name: "Line 10 - Result", page: 4, section: "Deductions WS" },
    5007: {
      name: "Line 11 - Std Deduction",
      page: 4,
      section: "Deductions WS",
    },
    5008: {
      name: "Line 12 - Charitable Cash",
      page: 4,
      section: "Deductions WS",
    },
    5009: { name: "Line 13 - Total", page: 4, section: "Deductions WS" },
    5010: { name: "Line 14 - Result", page: 4, section: "Deductions WS" },
    5011: {
      name: "Line 15 - Final Deductions",
      page: 4,
      section: "Deductions WS",
    },
  };

  return (
    fieldMap[fieldId] || { name: "Unknown Field", page: "?", section: "?" }
  );
}

/**
 * Updates the step2 calculated values based on job wages
 */
export function calculateMultipleJobsWorksheet(
  step2Data,
  filingStatus,
  lookupFn,
) {
  const hasThreeJobs = step2Data.hasThreeOrMoreJobs;

  if (!lookupFn) {
    // Return empty calculations if no lookup function provided
    return { line1: 0, line2a: 0, line2b: 0, line2c: 0, line4Result: 0 };
  }

  if (hasThreeJobs) {
    const wages = [
      parseFloat(step2Data.job1Wages) || 0,
      parseFloat(step2Data.job2Wages) || 0,
      parseFloat(step2Data.job3Wages) || 0,
    ].sort((a, b) => b - a);

    const line2a = lookupFn(filingStatus, wages[0], wages[1]);
    const line2b = lookupFn(filingStatus, wages[0] + wages[1], wages[2]);
    const line2c = line2a + line2b;
    const payPeriods = parseInt(step2Data.payPeriodsPerYear) || 26;
    const line4Result = payPeriods > 0 ? Math.round(line2c / payPeriods) : 0;

    return { line1: 0, line2a, line2b, line2c, line4Result };
  } else {
    const higherWages = parseFloat(step2Data.higherJobWages) || 0;
    const lowerWages = parseFloat(step2Data.lowerJobWages) || 0;
    const line1 = lookupFn(filingStatus, higherWages, lowerWages);
    const payPeriods = parseInt(step2Data.payPeriodsPerYear) || 26;
    const line4Result = payPeriods > 0 ? Math.round(line1 / payPeriods) : 0;

    return {
      line1,
      line2a: 0,
      line2b: 0,
      line2c: 0,
      line4Result,
      twoJobsAmount: line1,
    };
  }
}
