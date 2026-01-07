import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "../shared/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 disabled:pointer-events-none disabled:opacity-50";

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-slate-950 text-white hover:bg-slate-900 shadow-sm shadow-black/10 dark:bg-white dark:text-slate-950 dark:hover:bg-white/90 dark:shadow-black/20",
  secondary:
    "bg-slate-950/5 text-slate-950 hover:bg-slate-950/10 ring-1 ring-slate-950/10 backdrop-blur dark:bg-white/10 dark:text-white dark:hover:bg-white/15 dark:ring-white/15",
  ghost:
    "text-slate-700 hover:text-slate-950 hover:bg-slate-950/5 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/10",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return (
    <button className={cn(base, sizes[size], variants[variant], className)} {...props} />
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return (
    <a className={cn(base, sizes[size], variants[variant], className)} {...props} />
  );
}
