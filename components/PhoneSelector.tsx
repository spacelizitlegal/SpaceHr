"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Office {
  code: string;
  country: string;
  phone: string;
}

const offices: Office[] = [
  { code: "US", country: "United States", phone: "+1 646 421 5740" },
  { code: "CA", country: "Canada", phone: "+1 (979) 326-9493" },
  { code: "AE", country: "United Arab Emirates", phone: "+971 56 256 7509" },
  { code: "SA", country: "Saudi Arabia", phone: "+966 56 208 1999" },
  { code: "KW", country: "Kuwait", phone: "+965 9724 3755" },
  { code: "SG", country: "Singapore", phone: "+65 86 111 900" },
  { code: "MY", country: "Malaysia", phone: "+60 10660 7357" },
];

export function PhoneSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Office>(offices[0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  const handleSelect = (office: Office) => {
    setSelected(office);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleTriggerKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label={`Selected country: ${selected.country}. Phone: ${selected.phone}`}
        className={cn(
          "flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-900 rounded-md px-1"
        )}
      >
        <img
          src={`https://flagcdn.com/${selected.code.toLowerCase()}.svg`}
          alt={selected.country}
          className="w-4 h-3 rounded-sm object-cover flex-shrink-0"
        />
        <span className="hidden sm:inline font-medium">{selected.phone}</span>
        <ChevronDown
          className={cn(
            "w-3 h-3 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-[101] sm:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              role="dialog"
              aria-label="Select an office phone number"
              initial={{ opacity: 0, y: -6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.96 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className={cn(
                "absolute top-full mt-2 z-[102]",
                "left-1/2 -translate-x-1/2",
                "sm:left-auto sm:right-0 sm:translate-x-0",
                "w-[calc(100vw-32px)] sm:w-[600px]",
                "bg-slate-900/60 backdrop-blur-2xl",
                "border border-white/[0.08]",
                "rounded-3xl shadow-2xl shadow-black/60",
                "p-4",
                "max-h-[70vh] overflow-y-auto"
              )}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {offices.map((office) => (
                  <button
                    key={office.code}
                    onClick={() => handleSelect(office)}
                    className={cn(
                      "flex items-start gap-3.5 p-4 rounded-2xl text-left w-full",
                      "border transition-all duration-200 cursor-pointer group",
                      selected.code === office.code
                        ? "bg-blue-500/10 border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.12)]"
                        : "border-transparent hover:bg-white/[0.04] hover:border-white/[0.06]"
                    )}
                  >
                    <img
                      src={`https://flagcdn.com/${office.code.toLowerCase()}.svg`}
                      alt={office.country}
                      className="w-7 h-5 rounded-sm object-cover flex-shrink-0 mt-0.5"
                    />
                    <div className="flex flex-col min-w-0 flex-1">
                      <span
                        className={cn(
                          "text-sm font-semibold tracking-tight",
                          selected.code === office.code
                            ? "text-white"
                            : "text-white/80 group-hover:text-white"
                        )}
                      >
                        {office.phone}
                      </span>
                      <span className="text-[11px] text-white/40 mt-0.5">
                        {office.country}
                      </span>
                    </div>
                    {selected.code === office.code && (
                      <span className="flex-shrink-0 mt-1">
                        <span className="block w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.6)]" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
