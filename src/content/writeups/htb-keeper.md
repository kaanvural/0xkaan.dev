---
title: "HTB: Keeper"
platform: HTB
box: Keeper
os: linux
difficulty: easy
date: 2026-08-14
tags: [CVE-2023-32784, keepass, ssh, ticketing]
summary: "Request Tracker default creds lead to a KeePass dump; recovering the master password from process memory (CVE-2023-32784) yields root's PuTTY key."
sample: true
---

> SAMPLE WRITEUP, replace with your own once you've rooted the box.

## Recon

```bash
nmap -sC -sV -oA nmap/keeper 10.10.11.227
# 22/tcp  ssh
# 80/tcp  http  -> redirects to tickets.keeper.htb
```

Add the vhost to `/etc/hosts` and browse to the Request Tracker (RT) instance.

## Foothold

RT ships with well-known default credentials (`root:password`). Logged in as
an admin, one user's comment stores a Linux login. That gets us SSH as `lnorgaard`.

## Loot

In the home directory sits a `KeePassDumpFull.dmp` and a `passcodes.kdbx`.
This is the setup for **CVE-2023-32784**, KeePass 2.x leaks most of the master
password (all but the first character) in a memory dump.

```bash
# keepass-password-dumper against the .dmp
dotnet run KeePassDumpFull.dmp
# recovered: ●ldgr_dev0rlom! -> guessed: rødgrød med fløde
```

## Privilege escalation

The KDBX yields root's PuTTY `.ppk`. Convert it and log in:

```bash
puttygen key.ppk -O private-openssh -o id_rsa
ssh -i id_rsa root@keeper.htb
```

## Takeaways

- Default creds on internal ticketing systems are still everywhere.
- Memory-dump artifacts are loot; treat `.dmp` files as credentials.
- Keep a PuTTY↔OpenSSH conversion cheatsheet handy.
