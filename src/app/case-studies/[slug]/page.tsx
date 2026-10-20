import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicScrollTracker from "@/components/CinematicScrollTracker";
import SiteBackground from "@/components/SiteBackground";
import { clientCaseStudies, getCaseStudyBySlug, getServiceById } from "@/data/servicesData";

export const dynamicParams = false;

export function generateStaticParams() {
  return clientCaseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return {
    title: `${study.headline} | AIRACODE Case Study`,
    description: study.summary,
    alternates: { canonical: `https://airacode.online/case-studies/${study.slug}` },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const index = clientCaseStudies.findIndex((c) => c.slug === study.slug);
  const next = clientCaseStudies[(index + 1) % clientCaseStudies.length];

  return (
    <>
      <CinematicScrollTracker />
      <SiteBackground />
      <Navbar />

      <main className="relative z-10 flex-1 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <article className="w-full max-w-4xl mx-auto pt-10 sm:pt-14 pb-14 sm:pb-20 space-y-10">
          {/* Header */}
          <header className="space-y-5">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6b7280] dark:text-[#9ca3af] hover:text-[#eb4a2d] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> All case studies
            </Link>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold text-[#eb4a2d] px-3 py-1 rounded-full bg-[#eb4a2d]/10">{study.industry}</span>
              <span className="font-medium text-[#6b7280] dark:text-[#9ca3af]">{study.client}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1e2530] dark:text-[#f3f4f6] leading-[1.1]">
              {study.headline}
            </h1>
            <p className="text-base sm:text-lg text-[#4b5563] dark:text-[#9ca3af] leading-relaxed">{study.summary}</p>
          </header>

          {/* Results */}
          <section aria-label="Results" className="grid grid-cols-3 gap-3">
            {study.metrics.map((m) => (
              <div key={m.label} className="clay-card p-4 sm:p-6 text-center">
                <span className="block text-xl sm:text-3xl font-black text-[#1e2530] dark:text-[#f3f4f6]">{m.value}</span>
                <span className="block text-xs sm:text-sm text-[#6b7280] dark:text-[#9ca3af] mt-1">{m.label}</span>
              </div>
            ))}
          </section>

          {/* Story */}
          <section className="clay-card p-6 sm:p-10 space-y-8">
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#eb4a2d]">The problem</h2>
              <p className="text-base text-[#1e2530] dark:text-[#f3f4f6] leading-relaxed">{study.challenge}</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#7c3aed]">What we did</h2>
              <ol className="space-y-3">
                {study.approach.map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-base text-[#1e2530] dark:text-[#f3f4f6] leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#059669]">The result</h2>
              <p className="text-base text-[#1e2530] dark:text-[#f3f4f6] leading-relaxed flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                {study.outcome}
              </p>
            </div>
          </section>

          {/* Quote */}
          <figure className="border-l-4 border-[#eb4a2d] pl-5 sm:pl-6 space-y-2">
            <blockquote className="text-lg sm:text-xl font-medium text-[#1e2530] dark:text-[#f3f4f6] leading-relaxed">
              &ldquo;{study.quote}&rdquo;
            </blockquote>
            <figcaption className="text-sm text-[#6b7280] dark:text-[#9ca3af]">{study.author}</figcaption>
          </figure>

          {/* Services + stack */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="clay-card p-6 space-y-3">
              <h2 className="text-sm font-bold text-[#1e2530] dark:text-[#f3f4f6]">Services used</h2>
              <ul className="flex flex-wrap gap-1.5">
                {study.servicesUsed.map((id) => (
                  <li key={id}>
                    <Link
                      href={`/services#${id}`}
                      className="inline-block px-2.5 py-1 rounded-lg bg-[#f6f3ee] dark:bg-white/5 text-xs font-medium text-[#1e2530] dark:text-[#f3f4f6] hover:text-[#eb4a2d]"
                    >
                      {getServiceById(id)?.title ?? id}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="clay-card p-6 space-y-3">
              <h2 className="text-sm font-bold text-[#1e2530] dark:text-[#f3f4f6]">Built with</h2>
              <ul className="flex flex-wrap gap-1.5">
                {study.stack.map((tool) => (
                  <li key={tool} className="px-2.5 py-1 rounded-lg bg-[#f6f3ee] dark:bg-white/5 text-xs font-medium text-[#1e2530] dark:text-[#f3f4f6]">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Next + CTA */}
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href={`/case-studies/${next.slug}`} className="clay-card p-6 group">
              <span className="text-xs font-semibold text-[#6b7280] dark:text-[#9ca3af]">Next case study</span>
              <span className="block text-base font-bold text-[#1e2530] dark:text-[#f3f4f6] mt-1 group-hover:text-[#eb4a2d] transition-colors">
                {next.headline}
              </span>
            </Link>
            <Link href="/contact" className="clay-btn clay-btn-coral p-6 group flex-col items-start! justify-center! rounded-[1.25rem]!">
              <span className="text-xs font-semibold text-white/80">Have a similar problem?</span>
              <span className="flex items-center gap-1.5 text-base font-bold text-white mt-1">
                Start a project <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </nav>
        </article>
      </main>

      <Footer />
    </>
  );
}
