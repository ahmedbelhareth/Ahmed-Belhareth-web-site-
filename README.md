# Ahmed Belhareth — Portfolio

Personal portfolio of **Ahmed Belhareth** — Senior Software Engineer specialized in **Data, AI & Agents**.

🔗 **Live:** [ahmed-belhareth-cv.netlify.app](https://ahmed-belhareth-cv.netlify.app)

A modern, animated single-page portfolio built from scratch. Fully bilingual (🇫🇷 French / 🇬🇧 English) with a live language toggle.

## ✨ Features

- **Bilingual** — instant FR/EN switch, preference saved to `localStorage`
- **Animated** — constellation particle canvas, scroll-reveal sections, scroll progress bar
- **Responsive** — mobile-first, works from 320px to ultrawide
- **Accessible** — respects `prefers-reduced-motion`, semantic markup, keyboard-friendly nav
- **Fast** — Vite build, ~100 KB gzipped JS
- Sections: Hero · About · Skills · Experience (timeline) · Projects · Education · Languages · Leadership · Contact

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 |
| Build | Vite 6 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11 + custom Canvas |
| Icons | lucide-react |
| Hosting | Netlify |

## 🚀 Local development

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## 📦 Deploy (Netlify)

The repo ships with `netlify.toml` (build command `npm run build`, publish `dist`, SPA fallback + security headers). Connect the repo to Netlify or run:

```bash
npm run build
netlify deploy --prod --dir=dist
```

## 📁 Structure

```
src/
├── main.jsx             # entry + LangProvider
├── App.jsx              # layout + scroll progress
├── index.css            # Tailwind + design tokens
├── data/
│   ├── content.js       # ALL content, bilingual (single source of truth)
│   └── lang.jsx         # language context
└── components/
    ├── Nav.jsx  Hero.jsx  About.jsx  Skills.jsx
    ├── Experience.jsx  Projects.jsx  Education.jsx
    ├── Contact.jsx  Footer.jsx
    ├── Reveal.jsx           # scroll-reveal wrapper
    └── ParticleField.jsx    # constellation canvas
```

To update content, edit **`src/data/content.js`** — every string exists in both `fr` and `en`.

---

© 2026 Ahmed Belhareth
