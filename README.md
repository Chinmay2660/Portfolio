# Chinmay Bhoir | Portfolio

A personal portfolio site built with **Next.js**, **React**, and **TypeScript**. Showcases experience, projects, skills, and contact information with a responsive, theme-aware UI and smooth animations.

**Live:** [chinmaybhoir.vercel.app](https://chinmaybhoir.vercel.app)

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **UI:** [React 19](https://react.dev), [Tailwind CSS 4](https://tailwindcss.com)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Analytics:** [Vercel Analytics](https://vercel.com/analytics)
- **Icons:** [Font Awesome](https://fontawesome.com)
- **Fonts:** Geist Sans & Geist Mono (local)

---

## Features

- **Hero** – Intro, role, and social links (GitHub, LinkedIn, LeetCode, etc.)
- **Projects** – Highlighted work with links and tech stack
- **Journey** – Career and education timeline
- **Skills** – Categorized tech skills
- **Contact** – Get in touch section
- **Theme** – Light/dark mode with system preference and manual toggle
- **Offline banner** – Notice when the user is offline
- **Error boundary** – Graceful error handling and fallback UI
- **Scroll to top** – Button to return to top on long scroll
- **SEO** – Metadata, Open Graph, Twitter cards, JSON-LD (Person schema)
- **Analytics** – Vercel Analytics for usage insights

---

## Getting Started

### Prerequisites

- **Node.js** 18.18+ (or 20+)
- **npm**, **yarn**, **pnpm**, or **bun**

### Install & run

```bash
# Install dependencies
npm install

# Start development server (with Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start dev server (Turbopack) |
| `npm run build`| Production build        |
| `npm run start`| Start production server  |
| `npm run lint` | Run ESLint               |

---

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout, metadata, theme script, providers
│   ├── page.tsx        # Home: Hero, Projects, Contact sections
│   ├── globals.css     # Global styles
│   └── fonts/          # Geist Sans & Geist Mono (local)
├── components/
│   ├── Hero.tsx
│   ├── ProjectSection.tsx
│   ├── ProjectCard.tsx
│   ├── Journey.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   ├── Navbar/         # Nav + mobile menu + nav links
│   ├── Footer.tsx
│   ├── ScrollToTop.tsx
│   ├── ErrorBoundary.tsx
│   ├── OfflineBanner.tsx
│   └── ui/
│       └── GradientBorder.tsx
├── context/
│   └── ThemeContext.tsx
├── lib/
│   ├── motion.ts       # Framer Motion presets
│   └── constants.ts
├── utils/
│   ├── data.ts         # Projects, journey, skills, social links
│   └── icons.tsx
└── types/              # TypeScript types
```

Content (projects, journey, skills, social links) is driven by `utils/data.ts`; update that file to change what appears on the site.

---

## Environment

Optional:

- **`NEXT_PUBLIC_SITE_URL`** – Canonical site URL (default: `https://chinmaybhoir.vercel.app`). Used for metadata and Open Graph.

---

## Deploy

The app is set up for [Vercel](https://vercel.com). Push to your repo and connect the project; Vercel will build and deploy on each push.

- [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying)
- [Deploy on Vercel](https://vercel.com/new)

---

## License

Private / personal use. All rights reserved.
