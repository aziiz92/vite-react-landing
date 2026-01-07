import { site } from "../config/site";
import { content } from "../config/content";
import { Container } from "../components/Container";

export function FooterSection() {
  const section = content.footer;
  const year = new Date().getFullYear();

  if (!section.enabled) return null;

  return (
    <footer className="border-t border-slate-950/10 py-12 dark:border-white/10">
      <Container className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <p className="text-base font-semibold tracking-tight text-slate-950 dark:text-white">
            {site.siteName}
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-slate-600 dark:text-white/60">
            {site.tagline}
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {site.socials.map((s) => (
              <a
                key={s.url}
                href={s.url}
                className="rounded-full bg-slate-950/5 px-3 py-1 text-slate-700 ring-1 ring-slate-950/10 transition hover:bg-slate-950/10 hover:text-slate-950 dark:bg-white/5 dark:text-white/70 dark:ring-white/10 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <p className="text-slate-600 dark:text-white/60">Links</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {site.footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 transition hover:text-slate-950 dark:text-white/60 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500 dark:text-white/50">
            © {year} {site.siteName}. MIT licensed.
          </p>
        </div>
      </Container>
    </footer>
  );
}
