import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const configDir = path.join(repoRoot, "src", "config");
const presetsDir = path.join(repoRoot, "src", "presets");

function listPresetNames(jsonFilenames) {
  return jsonFilenames
    .filter((name) => name.endsWith(".json"))
    .map((name) => name.replace(/\.json$/i, ""))
    .sort();
}

function getPresetNameFromNpmEnv() {
  const event = process.env.npm_lifecycle_event;
  const raw = process.env.npm_config_argv;
  if (!event || !raw) return undefined;

  try {
    const parsed = JSON.parse(raw);
    const original = Array.isArray(parsed?.original)
      ? parsed.original
      : Array.isArray(parsed?.cooked)
        ? parsed.cooked
        : [];
    const idx = original.lastIndexOf(event);
    const maybe = idx >= 0 ? original[idx + 1] : undefined;
    return typeof maybe === "string" && maybe.trim() ? maybe.trim() : undefined;
  } catch {
    return undefined;
  }
}

function getPresetName() {
  const direct = process.argv[2]?.trim();
  if (direct) return direct;
  return getPresetNameFromNpmEnv();
}

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

function formatList(items) {
  return items.map((s) => `- ${s}`).join("\n");
}

async function main() {
  const presetFiles = await fs.readdir(presetsDir);
  const presets = listPresetNames(presetFiles);
  const presetName = getPresetName();

  if (!presetName || !presets.includes(presetName)) {
    const usage = [
      "Usage:",
      "  npm run preset -- <name>",
      "  npm run preset <name>   (supported via npm env parsing)",
      "",
      "Available presets:",
      formatList(presets),
      "",
    ].join("\n");
    process.stderr.write(usage);
    process.exit(1);
  }

  const presetPath = path.join(presetsDir, `${presetName}.json`);
  const raw = await fs.readFile(presetPath, "utf8");
  const parsed = JSON.parse(raw);

  if (!parsed?.site || !parsed?.content) {
    throw new Error(`Invalid preset: ${presetName} (expected { site, content })`);
  }

  await fs.writeFile(path.join(configDir, "site.ts"), siteTs(parsed.site), "utf8");
  await fs.writeFile(path.join(configDir, "content.ts"), contentTs(parsed.content), "utf8");

  process.stdout.write(
    [
      `Applied preset "${presetName}".`,
      "Updated:",
      "- src/config/site.ts",
      "- src/config/content.ts",
      "",
    ].join("\n"),
  );
}

main().catch((err) => {
  process.stderr.write(`${err?.stack || err}\n`);
  process.exit(1);
});

