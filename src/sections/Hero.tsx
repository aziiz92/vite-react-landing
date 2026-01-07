import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { hero } from "../config/content";
import { site } from "../config/site";
import { fadeUp, stagger, useReducedMotion } from "../shared/motion";
import { canUseWebGL } from "../shared/webgl";
import { ButtonLink } from "../components/Button";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { ErrorBoundary } from "../components/ErrorBoundary";

const LazyHeroScene = lazy(() => import("../components/3d/HeroScene"));

function StaticOrnament({ reason }: { reason?: string }) {
  return (
    <div className="relative h-[360px] w-full overflow-hidden rounded-3xl border border-slate-950/10 bg-gradient-to-br from-slate-950/5 via-slate-950/0 to-transparent dark:border-white/10 dark:from-white/10 dark:via-white/5">
      <div className="absolute inset-0 bg-[image:var(--brand-gradient-hero)]" />
      <svg
        aria-hidden
        viewBox="0 0 400 400"
        className="absolute -right-16 -top-10 h-[440px] w-[440px] opacity-70"
      >
        <defs>
          <radialGradient id="g" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="210" cy="190" r="150" fill="url(#g)" />
        <circle
          cx="110"
          cy="280"
          r="90"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="2"
        />
      </svg>
      {reason ? (
        <div className="absolute inset-x-6 bottom-6 text-left">
          <p className="text-sm font-semibold text-slate-950 dark:text-white">3D disabled</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-white/70">{reason}</p>
        </div>
      ) : null}
    </div>
  );
}

function HeroVisual() {
  const reduceMotion = useReducedMotion();
  const [webgl] = useState(canUseWebGL);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    if (!webgl) return;

    let cancelled = false;
    const requestIdle = window.requestIdleCallback;

    const start = () => {
      if (!cancelled) setReady(true);
    };

    if (typeof requestIdle === "function") {
      const handle = requestIdle(start, { timeout: 1200 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback?.(handle);
      };
    }

    const timeout = window.setTimeout(start, 250);
    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
    };
  }, [reduceMotion, webgl]);

  if (reduceMotion) {
    return <StaticOrnament reason="Respects your reduced motion preference." />;
  }

  if (!site.features.enable3dHero) {
    return <StaticOrnament reason="3D is disabled in `src/config/site.ts`." />;
  }

  if (!webgl) {
    return <StaticOrnament reason="WebGL unavailable on this device." />;
  }

  return (
    <div className="relative h-[360px] w-full overflow-hidden rounded-3xl border border-slate-950/10 bg-slate-950/5 dark:border-white/10 dark:bg-white/5">
      <div className="absolute inset-0">
        <ErrorBoundary fallback={<StaticOrnament reason="3D failed to load." />}>
          <Suspense
            fallback={
              <div className="grid h-full w-full place-items-center text-sm text-slate-600 dark:text-white/60">
                Loading 3D…
              </div>
            }
          >
            {ready ? (
              <LazyHeroScene />
            ) : (
              <div className="grid h-full w-full place-items-center text-sm text-slate-600 dark:text-white/60">
                Preparing 3D…
              </div>
            )}
          </Suspense>
        </ErrorBoundary>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[image:var(--brand-gradient-hero)] opacity-80"
      />
    </div>
  );
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section className="pt-10 sm:pt-14">
      <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
        <motion.div
          variants={stagger}
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          className="space-y-7"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold text-slate-600 dark:text-white/70"
          >
            {site.tagline}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-white"
          >
            {hero.headline}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-white/70"
          >
            {hero.subheadline}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <ButtonLink href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </ButtonLink>
          </motion.div>
          <motion.dl
            variants={fadeUp}
            className="grid grid-cols-3 gap-4 rounded-2xl border border-slate-950/10 bg-slate-950/5 p-4 dark:border-white/10 dark:bg-white/5"
          >
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs font-semibold text-slate-500 dark:text-white/60">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-slate-950 dark:text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, ease: "easeOut", delay: 0.05 }}
        >
          <HeroVisual />
        </motion.div>
      </Container>
    </Section>
  );
}
