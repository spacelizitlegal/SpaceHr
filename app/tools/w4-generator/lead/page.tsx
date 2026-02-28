"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { gql } from "@apollo/client";
import { CheckCircle2, Download, FileText, Loader2, Phone, UserRound } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { client } from "@/lib/apollo-client";
import type { W4FormData } from "@/lib/w4FieldMapping";

const CREATE_DEMO_REQUEST = gql`
  mutation CreateDemoRequest($input: CreateDemoRequestInput!) {
    createDemoRequest(input: $input) {
      _id
      firstName
      lastName
      email
      phoneNumber
      formType
    }
  }
`;

type LeadFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

const initialLeadForm: LeadFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

export default function W4LeadCapturePage() {
  const [w4Data, setW4Data] = useState<W4FormData | null>(null);
  const [formData, setFormData] = useState<LeadFormData>(initialLeadForm);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("w4PendingFormData");
      if (!raw) return;
      const parsed = JSON.parse(raw) as W4FormData;
      setW4Data(parsed);
      setFormData((prev) => ({
        ...prev,
        firstName: parsed.firstName || prev.firstName,
        lastName: parsed.lastName || prev.lastName,
      }));
    } catch {
      setW4Data(null);
    }
  }, []);

  const hasPendingW4 = useMemo(() => !!w4Data, [w4Data]);

  const handleInputChange = (field: keyof LeadFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
    setSubmitError("");
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof LeadFormData, string>> = {};
    if (!formData.firstName.trim()) nextErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) nextErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) nextErrors.email = "Email is required.";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) nextErrors.email = "Enter a valid email.";
    if (!formData.phoneNumber.trim()) nextErrors.phoneNumber = "Phone number is required.";
    if (formData.phoneNumber && !/^\+\d[\d\s\-()]{6,}$/.test(formData.phoneNumber.trim())) {
      nextErrors.phoneNumber = "Use country code, e.g. +1 555 123 4567.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submitLeadAndDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!w4Data) {
      setSubmitError("W-4 form data is missing. Please go back and complete the form.");
      return;
    }
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError("");
    try {
      await client.mutate({
        mutation: CREATE_DEMO_REQUEST,
        variables: {
          input: {
            firstName: formData.firstName.trim(),
            lastName: formData.lastName.trim(),
            email: formData.email.trim(),
            phoneNumber: formData.phoneNumber.trim(),
            company: "W4 Form User",
            companySize: "",
            projectDetails: "W-4 PDF download lead captured from tools flow.",
            formType: "w4formlead",
          },
        },
      });

      const pdfRes = await fetch("/api/generate-w4", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(w4Data),
      });
      if (!pdfRes.ok) throw new Error("PDF generation failed");

      const blob = await pdfRes.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `W4_${w4Data.firstName}_${w4Data.lastName}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      sessionStorage.removeItem("w4PendingFormData");
      setSuccess(true);
    } catch {
      setSubmitError("Could not complete your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {!hasPendingW4 ? (
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
              <h1 className="text-2xl font-bold text-gray-900">Complete Your W-4 First</h1>
              <p className="mt-2 text-gray-600">We could not find your W-4 form in this session.</p>
              <Link href="/tools/w4-generator" className="inline-flex mt-6 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">
                Go to W-4 Generator
              </Link>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">One Last Step to Download Your W-4</h1>
                  <p className="text-sm text-gray-600">Share your details to get instant PDF access and payroll updates.</p>
                </div>
              </div>

              {success ? (
                <div className="mt-8 border border-green-200 bg-green-50 rounded-xl p-6">
                  <div className="flex items-center gap-2 text-green-800 font-semibold">
                    <CheckCircle2 className="h-5 w-5" />
                    Request submitted successfully
                  </div>
                  <p className="text-green-800 mt-2 text-sm">Your W-4 PDF download has started.</p>
                  <Link href="/tools/w4-generator" className="inline-flex mt-4 px-4 py-2 rounded-lg bg-green-700 text-white text-sm font-medium hover:bg-green-800">
                    Back to W-4 Generator
                  </Link>
                </div>
              ) : (
                <form className="mt-8 space-y-5" onSubmit={submitLeadAndDownload} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-800">First Name</label>
                      <div className="relative mt-1">
                        <UserRound className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          className="w-full h-11 pl-9 pr-3 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="John"
                        />
                      </div>
                      {errors.firstName && <p className="text-xs text-red-600 mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-800">Last Name</label>
                      <div className="relative mt-1">
                        <UserRound className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          className="w-full h-11 pl-9 pr-3 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder="Doe"
                        />
                      </div>
                      {errors.lastName && <p className="text-xs text-red-600 mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-800">Email</label>
                    <input
                      type="email"
                      className="mt-1 w-full h-11 px-3 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-800">Phone Number (with country code)</label>
                    <div className="relative mt-1">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="tel"
                        className="w-full h-11 pl-9 pr-3 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                        placeholder="+1 555 123 4567"
                      />
                    </div>
                    {errors.phoneNumber && <p className="text-xs text-red-600 mt-1">{errors.phoneNumber}</p>}
                  </div>

                  {submitError && (
                    <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">{submitError}</div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-12 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold hover:from-blue-700 hover:to-emerald-700 disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Download className="h-4 w-4" />
                        Submit & Download W-4 PDF
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

