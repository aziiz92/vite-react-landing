import { motion } from "framer-motion";
import { content } from "../config/content";
import { fadeUp, stagger, useReducedMotion } from "../shared/motion";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";

export function TestimonialsSection() {
  const section = content.testimonials;
  const reduceMotion = useReducedMotion();

  if (!section.enabled) return null;

  return (
    <Section id={section.id}>
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title={section.title}
          description={section.description}
        />
        <motion.div
          variants={stagger}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-4 lg:grid-cols-3"
        >
          {section.items.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="h-full rounded-2xl border border-slate-950/10 bg-slate-950/5 p-6 dark:border-white/10 dark:bg-white/5"
            >
              <blockquote className="text-sm leading-relaxed text-slate-800 dark:text-white/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-white/60">
                    {t.role} · {t.company}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="h-9 w-9 rounded-full bg-slate-950/10 ring-1 ring-slate-950/10 dark:bg-white/10 dark:ring-white/10"
                />
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
