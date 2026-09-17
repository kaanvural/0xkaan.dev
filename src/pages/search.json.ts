import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { nav } from '../data/site';

function slugFile(prefix: string, id: string, ext: string) {
  return `${prefix}${id.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}.${ext}`;
}

export const GET: APIRoute = async () => {
  const writeups = await getCollection('writeups', (e) => !e.data.draft);
  const notes = await getCollection('notes', (e) => !e.data.draft);
  const projects = await getCollection('projects');

  const index = [
    ...nav.map((n) => ({
      title: n.label,
      file: `${n.label}.html`,
      kind: 'page',
      url: n.href,
      hay: n.label.toLowerCase(),
    })),
    ...writeups.map((e) => ({
      title: e.data.title,
      file: slugFile('wu_', e.id, 'md'),
      kind: e.data.platform,
      url: `/writeups/${e.id}`,
      hay: [e.data.title, e.data.platform, e.data.box, e.data.difficulty, ...e.data.tags, e.data.summary]
        .filter(Boolean).join(' ').toLowerCase(),
    })),
    ...notes.map((e) => ({
      title: e.data.title,
      file: slugFile('nt_', e.id, 'md'),
      kind: 'note',
      url: `/notes/${e.id}`,
      hay: [e.data.title, ...e.data.tags, e.data.summary].join(' ').toLowerCase(),
    })),
    ...projects.map((e) => ({
      title: e.data.title,
      file: slugFile('pj_', e.id, 'sh'),
      kind: 'project',
      url: `/projects#${e.id}`,
      hay: [e.data.title, ...e.data.tags, e.data.summary].join(' ').toLowerCase(),
    })),
  ];

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
