# Personal Website

A modern personal portfolio website scaffolded with Vite, TypeScript, and plain CSS.

## Stack

- Vite for fast local development and production builds
- TypeScript for maintainable frontend code
- Plain HTML and CSS for a small, portable site

This stack is intentionally simple so the site can be deployed to GitHub Pages, Vercel, Netlify, or any static host.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
personal-website/
├── index.html
├── package.json
├── README.md
├── src/
│   ├── main.ts
│   └── styles.css
└── tsconfig.json
```

## Content To Customize

- Replace the hero intro with your preferred positioning statement.
- Add real resume experience in the Experience section.
- Swap project placeholders for case studies, demos, or GitHub links.
- Update the skill list to match your strongest capabilities.
- Replace the placeholder email, LinkedIn, and GitHub links.

## Deployment Notes

### Vercel

Vercel can auto-detect Vite projects. Use:

- Build command: `npm run build`
- Output directory: `dist`

### GitHub Pages

For a user or organization site, deploy the `dist` folder after running `npm run build`.

For a project site hosted under a repository path, add a Vite config with the repository name as `base`, then build and deploy `dist`.
