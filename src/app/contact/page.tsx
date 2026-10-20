"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, CheckCircle2, ChevronDown, Send, Clock, CalendarClock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicScrollTracker from "@/components/CinematicScrollTracker";
import SiteBackground from "@/components/SiteBackground";
import SectionHeader from "@/components/SectionHeader";
import { servicesData, getServiceById } from "@/data/servicesData";

const CONTACT_EMAIL = "contact@airacode.online";
const BUDGET_OPTIONS = ["Under $5k", "$5k – $15k", "$15k – $40k", "$40k – $100k", "$100k+", "Not sure yet"];
// Static hosting (GitHub Pages) has no /api route, so the form falls back to FormSubmit.
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/nagarajendra432@gmail.com";

const EMPTY_FORM = {
  name: "",
  email: "",
  company: "",
  serviceNeeded: "not-sure",
  budget: "Not sure yet",
  ndaRequired: false,
  message: "",
  botField: "",
};

const faqs = [
  {
    q: "How quickly will you reply?",
    a: "Within one business day. A developer (not a salesperson) reads every message and replies with questions or a time for a call.",
  },
  {
    q: "How much does a project cost?",
    a: "It depends on what you need. After a free 30-minute call, we send you a fixed price, so there are no surprises.",
  },
  {
    q: "How long does a project take?",
    a: "Most projects take 1–4 months (16 weeks at most). You see a first working version within the first month, and we share progress every two weeks.",
  },
  {
    q: "Is my data safe? Will it be used to train AI?",
    a: "Your data is never used to train public AI models. When needed, AI can run entirely inside your own cloud account.",
  },
  {
    q: "Who owns the code?",
    a: "You do, 100%. All code, designs and documents are handed over to you.",
  },
  {
    q: "Can you sign an NDA?",
    a: "Yes. Tick the box on the form and we'll send one over before you share any details.",
  },
];

function serviceLabel(id: string) {
  return getServiceById(id)?.title ?? "Not sure yet";
}

function buildAutoresponse(name: string, service: string) {
  const firstName = name.trim().split(/\s+/)[0] || "there";
  return `Hi ${firstName},

Thanks for getting in touch with AIRACODE. We've received your message about: ${service}.

What happens next:
1. A developer on our team reads your message (within one business day).
2. We reply with a few questions, or suggest a time for a free 30-minute call.
3. After the call, you get a clear plan and a fixed price. No obligation.

Want to add anything, like files, links or screenshots? Just reply to this email.

Talk soon,
The AIRACODE team
${CONTACT_EMAIL}
https://airacode.online`;
}

export default function ContactPage() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof EMPTY_FORM | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Prefill from links like /contact?service=agentic-ai
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");
    // Reading the URL once on mount; the page is prerendered, so this can't run during render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFormData((prev) => ({
      ...prev,
      serviceNeeded: service && getServiceById(service) ? service : prev.serviceNeeded,
    }));
  }, []);

  const update = (field: keyof typeof EMPTY_FORM, value: string | boolean) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.botField) return;
    setIsSubmitting(true);
    setSubmitError(null);

    const service = serviceLabel(formData.serviceNeeded);
    const company = formData.company.trim() || "Not given";

    try {
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_API_URL || "/api/contact";
      let res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, serviceNeeded: service }),
      }).catch(() => null);

      if (!res || res.status === 404 || res.status === 405) {
        res = await fetch(FORMSUBMIT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            _subject: `New enquiry: ${service} (${formData.name}, ${company})`,
            _replyto: formData.email,
            _template: "table",
            _autoresponse: buildAutoresponse(formData.name, service),
            Name: formData.name,
            Email: formData.email,
            Company: company,
            Service: service,
            Budget: formData.budget,
            "NDA requested": formData.ndaRequired ? "Yes" : "No",
            Message: formData.message,
          }),
        });
      }

      const data = await res.json().catch(() => null);
      if (!res.ok || data?.success === false || data?.success === "false") {
        throw new Error(data?.message || data?.error || "Something went wrong.");
      }
      setSubmittedData(formData);
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError(`Sorry, your message didn't send. Please try again, or email us at ${CONTACT_EMAIL}.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-3.5 py-2.5 rounded-xl bg-[#f6f3ee] dark:bg-[#151a24] border border-[#ede9e0] dark:border-white/10 focus:border-[#eb4a2d] focus:bg-white dark:focus:bg-[#1a2130] text-sm outline-none transition-colors text-[#1e2530] dark:text-[#f3f4f6] placeholder:text-[#9ca3af]";
  const labelClass = "text-sm font-semibold text-[#1e2530] dark:text-[#f3f4f6]";

  return (
    <>
      <CinematicScrollTracker />
      <SiteBackground />
      <Navbar />

      <main className="relative z-10 flex-1 w-full">
        {/* ================= SECTION 01: HERO ================= */}
        <section className="relative pt-10 pb-10 sm:pt-14 sm:pb-12 lg:pt-18 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 w-full">
          <div className="w-full max-w-[1800px] mx-auto text-center space-y-5">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#1e2530] dark:text-[#f3f4f6] tracking-tight leading-[1.05]">
              Let&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                talk
              </span>
            </h1>
            <p className="text-base sm:text-xl text-[#4b5563] dark:text-[#9ca3af] max-w-2xl mx-auto font-medium">
              Tell us about your project. A developer will reply within one business day.
            </p>
          </div>
        </section>

        {/* ================= SECTION 02: FORM ================= */}
        <section className="relative pb-14 sm:pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 w-full">
          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 clay-card p-6 sm:p-10">
              {submitted && submittedData ? (
                <div className="space-y-6" role="status">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#059669]/15 text-[#059669] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div className="space-y-1">
                      <h2 className="text-xl sm:text-2xl font-black text-[#1e2530] dark:text-[#f3f4f6]">
                        Thanks, {submittedData.name.split(" ")[0]}! We&apos;ve got your message.
                      </h2>
                      <p className="text-sm text-[#4b5563] dark:text-[#9ca3af] leading-relaxed">
                        We&apos;ve sent a confirmation to <strong className="text-[#1e2530] dark:text-[#f3f4f6]">{submittedData.email}</strong>.
                        If you don&apos;t see it, check your spam folder.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#f6f3ee] dark:bg-[#151a24] border border-[#ede9e0] dark:border-white/10 space-y-3">
                    <h3 className="text-sm font-bold text-[#1e2530] dark:text-[#f3f4f6]">What happens next</h3>
                    <ol className="space-y-2.5 text-sm text-[#4b5563] dark:text-[#9ca3af]">
                      {[
                        "A developer reads your message within one business day.",
                        "We reply with a few questions, or suggest a time for a free 30-minute call.",
                        "You get a clear plan and a fixed price. No obligation.",
                      ].map((step, i) => (
                        <li key={step} className="flex gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#eb4a2d]/10 text-[#eb4a2d] text-xs font-bold flex items-center justify-center shrink-0">
                            {i + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData(EMPTY_FORM);
                      }}
                      className="clay-btn clay-btn-white px-5 py-2.5 text-sm font-bold"
                    >
                      Send another message
                    </button>
                    <Link href="/case-studies" className="text-sm font-bold text-[#eb4a2d] hover:underline">
                      While you wait, see our work →
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {submitError && (
                    <div role="alert" className="p-3 rounded-xl bg-[#eb4a2d]/10 border border-[#eb4a2d]/20 text-[#c0392b] text-sm font-medium">
                      {submitError}
                    </div>
                  )}

                  {/* Honeypot: hidden from people, filled in by bots */}
                  <input
                    type="text"
                    name="_honey"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.botField}
                    onChange={(e) => update("botField", e.target.value)}
                    className="hidden"
                    aria-hidden
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className={labelClass}>Your name</label>
                      <input id="name" type="text" required autoComplete="name" placeholder="Alex Morgan"
                        value={formData.name} onChange={(e) => update("name", e.target.value)} className={inputClass} />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className={labelClass}>Email</label>
                      <input id="email" type="email" required autoComplete="email" placeholder="alex@company.com"
                        value={formData.email} onChange={(e) => update("email", e.target.value)} className={inputClass} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="company" className={labelClass}>
                        Company <span className="font-normal text-[#9ca3af]">(optional)</span>
                      </label>
                      <input id="company" type="text" autoComplete="organization" placeholder="Acme Inc"
                        value={formData.company} onChange={(e) => update("company", e.target.value)} className={inputClass} />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="service" className={labelClass}>What do you need?</label>
                      <select id="service" value={formData.serviceNeeded}
                        onChange={(e) => update("serviceNeeded", e.target.value)} className={inputClass}>
                        <option value="not-sure">Not sure yet</option>
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="budget" className={labelClass}>Rough budget</label>
                    <select id="budget" value={formData.budget}
                      onChange={(e) => update("budget", e.target.value)} className={inputClass}>
                      {BUDGET_OPTIONS.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className={labelClass}>Tell us about your project</label>
                    <textarea id="message" rows={5} required
                      placeholder="What are you trying to build or fix? Any deadlines?"
                      value={formData.message} onChange={(e) => update("message", e.target.value)} className={inputClass} />
                  </div>

                  <label className="flex items-center gap-2.5 text-sm text-[#4b5563] dark:text-[#9ca3af] cursor-pointer">
                    <input type="checkbox" checked={formData.ndaRequired}
                      onChange={(e) => update("ndaRequired", e.target.checked)}
                      className="w-4 h-4 accent-[#eb4a2d]" />
                    Please send me an NDA before I share details
                  </label>

                  <button type="submit" disabled={isSubmitting}
                    className="w-full clay-btn clay-btn-coral py-3.5 text-sm font-bold disabled:opacity-60">
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Sending..." : "Send message"}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Side info */}
            <aside className="lg:col-span-4 space-y-4">
              <div className="clay-card p-6 space-y-2">
                <Mail className="w-5 h-5 text-[#eb4a2d]" />
                <h2 className="text-base font-bold text-[#1e2530] dark:text-[#f3f4f6]">Prefer email?</h2>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm font-semibold text-[#eb4a2d] hover:underline break-all">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="clay-card p-6 space-y-2">
                <Clock className="w-5 h-5 text-[#7c3aed]" />
                <h2 className="text-base font-bold text-[#1e2530] dark:text-[#f3f4f6]">Quick replies</h2>
                <p className="text-sm text-[#4b5563] dark:text-[#9ca3af]">We reply within one business day, Monday to Friday.</p>
              </div>
              <div className="clay-card p-6 space-y-2">
                <CalendarClock className="w-5 h-5 text-[#059669]" />
                <h2 className="text-base font-bold text-[#1e2530] dark:text-[#f3f4f6]">Typical timeline</h2>
                <p className="text-sm text-[#4b5563] dark:text-[#9ca3af]">Most projects take 1–4 months, never more than 16 weeks.</p>
                <Link href="/case-studies" className="text-sm font-semibold text-[#059669] hover:underline">
                  See our work →
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* ================= SECTION 03: FAQ ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-3xl mx-auto space-y-8">
            <SectionHeader title="Common" highlightedWord="questions" />

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={faq.q} className="clay-card overflow-hidden">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-[#1e2530] dark:text-[#f3f4f6]">{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-[#eb4a2d] shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-sm text-[#4b5563] dark:text-[#9ca3af] leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
