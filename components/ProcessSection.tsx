"use client";

import { useRef, useEffect, useState } from "react";
import { ClipboardList, FileSearch, Handshake, HeartPulse, MapPin } from "lucide-react";

const steps = [
  {
    num: "01",
    hindiTitle: "केस पंजीकरण",
    englishTitle: "Case Registration",
    description:
      "Patient or family contacts SBHC. We listen, understand, and register the case with full medical and financial details.",
    icon: ClipboardList,
  },
  {
    num: "02",
    hindiTitle: "सत्यापन और दस्तावेज़ीकरण",
    englishTitle: "Verification & Documentation",
    description:
      "Our team verifies all documents, insurance eligibility, and applicable government schemes for the patient.",
    icon: FileSearch,
  },
  {
    num: "03",
    hindiTitle: "निकटतम अस्पताल आवंटन",
    englishTitle: "Nearest Hospital Allocation",
    description:
      "Based on medical needs and location, we match and allocate the patient to the nearest suitable partner hospital with optimal bed availability.",
    icon: MapPin,
  },
  {
    num: "04",
    hindiTitle: "समन्वय और अनुमोदन",
    englishTitle: "Coordination & Approval",
    description:
      "We coordinate directly with hospitals, TPAs, and insurers to get approvals and clearances in minimal time.",
    icon: Handshake,
  },
  {
    num: "05",
    hindiTitle: "उपचार और डिस्चार्ज",
    englishTitle: "Treatment & Discharge",
    description:
      "We ensure smooth treatment, continuous support, billing reconciliation, and peaceful discharge.",
    icon: HeartPulse,
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [revealedSteps, setRevealedSteps] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !timelineRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Calculate how far user has scrolled into the timeline area
      // The timeline starts from the top of the timeline container
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;

      // Start filling when top of timeline hits 70% of viewport
      const triggerPoint = windowH * 0.7;
      const scrolledPast = triggerPoint - timelineTop;

      if (scrolledPast <= 0) {
        setLineHeight(0);
        setRevealedSteps([false, false, false, false]);
        return;
      }

      // Percentage of timeline scrolled
      const pct = Math.min(Math.max(scrolledPast / timelineHeight, 0), 1);
      setLineHeight(pct * 100);

      // Reveal steps at progressive thresholds
      const newRevealed = steps.map((_, i) => {
        const threshold = (i + 0.3) / steps.length;
        return pct >= threshold;
      });
      setRevealedSteps(newRevealed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="how-it-works" className="py-12 md:py-24 bg-slate-50 relative overflow-hidden">
      <div
        ref={sectionRef}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#E77727] uppercase block mb-2">
            OUR PROCESS
          </span>
          <h2 className="font-hindi text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            कैसे काम करता है SBHC
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            A simple, transparent 5-step process that takes you from confusion
            to care.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Center Vertical Line Track (grey background) */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 bg-slate-200 rounded-full hidden md:block"
            aria-hidden="true"
          />
          {/* Filled Line (progressive orange) */}
          <div
            className="absolute left-1/2 top-0 w-[3px] -translate-x-1/2 rounded-full hidden md:block transition-all duration-100 ease-out"
            style={{
              height: `${lineHeight}%`,
              background:
                "linear-gradient(180deg, #ea580c 0%, #f59e0b 100%)",
            }}
            aria-hidden="true"
          />

          {/* Mobile Line (left side) */}
          <div
            className="absolute left-6 top-0 bottom-0 w-[3px] bg-slate-200 rounded-full md:hidden"
            aria-hidden="true"
          />
          <div
            className="absolute left-6 top-0 w-[3px] rounded-full md:hidden transition-all duration-100 ease-out"
            style={{
              height: `${lineHeight}%`,
              background:
                "linear-gradient(180deg, #ea580c 0%, #f59e0b 100%)",
            }}
            aria-hidden="true"
          />

          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLeft = idx % 2 === 0;
              const isRevealed = revealedSteps[idx];

              return (
                <div
                  key={step.num}
                  className="relative flex items-center md:min-h-[220px] min-h-[180px]"
                >
                  {/* ---- DESKTOP LAYOUT ---- */}
                  {/* Left content area */}
                  <div className="hidden md:flex w-1/2 justify-end pr-16">
                    {isLeft && (
                      <div
                        className={`text-right max-w-sm transition-all duration-700 ease-out ${
                          isRevealed
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-8"
                        }`}
                      >
                        {/* Large faded step number */}
                        <span className="text-7xl font-extrabold text-slate-200/70 leading-none block -mb-4 select-none font-hindi">
                          {step.num}
                        </span>
                        <h3 className="font-hindi text-xl font-bold text-slate-900">
                          {step.hindiTitle}
                        </h3>
                        <p className="text-sm font-semibold text-slate-600 mt-0.5">
                          {step.englishTitle}
                        </p>
                        <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center icon node (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-14 h-14 rounded-full border-[3px] flex items-center justify-center shadow-lg transition-all duration-500 ease-out ${
                        isRevealed
                          ? "bg-white border-[#E77727] scale-100"
                          : "bg-slate-100 border-slate-300 scale-75"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 transition-colors duration-500 ${
                          isRevealed ? "text-[#E77727]" : "text-slate-400"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Right content area */}
                  <div className="hidden md:flex w-1/2 pl-16">
                    {!isLeft && (
                      <div
                        className={`text-left max-w-sm transition-all duration-700 ease-out ${
                          isRevealed
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-8"
                        }`}
                      >
                        <span className="text-7xl font-extrabold text-slate-200/70 leading-none block -mb-4 select-none font-hindi">
                          {step.num}
                        </span>
                        <h3 className="font-hindi text-xl font-bold text-slate-900">
                          {step.hindiTitle}
                        </h3>
                        <p className="text-sm font-semibold text-slate-600 mt-0.5">
                          {step.englishTitle}
                        </p>
                        <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* ---- MOBILE LAYOUT ---- */}
                  {/* Mobile icon node */}
                  <div className="md:hidden absolute left-6 -translate-x-1/2 z-10">
                    <div
                      className={`w-12 h-12 rounded-full border-[3px] flex items-center justify-center shadow-lg transition-all duration-500 ease-out ${
                        isRevealed
                          ? "bg-white border-[#E77727] scale-100"
                          : "bg-slate-100 border-slate-300 scale-75"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 transition-colors duration-500 ${
                          isRevealed ? "text-[#E77727]" : "text-slate-400"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Mobile content */}
                  <div
                    className={`md:hidden ml-16 transition-all duration-700 ease-out ${
                      isRevealed
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                  >
                    <span className="text-5xl font-extrabold text-slate-200/70 leading-none block -mb-3 select-none font-hindi">
                      {step.num}
                    </span>
                    <h3 className="font-hindi text-lg font-bold text-slate-900">
                      {step.hindiTitle}
                    </h3>
                    <p className="text-xs font-semibold text-slate-600 mt-0.5">
                      {step.englishTitle}
                    </p>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed max-w-xs">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
