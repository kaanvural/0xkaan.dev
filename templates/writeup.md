---
title: "HTB: Boxname"        # "PLATFORM: Name" for boxes; free text for CTFs
platform: HTB                # HTB | THM | CTF | VULNHUB | OTHER
box: Boxname                 # optional: machine / room name
os: linux                    # optional: linux | windows | other
difficulty: easy             # optional: easy | medium | hard | insane
date: 2026-01-01             # YYYY-MM-DD
tags: [tag1, tag2]           # lowercase, short, no spaces
summary: "One line shown on cards and search. Keep it under ~120 chars, no period needed."
draft: true                  # true = hidden until you set it to false
sample: false                # leave false for real content
---

One or two sentences: what this box/target is and the attack path in a nutshell.

## Recon

```bash
nmap -sC -sV -oA nmap/boxname 10.10.10.10
```

What the scan showed and how you enumerated the surface.

## Foothold

How you got the first shell: the exploit, creds, or misconfig. Include the exact
commands so future-you can reproduce it.

## Privilege escalation

How you went from user to root / admin, and *why* it worked.

## Takeaways

- The one technique worth remembering.
- The tools that carried the box.
- What you would check first next time.
