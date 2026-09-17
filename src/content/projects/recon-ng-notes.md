---
title: "subenum.sh"
repo: "https://github.com/0xkaan/subenum"
status: wip
order: 1
tags: [bash, recon, automation]
summary: "A small passive subdomain-enumeration wrapper that fans out to crt.sh, amass and subfinder, then dedupes and resolves, one command, one clean list."
sample: true
---

> SAMPLE PROJECT, replace with a real repo.

A Bash wrapper I keep extending. Runs passive sources in parallel, merges the
output, resolves live hosts, and writes a single `subdomains.txt`. Nothing
groundbreaking, just the glue I got tired of re-typing on every box.
