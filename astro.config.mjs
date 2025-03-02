// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://putnam3d.github.io/",
  base: "/putnam3d.github.io/",
  integrations: [react()]
});