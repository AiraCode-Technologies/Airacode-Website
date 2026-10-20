"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
} from "lucide-react";
import { servicesData } from "@/data/servicesData";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubscribing) return;
    setIsSubscribing(true);
    const subRef = "SUB-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    const timestampStr = new Date().toUTCString();

    try {
      await fetch("https://formsubmit.co/ajax/nagarajendra432@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email: email,
          subscriberEmail: email,
          tracking_id: subRef,
          _subject: `New newsletter subscriber: ${email}`,
          _replyto: email,
          _template: "table",
          "Subscription Type": "Newsletter",
          "Subscriber Email": email,
          "Tracking Reference": subRef,
          "Subscribed At": timestampStr,
          _autoresponse: `Hi there,

Thanks for subscribing to AIRACODE updates.

About once a month we'll send you short, practical notes on using AI, automation and modern web tools in a real business. No spam, and you can unsubscribe any time by replying "unsubscribe".

If you have a project in mind, just reply to this email.

The AIRACODE team
https://airacode.online`,
        }),
      });
    } catch (_) {
      // Non-blocking fallback
    } finally {
      setIsSubscribing(false);
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 4000);
    }
  };

  return (
    <footer className="relative mt-24 border-t border-[#ede9e0] dark:border-white/10 bg-[#f0ece2] dark:bg-[#0f131a] text-[#4b5563] dark:text-[#9ca3af] overflow-hidden w-full transition-colors duration-300">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#d6cebe] dark:border-white/10">
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/logo-icon.png" 
                  alt="AIRACODE Logo" 
                  width={48} 
                  height={48} 
                  className="w-full h-full object-contain select-none" 
                  unoptimized
                />
              </div>
              <span className="text-2xl font-black tracking-tight text-[#1e2530] dark:text-[#f3f4f6]">
                AIRA<span className="text-[#eb4a2d]">CODE</span>
              </span>
            </Link>

            <p className="text-sm sm:text-base leading-relaxed text-[#4b5563] dark:text-[#9ca3af] max-w-lg font-medium">
              We build AI-powered websites, apps and automations, and upgrade old systems, so your business runs faster with less manual work.
            </p>

            {/* Newsletter Dispatch */}
            <div className="pt-2">
              <span className="block text-xs uppercase font-mono tracking-wider text-[#eb4a2d] mb-2 font-bold">
                Get monthly AI tips for your business
              </span>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  aria-label="Email address"
                  required
                  className="flex-1 px-4 py-2.5 text-xs bg-white dark:bg-[#151a24] rounded-2xl text-[#1e2530] dark:text-[#f3f4f6] placeholder-[#9ca3af] border border-transparent dark:border-white/10 shadow-[inset_2px_2px_4px_rgba(30,37,48,0.06)] dark:shadow-none focus:outline-none focus:ring-2 focus:ring-[#eb4a2d]"
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="clay-btn clay-btn-coral px-4 py-2 text-xs font-bold disabled:opacity-60 cursor-pointer"
                >
                  {subscribed ? (
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  ) : isSubscribing ? (
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </form>
              {subscribed && (
                <div className="mt-2.5 p-2.5 rounded-xl bg-[#059669]/10 border border-[#059669]/25 flex items-center gap-2 text-xs font-mono font-bold text-[#059669] animate-in fade-in duration-300">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>You&apos;re subscribed. Check your inbox.</span>
                </div>
              )}
            </div>

          </div>

          {/* Column 2: Core Services */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#eb4a2d] font-black mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {servicesData.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="hover:text-[#eb4a2d] dark:hover:text-[#eb4a2d] transition-colors block py-0.5"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Advanced Engineering */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#eb4a2d] font-black mb-4">
              More services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {servicesData.slice(4, 8).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="hover:text-[#eb4a2d] dark:hover:text-[#eb4a2d] transition-colors block py-0.5"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#eb4a2d] font-black mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {[
                { label: "Case Studies", href: "/case-studies" },
                { label: "How we upgrade systems", href: "/solutions" },
                { label: "Tools we use", href: "/services#stack" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#eb4a2d] transition-colors block py-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="mailto:contact@airacode.online"
              className="mt-5 inline-block text-sm font-bold text-[#1e2530] dark:text-[#f3f4f6] hover:text-[#eb4a2d]"
            >
              contact@airacode.online
            </a>
            <SocialIcons className="mt-4" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono font-medium text-[#6b7280] dark:text-[#9ca3af]">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} AIRACODE Technologies. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-5 flex-wrap">
            <Link href="/services" className="hover:text-[#eb4a2d] transition-colors">
              Services
            </Link>
            <Link href="/solutions" className="hover:text-[#eb4a2d] transition-colors">
              Solutions
            </Link>
            <Link href="/case-studies" className="hover:text-[#eb4a2d] transition-colors">
              Case Studies
            </Link>
            <Link href="/privacy" className="hover:text-[#eb4a2d] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#eb4a2d] transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-[#eb4a2d] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
