import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { BrandProvider } from "./BrandProvider";
import { ThemeProvider } from "./ThemeProvider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <BrandProvider>{children}</BrandProvider>
      </ThemeProvider>
    </MotionConfig>
  );
}

