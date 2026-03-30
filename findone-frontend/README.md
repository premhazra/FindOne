# FindOne Frontend

Find Skilled Professionals Instantly.

A production-style React frontend for connecting clients with verified workers, featuring AI-focused discovery UX, dashboard flows, and scalable feature-based architecture.

## Highlights

- Feature-first code organization for long-term scalability
- Reusable shared UI, hooks, utilities, and API client layer
- Smooth, modern UI using Tailwind CSS and Framer Motion
- Role-oriented flows for clients, workers, and admin
- Clean routing setup with lazy-loaded pages

## Tech Stack

- React 18
- Vite 6
- Tailwind CSS 3
- React Router 6
- Zustand
- Axios
- Framer Motion
- Lucide React

## Quick Start

Requirements:

- Node.js 18+
- npm 9+

Install and run:

	npm install
	npm run dev

App will run on:

- Local: http://localhost:3000 (or next available port)
- Network: shown in terminal at startup

## Scripts

- npm run dev: Start development server
- npm run build: Create production build
- npm run preview: Preview production build locally
- npm run lint: Run ESLint checks

## Environment

Create a local environment file from .env.example and configure values as needed.

Common variables:

- VITE_API_BASE_URL
- VITE_APP_NAME

## Architecture

This project follows a clean feature-based structure:

	src/
	|- app/                  # App bootstrap, router, entry points
	|- features/             # Domain modules (auth, home, jobs, dashboard, profile)
	|- shared/               # Reusable cross-feature code
	|  |- components/        # Generic UI and common components
	|  |- hooks/             # Reusable hooks
	|  |- utils/             # Utilities/helpers
	|  |- constants/         # Shared constants and navigation config
	|  |- api/               # Shared Axios client
	|  |- lib/               # Shared framework glue (route guards, etc.)
	|  |- store/             # Shared global state slices
	|- layouts/              # Layout shells (Main, Auth, Dashboard)
	|- assets/               # Fonts, icons, images
	|- styles/               # Global styles
	|- config/               # Site-level configuration

## Feature Modules

- features/auth: Login/Register pages, auth service, auth store
- features/home: Landing page sections and content data
- features/jobs: Jobs page and job/booking services
- features/dashboard: Admin/Client/Worker dashboard pages and messages
- features/profile: Profile page and worker service
- features/misc: Fallback pages (for example, Not Found)

## Design Principles

- Keep domain logic inside its feature module
- Keep reusable code in shared only when truly cross-feature
- Prefer explicit imports over barrel files for clarity
- Keep app and router layer thin and declarative

## Build and Deployment

Production build:

	npm run build

Preview build:

	npm run preview

The app is deploy-ready for static hosting platforms like Vercel, Netlify, or any CDN-backed static server.

## Contribution Guidelines

- Follow existing naming and folder conventions
- Add new business logic under the correct feature module
- Keep shared layer generic and framework-agnostic where possible
- Run lint and build checks before opening a PR

## Project Identity

- Product: FindOne
- Tagline: Find Skilled Professionals Instantly
- Website: https://findone.in
- Contact: hello@findone.in

## License

MIT
