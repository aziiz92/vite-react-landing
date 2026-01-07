import { useMemo, useState } from "react";
import { site } from "../config/site";
import { useReducedMotion } from "../shared/motion";
import { scrollToId } from "../shared/scroll";
import { cn } from "../shared/cn";
import { Button, ButtonLink } from "./Button";
import { Container } from "./Container";
import { useTheme } from "../app/providers/theme-context";

export function Navbar() {
  const reduceMotion = useReducedMotion();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const items = useMemo(() => site.nav, []);

  return (
    <Container className="flex h-16 items-center justify-between gap-4">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
        }}
        className="inline-flex items-center gap-2 font-semibold tracking-tight text-slate-950 dark:text-white"
      >
        <span
          aria-hidden
          className="h-2.5 w-2.5 rounded-full bg-[color:var(--brand-primary)] shadow-[0_0_0_3px_rgba(255,255,255,0.06)]"
        />
        {site.siteName}
      </a>

      <nav
        aria-label="Primary"
        className="hidden items-center gap-6 text-sm text-slate-700 md:flex dark:text-white/70"
      >
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              scrollToId(item.id, { smooth: !reduceMotion });
            }}
            className="transition hover:text-slate-950 dark:hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="ghost"
          className="hidden md:inline-flex"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? "Light" : "Dark"}
        </Button>
        <ButtonLink href="#cta" variant="secondary" className="hidden md:inline-flex">
          Use template
        </ButtonLink>
        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-800 ring-1 ring-slate-950/10 transition hover:bg-slate-950/5 hover:text-slate-950 md:hidden dark:text-white/80 dark:ring-white/15 dark:hover:bg-white/10 dark:hover:text-white",
          )}
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "×" : "≡"}
        </button>
      </div>

      <div
        className={cn(
          "absolute left-0 top-full w-full border-b border-slate-950/10 bg-white/92 backdrop-blur md:hidden dark:border-white/10 dark:bg-slate-950/95",
          open ? "block" : "hidden",
        )}
      >
        <Container className="py-4">
          <div className="flex flex-col gap-3">
            {items.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  scrollToId(item.id, { smooth: !reduceMotion });
                }}
                className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 ring-1 ring-slate-950/10 transition hover:bg-slate-950/5 hover:text-slate-950 dark:text-white/80 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex items-center justify-between gap-3">
              <Button type="button" variant="ghost" onClick={toggleTheme}>
                Theme: {theme === "dark" ? "Dark" : "Light"}
              </Button>
              <ButtonLink href="#cta" variant="secondary">
                Use template
              </ButtonLink>
            </div>
          </div>
        </Container>
      </div>
    </Container>
  );
}
