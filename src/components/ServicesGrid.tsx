"use client";

import { useState } from "react";
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
  ArrowRight 
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/servicesData";

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

const clayColorStyles = [
  { gradient: "from-[#ff8a73] to-[#eb4a2d]", text: "text-[#eb4a2d]", shadow: "rgba(235, 74, 45, 0.3)" },
  { gradient: "from-[#60a5fa] to-[#2563eb]", text: "text-[#2563eb]", shadow: "rgba(37, 99, 235, 0.3)" },
  { gradient: "from-[#34d399] to-[#059669]", text: "text-[#059669]", shadow: "rgba(5, 150, 105, 0.3)" },
  { gradient: "from-[#a78bfa] to-[#7c3aed]", text: "text-[#7c3aed]", shadow: "rgba(124, 58, 237, 0.3)" },
  { gradient: "from-[#fbbf24] to-[#d97706]", text: "text-[#d97706]", shadow: "rgba(217, 119, 6, 0.3)" },
  { gradient: "from-[#f472b6] to-[#db2777]", text: "text-[#db2777]", shadow: "rgba(219, 39, 119, 0.3)" },
  { gradient: "from-[#2dd4bf] to-[#0d9488]", text: "text-[#0d9488]", shadow: "rgba(13, 148, 136, 0.3)" },
  { gradient: "from-[#818cf8] to-[#4f46e5]", text: "text-[#4f46e5]", shadow: "rgba(79, 70, 229, 0.3)" },
];

export default function ServicesGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<string>("all");

  const filteredServices = servicesData.filter((s: ServiceItem) => {
    if (filter === "all") return true;
    return s.category === filter;
  });

  const displayedServices = limit ? filteredServices.slice(0, limit) : filteredServices;

  return (
    <div className="space-y-8 sm:space-y-10 w-full">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {[
          { id: "all", label: "All" },
          { id: "ai-systems", label: "AI" },
          { id: "cloud-data", label: "Cloud & Data" },
          { id: "modernization", label: "Automation & care" },
        ].map((tab) => {
          const isActive = filter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#ede9e0] dark:bg-[#1a2130] text-[#eb4a2d] shadow-[inset_2px_2px_4px_rgba(30,37,48,0.1)] "
                  : "bg-white dark:bg-[#151a24] text-[#4b5563] dark:text-[#9ca3af] shadow-sm hover:text-[#1e2530] dark:hover:text-[#f3f4f6]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Grid of Tactile Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {displayedServices.map((service: ServiceItem, index: number) => {
          const Icon = iconMap[service.iconName] || Bot;
          const color = clayColorStyles[index % clayColorStyles.length];

          return (
            <div
              key={service.id}
              className="clay-card p-6 flex flex-col justify-between group hover:-translate-y-1 transition-transform"
            >
              <div>
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-tr ${color.gradient} text-white shadow-md`}
                    style={{
                      boxShadow: `4px 6px 14px ${color.shadow}, inset 2px 2px 4px rgba(255, 255, 255, 0.5)`,
                    }}
                  >
                    <Icon className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#ede9e0] dark:bg-white/10 text-[#1e2530] dark:text-[#f3f4f6]">
                    {service.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-black text-[#1e2530] dark:text-[#f3f4f6] group-hover:text-[#eb4a2d] transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* Crisp description */}
                <p className="text-xs text-[#4b5563] dark:text-[#9ca3af] leading-relaxed line-clamp-3 font-medium mt-2">
                  {service.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-1.5 mt-4 p-2 rounded-xl bg-[#f6f3ee] dark:bg-[#151a24]">
                  {service.metrics.map((metric: { label: string; value: string }) => (
                    <div key={metric.label} className="text-center">
                      <span className="text-[9px] text-[#6b7280] dark:text-[#9ca3af] font-semibold block truncate">{metric.label}</span>
                      <span className="text-xs font-bold font-mono text-[#1e2530] dark:text-[#f3f4f6]">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="mt-4 pt-3 border-t border-[#ede9e0] dark:border-white/10 flex items-center justify-between">
                <Link
                  href={`/services#${service.id}`}
                  className="text-xs font-bold text-[#eb4a2d] hover:text-[#c0392b] flex items-center gap-1 group/link"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
