import type { ContentConfig, SiteConfig } from "../config/types";
import preset from "./creator.json";

export const site = preset.site as SiteConfig;
export const content = preset.content as ContentConfig;

