import { motion } from "framer-motion";
import { steps } from "../config/content";
import { fadeUp, stagger, useReducedMotion } from "../shared/motion";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";

export function StepsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="how">
      <Container>
        <SectionHeading
          eyebrow="Customize"
          title="A repeatable workflow for new projects"
          description="Update the config, swap the copy, and ship. Keep the structure predictable so you can focus on visuals and message."
        />

        <motion.ol
          variants={stagger}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          {steps.map((step, idx) => (
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
