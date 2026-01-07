import type { Variants } from "framer-motion";
import { useSyncExternalStore } from "react";

function useMediaQuery(query: string) {
  const getSnapshot = () =>
    typeof window === "undefined" ? false : window.matchMedia(query).matches;

  return useSyncExternalStore(
    (onStoreChange) => {
      if (typeof window === "undefined") return () => {};
      const mediaQueryList = window.matchMedia(query);
      const onChange = () => onStoreChange();
      mediaQueryList.addEventListener("change", onChange);
      return () => mediaQueryList.removeEventListener("change", onChange);
    },
    getSnapshot,
    () => false,
  );
}

export function useReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: { opacity: 1, scale: 1 },
};

export const slideIn: Variants = {
  hidden: { opacity: 0, x: 18 },
  show: { opacity: 1, x: 0 },
};

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};
