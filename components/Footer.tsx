"use client";

import { Heart } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0F243E] text-slate-300 pt-12 pb-6 border-t border-slate-800/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
               <Image
                  src="/logo_2.png"
                  alt="SBHC Logo"
                  width={96}
                  height={96}
                  className="object-cover"
                />  
              {/* <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-none">
                  Swasth Bharat Healthcare
                </span>
                <span className="text-[11px] font-hindi text-slate-400 mt-0.5">
                  स्वस्थ भारत हेल्थकेयर
                </span>
              </div> */}
            </div>

            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Guiding patients and families through healthcare challenges with compassion, coordination, and unwavering support.
            </p>
          </div>

          {/* Spacer on Desktop */}
          <div className="hidden lg:block lg:col-span-1" />
           
            {/* Quick Links Column (3 cols) */}
            <div className="md:col-span-3 lg:col-span-3 space-y-3">
              <h4 className="text-sm font-semibold text-white tracking-wide">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#impact" className="hover:text-white transition-colors">Impact</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
  
            {/* Services Column (3 cols) */}
            <div className="md:col-span-3 lg:col-span-3 space-y-3">
              <h4 className="text-sm font-semibold text-white tracking-wide">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#services" className="hover:text-white transition-colors">Cashless Support</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Insurance Coordination</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Govt. Schemes</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Claim Assistance</a></li>
              </ul>
            </div>
          </div>

        {/* Bottom Bar */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Swasth Bharat Healthcare. All rights reserved.</p>
          <p className="text-slate-400">A patient-first healthcare support organization</p>
        </div>
      </div>
    </footer>
  );
}
