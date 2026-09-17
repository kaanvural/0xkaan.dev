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
  { href: '/projects', label: 'projects' },
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
