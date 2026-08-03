"use client";

import Image from "next/image";
import { Building2, ShieldCheck, Landmark, Users } from "lucide-react";
import { motion } from "framer-motion";

const networkCategories = [
  {
    icon: Building2,
    label: "Hospitals",
    description: "500+ empaneled hospitals across metro & tier-2 cities",
  },
  {
    icon: ShieldCheck,
    label: "Insurance Companies",
    description: "All major health insurers including Star, HDFC, Niva, Care",
  },
  {
    icon: Landmark,
    label: "Government Panels",
    description: "Ayushman Bharat PM-JAY, CGHS, ECHS & State schemes",
  },
  {
    icon: Users,
    label: "TPAs & Coordinators",
    description: "Direct liaison with Medi Assist, Vidal, FHPL & all major TPAs",
  },
];

export default function NetworkSection() {
  return (
    <section className="py-12 md:py-24 bg-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#E77727] uppercase block mb-2">
              OUR NETWORK
            </span>
            <h2 className="font-hindi text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              <span className="block">अस्पतालों के साथ</span>
              <span className="text-[#E77727]">मजबूत समन्वय</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
              SBHC works as a bridge between all stakeholders in the healthcare
              ecosystem — hospitals, insurers, TPAs, and government panels — to
              ensure patients receive seamless care.
            </p>

            {/* Category Cards Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {networkCategories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <motion.div
                    key={cat.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.2 }}
                    className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-200 group cursor-default"
                  >
                    <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition-colors duration-200">
                      <Icon className="w-5 h-5 text-[#E77727]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {cat.label}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 group">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/network-meeting.png"
                  alt="SBHC network coordination meeting with hospital administrators"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating stat badge */}
            <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 bg-white px-5 py-3 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-3 z-10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                200+
              </div>
              <div>
                <span className="text-xs text-slate-500 font-medium block">
                  Partner Hospitals
                </span>
                <span className="text-sm font-bold text-slate-900">
                  Pan-India Network
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
