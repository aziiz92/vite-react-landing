import fs from "node:fs/promises";
import path from "node:path";
import readline from "node:readline";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const presetsDir = path.join(repoRoot, "src", "presets");
const configDir = path.join(repoRoot, "src", "config");

function toTs(value) {
  return JSON.stringify(value, null, 2);
}

function siteTs(site) {
  return [
    'import type { SiteConfig } from "./types";',
    "",
    `export const site = ${toTs(site)} as const satisfies SiteConfig;`,
    "",
  ].join("\n");
}

function contentTs(content) {
  return [
    'import type { ContentConfig } from "./types";',
    "",
    `export const content = ${toTs(content)} as const satisfies ContentConfig;`,
    "",
  ].join("\n");
}

function isHexColor(value) {
  return /^#[0-9a-fA-F]{6}$/.test(value);
}

function normalizeYesNo(value) {
  const v = value.trim().toLowerCase();
  if (v === "y" || v === "yes") return true;
  if (v === "n" || v === "no") return false;
  return undefined;
}

function listPresetNames(jsonFilenames) {
  return jsonFilenames
    .filter((name) => name.endsWith(".json"))
    .map((name) => name.replace(/\.json$/i, ""))
    .sort();
}

async function loadPreset(presetName) {
  const presetPath = path.join(presetsDir, `${presetName}.json`);
  const raw = await fs.readFile(presetPath, "utf8");
  const parsed = JSON.parse(raw);
  if (!parsed?.site || !parsed?.content) {
    throw new Error(`Invalid preset: ${presetName} (expected { site, content })`);
  }
  return parsed;
}

function deriveNavLinks(site, content) {
  const enabledById = new Map();
  for (const section of Object.values(content)) {
    if (!section || typeof section !== "object") continue;
    if (!("id" in section) || !("enabled" in section)) continue;
    enabledById.set(section.id, Boolean(section.enabled));
  }

  return (site.navLinks || []).map((link) => {
    if (!link?.href || typeof link.href !== "string") return link;
    if (!link.href.startsWith("#")) return link;
    const id = link.href.slice(1);
    const enabled = enabledById.has(id) ? enabledById.get(id) : link.enabled;
    return { ...link, enabled: Boolean(enabled) };
  });
}

async function main() {
  const presetFiles = await fs.readdir(presetsDir);
  const presets = listPresetNames(presetFiles);
  if (!presets.includes("base")) {
    throw new Error('Missing base preset. Expected "src/presets/base.json".');
  }

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const ask = (prompt) =>
    new Promise((resolve) => {
      rl.question(prompt, (answer) => resolve(String(answer ?? "").trim()));
    });

  const divider = () => process.stdout.write("\n");

  process.stdout.write("Vite React Landing — init\n");
  process.stdout.write("This will write `src/config/site.ts` and `src/config/content.ts`.\n");
  divider();

  const presetAnswer = await ask(
    `Choose a preset (${presets.join("/")}) [base]: `,
  );
  const presetName = (presetAnswer || "base").toLowerCase();
  if (!presets.includes(presetName)) {
    rl.close();
    throw new Error(`Unknown preset: ${presetName}`);
  }

  const preset = await loadPreset(presetName);

  const siteName = (await ask(`Site name [${preset.site.siteName}]: `)) || preset.site.siteName;
  const tagline =
    (await ask(`Tagline (optional) [${preset.site.tagline}]: `)) || preset.site.tagline;

  let primaryColor = (await ask(`Primary color (hex) [${preset.site.primaryColor}]: `)) || preset.site.primaryColor;
  while (!isHexColor(primaryColor)) {
    primaryColor = (await ask("Please enter a valid hex color like #RRGGBB: ")) || "";
  }

  let accentColor = (await ask(`Accent color (hex) [${preset.site.accentColor}]: `)) || preset.site.accentColor;
  while (!isHexColor(accentColor)) {
    accentColor = (await ask("Please enter a valid hex color like #RRGGBB: ")) || "";
  }

  divider();
  process.stdout.write("Section toggles\n");
  divider();

  const content = structuredClone(preset.content);
  const sectionKeys = Object.keys(content);

  for (const key of sectionKeys) {
    const section = content[key];
    if (!section || typeof section !== "object" || typeof section.enabled !== "boolean") continue;
    const label = typeof section.title === "string" && section.title.trim() ? section.title : key;
    const defaultEnabled = section.enabled;
    const hint = defaultEnabled ? "Y/n" : "y/N";

    // eslint-disable-next-line no-await-in-loop
    const answer = await ask(`Enable "${label}"? (${hint}): `);
    const parsed = answer ? normalizeYesNo(answer) : undefined;
    section.enabled = parsed ?? defaultEnabled;
  }

  const site = structuredClone(preset.site);
  site.siteName = siteName;
  site.tagline = tagline;
  site.primaryColor = primaryColor;
  site.accentColor = accentColor;
  if (!site.secondaryColor) site.secondaryColor = accentColor;

  if (site.seo) {
    site.seo = {
      ...site.seo,
      title: `${siteName}${tagline ? ` — ${tagline}` : ""}`.trim(),
      description: site.description || site.seo.description,
    };
  }

  site.navLinks = deriveNavLinks(site, content);

  divider();
  await fs.writeFile(path.join(configDir, "site.ts"), siteTs(site), "utf8");
  await fs.writeFile(path.join(configDir, "content.ts"), contentTs(content), "utf8");

  process.stdout.write("Wrote:\n- src/config/site.ts\n- src/config/content.ts\n\n");
  process.stdout.write("Next steps:\n");
  process.stdout.write("- `npm run dev`\n");
  process.stdout.write("- Edit `src/config/site.ts` and `src/config/content.ts`\n");
  process.stdout.write("- Replace `public/favicon.svg` and `public/og.svg`\n");

  rl.close();
}

main().catch((err) => {
  process.stderr.write(`${err?.stack || err}\n`);
  process.exit(1);
});

