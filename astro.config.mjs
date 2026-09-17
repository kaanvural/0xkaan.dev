import { defineConfig } from 'astro/config';

// Astro defaults: build.format 'directory' (emits /whoami/index.html) and
// trailingSlash 'ignore'. This makes clean URLs like /whoami resolve on any
// static host (Vercel, GitHub Pages, a plain file server) without extra
// rewrite rules — unlike format:'file', which only serves /whoami.html.
export default defineConfig({
  site: 'https://0xkaan.dev',
});
