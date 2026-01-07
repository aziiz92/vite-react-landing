import { motion } from "framer-motion";
import { content } from "../config/content";
import { fadeUp, stagger, useReducedMotion } from "../shared/motion";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";

function SignalRail() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-950/10 bg-slate-950/5 p-6 dark:border-white/10 dark:bg-white/5">
      <p className="text-sm font-semibold text-slate-950 dark:text-white">System signals</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-white/70">
        A lightweight visual you can swap for product screenshots or real metrics.
      </p>
      <div className="mt-6">
        <div className="flex items-center gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <span
              key={i}
              className="h-2 w-2 rounded-full bg-slate-950/10 ring-1 ring-slate-950/10 dark:bg-white/10 dark:ring-white/10"
              style={{
                opacity: 0.35 + (i % 5) * 0.12,
                background:
                  i % 7 === 0
                    ? "var(--brand-primary)"
                    : i % 11 === 0
                      ? "var(--brand-secondary)"
                      : undefined,
              }}
            />
          ))}
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[color:var(--brand-secondary)] opacity-10 blur-3xl"
      />
    </div>
  );
}

export function TechSection() {
  const section = content.tech;
  const reduceMotion = useReducedMotion();

  if (!section?.enabled) return null;

  return (
    <Section id={section.id}>
      <Container>
        <SectionHeading
          eyebrow="Tech"
          title={section.title}
          description={section.description}
          align="center"
        />

        <motion.div
          variants={stagger}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-4 lg:grid-cols-3"
        >
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <SignalRail />
          </motion.div>
          <motion.div variants={fadeUp} className="space-y-4">
            {section.bullets.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-slate-950/10 bg-slate-950/5 p-6 dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-base font-semibold text-slate-950 dark:text-white">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-white/70">
                  {b.description}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
