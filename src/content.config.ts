import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writeups = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writeups' }),
  schema: z.object({
    title: z.string(),
    platform: z.enum(['HTB', 'THM', 'CTF', 'VULNHUB', 'OTHER']),
    box: z.string().optional(),
    os: z.enum(['linux', 'windows', 'other']).optional(),
    difficulty: z.enum(['easy', 'medium', 'hard', 'insane']).optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    draft: z.boolean().default(false),
    sample: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    draft: z.boolean().default(false),
    sample: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    repo: z.string().url().optional(),
    status: z.enum(['wip', 'active', 'stable', 'archived']).default('active'),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    order: z.number().default(99),
    sample: z.boolean().default(false),
  }),
});

export const collections = { writeups, notes, projects };
