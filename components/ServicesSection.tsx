"use client";

import {
  CreditCard,
  FileCheck2,
  Landmark,
  FileText,
  Building,
  LogOut,
  ClipboardCheck,
  UserCheck,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

interface ServicesSectionProps {
  onOpenAssistance: () => void;
}

export default function ServicesSection({ onOpenAssistance }: ServicesSectionProps) {
  const services = [
    {
      id: "cashless",
      icon: CreditCard,
      title: "Cashless Treatment Support",
      description:
        "End-to-end assistance for cashless hospitalization across empaneled networks.",
      badgeColor: "bg-orange-50 text-orange-600 border-orange-100",
    },
    {
      id: "tpa",
      icon: FileCheck2,
      title: "Insurance & TPA Coordination",
      description:
        "Seamless liaison between patients, insurance companies, and TPAs.",
      badgeColor: "bg-sky-50 text-sky-600 border-sky-100",
    },
    {
      id: "govt",
      icon: Landmark,
      title: "Government Scheme Guidance",
      description:
        "Navigate Ayushman Bharat, PMJAY, and state health schemes with ease.",
      badgeColor: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      id: "documentation",
      icon: FileText,
      title: "Documentation Assistance",
      description:
        "Complete support for medical records, claim forms, and hospital paperwork.",
      badgeColor: "bg-[#69beb6]/30 text-[#3f5a90] border-[#69beb6]/40",
    },
    {
      id: "hospital",
      icon: Building,
      title: "Hospital Coordination",
      description:
        "Direct coordination with hospital admin for smooth patient processing.",
      badgeColor: "bg-indigo-50 text-indigo-600 border-indigo-100",
    },
    {
      id: "discharge",
      icon: LogOut,
      title: "Discharge Support",
      description:
        "Hassle-free discharge processes with proper billing reconciliation.",
      badgeColor: "bg-rose-50 text-rose-600 border-rose-100",
    },
    {
      id: "claim",
      icon: ClipboardCheck,
      title: "Claim Assistance",
      description:
        "Expert help with claim filing, follow-ups, and settlement tracking.",
      badgeColor: "bg-teal-50 text-teal-600 border-teal-100",
    },
    {
      id: "management",
      icon: UserCheck,
      title: "Dedicated Case Management",
      description:
        "A personal coordinator assigned to guide you through every step.",
      badgeColor: "bg-purple-50 text-purple-600 border-purple-100",
    },
  ];

  return (
    <section id="services" className="py-12 md:py-24 bg-slate-50/80 relative overflow-hidden">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-200/20 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-sky-200/20 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-orange-600 uppercase block mb-2">
            OUR SERVICES
          </span>

          <h2 className="font-hindi text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            हम कैसे सहायता करते हैं
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-balance">
            Comprehensive healthcare support services designed to remove every barrier between patients and their treatment.
          </p>
        </div>

        {/* 8 Services Grid (2 cols on mobile, 4 cols on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.2 }}
                onClick={onOpenAssistance}
                className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-orange-300/80 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Soft Icon Badge */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border flex items-center justify-center mb-3 sm:mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md ${service.badgeColor}`}
                  >
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xs sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed font-normal mt-1.5 sm:mt-2.5">
                    {service.description}
                  </p>
                </div>

                {/* Subtle Interactive Link */}
                <div className="pt-2 sm:pt-4 mt-3 sm:mt-6 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-xs font-semibold text-slate-500 group-hover:text-orange-600 transition-colors">
                  <span>Get Guidance</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
