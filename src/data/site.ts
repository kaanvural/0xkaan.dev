// Central site config. Edit these and the whole site updates.

export const site = {
  handle: '0xkaan',
  name: 'Kaan',
  domain: '0xkaan.dev',
  role: 'senior ios dev · security practitioner',
  tagline: 'Senior iOS developer breaking boxes and writing down exactly how.',
  bio: [
    "Senior iOS developer by trade, offensive security practitioner by obsession.",
    "My open notebook: boxes I've rooted, written up exactly how.",
  ],
};

export const nav = [
  { href: '/whoami', label: 'whoami' },
  { href: '/writeups', label: 'writeups' },
  { href: '/notes', label: 'notes' },
];

// The iOS world: Kaan Vural the senior iOS developer. Warm, professional,
// recruiter-facing. Lives under /ios with its own beige theme.
export const iosSite = {
  name: 'Kaan Vural',
  role: 'Senior iOS Developer',
  tagline: 'I build iOS apps end to end, from the first sketch to the App Store.',
  bio: [
    'Senior iOS developer working in Swift and SwiftUI. I like apps that are fast, quiet, and feel obvious the first time you open them.',
    'Most of my work is turning a rough idea into something shippable: the architecture, the details, and the unglamorous parts that make it hold up.',
  ],
};

export const iosNav = [
  { href: '/ios/articles', label: 'articles' },
  { href: '/ios/projects', label: 'projects' },
  { href: '/ios/resume', label: 'resume' },
];

// iOS-side contact. Replace the placeholders with your real links.
export const iosContact = [
  { label: 'GitHub', handle: 'kaanvural', href: 'https://github.com/kaanvural' },
  { label: 'LinkedIn', handle: 'in/kaanvural', href: 'https://www.linkedin.com/in/kaanvural' },
  { label: 'Email', handle: 'you@example.com', href: 'mailto:you@example.com' },
];

export const socials = [
  { label: 'github', handle: '@0xkaan', href: 'https://github.com/0xkaan' },
  { label: 'tryhackme', handle: '0xkaan', href: 'https://tryhackme.com/p/0xkaan' },
  { label: 'hackthebox', handle: '0xkaan', href: 'https://app.hackthebox.com/profile' },
];

// SAMPLE metrics: wire these to real numbers as you go.
export const stats = [
  { value: '12', label: 'writeups' },
  { value: '34', label: 'rooms / boxes' },
  { value: '3', label: 'certs in progress' },
  { value: '120+', label: 'lab hours' },
];

// SAMPLE skill matrix: 0..5 self-assessed, edit freely. (Not shown on the site
// yet, kept here so it's a one-line change to bring the section back.)
export const skills = [
  { area: 'Linux', level: 4 },
  { area: 'Networking', level: 4 },
  { area: 'Web exploitation', level: 3 },
  { area: 'Privilege escalation', level: 3 },
  { area: 'Python / scripting', level: 3 },
  { area: 'Active Directory', level: 1 },
  { area: 'OSINT / recon', level: 3 },
  { area: 'Reverse engineering', level: 1 },
];

// SAMPLE achievements / certs.
export const achievements = [
  { title: 'eJPT', status: 'in progress', note: 'target: Q4 2026' },
];

// Giscus comments (GitHub Discussions backend). Comments stay dormant until
// repoId/categoryId are filled with real values from https://giscus.app.
// Requirements on GitHub: the repo must be PUBLIC, Discussions enabled, and the
// giscus app (https://github.com/apps/giscus) installed on it.
export const giscus = {
  repo: 'kaanvural/0xkaan.dev',
  repoId: 'R_kgDOUfOWWg',
  category: 'General',
  categoryId: 'DIC_kwDOUfOWWs4DF1cW',
};

