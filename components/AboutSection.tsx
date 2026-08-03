"use client";

import Image from "next/image";
import { Heart, Compass, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Every patient is treated with dignity and empathy throughout their healthcare journey.",
      iconBg: "bg-sky-50 text-sky-600 border-sky-100",
    },
    {
      icon: Compass,
      title: "Guidance",
      description: "We simplify complex medical processes so families can focus on recovery.",
      iconBg: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      icon: ShieldCheck,
      title: "Trust",
      description: "Transparent, honest support that puts patient welfare above everything.",
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 md:py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column Image (Matches right column content height on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative flex flex-col"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100/90 bg-slate-100 group h-full min-h-[420px] w-full">
              <Image
                src="/IMG-20260802-WA0034.jpg"
                alt="SBHC Advisor with Indian family"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

              {/* Floating verified badge overlay */}
              <div className="absolute bottom-6 left-6 glass-nav px-4 py-3 rounded-2xl shadow-xl border border-white/60 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold shadow-md">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium block">
                    Patient Satisfaction
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    99.4% Verified Relief
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Subhead Badge */}
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#E77727] uppercase mb-2">
              ABOUT SBHC
            </span>

            {/* Main Headline Devanagari & English */}
            <h2 className="font-hindi text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
              सेवा से समाधान तक
            </h2>
            <p className="text-lg text-slate-500 font-medium mt-1 mb-6">
              From Service to Solution
            </p>

            {/* Main Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              Swasth Bharat Healthcare (SBHC) is a patient-first healthcare
              support organization that bridges the gap between hospitals,
              insurers, TPAs, and government schemes — ensuring every patient
              receives timely treatment, proper documentation, and compassionate
              guidance through their most difficult moments.
            </p>

            {/* Core Values List (Screenshot 3 layout) */}
            <div className="space-y-5">
              {values.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.25 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100/80 transition-colors duration-200 border border-slate-100"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 shadow-sm ${val.iconBg}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {val.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
