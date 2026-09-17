# 0xkaan.dev

Personal cybersecurity portfolio and hacker-wiki. Built with [Astro](https://astro.build)
as a fully static site. Cyber-cyan CRT terminal aesthetic on near-black.

Live: https://0xkaan.dev (hosted on Vercel)

## Local dev

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve the built dist/ locally
```

## Adding content

Everything is markdown. Drop a file in the right folder, fill the frontmatter,
and it shows up on the next build. Set `sample: true` while a file is a
placeholder; remove it (or set false) when it's real.

### A writeup — `src/content/writeups/<slug>.md`

```markdown
---
title: "HTB: Keeper"
platform: HTB            # HTB | THM | CTF | VULNHUB | OTHER
box: Keeper
os: linux               # linux | windows | other
difficulty: easy        # easy | medium | hard | insane
date: 2026-08-14
tags: [keepass, ssh, cve]
summary: "One-line teaser shown on cards and search."
draft: false            # true hides it everywhere
sample: false
---

## Recon
...your writeup in markdown...
```

### A note — `src/content/notes/<slug>.md`

```markdown
---
title: "Building my OSINT workflow"
date: 2026-08-02
tags: [osint, recon]
summary: "One-line teaser."
sample: false
---
```

### A project — `src/content/projects/<slug>.md`

```markdown
---
title: "subenum.sh"
repo: "https://github.com/0xkaan/subenum"   # optional
status: wip             # wip | active | stable | archived
order: 1                # sort order, lower first
tags: [bash, recon]
summary: "One-line teaser."
sample: false
---
```

Identity, stats, socials and achievements live in `src/data/site.ts`.
The homepage banner is `src/data/banner.txt` (figlet). Skills data is kept in
`site.ts` but the skill-matrix section is not rendered yet.

## Theming

All colours are driven by the `--accent*` and background tokens in the `:root`
block of `src/styles/global.css`. Re-theming the whole site is a one-block change.

## Deploy (Vercel)

The site is zero-config for Vercel — it auto-detects Astro (`astro build` →
`dist/`). To connect it:

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com) → **Add New → Project**, import
   `kaanvural/0xkaan.dev`. Framework preset **Astro** is detected automatically;
   build command `npm run build`, output `dist`. Deploy.
3. Every push to `main` redeploys; pull requests get preview URLs.

### Custom domain `0xkaan.dev`

In the Vercel project → **Settings → Domains**, add `0xkaan.dev` (and
`www.0xkaan.dev`). Vercel shows the exact DNS records to set at your registrar:

- Apex `0xkaan.dev` → an **A record** to `76.76.21.21` (Vercel shows the current
  value), or an ALIAS/ANAME to `cname.vercel-dns.com` if your DNS supports it.
- `www` → a **CNAME** to `cname.vercel-dns.com`.

Vercel provisions HTTPS automatically once DNS resolves.
