# MoGa IT Solutions — Website

Marketing website for **MoGa IT Solutions**, a software studio that builds custom web apps, mobile products, internal systems, analytics tools and workflow automation.

**Live:** [moga-solutions.tech](https://moga-solutions.tech)

## Features

- Bilingual **English / Arabic** UI with full RTL layout support
- Responsive landing page: hero, about, services, process and contact sections
- Contact form connected to a Django REST API (`/api/contact/`) with loading and error states
- Careers page (`/jobs/content_creator`)
- Scroll-triggered animations with Framer Motion

## Tech stack

| Layer      | Tools                                                      |
| ---------- | ---------------------------------------------------------- |
| Frontend   | React 18, TypeScript, React Router 6, Vite                 |
| Styling    | Tailwind CSS 3, Radix UI primitives, Lucide icons          |
| Backend    | Django + Django REST Framework, PostgreSQL (separate repo) |
| Deployment | Nginx on a Linux VPS, GitHub Actions                       |

## Project structure

```
client/
├── pages/            # Route components (Index, JobContentCreator, NotFound)
├── components/site/  # Header, footer, layout, animation helpers
├── components/ui/    # Reusable UI components (Radix + Tailwind)
├── i18n/             # English and Arabic translations
└── App.tsx           # Routing and providers
public/               # Static assets
```

## Getting started

Requires Node.js 22 and pnpm.

```bash
pnpm install
pnpm dev          # start the dev server
pnpm build        # production build to dist/spa
pnpm typecheck    # TypeScript checks
pnpm test         # run tests
```

In development, requests to `/api/*` need the Django backend running; in production Nginx proxies them to it.

## Deployment

Pushing to `main` runs the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and publishes it to the Nginx web root.
