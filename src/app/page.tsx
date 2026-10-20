import Link from "next/link";
import { ArrowRight, ArrowUpRight, CirclePlay } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicScrollTracker from "@/components/CinematicScrollTracker";
import SiteBackground from "@/components/SiteBackground";
import SectionHeader from "@/components/SectionHeader";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import HeroClayDiorama from "@/components/HeroClayDiorama";
import ServicesGrid from "@/components/ServicesGrid";
import InteractiveAgentTerminal from "@/components/InteractiveAgentTerminal";
import { clientCaseStudies } from "@/data/servicesData";

export default function HomePage() {
  return (
    <>
      <CinematicScrollTracker />
      <SiteBackground />
      <Navbar />

      <main className="relative z-10 flex-1 w-full">
        {/* ================= SECTION 01: HERO ================= */}
        <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 sm:px-8 py-16 sm:py-20 w-full">
          <AnimatedGridPattern
            className="mask-[radial-gradient(520px_circle_at_center,white,transparent)] inset-x-0 h-full skew-y-12 fill-[#eb4a2d]/25 stroke-[#1e2530]/10 dark:stroke-white/10 text-[#eb4a2d]"
            duration={3}
            maxOpacity={0.25}
            numSquares={30}
          />
          <div className="relative z-10 max-w-5xl text-center">
            <Link
              href="/case-studies"
              className="clay-pill inline-flex items-center gap-1.5 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#1e2530] dark:text-[#f3f4f6]"
            >
              <span className="w-2 h-2 rounded-full bg-[#eb4a2d]" />
              4 engineers, one team. See our work
              <ArrowUpRight className="w-4 h-4 text-[#eb4a2d]" />
            </Link>

            <h1 className="mx-auto mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#1e2530] dark:text-[#f3f4f6] leading-[1.05]">
              AI agents that do the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                real busy work
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-xl md:text-2xl text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-medium">
              We build AI-powered websites, apps and automations, and upgrade old systems, so your business runs faster with less manual work.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto clay-btn clay-btn-coral px-8 py-3.5 text-base font-black tracking-wide"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <a
                href="#ai-at-work"
                className="w-full sm:w-auto clay-btn clay-btn-white px-8 py-3.5 text-base font-bold text-[#1e2530] dark:text-[#f3f4f6]"
              >
                <CirclePlay className="w-5 h-5" />
                <span>See it in action</span>
              </a>
            </div>
          </div>
        </section>

        {/* ================= SECTION 01b: OVERVIEW ================= */}
        <section className="relative pb-16 sm:pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-6">
            <HeroClayDiorama />

            {/* Quick facts */}
            <div className="w-full max-w-5xl mx-auto pt-2">
              <div className="clay-card p-4 sm:p-5 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                <div>
                  <span className="text-[11px] font-mono text-[#6b7280] dark:text-[#9ca3af] uppercase font-bold block">Timeline</span>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-[#eb4a2d]">1–4 months</span>
                </div>
                <div className="border-t sm:border-t-0 sm:border-l border-[#ede9e0] dark:border-white/10 pt-2 sm:pt-0">
                  <span className="text-[11px] font-mono text-[#6b7280] dark:text-[#9ca3af] uppercase font-bold block">You own</span>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-[#059669]">All code</span>
                </div>
                <div className="border-t md:border-t-0 md:border-l border-[#ede9e0] dark:border-white/10 pt-2 md:pt-0">
                  <span className="text-[11px] font-mono text-[#6b7280] dark:text-[#9ca3af] uppercase font-bold block">Team</span>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-[#7c3aed]">4 engineers</span>
                </div>
                <div className="border-t sm:border-t-0 sm:border-l border-[#ede9e0] dark:border-white/10 pt-2 sm:pt-0">
                  <span className="text-[11px] font-mono text-[#6b7280] dark:text-[#9ca3af] uppercase font-bold block">You talk to</span>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-[#2563eb]">Developers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 02: CAPABILITIES ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1800px] mx-auto">
            <SectionHeader
              title="What we"
              highlightedWord="do"
              subtitle="Eight ways we help businesses save time and grow with AI."
            />
            <ServicesGrid />
          </div>
        </section>

        {/* ================= SECTION 03: AI AT WORK ================= */}
        <section id="ai-at-work" className="scroll-mt-24 relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1800px] mx-auto">
            <SectionHeader
              title="See AI"
              highlightedWord="at work"
              subtitle="A simple look at how AI can take real tasks off your team's plate."
            />
            <InteractiveAgentTerminal />
          </div>
        </section>

        {/* ================= SECTION 05: CASE STUDIES ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
              title="Recent"
              highlightedWord="work"
              subtitle="Real problems we've solved, and what changed for the business."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {clientCaseStudies.slice(0, 2).map((study) => (
                <Link
                  key={study.id}
                  href={`/case-studies/${study.slug}`}
                  className="clay-card p-6 sm:p-8 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold uppercase text-[#eb4a2d] px-3 py-1 rounded-full bg-[#ede9e0] dark:bg-[#1f2633]">
                        {study.industry}
                      </span>
                      
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-[#1e2530] dark:text-[#f3f4f6] leading-snug">
                      {study.headline}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-medium">
                      {study.summary}
                    </p>

                    <div className="grid grid-cols-3 gap-2.5 pt-2">
                      {study.metrics.map((m) => (
                        <div key={m.label} className="p-2.5 rounded-xl bg-[#f6f3ee] dark:bg-[#1a2130] text-center">
                          <span className="text-[10px] text-[#6b7280] dark:text-[#9ca3af] font-bold block truncate">{m.label}</span>
                          <span className="text-base font-mono font-black text-[#1e2530] dark:text-[#f3f4f6]">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#ede9e0] dark:border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[#6b7280] dark:text-[#9ca3af] line-clamp-1">{study.client}</span>
                    <span className="font-bold text-[#eb4a2d] shrink-0 ml-2 inline-flex items-center gap-1">
                      Read case study <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center pt-2">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#eb4a2d] hover:text-[#c0392b] transition-colors"
              >
                <span>See all case studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= SECTION 06: CTA ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1800px] mx-auto">
            <div className="clay-card p-8 sm:p-14 text-center space-y-4 max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-black text-[#1e2530] dark:text-[#f3f4f6]">
                Have a project{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                  in mind?
                </span>
              </h2>

            <p className="text-sm sm:text-base text-[#4b5563] dark:text-[#9ca3af] font-medium max-w-xl mx-auto">
              Tell us what you need. We reply within one business day with clear next steps.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto clay-btn clay-btn-coral px-8 py-3.5 text-base font-black tracking-wide"
              >
                <span>Start a project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="w-full sm:w-auto clay-btn clay-btn-white px-8 py-3.5 text-base font-bold text-[#1e2530] dark:text-[#f3f4f6]"
              >
                <span>See our work</span>
              </Link>
            </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
