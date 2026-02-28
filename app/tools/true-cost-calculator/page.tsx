"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import {
  Calculator,
  TrendingDown,
  DollarSign,
  PieChart,
  Info,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
// JSON-LD schema can be injected via a separate Server Component wrapper if needed, 
// for simplicity in this client component we'll focus on the UI/Logic.

export default function TrueCostCalculator() {
  const [salary, setSalary] = useState(75000);
  const [benefitsLevel, setBenefitsLevel] = useState("standard");
  const [overhead, setOverhead] = useState(5000);

  const [breakdown, setBreakdown] = useState({
    taxes: 0,
    benefits: 0,
    overhead: 0,
    total: 0,
    multiplier: 0,
  });

  useEffect(() => {
    // Assumptions for 2024/2025
    // FICA (7.65%), FUTA/SUTA (~3%), Workers Comp (~1%) -> Total Tax ~ 11.65%
    const taxRate = 0.1165; 
    
    // Benefits Multipliers
    const benefitsRates: Record<string, number> = {
      basic: 0.15,    // 15% (Healthcare only)
      standard: 0.25, // 25% (Health + 401k match + Dental)
      premium: 0.35,  // 35% (Full suite + Perks)
    };

    const calculatedTax = salary * taxRate;
    const calculatedBenefits = salary * benefitsRates[benefitsLevel];
    // Overhead is fixed input or estimation
    
    const totalCost = salary + calculatedTax + calculatedBenefits + overhead;
    const calculatedMultiplier = totalCost / salary;

    setBreakdown({
      taxes: Math.round(calculatedTax),
      benefits: Math.round(calculatedBenefits),
      overhead: overhead,
      total: Math.round(totalCost),
      multiplier: parseFloat(calculatedMultiplier.toFixed(2)),
    });
  }, [salary, benefitsLevel, overhead]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1121] font-sans pt-20">
       {/* Hero / Header */}
       <div className="bg-white dark:bg-[#0f172a] border-b border-slate-200 dark:border-slate-800 pb-12 pt-16">
         <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold tracking-wide mb-6">
                <Calculator className="w-4 h-4" /> Free HR Tool
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                True Cost of an Employee Calculator
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Salary is just the tip of the iceberg. Calculate the fully burdened cost of your workforce in seconds.
            </p>
         </div>
       </div>

       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-6xl">
         <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Calculator Inputs */}
            <div className="lg:col-span-5 space-y-8 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 h-fit">
                <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Annual Base Salary</label>
                    <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input 
                            type="number" 
                            value={salary} 
                            onChange={(e) => setSalary(Number(e.target.value))}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-mono text-lg"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Benefits Package</label>
                    <div className="grid grid-cols-3 gap-2">
                        {['basic', 'standard', 'premium'].map((level) => (
                            <button 
                                key={level}
                                onClick={() => setBenefitsLevel(level)}
                                className={`py-3 px-2 rounded-lg text-sm font-bold capitalize transition-all ${
                                    benefitsLevel === level 
                                    ? 'bg-blue-600 text-white shadow-md' 
                                    : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600'
                                }`}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                    <p className="text-xs text-slate-500 mt-2">
                        {benefitsLevel === 'basic' && "Assuming ~15% for basic health coverage."}
                        {benefitsLevel === 'standard' && "Assuming ~25% for health, dental, vision, & 401k."}
                        {benefitsLevel === 'premium' && "Assuming ~35% for comprehensive coverage & perks."}
                    </p>
                </div>

                <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                        Overhead / Equipment (Annual)
                         <span className="ml-2 inline-flex group relative">
                            <Info className="w-4 h-4 text-slate-400 cursor-help" />
                             <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-900 text-white text-xs rounded hidden group-hover:block z-10">
                                Estimated cost for laptop, software licenses, desk space, etc.
                             </span>
                         </span>
                    </label>
                    <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input 
                            type="number" 
                            value={overhead} 
                            onChange={(e) => setOverhead(Number(e.target.value))}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-mono text-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Results Output */}
            <div className="lg:col-span-7 space-y-8">
                <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-8 opacity-10">
                        <PieChart className="w-32 h-32 text-white" />
                     </div>
                     <h3 className="text-slate-400 font-medium mb-1 uppercase tracking-wider text-sm">Real Annual Cost</h3>
                     <div className="text-5xl md:text-6xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                        {formatCurrency(breakdown.total)}
                     </div>

                     <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-700">
                        <div>
                            <p className="text-slate-400 text-sm mb-1">Cost Multiplier</p>
                            <p className="text-2xl font-bold text-blue-400">{breakdown.multiplier}x <span className="text-sm font-normal text-slate-500">Base Salary</span></p>
                        </div>
                         <div>
                            <p className="text-slate-400 text-sm mb-1">Hidden Costs (Non-Salary)</p>
                            <p className="text-2xl font-bold text-red-400">{formatCurrency(breakdown.total - salary)}</p>
                        </div>
                     </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <p className="text-xs font-bold text-slate-500 uppercase mb-2">Taxes (Est.)</p>
                        <p className="text-xl font-bold text-slate-900 dark:text-white">{formatCurrency(breakdown.taxes)}</p>
                    </div>
                     <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <p className="text-xs font-bold text-slate-500 uppercase mb-2">Benefits</p>
                        <p className="text-xl font-bold text-slate-900 dark:text-white">{formatCurrency(breakdown.benefits)}</p>
                    </div>
                     <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <p className="text-xs font-bold text-slate-500 uppercase mb-2">Overhead</p>
                        <p className="text-xl font-bold text-slate-900 dark:text-white">{formatCurrency(breakdown.overhead)}</p>
                    </div>
                </div>

                {/* Lead Gen Box */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6">
                    <div className="bg-white dark:bg-blue-900 p-3 rounded-full shadow-sm text-blue-600 dark:text-blue-300">
                        <TrendingDown className="w-8 h-8" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Want to reduce this cost multiplier?</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                            Space HR's AI analyzes your payroll to find tax credits, optimize benefit usage, and detect ghost employees.
                        </p>
                    </div>
                    <Link href="https://cad.spaceaiapp.com/login">
                        <Button className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
                            See AI Recommendations <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>
                
                <div className="text-center mt-6">
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Bringing on a new hire? Try our <Link href="/tools/w4-generator" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Free W-4 Form Generator</Link> to get them compliant instantly.
                  </p>
                </div>
            </div>
         </div>
       </div>
    </div>
  );
}
