"use client";

import { useState } from "react";
import Image from "next/image";
import { PhoneCall, Mail, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-0 overflow-hidden bg-[#0F243E]"
    >
      {/* Background Image with Radial Ellipse Semi-Circle Mask Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/IMG-20260802-WA0000.jpg"
          alt="Hospital entrance assistance background"
          fill
          className="object-cover object-center filter contrast-105 brightness-90 opacity-70"
        />
        {/* Radial Vignette: clear image in center, solid #0F243E at sides/edges */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 75% 85% at 50% 50%, rgba(15, 36, 62, 0.45) 0%, rgba(15, 36, 62, 0.82) 65%, #0F243E 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Column — Heading & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-hindi text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              <span className="block">हर मरीज को अकेला</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E77727] to-amber-500 block py-1">
                महसूस नहीं होना चाहिए
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-md">
              Whether you need immediate assistance with hospitalization,
              insurance guidance, or want to partner with SBHC — we&apos;re here
              to help.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-5">
              <a
                href="tel:+91 9286800211"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center shrink-0 group-hover:bg-orange-500/25 transition-colors">
                  <PhoneCall className="w-5 h-5 text-[#E77727]" />
                </div>
                <span className="text-sm sm:text-base font-medium text-slate-200 group-hover:text-white transition-colors">
                  +91 9286800211
                </span>
              </a>

              <a
                href="mailto: info@swasthbharathealthcare.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center shrink-0 group-hover:bg-orange-500/25 transition-colors">
                  <Mail className="w-5 h-5 text-[#E77727]" />
                </div>
                <span className="text-sm sm:text-base font-medium text-slate-200 group-hover:text-white transition-colors">
                  info@swasthbharathealthcare.com
                </span>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#E77727]" />
                </div>
                <span className="text-sm sm:text-base font-medium text-slate-200">
                  Adarsh Colony, Muradnagar, Ghaziabad, 201206
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white/[0.07] backdrop-blur-xl border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl">
              {!submitted ? (
                <>
                  <h3 className="text-xl font-bold text-white mb-6">
                    Get Assistance
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full px-5 py-3.5 text-sm rounded-xl bg-white/[0.08] border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500/50 transition-all"
                    />

                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full px-5 py-3.5 text-sm rounded-xl bg-white/[0.08] border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500/50 transition-all"
                    />

                    <input
                      type="email"
                      placeholder="Email (Optional)"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-5 py-3.5 text-sm rounded-xl bg-white/[0.08] border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500/50 transition-all"
                    />

                    <textarea
                      rows={4}
                      placeholder="Describe your situation..."
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-5 py-3.5 text-sm rounded-xl bg-white/[0.08] border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500/50 transition-all resize-none"
                    />

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 transition-all duration-200 transform hover:-translate-y-0.5 text-sm cursor-pointer"
                    >
                      <span>Submit Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    Request Submitted!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-xs mx-auto leading-relaxed">
                    Thank you,{" "}
                    <span className="font-semibold text-white">
                      {form.name}
                    </span>
                    . Our care team will reach out to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", phone: "", email: "", message: "" });
                    }}
                    className="mt-4 px-6 py-2.5 bg-white/10 border border-white/20 text-white text-xs font-semibold rounded-xl hover:bg-white/15 transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
