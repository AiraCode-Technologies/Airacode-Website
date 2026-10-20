import type { Metadata } from "next";
import Link from "next/link";
import RedirectTo from "@/components/RedirectTo";

// Old URL kept so existing links still work. Static export can't do
// server redirects, so this page forwards visitors on the client.
export const metadata: Metadata = {
  title: "Case Studies | AIRACODE",
  alternates: { canonical: "https://airacode.online/case-studies" },
  robots: { index: false, follow: true },
};

export default function WorkRedirectPage() {
  return (
    <main className="flex-1 flex items-center justify-center p-8 text-center">
      <RedirectTo href="/case-studies" />
      <p className="text-sm text-[#4b5563] dark:text-[#9ca3af]">
        Our case studies have moved.{" "}
        <Link href="/case-studies" className="font-bold text-[#eb4a2d] underline">
          Go to case studies
        </Link>
      </p>
    </main>
  );
}
