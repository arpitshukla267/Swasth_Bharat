"use client";

import Image from "next/image";
import {
  ArrowRight,
  Compass,
  ShieldCheck,
  Users,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onOpenAssistance: () => void;
}

const journey = [
  {
    icon: ShieldCheck,
    title: "Cashless coordination",
    description:
      "We liaise directly with the hospital so treatment can begin without you paying out of pocket first.",
  },
  {
    icon: Users,
    title: "Guidance for the whole family",
    description:
      "One point of contact who explains each step in plain language, not medical jargon.",
  },
  {
    icon: FileText,
    title: "Claims & documentation",
    description:
      "We prepare and track the paperwork and approvals, so you can stay focused on your loved one.",
  },
];

export default function HeroSection({ onOpenAssistance }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#FAF6EF] pt-28 pb-20 lg:pb-28">
      {/* Faint dot-grid texture — quiet, not a spotlight */}
      <svg
        className="absolute inset-0 h-full w-full text-[#69beb6]/[0.06]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="sbhc-dots"
            width="26"
            height="26"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sbhc-dots)" />
      </svg>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* Left: message + guided journey */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#E2D8C4] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#3f5a90] shadow-sm"
          >
            <Compass className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Patient-first healthcare support</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-hindi mt-6 max-w-xl text-4xl font-bold leading-[1.25] tracking-tight text-[#1C2B2A] sm:text-5xl"
          >
            <span className="block">हर मरीज़ को सही दिशा,</span>
            <span className="block text-[#E77727]">सही समय पर उपचार</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-[#1C2B2A]/70 sm:text-lg"
          >
            Hospital visits are stressful enough without paperwork getting in
            the way. SBHC works alongside patients and families to coordinate
            care, sort out approvals, and make sense of insurance — so treatment
            doesn't have to wait.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <button
              onClick={onOpenAssistance}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E77727] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#E77727]/25 transition-colors duration-200 hover:bg-[#d4691f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E77727] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF6EF]"
            >
              <span>Get assistance</span>
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-[#1C2B2A]/15 bg-white px-8 py-3.5 text-base font-medium text-[#1C2B2A] transition-colors duration-200 hover:bg-[#F1E9DA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3f5a90] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF6EF]"
            >
              Learn more
            </a>
          </motion.div>

          {/* The guided journey — mirrors the headline's "sahi disha" (right direction) */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative mt-12 space-y-6 pl-9"
          >
            <div
              className="absolute bottom-2 left-[13px] top-2 w-px bg-gradient-to-b from-[#3f5a90] via-[#E2D8C4] to-[#E77727]"
              aria-hidden="true"
            />
            {journey.map(({ icon: Icon, title, description }) => (
              <li key={title} className="relative">
                <span className="absolute -left-9 top-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#E2D8C4] bg-white text-[#3f5a90]">
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold text-[#1C2B2A]">{title}</p>
                <p className="mt-0.5 text-sm leading-snug text-[#1C2B2A]/60">
                  {description}
                </p>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right: framed photo with an overlapping detail card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            className="absolute -inset-3 -z-10 translate-x-3 translate-y-3 rounded-[28px]"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] shadow-xl shadow-[#1C2B2A]/10 lg:aspect-[3/4]">
            <Image
              src="/hero-bg.png"
              alt="An SBHC coordinator speaking with a patient's family at a hospital"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 flex max-w-[230px] items-start gap-3 rounded-2xl border border-[#E2D8C4] bg-white px-5 py-4 shadow-lg">
            <span className="rounded-full bg-[#E77727]/10 p-2 text-[#E77727]">
              <Compass className="h-4 w-4" aria-hidden="true" />
            </span>
            <p className="text-sm leading-snug text-[#1C2B2A]/80">
              One coordinator stays with your case from admission to discharge.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
