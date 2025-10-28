
# LABIFIX React Frontend (labifix-3d-frontend)

This project is a React + Three.js frontend (Vite) for the LABIFIX website demo.
It includes:
- Interactive 3D hero (rotating RF shield boxes)
- Products, Blog, Contact pages
- Brand colors and Audiowide logo (LABIFIX, no space after LABI)

## Quick start
1. `npm install`
2. `npm run dev`  (runs locally)
3. `npm run build` to build production
4. `npm run deploy` to build and publish to GitHub Pages (requires `gh-pages` and that you set `homepage` if needed)

## Deploy to GitHub Pages
- Make repo (e.g., `labifix-3d`)
- Push this project to the repo
- Ensure package.json scripts are available and run `npm run deploy` locally or configure GitHub Actions to build & publish `dist/` to `gh-pages` branch.
