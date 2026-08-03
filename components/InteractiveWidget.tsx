"use client";

import { useState } from "react";
import { Search, CheckCircle2, ShieldCheck, PhoneCall, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface InteractiveWidgetProps {
  onOpenAssistance: () => void;
}

export default function InteractiveWidget({ onOpenAssistance }: InteractiveWidgetProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("private");
  const [selectedUrgency, setSelectedUrgency] = useState<string>("planned");

  const guidanceData: Record<string, { title: string; steps: string[]; callout: string }> = {
    private: {
      title: "Private Health Insurance (Star, Niva, HDFC ERGO, Care, etc.)",
      steps: [
        "Provide patient policy e-card or member ID to SBHC manager.",
        "SBHC audits initial doctor prescription & cost estimate to avoid room-rent capping penalties.",
        "Instant TPA portal pre-authorization filing within 30 minutes.",
        "Zero-delay cashless clearance at hospital billing counter upon discharge.",
      ],
      callout: "Did you know? Up to 25% of hospital bill deductions happen due to incorrect room category selection. We audit this before admission!",
    },
    ayushman: {
      title: "Ayushman Bharat PM-JAY / Government Health Cards",
      steps: [
        "Verification of Golden Card / Aadhaar linkage at empaneled hospital desk.",
        "E-card registration & package booking under government quota.",
        "Zero payment guarantee for covered medical procedures.",
        "Dedicated SBHC scheme navigator assists with discharge formalities.",
      ],
      callout: "100% Cashless treatment up to ₹5 Lakh per family per year across empaneled hospitals nationwide.",
    },
    cghs: {
      title: "CGHS / ECHS / State Government Pensioner Claims",
      steps: [
        "Permission letter & referral slip verification for empaneled hospital.",
        "Direct credit authorization filing through CGHS / ECHS online desk.",
        "Implant cost capping compliance to prevent out-of-pocket charges.",
        "Express bill clearance upon hospital discharge.",
      ],
      callout: "We ensure all medical billing adheres strictly to official government package rates so you pay ₹0.",
    },
    emergency: {
      title: "Emergency Admission / ICU Ward Transfer",
      steps: [
        "Immediate emergency care manager dispatch to hospital emergency room.",
        "Inter-hospital bed & ICU availability coordination.",
        "Emergency provisional cashless approval within 60 minutes.",
        "Direct communication with hospital medical superintendent.",
      ],
      callout: "In medical emergencies, hospital rules state treatment cannot be delayed for paperwork. We handle the paperwork while doctors save lives.",
    },
  };

  const current = guidanceData[selectedCategory] || guidanceData.private;

  return (
    <section id="impact" className="py-20 bg-slate-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block mb-1">
              PATIENT GUIDANCE TOOL
            </span>
            <h3 className="font-hindi text-2xl sm:text-4xl font-bold text-slate-900">
              अपनी पॉलिसी या सहायता श्रेणी चुनें
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Select your healthcare situation to get instant step-by-step guidance from SBHC.
            </p>
          </div>

          {/* Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[
              { id: "private", label: "Private Insurance" },
              { id: "ayushman", label: "Ayushman PM-JAY" },
              { id: "cghs", label: "CGHS / ECHS" },
              { id: "emergency", label: "Emergency ICU Bed" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`py-3 px-4 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === tab.id
                    ? "bg-slate-950 text-white shadow-md scale-102"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Detailed Action Steps */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200"
            >
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#E77727]" />
                <span>{current.title}</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-3">
                  {current.steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#E77727] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-orange-50 p-5 rounded-2xl border border-orange-200/80 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 text-orange-700 font-bold text-xs uppercase tracking-wide mb-2">
                      <AlertCircle className="w-4 h-4" />
                      <span>SBHC Care Insight</span>
                    </div>
                    <p className="text-xs sm:text-sm text-orange-950 leading-relaxed font-normal">
                      {current.callout}
                    </p>
                  </div>

                  <button
                    onClick={onOpenAssistance}
                    className="mt-6 w-full py-3 px-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Talk to SBHC Advisor Now</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
