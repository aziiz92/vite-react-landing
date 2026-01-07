import { useEffect, type ReactNode } from "react";
import { site } from "../../config/site";

function applyBrandCssVars() {
  const root = document.documentElement;
  root.style.setProperty("--brand-primary", site.theme.colors.primary);
  root.style.setProperty("--brand-secondary", site.theme.colors.secondary);
  root.style.setProperty("--brand-accent", site.theme.colors.accent);
  root.style.setProperty("--brand-gradient-hero", site.theme.gradients.hero);
  root.style.setProperty("--brand-gradient-cta", site.theme.gradients.cta);
  root.style.setProperty("--font-sans", site.theme.fonts.sans);
  root.style.setProperty("--font-mono", site.theme.fonts.mono);
}

export function BrandProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    applyBrandCssVars();
  }, []);

  return children;
}
