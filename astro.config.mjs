import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://YOUR_GITHUB_USERNAME.github.io',
  base: '/astro-portfolio',
  integrations: [tailwind()],
  output: 'static',
});
