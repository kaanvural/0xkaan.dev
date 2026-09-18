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
  tagline: 'I take iOS apps from a rough idea to the App Store, and sweat every detail in between.',
  bio: [
    'Senior iOS developer, mostly Swift and SwiftUI. I build apps that feel fast, quiet, and obvious the moment you open them.',
    'The part I enjoy most is the messy middle: shaping a vague idea into something that ships and holds up in real hands.',
  ],
};

export const iosNav = [
  { href: '/ios/articles', label: 'articles' },
  { href: '/ios/projects', label: 'projects' },
  { href: '/ios/resume', label: 'resume' },
];

// iOS-side contact.
export const iosContact = [
  { label: 'GitHub', handle: 'kaanvural', href: 'https://github.com/kaanvural' },
  { label: 'LinkedIn', handle: 'in/vuralnkaan', href: 'https://www.linkedin.com/in/vuralnkaan/' },
  { label: 'Email', handle: 'vuralnkaan@gmail.com', href: 'mailto:vuralnkaan@gmail.com' },
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

