"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChallengeSection from "@/components/ChallengeSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import NetworkSection from "@/components/NetworkSection";
import SocialImpactSection from "@/components/SocialImpactSection";
import InteractiveWidget from "@/components/InteractiveWidget";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import AssistanceModal from "@/components/AssistanceModal";
import HeroSection_2 from "@/components/HeroSection_2";

export default function Home() {
  const [isAssistanceOpen, setIsAssistanceOpen] = useState(false);

  const handleOpenAssistance = () => setIsAssistanceOpen(true);
  const handleCloseAssistance = () => setIsAssistanceOpen(false);

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 selection:bg-orange-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenAssistance={handleOpenAssistance} />

      {/* Screenshot 1: Hero Section */}
      {/* <HeroSection onOpenAssistance={handleOpenAssistance} /> */}
      <HeroSection_2 onOpenAssistance={handleOpenAssistance} />

      {/* Screenshot 2: About SBHC Section */}
      <AboutSection />

      {/* Screenshot 3: The Challenge Section */}
      <ChallengeSection />

      {/* Additional Services Pillar Section */}
      <ServicesSection onOpenAssistance={handleOpenAssistance} />

      {/* 4-Step Process Timeline with Scroll-Triggered Line */}
      <ProcessSection />

      {/* Our Network Section */}
      <NetworkSection />

      {/* Social Impact with Counting Stats */}
      <SocialImpactSection />

      {/* Interactive Policy & Scheme Guidance Calculator */}
      {/* <InteractiveWidget onOpenAssistance={handleOpenAssistance} /> */}

      {/* Verified Human Stories & Testimonials */}
      <TestimonialsSection />

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Callback / Assistance Popup Modal */}
      <AssistanceModal
        isOpen={isAssistanceOpen}
        onClose={handleCloseAssistance}
      />
    </main>
  );
}
