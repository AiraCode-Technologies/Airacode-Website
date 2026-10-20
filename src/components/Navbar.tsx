"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ArrowRight
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20 pt-2.5 pb-2 transition-all">
      <div className="w-full rounded-3xl bg-white/95 dark:bg-[#151a24]/95 backdrop-blur-xl border border-white/80 dark:border-white/10 shadow-[12px_16px_36px_rgba(30,37,48,0.08),-8px_-8px_24px_rgba(255,255,255,0.9),inset_3px_3px_6px_rgba(255,255,255,0.9),inset_-3px_-3px_8px_rgba(30,37,48,0.03)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_1px_1px_2px_rgba(255,255,255,0.05)] px-4 sm:px-8 lg:px-10 py-3">
        <div className="flex items-center justify-between h-14">
          {/* Seamless Logo - No separate background container */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
              <Image 
                src="/logo-icon.png" 
                alt="AIRACODE Logo" 
                width={44} 
                height={44} 
                className="w-full h-full object-contain select-none" 
                priority
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#1e2530] dark:text-[#f3f4f6] flex items-center gap-0.5">
                AIRA<span className="text-[#eb4a2d]">CODE</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#6b7280] dark:text-[#9ca3af] -mt-1 font-mono">
                AI Studio
              </span>
            </div>
          </Link>

          {/* Desktop Tactile Pills */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-3">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 sm:px-5 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-[#ede9e0] dark:bg-white/10 text-[#eb4a2d] shadow-[inset_3px_3px_6px_rgba(30,37,48,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.8)] dark:shadow-none"
                      : "text-[#4b5563] dark:text-[#9ca3af] hover:text-[#1e2530] dark:hover:text-white hover:bg-[#f6f3ee] dark:hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA Button & Theme Switch */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="clay-btn clay-btn-coral px-6 py-2.5 text-xs sm:text-sm font-bold tracking-wide"
            >
              <span>Start a project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Actions: Theme Switch, Start CTA & Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Link
              href="/contact"
              className="clay-btn clay-btn-coral px-3 py-1.5 text-xs font-bold"
            >
              Start
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-2xl bg-[#ede9e0] dark:bg-white/10 text-[#1e2530] dark:text-[#f3f4f6] shadow-[inset_2px_2px_4px_rgba(30,37,48,0.08),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] dark:shadow-none cursor-pointer"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Tactile Menu Drawer */}
        {isOpen && (
          <div className="md:hidden border-t border-[#ede9e0] dark:border-white/10 pt-4 pb-4 mt-2">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                      isActive
                        ? "bg-[#ede9e0] dark:bg-white/10 text-[#eb4a2d] shadow-[inset_3px_3px_6px_rgba(30,37,48,0.08)] dark:shadow-none"
                        : "text-[#4b5563] dark:text-[#9ca3af] hover:bg-[#f6f3ee] dark:hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-2 mt-2 border-t border-[#ede9e0] dark:border-white/10 flex flex-col gap-2">
                <ThemeToggle showLabel />
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full clay-btn clay-btn-coral py-3 text-sm font-bold"
                >
                  <span>Start a project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
