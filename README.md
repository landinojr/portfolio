# Portfolio

A personal portfolio built with React + TypeScript + Vite, deployed to **Azure Static Web Apps** by GitHub Actions.

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

## Deploy to Azure (one-time setup)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<you>/portfolio.git
   git push -u origin main
   ```
   The first workflow run will fail until step 3 is done. That's expected.

2. **Create the Static Web App** in the [Azure portal](https://portal.azure.com):
   - *Create a resource → Static Web App*
   - Plan type: **Free**
   - Deployment source: **Other** (this repo already has its own workflow, so Azure shouldn't add a second one)
   - After it's created, open it and click **Manage deployment token**, then copy the token.

3. **Add the token to GitHub**: repo → *Settings → Secrets and variables → Actions → New repository secret*
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: the token from step 2

4. **Deploy**: repo → *Actions → Deploy to Azure Static Web Apps → Run workflow* (or just push a commit).
   Your site will be live at the URL shown on the Static Web App's *Overview* page.

From then on, every push to `main` redeploys automatically, and every pull request gets its own preview URL.

## Custom domain (optional)

In the Static Web App: *Custom domains → Add*, then add the CNAME/TXT records it shows at your domain registrar. HTTPS is set up automatically.

## Files

| Path | Purpose |
| --- | --- |
| `.github/workflows/azure-static-web-apps.yml` | Builds with Node 20 and uploads `dist/` to Azure |
| `public/staticwebapp.config.json` | SPA fallback, security headers, asset caching |
| `src/data.ts` | All site content |
| `src/components/` | Page sections |
| `src/index.css` | Styles and light/dark theme |
