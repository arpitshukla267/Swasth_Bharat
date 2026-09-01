"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck, Users, FileText } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onOpenAssistance: () => void;
}

const highlights = [
  {
    icon: ShieldCheck,
    label: "Cashless support",
    accent: "text-[#69beb6]",
  },
  {
    icon: Users,
    label: "Family guidance",
    accent: "text-[#E77727]",
  },
  {
    icon: FileText,
    label: "Claim assistance",
    accent: "text-amber-400",
  },
];


export default function HeroSection_2({ onOpenAssistance }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="A family speaking with an SBHC coordinator at a hospital"
          fill
          priority
          className="object-cover object-center brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/50" />
      </div>

      {/* Central content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs sm:text-sm font-medium text-amber-100 mb-8 border border-white/15"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E77727]" />
          <span>Patient-first healthcare support</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-hindi text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.2] text-white max-w-2xl"
        >
          <span className="block">हर मरीज़ को सही दिशा,</span>
          <span className="block text-[#E77727] mt-1">सही समय पर उपचार</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl text-balance"
        >
          Hospital visits are stressful enough without paperwork getting in the
          way. SBHC works alongside patients and families to coordinate care,
          sort out approvals and documentation, and make sense of insurance — so
          treatment doesn't have to wait.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenAssistance}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#E77727] hover:bg-[#d4691f] text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-[#E77727]/20 transition-colors duration-200 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E77727] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <span>Get assistance</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#about"
            className="w-full sm:w-auto flex items-center justify-center bg-white/5 hover:bg-white/10 text-white font-medium px-8 py-3.5 rounded-full transition-colors duration-200 border border-white/15 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Learn more
          </a>
        </motion.div>

        {/* Support highlights — grounded in the page instead of floating over it */}
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {highlights.map(({ icon: Icon, label, accent }) => (
            <li
              key={label}
              className="flex items-center gap-2 text-sm text-slate-300"
            >
              <Icon className={`w-4 h-4 ${accent}`} aria-hidden="true" />
              <span>{label}</span>
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Transition into the section below */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50/40 to-transparent pointer-events-none z-10" />
    </section>
  );
}
