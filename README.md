# 0xkaan.dev

Source for **[0xkaan.dev](https://0xkaan.dev)**: my open notebook on offensive
security. Boxes I've rooted, written up exactly how, plus notes and the tools I
build along the way.

I'm Kaan, a senior iOS developer by trade and an offensive security practitioner
by obsession.

This is my personal site, not a template or a product. You're welcome to read
the code, but it's built for me, not to be cloned and run.

## Stack

A static [Astro](https://astro.build) site with no backend. Content is plain
markdown (Astro content collections). Hosted on Vercel, redeploys on every push
to `main`. Comments and reactions run on [Giscus](https://giscus.app) (GitHub
Discussions).

## How the content works

Every writeup, note and project follows one fixed standard, documented in
[CONTENT.md](CONTENT.md). New entries are scaffolded so the shape never drifts:

```bash
npm run new -- writeup htb-keeper "HTB: Keeper"
```

Fill it in, set `draft: false`, commit and push. The homepage counters and boot
log read straight from the content, so they stay honest on their own.
