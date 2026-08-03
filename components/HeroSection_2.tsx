"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, BadgeCheck, Quote } from "lucide-react";
import {
  motion,
  AnimatePresence,
  animate,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";


/** Pool of all available photos for the collage rotation. */
const ALL_IMAGES = [
  "/IMG_20260802_172558.jpg",
  "/IMG-20260802-WA0050.jpg",
  "/IMG-20260802-WA0001.jpg",
  "/IMG-20260802-WA0000.jpg",
  "/IMG-20260802-WA0004.jpg",
  "/IMG-20260802-WA0034.jpg",
  "/IMG-20260802-WA0040.jpg",
  "/IMG-20260802-WA0045.jpg",
];

const ROTATE_INTERVAL = 2000; // ms — image rotation speed

interface HeroSectionProps {
  onOpenAssistance: () => void;
}

const DURATION = 1.5; // seconds — count-up animation length

/**
 * Animates a number from 0 -> value once it scrolls into view.
 * Formats with locale thousand-separators and an optional suffix (e.g. "+").
 */
function AnimatedNumber({
  value,
  suffix = "",
  duration = DURATION,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    Math.round(latest).toLocaleString("en-IN"),
  );
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, value, {
      duration,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [isInView, value, duration, motionValue]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => setDisplay(latest));
    return unsubscribe;
  }, [rounded]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/**
 * Special-cased "24×7" stat: counts hours (0→24) and days (0→7)
 * independently, joined by the × symbol, so the whole strip animates.
 */
function AnimatedDual({
  first,
  second,
  duration = DURATION,
}: {
  first: number;
  second: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const firstValue = useMotionValue(0);
  const secondValue = useMotionValue(0);
  const firstRounded = useTransform(firstValue, (latest) => Math.round(latest));
  const secondRounded = useTransform(secondValue, (latest) =>
    Math.round(latest),
  );

  const [displayFirst, setDisplayFirst] = useState(0);
  const [displaySecond, setDisplaySecond] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controlsA = animate(firstValue, first, { duration, ease: "easeOut" });
    const controlsB = animate(secondValue, second, {
      duration,
      ease: "easeOut",
    });
    return () => {
      controlsA.stop();
      controlsB.stop();
    };
  }, [isInView, first, second, duration, firstValue, secondValue]);

  useEffect(() => {
    const unsubA = firstRounded.on("change", setDisplayFirst);
    const unsubB = secondRounded.on("change", setDisplaySecond);
    return () => {
      unsubA();
      unsubB();
    };
  }, [firstRounded, secondRounded]);

  return (
    <span ref={ref}>
      {displayFirst}×{displaySecond}
    </span>
  );
}

/**
 * A single collage cell that crossfades between images from the pool
 * every `ROTATE_INTERVAL` ms. Each slot starts at a different index
 * so they don't all show the same image at the same time.
 */
function RotatingImage({
  startIndex,
  alt,
  priority = false,
}: {
  startIndex: number;
  alt: string;
  priority?: boolean;
}) {
  const [currentIdx, setCurrentIdx] = useState(startIndex % ALL_IMAGES.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % ALL_IMAGES.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={ALL_IMAGES[currentIdx]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <Image
          src={ALL_IMAGES[currentIdx]}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
        />
      </motion.div>
    </AnimatePresence>
  );
}

type Stat =
  | { kind: "number"; value: number; suffix?: string; label: string }
  | { kind: "dual"; first: number; second: number; label: string };

const stats: Stat[] = [
  { kind: "number", value: 1200, suffix: "+", label: "Families guided" },
  { kind: "number", value: 200, suffix: "+", label: "Partner hospitals" },
  { kind: "dual", first: 24, second: 7, label: "Coordinator support" },
];

export default function HeroSection({
  onOpenAssistance,
}: HeroSectionProps) {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-[#0E3D3B] pb-28 pt-28 lg:pb-36 lg:pt-44">
        <div className="relative z-10 mx-auto flex flex-col-reverse md:grid max-w-7xl md:grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1fr_1fr] lg:gap-8">
          {/* Left: message */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-200"
            >
              <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Patient-first healthcare support</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-hindi mt-6 max-w-xl text-4xl font-bold leading-[1.25] tracking-tight text-white sm:text-5xl"
            >
              <span className="block">हर मरीज़ को सही दिशा,</span>
              <span className="block text-[#F0A24F]">सही समय पर उपचार</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg"
            >
              Hospital visits are stressful enough without paperwork getting in
              the way. SBHC works alongside patients and families to coordinate
              care, sort out approvals, and make sense of insurance — so
              treatment doesn't have to wait.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex  gap-4 sm:flex-row"
            >
              <button
                onClick={onOpenAssistance}
                className="inline-flex items-center justify-center gap-2 text-nowrap rounded-full bg-[#E77727] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/20 transition-colors duration-200 hover:bg-[#d4691f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0A24F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E3D3B]"
              >
                <span>Get assistance</span>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>

              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full text-nowrap border border-white/25 px-8 py-3.5 text-base font-medium text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E3D3B]"
              >
                Learn more
              </a>
            </motion.div>
          </div>

          {/* Right: photo collage — images rotate every 2s */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto grid h-[35vh] md:h-[420px] w-full max-w-md grid-cols-2 grid-rows-2 gap-4 sm:h-[480px] lg:max-w-none"
          >
            {/* Slot 1 — tall left column */}
            <div className="relative col-span-1 row-span-2 -rotate-2 overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
              <RotatingImage
                startIndex={0}
                alt="SBHC coordinator assisting a patient's family"
                priority
              />
            </div>

            {/* Slot 2 — top-right */}
            <div className="relative col-span-1 row-span-1 rotate-2 overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
              <RotatingImage
                startIndex={3}
                alt="A hospital consultation supported by SBHC"
              />
            </div>

            {/* Slot 3 — bottom-right */}
            <div className="relative col-span-1 row-span-1 -rotate-1 overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
              <RotatingImage
                startIndex={5}
                alt="Documentation and insurance support in progress"
              />
            </div>

            {/* Floating quote card — replace with a real family's words */}
            <div className="absolute -bottom-8 left-1/2 hidden w-64 -translate-x-1/2 rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-xl sm:block">
              <Quote className="h-4 w-4 text-[#E77727]" aria-hidden="true" />
              <p className="mt-1 text-sm italic leading-snug text-[#1C2B2A]/80">
                "They handled everything with the hospital. We could just be
                with him."
              </p>
              <p className="mt-2 text-xs font-medium text-[#1C2B2A]/50">
                — Placeholder, swap for a real family's testimonial
              </p>
            </div>
          </motion.div>
        </div>

        {/* Organic divider into the stats strip */}
        <svg
          className="absolute -bottom-1 left-0 h-12 md:h-24 w-full text-[#FAF6EF] pointer-events-none"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M0,64 C240,100 480,20 720,32 C960,44 1200,96 1440,56 L1440,100 L0,100 Z"
          />
        </svg>
      </section>

      {/* ============ STATS STRIP ============ */}
      <section className="relative z-10 -mt-1 bg-[#FAF6EF] py-2 md:py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-3 divide-x divide-[#E2D8C4] px-3 sm:px-6">
          {" "}
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex h-full flex-col items-center justify-start px-2 py-4 text-center sm:px-6 sm:py-6"
            >
              <p className="font-hindi text-2xl font-bold text-[#0E3D3B] sm:text-4xl">
                {stat.kind === "number" ? (
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                ) : (
                  <AnimatedDual first={stat.first} second={stat.second} />
                )}
              </p>

              <p className="mt-2 min-h-[48px] text-[11px] leading-5 text-[#1C2B2A]/60 sm:min-h-0 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
