"use client";
import { useState } from "react";
import { gql } from "@apollo/client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Zap,
  CheckCircle,
  Users,
  Brain,
  TrendingUp,
} from "lucide-react";
import { client } from "@/lib/apollo-client";
import { Button } from "@/components/ui/Button";

// GraphQL Mutation
const CREATE_DEMO_REQUEST = gql`
  mutation CreateDemoRequest($input: CreateDemoRequestInput!) {
    createDemoRequest(input: $input) {
      _id
      firstName
      lastName
      email
      company
      phoneNumber
      companySize
      projectDetails
      formType
    }
  }
`;

export default function DemoRequest() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    company: "",
    companySize: "",
    projectDetails: "",
    formType: "Space HR",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phoneNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<unknown>(null);

  const isSuccess = !!data;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phoneNumber: "",
    };
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
      isValid = false;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
      isValid = false;
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required.";
      isValid = false;
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const result = await client.mutate({
          mutation: CREATE_DEMO_REQUEST,
          variables: { input: formData },
        });
        setData(result.data);
      } catch (err) {
        console.error("Error submitting form:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-[#0b1121] dark:to-[#0f172a]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left Content */}
          <div className="lg:sticky lg:top-24">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-100 to-violet-100 dark:from-pink-900/30 dark:to-violet-900/30 px-4 py-2 border border-pink-200 dark:border-pink-800">
              <Sparkles className="h-4 w-4 text-pink-600 dark:text-pink-400" />
              <span className="text-sm font-semibold text-pink-600 dark:text-pink-300">
                REQUEST A DEMO
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              Transform Your HR with{" "}
              <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-blue-600 bg-clip-text text-transparent">
                AI Intelligence
              </span>
            </h1>

            <p className="mb-10 text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              Join leading enterprises who have revolutionized their Human
              Capital Management. Experience our AI-powered ERP with expert
              guidance and comprehensive support.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Brain,
                  title: "AI-Powered Automation",
                  desc: "Automated payroll auditing, performance coaching, and predictive analytics across all HR modules.",
                  gradient:
                    "from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30",
                  iconColor: "text-blue-600 dark:text-blue-400",
                },
                {
                  icon: Shield,
                  title: "Complete Compliance",
                  desc: "Federal, State, and Local tax automation with real-time compliance validation and NACHA ACH generation.",
                  gradient:
                    "from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30",
                  iconColor: "text-green-600 dark:text-green-400",
                },
                {
                  icon: TrendingUp,
                  title: "Predictive Insights",
                  desc: "Year-end forecasting, cost optimization recommendations, and workforce planning analytics.",
                  gradient:
                    "from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30",
                  iconColor: "text-purple-600 dark:text-purple-400",
                },
                {
                  icon: Users,
                  title: "Role-Based Portals",
                  desc: "Tailored experiences for Admin, CEO, Supervisor, and Employee—each sees exactly what they need.",
                  gradient:
                    "from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30",
                  iconColor: "text-orange-600 dark:text-orange-400",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} border border-white/20`}
                  >
                    <item.icon
                      className={`h-7 w-7 ${item.iconColor}`}
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 rounded-2xl bg-white dark:bg-[#1e293b] p-6 shadow-xl border border-gray-100 dark:border-gray-800">
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                  100%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Automated Auditing
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-600">
                  24/7
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  AI Monitoring
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  5-Step
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Payroll Wizard
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <motion.div
            className="rounded-3xl border-2 border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1e293b] p-8 shadow-2xl lg:p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {isSuccess ? (
              <div className="py-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 flex items-center justify-center border-4 border-green-200 dark:border-green-800">
                    <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                  </div>
                </motion.div>
                <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white">
                  Demo Request Received!
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  Thank you for your interest in Space HR. Our team will contact
                  you within 24 hours to schedule your personalized demo.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-violet-100 dark:from-pink-900/30 dark:to-violet-900/30 text-sm font-semibold text-pink-600 dark:text-pink-300">
                  <Sparkles className="w-4 h-4" />
                  We're excited to show you what's possible!
                </div>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white">
                    Schedule Your Demo
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    See Space HR's AI-powered ERP in action. Let's discuss your
                    unique HR needs and how we can help.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                      >
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`block w-full rounded-xl border-2 ${
                          errors.firstName
                            ? "border-red-500"
                            : "border-gray-200 dark:border-gray-700"
                        } bg-gray-50 dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white transition-colors focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-900`}
                        placeholder="John"
                        aria-invalid={!!errors.firstName}
                        aria-describedby={errors.firstName ? "firstName-error" : undefined}
                      />
                      {errors.firstName && (
                        <p id="firstName-error" className="mt-2 text-sm text-red-600 dark:text-red-400" aria-live="polite">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                      >
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`block w-full rounded-xl border-2 ${
                          errors.lastName
                            ? "border-red-500"
                            : "border-gray-200 dark:border-gray-700"
                        } bg-gray-50 dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white transition-colors focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-900`}
                        placeholder="Doe"
                        aria-invalid={!!errors.lastName}
                        aria-describedby={errors.lastName ? "lastName-error" : undefined}
                      />
                      {errors.lastName && (
                        <p id="lastName-error" className="mt-2 text-sm text-red-600 dark:text-red-400" aria-live="polite">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                    >
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full rounded-xl border-2 ${
                        errors.email
                          ? "border-red-500"
                          : "border-gray-200 dark:border-gray-700"
                      } bg-gray-50 dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white transition-colors focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-900`}
                      placeholder="john.doe@company.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 text-sm text-red-600 dark:text-red-400" aria-live="polite">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                    >
                      Phone Number (with Country Code){" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000 or +44 20 1234 5678"
                      className={`block w-full rounded-xl border-2 ${
                        errors.phoneNumber
                          ? "border-red-500"
                          : "border-gray-200 dark:border-gray-700"
                      } bg-gray-50 dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white transition-colors focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-900`}
                      aria-invalid={!!errors.phoneNumber}
                      aria-describedby={errors.phoneNumber ? "phoneNumber-error" : undefined}
                    />
                    {errors.phoneNumber && (
                      <p id="phoneNumber-error" className="mt-2 text-sm text-red-600 dark:text-red-400" aria-live="polite">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                    >
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`block w-full rounded-xl border-2 ${
                        errors.company
                          ? "border-red-500"
                          : "border-gray-200 dark:border-gray-700"
                      } bg-gray-50 dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white transition-colors focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-900`}
                      placeholder="Your Company Inc."
                      aria-invalid={!!errors.company}
                      aria-describedby={errors.company ? "company-error" : undefined}
                    />
                    {errors.company && (
                      <p id="company-error" className="mt-2 text-sm text-red-600 dark:text-red-400" aria-live="polite">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="companySize"
                      className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                    >
                      Company Size
                    </label>
                    <select
                      name="companySize"
                      id="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className="block w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white transition-colors focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-900"
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="projectDetails"
                      className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                    >
                      Tell Us About Your HR Needs
                    </label>
                    <textarea
                      name="projectDetails"
                      id="projectDetails"
                      rows={4}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      className="block w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white transition-colors focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-900 resize-none"
                      placeholder="Tell us about your current HR challenges, team size, and what you're looking to achieve..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-gradient-to-r from-pink-500 via-violet-500 to-blue-600 px-6 py-4 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:from-pink-600 hover:via-violet-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-violet-200 dark:focus:ring-violet-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        Request Your Demo
                      </span>
                    )}
                  </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                  By submitting this form, you agree to our{" "}
                  <a
                    href="/terms"
                    className="text-violet-600 dark:text-violet-400 hover:underline"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy"
                    className="text-violet-600 dark:text-violet-400 hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
