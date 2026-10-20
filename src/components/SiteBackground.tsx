import { AnimatedGrid } from "@/components/ui/animated-grid";

// Page background: 21st.dev Animated Grid in the brand coral, fixed behind all content.
export default function SiteBackground() {
  return (
    <div aria-hidden className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <AnimatedGrid
        size={40}
        color="var(--bg-grid-line)"
        accent="#eb4a2d"
        opacity={0.6}
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 45%, transparent 95%)",
          maskImage: "linear-gradient(to bottom, #000 0%, #000 45%, transparent 95%)",
        }}
      />
    </div>
  );
}
