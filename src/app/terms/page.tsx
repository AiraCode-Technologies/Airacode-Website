import Link from "next/link";
import { Code2, Clock, Shield, Scale, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicScrollTracker from "@/components/CinematicScrollTracker";
import SiteBackground from "@/components/SiteBackground";

export const metadata = {
  title: "Terms of Service | AIRACODE",
  description: "Terms and conditions governing engineering engagements and deliverables with AIRACODE.",
};

export default function TermsPage() {
  return (
    <>
      <CinematicScrollTracker />
      <SiteBackground />
      <Navbar />

      <main className="relative z-10 flex-1 w-full">
        <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-18 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 overflow-hidden w-full">
          <div className="w-full max-w-[1200px] mx-auto text-center space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#1e2530] dark:text-[#f3f4f6] tracking-tight">
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">Service</span>
            </h1>
            <p className="text-sm sm:text-base text-[#6b7280] dark:text-[#9ca3af] max-w-xl mx-auto font-medium">
              Effective as of October 2026. Built for agile startup velocity and clear client ownership.
            </p>
          </div>
        </section>

        <section className="relative pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 w-full">
          <div className="w-full max-w-4xl mx-auto space-y-6">
            <div className="clay-card p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 text-[#eb4a2d]">
                <Code2 className="w-6 h-6 stroke-[2.5]" />
                <h2 className="text-xl sm:text-2xl font-black text-[#1e2530] dark:text-[#f3f4f6]">
                  100% IP Ownership
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#4b5563] dark:text-[#9ca3af] leading-relaxed">
                Upon fulfillment of milestone payments, all custom source code, trained neural model weights, infrastructure scripts, and documentation developed for your engagement belong 100% exclusively to you.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
