"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { target: 50000, suffix: "+", label: "Patients Supported" },
  { target: 200, suffix: "+", label: "Hospital Partners" },
  { target: 15, suffix: "+", label: "States Covered" },
  { target: 98, suffix: "%", label: "Satisfaction Rate" },
];

function CountUpNumber({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 3000; // 3 seconds
    const steps = 50;
    const stepTime = duration / steps;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function SocialImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="py-12 md:py-24 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#E77727] uppercase block mb-2">
            SOCIAL IMPACT
          </span>

          <h2 className="font-hindi text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            <span>जनहित से जुड़ी </span>
            <span className="text-[#E77727]">स्वास्थ्य सहायता</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-balance">
            From urban hospitals to rural communities, SBHC is committed to
            making healthcare accessible, understandable, and compassionate for
            every Indian family.
          </p>
        </div>

        {/* Large Featured Image (Matching Screenshot 1) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2x bg-slate-900 relative aspect-[16/9] sm:aspect-[21/10]"
        >
          <Image
            src="/IMG-20260802-WA0045.jpg"
            alt="SBHC Healthcare Awareness drive in Indian rural community"
            fill
            className="object-cover object-center filter brightness-95 hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </motion.div>

        {/* 4 Stats Cards with Counting Animation (Matching Screenshot 2) */}
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-3xl border font-sans font-semibold border-slate-200 shadow-sm text-center hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl text-black tracking-tight group-hover:scale-105 transition-transform duration-200">
                <CountUpNumber
                  target={stat.target}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

