"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0F243E] text-slate-300 pt-12 pb-6 border-t border-slate-800/60 font-sans">
      {/* OLD theme: bg-[#0F243E] */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Link href="/" aria-label="Swasth Bharat Healthcare Home">
                <Image
                  src="/logo.png"
                  alt="Swasth Bharat Healthcare Logo"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </Link>
            </div>

            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Swasth Bharat Healthcare guides patients and families through hospital coordination, cashless insurance approvals, and healthcare schemes with compassion and unwavering support.
            </p>
          </div>

          {/* Spacer on Desktop */}
          <div className="hidden lg:block lg:col-span-1" />
           
            {/* Quick Links Column (3 cols) */}
            <div className="md:col-span-3 lg:col-span-3 space-y-3">
              <h4 className="text-sm font-semibold text-white tracking-wide">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#network" className="hover:text-white transition-colors">Hospital Network</a></li>
                <li><a href="#impact" className="hover:text-white transition-colors">Social Impact</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Patient Stories</a></li>
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
          <p>© 2026 Swasth Bharat Healthcare (SBHC). All rights reserved.</p>
          <p className="text-slate-400">A patient-first healthcare support organization</p>
        </div>
      </div>
    </footer>
  );
}
