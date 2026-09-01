"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Clock,
  FileQuestion,
  Building2,
  ShieldAlert,
  Hourglass,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
  Home,
  ArrowRightLeft,
  ArrowRight,
  Sparkles,
  XCircle,
} from "lucide-react";

// Each pain point paired with its resolution — this is real information
// (what SBHC actually fixes), not a decorative list.
const journey = [
  {
    id: "delays",
    before: "Approval delays",
    after: "Same-day approvals",
    icon: Clock,
    resolvedIcon: CheckCircle2,
    detail: "Fast-track approvals directly with TPA & hospital desk",
  },
  {
    id: "documentation",
    before: "Confusing paperwork",
    after: "Paperwork handled",
    icon: FileQuestion,
    resolvedIcon: FileCheck2,
    detail: "Our team handles forms, claims & hospital entry",
  },
  {
    id: "coordination",
    before: "Hospital coordination",
    after: "One point of contact",
    icon: Building2,
    resolvedIcon: Building2,
    detail: "Dedicated SBHC advisor manages all hospital dialog",
  },
  {
    id: "insurance",
    before: "Insurance uncertainty",
    after: "Insurance sorted",
    icon: ShieldAlert,
    resolvedIcon: ShieldCheck,
    detail: "Policy verification & cashless approval guidance",
  },
  {
    id: "discharge",
    before: "Discharge delays",
    after: "Smooth discharge, home sooner",
    icon: Hourglass,
    resolvedIcon: Home,
    detail: "Hassle-free settlement so patient reaches home fast",
  },
];

const listVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function ChallengeSection() {
  const [mobileTab, setMobileTab] = useState<"compare" | "solution" | "problem">("compare");

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-slate-50 pt-12 sm:pt-20 pb-8"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-3xl px-2 text-center sm:mb-20">
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-orange-600 sm:text-sm">
            The Challenge
          </span>

          <h2 className="font-hindi text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            <span>इलाज से पहले सबसे बड़ी चुनौती — </span>
            <span className="mt-1 block text-orange-600 sm:mt-0 sm:inline">
              सही मार्गदर्शन
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-balance text-sm font-normal leading-relaxed text-slate-600 sm:text-lg">
            Before treatment even begins, families face an overwhelming maze of
            approvals, paperwork, and hospital processes. SBHC bridges that gap.
          </p>
        </div>

        {/* ==================================================== */}
        {/* MOBILE VIEW (< md) — NEXT LEVEL INTERACTIVE EXPERIENCE */}
        {/* ==================================================== */}
        <div className="block md:hidden">
          {/* Mobile Segmented Control Bar */}
          <div className="mb-6 flex items-center justify-center p-1 bg-slate-200/80 backdrop-blur-md rounded-full shadow-inner border border-slate-300/60">
            <button
              onClick={() => setMobileTab("compare")}
              className={`flex-1 py-2 px-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 ${
                mobileTab === "compare"
                  ? "bg-white text-orange-600 shadow-md scale-[1.02]"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span>Comparison</span>
            </button>
            <button
              onClick={() => setMobileTab("solution")}
              className={`flex-1 py-2 px-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 ${
                mobileTab === "solution"
                  ? "bg-[#3f5a90] text-white shadow-md scale-[1.02]"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span>With SBHC</span>
            </button>
            <button
              onClick={() => setMobileTab("problem")}
              className={`flex-1 py-2 px-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 ${
                mobileTab === "problem"
                  ? "bg-red-600 text-white shadow-md scale-[1.02]"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <XCircle className="w-3.5 h-3.5 text-white" />
              <span>Without</span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            {/* TAB 1: COMPARE (Next-Level Transformation Cards) */}
            {mobileTab === "compare" && (
              <motion.div
                key="compare"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* Visual Header Banner */}
                <div className="relative overflow-hidden rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-[#69beb6]/30 p-4 shadow-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-600 text-white shadow-sm">
                        <ArrowRightLeft className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Real-Time Impact
                      </span>
                    </div>
                    <span className="text-[10px] font-bold bg-[#69beb6]/30 text-[#3f5a90] px-2.5 py-0.5 rounded-full border border-[#69beb6]/50">
                      5/5 Solutions Active
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-600 leading-snug">
                    Compare how SBHC replaces traditional hospital hurdles with streamlined support.
                  </p>
                </div>

                {/* Direct Transformation Cards */}
                <div className="space-y-3">
                  {journey.map(({ id, before, after, icon: BeforeIcon, resolvedIcon: AfterIcon, detail }, idx) => (
                    <motion.div
                      key={id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.08 }}
                      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
                        {/* Before (Problem) */}
                        <div className="flex items-center gap-1.5 text-red-600 bg-red-50 px-2 py-1 rounded-lg border border-red-100 flex-1 min-w-0">
                          <BeforeIcon className="w-3.5 h-3.5 shrink-0 text-red-500" />
                          <span className="text-xs font-semibold truncate text-red-950">
                            {before}
                          </span>
                        </div>

                        {/* Arrow indicator */}
                        <div className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-orange-600">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>

                        {/* After (Solution) */}
                        <div className="flex items-center gap-1.5 text-[#3f5a90] bg-[#69beb6]/30 px-2 py-1 rounded-lg border border-[#69beb6]/40 flex-1 min-w-0">
                          <AfterIcon className="w-3.5 h-3.5 shrink-0 text-[#3f5a90]" />
                          <span className="text-xs font-bold truncate text-[#3f5a90]">
                            {after}
                          </span>
                        </div>
                      </div>

                      {/* Detail note */}
                      <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500">
                        <span className="flex items-center gap-1 font-medium text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#69beb6]" /> {detail}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 2: WITH SBHC SOLUTION */}
            {mobileTab === "solution" && (
              <motion.div
                key="solution"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-3xl border border-amber-200 bg-white shadow-md"
              >
                <div className="relative h-48">
                  <Image
                    src="/IMG-20260802-WA0050.jpg"
                    alt="SBHC healthcare advisor guiding a family"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/70 via-amber-900/10 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-amber-400/40 bg-amber-950/75 px-3 py-1.5 backdrop-blur-md">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-100">
                      With SBHC guidance
                    </span>
                  </div>
                </div>

                <ul className="flex flex-col gap-2.5 p-5">
                  {journey.map(({ id, after, resolvedIcon: Icon }) => (
                    <li
                      key={id}
                      className="flex items-center gap-3 rounded-xl bg-[#69beb6]/30 px-3.5 py-3 border border-[#69beb6]/40"
                    >
                      <div className="p-1.5 rounded-lg bg-[#3f5a90] text-white shadow-xs">
                        <Icon className="h-4 w-4 shrink-0" />
                      </div>
                      <span className="text-sm font-semibold text-slate-800">
                        {after}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* TAB 3: WITHOUT SUPPORT */}
            {mobileTab === "problem" && (
              <motion.div
                key="problem"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative h-48">
                  <Image
                    src="/challenge-confused.png"
                    alt="Family confused by hospital paperwork"
                    fill
                    className="object-cover grayscale-[0.35] contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/10 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-red-400/30 bg-slate-950/70 px-3 py-1.5 backdrop-blur-md">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-red-200">
                      Without support
                    </span>
                  </div>
                </div>

                <ul className="flex flex-col gap-2.5 p-5">
                  {journey.map(({ id, before, icon: Icon }) => (
                    <li
                      key={id}
                      className="flex items-center gap-3 rounded-xl bg-red-50/70 px-3.5 py-3 border border-red-100"
                    >
                      <div className="p-1.5 rounded-lg bg-red-500 text-white shadow-xs">
                        <Icon className="h-4 w-4 shrink-0" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">
                        {before}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ==================================================== */}
        {/* DESKTOP VIEW (>= md) — 100% INTACT & UNCHANGED */}
        {/* ==================================================== */}
        <div className="hidden md:grid relative mx-auto max-w-5xl grid-cols-[1fr_auto_1fr] gap-0">
          {/* WITHOUT — left panel */}
          <div className="relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm rounded-r-none border-r-0">
            <div className="relative h-72">
              <Image
                src="/challenge-confused.png"
                alt="Family confused by hospital paperwork"
                fill
                className="object-cover grayscale-[0.35] contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-red-400/30 bg-slate-950/70 px-3 py-1.5 backdrop-blur-md">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-red-200">
                  Without support
                </span>
              </div>
            </div>

            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-1 flex-col gap-2.5 p-6"
            >
              {journey.map(({ id, before, icon: Icon }) => (
                <motion.li
                  key={id}
                  variants={itemVariants}
                  className="flex items-center gap-3 rounded-xl bg-red-50/70 px-3.5 py-2.5"
                >
                  <Icon className="h-4 w-4 shrink-0 text-red-500" />
                  <span className="text-sm font-medium text-slate-700">
                    {before}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* BRIDGE — the signature element */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="h-full w-px bg-slate-200" />
            <div className="pointer-events-none absolute flex">
              <BridgeBadge />
            </div>
          </div>

          {/* WITH SBHC — right panel */}
          <div className="relative flex flex-col overflow-hidden rounded-3xl border border-amber-200 bg-white shadow-md rounded-l-none border-l-0">
            <div className="relative h-72">
              <Image
                src="/IMG-20260802-WA0050.jpg"
                alt="SBHC healthcare advisor guiding a family"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/60 via-amber-900/5 to-transparent" />
              <div className="absolute right-4 top-4 rounded-full border border-amber-400/40 bg-amber-950/75 px-3 py-1.5 backdrop-blur-md">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-100">
                  With SBHC guidance
                </span>
              </div>
            </div>

            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-1 flex-col gap-2.5 p-6"
            >
              {journey.map(({ id, after, resolvedIcon: Icon }) => (
                <motion.li
                  key={id}
                  variants={itemVariants}
                  className="flex items-center gap-3 rounded-xl bg-[#69beb6]/30 px-3.5 py-2.5"
                >
                  <Icon className="h-4 w-4 shrink-0 text-[#3f5a90]" />
                  <span className="text-sm font-medium text-slate-800">
                    {after}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function BridgeBadge() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-slate-50 bg-orange-600 shadow-lg shadow-orange-600/25 sm:h-16 sm:w-16"
    >
      <ArrowRightLeft className="h-5 w-5 text-white sm:h-6 sm:w-6" />
    </motion.div>
  );
}
