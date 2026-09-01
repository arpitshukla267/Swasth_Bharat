"use client";

import { useState, useEffect } from "react";
import { PhoneCall, Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface NavbarProps {
  onOpenAssistance: () => void;
}

export default function Navbar({ onOpenAssistance }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${
        scrolled
          ? "bg-black py-3 shadow-sm"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap- group">
          <div className= "group-hover:scale-105 transition-transform duration-200">
            <Image
              // src="/logo_2.png"
              src="/logo.png"
              alt="SBHC Logo"
              width={98}
              height={98}
              className="object-cover"
            />
          </div>
          {/* <div className="flex flex-col">
            <span
              className={`text-xl font-bold tracking-tight leading-none ${scrolled ? "text-slate-900" : "text-white"}`}
            >
              SBHC
            </span>
            <span
              className={`text-[11px] font-hindi font-medium mt-0.5 tracking-wide ${scrolled ? "text-slate-600" : "text-slate-200"}`}
            >
              स्वस्थ भारत हेल्थकेयर
            </span>
          </div> */}
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["About", "Services", "How It Works", "Impact", "Contact"].map(
            (item) => {
              const id = item.toLowerCase().replace(/\s+/g, "-");
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={`transition-colors duration-200 ${
                    scrolled
                      ? "text-white hover:text-orange-600"
                      : "text-slate-200 hover:text-white"
                  }`}
                >
                  {item}
                </a>
              );
            },
          )}
        </nav>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/swasth_bharat_healthcare.pdf"
            download="Swasth_Bharat_Healthcare_Brochure.pdf"
            className="hidden sm:flex items-center gap-2 bg-[#69beb6]/30 border border-[#69beb6]/50 hover:bg-[#69beb6]/45 text-white font-medium text-sm px-4 py-2.5 rounded-full transition-all duration-200"
          >
            <Download className="w-4 h-4 text-[#69beb6]" />
            <span>Download Brochure</span>
          </a>

          <button
            onClick={onOpenAssistance}
            className="flex items-center gap-2 bg-gradient-to-r from-[#E77727] to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-medium text-sm px-5 py-2.5 rounded-full shadow-lg shadow-[#E77727]/20 hover:shadow-[#E77727]/30 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Get Help</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled
                ? "text-white hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden md:hidden glass-nav border-b border-slate-200/80 bg-white/95 text-slate-900 shadow-2xl rounded-b-2xl mt-2"
          >
            <div className="px-3 py-3.5 flex flex-col items-start justify-between sm:justify-center overflow-x-auto whitespace-nowrap gap-2 scrollbar-none">
              {["About", "Services", "How It Works", "Impact", "Contact"].map(
                (item, index, arr) => {
                  const id = item.toLowerCase().replace(/\s+/g, "-");
                  return (
                    <a
                      key={item}
                      href={`#${id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3.5 py-2 w-full text-sm font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50 active:bg-orange-100 transition-all shadow-xs ${
                        index !== arr.length - 1
                          ? "border-b-1 border-b-gray-500"
                          : ""
                      }`}
                    >
                      {item}
                    </a>
                  );
                },
              )}
              <a
                href="/swasth_bharat_healthcare.pdf"
                download="Swasth_Bharat_Healthcare_Brochure.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="sm:hidden flex items-center gap-2 px-3.5 py-2.5 w-full text-sm font-semibold text-[#3f5a90] bg-[#69beb6]/30 border border-[#69beb6]/50 rounded-lg hover:bg-[#69beb6]/45 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Brochure</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
