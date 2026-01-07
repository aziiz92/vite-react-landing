import { motion } from "framer-motion";
import { content } from "../config/content";
import { fadeUp, stagger, useReducedMotion } from "../shared/motion";
import { Container } from "../components/Container";
import { Section } from "../components/Section";

export function SocialProofSection() {
  const section = content.socialProof;
  const reduceMotion = useReducedMotion();

  if (!section.enabled) return null;

  return (
    <Section id={section.id} className="py-10 sm:py-12">
      <Container>
        <motion.div
          variants={stagger}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-3xl border border-slate-950/10 bg-slate-950/5 px-6 py-6 dark:border-white/10 dark:bg-white/5"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold text-slate-600 dark:text-white/60"
          >
            {section.title}
          </motion.p>
          {section.note ? (
            <motion.p
              variants={fadeUp}
              className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-white/60"
            >
              {section.note}
            </motion.p>
          ) : null}
          <motion.div
            variants={fadeUp}
            className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold tracking-tight text-slate-800 dark:text-white/80"
          >
            {section.logos.map((logo) => (
              <span key={logo} className="opacity-80">
                {logo}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
