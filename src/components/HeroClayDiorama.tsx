"use client";

import { useState } from "react";
import { 
  Globe, 
  Bot, 
  Cloud, 
  Database, 
  Cpu, 
  Zap, 
  Activity, 
  ArrowUpRight 
} from "lucide-react";

interface NodeData {
  id: string;
  name: string;
  tagline: string;
  category: string;
  metric: string;
  metricLabel: string;
  techs: string[];
}

export default function HeroClayDiorama() {
  const [activeId, setActiveId] = useState<string>("agentic-swarm");

  const nodes: Record<string, NodeData> = {
    "ai-web": {
      id: "ai-web",
      name: "AI Websites",
      tagline: "Fast websites with smart search and an AI assistant that answers visitors' questions.",
      category: "Websites",
      metric: "1–2 months",
      metricLabel: "Typical timeline",
      techs: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    },
    "agentic-swarm": {
      id: "agentic-swarm",
      name: "AI Agents",
      tagline: "AI assistants that handle multi-step tasks on their own, and ask a person when unsure.",
      category: "AI Agents",
      metric: "24/7",
      metricLabel: "Always working",
      techs: ["Claude", "GPT", "LangGraph", "MCP"],
    },
    "multi-cloud": {
      id: "multi-cloud",
      name: "Cloud Hosting",
      tagline: "Reliable hosting on AWS, Google Cloud or Azure that grows with your traffic.",
      category: "Cloud",
      metric: "Auto",
      metricLabel: "Scaling & backups",
      techs: ["AWS", "Google Cloud", "Docker", "Terraform"],
    },
    "data-modernization": {
      id: "data-modernization",
      name: "System Upgrades",
      tagline: "We move your old system to a modern one step by step, while it keeps running.",
      category: "Upgrades",
      metric: "None",
      metricLabel: "Downtime needed",
      techs: ["PostgreSQL", "BigQuery", "dbt", "n8n"],
    },
  };

  const activeNode = nodes[activeId] || nodes["agentic-swarm"];

  return (
    <div className="w-full max-w-6xl mx-auto my-8 sm:my-12">
      <div className="clay-card p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Left: 3D Kinetic Orbital Diorama */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] flex items-center justify-center">
            
            {/* Outer Slow-Spin Orbit Ring */}
            <div className="absolute inset-4 sm:inset-6 rounded-full border-2 border-dashed border-[#eb4a2d]/25 animate-clay-spin-slow pointer-events-none" />

            {/* Inner Counter-Spin Orbit Ring */}
            <div className="absolute inset-16 sm:inset-20 rounded-full border border-dashed border-[#8b5cf6]/25 animate-clay-spin-reverse pointer-events-none" />

            {/* Central Sovereign Core */}
            <div 
              className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-[2.5rem] flex flex-col items-center justify-center text-center p-3 text-white transition-all bg-gradient-to-br from-[#eb4a2d] to-[#c0392b] animate-clay-scale cursor-pointer"
              style={{
                boxShadow: "10px 16px 32px rgba(235, 74, 45, 0.4), inset 3px 3px 6px rgba(255, 255, 255, 0.5), inset -3px -3px 6px rgba(130, 25, 8, 0.4)",
              }}
            >
              <Cpu className="w-8 h-8 sm:w-10 sm:h-10 mb-1 " />
              <span className="text-[10px] sm:text-xs font-black tracking-wider uppercase font-mono">
                AIRACODE
              </span>
            </div>

            {/* Node 1: AI Web */}
            <button
              type="button"
              onClick={() => setActiveId("ai-web")}
              className={`absolute top-2 right-4 sm:top-4 sm:right-8 flex flex-col items-center transition-all duration-300 cursor-pointer ${
                activeId === "ai-web" ? "scale-110 z-20" : "scale-100 hover:scale-105 opacity-85"
              }`}
            >
              <div 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#ff7e67] to-[#eb4a2d] text-white shadow-md animate-clay-1"
                style={{
                  boxShadow: "6px 10px 20px rgba(235, 74, 45, 0.3), inset 2px 2px 4px rgba(255, 255, 255, 0.6)",
                }}
              >
                <Globe className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="mt-1 text-[10px] font-bold font-mono text-[#1e2530] dark:text-[#f3f4f6] px-2 py-0.5 rounded-full bg-white dark:bg-[#151a24] shadow-sm border border-white dark:border-white/10">
                Websites
              </span>
            </button>

            {/* Node 2: Agent Swarm */}
            <button
              type="button"
              onClick={() => setActiveId("agentic-swarm")}
              className={`absolute bottom-2 right-4 sm:bottom-4 sm:right-8 flex flex-col items-center transition-all duration-300 cursor-pointer ${
                activeId === "agentic-swarm" ? "scale-110 z-20" : "scale-100 hover:scale-105 opacity-85"
              }`}
            >
              <div 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#a78bfa] to-[#7c3aed] text-white shadow-md animate-clay-2"
                style={{
                  boxShadow: "6px 10px 20px rgba(124, 58, 237, 0.3), inset 2px 2px 4px rgba(255, 255, 255, 0.6)",
                }}
              >
                <Bot className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="mt-1 text-[10px] font-bold font-mono text-[#1e2530] dark:text-[#f3f4f6] px-2 py-0.5 rounded-full bg-white dark:bg-[#151a24] shadow-sm border border-white dark:border-white/10">
                Agents
              </span>
            </button>

            {/* Node 3: Multi-Cloud */}
            <button
              type="button"
              onClick={() => setActiveId("multi-cloud")}
              className={`absolute bottom-2 left-4 sm:bottom-4 sm:left-8 flex flex-col items-center transition-all duration-300 cursor-pointer ${
                activeId === "multi-cloud" ? "scale-110 z-20" : "scale-100 hover:scale-105 opacity-85"
              }`}
            >
              <div 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#60a5fa] to-[#1d4ed8] text-white shadow-md animate-clay-3"
                style={{
                  boxShadow: "6px 10px 20px rgba(29, 78, 216, 0.3), inset 2px 2px 4px rgba(255, 255, 255, 0.6)",
                }}
              >
                <Cloud className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="mt-1 text-[10px] font-bold font-mono text-[#1e2530] dark:text-[#f3f4f6] px-2 py-0.5 rounded-full bg-white dark:bg-[#151a24] shadow-sm border border-white dark:border-white/10">
                Cloud
              </span>
            </button>

            {/* Node 4: Data Core */}
            <button
              type="button"
              onClick={() => setActiveId("data-modernization")}
              className={`absolute top-2 left-4 sm:top-4 sm:left-8 flex flex-col items-center transition-all duration-300 cursor-pointer ${
                activeId === "data-modernization" ? "scale-110 z-20" : "scale-100 hover:scale-105 opacity-85"
              }`}
            >
              <div 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#34d399] to-[#047857] text-white shadow-md animate-clay-4"
                style={{
                  boxShadow: "6px 10px 20px rgba(4, 120, 87, 0.3), inset 2px 2px 4px rgba(255, 255, 255, 0.6)",
                }}
              >
                <Database className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="mt-1 text-[10px] font-bold font-mono text-[#1e2530] dark:text-[#f3f4f6] px-2 py-0.5 rounded-full bg-white dark:bg-[#151a24] shadow-sm border border-white dark:border-white/10">
                Upgrades
              </span>
            </button>
          </div>
          
          <span className="text-[11px] font-mono text-[#6b7280] dark:text-[#9ca3af] font-semibold mt-1">
            Tap an icon to learn more
          </span>
        </div>

        {/* Right: Clean Node Metrics Panel */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#ede8dc] dark:border-white/10">
            <span className="text-xs font-mono font-bold uppercase text-[#eb4a2d]">
              {activeNode.category}
            </span>

          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#1e2530] dark:text-[#f3f4f6]">
              {activeNode.name}
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-medium">
              {activeNode.tagline}
            </p>
          </div>

          {/* Metric Plaque */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#151a24] border border-white/80 dark:border-white/10 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono text-[#6b7280] dark:text-[#9ca3af] uppercase font-bold block">
                {activeNode.metricLabel}
              </span>
              <span className="text-2xl sm:text-3xl font-mono font-black text-[#1e2530] dark:text-[#f3f4f6]">
                {activeNode.metric}
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#10b981]/15 text-[#059669] flex items-center justify-center">
              <Activity className="w-5 h-5 stroke-[2.5]" />
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono uppercase text-[#6b7280] dark:text-[#9ca3af] font-bold block">
              Built with
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activeNode.techs.map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 rounded-lg bg-[#ede9e0]/80 dark:bg-white/10 text-xs font-mono font-bold text-[#1e2530] dark:text-[#f3f4f6]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
