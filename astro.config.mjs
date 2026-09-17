import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://0xkaan.dev',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
