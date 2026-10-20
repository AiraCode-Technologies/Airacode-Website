import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIRACODE | AI Products, Websites & Automation for Growing Businesses",
  description:
    "We build AI-powered websites, apps and automations, and upgrade old systems, so your business runs faster with less manual work.",
  keywords: [
    "AIRACODE",
    "AI Website Development",
    "AI Product Development",
    "Website Maintenance and Optimization",
    "AI Fine-Tuning and Model Optimization",
    "Cloud Infrastructure",
    "Multi-Cloud Deployments",
    "Data Analysis and Data Engineering",
    "Enterprise Workflow Automation",
    "Agentic AI and Autonomous Workflows",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://airacode.online"),
  authors: [{ name: "AIRACODE Technologies" }],
  alternates: {
    canonical: "https://airacode.online",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/logo-icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "AIRACODE | AI Products, Websites & Automation",
    description:
      "We build AI-powered websites, apps and automations, and upgrade old systems, so your business runs faster.",
    url: "https://airacode.online",
    siteName: "AIRACODE",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://airacode.online/og-image.png",
        width: 1200,
        height: 630,
        alt: "AIRACODE — AI products, websites and automation",
      },
      {
        url: "https://airacode.online/logo-icon.png",
        width: 512,
        height: 512,
        alt: "AIRACODE Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIRACODE | AI Products, Websites & Automation",
    description:
      "We build AI-powered websites, apps and automations, and upgrade old systems, so your business runs faster.",
    images: ["https://airacode.online/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f2eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} h-full antialiased scroll-smooth`}>
      <head>
        {/* Security: Enforce HTTPS & upgrade insecure requests automatically */}
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />

        {/* Structured Data / Organization & WebSite Schema */}
        <JsonLd />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = storedTheme === 'dark' || (!storedTheme && prefersDark);
                if (isDark) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.setAttribute('data-theme', 'dark');
                  document.documentElement.style.colorScheme = 'dark';
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.setAttribute('data-theme', 'light');
                  document.documentElement.style.colorScheme = 'light';
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full w-full flex flex-col bg-[#f5f2eb] dark:bg-[#0b0e14] text-[#1e2530] dark:text-[#f3f4f6] font-sans selection:bg-[#ff7259]/25 selection:text-[#eb4a2d] overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
