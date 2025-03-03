// @ts-check
import { defineConfig } from 'astro/config';
import { writeFileSync } from 'fs';
import { join } from 'path';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://putnam3d.github.io/",
  base: "/",
  integrations: [react(),tailwind()],
  vite: {
    plugins: [
      {
        name: 'add-nojekyll',
        closeBundle() {
          const outDir = join(process.cwd(), 'dist');
          writeFileSync(join(outDir, '.nojekyll'), '');
          console.log('.nojekyll added to dist/');
        },
      },
    ],
  },
});