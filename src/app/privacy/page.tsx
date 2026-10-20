import Link from "next/link";
import { ShieldCheck, Lock, Database, Server } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicScrollTracker from "@/components/CinematicScrollTracker";
import SiteBackground from "@/components/SiteBackground";

export const metadata = {
  title: "Privacy Policy | AIRACODE",
  description: "How AIRACODE protects your confidentiality, intellectual property, and proprietary data.",
};

export default function PrivacyPage() {
  return (
    <>
      <CinematicScrollTracker />
      <SiteBackground />
      <Navbar />

      <main className="relative z-10 flex-1 w-full">
        <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-18 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 overflow-hidden w-full">
          <div className="w-full max-w-[1200px] mx-auto text-center space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#1e2530] dark:text-[#f3f4f6] tracking-tight">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">Policy</span>
            </h1>
            <p className="text-sm sm:text-base text-[#6b7280] dark:text-[#9ca3af] max-w-xl mx-auto font-medium">
              Last updated: October 2026. Built on transparent, zero-compromise engineering ethics.
            </p>
          </div>
        </section>

        <section className="relative pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 w-full">
          <div className="w-full max-w-4xl mx-auto space-y-6">
            <div className="clay-card p-6 sm:p-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-[#1e2530] dark:text-[#f3f4f6] flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-[#059669]" />
                <span>Core Guarantee</span>
              </h2>
              <p className="text-sm sm:text-base text-[#4b5563] dark:text-[#9ca3af] leading-relaxed">
                AIRACODE is a software development and AI engineering studio. We build bespoke software and models for our clients. 
                We do not sell your personal data, nor do we ever use client source code or proprietary training sets to train global public AI models.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
