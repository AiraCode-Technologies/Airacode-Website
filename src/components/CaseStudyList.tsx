"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clientCaseStudies, getServiceById } from "@/data/servicesData";

export default function CaseStudyList() {
  const industries = ["All", ...Array.from(new Set(clientCaseStudies.map((c) => c.industry)))];
  const [industry, setIndustry] = useState("All");

  const studies = industry === "All" ? clientCaseStudies : clientCaseStudies.filter((c) => c.industry === industry);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Filter by industry">
        {industries.map((name) => (
          <button
            key={name}
            type="button"
            role="tab"
            aria-selected={industry === name}
            onClick={() => setIndustry(name)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer border ${
              industry === name
                ? "bg-[#ede9e0] dark:bg-[#1a2130] text-[#eb4a2d] border-transparent shadow-[inset_2px_2px_4px_rgba(30,37,48,0.1)]"
                : "bg-white dark:bg-[#151a24] text-[#4b5563] dark:text-[#9ca3af] border-[#ede9e0] dark:border-white/10 hover:border-[#d6cebe]"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {studies.map((study) => (
          <Link key={study.id} href={`/case-studies/${study.slug}`} className="clay-card p-6 sm:p-8 flex flex-col group">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-semibold text-[#eb4a2d] px-3 py-1 rounded-full bg-[#eb4a2d]/10">
                {study.industry}
              </span>
              <span className="text-xs font-medium text-[#6b7280] dark:text-[#9ca3af] truncate">{study.client}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-[#1e2530] dark:text-[#f3f4f6] leading-snug mt-4 group-hover:text-[#eb4a2d] transition-colors">
              {study.headline}
            </h2>
            <p className="text-sm text-[#4b5563] dark:text-[#9ca3af] leading-relaxed mt-2">{study.summary}</p>

            <div className="grid grid-cols-3 gap-2.5 mt-5">
              {study.metrics.map((m) => (
                <div key={m.label} className="p-3 rounded-xl bg-[#f6f3ee] dark:bg-[#1a2130] text-center">
                  <span className="block text-base sm:text-lg font-black text-[#1e2530] dark:text-[#f3f4f6]">{m.value}</span>
                  <span className="block text-[11px] text-[#6b7280] dark:text-[#9ca3af] font-medium truncate">{m.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-5 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap gap-1.5">
                {study.servicesUsed.map((id) => (
                  <span key={id} className="px-2 py-0.5 rounded-md bg-[#f6f3ee] dark:bg-white/5 text-[#4b5563] dark:text-[#9ca3af] font-medium">
                    {getServiceById(id)?.shortTitle ?? id}
                  </span>
                ))}
              </div>
              <span className="font-bold text-[#eb4a2d] inline-flex items-center gap-1">
                Read story <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
