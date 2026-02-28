// W-4 Field Mapping - IRS Form W-4 (2024/2026)
// Complete with all tax constants, calculation helpers, and PDF coordinates

// ── 2026 Tax Year Constants ──
export const TAX_YEAR = 2026;
export const CHILD_TAX_CREDIT = 2000;
export const OTHER_DEPENDENT_CREDIT = 500;

export const STANDARD_DEDUCTIONS: Record<string, number> = {
  married_jointly: 32200,
  head_of_household: 24150,
  single: 16100,
};

export const PHASE_OUT_THRESHOLDS: Record<string, number> = {
  married_jointly: 768700,
  single: 640600,
  head_of_household: 640600,
};

// ── US States ──
export const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN",
  "IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH",
  "NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT",
  "VT","VA","WA","WV","WI","WY",
];

// ── Multiple Jobs Table (2026) ──
const MJ_TABLE_MARRIED: { min: number; max: number; cols: number[] }[] = [
  { min: 0,      max: 14999,  cols: [0,0,380,1260,1410,1540,1680,1870,2050,2220,2390,2560] },
  { min: 15000,  max: 29999,  cols: [380,380,1260,2140,2290,2420,2560,2750,2930,3100,3270,3440] },
  { min: 30000,  max: 49999,  cols: [1260,1260,2140,3020,3170,3300,3440,3630,3810,3980,4150,4320] },
  { min: 50000,  max: 69999,  cols: [1410,1410,2290,3170,3320,3450,3590,3780,3960,4130,4300,4470] },
  { min: 70000,  max: 89999,  cols: [1540,1540,2420,3300,3450,3580,3720,3910,4090,4260,4430,4600] },
  { min: 90000,  max: 109999, cols: [1680,1680,2560,3440,3590,3720,3860,4050,4230,4400,4570,4740] },
  { min: 110000, max: 149999, cols: [1870,1870,2750,3630,3780,3910,4050,4240,4420,4590,4760,4930] },
  { min: 150000, max: 199999, cols: [2050,2050,2930,3810,3960,4090,4230,4420,4600,4770,4940,5110] },
  { min: 200000, max: 274999, cols: [2220,2220,3100,3980,4130,4260,4400,4590,4770,4940,5110,5280] },
  { min: 275000, max: 374999, cols: [2390,2390,3270,4150,4300,4430,4570,4760,4940,5110,5280,5450] },
  { min: 375000, max: 474999, cols: [2560,2560,3440,4320,4470,4600,4740,4930,5110,5280,5450,5620] },
  { min: 475000, max: Infinity, cols: [2730,2730,3610,4490,4640,4770,4910,5100,5280,5450,5620,5790] },
];
const MJ_LOWER_MARRIED = [
  { min: 0, max: 14999 },{ min: 15000, max: 29999 },{ min: 30000, max: 49999 },
  { min: 50000, max: 69999 },{ min: 70000, max: 89999 },{ min: 90000, max: 109999 },
  { min: 110000, max: 149999 },{ min: 150000, max: 199999 },{ min: 200000, max: 274999 },
  { min: 275000, max: 374999 },{ min: 375000, max: 474999 },{ min: 475000, max: Infinity },
];

const MJ_TABLE_SINGLE: { min: number; max: number; cols: number[] }[] = [
  { min: 0,      max: 14999, cols: [660,1080,1360,1480,1610,1750,1940,2120,2290] },
  { min: 15000,  max: 24999, cols: [1080,1500,1780,1900,2030,2170,2360,2540,2710] },
  { min: 25000,  max: 34999, cols: [1360,1780,2060,2180,2310,2450,2640,2820,2990] },
  { min: 35000,  max: 44999, cols: [1480,1900,2180,2300,2430,2570,2760,2940,3110] },
  { min: 45000,  max: 54999, cols: [1610,2030,2310,2430,2560,2700,2890,3070,3240] },
  { min: 55000,  max: 74999, cols: [1750,2170,2450,2570,2700,2840,3030,3210,3380] },
  { min: 75000,  max: 99999, cols: [1940,2360,2640,2760,2890,3030,3220,3400,3570] },
  { min: 100000, max: 149999, cols: [2120,2540,2820,2940,3070,3210,3400,3580,3750] },
  { min: 150000, max: Infinity, cols: [2290,2710,2990,3110,3240,3380,3570,3750,3920] },
];
const MJ_LOWER_SINGLE = [
  { min: 0, max: 14999 },{ min: 15000, max: 24999 },{ min: 25000, max: 34999 },
  { min: 35000, max: 44999 },{ min: 45000, max: 54999 },{ min: 55000, max: 74999 },
  { min: 75000, max: 99999 },{ min: 100000, max: 149999 },{ min: 150000, max: Infinity },
];

export function lookupMultipleJobsTable(filingStatus: string, higherWages: number, lowerWages: number): number {
  const isMarried = filingStatus === 'married_jointly';
  const table = isMarried ? MJ_TABLE_MARRIED : MJ_TABLE_SINGLE;
  const lowerRanges = isMarried ? MJ_LOWER_MARRIED : MJ_LOWER_SINGLE;

  // Auto-swap so higher is actually higher
  let h = higherWages, l = lowerWages;
  if (l > h) { h = lowerWages; l = higherWages; }

  const row = table.find(r => h >= r.min && h <= r.max);
  if (!row) return 0;
  const colIdx = lowerRanges.findIndex(r => l >= r.min && l <= r.max);
  if (colIdx === -1) return 0;
  return row.cols[colIdx] ?? 0;
}

// ── Deductions Worksheet Calculation ──
export function calculateDeductionsWorksheet(dw: DeductionsWorksheet, filingStatus: string) {
  const isMarried = filingStatus === 'married_jointly';
  const line2 = (dw.qualifiedTips || 0) + (dw.qualifiedOvertime || 0) + (dw.vehicleLoanInterest || 0);
  const line4 = (dw.seniorDeduction || 0) + (dw.spouseSeniorDeduction || 0);
  const line5 = dw.otherAdjustments || 0;
  const line7 = (dw.medicalExpenses || 0) + (dw.stateLocalTaxes || 0) + (dw.mortgageInterest || 0) + (dw.charitableGifts || 0) + (dw.otherItemized || 0);
  const line8a = dw.totalIncome || 0;
  const line8b = Math.max(0, line8a - line4);
  const line9 = PHASE_OUT_THRESHOLDS[filingStatus] || PHASE_OUT_THRESHOLDS.single;
  const line10 = line9 > line8b ? line7 : Math.round(line7 * 0.94);
  const line11 = STANDARD_DEDUCTIONS[filingStatus] || STANDARD_DEDUCTIONS.single;
  const charitableLimit = isMarried ? 2000 : 1000;
  const line12 = Math.min(dw.charitableCashStandard || 0, charitableLimit);
  const line13 = line11 + line12;
  const line14 = line10 > line13 ? line10 - line11 : line12;
  const line15 = line2 + line4 + line5 + line14;
  return { line2, line4, line5, line7, line8a, line8b, line9, line10, line11, line12, line13, line14, line15 };
}

// ── Interfaces ──
export interface DeductionsWorksheet {
  qualifiedTips: number;
  qualifiedOvertime: number;
  vehicleLoanInterest: number;
  isSenior: boolean;
  seniorDeduction: number;
  isSpouseSenior: boolean;
  spouseSeniorDeduction: number;
  otherAdjustments: number;
  medicalExpenses: number;
  stateLocalTaxes: number;
  mortgageInterest: number;
  charitableGifts: number;
  otherItemized: number;
  totalIncome: number;
  charitableCashStandard: number;
}

export interface W4FormData {
  firstName: string;
  middleInitial: string;
  lastName: string;
  ssn: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  filingStatus: 'single' | 'married_jointly' | 'head_of_household' | '';
  claimExempt: boolean;

  step2: {
    twoJobsOnly: boolean;
    hasThreeOrMoreJobs: boolean;
    higherJobWages: number;
    lowerJobWages: number;
    job1Wages: number;
    job2Wages: number;
    job3Wages: number;
    payPeriodsPerYear: number;
  };

  step3: {
    childrenUnder17: number;
    otherDependents: number;
    otherCredits: number;
  };

  step4: {
    otherIncome: number;
    deductions: number;
    extraWithholding: number;
    deductionsWorksheet: DeductionsWorksheet;
  };

  signature: {
    typedName: string;
    signedAt: string;
    signatureImage?: string; // base64 PNG from canvas drawing
  };
}

// ── PDF Field Coordinates ──
export const W4_PDF_FIELDS = {
  firstName:                { x: 36,  y: 632, fontSize: 11 },
  lastName:                 { x: 240, y: 632, fontSize: 11 },
  ssn:                      { x: 432, y: 632, fontSize: 11 },
  addressLine1:             { x: 36,  y: 598, fontSize: 11 },
  addressLine2:             { x: 36,  y: 564, fontSize: 11 },
  filingStatus_single:      { x: 52,  y: 518, size: 12 },
  filingStatus_married:     { x: 52,  y: 502, size: 12 },
  filingStatus_hoh:         { x: 52,  y: 486, size: 12 },
  twoJobsCheckbox:          { x: 52,  y: 430, size: 12 },
  step3_childrenAmount:     { x: 500, y: 396, fontSize: 10 },
  step3_otherDepsAmount:    { x: 500, y: 384, fontSize: 10 },
  step3_totalCredits:       { x: 500, y: 372, fontSize: 10 },
  step4a_otherIncome:       { x: 500, y: 318, fontSize: 10 },
  step4b_deductions:        { x: 500, y: 288, fontSize: 10 },
  step4c_extraWithholding:  { x: 500, y: 258, fontSize: 10 },
  signature:                { x: 72,  y: 188, fontSize: 14 },
  dateSigned:               { x: 432, y: 188, fontSize: 12 },
};

// ── Helpers ──
export function formatCurrency(val: number | string): string {
  const num = typeof val === 'string' ? parseFloat(val) : val;
  if (isNaN(num) || num === 0) return '';
  return num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export function formatSSN(ssn: string): string {
  const digits = ssn.replace(/\D/g, '');
  if (digits.length === 9) return `${digits.slice(0,3)}-${digits.slice(3,5)}-${digits.slice(5)}`;
  return ssn;
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return '';
  return `${String(d.getMonth()+1).padStart(2,'0')}/${String(d.getDate()).padStart(2,'0')}/${d.getFullYear()}`;
}

export function calculateW4Values(data: W4FormData) {
  const childrenAmount = (data.step3.childrenUnder17 || 0) * CHILD_TAX_CREDIT;
  const otherDepsAmount = (data.step3.otherDependents || 0) * OTHER_DEPENDENT_CREDIT;
  const otherCreditsAmount = data.step3.otherCredits || 0;
  const totalCredits = childrenAmount + otherDepsAmount + otherCreditsAmount;
  return { childrenAmount, otherDepsAmount, otherCreditsAmount, totalCredits };
}

export function getInitialFormData(): W4FormData {
  return {
    firstName: '', middleInitial: '', lastName: '', ssn: '',
    address: '', city: '', state: '', zipCode: '',
    filingStatus: '', claimExempt: false,
    step2: { twoJobsOnly: false, hasThreeOrMoreJobs: false, higherJobWages: 0, lowerJobWages: 0, job1Wages: 0, job2Wages: 0, job3Wages: 0, payPeriodsPerYear: 26 },
    step3: { childrenUnder17: 0, otherDependents: 0, otherCredits: 0 },
    step4: { otherIncome: 0, deductions: 0, extraWithholding: 0, deductionsWorksheet: { qualifiedTips: 0, qualifiedOvertime: 0, vehicleLoanInterest: 0, isSenior: false, seniorDeduction: 0, isSpouseSenior: false, spouseSeniorDeduction: 0, otherAdjustments: 0, medicalExpenses: 0, stateLocalTaxes: 0, mortgageInterest: 0, charitableGifts: 0, otherItemized: 0, totalIncome: 0, charitableCashStandard: 0 } },
    signature: { typedName: '', signedAt: new Date().toISOString() },
  };
}
