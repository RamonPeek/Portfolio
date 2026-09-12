# Ramon Peek — personal portfolio

A static Astro + TypeScript portfolio with a Foundry-inspired interface, light and dark themes, responsive navigation, project filtering, and individual project pages.

## Run locally

Use a current Node.js 22 or 24 release (minimum 22.12.0).

```sh
npm install
npm run dev
```

Open the URL printed by Astro (normally http://localhost:4321).

```sh
npm run check   # Astro and TypeScript diagnostics
npm run build   # Check and generate the static site in dist/
npm run preview # Preview the production build
```

## Personalize

All portfolio content is hardcoded in `src/data/portfolio.ts`. Edit the profile, projects, work experience, education, certifications, and hobbies there. Example content is clearly marked on the website; replace it with your real information and set `sample: false`. Remove entries you do not need. The first project describes this actual portfolio; other project entries are examples.

- Add your email, GitHub, and LinkedIn URLs in `profile` to display contact links.
- Add `repositoryUrl` and `demoUrl` to projects to display their links.
- Set `profile.siteUrl` to your public URL before deploying. This enables canonical URLs and populates `/sitemap.xml`.
- Add a `Sitemap: https://your-domain/sitemap.xml` line to `public/robots.txt` once the domain is known.
- Customize design tokens and layout in `src/styles/global.css`.
- Add a local, optimized profile photograph to `public/images/` and set `profile.photoUrl` (for example `/images/profile.webp`) to replace the initials panel.
- Certifications support an optional `expires` date and `credentialUrl`.

No database, CMS, API, external fonts, or image service is required. The project previews are built from HTML and CSS, so the initial design works offline after installation. Small browser scripts handle theme selection, navigation, and filtering. Theme preference is stored locally, with the system preference used on first visit.

## Deploy

Run `npm run build` and publish `dist/` to a static host. No server adapter is needed. Commit `package-lock.json`; dependencies and generated output are ignored by Git.
