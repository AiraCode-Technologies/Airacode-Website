"use client";

import { useState, useEffect } from "react";
import {
  Zap,
  Mail,
  Search,
  Wrench,
  UserCheck,
  Send,
  RefreshCw,
  Check,
  Minus,
  Sparkles,
  Cpu,
  ArrowRightLeft,
} from "lucide-react";

type Tab = "agent" | "custom" | "upgrade";

const TABS: { id: Tab; label: string }[] = [
  { id: "agent", label: "AI agent at work" },
  { id: "custom", label: "Custom vs off-the-shelf AI" },
  { id: "upgrade", label: "Upgrading old systems" },
];

const agentSteps = [
  { title: "Reads the request", desc: "Understands what the customer is asking for", icon: Mail, color: "bg-[#eb4a2d]" },
  { title: "Looks things up", desc: "Finds the order in your store and the delivery status", icon: Search, color: "bg-[#2563eb]" },
  { title: "Takes action", desc: "Upgrades shipping so it arrives on time", icon: Wrench, color: "bg-[#7c3aed]" },
  { title: "Checks with a person", desc: "Asks your team before spending money", icon: UserCheck, color: "bg-[#d97706]" },
  { title: "Replies", desc: "Sends the customer a clear, friendly update", icon: Send, color: "bg-[#059669]" },
];

const agentLog = [
  { color: "text-[#eb4a2d]", text: "Customer email: “Where's order #4821? I need it by Friday.”" },
  { color: "text-[#2563eb]", text: "Found order #4821 in Shopify. It's due Monday with standard shipping." },
  { color: "text-[#7c3aed]", text: "Express shipping would arrive Thursday, for $12." },
  { color: "text-[#d97706]", text: "Asked Priya (support lead) in Slack. She approved." },
  { color: "text-[#059669]", text: "Upgraded shipping and emailed the customer. Done in 40 seconds." },
];

const comparison = [
  { point: "Knows your products, policies and tone", custom: true, generic: false },
  { point: "Your data stays inside your own cloud", custom: true, generic: false },
  { point: "Lower running cost at high volume", custom: true, generic: false },
  { point: "Quick to try with no setup", custom: false, generic: true },
  { point: "Tested for accuracy on your real cases", custom: true, generic: false },
];

const upgradeSteps = [
  { stage: "Step 1", title: "Copy", desc: "We copy your live data into a new system. The old one keeps running as normal." },
  { stage: "Step 2", title: "Rebuild", desc: "We rebuild one part at a time, starting with the part that hurts most." },
  { stage: "Step 3", title: "Add AI", desc: "We add AI where it saves the most time, like reading documents or answering questions." },
  { stage: "Step 4", title: "Switch", desc: "We move users over gradually, with a one-click way back if anything looks wrong." },
];

export default function InteractiveAgentTerminal() {
  const [activeTab, setActiveTab] = useState<Tab>("agent");
  const [isRunning, setIsRunning] = useState(false);
  const [simStep, setSimStep] = useState(-1);

  const runSimulation = () => {
    setSimStep(0);
    setIsRunning(true);
  };

  useEffect(() => {
    if (!isRunning) return;
    if (simStep < agentSteps.length - 1) {
      const timer = setTimeout(() => setSimStep((prev) => prev + 1), 1100);
      return () => clearTimeout(timer);
    }
    const done = setTimeout(() => setIsRunning(false), 1100);
    return () => clearTimeout(done);
  }, [isRunning, simStep]);

  const finished = !isRunning && simStep === agentSteps.length - 1;

  return (
    <div className="clay-card p-6 sm:p-10 w-full">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 pb-6 border-b border-[#ede9e0] dark:border-white/10" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
              activeTab === tab.id
                ? "bg-[#ede9e0] dark:bg-[#1a2130] text-[#eb4a2d] shadow-[inset_2px_2px_4px_rgba(30,37,48,0.1)]"
                : "text-[#4b5563] dark:text-[#9ca3af] hover:text-[#1e2530] dark:hover:text-white hover:bg-[#f6f3ee] dark:hover:bg-white/5"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "agent" && (
        <div className="pt-6 sm:pt-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#1e2530] dark:text-[#f3f4f6] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#eb4a2d]" />
                A customer asks about a late order
              </h3>
              <p className="text-sm text-[#6b7280] dark:text-[#9ca3af] mt-1">
                Watch an AI agent handle it from start to finish.
              </p>
            </div>
            <button
              onClick={runSimulation}
              disabled={isRunning}
              className="clay-btn clay-btn-coral px-6 py-3 text-sm font-bold disabled:opacity-70"
            >
              {isRunning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
              {isRunning ? "Agent working..." : finished ? "Run it again" : "See it in action"}
            </button>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
            {agentSteps.map((step, idx) => {
              const Icon = step.icon;
              const isCurrent = isRunning && simStep === idx;
              const isDone = simStep > idx || finished;
              return (
                <li
                  key={step.title}
                  className={`p-4 rounded-2xl border transition-colors duration-300 ${
                    isCurrent
                      ? "bg-white dark:bg-[#151a24] border-[#eb4a2d] ring-1 ring-[#eb4a2d]"
                      : isDone
                      ? "bg-white dark:bg-[#151a24] border-[#10b981]/40"
                      : "bg-[#f6f3ee] dark:bg-white/5 border-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-white ${step.color}`}>
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    {isDone ? (
                      <Check className="w-4 h-4 text-[#059669]" />
                    ) : (
                      <span className="text-xs font-semibold text-[#9ca3af]">{idx + 1}</span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-[#1e2530] dark:text-[#f3f4f6]">{step.title}</h4>
                  <p className="text-xs text-[#4b5563] dark:text-[#9ca3af] leading-snug mt-1">{step.desc}</p>
                </li>
              );
            })}
          </ol>

          <div className="p-5 rounded-2xl bg-[#f6f3ee] dark:bg-[#0f131a] border border-[#ede9e0] dark:border-white/10 text-sm space-y-2 min-h-[11rem]" aria-live="polite">
            <span className="block text-xs font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-2 border-b border-[#ede9e0] dark:border-white/10">
              What the agent did
            </span>
            {simStep < 0 && <p className="text-[#9ca3af]">Click &ldquo;See it in action&rdquo; to start.</p>}
            {agentLog.slice(0, simStep + 1).map((line) => (
              <p key={line.text} className={`${line.color} font-medium`}>
                {line.text}
              </p>
            ))}
          </div>
        </div>
      )}

      {activeTab === "custom" && (
        <div className="pt-6 sm:pt-8 space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-[#1e2530] dark:text-[#f3f4f6] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#7c3aed]" />
              When does custom AI make sense?
            </h3>
            <p className="text-sm text-[#6b7280] dark:text-[#9ca3af] mt-1">
              Off-the-shelf AI tools are a great start. Custom AI pays off once accuracy, privacy or cost really matter.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#ede9e0] dark:border-white/10">
            <table className="w-full text-sm">
              <thead className="bg-[#f6f3ee] dark:bg-white/5 text-left">
                <tr>
                  <th className="py-3 px-4 font-semibold text-[#4b5563] dark:text-[#9ca3af]"></th>
                  <th className="py-3 px-4 font-semibold text-[#7c3aed] text-center">Custom AI</th>
                  <th className="py-3 px-4 font-semibold text-[#6b7280] dark:text-[#9ca3af] text-center">Off-the-shelf</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ede9e0] dark:divide-white/10">
                {comparison.map((row) => (
                  <tr key={row.point}>
                    <td className="py-3 px-4 text-[#1e2530] dark:text-[#f3f4f6] font-medium">{row.point}</td>
                    <td className="py-3 px-4 text-center">
                      {row.custom ? <Check className="w-4 h-4 text-[#059669] inline" /> : <Minus className="w-4 h-4 text-[#9ca3af] inline" />}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {row.generic ? <Check className="w-4 h-4 text-[#059669] inline" /> : <Minus className="w-4 h-4 text-[#9ca3af] inline" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "upgrade" && (
        <div className="pt-6 sm:pt-8 space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-[#1e2530] dark:text-[#f3f4f6] flex items-center gap-2">
              <ArrowRightLeft className="w-5 h-5 text-[#2563eb]" />
              Upgrading an old system without switching it off
            </h3>
            <p className="text-sm text-[#6b7280] dark:text-[#9ca3af] mt-1">
              Your business keeps running the whole time. No big-bang launch day.
            </p>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {upgradeSteps.map((step) => (
              <li key={step.stage} className="p-5 rounded-2xl bg-[#f6f3ee] dark:bg-white/5 border border-[#ede9e0] dark:border-white/10">
                <span className="text-xs font-semibold text-[#2563eb]">{step.stage}</span>
                <h4 className="text-base font-bold text-[#1e2530] dark:text-[#f3f4f6] mt-1">{step.title}</h4>
                <p className="text-sm text-[#4b5563] dark:text-[#9ca3af] mt-1.5 leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
