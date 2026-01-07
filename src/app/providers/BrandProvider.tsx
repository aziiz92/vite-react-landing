import { useEffect, type ReactNode } from "react";
import { site } from "../../config/site";

function applyBrandCssVars() {
  const root = document.documentElement;
  root.style.setProperty("--brand-primary", site.primaryColor);
  root.style.setProperty("--brand-secondary", site.secondaryColor ?? site.accentColor);
  root.style.setProperty("--brand-accent", site.accentColor);
  root.style.setProperty("--brand-gradient-hero", site.gradient);
  root.style.setProperty("--brand-gradient-cta", site.gradient);
  if (site.fonts?.sans) root.style.setProperty("--font-sans", site.fonts.sans);
  if (site.fonts?.mono) root.style.setProperty("--font-mono", site.fonts.mono);
}

export function BrandProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    applyBrandCssVars();
  }, []);

  return children;
}
