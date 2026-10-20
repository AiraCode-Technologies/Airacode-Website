import type { Metadata } from "next";
import Link from "next/link";
import { 
  Globe, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Cloud, 
  Database, 
  Workflow, 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  Layers 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicScrollTracker from "@/components/CinematicScrollTracker";
import SiteBackground from "@/components/SiteBackground";
import SectionHeader from "@/components/SectionHeader";
import TechStackGrid from "@/components/TechStackGrid";
import { servicesData } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Services | AIRACODE",
  description:
    "AI-powered websites, AI apps, AI agents, business automation, data dashboards, cloud hosting, custom AI models and website care, explained simply.",
};

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Sparkles,
  ShieldCheck,
  Cpu,
  Cloud,
  Database,
  Workflow,
  Bot,
};

const clayAccents = [
  { gradient: "from-[#ff8a73] to-[#eb4a2d]", text: "text-[#eb4a2d]" },
  { gradient: "from-[#60a5fa] to-[#2563eb]", text: "text-[#2563eb]" },
  { gradient: "from-[#34d399] to-[#059669]", text: "text-[#059669]" },
  { gradient: "from-[#a78bfa] to-[#7c3aed]", text: "text-[#7c3aed]" },
  { gradient: "from-[#fbbf24] to-[#d97706]", text: "text-[#d97706]" },
  { gradient: "from-[#f472b6] to-[#db2777]", text: "text-[#db2777]" },
  { gradient: "from-[#2dd4bf] to-[#0d9488]", text: "text-[#0d9488]" },
  { gradient: "from-[#818cf8] to-[#4f46e5]", text: "text-[#4f46e5]" },
];

export default function ServicesPage() {
  return (
    <>
      <CinematicScrollTracker />
      <SiteBackground />
      <Navbar />

      <main className="relative z-10 flex-1 w-full">
        {/* ================= SECTION 01: HERO ================= */}
        <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 overflow-hidden w-full">
          <div className="w-full max-w-[1800px] mx-auto text-center space-y-5">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#1e2530] dark:text-[#f3f4f6] tracking-tight leading-[1.05]">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                services
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#4b5563] dark:text-[#9ca3af] max-w-2xl mx-auto font-medium">
              Everything you need to build, run and grow with AI, from a first website to a full product.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {servicesData.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#151a24] border border-transparent dark:border-white/10 shadow-sm hover:shadow-md text-xs font-bold text-[#4b5563] dark:text-[#9ca3af] hover:text-[#eb4a2d] dark:hover:text-[#eb4a2d] transition-all"
                >
                  {s.shortTitle}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 02: ALL 8 SERVICES ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10 sm:space-y-12">
            <SectionHeader
              title="What you"
              highlightedWord="get"
              subtitle="What each service includes, and who it's a good fit for."
            />

            <div className="space-y-8 sm:space-y-10">
              {servicesData.map((service, idx) => {
                const Icon = iconMap[service.iconName] || Bot;
                const accent = clayAccents[idx % clayAccents.length];

                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="scroll-mt-28 clay-card p-6 sm:p-10 relative overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                      {/* Left: Summary & Metrics */}
                      <div className="lg:col-span-5 space-y-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-tr ${accent.gradient} text-white shadow-md`}
                            style={{
                              boxShadow: "4px 6px 14px rgba(0,0,0,0.1), inset 2px 2px 4px rgba(255, 255, 255, 0.5)",
                            }}
                          >
                            <Icon className="w-6 h-6 stroke-[2.5]" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#6b7280] dark:text-[#9ca3af] block font-bold">
                              {service.badge}
                            </span>
                            <h2 className="text-xl sm:text-2xl font-black text-[#1e2530] dark:text-[#f3f4f6] leading-snug">
                              {service.title}
                            </h2>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-medium">
                          {service.description}
                        </p>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-3 gap-2 pt-1">
                          {service.metrics.map((m) => (
                            <div key={m.label} className="p-2 rounded-xl bg-[#f6f3ee] dark:bg-[#1a2130] text-center">
                              <span className="text-[10px] text-[#6b7280] dark:text-[#9ca3af] font-bold block truncate">{m.label}</span>
                              <span className="text-sm font-mono font-black text-[#1e2530] dark:text-[#f3f4f6]">{m.value}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {service.techStack.slice(0, 5).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#151a24] border border-transparent dark:border-white/10 shadow-sm text-[11px] font-mono font-bold text-[#1e2530] dark:text-[#f3f4f6]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: Deliverables & CTA */}
                      <div className="lg:col-span-7 space-y-4 lg:pl-8 lg:border-l lg:border-[#ede9e0] dark:lg:border-white/10">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#1e2530] dark:text-[#f3f4f6] font-black flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                          What you get
                        </span>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#4b5563] dark:text-[#cbd5e1] font-medium">
                          {service.deliverables.map((item) => (
                            <div key={item} className="p-2.5 rounded-xl bg-white/70 dark:bg-[#151a24]/70 border border-[#ede9e0] dark:border-white/10 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#eb4a2d] shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs">
                          <span className="font-semibold text-[#6b7280] dark:text-[#9ca3af] mr-1">Good for:</span>
                          {service.useCases.map((u) => (
                            <span key={u} className="px-2.5 py-1 rounded-full bg-[#f6f3ee] dark:bg-white/5 text-[#1e2530] dark:text-[#f3f4f6] font-medium">
                              {u}
                            </span>
                          ))}
                        </div>

                        <div className="pt-2 flex justify-end">
                          <Link
                            href={`/contact?service=${service.id}`}
                            className="clay-btn clay-btn-coral px-6 py-2.5 text-xs font-bold"
                          >
                            <span>Get a quote</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= SECTION 03: TECH STACK ================= */}
        <section id="stack" className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 scroll-mt-24 w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
              title="Tools we"
              highlightedWord="use"
              subtitle="We pick proven tools that fit your project and budget, never the other way round."
            />
            <TechStackGrid />
          </div>
        </section>

        {/* ================= SECTION 04: HOW WE WORK ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
              title="How we"
              highlightedWord="work"
              subtitle="Four simple steps from first call to launch, and beyond."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  step: "01",
                  title: "Free call",
                  desc: "A 30-minute chat to understand your goals. You get a clear plan and a fixed price.",
                },
                {
                  step: "02",
                  title: "First version",
                  desc: "We build a working first version quickly so you can try it and give feedback.",
                },
                {
                  step: "03",
                  title: "Launch",
                  desc: "We launch carefully, test everything, and make sure your team knows how it works.",
                },
                {
                  step: "04",
                  title: "Support",
                  desc: "We stay on hand to fix issues, keep things fast and add new features as you grow.",
                },
              ].map((phase) => (
                <div key={phase.step} className="clay-card p-6 space-y-2">
                  <span className="text-2xl font-black text-[#eb4a2d]">
                    {phase.step}
                  </span>
                  <h4 className="text-base font-black text-[#1e2530] dark:text-[#f3f4f6]">{phase.title}</h4>
                  <p className="text-sm text-[#4b5563] dark:text-[#9ca3af] leading-relaxed">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
