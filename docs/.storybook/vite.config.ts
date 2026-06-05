import { mergeConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import type { InlineConfig } from "vite";

export function viteFinal(config: InlineConfig): InlineConfig {
  return mergeConfig(config, {
    plugins: [vanillaExtractPlugin()],
  });
}
