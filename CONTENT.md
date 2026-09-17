# Content standard

Every writeup, note and project follows one fixed shape so the site stays
consistent. Scaffold a new entry from its template with one command, fill it in,
flip `draft: false`, then commit and push.

## Make a new entry

```bash
npm run new -- writeup htb-keeper "HTB: Keeper"
npm run new -- note   osint-workflow "Building my OSINT workflow"
npm run new -- project subenum "subenum.sh"
```

This copies `templates/<type>.md` into `src/content/<type>s/<slug>.md` with
today's date filled in and `draft: true`. Prefer this over hand-copying so the
frontmatter never drifts. (You can still copy the template by hand if you like.)

## Global rules

- **Filename = URL slug.** Lowercase, hyphens only: `htb-keeper.md` → `/writeups/htb-keeper`. No spaces, no underscores, no uppercase.
- **`date`** is `YYYY-MM-DD`.
- **`summary`** is one line, shown on cards and in search. Keep it under ~120 characters, no trailing period needed.
- **`tags`** are lowercase, short, no spaces: `[keepass, ssh, cve]`.
- **`draft: true`** hides an entry everywhere until you set it to `false`. New entries start as draft.
- **`sample: true`** shows a faint "sample" marker (placeholder). Real content is `sample: false`.
- **Never use em-dashes (—) or en-dashes (–)** in any copy. Use commas, colons or periods.
- Enum fields (`platform`, `os`, `difficulty`, `status`) accept only the values listed below. Anything else fails the build (Zod validation) — that is the guardrail keeping the standard.

## writeup — `src/content/writeups/<slug>.md`

Frontmatter:

| field | required | values |
|-------|----------|--------|
| `title` | yes | `"PLATFORM: Name"` for boxes, free text for CTFs |
| `platform` | yes | `HTB` \| `THM` \| `CTF` \| `VULNHUB` \| `OTHER` |
| `box` | no | machine / room name |
| `os` | no | `linux` \| `windows` \| `other` |
| `difficulty` | no | `easy` \| `medium` \| `hard` \| `insane` |
| `date` | yes | `YYYY-MM-DD` |
| `tags` | no | array, defaults to `[]` |
| `summary` | yes | one line |
| `draft` | no | defaults `false` |
| `sample` | no | defaults `false` |

Body (fixed section order):

1. One or two sentences: what the target is and the attack path in a nutshell.
2. `## Recon`
3. `## Foothold`
4. `## Privilege escalation`
5. `## Takeaways` (bulleted: the technique, the tools, what to check first next time)

## note — `src/content/notes/<slug>.md`

Frontmatter: `title`, `date`, `tags`, `summary`, `draft`, `sample` (same rules as above).

Body:

1. Context: why you're writing it down.
2. `## The gist`
3. `## Takeaway`

## project — `src/content/projects/<slug>.md`

| field | required | values |
|-------|----------|--------|
| `title` | yes | reads like a command / filename |
| `repo` | no | full URL, or omit the line |
| `status` | no | `wip` \| `active` \| `stable` \| `archived` (defaults `active`) |
| `order` | no | number, lower sorts first (defaults `99`) |
| `tags` | no | array |
| `summary` | yes | one line |
| `sample` | no | defaults `false` |

Body:

1. One short paragraph: what it does, why it exists, when you reach for it.
2. `## Usage` (a code block)

## Publish

```bash
git add src/content/... && git commit -m "writeup: htb keeper" && git push
```

Vercel rebuilds on push. The homepage boot log and counters read straight from
the content, so they update themselves.
