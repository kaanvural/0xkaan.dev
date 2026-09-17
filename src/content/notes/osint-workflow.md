---
title: "Building my OSINT workflow"
date: 2026-08-02
tags: [osint, recon, methodology]
summary: "How I structure a passive-recon pass before ever touching a target: seeds, pivots, and the folder layout that keeps findings from turning into chaos."
sample: true
---

> SAMPLE NOTE, this is placeholder content demonstrating the notes layout.

Every engagement starts the same way for me: a single seed (a domain, a name,
a username) and a blank `recon/` folder. The goal of the passive pass is to map
the attack surface **without sending a single packet the target can attribute
to me.**

## The folder that keeps me sane

```
recon/
  seeds.txt          # everything I started from
  subdomains.txt     # crt.sh + amass passive
  people.md          # names, roles, handles
  breaches.md        # HIBP hits, paste leaks
  pivots.md          # "this led to that", the story
```

## Seeds → pivots

The mistake I made early was collecting *facts* instead of *pivots*. A fact is
"they use Office 365". A pivot is "O365 → user enumeration via login timing →
valid `first.last@` format confirmed". `pivots.md` is the only file I actually
re-read.

## Tools I actually reach for

- `crt.sh` and `amass -passive` for subdomains
- `theHarvester` for emails/hosts from public sources
- `holehe` / `sherlock` for username → account mapping
- HaveIBeenPwned for breach exposure (never paste creds anywhere)

## The rule

If I can't write the *why* next to a finding, it doesn't go in the report. OSINT
without a hypothesis is just hoarding.
