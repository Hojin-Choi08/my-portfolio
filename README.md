# Hojin Choi — Portfolio

Single-page portfolio built with React + Vite, Tailwind CSS v4 and Motion.

## Run locally

```bash
npm install
cp .env.example .env.local   # then paste your Formspree endpoint
npm run dev                  # http://localhost:5173
npm run build && npm run preview   # test the production build
```

## Editing content

All text, links and project data live in **`src/data/content.js`**. Components only read from it.

- An empty string (`""`) hides the related button, icon or link (project Live/GitHub, socials, resume).
- `SITE_URL` + `seo` are used at build time to generate the `<title>`, meta description, canonical and absolute Open Graph / Twitter URLs in `index.html`.

### Languages (EN / KO)

- Text lives in `content.en` and `content.ko`. `ko` is currently a copy of English: search for `TODO(ko)` and translate in place.
- Links, image paths, colors, tags and project URLs are in the `shared*` blocks at the top, so they're set once for both languages.
- The site starts in the visitor's browser language (falls back to English) and remembers the toggle in `localStorage`.

### Project logos

Put a small square logo in `public/projects/logos/` and set the project's `logo` (e.g. `'/projects/logos/hojicha.svg'`) in the `sharedProjects` block. Empty = hidden.

### Tech stack logos

`src/data/stackIcons.js` maps tech names → logos ([simple-icons](https://simpleicons.org), with [devicon](https://devicon.dev) for Azure). If you add a tech to the stack or a project's `tags`, add a matching key there — unknown names simply show no logo.

### Fonts

- **Gambetta** (display: name, titles, italics) and **SUIT** (body) are self-hosted in `public/fonts/` and declared in `src/index.css`. Only the faces in use are included: Gambetta Regular + Italic, SUIT Regular. Gambetta: [Fontshare](https://www.fontshare.com/fonts/gambetta) (ITF Free Font License). SUIT: SIL OFL, see `public/fonts/SUIT-OFL.txt`.
- **Pretendard** (nav + small labels, weight 500) loads from jsDelivr; **Noto Serif KR** (Korean display fallback) from Google Fonts. Both use `font-display: swap`.
- Change fonts via the `--font-display`, `--font-sans` and `--font-label` variables in `src/index.css`.

## ⚠️ Replace placeholders before deploying

| What | Where |
| --- | --- |
| ~~Profile photo~~ ✅ done | `public/HojinChoiProfilePhoto1.jpg` (path: `sharedProfile.photo`) |
| Project screenshots (8:5, e.g. 1600×1000) | `public/projects/campusshare.jpg`, `hojicha.jpg`, `ttabom.jpg` |
| Social preview image (1200×630) | `public/og-image.png` |
| Resume | add `public/resume.pdf`, then set `profile.resume: '/resume.pdf'` |
| Real domain | `SITE_URL` in `src/data/content.js` |
| Draft copy (bio, skills, project details marked `TODO`) | `src/data/content.js` |
| Korean translation (marked `TODO(ko)`) | `content.ko` in `src/data/content.js` |
| Project logos (optional) | `public/projects/logos/` + `logo` in `sharedProjects` |
| GitHub repo links | `github` in `sharedProjects` |
| Favicon (optional) | `public/favicon.svg` |

## Contact form (Formspree)

1. Create a form at [formspree.io](https://formspree.io) and copy its endpoint (`https://formspree.io/f/xxxxxxx`).
2. Locally: put it in `.env.local` as `VITE_FORMSPREE_ENDPOINT=...`.
3. On Vercel: add the same variable under **Project → Settings → Environment Variables**, then redeploy (Vite inlines env vars at build time).

Without the variable, the form shows its error message and points visitors to the email link.

## Deploy to Vercel

No `vercel.json` needed — Vercel auto-detects Vite (`npm run build` → `dist`).

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project → Import** the repo. Keep the detected defaults.
3. Add the `VITE_FORMSPREE_ENDPOINT` environment variable.
4. Deploy. Then set `SITE_URL` to your final URL (or custom domain), commit and push — Vercel redeploys automatically.

Or from the CLI: `npm i -g vercel && vercel` (then `vercel --prod`).
