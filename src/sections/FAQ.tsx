import { motion } from "framer-motion";
import { content } from "../config/content";
import { fadeUp, stagger, useReducedMotion } from "../shared/motion";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";

export function FAQSection() {
  const section = content.faq;
  const reduceMotion = useReducedMotion();

  if (!section.enabled) return null;

  return (
    <Section id={section.id}>
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title={section.title}
          description={section.description}
        />

        <motion.div
          variants={stagger}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 space-y-3"
        >
          {section.items.map((item) => (
            <motion.div key={item.question} variants={fadeUp}>
              <details className="group rounded-2xl border border-slate-950/10 bg-slate-950/5 p-5 dark:border-white/10 dark:bg-white/5">
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-950 dark:text-white">
                  <span className="inline-flex w-full items-center justify-between gap-4">
                    {item.question}
                    <span className="text-slate-600 transition group-open:rotate-45 dark:text-white/60">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/70">
                  {item.answer}
                </p>
              </details>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
