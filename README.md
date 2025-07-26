# MTDV Static

Modern TypeScript boilerplate for Cloudflare Pages with React.

## Features

- ⚡ Vite + React + TypeScript
- 🎨 Tailwind CSS v4
- 🌓 Dark mode support with system detection
- ☁️ Cloudflare Pages deployment ready
- 🔄 SPA routing support

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Cloudflare Pages
npm run deploy
```

## Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to Cloudflare Pages
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
├── public/           # Static assets
│   └── _redirects   # SPA routing config
├── src/
│   ├── components/   # React components
│   │   └── ui/      # UI components
│   ├── contexts/    # React contexts
│   ├── providers/   # Context providers
│   ├── App.tsx      # Main app component
│   ├── main.tsx     # Entry point
│   └── style.css    # Global styles
├── index.html       # HTML template
├── vite.config.ts   # Vite configuration
└── tsconfig.json    # TypeScript config
```

## Deployment

### Option 1: CLI Deployment

```bash
npm run deploy
```

### Option 2: Git Integration

1. Push to GitHub/GitLab
2. Connect repository in Cloudflare Pages dashboard
3. Set build command: `npm run build`
4. Set output directory: `dist`

## Tech Stack

- **Vite** - Next generation frontend tooling
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **Cloudflare Pages** - Static site hosting