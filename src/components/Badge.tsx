import type { ReactNode } from "react";
import { cn } from "../shared/cn";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-slate-950/5 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-950/10 dark:bg-white/5 dark:text-white/70 dark:ring-white/10",
        className,
      )}
    >
      {children}
    </span>
  );
}
