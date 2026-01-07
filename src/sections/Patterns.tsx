import { motion } from "framer-motion";
import { content } from "../config/content";
import { fadeUp, stagger, useReducedMotion } from "../shared/motion";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";
import { cn } from "../shared/cn";

export function PatternsSection() {
  const section = content.patterns;
  const reduceMotion = useReducedMotion();

  if (!section?.enabled) return null;

  return (
    <Section id={section.id}>
      <Container>
        <SectionHeading
          eyebrow="Patterns"
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
          {section.items.map((pattern) => (
            <motion.div
              key={pattern.title}
              variants={fadeUp}
              className={cn(
                "relative rounded-2xl border border-slate-950/10 bg-slate-950/5 p-6 dark:border-white/10 dark:bg-white/5",
                "highlighted" in pattern && pattern.highlighted
                  ? "ring-1 ring-slate-950/15 dark:bg-white/8 dark:ring-white/20"
                  : null,
              )}
            >
              {"highlighted" in pattern && pattern.highlighted ? (
                <div className="absolute -top-3 left-6 rounded-full bg-[color:var(--brand-primary)] px-3 py-1 text-xs font-semibold text-slate-950">
                  Good default
                </div>
              ) : null}

              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                {pattern.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-white/70">
                {pattern.description}
              </p>

              <ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-white/70">
                {pattern.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span
                      aria-hidden
                      className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--brand-secondary)]"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
