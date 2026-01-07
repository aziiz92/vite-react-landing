import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { site } from "./src/config/site";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function siteMetaPlugin({ url }: { url: string }) {
  return {
    name: "site-meta",
    transformIndexHtml(html: string) {
      const title = escapeHtml(site.seo.title);
      const description = escapeHtml(site.seo.description);
      const ogImage = escapeHtml(site.seo.ogImagePath);
      const canonicalUrl = escapeHtml(url);

      return html
        .replaceAll("__BRAND_TITLE__", title)
        .replaceAll("__BRAND_DESCRIPTION__", description)
        .replaceAll("__BRAND_OG_IMAGE__", ogImage)
        .replaceAll("__BRAND_URL__", canonicalUrl);
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const resolvedUrl = env.VITE_SITE_URL || site.seo.url;

  return {
    plugins: [react(), tailwindcss(), siteMetaPlugin({ url: resolvedUrl })],
  };
});
