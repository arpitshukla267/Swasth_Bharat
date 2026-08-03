"use client";

import { Star, Quote, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const stories = [
    {
      name: "Rajesh Kumar Sharma",
      location: "New Delhi",
      hospital: "Max Super Speciality Hospital",
      story: "When my father was admitted for cardiac surgery, our TPA cashless authorization got stuck for 14 hours. SBHC Care Manager Manoj step in, resolved the query within 40 minutes, and ensured zero out-of-pocket payment.",
      rating: 5,
      tag: "Cardiac Admission Support",
    },
    {
      name: "Priya & Sunita Verma",
      location: "Lucknow, UP",
      hospital: "Medanta Hospital",
      story: "We had no idea how Ayushman Bharat golden card process worked for my mother's chemotherapy. SBHC guided us end-to-end without taking a single rupee from us. Pure blessings for their team!",
      rating: 5,
      tag: "Ayushman Bharat PM-JAY",
    },
    {
      name: "Amitabh Banerjee",
      location: "Mumbai",
      hospital: "Fortis Healthcare",
      story: "At discharge, the hospital added ₹38,000 in unexplained non-medical item fees. SBHC audited the bill line-by-line and got ₹31,500 waived as per policy guidelines. Highly trustworthy service.",
      rating: 5,
      tag: "Medical Bill Audit",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#E77727] uppercase block mb-2">
            REAL HUMAN STORIES
          </span>
          <h2 className="font-hindi text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            मरीजों के परिवारों का भरोसा
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Hear from families across India whose difficult hospital journeys
            were made stress-free by SBHC care coordinators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-orange-100 text-orange-800">
                    {item.tag}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-orange-400/30 mb-3" />

                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.story}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#E77727]" />
                    <span>
                      {item.location} • {item.hospital}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
