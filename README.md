# Portfolio

A personal portfolio built with React + TypeScript + Vite, deployed to **GitHub Pages** by GitHub Actions.

Live at **https://landinojr.github.io**

## Make it yours

All content lives in [`src/data.ts`](src/data.ts): name, bio, skills, projects, experience and links.
Also update the `<title>` in `index.html` and the initials in `public/favicon.svg`.
To link a résumé, put `resume.pdf` in `public/` and set `resumeUrl: '/resume.pdf'`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages
([`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)).
You can also redeploy by hand from *Actions → Deploy to GitHub Pages → Run workflow*.

GitHub Pages is free for public repos: no billing account and no overage charges.

## Custom domain (optional)

Repo *Settings → Pages → Custom domain*, then add the DNS records GitHub shows at your registrar
and tick *Enforce HTTPS*.
