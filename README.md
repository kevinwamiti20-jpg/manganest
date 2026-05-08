# MangaNest

MangaNest is a cinematic, community-driven manga discovery experience built with Astro and Tailwind CSS. The app focuses on fast navigation across discovery surfaces such as Home, Explore, Community, Collections, and manga detail pages.

## Project Description

MangaNest is designed for readers who want to:

- discover new manga quickly,
- track what is trending,
- browse curated collections,
- and use community signals (reviews, discussion, picks) to decide what to read next.

The interface balances expressive visual direction with task-oriented navigation so repeat visits stay fast and predictable.

## Design Source

The current UI direction and page design were created using Google Stitch and adapted in this Astro codebase.

- Stitch project: https://stitch.withgoogle.com/projects/12082988534869457620

## Tech Stack

- Astro 6
- Tailwind CSS 4 (`@tailwindcss/vite`)
- TypeScript config via Astro defaults

## Setup Instructions

1. Install dependencies:

	```bash
	pnpm install
	```

2. Start local development:

	```bash
	pnpm dev
	```

3. Build for production:

	```bash
	pnpm build
	```

4. Preview production build locally:

	```bash
	pnpm preview
	```

## Available Scripts

- `pnpm dev`: start Astro dev server
- `pnpm build`: create production build in `dist/`
- `pnpm preview`: run production preview server
- `pnpm astro ...`: run Astro CLI commands

## Project Structure

```text
.
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```
