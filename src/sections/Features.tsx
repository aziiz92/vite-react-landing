import { motion } from "framer-motion";
import { features } from "../config/content";
import { fadeUp, stagger, useReducedMotion } from "../shared/motion";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { SectionHeading } from "../components/SectionHeading";

export function FeaturesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="features">
      <Container>
        <SectionHeading
          eyebrow="What’s Included"
          title="A starter baseline you can build on"
          description="This repo is intentionally small: a handful of reusable sections driven by two config files."
        />
        <motion.div
          variants={stagger}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className="h-full rounded-2xl border border-slate-950/10 bg-slate-950/5 p-6 dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-white/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
