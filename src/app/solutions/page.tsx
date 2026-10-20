import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  Cpu, 
  Workflow, 
  Layers, 
  ArrowRight, 
  Server, 
  CheckCircle2, 
  Zap, 
  Database,
  Terminal,
  Bot
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicScrollTracker from "@/components/CinematicScrollTracker";
import SiteBackground from "@/components/SiteBackground";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Solutions | AIRACODE",
  description:
    "How AIRACODE upgrades old business systems step by step, adds AI where it helps most, and keeps your data private.",
};

export default function SolutionsPage() {
  const industries = [
    {
      name: "FinTech",
      challenge: "Old systems too slow to catch fraud while a payment is happening.",
      solution: "A modern data setup plus a private AI model that checks every payment instantly.",
      roi: "74% faster checks, 4x more payments handled.",
      tagColor: "bg-[#eb4a2d]/10 text-[#eb4a2d]",
    },
    {
      name: "HealthTech",
      challenge: "Clinicians buried in patient records, with strict privacy rules.",
      solution: "A private AI assistant that summarises records and flags urgent cases.",
      roi: "80% smaller triage backlog.",
      tagColor: "bg-[#7c3aed]/10 text-[#7c3aed]",
    },
    {
      name: "Commerce",
      challenge: "Checkout slowing down during big sales.",
      solution: "A faster storefront and hosting that adds capacity automatically.",
      roi: "52M events on peak day, no downtime.",
      tagColor: "bg-[#2563eb]/10 text-[#2563eb]",
    },
    {
      name: "Logistics",
      challenge: "Shipment tracking spread across many disconnected systems.",
      solution: "Connected systems plus AI agents that plan and assign deliveries.",
      roi: "92% of dispatches automatic, 65% less manual work.",
      tagColor: "bg-[#059669]/10 text-[#059669]",
    },
  ];

  return (
    <>
      <CinematicScrollTracker />
      <SiteBackground />
      <Navbar />

      <main className="relative z-10 flex-1 w-full">
        {/* ================= SECTION 01: HERO ================= */}
        <section className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 overflow-hidden w-full">
          <div className="w-full max-w-[1800px] mx-auto text-center space-y-5">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#1e2530] dark:text-[#f3f4f6] tracking-tight leading-[1.05]">
              Upgrade without{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                the downtime
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#4b5563] dark:text-[#9ca3af] max-w-2xl mx-auto font-medium">
              We replace old, hard-to-change systems one piece at a time, and add AI where it helps, while your business keeps running.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/contact"
                className="clay-btn clay-btn-coral px-8 py-3.5 text-base font-black tracking-wide"
              >
                <span>Book a free call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#blueprint"
                className="clay-btn clay-btn-white px-8 py-3.5 text-base font-bold text-[#1e2530] dark:text-[#f3f4f6]"
              >
                <span>See how it works</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ================= SECTION 02: BLUEPRINT ================= */}
        <section id="blueprint" className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 scroll-mt-20 w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
              title="How we"
              highlightedWord="upgrade"
              subtitle="Four steps. Your system stays online the whole time."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  phase: "Step 1",
                  title: "Copy your data",
                  icon: Database,
                  desc: "We copy your live data into a new, modern system. The old system keeps working as normal.",
                },
                {
                  phase: "Step 2",
                  title: "Rebuild in pieces",
                  icon: Workflow,
                  desc: "We rebuild one feature at a time and move it over, instead of replacing everything at once.",
                },
                {
                  phase: "Step 3",
                  title: "Add private AI",
                  icon: Cpu,
                  desc: "Where AI helps, we add it, running inside your own cloud account so your data stays yours.",
                },
                {
                  phase: "Step 4",
                  title: "Switch over safely",
                  icon: Server,
                  desc: "We move users over gradually and watch closely, with a one-click way back if needed.",
                },
              ].map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.phase} className="clay-card p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#eb4a2d]">{step.phase}</span>
                      <Icon className="w-5 h-5 text-[#6b7280] dark:text-[#9ca3af]" />
                    </div>
                    <h3 className="text-lg font-black text-[#1e2530] dark:text-[#f3f4f6]">{step.title}</h3>
                    <p className="text-xs text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-medium">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= SECTION 03: INDUSTRY MATRIX ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
              title="By"
              highlightedWord="industry"
              subtitle="Common problems we solve, and what changed for the business."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {industries.map((ind) => (
                <div key={ind.name} className="clay-card p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-black text-[#1e2530] dark:text-[#f3f4f6]">{ind.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${ind.tagColor}`}>
                      Example
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="p-3 rounded-xl bg-[#ede9e0]/80 dark:bg-white/5">
                      <span className="text-[#6b7280] dark:text-[#9ca3af] font-mono text-[10px] uppercase font-bold block">
                        The problem
                      </span>
                      <p className="text-[#1e2530] dark:text-[#f3f4f6] font-medium mt-0.5">{ind.challenge}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-[#151a24] border border-[#ede9e0] dark:border-white/10">
                      <span className="text-[#eb4a2d] font-mono text-[10px] uppercase font-bold block">
                        What we built
                      </span>
                      <p className="text-[#1e2530] dark:text-[#f3f4f6] font-medium mt-0.5">{ind.solution}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#10b981]/10 dark:bg-[#059669]/20 border border-[#10b981]/20 dark:border-[#059669]/30">
                      <span className="text-[#059669] font-mono text-[10px] uppercase font-bold block">
                        The result
                      </span>
                      <p className="text-[#059669] font-bold text-sm mt-0.5">{ind.roi}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 04: ZERO TRUST ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
              title="Your data stays"
              highlightedWord="yours"
              subtitle="Privacy and safety are built in from the start, not added later."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              <div className="clay-card p-6 space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-[#eb4a2d]/10 text-[#eb4a2d] flex items-center justify-center">
                  <Lock className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h4 className="text-lg font-black text-[#1e2530] dark:text-[#f3f4f6]">Runs in your cloud</h4>
                <p className="text-xs text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-medium">
                  AI can run inside your own AWS, Google Cloud or Azure account, so sensitive data never leaves.
                </p>
                <span className="text-[11px] font-mono font-bold text-[#059669] block pt-1">✓ Private by default</span>
              </div>

              <div className="clay-card p-6 space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-[#7c3aed]/10 text-[#7c3aed] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h4 className="text-lg font-black text-[#1e2530] dark:text-[#f3f4f6]">Built for regulated work</h4>
                <p className="text-xs text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-medium">
                  We design with rules like GDPR and HIPAA in mind, and keep a log of every action for audits.
                </p>
                <span className="text-[11px] font-mono font-bold text-[#7c3aed] block pt-1">✓ Full activity logs</span>
              </div>

              <div className="clay-card p-6 space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-[#059669]/10 text-[#059669] flex items-center justify-center">
                  <Terminal className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h4 className="text-lg font-black text-[#1e2530] dark:text-[#f3f4f6]">A person stays in charge</h4>
                <p className="text-xs text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-medium">
                  AI agents can only use the tools you allow, and a person approves anything important.
                </p>
                <span className="text-[11px] font-mono font-bold text-[#059669] block pt-1">✓ Human approval built in</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 05: SLA ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1800px] mx-auto clay-card p-8 sm:p-12 text-center space-y-5 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black text-[#1e2530] dark:text-[#f3f4f6]">
              Not sure where{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                to start?
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#4b5563] dark:text-[#9ca3af] max-w-xl mx-auto font-medium">
              Book a free 30-minute call. We&apos;ll look at your current setup and suggest the simplest next step.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="clay-btn clay-btn-coral px-8 py-3.5 text-base font-black tracking-wide"
              >
                <span>Book a free call</span>
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
