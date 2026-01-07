import { motion } from "framer-motion";
import { content } from "../config/content";
import { fadeUp, stagger, useReducedMotion } from "../shared/motion";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";

export function HowItWorksSection() {
  const section = content.howItWorks;
  const reduceMotion = useReducedMotion();

  if (!section.enabled) return null;

  return (
    <Section id={section.id}>
      <Container>
        <SectionHeading
          eyebrow="Customize"
          title={section.title}
          description={section.description}
        />

        <motion.ol
          variants={stagger}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          {section.steps.map((step, idx) => (
            <motion.li
              key={step.title}
              variants={fadeUp}
              className="rounded-2xl border border-slate-950/10 bg-slate-950/5 p-6 dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-xs font-semibold text-slate-600 dark:text-white/60">
                Step {idx + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-white/70">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </Section>
  );
}
