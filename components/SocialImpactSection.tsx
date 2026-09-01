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
    const duration = 1500;
    const steps = 45;
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
    <span className="font-sans tabular-nums">
      {count.toLocaleString("en-IN")}
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
      className="relative overflow-hidden bg-[#FAF6EF] py-16 md:py-28"
    >
      {/* OLD theme: bg-[#FBF7F0] */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#E77727]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E77727]">
              Social Impact
            </span>
            <span className="h-px w-8 bg-[#E77727]" />
          </div>

          <h2 className="font-hindi text-3xl font-extrabold leading-tight text-black sm:text-5xl">
            <span>जनहित से जुड़ी </span>
            <span className="text-[#E77727]">स्वास्थ्य सहायता</span>
          </h2>

          <p className="mt-5 text-balance text-base leading-relaxed text-[#5B6663] sm:text-lg">
            From urban hospitals to rural communities, SBHC is committed to
            making healthcare accessible, understandable, and compassionate for
            every Indian family.
          </p>
        </div>

        {/* Hero image with docked quote panel */}
        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[#3f5a90] sm:aspect-[21/10]"
          >
            {/* OLD: bg-[#14201E] */}
            <Image
              src="/IMG-20260802-WA0045.jpg"
              alt="SBHC healthcare awareness drive in an Indian rural community"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1614]/70 via-[#0E1614]/10 to-transparent" />
          </motion.div>

          {/* Quote panel — docks over the bottom-left corner of the photo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="relative z-10 mx-4 -mt-10 max-w-md rounded-xl border border-[#3f5a90]/10 bg-white p-5 shadow-[0_10px_30px_-12px_rgba(63,90,144,0.25)] sm:mx-8 sm:-mt-14 sm:p-6"
          >
            <p className="font-serif text-base italic leading-snug text-[#3f5a90] sm:text-lg">
              &ldquo;The team travelled two hours to reach our village clinic —
              my mother finally got the care she needed, close to home.&rdquo;
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#5B6663]">
              Beneficiary family, Uttar Pradesh
              {/* Sample copy — replace with a real, permissioned testimonial */}
            </p>
          </motion.div>
        </div>

        {/* Stat strip — docked report band, no cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative z-0 mx-auto mt-2 max-w-5xl rounded-2xl bg-[#0E3B36] px-6 py-10 sm:mt-4 sm:px-10"
        >
          <div className="grid grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-white/10">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center gap-1 text-center sm:py-0 sm:first:pl-0 sm:[&:not(:first-child)]:pl-6"
              >
                <h3 className="text-3xl font-semibold text-white sm:text-4xl">
                  <CountUpNumber
                    target={stat.target}
                    suffix={stat.suffix}
                    inView={isInView}
                  />
                </h3>
                <p className="text-xs uppercase tracking-widest text-white/70 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
