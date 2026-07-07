"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { DollarSign, TrendingUp, Clock, Users, ArrowRight } from "lucide-react";

export default function ROICalculator() {
  const [employees, setEmployees] = useState(200);
  const [hrStaff, setHrStaff] = useState(3);
  const [hrSalary, setHrSalary] = useState(65000);
  const [ticketsPerMonth, setTicketsPerMonth] = useState(150);
  const [minutesPerTicket, setMinutesPerTicket] = useState(15);

  // Calculations
  const hourlyRate = hrSalary / 52 / 40;
  const adminTimeMonthly = (ticketsPerMonth * minutesPerTicket) / 60; // hours
  const adminCostMonthly = adminTimeMonthly * hourlyRate;
  const automatedTickets = ticketsPerMonth * 0.85;
  const savedHours = (automatedTickets * minutesPerTicket) / 60;
  const savedCost = savedHours * hourlyRate;
  const annualSavings = savedCost * 12;

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
        <h3 className="text-2xl font-bold text-white mb-1">HR Self-Service ROI Calculator</h3>
        <p className="text-blue-100 text-sm">Adjust the inputs below to estimate your monthly savings</p>
      </div>

      <div className="grid md:grid-cols-2 gap-0">
        {/* Inputs */}
        <div className="p-8 space-y-6 border-r border-gray-100 dark:border-gray-700">
          <h4 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
            Your Company
          </h4>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Number of Employees
              </label>
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{employees}</span>
            </div>
            <input
              type="range"
              min="50"
              max="2000"
              step="50"
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>50</span><span>2,000</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                HR Team Size
              </label>
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{hrStaff} people</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={hrStaff}
              onChange={(e) => setHrStaff(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>1</span><span>20</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Avg HR Salary (Annual)
              </label>
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                {formatCurrency(hrSalary)}
              </span>
            </div>
            <input
              type="range"
              min="35000"
              max="120000"
              step="5000"
              value={hrSalary}
              onChange={(e) => setHrSalary(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>$35k</span><span>$120k</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                HR Tickets / Month
              </label>
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{ticketsPerMonth}</span>
            </div>
            <input
              type="range"
              min="20"
              max="500"
              step="10"
              value={ticketsPerMonth}
              onChange={(e) => setTicketsPerMonth(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>20</span><span>500</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Avg Minutes per Ticket
              </label>
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{minutesPerTicket} min</span>
            </div>
            <input
              type="range"
              min="5"
              max="60"
              step="5"
              value={minutesPerTicket}
              onChange={(e) => setMinutesPerTicket(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>5 min</span><span>60 min</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="p-8 bg-blue-50 dark:bg-gray-700/50 space-y-5">
          <h4 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
            Your Estimated Savings
          </h4>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-1">
              <DollarSign className="w-5 h-5 text-green-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Monthly HR Time Savings</span>
            </div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              {formatCurrency(savedCost)}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {savedHours.toFixed(0)} hrs/mo saved at {formatCurrency(hourlyRate)}/hr
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-1">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Annual Savings</span>
            </div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {formatCurrency(annualSavings)}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Pure HR admin time recovered
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-blue-200 dark:border-blue-800 text-center">
              <Clock className="w-5 h-5 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {savedHours.toFixed(0)}h
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Hours saved/mo</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-blue-200 dark:border-blue-800 text-center">
              <Users className="w-5 h-5 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {automatedTickets.toFixed(0)}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Tickets automated/mo</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-5 text-white text-center">
            <div className="text-sm font-medium text-blue-100 mb-2">
              Want the exact ROI for your team?
            </div>
            <Link href="/request-a-demo">
              <Button className="bg-white text-blue-700 hover:bg-gray-50 font-semibold rounded-full px-6">
                Request a Demo <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <div className="text-blue-200 text-xs mt-3">
              We&apos;ll follow up with aggressive pricing tailored to your headcount.
            </div>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            * Assumes 85% ticket automation rate based on Space HR customer data. Actual savings
            vary by team size, ticket complexity, and configuration.
          </p>
        </div>
      </div>
    </div>
  );
}
