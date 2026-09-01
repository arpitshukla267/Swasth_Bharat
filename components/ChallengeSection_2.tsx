"use client";

import Image from "next/image";
import {
  Clock,
  HelpCircle,
  Building2,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";
import { motion } from "framer-motion";

const challengePills = [
  {
    id: "delays",
    label: "Approval Delays",
    icon: Clock,
  },
  {
    id: "documentation",
    label: "Documentation Confusion",
    icon: HelpCircle,
  },
  {
    id: "coordination",
    label: "Hospital Coordination",
    icon: Building2,
  },
  {
    id: "insurance",
    label: "Insurance Support",
    icon: AlertTriangle,
  },
  {
    id: "discharge",
    label: "Discharge Process",
    icon: ArrowRight,
  },
];

export default function ChallengeSection() {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-orange-600 uppercase block mb-2">
            THE CHALLENGE
          </span>

          <h2 className="font-hindi text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight px-2">
            <span>इलाज से पहले सबसे बड़ी चुनौती — </span>
            <span className="text-orange-600 block sm:inline mt-1 sm:mt-0">
              सही मार्गदर्शन
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-lg text-slate-600 font-normal leading-relaxed text-balance px-2">
            Before treatment even begins, families face an overwhelming maze of
            approvals, paperwork, and hospital processes. SBHC turns that
            confusion into clarity.
          </p>
        </div>

        {/* Challenge Visual Container */}
        <div className="mt-8 sm:mt-12 max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200/80 relative">
          {/* Split Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 relative min-h-[380px] sm:min-h-[440px]">
            {/* Left Box: Confused (Monochrome Blue overlay) */}
            <div className="relative group overflow-hidden min-h-[220px] md:min-h-full">
              <Image
                src="/challenge-confused.png"
                alt="Hospital paperwork confusion"
                fill
                className="object-cover filter contrast-105 saturate-50 brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-slate-900/40" />
              <div className="absolute top-4 left-4 z-10 bg-slate-950/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-red-500/30 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-red-400" />
                <span className="text-xs font-semibold text-red-200 uppercase tracking-wider">
                  Without Support
                </span>
              </div>
            </div>

            {/* Right Box: Guided Care (Warm Golden light) */}
            <div className="relative group overflow-hidden min-h-[220px] md:min-h-full">
              <Image
                src="/challenge-guided.png"
                alt="SBHC Healthcare Advisor guiding family"
                fill
                className="object-cover filter contrast-105 saturate-100 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 via-slate-900/40 to-amber-900/20" />
              <div className="absolute top-4 right-4 z-10 bg-amber-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-400/40 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#69beb6]" />
                <span className="text-xs font-semibold text-amber-200 uppercase tracking-wider">
                  With SBHC Guidance
                </span>
              </div>
            </div>

            {/* Bottom Overlay Pills Bar (Static glass pills with no selection state or scroll arrows) */}
            <div className="hidden absolute bottom-4 left-3 right-3 sm:left-6 sm:right-6 z-20 md:flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-2 sm:gap-2.5">
              {challengePills.map((pill) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={pill.id}
                    className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-semibold bg-[#142337]/85 backdrop-blur-md border border-white/20 text-white shadow-xl whitespace-nowrap"
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400 shrink-0" />
                    <span>{pill.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
