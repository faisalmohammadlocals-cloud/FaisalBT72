# Free-to-Play Rotating Lanes (Next.js)

This is a single-page Next.js app that displays free-to-play games in continuously rotating lanes, styled with vanilla CSS.

Features:
- Lane-based horizontal scrolling (continuous marquee)
- Placeholder images (placehold.co)
- Responsive layout and platform tags
- Pure CSS styling (no build dependencies)

Run locally:

```bash
npm install
npm run dev
```

Notes:
- Uses vanilla CSS for styling - no Tailwind or CSS-in-JS dependencies
- Files: `data/games.js`, `app/components/GameCard.jsx`, `app/page.jsx`, `styles/globals.css`
#faisal

# Next.js on Netlify Platform Starter

[Live Demo](https://nextjs-platform-starter.netlify.app/)

A modern starter based on Next.js 16 (App Router), Tailwind, and [Netlify Core Primitives](https://docs.netlify.com/core/overview/#develop) (Edge Functions, Image CDN, Blob Store).

In this site, Netlify Core Primitives are used both implictly for running Next.js features (e.g. Route Handlers, image optimization via `next/image`, and more) and also explicitly by the user code.

Implicit usage means you're using any Next.js functionality and everything "just works" when deployed - all the plumbing is done for you. Explicit usage is framework-agnostic and typically provides more features than what Next.js exposes.

## Deploying to Netlify

Click the button below to deploy this template to your Netlify account.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-platform-starter)

## Developing Locally

1. Clone this repository, then run `npm install` in its root directory.

2. For the starter to have full functionality locally (e.g. edge functions, blob store), please ensure you have an up-to-date version of Netlify CLI. Run:

```
npm install netlify-cli@latest -g
```

3. Link your local repository to the deployed Netlify site. This will ensure you're using the same runtime version for both local development and your deployed site.

```
netlify link
```

4. Then, run the Next.js development server via Netlify CLI:

```
netlify dev
```

If your browser doesn't navigate to the site automatically, visit [localhost:8888](http://localhost:8888).

## Resources

- Check out the [Next.js on Netlify docs](https://docs.netlify.com/frameworks/next-js/overview/)
