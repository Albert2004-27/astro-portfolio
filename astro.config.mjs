import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://Albert2004-27.github.io',
  base: process.env.NODE_ENV === 'production' ? '/astro-portfolio' : '/',
  integrations: [tailwind()],
  output: 'static',
});
