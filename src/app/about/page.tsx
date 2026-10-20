import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Bot,
  Code2,
  Cloud,
  Workflow,
  ShieldCheck,
  UserCheck,
  CalendarClock,
  MessagesSquare,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicScrollTracker from "@/components/CinematicScrollTracker";
import SiteBackground from "@/components/SiteBackground";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About Us | AIRACODE",
  description:
    "AIRACODE is a team of four engineers who work as one: AI, full-stack, cloud and automation, together on every project.",
};

const team = [
  {
    role: "AI Engineer",
    focus: "AI agents & custom models",
    desc: "Designs the AI: which model to use, how it reads your data, and how it stays accurate and safe.",
    icon: Bot,
    color: "bg-[#eb4a2d]",
  },
  {
    role: "Full-Stack Engineer",
    focus: "Websites & apps",
    desc: "Builds what your customers and team actually use: fast websites, web apps and dashboards.",
    icon: Code2,
    color: "bg-[#7c3aed]",
  },
  {
    role: "Cloud Engineer",
    focus: "Hosting, security & scale",
    desc: "Keeps everything online, secure and affordable, and makes sure it grows with your traffic.",
    icon: Cloud,
    color: "bg-[#2563eb]",
  },
  {
    role: "Automation Engineer",
    focus: "Data & workflows",
    desc: "Connects your tools and data so repetitive work runs on its own and numbers stay in one place.",
    icon: Workflow,
    color: "bg-[#059669]",
  },
];

const howWeWork = [
  {
    title: "One team, one plan",
    desc: "All four of us plan your project together on day one, so the AI, the app, the hosting and the automations fit together from the start.",
  },
  {
    title: "You talk to the builders",
    desc: "No account managers in between. You get a shared chat with the engineers doing the work.",
  },
  {
    title: "Progress every two weeks",
    desc: "You see working software every two weeks and can change direction early, not at the end.",
  },
  {
    title: "Done in 1–4 months",
    desc: "Most projects launch in 1–4 months, never more than 16 weeks, with support after launch.",
  },
];

const principles = [
  {
    title: "You own everything",
    desc: "All code, designs and documents are yours from day one.",
    icon: Code2,
  },
  {
    title: "Your data stays private",
    desc: "We never use your data to train public AI, and AI can run inside your own cloud.",
    icon: ShieldCheck,
  },
  {
    title: "People stay in charge",
    desc: "Our AI agents ask a person before doing anything important.",
    icon: UserCheck,
  },
  {
    title: "Clear and honest",
    desc: "Fixed prices after a free call, plain-English updates, and no surprises.",
    icon: MessagesSquare,
  },
];

export default function AboutPage() {
  return (
    <>
      <CinematicScrollTracker />
      <SiteBackground />
      <Navbar />

      <main className="relative z-10 flex-1 w-full">
        {/* ================= SECTION 01: HERO ================= */}
        <section className="relative pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 w-full">
          <div className="w-full max-w-[1400px] mx-auto text-center space-y-6 sm:space-y-8">
            <div className="relative mx-auto w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64">
              <Image
                src="/logo.png"
                alt="AIRACODE logo"
                width={256}
                height={256}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#1e2530] dark:text-[#f3f4f6] tracking-tight leading-[1.05]">
              Four engineers.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                One team.
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-[#4b5563] dark:text-[#9ca3af] max-w-3xl mx-auto font-medium leading-relaxed">
              AIRACODE is a small studio of four engineers who each bring a different skill, and work together on
              every project, so your AI, app, hosting and automations come out as one system instead of four separate
              pieces.
            </p>

            <div className="pt-2 flex justify-center">
              <Link href="/contact" className="clay-btn clay-btn-coral px-8 py-3.5 text-base font-black tracking-wide">
                <span>Work with us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= SECTION 02: THE TEAM ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1400px] mx-auto space-y-10">
            <SectionHeader
              title="Who we"
              highlightedWord="are"
              subtitle="Four specialists. Every project gets all four."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {team.map((member) => {
                const Icon = member.icon;
                return (
                  <div key={member.role} className="clay-card p-6 sm:p-7 space-y-3">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white ${member.color} shadow-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-[#1e2530] dark:text-[#f3f4f6]">{member.role}</h3>
                      <span className="text-xs font-semibold text-[#eb4a2d]">{member.focus}</span>
                    </div>
                    <p className="text-sm text-[#4b5563] dark:text-[#9ca3af] leading-relaxed">{member.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= SECTION 03: HOW WE WORK TOGETHER ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1400px] mx-auto space-y-10">
            <SectionHeader
              title="How we work"
              highlightedWord="together"
              subtitle="Small team, short path from idea to launch."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {howWeWork.map((item, i) => (
                <div key={item.title} className="clay-card p-6 space-y-2">
                  <span className="text-2xl font-black text-[#eb4a2d]">0{i + 1}</span>
                  <h3 className="text-base font-black text-[#1e2530] dark:text-[#f3f4f6]">{item.title}</h3>
                  <p className="text-sm text-[#4b5563] dark:text-[#9ca3af] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 04: WHAT WE BELIEVE ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1400px] mx-auto space-y-10">
            <SectionHeader title="What we" highlightedWord="believe" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {principles.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="clay-card p-6 sm:p-8 flex gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#eb4a2d]/10 text-[#eb4a2d] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-black text-[#1e2530] dark:text-[#f3f4f6]">{p.title}</h3>
                      <p className="text-sm text-[#4b5563] dark:text-[#9ca3af] leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= SECTION 05: CTA ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="clay-card p-8 sm:p-12 text-center space-y-4 max-w-3xl mx-auto">
            <CalendarClock className="w-8 h-8 text-[#eb4a2d] mx-auto" />
            <h2 className="text-3xl sm:text-5xl font-black text-[#1e2530] dark:text-[#f3f4f6]">
              Meet the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                team
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#4b5563] dark:text-[#9ca3af] max-w-lg mx-auto font-medium">
              Book a free 30-minute call with the engineers who would build your project.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="clay-btn clay-btn-coral px-8 py-3.5 text-base font-black">
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
