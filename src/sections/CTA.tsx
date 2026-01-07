import { motion } from "framer-motion";
import { content } from "../config/content";
import { fadeUp, stagger, useReducedMotion } from "../shared/motion";
import { ButtonLink } from "../components/Button";
import { Container } from "../components/Container";
import { Section } from "../components/Section";

export function CTASection() {
  const section = content.cta;
  const reduceMotion = useReducedMotion();

  if (!section.enabled) return null;

  return (
    <Section id={section.id}>
      <Container>
        <motion.div
          variants={stagger}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden rounded-3xl border border-slate-950/10 bg-slate-950/5 p-8 dark:border-white/10 dark:bg-white/5 sm:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[image:var(--brand-gradient-cta)] opacity-70"
          />
          <motion.h2
            variants={fadeUp}
            className="relative text-balance text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl"
          >
            {section.title}
          </motion.h2>
          {section.description ? (
            <motion.p
              variants={fadeUp}
              className="relative mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-slate-600 dark:text-white/70 sm:text-base"
            >
              {section.description}
            </motion.p>
          ) : null}
          <motion.div variants={fadeUp} className="relative mt-6 flex flex-wrap gap-3">
            <ButtonLink href={section.primaryCta.href} variant="primary">
              {section.primaryCta.label}
            </ButtonLink>
            {section.secondaryCta ? (
              <ButtonLink href={section.secondaryCta.href} variant="secondary">
                {section.secondaryCta.label}
              </ButtonLink>
            ) : null}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

