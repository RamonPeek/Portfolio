import { withBase } from '../utils/url';
import type { APIRoute } from 'astro';
import { projects } from '../data/portfolio';

export const GET: APIRoute = () => {
  const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  const paths = ['/', ...projects.map((project) => `/projects/${project.slug}/`)];
  const entries = import.meta.env.SITE ? paths.map((path) => `<url><loc>${escape(new URL(withBase(path), import.meta.env.SITE).href)}</loc></url>`).join('') : '';
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
