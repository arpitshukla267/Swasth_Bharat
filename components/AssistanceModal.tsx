"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, ShieldCheck, CheckCircle2, MessageSquare, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AssistanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const cities = [
  "Delhi NCR",
  "Mumbai",
  "Bengaluru",
  "Chennai",
  "Hyderabad",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Lucknow / UP",
  "Patna / Bihar",
  "Jaipur / Rajasthan",
  "Chandigarh",
  "Bhopal / MP",
  "Other City",
];

const servicesNeeded = [
  "Insurance Cashless Assistance",
  "Ayushman PM-JAY Card",
  "ICU Bed Coordination",
  "Discharge & Bill Audit",
  "TPA Coordination",
  "Hospital Admission Support",
  "Claim Filing Help",
  "Government Scheme Guidance",
];

function SmoothDropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-sm rounded-xl border border-slate-300 bg-slate-50/50 text-left focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all cursor-pointer"
      >
        <span className="text-slate-800 truncate">{value}</span>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-1.5 w-full bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden"
          >
            <ul className="max-h-52 overflow-y-auto scrollbar-thin py-1">
              {options.map((opt) => (
                <li key={opt}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(opt);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${
                      opt === value
                        ? "bg-orange-50 text-orange-700 font-semibold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {opt}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AssistanceModal({ isOpen, onClose }: AssistanceModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Delhi NCR",
    service: "Insurance Cashless Assistance",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-visible"
        >
          {/* Header */}
          <div className="bg-[#0F243E] text-white p-6 rounded-t-3xl relative">
            <button
              onClick={resetAndClose}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>24x7 SBHC Care Desk</span>
            </div>
            <h3 className="font-hindi text-2xl font-bold">
              निःशुल्क स्वास्थ्य मार्गदर्शन प्राप्त करें
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Get immediate assistance from a dedicated SBHC Healthcare Advisor within 5 minutes.
            </p>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Patient / Relative Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Number (For Urgent Callback) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-slate-50/50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <SmoothDropdown
                    label="City / Hospital Location"
                    options={cities}
                    value={formData.city}
                    onChange={(val) => setFormData({ ...formData, city: val })}
                  />

                  <SmoothDropdown
                    label="Service Needed"
                    options={servicesNeeded}
                    value={formData.service}
                    onChange={(val) => setFormData({ ...formData, service: val })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold text-sm shadow-lg shadow-orange-500/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Urgent Call Back</span>
                </button>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Or connect via WhatsApp:</span>
                  <a
                    href="https://wa.me/9118001237242?text=Hello%20SBHC%20Care%20Team%2C%20I%20need%20urgent%20hospital%20assistance."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Desk</span>
                  </a>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  Request Received!
                </h4>
                <p className="text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. An SBHC Care Manager in <span className="font-semibold text-slate-800">{formData.city}</span> will call you on <span className="font-semibold text-slate-800">{formData.phone}</span> within 5 minutes.
                </p>

                <button
                  onClick={resetAndClose}
                  className="mt-4 px-6 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Back to Home Page
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
