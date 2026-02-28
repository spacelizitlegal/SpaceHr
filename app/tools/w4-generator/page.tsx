"use client";

import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Check, ChevronRight, ChevronDown, Download, FileText, Loader2,
  User, HelpCircle, ShieldAlert, ArrowLeft, Lock, Users, Baby,
  Calculator, AlertTriangle, Info, Send
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  W4FormData, getInitialFormData, calculateW4Values, formatCurrency, formatSSN, formatDate,
  lookupMultipleJobsTable, calculateDeductionsWorksheet,
  US_STATES, TAX_YEAR, CHILD_TAX_CREDIT, OTHER_DEPENDENT_CREDIT, STANDARD_DEDUCTIONS,
} from "@/lib/w4FieldMapping";

// ── Filing Status Options (matches original) ──
const W4_FILING_STATUS = [
  { value: "single", label: "Single or Married filing separately", description: "Choose this if you are single, divorced, or married but file a separate tax return" },
  { value: "married_jointly", label: "Married filing jointly or Qualifying surviving spouse", description: "Choose this if you are married and file a joint return with your spouse" },
  { value: "head_of_household", label: "Head of household", description: "Check only if you're unmarried and pay more than half the costs of keeping up a home for yourself and a qualifying individual" },
];

const PAY_PERIODS = [
  { value: 52, label: "Weekly" },
  { value: 26, label: "Every other week (Bi-weekly)" },
  { value: 24, label: "Twice a month (Semi-monthly)" },
  { value: 12, label: "Monthly" },
];

// ── Reusable Components (replacing shadcn/ui) ──
function FormField({ label, required, error, children, helpText }: { label: string; required?: boolean; error?: string; children: React.ReactNode; helpText?: string }) {
  return (
    <div className="space-y-1">
      <label className="flex items-center gap-1 text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {helpText && <p className="text-xs text-gray-500">{helpText}</p>}
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

const inputCls = "w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900 placeholder:text-gray-400";
const btnPrimary = "inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm";
const btnOutline = "inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors";
const btnGreen = "inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors shadow-sm";

function CurrencyInput({ value, onChange, placeholder, disabled }: { value: number; onChange: (v: number) => void; placeholder?: string; disabled?: boolean }) {
  const display = value ? value.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 }) : "";
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
      <input type="text" className={inputCls + " pl-7"} value={display} placeholder={placeholder || "$0"} disabled={disabled}
        onChange={e => { const raw = e.target.value.replace(/[^0-9.]/g, ""); onChange(raw ? parseFloat(raw) : 0); }}
      />
    </div>
  );
}

// ── Signature Pad Component (Draw or Type) ──
function SignaturePad({ typedName, signatureImage, onTypedNameChange, onSignatureImageChange }: {
  typedName: string; signatureImage?: string;
  onTypedNameChange: (name: string) => void; onSignatureImageChange: (image: string | undefined) => void;
}) {
  const [mode, setMode] = useState<"type" | "draw">("type");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#1e293b";
    ctx.lineWidth = 2;
  }, [mode]);

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    if ("touches" in e) return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
    return { x: (e as React.MouseEvent).clientX - rect.left, y: (e as React.MouseEvent).clientY - rect.top };
  };
  const startDraw = (e: React.MouseEvent | React.TouchEvent) => { e.preventDefault(); const ctx = canvasRef.current?.getContext("2d"); if (!ctx) return; setIsDrawing(true); setHasDrawn(true); const p = getPos(e); ctx.beginPath(); ctx.moveTo(p.x, p.y); };
  const draw = (e: React.MouseEvent | React.TouchEvent) => { e.preventDefault(); if (!isDrawing) return; const ctx = canvasRef.current?.getContext("2d"); if (!ctx) return; const p = getPos(e); ctx.lineTo(p.x, p.y); ctx.stroke(); };
  const endDraw = () => { setIsDrawing(false); if (canvasRef.current && hasDrawn) onSignatureImageChange(canvasRef.current.toDataURL("image/png")); };
  const clearCanvas = () => { const c = canvasRef.current; if (!c) return; c.getContext("2d")?.clearRect(0, 0, c.width, c.height); setHasDrawn(false); onSignatureImageChange(undefined); };

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-gray-700 flex items-center gap-1">Electronic Signature <span className="text-red-500">*</span></label>
      <div className="flex gap-1 bg-gray-100 rounded-lg p-1 w-fit">
        <button type="button" onClick={() => { setMode("type"); onSignatureImageChange(undefined); }} className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${mode === "type" ? "bg-white text-gray-800 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>Type</button>
        <button type="button" onClick={() => { setMode("draw"); onTypedNameChange(""); }} className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${mode === "draw" ? "bg-white text-gray-800 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>Draw</button>
      </div>
      {mode === "type" ? (
        <div>
          <input type="text" placeholder="Type your full legal name" className={inputCls + " font-serif text-lg py-3 italic"} value={typedName} onChange={e => onTypedNameChange(e.target.value)} />
          {typedName && <div className="mt-3 p-4 bg-white border border-gray-200 rounded-lg"><p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Preview</p><p className="font-serif text-2xl italic text-gray-800">{typedName}</p></div>}
        </div>
      ) : (
        <div>
          <div className="relative border-2 border-dashed border-gray-300 rounded-lg bg-white overflow-hidden" style={{ touchAction: "none" }}>
            <canvas ref={canvasRef} className="w-full cursor-crosshair" style={{ height: "120px" }} onMouseDown={startDraw} onMouseMove={draw} onMouseUp={endDraw} onMouseLeave={endDraw} onTouchStart={startDraw} onTouchMove={draw} onTouchEnd={endDraw} />
            {!hasDrawn && <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><p className="text-gray-300 text-sm">Draw your signature here</p></div>}
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-xs text-gray-400">Use your mouse or finger to draw</p>
            <button type="button" onClick={clearCanvas} className="text-xs text-red-500 hover:text-red-700 font-medium">Clear</button>
          </div>
        </div>
      )}
      <p className="text-xs text-gray-400">By signing, you agree this constitutes your electronic signature.</p>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ════════════════════════════════════════════════════════════════
export default function W4GeneratorPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<W4FormData>(getInitialFormData());
  const [showMJWorksheet, setShowMJWorksheet] = useState(false);
  const [showDeductionsHelp, setShowDeductionsHelp] = useState(false);
  const [hasMultipleJobs, setHasMultipleJobs] = useState(false);

  const isExempt = formData.claimExempt;
  const maxStep = isExempt ? 2 : 5; // 1=Personal, 2=MultipleJobs, 3=Dependents, 4=Adjustments, 5=Sign (exempt skips 2-4→sign)
  const stepLabels = isExempt
    ? [{ n: 1, t: "Personal Info", req: true }, { n: 2, t: "Sign & Submit", req: true }]
    : [{ n: 1, t: "Personal Info", req: true }, { n: 2, t: "Multiple Jobs", req: false }, { n: 3, t: "Dependents", req: false }, { n: 4, t: "Adjustments", req: false }, { n: 5, t: "Sign & Submit", req: true }];

  // Calculations
  const credits = useMemo(() => calculateW4Values(formData), [formData.step3]);
  const dwCalc = useMemo(() => calculateDeductionsWorksheet(formData.step4.deductionsWorksheet, formData.filingStatus || "single"), [formData.step4.deductionsWorksheet, formData.filingStatus]);
  const mjCalc = useMemo(() => {
    const s2 = formData.step2;
    if (s2.hasThreeOrMoreJobs) {
      const sorted = [s2.job1Wages, s2.job2Wages, s2.job3Wages].sort((a, b) => b - a);
      const line2a = lookupMultipleJobsTable(formData.filingStatus || "single", sorted[0], sorted[1]);
      const line2b = line2a + sorted[0] + sorted[1];
      const line2c = lookupMultipleJobsTable(formData.filingStatus || "single", line2b, sorted[2]);
      return { line1: 0, line2a, line2b, line2c, line3: line2c };
    }
    const line1 = lookupMultipleJobsTable(formData.filingStatus || "single", s2.higherJobWages, s2.lowerJobWages);
    return { line1, line2a: 0, line2b: 0, line2c: 0, line3: line1 };
  }, [formData.step2, formData.filingStatus]);
  const mjLine4 = useMemo(() => { const pp = formData.step2.payPeriodsPerYear || 26; return pp > 0 ? Math.round(mjCalc.line3 / pp) : 0; }, [mjCalc.line3, formData.step2.payPeriodsPerYear]);

  // Helpers
  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => {
      const parts = field.split(".");
      if (parts.length === 1) return { ...prev, [field]: value };
      if (parts.length === 2) return { ...prev, [parts[0]]: { ...prev[parts[0]], [parts[1]]: value } };
      if (parts.length === 3) return { ...prev, [parts[0]]: { ...prev[parts[0]], [parts[1]]: { ...prev[parts[0]][parts[1]], [parts[2]]: value } } };
      return prev;
    });
  };
  const handleSSNChange = (value: string) => { const d = value.replace(/\D/g, "").slice(0, 9); let f = d; if (d.length > 5) f = `${d.slice(0,3)}-${d.slice(3,5)}-${d.slice(5)}`; else if (d.length > 3) f = `${d.slice(0,3)}-${d.slice(3)}`; handleChange("ssn", f); };

  const continueToLeadCapture = () => {
    if (!formData.firstName || !formData.lastName || !formData.ssn || (!formData.signature.typedName && !formData.signature.signatureImage)) {
      alert("Please fill in your first name, last name, SSN, and sign the form."); return;
    }
    try {
      const payload = { ...formData, signature: { ...formData.signature, signedAt: new Date().toISOString() } };
      sessionStorage.setItem("w4PendingFormData", JSON.stringify(payload));
      router.push("/tools/w4-generator/lead");
    } catch {
      alert("Could not continue. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-6">

          {/* Header (matches original) */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <FileText className="h-6 w-6 text-blue-600" />
                Form W-4: Employee&apos;s Withholding Certificate
              </h1>
              <p className="text-gray-600 mt-1">Department of the Treasury • Internal Revenue Service • {TAX_YEAR}</p>
            </div>
          </div>

          {/* Step Progress (matches original) */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
            <div className="flex items-center justify-between">
              {stepLabels.map((step, index) => (
                <React.Fragment key={step.n}>
                  <button onClick={() => setCurrentStep(step.n)} className={`flex flex-col items-center gap-2 ${currentStep === step.n ? "text-blue-600" : "text-gray-400"}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors text-sm font-bold ${
                      currentStep === step.n ? "border-blue-600 bg-blue-100 text-blue-600" : currentStep > step.n ? "border-green-600 bg-green-100 text-green-600" : "border-gray-300"
                    }`}>{currentStep > step.n ? <Check className="h-5 w-5 text-green-600" /> : step.n}</div>
                    <span className="text-xs font-medium">{step.t}</span>
                    {!step.req && <span className="text-xs text-gray-400">(Optional)</span>}
                  </button>
                  {index < stepLabels.length - 1 && <div className={`flex-1 h-0.5 mx-2 ${currentStep > step.n ? "bg-green-500" : "bg-gray-200"}`} />}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Instructions (matches original) */}
          <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <Info className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
            <div><p className="text-sm font-semibold text-blue-800">Instructions</p><p className="text-sm text-blue-700"><strong>Step 1</strong> is required. <strong>Steps 2-4</strong> are optional but will help ensure that your federal income tax withholding matches your tax liability.</p></div>
          </div>

          {/* ════════════ STEP 1: Personal Info ════════════ */}
          {currentStep === 1 && (
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center"><User className="h-4 w-4 text-blue-600" /></div>
                  <div><h3 className="text-base font-semibold text-gray-900">Step 1: Enter Personal Information</h3><p className="text-sm text-gray-500">Required for all employees</p></div>
                </div>
              </div>
              <div className="p-6 space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <FormField label="First Name" required><input className={inputCls} value={formData.firstName} onChange={e => handleChange("firstName", e.target.value)} placeholder="First name" /></FormField>
                  <FormField label="Middle Initial"><input className={inputCls + " w-20"} maxLength={2} value={formData.middleInitial} onChange={e => handleChange("middleInitial", e.target.value.toUpperCase())} placeholder="M.I." /></FormField>
                  <FormField label="Last Name" required><input className={inputCls} value={formData.lastName} onChange={e => handleChange("lastName", e.target.value)} placeholder="Last name" /></FormField>
                  <FormField label="Social Security Number" required><input className={inputCls} maxLength={11} value={formData.ssn} onChange={e => handleSSNChange(e.target.value)} placeholder="XXX-XX-XXXX" /></FormField>
                </div>
                {/* Address */}
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-gray-700">Address</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField label="Street Address" required><input className={inputCls} value={formData.address} onChange={e => handleChange("address", e.target.value)} placeholder="Street number and name" /></FormField>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="md:col-span-2"><FormField label="City" required><input className={inputCls} value={formData.city} onChange={e => handleChange("city", e.target.value)} placeholder="City" /></FormField></div>
                    <FormField label="State" required>
                      <select className={inputCls + " bg-white"} value={formData.state} onChange={e => handleChange("state", e.target.value)}>
                        <option value="">Select state</option>
                        {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </FormField>
                    <FormField label="ZIP Code" required><input className={inputCls} value={formData.zipCode} onChange={e => { const v = e.target.value.replace(/\D/g, "").slice(0, 9); handleChange("zipCode", v.length > 5 ? `${v.slice(0,5)}-${v.slice(5)}` : v); }} placeholder="12345" /></FormField>
                  </div>
                </div>
                {/* Filing Status (RadioGroup style - matches original) */}
                <div className="space-y-3">
                  <label className="flex items-center gap-1 text-sm font-medium text-gray-700">Filing Status <span className="text-red-500">*</span></label>
                  <p className="text-xs text-gray-500">Check only one box. Your withholding depends on your filing status.</p>
                  <div className="space-y-3">
                    {W4_FILING_STATUS.map(status => (
                      <div key={status.value} onClick={() => handleChange("filingStatus", status.value)}
                        className={`flex items-start space-x-3 p-4 rounded-lg border transition-colors cursor-pointer ${formData.filingStatus === status.value ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"}`}>
                        <div className={`mt-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${formData.filingStatus === status.value ? "border-blue-500" : "border-gray-300"}`}>
                          {formData.filingStatus === status.value && <div className="w-2 h-2 rounded-full bg-blue-500" />}
                        </div>
                        <div className="flex-1"><span className="font-medium text-sm text-gray-900">{status.label}</span><p className="text-xs text-gray-500 mt-1">{status.description}</p></div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Exemption */}
                <div className="border rounded-lg p-4 space-y-3 bg-red-50/30 text-gray-900">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-red-700 border border-red-300 rounded px-2 py-0.5">Exemption</span>
                    <span className="font-medium text-sm">Exemption from withholding</span>
                  </div>
                  <p className="text-sm text-gray-600">You may claim exemption from withholding for {TAX_YEAR} if you meet <strong>both</strong> of the following conditions: you had no federal income tax liability in {TAX_YEAR - 1} and you expect to have no federal income tax liability in {TAX_YEAR}.</p>
                  <label className="flex items-start space-x-3 p-3 border rounded-lg bg-white cursor-pointer text-gray-900">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-gray-300 text-red-600" checked={formData.claimExempt} onChange={e => handleChange("claimExempt", e.target.checked)} />
                    <span className="text-sm text-gray-900">I claim exemption from withholding for {TAX_YEAR}, and I certify that I meet <strong className="text-gray-900">both</strong> of the conditions above.</span>
                  </label>
                  {formData.claimExempt && (
                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 shrink-0" />
                      <p className="text-sm text-yellow-800"><strong>Important:</strong> If you claim exemption, &quot;Exempt&quot; will be written on line 4(c). You must file a new W-4 by February 15, {TAX_YEAR + 1}.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ════════════ STEP 2: Multiple Jobs ════════════ */}
          {currentStep === 2 && !isExempt && (
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center"><Users className="h-4 w-4 text-orange-600" /></div>
                  <div><h3 className="text-base font-semibold text-gray-900">Step 2: Multiple Jobs or Spouse Works</h3><p className="text-sm text-gray-500">Complete this step ONLY if you have multiple jobs or are married filing jointly and your spouse works.</p></div>
                </div>
              </div>
              <div className="p-6 space-y-6">
                {/* Main Toggle (matches original Yes/No buttons) */}
                <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                  <div><p className="text-base font-medium">Do you have multiple jobs or a working spouse?</p><p className="text-sm text-gray-500">Withholding is most accurate if you do this on the W-4 for the highest paying job.</p></div>
                  <div className="flex gap-2">
                    <button onClick={() => setHasMultipleJobs(true)} className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${hasMultipleJobs ? "bg-blue-600 text-white" : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"}`}>Yes</button>
                    <button onClick={() => { setHasMultipleJobs(false); handleChange("step2.twoJobsOnly", false); }} className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${!hasMultipleJobs ? "bg-gray-200 text-gray-800" : "border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"}`}>No</button>
                  </div>
                </div>
                {hasMultipleJobs && (
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-gray-900">Select ONLY ONE of these options:</p>
                    {/* Option 1: Checkbox */}
                    <div onClick={() => handleChange("step2.twoJobsOnly", !formData.step2.twoJobsOnly)}
                      className={`p-4 border rounded-lg transition-colors cursor-pointer ${formData.step2.twoJobsOnly ? "border-blue-500 bg-blue-50/20" : "hover:border-gray-300"}`}>
                      <div className="flex items-start space-x-3">
                        <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600" checked={formData.step2.twoJobsOnly} readOnly />
                        <div><p className="font-medium text-sm text-gray-900">Option 1: Check this box if there are only two jobs total</p><p className="text-sm text-gray-500">Use this if the pay at both jobs is similar. <strong>Do not use this if you used the estimator or worksheet.</strong></p></div>
                      </div>
                    </div>
                    {/* Option 2: Estimator */}
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2"><p className="font-medium text-sm text-gray-900">Option 2: Use the IRS Estimator (Most Accurate)</p><span className="text-xs font-medium text-gray-600 border border-gray-300 rounded px-2 py-0.5">Recommended</span></div>
                      <p className="text-sm text-gray-500 mt-1">Go to <a href="https://www.irs.gov/W4app" target="_blank" className="text-blue-600 underline">www.irs.gov/W4app</a>, then enter the result in Step 4(c) below.</p>
                    </div>
                    {/* Option 3: Worksheet */}
                    <div className="border rounded-lg overflow-hidden">
                      <button type="button" className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left" onClick={() => setShowMJWorksheet(!showMJWorksheet)}>
                        <div><span className="font-medium text-sm block text-gray-900">Option 3: Use the Multiple Jobs Worksheet</span><span className="text-sm text-gray-500">Use this if you can&apos;t use the estimator and have privacy concerns</span></div>
                        <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${showMJWorksheet ? "rotate-90" : ""}`} />
                      </button>
                      {showMJWorksheet && (
                        <div className="p-4 space-y-6 border-t bg-white">
                          <div className="text-sm font-medium text-gray-900 border-b pb-2">Multiple Jobs Worksheet (Page 3 of Form W-4)</div>
                          {/* Job count */}
                          <div className="space-y-3">
                            <p className="text-sm font-semibold text-gray-900">How many total jobs?</p>
                            <div className="flex gap-6">
                              <label className="flex items-center gap-2 text-sm font-medium text-gray-800 cursor-pointer"><input type="radio" name="jobCount" className="w-4 h-4 text-blue-600 border-gray-400" checked={!formData.step2.hasThreeOrMoreJobs} onChange={() => handleChange("step2.hasThreeOrMoreJobs", false)} /> Two jobs</label>
                              <label className="flex items-center gap-2 text-sm font-medium text-gray-800 cursor-pointer"><input type="radio" name="jobCount" className="w-4 h-4 text-blue-600 border-gray-400" checked={formData.step2.hasThreeOrMoreJobs} onChange={() => handleChange("step2.hasThreeOrMoreJobs", true)} /> Three or more jobs</label>
                            </div>
                          </div>
                          {!formData.step2.hasThreeOrMoreJobs ? (
                            <div className="space-y-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <p className="text-xs font-semibold uppercase text-blue-700">Line 1: Two Jobs Calculation</p>
                              <div className="grid grid-cols-2 gap-4">
                                <div><label className="text-xs text-gray-600 mb-1.5 block">Higher paying job annual wages</label><CurrencyInput value={formData.step2.higherJobWages} onChange={v => handleChange("step2.higherJobWages", v)} /></div>
                                <div><label className="text-xs text-gray-600 mb-1.5 block">Lower paying job annual wages</label><CurrencyInput value={formData.step2.lowerJobWages} onChange={v => handleChange("step2.lowerJobWages", v)} /></div>
                              </div>
                              <div className="flex justify-between items-center pt-2 border-t border-blue-200"><span className="text-xs font-medium text-blue-700">Line 1 (Table lookup result):</span><span className="text-lg font-bold text-blue-700">${mjCalc.line1.toLocaleString()}</span></div>
                            </div>
                          ) : (
                            <div className="space-y-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                              <p className="text-xs font-semibold uppercase text-purple-700">Lines 2a-2c: Three or More Jobs Calculation</p>
                              <div className="grid grid-cols-3 gap-4">
                                <div><label className="text-xs text-gray-600 mb-1.5 block">Job 1 (Highest)</label><CurrencyInput value={formData.step2.job1Wages} onChange={v => handleChange("step2.job1Wages", v)} /></div>
                                <div><label className="text-xs text-gray-600 mb-1.5 block">Job 2 (Second)</label><CurrencyInput value={formData.step2.job2Wages} onChange={v => handleChange("step2.job2Wages", v)} /></div>
                                <div><label className="text-xs text-gray-600 mb-1.5 block">Job 3 (Third)</label><CurrencyInput value={formData.step2.job3Wages} onChange={v => handleChange("step2.job3Wages", v)} /></div>
                              </div>
                              <div className="grid grid-cols-3 gap-2 text-xs pt-2 border-t border-purple-200">
                                <div className="bg-white p-2 rounded"><span className="text-purple-600">2a. Table lookup (Jobs 1 & 2):</span><div className="font-bold text-purple-700">${mjCalc.line2a.toLocaleString()}</div></div>
                                <div className="bg-white p-2 rounded"><span className="text-purple-600">2b. Sum + Table lookup:</span><div className="font-bold text-purple-700">${mjCalc.line2b.toLocaleString()}</div></div>
                                <div className="bg-white p-2 rounded"><span className="text-purple-600">2c. Total (2a + 2b):</span><div className="font-bold text-purple-700">${mjCalc.line2c.toLocaleString()}</div></div>
                              </div>
                            </div>
                          )}
                          {/* Pay periods */}
                          <div className="space-y-2 p-4 bg-gray-100 rounded-lg">
                            <p className="text-xs font-semibold uppercase text-gray-600">Line 3: Pay Periods Per Year</p>
                            <select className={inputCls + " bg-white"} value={formData.step2.payPeriodsPerYear} onChange={e => handleChange("step2.payPeriodsPerYear", parseInt(e.target.value))}>
                              {PAY_PERIODS.map(pp => <option key={pp.value} value={pp.value}>{pp.label} ({pp.value} periods)</option>)}
                            </select>
                          </div>
                          {/* Result */}
                          <div className="p-4 bg-green-100 rounded-lg border-2 border-green-300">
                            <p className="text-xs font-semibold uppercase text-green-700 mb-2">Line 4: Extra Withholding Per Pay Period</p>
                            <p className="text-xs text-green-600 mb-3">= (Line 1 or Line 2c) ÷ Line 3. Enter this in Step 4(c).</p>
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium text-green-900">Calculation: ${mjCalc.line3.toLocaleString()} ÷ {formData.step2.payPeriodsPerYear || 26}</span>
                              <div className="flex items-center gap-3">
                                <span className="text-2xl font-bold text-green-700">${mjLine4.toLocaleString()}</span>
                                <button onClick={() => handleChange("step4.extraWithholding", mjLine4)} disabled={mjLine4 === 0} className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-md hover:bg-blue-700 disabled:opacity-50">Apply to 4(c)</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ════════════ STEP 3: Dependents ════════════ */}
          {currentStep === 3 && !isExempt && (
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center"><Baby className="h-4 w-4 text-green-600" /></div>
                  <div><h3 className="text-base font-semibold text-gray-900">Step 3: Dependents and Other Credits</h3><p className="text-sm text-gray-500">Complete this step if your total income is $200,000 or less ($400,000 or less if married filing jointly).</p></div>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2"><label className="text-sm font-medium text-gray-700">Number of children under age 17</label>
                    <div className="flex items-center gap-3"><input type="number" min="0" className={inputCls + " w-24"} value={formData.step3.childrenUnder17 || ""} onChange={e => handleChange("step3.childrenUnder17", parseInt(e.target.value) || 0)} placeholder="0" /><span className="text-xs text-gray-500">x ${CHILD_TAX_CREDIT.toLocaleString()} = <strong>${credits.childrenAmount.toLocaleString()}</strong></span></div>
                  </div>
                  <div className="space-y-2"><label className="text-sm font-medium text-gray-700">Number of other dependents</label>
                    <div className="flex items-center gap-3"><input type="number" min="0" className={inputCls + " w-24"} value={formData.step3.otherDependents || ""} onChange={e => handleChange("step3.otherDependents", parseInt(e.target.value) || 0)} placeholder="0" /><span className="text-xs text-gray-500">x ${OTHER_DEPENDENT_CREDIT} = <strong>${credits.otherDepsAmount.toLocaleString()}</strong></span></div>
                  </div>
                </div>
                <div className="pt-2"><label className="text-sm font-medium text-gray-700 mb-2 block">Other Credits (Optional)</label><CurrencyInput value={formData.step3.otherCredits} onChange={v => handleChange("step3.otherCredits", v)} /><p className="text-xs text-gray-500 mt-1">Enter other credits you expect to claim (e.g., education, foreign tax credit)</p></div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded border border-green-100"><span className="text-sm font-medium text-green-900">Total Step 3 Credits</span><span className="text-lg font-bold text-green-700">${credits.totalCredits.toLocaleString()}</span></div>
              </div>
            </div>
          )}

          {/* ════════════ STEP 4: Other Adjustments ════════════ */}
          {currentStep === 4 && !isExempt && (
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center"><Calculator className="h-4 w-4 text-purple-600" /></div>
                  <div><h3 className="text-base font-semibold text-gray-900">Step 4: Other Adjustments (Optional)</h3><p className="text-sm text-gray-500">Enter other income, deductions, or extra withholding.</p></div>
                </div>
              </div>
              <div className="p-6 space-y-6">
                {/* 4a */}
                <div className="space-y-2"><label className="text-sm font-medium text-gray-700">4(a) Other income (not from jobs)</label><CurrencyInput value={formData.step4.otherIncome} onChange={v => handleChange("step4.otherIncome", v)} /><p className="text-xs text-gray-500">Interest, dividends, retirement income, etc. that won&apos;t have withholding.</p></div>
                {/* 4b */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between"><label className="text-sm font-medium text-gray-700">4(b) Deductions</label><button type="button" onClick={() => setShowDeductionsHelp(!showDeductionsHelp)} className="text-xs text-blue-600 font-medium hover:underline">{showDeductionsHelp ? "Hide Calculation Helper" : "Help me calculate this"}</button></div>
                  <CurrencyInput value={showDeductionsHelp ? dwCalc.line15 : formData.step4.deductions} onChange={v => handleChange("step4.deductions", v)} />
                  <p className="text-xs text-gray-500">Use this to reduce withholding if you expect to claim deductions other than the standard deduction.</p>
                  {/* Deductions Worksheet (matches original exactly) */}
                  {showDeductionsHelp && (
                    <div className="mt-4 border rounded-lg p-4 bg-gray-50 space-y-6">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-900 border-b pb-2"><Calculator className="h-4 w-4" /> Deductions Worksheet (2026) - Complete IRS Form</div>
                      {/* Lines 1a-1c */}
                      <div className="space-y-3 p-3 bg-green-50 rounded-lg border border-green-200">
                        <p className="text-xs font-semibold uppercase text-green-700">Lines 1a-1c: New 2026 Tax Benefits</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div className="space-y-1"><label className="text-xs text-gray-800 font-medium">1a. Qualified Tips (up to $25,000)</label><CurrencyInput value={formData.step4.deductionsWorksheet.qualifiedTips} onChange={v => handleChange("step4.deductionsWorksheet.qualifiedTips", Math.min(v, 25000))} /></div>
                          <div className="space-y-1"><label className="text-xs text-gray-800 font-medium">1b. Qualified Overtime</label><CurrencyInput value={formData.step4.deductionsWorksheet.qualifiedOvertime} onChange={v => handleChange("step4.deductionsWorksheet.qualifiedOvertime", v)} /></div>
                          <div className="space-y-1"><label className="text-xs text-gray-800 font-medium">1c. Vehicle Loan Interest (up to $10,000)</label><CurrencyInput value={formData.step4.deductionsWorksheet.vehicleLoanInterest} onChange={v => handleChange("step4.deductionsWorksheet.vehicleLoanInterest", Math.min(v, 10000))} /></div>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-green-200"><span className="text-xs font-medium text-green-700">Line 2 Total (1a + 1b + 1c):</span><span className="text-sm font-bold text-green-700">${dwCalc.line2.toLocaleString()}</span></div>
                      </div>
                      {/* Lines 3a-3b Senior */}
                      <div className="space-y-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <p className="text-xs font-semibold uppercase text-purple-700">Lines 3a-3b: Senior Deductions (Age 65+)</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2"><label className="flex items-center gap-2 text-sm text-gray-900 font-medium cursor-pointer"><input type="checkbox" className="w-4 h-4 rounded text-purple-600" checked={formData.step4.deductionsWorksheet.isSenior} onChange={e => { handleChange("step4.deductionsWorksheet.isSenior", e.target.checked); handleChange("step4.deductionsWorksheet.seniorDeduction", e.target.checked ? 6000 : 0); }} /> 3a. I am age 65 or older</label>{formData.step4.deductionsWorksheet.isSenior && <div className="ml-6 text-xs text-purple-600 font-medium">+ $6,000 deduction</div>}</div>
                          <div className="space-y-2"><label className="flex items-center gap-2 text-sm text-gray-900 font-medium cursor-pointer"><input type="checkbox" className="w-4 h-4 rounded text-purple-600" checked={formData.step4.deductionsWorksheet.isSpouseSenior} onChange={e => { handleChange("step4.deductionsWorksheet.isSpouseSenior", e.target.checked); handleChange("step4.deductionsWorksheet.spouseSeniorDeduction", e.target.checked ? 6000 : 0); }} disabled={formData.filingStatus !== "married_jointly"} /> 3b. My spouse is age 65 or older</label>{formData.step4.deductionsWorksheet.isSpouseSenior && formData.filingStatus === "married_jointly" && <div className="ml-6 text-xs text-purple-600 font-medium">+ $6,000 deduction</div>}</div>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-purple-200"><span className="text-xs font-medium text-purple-700">Line 4 Total (3a + 3b):</span><span className="text-sm font-bold text-purple-700">${dwCalc.line4.toLocaleString()}</span></div>
                      </div>
                      {/* Line 5 */}
                      <div className="space-y-2"><p className="text-xs font-semibold uppercase text-gray-500">Line 5: Other Adjustments (Schedule 1)</p><CurrencyInput value={formData.step4.deductionsWorksheet.otherAdjustments} onChange={v => handleChange("step4.deductionsWorksheet.otherAdjustments", v)} /><p className="text-xs text-gray-500">Student loan interest, deductible IRA contributions, educator expenses, etc.</p></div>
                      {/* Lines 6a-6e */}
                      <div className="space-y-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-xs font-semibold uppercase text-blue-700">Lines 6a-6e: Itemized Deductions (Schedule A)</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="space-y-1"><label className="text-xs text-gray-800 font-medium">6a. Medical Expenses (&gt;7.5% of income)</label><CurrencyInput value={formData.step4.deductionsWorksheet.medicalExpenses} onChange={v => handleChange("step4.deductionsWorksheet.medicalExpenses", v)} /></div>
                          <div className="space-y-1"><label className="text-xs text-gray-800 font-medium">6b. State & Local Taxes (up to $40,400)</label><CurrencyInput value={formData.step4.deductionsWorksheet.stateLocalTaxes} onChange={v => handleChange("step4.deductionsWorksheet.stateLocalTaxes", Math.min(v, 40400))} /></div>
                          <div className="space-y-1"><label className="text-xs text-gray-800 font-medium">6c. Mortgage Interest</label><CurrencyInput value={formData.step4.deductionsWorksheet.mortgageInterest} onChange={v => handleChange("step4.deductionsWorksheet.mortgageInterest", v)} /></div>
                          <div className="space-y-1"><label className="text-xs text-gray-800 font-medium">6d. Charitable Gifts</label><CurrencyInput value={formData.step4.deductionsWorksheet.charitableGifts} onChange={v => handleChange("step4.deductionsWorksheet.charitableGifts", v)} /></div>
                          <div className="space-y-1 md:col-span-2"><label className="text-xs text-gray-800 font-medium">6e. Other Itemized Deductions</label><CurrencyInput value={formData.step4.deductionsWorksheet.otherItemized} onChange={v => handleChange("step4.deductionsWorksheet.otherItemized", v)} /></div>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-blue-200"><span className="text-xs font-medium text-blue-700">Line 7 Total (6a + 6b + 6c + 6d + 6e):</span><span className="text-sm font-bold text-blue-700">${dwCalc.line7.toLocaleString()}</span></div>
                      </div>
                      {/* Lines 8-10 */}
                      <div className="space-y-2 p-3 bg-gray-100 rounded-lg">
                        <p className="text-xs font-semibold uppercase text-gray-600">Lines 8-10: Itemized Deduction Limitation</p>
                        <p className="text-xs text-gray-500">Lines 8b, 9, and 10 are auto-calculated from your entries.</p>
                        <div className="space-y-1"><label className="text-xs text-gray-800 font-medium">8a. Total Annual Income</label><CurrencyInput value={formData.step4.deductionsWorksheet.totalIncome} onChange={v => handleChange("step4.deductionsWorksheet.totalIncome", v)} /></div>
                        <div className="grid grid-cols-3 gap-2 text-xs pt-2">
                          <div className="bg-white p-2 rounded border border-gray-200"><span className="text-gray-600">8b. Income - Line 4:</span><div className="font-semibold text-gray-900">${dwCalc.line8b.toLocaleString()}</div></div>
                          <div className="bg-white p-2 rounded border border-gray-200"><span className="text-gray-600">9. Threshold:</span><div className="font-semibold text-gray-900">${dwCalc.line9.toLocaleString()}</div></div>
                          <div className="bg-white p-2 rounded border border-gray-200"><span className="text-gray-600">10. Allowed:</span><div className="font-semibold text-gray-900">${dwCalc.line10.toLocaleString()}</div></div>
                        </div>
                      </div>
                      {/* Lines 11-14 */}
                      <div className="space-y-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                        <p className="text-xs font-semibold uppercase text-amber-700">Lines 11-14: Standard vs Itemized Comparison</p>
                        <p className="text-xs text-amber-700">Lines 13 and 14 are auto-calculated based on your inputs above.</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white p-3 rounded border"><span className="text-xs text-gray-500">11. Your Standard Deduction:</span><div className="text-lg font-bold text-gray-700">${dwCalc.line11.toLocaleString()}</div></div>
                          <div className="space-y-1"><label className="text-xs text-gray-800 font-medium">12. Cash Gifts (Standard Deduction Only, up to ${formData.filingStatus === "married_jointly" ? "2,000" : "1,000"})</label><CurrencyInput value={formData.step4.deductionsWorksheet.charitableCashStandard} onChange={v => handleChange("step4.deductionsWorksheet.charitableCashStandard", Math.min(v, formData.filingStatus === "married_jointly" ? 2000 : 1000))} /></div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-white p-2 rounded border border-gray-200"><span className="text-gray-600">13. Standard + Cash Gifts:</span><div className="font-semibold text-gray-900">${dwCalc.line13.toLocaleString()}</div></div>
                          <div className="bg-white p-2 rounded border border-gray-200"><span className="text-gray-600">14. Additional Deduction:</span><div className="font-semibold text-gray-900">${dwCalc.line14.toLocaleString()}</div></div>
                        </div>
                      </div>
                      {/* Line 15 */}
                      <div className="bg-blue-100 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-2 border-blue-300">
                        <div><span className="text-sm font-bold text-blue-900 block">Line 15: Total Deductions for Step 4(b)</span><span className="text-xs text-blue-700">= Line 2 + Line 4 + Line 5 + Line 14</span></div>
                        <div className="flex items-center gap-3"><span className="text-2xl font-bold text-blue-700">${dwCalc.line15.toLocaleString()}</span><button onClick={() => handleChange("step4.deductions", dwCalc.line15)} className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-md hover:bg-blue-700">Use This</button></div>
                      </div>
                    </div>
                  )}
                </div>
                {/* 4c */}
                <div className="space-y-2"><label className="text-sm font-medium text-gray-700">4(c) Extra withholding</label><CurrencyInput value={formData.step4.extraWithholding} onChange={v => handleChange("step4.extraWithholding", v)} /><p className="text-xs text-gray-500">Any additional tax you want withheld each pay period (including from Step 2).</p></div>
              </div>
            </div>
          )}

          {/* ════════════ STEP 5 (Sign & Submit) ════════════ */}
          {currentStep === maxStep && (
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center"><FileText className="h-4 w-4 text-emerald-600" /></div>
                  <div><h3 className="text-base font-semibold text-gray-900">Step 5: Sign & Continue</h3><p className="text-sm text-gray-500">Sign electronically, then continue to secure PDF download.</p></div>
                </div>
              </div>
              <div className="p-6 space-y-6">
                {/* Summary */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div><span className="text-gray-500 block">Employee Name:</span><p className="font-semibold text-gray-900">{formData.firstName} {formData.middleInitial} {formData.lastName}</p></div>
                  <div><span className="text-gray-500 block">Filing Status:</span><p className="font-semibold text-gray-900">{W4_FILING_STATUS.find(s => s.value === formData.filingStatus)?.label || "Not specified"}</p></div>
                  <div><span className="text-gray-500 block">Step 3 Credits:</span><p className="font-semibold text-gray-900">${credits.totalCredits.toLocaleString()}</p></div>
                  <div><span className="text-gray-500 block">Extra W/H (4c):</span><p className="font-semibold text-gray-900">{isExempt ? "Exempt" : `$${(formData.step4.extraWithholding || 0).toLocaleString()}`}</p></div>
                </div>
                <hr className="border-gray-200" />
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-xs text-gray-600 leading-relaxed">Under penalties of perjury, I declare that this certificate, to the best of my knowledge and belief, is true, correct, and complete.</p>
                </div>
                <SignaturePad typedName={formData.signature.typedName} signatureImage={formData.signature.signatureImage} onTypedNameChange={name => handleChange("signature.typedName", name)} onSignatureImageChange={img => handleChange("signature.signatureImage", img)} />
              </div>
            </div>
          )}

          {/* Navigation (matches original) */}
          <div className="flex justify-between">
            <div className="flex gap-2">
              {currentStep > 1 && <button onClick={() => setCurrentStep(currentStep - 1)} className={btnOutline}><ArrowLeft className="h-4 w-4" /> Previous</button>}
            </div>
            <div className="flex gap-2">
              {currentStep < maxStep ? (
                <button onClick={() => setCurrentStep(currentStep + 1)} className={btnPrimary}>Next <ChevronRight className="h-4 w-4" /></button>
              ) : (
                <button onClick={continueToLeadCapture} disabled={loading} className={btnGreen + " disabled:opacity-60"}>
                  <Send className="h-4 w-4" /> Continue to Download
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
