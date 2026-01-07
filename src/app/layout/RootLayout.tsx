import type { ReactNode } from "react";

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-white text-slate-950 selection:bg-slate-950/10 selection:text-slate-950 dark:bg-slate-950 dark:text-white dark:selection:bg-white/20 dark:selection:text-white">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-slate-950 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white dark:focus:bg-white dark:focus:text-slate-950"
      >
        Skip to content
      </a>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-[image:var(--brand-gradient-hero)] opacity-40 dark:opacity-100"
      />
      {children}
    </div>
  );
}
