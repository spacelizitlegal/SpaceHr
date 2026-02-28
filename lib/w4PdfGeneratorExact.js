// ============================================================================
// W-4 PDF Field Mapping and Generator
// Based on IRS Form W-4 (2024) - Employee's Withholding Certificate
// ============================================================================

// PDF Field Coordinates (x, y from bottom-left, in points - 1 inch = 72 points)
// Page 1 dimensions: 612 x 792 points (8.5" x 11")

export const W4_PDF_FIELDS = {
  // ============================================================================
  // STEP 1: PERSONAL INFORMATION
  // ============================================================================
  step1: {
    // (a) First name and middle initial
    firstName: {
      page: 1,
      x: 36,
      y: 632,
      width: 200,
      height: 16,
      type: "text",
      maxLength: 30,
      description: "First name and middle initial",
    },
    // Last name
    lastName: {
      page: 1,
      x: 240,
      y: 632,
      width: 180,
      height: 16,
      type: "text",
      maxLength: 30,
      description: "Last name",
    },
    // (b) Social security number
    ssn: {
      page: 1,
      x: 432,
      y: 632,
      width: 144,
      height: 16,
      type: "text",
      format: "ssn", // XXX-XX-XXXX
      description: "Social security number",
    },
    // (c) Address (number, street, apt. no.)
    addressLine1: {
      page: 1,
      x: 36,
      y: 598,
      width: 540,
      height: 16,
      type: "text",
      maxLength: 80,
      description: "Home address (number and street or rural route)",
    },
    // City or town, state, and ZIP code
    addressLine2: {
      page: 1,
      x: 36,
      y: 564,
      width: 540,
      height: 16,
      type: "text",
      maxLength: 80,
      description: "City or town, state, and ZIP code",
    },
    // Filing Status checkboxes
    filingStatus_single: {
      page: 1,
      x: 52,
      y: 518,
      width: 12,
      height: 12,
      type: "checkbox",
      description: "Single or Married filing separately",
    },
    filingStatus_married: {
      page: 1,
      x: 52,
      y: 502,
      width: 12,
      height: 12,
      type: "checkbox",
      description: "Married filing jointly",
    },
    filingStatus_headOfHousehold: {
      page: 1,
      x: 52,
      y: 486,
      width: 12,
      height: 12,
      type: "checkbox",
      description: "Head of household",
    },
  },

  // ============================================================================
  // STEP 2: MULTIPLE JOBS OR SPOUSE WORKS
  // ============================================================================
  step2: {
    // (c) Two jobs checkbox
    twoJobsCheckbox: {
      page: 1,
      x: 52,
      y: 430,
      width: 12,
      height: 12,
      type: "checkbox",
      description: "Check if there are only two jobs total",
    },
  },

  // ============================================================================
  // STEP 3: CLAIM DEPENDENTS
  // ============================================================================
  step3: {
    // Line 3 - Total credits (calculated: children × $2,000 + other dependents × $500)
    totalCredits: {
      page: 1,
      x: 500,
      y: 372,
      width: 76,
      height: 16,
      type: "currency",
      description: "Total amount from Step 3",
    },
  },

  // ============================================================================
  // STEP 4: OTHER ADJUSTMENTS (Optional)
  // ============================================================================
  step4: {
    // (a) Other income
    otherIncome: {
      page: 1,
      x: 500,
      y: 318,
      width: 76,
      height: 16,
      type: "currency",
      description: "Other income (not from jobs)",
    },
    // (b) Deductions
    deductions: {
      page: 1,
      x: 500,
      y: 288,
      width: 76,
      height: 16,
      type: "currency",
      description: "Deductions other than standard deduction",
    },
    // (c) Extra withholding
    extraWithholding: {
      page: 1,
      x: 500,
      y: 258,
      width: 76,
      height: 16,
      type: "currency",
      description: "Extra withholding per pay period",
    },
  },

  // ============================================================================
  // STEP 5: SIGN HERE
  // ============================================================================
  step5: {
    // Employee signature (image or typed)
    signature: {
      page: 1,
      x: 72,
      y: 188,
      width: 240,
      height: 24,
      type: "signature",
      description: "Employee's signature",
    },
    // Date signed
    dateSigned: {
      page: 1,
      x: 432,
      y: 188,
      width: 100,
      height: 16,
      type: "date",
      format: "MM/DD/YYYY",
      description: "Date",
    },
  },

  // ============================================================================
  // EMPLOYERS ONLY SECTION
  // ============================================================================
  employer: {
    // Employer's name and address
    employerNameAddress: {
      page: 1,
      x: 36,
      y: 130,
      width: 280,
      height: 32,
      type: "text",
      multiline: true,
      description: "Employer's name and address",
    },
    // First date of employment
    firstDateOfEmployment: {
      page: 1,
      x: 360,
      y: 130,
      width: 100,
      height: 16,
      type: "date",
      format: "MM/DD/YYYY",
      description: "First date of employment",
    },
    // Employer identification number (EIN)
    ein: {
      page: 1,
      x: 500,
      y: 130,
      width: 76,
      height: 16,
      type: "text",
      format: "ein", // XX-XXXXXXX
      description: "Employer identification number (EIN)",
    },
  },
};

// ============================================================================
// FORM DATA TO PDF FIELD MAPPING
// ============================================================================

/**
 * Maps form data to PDF field values
 * @param {Object} formData - The W-4 form data from user input
 * @param {Object} employerData - Employer information
 * @param {Object} signatureData - Signature information
 * @returns {Object} - PDF field values ready for filling
 */
export function mapFormDataToPdfFields(
  formData,
  employerData = {},
  signatureData = {},
) {
  // Calculate Step 3 total credits
  const childrenUnder17 = parseInt(formData.step3?.childrenUnder17 || 0);
  const otherDependents = parseInt(formData.step3?.otherDependents || 0);
  const totalCredits = childrenUnder17 * 2000 + otherDependents * 500;

  return {
    // Step 1: Personal Information
    firstName: formData.firstName || "",
    lastName: formData.lastName || "",
    ssn: formatSSN(formData.ssn),
    addressLine1: formData.address || "",
    addressLine2: `${formData.city || ""}, ${formData.state || ""} ${
      formData.zipCode || ""
    }`.trim(),

    // Filing Status (only one should be true)
    filingStatus_single: formData.filingStatus === "single",
    filingStatus_married: formData.filingStatus === "married_jointly",
    filingStatus_headOfHousehold: formData.filingStatus === "head_of_household",

    // Step 2: Multiple Jobs
    twoJobsCheckbox: formData.step2?.twoJobsOnly || false,

    // Step 3: Claim Dependents
    totalCredits: totalCredits > 0 ? formatCurrency(totalCredits) : "",

    // Step 4: Other Adjustments
    otherIncome: formData.step4?.otherIncome
      ? formatCurrency(formData.step4.otherIncome)
      : "",
    deductions: formData.step4?.deductions
      ? formatCurrency(formData.step4.deductions)
      : "",
    extraWithholding: formData.step4?.extraWithholding
      ? formatCurrency(formData.step4.extraWithholding)
      : "",

    // Step 5: Signature
    signature: signatureData.signatureImage || signatureData.typedName || "",
    dateSigned: formatDate(signatureData.signedAt || new Date()),

    // Employer Section
    employerNameAddress: `${employerData.companyName || ""}\n${
      employerData.address || ""
    }`,
    firstDateOfEmployment: formatDate(
      employerData.firstDateOfEmployment || formData.hireDate,
    ),
    ein: formatEIN(employerData.ein),
  };
}

// ============================================================================
// FORMATTING HELPERS
// ============================================================================

function formatSSN(ssn) {
  if (!ssn) return "";
  const digits = ssn.replace(/\D/g, "");
  if (digits.length !== 9) return ssn;
  return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5)}`;
}

function formatEIN(ein) {
  if (!ein) return "";
  const digits = ein.replace(/\D/g, "");
  if (digits.length !== 9) return ein;
  return `${digits.slice(0, 2)}-${digits.slice(2)}`;
}

function formatCurrency(amount) {
  if (!amount && amount !== 0) return "";
  const num = parseFloat(amount);
  if (isNaN(num)) return "";
  return num.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

function formatDate(date) {
  if (!date) return "";
  const d = new Date(date);
  if (isNaN(d.getTime())) return "";
  return `${String(d.getMonth() + 1).padStart(2, "0")}/${String(
    d.getDate(),
  ).padStart(2, "0")}/${d.getFullYear()}`;
}

// ============================================================================
// PDF GENERATION (using pdf-lib)
// ============================================================================

/**
 * Generate a filled W-4 PDF
 * @param {Object} formData - The mapped PDF field values
 * @param {Uint8Array} templatePdf - The blank W-4 PDF template
 * @returns {Promise<Uint8Array>} - The filled PDF as bytes
 */
export async function generateFilledW4Pdf(formData, templatePdfBytes) {
  // This requires pdf-lib to be installed: npm install pdf-lib
  const { PDFDocument, rgb, StandardFonts } = await import("pdf-lib");

  // Load the template PDF
  const pdfDoc = await PDFDocument.load(templatePdfBytes);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const { width, height } = firstPage.getSize();

  // Helper function to draw text
  const drawText = (text, x, y, options = {}) => {
    if (!text) return;
    firstPage.drawText(String(text), {
      x,
      y,
      size: options.size || 10,
      font: options.bold ? helveticaBold : helveticaFont,
      color: rgb(0, 0.2, 0.6), // Blue color to match native form fields
      maxWidth: options.maxWidth,
    });
  };

  // Helper function to draw checkbox
  const drawCheckbox = (checked, x, y) => {
    if (checked) {
      firstPage.drawText("X", {
        x: x + 2,
        y: y + 2,
        size: 10,
        font: helveticaBold,
        color: rgb(0, 0.2, 0.6), // Blue color to match native form fields
      });
    }
  };

  // Fill Step 1: Personal Information
  const step1Fields = W4_PDF_FIELDS.step1;
  drawText(
    formData.firstName,
    step1Fields.firstName.x,
    step1Fields.firstName.y,
    { maxWidth: step1Fields.firstName.width },
  );
  drawText(formData.lastName, step1Fields.lastName.x, step1Fields.lastName.y, {
    maxWidth: step1Fields.lastName.width,
  });
  drawText(formData.ssn, step1Fields.ssn.x, step1Fields.ssn.y);
  drawText(
    formData.addressLine1,
    step1Fields.addressLine1.x,
    step1Fields.addressLine1.y,
    { maxWidth: step1Fields.addressLine1.width },
  );
  drawText(
    formData.addressLine2,
    step1Fields.addressLine2.x,
    step1Fields.addressLine2.y,
    { maxWidth: step1Fields.addressLine2.width },
  );

  // Filing status checkboxes
  drawCheckbox(
    formData.filingStatus_single,
    step1Fields.filingStatus_single.x,
    step1Fields.filingStatus_single.y,
  );
  drawCheckbox(
    formData.filingStatus_married,
    step1Fields.filingStatus_married.x,
    step1Fields.filingStatus_married.y,
  );
  drawCheckbox(
    formData.filingStatus_headOfHousehold,
    step1Fields.filingStatus_headOfHousehold.x,
    step1Fields.filingStatus_headOfHousehold.y,
  );

  // Fill Step 2: Multiple Jobs
  const step2Fields = W4_PDF_FIELDS.step2;
  drawCheckbox(
    formData.twoJobsCheckbox,
    step2Fields.twoJobsCheckbox.x,
    step2Fields.twoJobsCheckbox.y,
  );

  // Fill Step 3: Claim Dependents
  const step3Fields = W4_PDF_FIELDS.step3;
  if (formData.totalCredits) {
    drawText(
      `$${formData.totalCredits}`,
      step3Fields.totalCredits.x,
      step3Fields.totalCredits.y,
    );
  }

  // Fill Step 4: Other Adjustments
  const step4Fields = W4_PDF_FIELDS.step4;
  if (formData.otherIncome) {
    drawText(
      `$${formData.otherIncome}`,
      step4Fields.otherIncome.x,
      step4Fields.otherIncome.y,
    );
  }
  if (formData.deductions) {
    drawText(
      `$${formData.deductions}`,
      step4Fields.deductions.x,
      step4Fields.deductions.y,
    );
  }
  if (formData.extraWithholding) {
    drawText(
      `$${formData.extraWithholding}`,
      step4Fields.extraWithholding.x,
      step4Fields.extraWithholding.y,
    );
  }

  // Fill Step 5: Signature
  const step5Fields = W4_PDF_FIELDS.step5;

  // If signature is an image (base64), embed it
  if (formData.signature && formData.signature.startsWith("data:image")) {
    try {
      const signatureImage = await pdfDoc.embedPng(formData.signature);
      const signatureDims = signatureImage.scale(0.3);
      firstPage.drawImage(signatureImage, {
        x: step5Fields.signature.x,
        y: step5Fields.signature.y - 10,
        width: Math.min(signatureDims.width, step5Fields.signature.width),
        height: Math.min(signatureDims.height, step5Fields.signature.height),
      });
    } catch (e) {
      // If image embedding fails, treat as text
      drawText(
        formData.signature,
        step5Fields.signature.x,
        step5Fields.signature.y,
      );
    }
  } else if (formData.signature) {
    // Typed signature
    drawText(
      formData.signature,
      step5Fields.signature.x,
      step5Fields.signature.y,
      { size: 12 },
    );
  }

  drawText(
    formData.dateSigned,
    step5Fields.dateSigned.x,
    step5Fields.dateSigned.y,
  );

  // Fill Employer Section
  const employerFields = W4_PDF_FIELDS.employer;
  if (formData.employerNameAddress) {
    const lines = formData.employerNameAddress.split("\n");
    lines.forEach((line, i) => {
      drawText(
        line,
        employerFields.employerNameAddress.x,
        employerFields.employerNameAddress.y - i * 12,
        { maxWidth: employerFields.employerNameAddress.width },
      );
    });
  }
  drawText(
    formData.firstDateOfEmployment,
    employerFields.firstDateOfEmployment.x,
    employerFields.firstDateOfEmployment.y,
  );
  drawText(formData.ein, employerFields.ein.x, employerFields.ein.y);

  // Save the PDF
  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

// ============================================================================
// VALIDATION
// ============================================================================

export function validateW4FormData(formData) {
  const errors = {};

  // Step 1 validations (required)
  if (!formData.firstName?.trim()) {
    errors.firstName = "First name is required";
  }
  if (!formData.lastName?.trim()) {
    errors.lastName = "Last name is required";
  }
  if (!formData.ssn?.trim()) {
    errors.ssn = "Social Security Number is required";
  } else {
    const ssnDigits = formData.ssn.replace(/\D/g, "");
    if (ssnDigits.length !== 9) {
      errors.ssn = "SSN must be 9 digits";
    }
  }
  if (!formData.address?.trim()) {
    errors.address = "Address is required";
  }
  if (!formData.filingStatus) {
    errors.filingStatus = "Filing status is required";
  }

  // Step 3 validations (optional but must be valid if provided)
  if (formData.step3?.childrenUnder17) {
    const count = parseInt(formData.step3.childrenUnder17);
    if (isNaN(count) || count < 0) {
      errors["step3.childrenUnder17"] = "Must be a valid number";
    }
  }
  if (formData.step3?.otherDependents) {
    const count = parseInt(formData.step3.otherDependents);
    if (isNaN(count) || count < 0) {
      errors["step3.otherDependents"] = "Must be a valid number";
    }
  }

  // Step 4 validations (optional but must be valid if provided)
  if (formData.step4?.otherIncome) {
    const amount = parseFloat(formData.step4.otherIncome);
    if (isNaN(amount) || amount < 0) {
      errors["step4.otherIncome"] = "Must be a valid amount";
    }
  }
  if (formData.step4?.deductions) {
    const amount = parseFloat(formData.step4.deductions);
    if (isNaN(amount) || amount < 0) {
      errors["step4.deductions"] = "Must be a valid amount";
    }
  }
  if (formData.step4?.extraWithholding) {
    const amount = parseFloat(formData.step4.extraWithholding);
    if (isNaN(amount) || amount < 0) {
      errors["step4.extraWithholding"] = "Must be a valid amount";
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

// ============================================================================
// W-4 FORM DATA STRUCTURE (for reference)
// ============================================================================

export const W4_FORM_TEMPLATE = {
  // Step 1: Personal Information (Required)
  firstName: "", // First name and middle initial
  lastName: "", // Last name
  ssn: "", // Social Security Number (XXX-XX-XXXX)
  address: "", // Street address
  city: "", // City
  state: "", // State (2-letter code)
  zipCode: "", // ZIP code
  filingStatus: "", // 'single' | 'married_jointly' | 'head_of_household'

  // Step 2: Multiple Jobs or Spouse Works (Optional)
  step2: {
    usedEstimator: false, // Used IRS estimator
    twoJobsOnly: false, // Only two jobs total checkbox
    // Multiple Jobs Worksheet
    highestJobWages: 0, // Annual wages from highest paying job
    secondJobWages: 0, // Annual wages from second highest job
    thirdJobWages: 0, // Annual wages from third job (if any)
    worksheetTotal: 0, // Total from worksheet (enter in 4c)
  },

  // Step 3: Claim Dependents (Optional)
  step3: {
    childrenUnder17: 0, // Number of qualifying children under 17 (× $2,000)
    otherDependents: 0, // Number of other dependents (× $500)
    // Calculated: totalCredits = (childrenUnder17 × 2000) + (otherDependents × 500)
  },

  // Step 4: Other Adjustments (Optional)
  step4: {
    otherIncome: 0, // 4(a) Other income not from jobs
    deductions: 0, // 4(b) Deductions (if more than standard)
    extraWithholding: 0, // 4(c) Extra withholding per pay period
    // Deductions Worksheet
    itemizedDeductions: 0, // Estimated itemized deductions
    deductionsDifference: 0, // Itemized minus standard deduction
    otherDeductions: 0, // Student loan interest, IRA, etc.
    totalDeductions: 0, // Total deductions
  },

  // Step 5: Sign Here (Required for submission)
  signature: {
    signatureType: "", // 'draw' | 'type'
    signatureImage: "", // Base64 image (if drawn)
    typedName: "", // Typed signature
    signedAt: null, // Date/time signed
    ipAddress: "", // IP address at signing
    userAgent: "", // Browser info at signing
  },

  // Employer Information (Filled by employer)
  employer: {
    companyName: "", // Company name
    address: "", // Company address
    city: "", // City
    state: "", // State
    zipCode: "", // ZIP
    ein: "", // Employer Identification Number
    firstDateOfEmployment: null, // First date of employment
  },

  // Metadata
  formVersion: "2024", // Form year/version
  status: "draft", // 'draft' | 'pending_signature' | 'complete'
  createdAt: null,
  updatedAt: null,
  submittedAt: null,
};

// ============================================================================
// DOCUMENT SIGNING SERVICE TEMPLATE CONFIGURATION
// Template fields with position percentages from the signing service
// ============================================================================

export const W4_TEMPLATE_FIELDS = [
  // Page 1 - Step 1: Personal Information
  {
    id: 2922,
    type: "TEXT",
    page: 1,
    label: "first name and middle initial",
    positionX: 18.04723242022028,
    positionY: 11.65599094141396,
    width: 10.44793251405198,
    height: 1.843079377280573,
  },
  {
    id: 2923,
    type: "TEXT",
    page: 1,
    label: "lastname",
    positionX: 45.97301427517286,
    positionY: 11.66057564465006,
    width: 10.44793251405198,
    height: 1.843079377280573,
  },
  {
    id: 2924,
    type: "TEXT",
    page: 1,
    label: "address",
    positionX: 17.47995599930765,
    positionY: 14.77581161552848,
    width: 48.65719087919395,
    height: 1.958035031703363,
  },
  {
    id: 2925,
    type: "TEXT",
    page: 1,
    label: "city or town,state and zip code",
    positionX: 17.19632917619408,
    positionY: 17.66057791239054,
    width: 51.193890007379,
    height: 1.843079377280573,
  },
  {
    id: 2926,
    type: "NUMBER",
    page: 1,
    label: "social security number",
    positionX: 79.98854661067131,
    positionY: 11.77119391578941,
    width: 10.59686187608749,
    height: 1.728123722857783,
  },
  // Filing Status Checkboxes - (c) section with 3 options stacked vertically
  // positionX: 18.5% aligns inside the checkbox squares on the W-4 form
  // Single checkbox
  {
    id: 2927,
    type: "CHECKBOX_SINGLE",
    page: 1,
    label: "filing_status_single",
    positionX: 18.5,
    positionY: 20.2,
    width: 2.0,
    height: 1.5,
  },
  // Married filing jointly checkbox
  {
    id: 2937,
    type: "CHECKBOX_SINGLE",
    page: 1,
    label: "filing_status_married",
    positionX: 18.5,
    positionY: 21.5,
    width: 2.0,
    height: 1.5,
  },
  // Head of household checkbox
  {
    id: 2938,
    type: "CHECKBOX_SINGLE",
    page: 1,
    label: "filing_status_hoh",
    positionX: 18.5,
    positionY: 22.8,
    width: 2.0,
    height: 1.5,
  },
  // Step 2(c) Checkbox - "If there are only two jobs total"
  // positionX: 14.5% aligns inside checkbox squares on the W-4 form
  {
    id: 2936,
    type: "CHECKBOX_SINGLE",
    page: 1,
    label: "2c",
    positionX: 14.5,
    positionY: 38.0,
    width: 2.0,
    height: 1.5,
  },

  // Employer Only Section (New Fields)
  {
    id: 5137,
    type: "TEXT",
    page: 1,
    label: "Employer Name",
    positionX: 15.80838746116916,
    positionY: 91.26488516724744,
    width: 17.76017572947318,
    height: 2.304164963810378,
  },
  {
    id: 5138,
    type: "TEXT",
    page: 1,
    label: "employer address",
    positionX: 15.95763680753569,
    positionY: 93.3386371505535,
    width: 45.67206274881344,
    height: 2.072990576255006,
  },
  {
    id: 5139,
    type: "TEXT",
    page: 1,
    label: "First date of employment",
    positionX: 63.42111076696031,
    positionY: 92.4169606173992,
    width: 12.68513883448269,
    height: 2.649031817207601,
  },
  {
    id: 5140,
    type: "NUMBER",
    page: 1,
    label: "Employee Identification Number",
    positionX: 76.85416685645571,
    positionY: 92.8778006419147,
    width: 17.76017572947318,
    height: 1.611904879854055,
  },

  // Page 1 - Step 3: Dependents
  {
    id: 2928,
    type: "NUMBER",
    page: 1,
    label: "3a",
    positionX: 68.79433320275848,
    positionY: 59.81302286360564,
    width: 6.565962890927477,
    height: 2.304164963810378,
  },
  {
    id: 2929,
    type: "NUMBER",
    page: 1,
    label: "3b",
    positionX: 68.80920051744084,
    positionY: 61.54572601588445,
    width: 6.565962890927477,
    height: 2.304164963810378,
  },
  {
    id: 2930,
    type: "NUMBER",
    page: 1,
    label: "step3_total",
    positionX: 83.89895099798672,
    positionY: 64.43052219769859,
    width: 6.565962890927477,
    height: 2.304164963810378,
  },

  // Page 1 - Step 4: Other Adjustments (TEXT type used to support 'Exempt' string if needed)
  {
    id: 2931,
    type: "TEXT",
    page: 1,
    label: "4b",
    positionX: 84.51085213763197,
    positionY: 73.19093024753741,
    width: 6.565962890927477,
    height: 2.304164963810378,
  },
  {
    id: 2932,
    type: "TEXT",
    page: 1,
    label: "4a",
    positionX: 84.22721620464422,
    positionY: 68.70240381897341,
    width: 6.565962890927477,
    height: 2.304164963810378,
  },
  {
    id: 2933,
    type: "TEXT",
    page: 1,
    label: "4c",
    positionX: 84.67498474096072,
    positionY: 75.61488640483604,
    width: 6.565962890927477,
    height: 2.304164963810378,
  },

  // Page 1 - Step 5: Signature
  {
    id: 2934,
    type: "SIGNATURE",
    page: 1,
    label: "SIGNATURE",
    positionX: 18.04723014275173,
    positionY: 85.61968803766544,
    width: 11.64100035528509,
    height: 2.880206204762972,
  },
  {
    id: 2935,
    type: "DATE",
    page: 1,
    label: "DATE",
    positionX: 76.4063983201392,
    positionY: 86.08051399867409,
    width: 8.655876210474533,
    height: 2.41912050836202,
  },

  // Page 3 - Multiple Jobs Worksheet
  {
    id: 4983,
    type: "NUMBER",
    page: 3,
    label: "1 two jobs",
    positionX: 83.27219165353327,
    positionY: 23.40723093839312,
    width: 11.19421340791284,
    height: 2.072990576255006,
  },
  {
    id: 4984,
    type: "NUMBER",
    page: 3,
    label: "2a three jobs",
    positionX: 83.43632425686202,
    positionY: 34.70222572223843,
    width: 11.19421340791284,
    height: 2.072990576255006,
  },
  {
    id: 4985,
    type: "NUMBER",
    page: 3,
    label: "2b three jobs",
    positionX: 83.74970392908874,
    positionY: 42.54097481830652,
    width: 11.19421340791284,
    height: 2.072990576255006,
  },
  {
    id: 4986,
    type: "NUMBER",
    page: 3,
    label: "mjw_line3",
    positionX: 83.31680270745461,
    positionY: 49.91888520831289,
    width: 11.19421340791284,
    height: 2.072990576255006,
  },
  {
    id: 4987,
    type: "NUMBER",
    page: 3,
    label: "mjw_line4",
    positionX: 83.31680270745461,
    positionY: 56.02493642591724,
    width: 11.19421340791284,
    height: 2.072990576255006,
  },
  {
    id: 4988,
    type: "NUMBER",
    page: 3,
    label: "2c three jobs",
    positionX: 84.06308360131547,
    positionY: 45.54098232470331,
    width: 11.19421340791284,
    height: 2.072990576255006,
  },

  // Page 4 - Deductions Worksheet
  {
    id: 4989,
    type: "NUMBER",
    page: 4,
    label: "1a",
    positionX: 83.86921636862195,
    positionY: 14.07536415341486,
    width: 8.804798740104399,
    height: 2.304164963810378,
  },
  {
    id: 4990,
    type: "NUMBER",
    page: 4,
    label: "1b",
    positionX: 83.73482750453216,
    positionY: 18.57307580989626,
    width: 8.804798740104399,
    height: 2.304164963810378,
  },
  {
    id: 4991,
    type: "NUMBER",
    page: 4,
    label: "1c",
    positionX: 84.04820717675889,
    positionY: 21.68828673015309,
    width: 8.801526017800693,
    height: 2.304164963810378,
  },
  {
    id: 4992,
    type: "NUMBER",
    page: 4,
    label: "dw_line2",
    positionX: 83.91382742254329,
    positionY: 23.76662693257196,
    width: 8.794979434459011,
    height: 2.304164963810378,
  },
  {
    id: 4993,
    type: "NUMBER",
    page: 4,
    label: "dw_3b",
    positionX: 83.92870384709987,
    positionY: 29.0707875366952,
    width: 8.794979434459011,
    height: 2.304164963810378,
  },
  {
    id: 4994,
    type: "NUMBER",
    page: 4,
    label: "dw_3a",
    positionX: 83.79432409288428,
    positionY: 26.07995778697781,
    width: 8.794979434459011,
    height: 2.304164963810378,
  },
  {
    id: 4995,
    type: "NUMBER",
    page: 4,
    label: "dw_line4",
    positionX: 83.79432409288428,
    positionY: 31.26432906542231,
    width: 8.793349336345665,
    height: 2.304164963810378,
  },
  {
    id: 4996,
    type: "NUMBER",
    page: 4,
    label: "dw_line5",
    positionX: 83.6599352287945,
    positionY: 35.4164142193938,
    width: 8.794979434459011,
    height: 2.304164963810378,
  },
  {
    id: 4997,
    type: "NUMBER",
    page: 4,
    label: "6a",
    positionX: 83.82406783212323,
    positionY: 39.68370751168466,
    width: 8.794979434459011,
    height: 2.304164963810378,
  },
  {
    id: 4998,
    type: "NUMBER",
    page: 4,
    label: "6b",
    positionX: 84.28671279299633,
    positionY: 43.0293358072917,
    width: 8.794979434459011,
    height: 2.304164963810378,
  },
  {
    id: 4999,
    type: "NUMBER",
    page: 4,
    label: "6c",
    positionX: 84.60010157509726,
    positionY: 47.52704570583475,
    width: 8.794979434459011,
    height: 2.304164963810378,
  },
  {
    id: 5000,
    type: "NUMBER",
    page: 4,
    label: "6d",
    positionX: 84.46572182088165,
    positionY: 49.72058712469071,
    width: 8.794979434459011,
    height: 2.304164963810378,
  },
  {
    id: 5001,
    type: "NUMBER",
    page: 4,
    label: "6e",
    positionX: 84.03282970912171,
    positionY: 51.22288520718781,
    width: 8.794979434459011,
    height: 2.304164963810378,
  },
  {
    id: 5002,
    type: "NUMBER",
    page: 4,
    label: "dw_line7",
    positionX: 83.59993759736179,
    positionY: 52.72519196950554,
    width: 8.794979434459011,
    height: 2.304164963810378,
  },
  {
    id: 5003,
    type: "NUMBER",
    page: 4,
    label: "8a",
    positionX: 83.76405198094214,
    positionY: 55.75,
    width: 8.793349336345665,
    height: 2.304164963810378,
  },
  {
    id: 5004,
    type: "NUMBER",
    page: 4,
    label: "8b",
    positionX: 83.62968133660074,
    positionY: 57.25,
    width: 8.793349336345665,
    height: 2.304164963810378,
  },
  {
    id: 5005,
    type: "NUMBER",
    page: 4,
    label: "dw_line10",
    positionX: 83.04753304606864,
    positionY: 64.49020772080901,
    width: 8.793349336345665,
    height: 2.304164963810378,
  },
  {
    id: 5006,
    type: "NUMBER",
    page: 4,
    label: "dw_line9",
    positionX: 83.06240947062521,
    positionY: 60.11689481425061,
    width: 8.793349336345665,
    height: 2.304164963810378,
  },
  {
    id: 5007,
    type: "NUMBER",
    page: 4,
    label: "dw_line11",
    positionX: 85.5,
    positionY: 68.87270233940811,
    width: 8.793349336345665,
    height: 2.304164963810378,
  },
  {
    id: 5008,
    type: "NUMBER",
    page: 4,
    label: "dw_line12",
    positionX: 83.52504532162411,
    positionY: 73.13999574157012,
    width: 8.793349336345665,
    height: 2.304164963810378,
  },
  {
    id: 5009,
    type: "NUMBER",
    page: 4,
    label: "dw_line13",
    positionX: 83.39066556740852,
    positionY: 75.44874189273987,
    width: 8.793349336345665,
    height: 2.304164963810378,
  },
  {
    id: 5010,
    type: "NUMBER",
    page: 4,
    label: "dw_line14",
    positionX: 83.24140938863634,
    positionY: 78.09854039081361,
    width: 8.793349336345665,
    height: 2.304164963810378,
  },
  {
    id: 5011,
    type: "NUMBER",
    page: 4,
    label: "dw_line15",
    positionX: 83.39066556740852,
    positionY: 79.94187763567699,
    width: 8.790076044674823,
    height: 2.304164963810378,
  },
];

// ============================================================================
// TEMPLATE-BASED PDF FILLING
// Uses the document signing service template positions
// ============================================================================

// ============================================================================
// NATIVE PDF FORM FIELD UTILITIES
// Uses the PDF's built-in AcroForm fields for perfect alignment
// ============================================================================

/**
 * Discover all native form fields in a PDF
 * Run this to see what fields are available in the W-4 PDF
 * Usage in browser console:
 *   import('./lib/w4PdfGenerator.js').then(m => m.discoverPdfFormFields('/fw4.pdf'))
 */
export async function discoverPdfFormFields(pdfUrl = "/fw4.pdf") {
  const { PDFDocument } = await import("pdf-lib");

  const response = await fetch(pdfUrl);
  const pdfBytes = await response.arrayBuffer();
  const pdfDoc = await PDFDocument.load(pdfBytes);

  const form = pdfDoc.getForm();
  const fields = form.getFields();

  console.group("📋 PDF Native Form Fields");
  console.log(`Found ${fields.length} form fields:\n`);

  const fieldInfo = fields.map((field) => {
    const type = field.constructor.name;
    const name = field.getName();
    let widgets = [];

    try {
      widgets = field.acroField.getWidgets();
    } catch (e) {}

    return {
      name,
      type: type.replace("PDF", "").replace("Field", ""),
      widgetCount: widgets.length,
    };
  });

  // Group by type
  const byType = {};
  fieldInfo.forEach((f) => {
    if (!byType[f.type]) byType[f.type] = [];
    byType[f.type].push(f.name);
  });

  Object.entries(byType).forEach(([type, names]) => {
    console.group(`${type} Fields (${names.length})`);
    names.forEach((n) => console.log(`  - "${n}"`));
    console.groupEnd();
  });

  console.groupEnd();

  return fieldInfo;
}

/**
 * W-4 PDF Native Field Name Mapping
 * Maps our form data fields to the actual PDF form field names
 * NOTE: These field names must match the PDF's internal field names exactly
 * Run discoverPdfFormFields() to get the actual field names from your PDF
 *
 * IMPORTANT: Field names here use our internal labels from mapFormDataToTemplateFields()
 * The format is: "ourLabel": "pdfNativeFieldName"
 */
export const W4_NATIVE_FIELD_MAP = {
  // ============================================================================
  // PAGE 1 - MAIN FORM
  // ============================================================================

  // Step 1: Personal Information
  "first name and middle initial":
    "topmostSubform[0].Page1[0].Step1a[0].f1_01[0]",
  lastname: "topmostSubform[0].Page1[0].Step1a[0].f1_02[0]",
  "social security number": "topmostSubform[0].Page1[0].f1_03[0]",
  // NOTE: Address fields swapped to match actual PDF layout
  address: "topmostSubform[0].Page1[0].Step1a[0].f1_05[0]",
  "city or town,state and zip code":
    "topmostSubform[0].Page1[0].Step1a[0].f1_04[0]",

  // Filing Status Checkboxes (Step 1c) - These might be radio buttons or checkboxes
  filing_status_single: "topmostSubform[0].Page1[0].c1_1[0]",
  filing_status_married: "topmostSubform[0].Page1[0].c1_1[1]",
  filing_status_hoh: "topmostSubform[0].Page1[0].c1_1[2]",

  // Step 2: Multiple Jobs - checkbox
  "2c": "topmostSubform[0].Page1[0].Step2c[0].c1_2[0]",

  // Step 3: Dependents (Page 1)
  "3a": "topmostSubform[0].Page1[0].Step3_ReadOrder[0].f1_06[0]",
  "3b": "topmostSubform[0].Page1[0].Step3_ReadOrder[0].f1_07[0]",
  step3_total: "topmostSubform[0].Page1[0].f1_08[0]", // Line 3 total

  // Step 4: Other Adjustments (Page 1)
  "4a": "topmostSubform[0].Page1[0].Step4a[0].f1_09[0]",
  "4b": "topmostSubform[0].Page1[0].Step4b[0].f1_10[0]",
  "4c": "topmostSubform[0].Page1[0].Step4c[0].f1_11[0]",

  // Step 5: Signature
  // Note: SIGNATURE is handled separately as image overlay
  DATE: "topmostSubform[0].Page1[0].f1_13[0]",

  // Employer Section (Page 1 bottom)
  "Employer Name": "topmostSubform[0].Page1[0].f1_14[0]",
  "employer address": "topmostSubform[0].Page1[0].f1_15[0]",
  "First date of employment": "topmostSubform[0].Page1[0].f1_16[0]",
  "Employee Identification Number": "topmostSubform[0].Page1[0].f1_17[0]",

  // ============================================================================
  // PAGE 3 - MULTIPLE JOBS WORKSHEET
  // ============================================================================
  "1 two jobs": "topmostSubform[0].Page3[0].f3_01[0]",
  "2a three jobs": "topmostSubform[0].Page3[0].f3_02[0]",
  "2b three jobs": "topmostSubform[0].Page3[0].f3_03[0]",
  "2c three jobs": "topmostSubform[0].Page3[0].f3_04[0]",
  mjw_line3: "topmostSubform[0].Page3[0].f3_05[0]", // Pay periods
  mjw_line4: "topmostSubform[0].Page3[0].f3_06[0]", // Result

  // ============================================================================
  // PAGE 4 - DEDUCTIONS WORKSHEET
  // ============================================================================
  "1a": "topmostSubform[0].Page4[0].f4_01[0]",
  "1b": "topmostSubform[0].Page4[0].f4_02[0]",
  "1c": "topmostSubform[0].Page4[0].f4_03[0]",
  dw_line2: "topmostSubform[0].Page4[0].f4_04[0]",
  dw_3a: "topmostSubform[0].Page4[0].f4_05[0]",
  dw_3b: "topmostSubform[0].Page4[0].f4_06[0]",
  dw_line4: "topmostSubform[0].Page4[0].f4_07[0]",
  dw_line5: "topmostSubform[0].Page4[0].f4_08[0]",
  "6a": "topmostSubform[0].Page4[0].f4_09[0]",
  "6b": "topmostSubform[0].Page4[0].f4_10[0]",
  "6c": "topmostSubform[0].Page4[0].f4_11[0]",
  "6d": "topmostSubform[0].Page4[0].f4_12[0]",
  "6e": "topmostSubform[0].Page4[0].f4_13[0]",
  dw_line7: "topmostSubform[0].Page4[0].f4_14[0]",
  "8a": "topmostSubform[0].Page4[0].f4_15[0]",
  "8b": "topmostSubform[0].Page4[0].f4_16[0]",
  dw_line9: "topmostSubform[0].Page4[0].f4_17[0]",
  dw_line10: "topmostSubform[0].Page4[0].f4_18[0]",
  dw_line11: "topmostSubform[0].Page4[0].f4_19[0]",
  dw_line12: "topmostSubform[0].Page4[0].f4_20[0]",
  dw_line13: "topmostSubform[0].Page4[0].f4_21[0]",
  dw_line14: "topmostSubform[0].Page4[0].f4_22[0]",
  dw_line15: "topmostSubform[0].Page4[0].f4_23[0]",
};

/**
 * Fill PDF using NATIVE form fields (AcroForm)
 * This uses the PDF's built-in interactive fields for perfect alignment
 * @param {Array} fieldValues - Array of field values from mapFormDataToTemplateFields()
 * @param {Uint8Array} templatePdfBytes - The blank W-4 PDF template bytes
 * @returns {Promise<Uint8Array>} - The filled PDF as bytes
 */
export async function fillPdfWithNativeFields(
  fieldValues,
  templatePdfBytes,
  shouldFlatten = true,
) {
  const { PDFDocument, rgb, StandardFonts } = await import("pdf-lib");
  const decodeBase64ToBytes = (base64) => {
    if (typeof atob === "function") {
      return Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
    }
    return new Uint8Array(Buffer.from(base64, "base64"));
  };

  // Load the template PDF with cross-platform settings
  const pdfDoc = await PDFDocument.load(templatePdfBytes, {
    ignoreEncryption: true,
    updateMetadata: false, // Prevents metadata changes that can affect rendering
  });
  const form = pdfDoc.getForm();
  const pages = pdfDoc.getPages();

  // Embed standard fonts explicitly for cross-platform consistency
  // These fonts render identically on Windows, Linux, and macOS
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Create lookup map
  const valueMap = {};
  fieldValues.forEach((field) => {
    valueMap[field.label] = field;
  });

  // Track which fields were successfully filled via native method
  const filledNatively = new Set();

  // Format number for display
  const formatNumber = (val) => {
    if (val === null || val === undefined || val === "") return "";
    const num = parseFloat(val);
    if (isNaN(num)) return String(val);
    if (num === 0) return "";
    return num.toLocaleString("en-US", { maximumFractionDigits: 0 });
  };

  // Get all available form fields for debugging
  const availableFields = form.getFields();
  console.log(`📋 PDF has ${availableFields.length} native form fields`);

  // Try to discover actual field names if our map doesn't match
  const actualFieldNames = availableFields.map((f) => f.getName());

  // DEBUG: Log first 5 actual field names to help diagnose matching issues
  console.log(`📋 First 5 PDF field names:`, actualFieldNames.slice(0, 5));
  console.log(
    `📋 Looking for fields like:`,
    Object.values(W4_NATIVE_FIELD_MAP).slice(0, 3),
  );

  // Process each field mapping
  for (const [ourLabel, pdfFieldName] of Object.entries(W4_NATIVE_FIELD_MAP)) {
    const fieldData = valueMap[ourLabel];
    if (!fieldData) continue;

    const value = fieldData.value;
    if (value === null || value === undefined || value === "") continue;

    try {
      // Try to get the field by name
      const field = availableFields.find((f) => f.getName() === pdfFieldName);

      if (!field) {
        // Try fuzzy match - look for similar field names
        const possibleMatch = actualFieldNames.find((name) =>
          name
            .toLowerCase()
            .includes(
              ourLabel.toLowerCase().replace(/\s+/g, "").substring(0, 10),
            ),
        );
        if (possibleMatch) {
          console.log(
            `Field "${ourLabel}" not found at "${pdfFieldName}", possible match: "${possibleMatch}"`,
          );
        }
        continue;
      }

      const fieldType = field.constructor.name;

      if (fieldType === "PDFTextField") {
        const textField = form.getTextField(pdfFieldName);
        // Set larger font size for better readability
        textField.setFontSize(11); // Increased from default (~8-9)
        if (typeof value === "number") {
          textField.setText(formatNumber(value));
        } else {
          textField.setText(String(value));
        }
        // CRITICAL: Update field appearance with embedded font for cross-platform consistency
        // This ensures the same rendering on Windows, Linux (AWS), and macOS
        try {
          textField.updateAppearances(helveticaFont);
        } catch (appearanceError) {
          // Some fields may not support updateAppearances, continue anyway
          console.log(
            `Could not update appearance for ${pdfFieldName}:`,
            appearanceError.message,
          );
        }
        filledNatively.add(ourLabel);
      } else if (fieldType === "PDFCheckBox") {
        const checkbox = form.getCheckBox(pdfFieldName);
        if (value === true || value === "true" || value === 1) {
          checkbox.check();
        } else {
          checkbox.uncheck();
        }
        filledNatively.add(ourLabel);
      } else if (fieldType === "PDFRadioGroup") {
        // Radio buttons are grouped - select by value
        const radioGroup = form.getRadioGroup(pdfFieldName);
        if (value === true || value === "true" || value === 1) {
          // For filing status, we need to check which option
          // The radio group has options like 'Single', 'Married', etc.
          const options = radioGroup.getOptions();
          if (options.length > 0) {
            radioGroup.select(options[0]); // Select first option if true
          }
        }
        filledNatively.add(ourLabel);
      }
    } catch (e) {
      console.log(
        `Error filling field ${ourLabel} (${pdfFieldName}):`,
        e.message,
      );
    }
  }

  console.log(
    `✅ Filled ${filledNatively.size} fields via native PDF form fields`,
  );

  // For fields that couldn't be filled natively, use overlay method
  // This ensures all fields get filled even if native method fails
  const failedFields = Object.keys(W4_NATIVE_FIELD_MAP).filter((label) => {
    const fieldData = valueMap[label];
    return fieldData && fieldData.value && !filledNatively.has(label);
  });

  if (failedFields.length > 0) {
    console.log(
      `⚠️ ${failedFields.length} fields will use overlay method:`,
      failedFields,
    );

    // Use template field positions for overlay
    for (const label of failedFields) {
      const fieldData = valueMap[label];
      if (!fieldData || !fieldData.value) continue;

      // Find matching template field by ID
      const templateField = W4_TEMPLATE_FIELDS.find(
        (t) => t.id === fieldData.id,
      );
      if (!templateField) continue;

      const pageIndex = templateField.page - 1;
      if (pageIndex >= pages.length) continue;

      const page = pages[pageIndex];
      const { width, height } = page.getSize();

      // Convert percentage to PDF points
      const fieldX = (templateField.positionX / 100) * width;
      const fieldY =
        height -
        (templateField.positionY / 100) * height -
        (templateField.height / 100) * height;
      const fieldWidth = (templateField.width / 100) * width;
      const fieldHeight = (templateField.height / 100) * height;

      const value = fieldData.value;

      // Handle CHECKBOX_SINGLE type - draw checkmark instead of "true"
      if (templateField.type === "CHECKBOX_SINGLE") {
        if (value === true || value === "true" || value === 1) {
          page.drawText("X", {
            x: fieldX + fieldWidth * 0.35,
            y: fieldY + fieldHeight * 0.25,
            size: 9,
            font: helveticaBold,
            color: rgb(0, 0.2, 0.6), // Blue color to match native form fields
          });
        }
        continue;
      }

      const text =
        typeof value === "number" ? formatNumber(value) : String(value);

      if (text && templateField.type !== "SIGNATURE") {
        const fontSize = Math.min(10, fieldHeight * 0.6);
        page.drawText(text, {
          x: fieldX + 2,
          y: fieldY + fieldHeight * 0.3,
          size: fontSize,
          font: helveticaBold,
          color: rgb(0, 0.2, 0.6), // Blue color to match native form fields
        });
      }
    }
  }

  // Handle SIGNATURE separately (as image overlay since PDF text fields can't show images)
  const signatureData = valueMap["SIGNATURE"];
  if (signatureData && signatureData.value) {
    const value = signatureData.value;
    const page = pages[0]; // Signature is on page 1

    // Signature position - Using fixed x,y coordinates (in PDF points, 72 points = 1 inch)
    // Page dimensions: 612 x 792 points (8.5" x 11")
    // The signature line is approximately 1.25 inches from the bottom of the page
    // Y coordinate is measured from the BOTTOM of the page in PDF coordinates
    const sigX = 110; // Start position for signature (after "Employee's signature" label)
    const sigY = 92; // ~1.28 inches from bottom - right on the signature line
    const sigWidth = 200; // Maximum width for signature
    const sigHeight = 20; // Height for signature

    if (typeof value === "string" && value.startsWith("data:image")) {
      try {
        const imageData = value.split(",")[1];
        const imageBytes = decodeBase64ToBytes(imageData);
        let signatureImage;

        try {
          signatureImage = await pdfDoc.embedPng(imageBytes);
        } catch {
          signatureImage = await pdfDoc.embedJpg(imageBytes);
        }

        const aspectRatio = signatureImage.width / signatureImage.height;
        let drawWidth = Math.min(sigWidth, 180); // Max width 180 points
        let drawHeight = drawWidth / aspectRatio;

        if (drawHeight > sigHeight) {
          drawHeight = sigHeight;
          drawWidth = drawHeight * aspectRatio;
        }

        // Draw signature multiple times with slight offsets to simulate bold/thickness
        // This makes thin hand-drawn lines look more substantial
        const offsets = [
          { ox: 0, oy: 0 }, // Original
          { ox: 0.3, oy: 0 }, // Slight right
          { ox: 0, oy: 0.3 }, // Slight up
          { ox: 0.3, oy: 0.3 }, // Diagonal
        ];

        offsets.forEach((offset) => {
          page.drawImage(signatureImage, {
            x: sigX + offset.ox,
            y: sigY + offset.oy,
            width: drawWidth,
            height: drawHeight,
          });
        });
      } catch (e) {
        // Fall back to text
        page.drawText(String(value), {
          x: sigX,
          y: sigY + 4,
          size: 12,
          font: helveticaBold,
          color: rgb(0, 0.2, 0.6), // Blue color to match native form fields
        });
      }
    } else if (value) {
      // Typed signature - draw as text
      page.drawText(String(value), {
        x: sigX,
        y: sigY + 4,
        size: 12,
        font: helveticaBold,
        color: rgb(0, 0.2, 0.6), // Blue color to match native form fields
      });
    }
  }

  // Handle DATE separately as overlay (in case native field doesn't work)
  const dateData = valueMap["DATE"];
  if (dateData && dateData.value) {
    const page = pages[0];
    const { width, height } = page.getSize();

    // Date position - Right side of signature line
    // Template says: positionX: 76.41%, positionY: 86.08%
    const dateX = (76 / 100) * width;
    const dateY = height - (86 / 100) * height; // Same Y as signature

    // Try native field first
    const dateFieldName = W4_NATIVE_FIELD_MAP["DATE"];
    try {
      const dateField = form.getTextField(dateFieldName);
      dateField.setText(String(dateData.value));
      dateField.setFontSize(11);
    } catch (e) {
      // Fall back to overlay text if native field fails
      page.drawText(String(dateData.value), {
        x: dateX,
        y: dateY + 4,
        size: 11,
        font: helveticaBold,
        color: rgb(0, 0.2, 0.6), // Blue color to match native form fields
      });
    }
  }

  // Flatten the form to ensure consistent rendering across all platforms (Windows, Linux, macOS)
  // This converts interactive fields to static content, preventing font substitution issues
  if (shouldFlatten) {
    try {
      form.flatten();
      console.log("✅ Form flattened for cross-platform consistency");
    } catch (flattenError) {
      console.warn("Could not flatten form:", flattenError.message);
    }
  }

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

/**
 * Fill PDF using template field positions (percentage-based coordinates)
 * @param {Array} fieldValues - Array of field values from mapFormDataToTemplateFields()
 * @param {Uint8Array} templatePdfBytes - The blank W-4 PDF template bytes
 * @returns {Promise<Uint8Array>} - The filled PDF as bytes
 */
export async function fillPdfWithTemplateFields(
  fieldValues,
  templatePdfBytes,
  shouldFlatten = true,
) {
  const { PDFDocument, rgb, StandardFonts } = await import("pdf-lib");
  const decodeBase64ToBytes = (base64) => {
    if (typeof atob === "function") {
      return Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
    }
    return new Uint8Array(Buffer.from(base64, "base64"));
  };

  // Load the template PDF with cross-platform settings
  const pdfDoc = await PDFDocument.load(templatePdfBytes, {
    updateMetadata: false, // Prevents metadata changes that can affect rendering
  });
  const pages = pdfDoc.getPages();

  // Embed standard fonts explicitly for cross-platform consistency
  // StandardFonts are guaranteed to render identically on all platforms
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Convert percentage to PDF points
  // Template uses percentage from top-left, PDF uses points from bottom-left
  const convertPosition = (
    page,
    posXPercent,
    posYPercent,
    widthPercent,
    heightPercent,
  ) => {
    const { width, height } = page.getSize();
    const fieldX = (posXPercent / 100) * width;
    const fieldWidth = (widthPercent / 100) * width;
    const fieldHeight = (heightPercent / 100) * height;
    // Y in template is from top, Y in PDF is from bottom
    const fieldY = height - (posYPercent / 100) * height - fieldHeight;

    return {
      x: fieldX,
      y: fieldY,
      width: fieldWidth,
      height: fieldHeight,
    };
  };

  // Format number for display (currency style without $ sign)
  const formatNumber = (val) => {
    if (val === null || val === undefined || val === "") return "";
    const num = parseFloat(val);
    if (isNaN(num)) return String(val);
    if (num === 0) return ""; // Don't show zeros
    return num.toLocaleString("en-US", { maximumFractionDigits: 0 });
  };

  // Create a lookup map from fieldValues
  const valueMap = {};
  fieldValues.forEach((field) => {
    valueMap[field.id] = field;
  });

  // Process each template field
  for (const templateField of W4_TEMPLATE_FIELDS) {
    const pageIndex = templateField.page - 1;
    if (pageIndex >= pages.length) continue;

    const page = pages[pageIndex];
    const pos = convertPosition(
      page,
      templateField.positionX,
      templateField.positionY,
      templateField.width,
      templateField.height,
    );

    const fieldData = valueMap[templateField.id];
    if (!fieldData) continue;

    const value = fieldData.value;

    switch (templateField.type) {
      case "TEXT":
        if (value && String(value).trim()) {
          const text = String(value);
          // Default font size
          let fontSize = Math.min(10, pos.height * 0.6);
          // Auto-scale font down if text is too wide (to ensure single line)
          // pdf-lib's drawText with maxWidth wraps, but we want to avoid wrapping if possible for single-line fields
          // Especially for Address/City fields
          const textWidth = helveticaBold.widthOfTextAtSize(text, fontSize);
          if (textWidth > pos.width - 4) {
            // Reduce font size until it fits or hits minimum
            while (
              fontSize > 6 &&
              helveticaBold.widthOfTextAtSize(text, fontSize) > pos.width - 4
            ) {
              fontSize -= 0.5;
            }
          }

          page.drawText(text, {
            x: pos.x + 2,
            y: pos.y + pos.height * 0.3,
            size: fontSize,
            font: helveticaBold, // Use Bold for darker text
            color: rgb(0, 0.2, 0.6), // Blue color to match native form fields
          });
        }
        break;

      case "NUMBER":
        const formattedNum = formatNumber(value);
        if (formattedNum) {
          const fontSize = Math.min(10, pos.height * 0.6);
          page.drawText(formattedNum, {
            x: pos.x + 2,
            y: pos.y + pos.height * 0.3,
            size: fontSize,
            font: helveticaBold, // Use Bold for darker text
            color: rgb(0, 0.2, 0.6), // Blue color to match native form fields
          });
        }
        break;

      case "CHECKBOX":
        // Handle checkbox with multiple values (Single, Married, Head of Household)
        if (fieldData.values && Array.isArray(fieldData.values)) {
          // The checkboxes are laid out horizontally in the template area
          // Each checkbox is roughly equal width in the defined area
          const checkboxCount = fieldData.values.length;
          const checkboxSpacing = pos.width / checkboxCount;

          fieldData.values.forEach((cb, index) => {
            if (cb.checked) {
              // Draw checkmark in the checkbox area
              const cbX =
                pos.x + index * checkboxSpacing + checkboxSpacing / 2 - 2;
              page.drawText("X", {
                x: cbX,
                y: pos.y + pos.height * 0.3,
                size: 9,
                font: helveticaBold,
                color: rgb(0, 0.2, 0.6), // Blue color to match native form fields
              });
            }
          });
        }
        break;

      case "CHECKBOX_SINGLE":
        // Handle single checkbox - draws a checkmark if checked
        if (value === true || value === "true" || value === 1) {
          page.drawText("X", {
            x: pos.x + pos.width / 2 - 3, // Centers the X horizontally
            y: pos.y + pos.height / 2 - 3, // Centers the X vertically
            size: 10,
            font: helveticaBold,
            color: rgb(0, 0.2, 0.6), // Blue color to match native form fields
          });
        }
        break;

      case "SIGNATURE":
        if (value) {
          // Use fixed x,y coordinates for signature (old method) for correct positioning
          // These are absolute PDF points (72 points = 1 inch, page is 612x792 points)
          // The signature line is approximately 1.25 inches from the bottom of the page
          const signatureX = 110; // Start position for signature (after "Employee's signature" label)
          const signatureY = 92; // ~1.28 inches from bottom - right on the signature line
          const signatureWidth = 200;
          const signatureHeight = 20;

          // Check if it's a base64 image signature
          if (typeof value === "string" && value.startsWith("data:image")) {
            try {
              const imageData = value.split(",")[1];
              const imageBytes = decodeBase64ToBytes(imageData);
              let signatureImage;

              // Try PNG first, then JPEG
              try {
                signatureImage = await pdfDoc.embedPng(imageBytes);
              } catch {
                signatureImage = await pdfDoc.embedJpg(imageBytes);
              }

              const aspectRatio = signatureImage.width / signatureImage.height;
              let drawWidth = signatureWidth;
              let drawHeight = drawWidth / aspectRatio;

              if (drawHeight > signatureHeight) {
                drawHeight = signatureHeight;
                drawWidth = drawHeight * aspectRatio;
              }

              // Draw signature multiple times with slight offsets to simulate bold/thickness
              // This makes thin hand-drawn lines look more substantial
              const offsets = [
                { ox: 0, oy: 0 }, // Original
                { ox: 0.3, oy: 0 }, // Slight right
                { ox: 0, oy: 0.3 }, // Slight up
                { ox: 0.3, oy: 0.3 }, // Diagonal
              ];

              offsets.forEach((offset) => {
                page.drawImage(signatureImage, {
                  x: signatureX + offset.ox,
                  y: signatureY + offset.oy,
                  width: drawWidth,
                  height: drawHeight,
                });
              });
            } catch (e) {
              // Fallback to typed signature
              page.drawText(String(value), {
                x: signatureX,
                y: signatureY + 5,
                size: 12,
                font: helveticaBold,
                color: rgb(0, 0.2, 0.6), // Blue color to match native form fields
              });
            }
          } else {
            // Typed signature
            page.drawText(String(value), {
              x: signatureX,
              y: signatureY + 5,
              size: 12,
              font: helveticaBold,
              color: rgb(0, 0.2, 0.6), // Blue color to match native form fields
            });
          }
        }
        break;

      case "DATE":
        if (value) {
          page.drawText(String(value), {
            x: pos.x + 2,
            y: pos.y + pos.height * 0.3,
            size: 9,
            font: helveticaBold, // Bold
            color: rgb(0, 0.2, 0.6), // Blue color to match native form fields
          });
        }
        break;
    }
  }

  // Flatten the form to ensure consistent rendering across all platforms (Windows, Linux, macOS)
  // This converts any existing form fields to static content
  if (shouldFlatten) {
    try {
      const form = pdfDoc.getForm();
      form.flatten();
      console.log(
        "✅ Template overlay form flattened for cross-platform consistency",
      );
    } catch (flattenError) {
      // Form may not have any fields, which is fine
      console.log("Form flattening skipped (no form fields or already static)");
    }
  }

  // Save and return the filled PDF
  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

/**
 * Generate W-4 PDF using template fields and form data
 * This is the main function to call from FormW4.jsx
 * Uses NATIVE PDF form fields for perfect alignment
 * @param {Object} formData - The complete W-4 form data
 * @param {string} pdfUrl - URL to the blank W-4 PDF (e.g., '/fw4.pdf')
 * @param {boolean} useNativeFields - Use native PDF form fields (default: true)
 * @returns {Promise<Blob>} - The filled PDF as a Blob for download
 */
export async function generateW4PdfFromTemplate(
  formData,
  pdfUrl = "/fw4.pdf",
  useNativeFields = false, // Changed to false for cross-platform consistency (native fields fail on some servers)
  shouldFlatten = true, // Flatten form for cross-platform consistency (Windows/Linux/macOS)
) {
  // Import the field mapping function
  const { mapFormDataToTemplateFields } = await import("./w4FieldMappingExact.js");

  // Fetch the blank PDF template
  const response = await fetch(pdfUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch PDF template: ${response.statusText}`);
  }
  const templatePdfBytes = await response.arrayBuffer();

  // Map form data to template fields
  const fieldValues = mapFormDataToTemplateFields(formData, formData.signature);

  let filledPdfBytes;

  if (useNativeFields) {
    // Try native form fields first (perfect alignment)
    try {
      console.log("📋 Using native PDF form fields for perfect alignment...");
      console.log(
        `📋 Form flattening: ${shouldFlatten ? "enabled" : "disabled"} (for cross-platform consistency)`,
      );
      filledPdfBytes = await fillPdfWithNativeFields(
        fieldValues,
        new Uint8Array(templatePdfBytes),
        shouldFlatten,
      );
    } catch (e) {
      console.warn(
        "Native field filling failed, falling back to overlay method:",
        e,
      );
      filledPdfBytes = await fillPdfWithTemplateFields(
        fieldValues,
        new Uint8Array(templatePdfBytes),
        shouldFlatten,
      );
    }
  } else {
    // Use overlay method (original)
    filledPdfBytes = await fillPdfWithTemplateFields(
      fieldValues,
      new Uint8Array(templatePdfBytes),
      shouldFlatten,
    );
  }

  // Return as Blob
  return new Blob([filledPdfBytes], { type: "application/pdf" });
}
