import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicScrollTracker from "@/components/CinematicScrollTracker";
import SiteBackground from "@/components/SiteBackground";
import SectionHeader from "@/components/SectionHeader";
import CaseStudyList from "@/components/CaseStudyList";

export const metadata: Metadata = {
  title: "Case Studies | AIRACODE",
  description:
    "Real projects: the problem, what we built, and the results, across finance, healthcare, retail and logistics.",
  alternates: { canonical: "https://airacode.online/case-studies" },
};

const testimonials = [
  {
    quote: "AIRACODE eliminated 6 years of technical debt in 8 weeks. Throughput tripled while infra bills dropped 40%.",
    name: "Marcus Vance",
    role: "CTO, FinTech Scaleup",
  },
  {
    quote: "Their AI agents work reliably in production, with strict controls and full HIPAA adherence.",
    name: "Dr. Evelyn Reed",
    role: "VP Medical Systems, Health Network",
  },
  {
    quote: "Their Next.js frontend and cloud setup withstood our heaviest Black Friday with zero blips.",
    name: "Siddharth Nair",
    role: "Head of Infra, Global Commerce",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <CinematicScrollTracker />
      <SiteBackground />
      <Navbar />

      <main className="relative z-10 flex-1 w-full">
        {/* ================= SECTION 01: HERO ================= */}
        <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-18 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 w-full">
          <div className="w-full max-w-[1800px] mx-auto text-center space-y-5">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#1e2530] dark:text-[#f3f4f6] tracking-tight leading-[1.05]">
              Case{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                studies
              </span>
            </h1>
            <p className="text-base sm:text-xl text-[#4b5563] dark:text-[#9ca3af] max-w-2xl mx-auto font-medium">
              The problem, what we built, and what changed for the business.
            </p>
          </div>
        </section>

        {/* ================= SECTION 02: LIST ================= */}
        <section className="relative pb-14 sm:pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 w-full">
          <div className="w-full max-w-[1400px] mx-auto">
            <CaseStudyList />
          </div>
        </section>

        {/* ================= SECTION 03: TESTIMONIALS ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1400px] mx-auto space-y-10">
            <SectionHeader title="What clients" highlightedWord="say" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {testimonials.map((t) => (
                <figure key={t.name} className="clay-card p-6 flex flex-col justify-between gap-4">
                  <blockquote className="text-sm text-[#4b5563] dark:text-[#9ca3af] leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="pt-3 border-t border-[#ede9e0] dark:border-white/10">
                    <span className="text-sm font-bold text-[#1e2530] dark:text-[#f3f4f6] block">{t.name}</span>
                    <span className="text-xs text-[#6b7280] dark:text-[#9ca3af] block">{t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 04: CTA ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="clay-card p-8 sm:p-12 text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black text-[#1e2530] dark:text-[#f3f4f6]">
              Your project{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                next?
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#4b5563] dark:text-[#9ca3af] max-w-lg mx-auto font-medium">
              Tell us what you&apos;re trying to fix. We&apos;ll reply within one business day.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="clay-btn clay-btn-coral px-8 py-3.5 text-base font-black">
                <span>Start a project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
